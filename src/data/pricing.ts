export interface VideoPricingTier {
  id: string;
  name: string;
  duration: string;
  badge?: string;
  originalMin: number;
  originalMax: number;
  unit: string;
  inputRequirement: string;
  deliverables: string[];
}

export interface PromoConfig {
  enabled: boolean;
  discountPercent: number; // e.g. 70 means 70% off
  expiresAtIso: string; // '2026-10-21T00:00:00+07:00'
  expiresDisplayLabel: string; // 'hết 20/10/2026 (UTC+7)'
  scopeNote: string;
}

export const shopVideoPromoConfig: PromoConfig = {
  enabled: true,
  discountPercent: 70,
  expiresAtIso: '2026-10-21T00:00:00+07:00',
  expiresDisplayLabel: '20/10/2026 (UTC+7)',
  scopeNote:
    'Ưu đãi giảm 70% chỉ áp dụng cho 3 gói video phục vụ shop bên dưới đến hết ngày 20/10/2026 (múi giờ Việt Nam UTC+7). Không áp dụng tự động cho slide, website, trò chơi tương tác hoặc các hạng mục sản xuất theo yêu cầu riêng.',
};

export const shopVideoPricingTiers: VideoPricingTier[] = [
  {
    id: 'video-shop-co-ban',
    name: 'Gói Cơ bản',
    duration: '5–10 giây',
    originalMin: 150000,
    originalMax: 250000,
    unit: 'video',
    inputRequirement: 'Đã có ảnh người mẫu hoặc ảnh chụp ma-nơ-canh rõ dáng.',
    deliverables: [
      'Tạo chuyển động tự nhiên từ ảnh người mẫu / ma-nơ-canh sẵn có',
      'Ghép nhạc nền phù hợp tinh thần sản phẩm',
      'Xuất video dọc hoặc vuông sẵn sàng đăng mạng xã hội / sàn TMĐT',
    ],
  },
  {
    id: 'video-shop-tieu-chuan',
    name: 'Gói Tiêu chuẩn',
    duration: '15–20 giây',
    badge: 'Phổ biến cho Shop',
    originalMin: 350000,
    originalMax: 600000,
    unit: 'video',
    inputRequirement: 'Ảnh chụp sản phẩm treo móc hoặc trải sàn phẳng, đủ sáng và rõ form.',
    deliverables: [
      'Lên dáng người mẫu AI phù hợp phong cách thương hiệu (duyệt ảnh trước khi làm video)',
      'Kết hợp 2–3 góc máy / chuyển cảnh mượt mà',
      'Dựng hoàn chỉnh kèm nhạc nền và nhịp cắt gọn gàng',
    ],
  },
  {
    id: 'video-shop-quang-cao',
    name: 'Gói Quảng cáo',
    duration: '20–40 giây',
    originalMin: 700000,
    originalMax: 1500000,
    unit: 'video',
    inputRequirement: 'Ảnh sản phẩm đa góc + thông điệp bán hàng hoặc điểm nổi bật cần nhấn mạnh.',
    deliverables: [
      'Xây dựng kịch bản mở đầu thu hút (hook) theo sản phẩm',
      'Tích hợp giọng đọc (voiceover) hoặc nhép môi nhân vật',
      'Triển khai 3–4 bối cảnh trực quan kèm phụ đề hoàn chỉnh',
    ],
  },
];

export const pricingTermsNotes: string[] = [
  'Giá cuối cùng phụ thuộc vào chất lượng ảnh đầu vào và yêu cầu chi tiết của từng mẫu.',
  'Trang phục có họa tiết phức tạp (ren mảnh, caro nhỏ, thêu chi tiết, logo nhỏ) phụ thu 30–50% để xử lý kỹ.',
  'Đặt cọc 50–100% giá trị đơn hàng theo thỏa thuận trước khi thực hiện.',
  'Tối đa 02 lượt chỉnh sửa trong phạm vi phương án đã chốt.',
  'Combo định kỳ 5 mẫu hoặc 15 mẫu mỗi tháng: Nhận báo giá riêng tối ưu theo số lượng.',
  'Ảnh tĩnh người mẫu được tặng kèm theo phạm vi gói combo đã xác nhận.',
];

export const customQuoteNotice = {
  title: 'Nhận báo giá theo yêu cầu',
  description:
    'Với các hạng mục ảnh lẻ, slide bài giảng, báo cáo văn phòng, đồ án sinh viên, kịch bản nhân vật, website giới thiệu/Lookbook và trò chơi tương tác: Fagon báo giá riêng sau khi nắm rõ khối lượng nội dung, định dạng đầu ra và thời gian mong muốn.',
};

/**
 * Pure calculation helper used both on client-side runtime and automated tests.
 * Computes discounted price integer from original price and discountPercent.
 */
export function calculateDiscountedPrice(originalAmount: number, discountPercent: number): number {
  const factor = (100 - discountPercent) / 100;
  return Math.round(originalAmount * factor);
}

/**
 * Formats integer VND amount with dot separator (e.g. 150000 -> "150.000")
 */
export function formatVndNumber(amount: number): string {
  return Math.round(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

/**
 * Formats a min-max VND range (e.g. 45000, 75000 -> "45.000–75.000đ")
 */
export function formatVndRange(minAmount: number, maxAmount: number): string {
  return `${formatVndNumber(minAmount)}–${formatVndNumber(maxAmount)}đ`;
}

/**
 * Checks whether the promotion is active at a given reference time (Date or timestamp).
 * Promo ends strictly at or after 2026-10-21T00:00:00+07:00.
 */
export function isPromoActiveAt(
  referenceTime: Date | number | string = new Date(),
  config: PromoConfig = shopVideoPromoConfig
): boolean {
  if (!config.enabled) return false;
  const nowMs =
    typeof referenceTime === 'number'
      ? referenceTime
      : new Date(referenceTime).getTime();
  const expiryMs = new Date(config.expiresAtIso).getTime();
  if (Number.isNaN(nowMs) || Number.isNaN(expiryMs)) return false;
  return nowMs < expiryMs;
}

export interface EvaluatedTierPricing {
  tierId: string;
  isPromoActive: boolean;
  originalRangeText: string;
  discountedMin: number;
  discountedMax: number;
  discountedRangeText: string;
  activeRangeText: string;
}

export function evaluateTierPricing(
  tier: VideoPricingTier,
  referenceTime: Date | number | string = new Date(),
  config: PromoConfig = shopVideoPromoConfig
): EvaluatedTierPricing {
  const active = isPromoActiveAt(referenceTime, config);
  const discountedMin = calculateDiscountedPrice(tier.originalMin, config.discountPercent);
  const discountedMax = calculateDiscountedPrice(tier.originalMax, config.discountPercent);
  const originalRangeText = formatVndRange(tier.originalMin, tier.originalMax);
  const discountedRangeText = formatVndRange(discountedMin, discountedMax);

  return {
    tierId: tier.id,
    isPromoActive: active,
    originalRangeText,
    discountedMin,
    discountedMax,
    discountedRangeText,
    activeRangeText: active ? discountedRangeText : originalRangeText,
  };
}
