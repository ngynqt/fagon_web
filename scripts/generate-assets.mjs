import fs from 'node:fs';
import path from 'node:path';

const publicDir = path.resolve('public');
const demosDir = path.join(publicDir, 'assets', 'demos');
fs.mkdirSync(demosDir, { recursive: true });

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// 1. Favicon SVG
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="14" fill="#191B18"/>
  <path d="M18 16h28v8H27v9h15v8H27v13h-9V16z" fill="#F6F3EB"/>
  <circle cx="45" cy="45" r="7" fill="#C5F53C"/>
</svg>`;
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), faviconSvg, 'utf8');

// 2. OpenGraph default image SVG
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <rect width="1200" height="630" fill="#F6F3EB"/>
  <g stroke="#191B18" stroke-opacity="0.08" stroke-width="1">
    <line x1="80" y1="0" x2="80" y2="630"/>
    <line x1="1120" y1="0" x2="1120" y2="630"/>
    <line x1="0" y1="90" x2="1200" y2="90"/>
    <line x1="0" y1="540" x2="1200" y2="540"/>
  </g>
  <rect x="80" y="90" width="260" height="42" rx="21" fill="#191B18"/>
  <circle cx="106" cy="111" r="6" fill="#C5F53C"/>
  <text x="124" y="117" font-family="sans-serif" font-size="15" font-weight="700" fill="#F6F3EB" letter-spacing="1.5">SÁNG TẠO × CÔNG NGHỆ</text>
  <text x="80" y="250" font-family="Georgia, serif" font-size="78" font-weight="700" fill="#191B18">Fagon Studio</text>
  <text x="80" y="335" font-family="sans-serif" font-size="36" font-weight="500" fill="#191B18">Ảnh, video, slide, website &amp; trò chơi tương tác</text>
  <text x="80" y="395" font-family="sans-serif" font-size="26" fill="#72756C">Biến ý tưởng thành sản phẩm phù hợp với mục tiêu của bạn.</text>
  <g transform="translate(80, 455)">
    <rect x="0" y="0" width="145" height="44" rx="8" fill="#C5F53C" stroke="#191B18" stroke-width="1.5"/>
    <text x="72" y="28" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="#191B18">Giáo viên</text>
    <rect x="160" y="0" width="180" height="44" rx="8" fill="#FFFFFF" stroke="#191B18" stroke-width="1.5"/>
    <text x="250" y="28" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="600" fill="#191B18">Người bán hàng</text>
    <rect x="355" y="0" width="150" height="44" rx="8" fill="#FFFFFF" stroke="#191B18" stroke-width="1.5"/>
    <text x="430" y="28" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="600" fill="#191B18">Văn phòng</text>
    <rect x="520" y="0" width="140" height="44" rx="8" fill="#FFFFFF" stroke="#191B18" stroke-width="1.5"/>
    <text x="590" y="28" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="600" fill="#191B18">Sinh viên</text>
    <rect x="675" y="0" width="215" height="44" rx="8" fill="#FFFFFF" stroke="#191B18" stroke-width="1.5"/>
    <text x="782" y="28" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="600" fill="#191B18">Sáng tạo &amp; Cá nhân</text>
  </g>
</svg>`;
fs.writeFileSync(path.join(publicDir, 'og-image.svg'), ogSvg, 'utf8');

// 3. Before / After SVG pair for THE EXACT SAME GARMENT (Tailored Cream Linen Double-Breasted Blazer)
const blazerBeforeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 720" width="600" height="720" role="img" aria-label="Ảnh minh họa áo Blazer Linen màu kem treo trên móc gỗ trước khi lên dáng">
  <rect width="600" height="720" fill="#EAE6DC"/>
  <g stroke="#191B18" stroke-opacity="0.06" stroke-width="1">
    <line x1="0" y1="120" x2="600" y2="120"/>
    <line x1="0" y1="620" x2="600" y2="620"/>
    <line x1="100" y1="0" x2="100" y2="720"/>
    <line x1="500" y1="0" x2="500" y2="720"/>
  </g>
  <rect x="28" y="26" width="236" height="34" rx="17" fill="#191B18"/>
  <text x="146" y="48" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#F6F3EB" letter-spacing="1">TRƯỚC • ẢNH CHỤP TREO MÓC</text>
  <rect x="420" y="26" width="152" height="34" rx="6" fill="#F6F3EB" stroke="#191B18" stroke-width="1.2"/>
  <text x="496" y="48" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="600" fill="#72756C">Demo minh họa</text>

  <line x1="80" y1="105" x2="520" y2="105" stroke="#72756C" stroke-width="4"/>
  <path d="M300 105 C300 82, 326 82, 320 96 C315 106, 300 112, 300 128" fill="none" stroke="#191B18" stroke-width="4" stroke-linecap="round"/>
  <path d="M210 165 L300 126 L390 165 Z" fill="#8C6D46" stroke="#191B18" stroke-width="2.5"/>

  <g transform="translate(0, 10)">
    <polygon points="245,155 355,155 340,220 260,220" fill="#DED9CC" stroke="#191B18" stroke-width="2"/>
    <rect x="282" y="168" width="36" height="16" rx="2" fill="#191B18"/>
    <line x1="290" y1="176" x2="310" y2="176" stroke="#C5F53C" stroke-width="2"/>

    <path d="M196 164 L148 450 L195 456 L222 250 Z" fill="#F6F3EB" stroke="#191B18" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M404 164 L452 450 L405 456 L378 250 Z" fill="#F6F3EB" stroke="#191B18" stroke-width="2.5" stroke-linejoin="round"/>
    <circle cx="162" cy="432" r="3.5" fill="#191B18"/>
    <circle cx="165" cy="442" r="3.5" fill="#191B18"/>
    <circle cx="438" cy="432" r="3.5" fill="#191B18"/>
    <circle cx="435" cy="442" r="3.5" fill="#191B18"/>

    <path d="M196 164 L248 152 L300 265 L352 152 L404 164 L392 505 L302 512 L208 505 Z" fill="#FBF9F4" stroke="#191B18" stroke-width="2.5" stroke-linejoin="round"/>

    <polygon points="248,152 218,215 236,222 226,245 300,320 300,265" fill="#F2EFE6" stroke="#191B18" stroke-width="2.2"/>
    <polygon points="352,152 382,215 364,222 374,245 300,320 300,265" fill="#F2EFE6" stroke="#191B18" stroke-width="2.2"/>
    <line x1="300" y1="265" x2="318" y2="510" stroke="#191B18" stroke-width="2"/>

    <circle cx="276" cy="348" r="6.5" fill="#191B18" stroke="#C5F53C" stroke-width="1.5"/>
    <circle cx="324" cy="348" r="6.5" fill="#191B18" stroke="#C5F53C" stroke-width="1.5"/>
    <circle cx="276" cy="402" r="6.5" fill="#191B18" stroke="#C5F53C" stroke-width="1.5"/>
    <circle cx="324" cy="402" r="6.5" fill="#191B18" stroke="#C5F53C" stroke-width="1.5"/>

    <rect x="330" y="262" width="40" height="8" rx="2" fill="#EAE6DC" stroke="#191B18" stroke-width="1.8"/>
    <rect x="218" y="425" width="54" height="20" rx="2" fill="#F2EFE6" stroke="#191B18" stroke-width="2"/>
    <rect x="328" y="425" width="54" height="20" rx="2" fill="#F2EFE6" stroke="#191B18" stroke-width="2"/>
  </g>

  <rect x="40" y="575" width="520" height="110" rx="12" fill="#F6F3EB" stroke="#191B18" stroke-width="1.5"/>
  <text x="64" y="608" font-family="sans-serif" font-size="15" font-weight="700" fill="#191B18">Đầu vào: Ảnh chụp áo Blazer Linen treo móc phẳng</text>
  <text x="64" y="634" font-family="sans-serif" font-size="13" fill="#72756C">• Giữ rõ cấu trúc cổ ve chữ K, 4 cúc sừng 2 hàng, 2 túi nắp hông và túi ngực.</text>
  <text x="64" y="658" font-family="sans-serif" font-size="13" fill="#72756C">• Hạn chế khi chưa lên mẫu: Khách khó hình dung độ ôm vai và phom dáng khi mặc.</text>
</svg>`;

const blazerAfterSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 720" width="600" height="720" role="img" aria-label="Ảnh minh họa cùng mẫu áo Blazer Linen màu kem sau khi lên dáng người mẫu studio">
  <rect width="600" height="720" fill="#F6F3EB"/>
  <path d="M115 560 L115 240 A185 185 0 0 1 485 240 L485 560 Z" fill="#EAE5D9" stroke="#191B18" stroke-width="1.5"/>
  <polygon points="485,150 600,90 600,390 485,440" fill="#C5F53C" fill-opacity="0.16"/>

  <rect x="28" y="26" width="266" height="34" rx="17" fill="#C5F53C" stroke="#191B18" stroke-width="1.5"/>
  <text x="161" y="48" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#191B18" letter-spacing="0.8">SAU • LÊN DÁNG NGƯỜI MẪU STUDIO</text>
  <rect x="420" y="26" width="152" height="34" rx="6" fill="#191B18"/>
  <text x="496" y="48" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="600" fill="#C5F53C">Demo minh họa</text>

  <g transform="translate(0, 8)">
    <path d="M262 98 C262 66, 338 66, 338 98 C342 128, 348 152, 332 162 L268 162 C252 152, 258 128, 262 98 Z" fill="#191B18"/>
    <path d="M275 94 C275 76, 325 76, 325 94 L323 128 C323 144, 312 154, 300 154 C288 154, 277 144, 277 128 Z" fill="#E8D2B9" stroke="#191B18" stroke-width="2"/>
    <rect x="286" y="148" width="28" height="26" fill="#E8D2B9" stroke="#191B18" stroke-width="2"/>
    <polygon points="262,166 338,166 300,275" fill="#191B18"/>

    <path d="M225 495 L235 565 L292 565 L300 515 L308 565 L365 565 L375 495 Z" fill="#191B18"/>

    <path d="M192 172 C164 250, 156 330, 184 428 L224 418 C206 340, 212 275, 226 235 Z" fill="#FBF9F4" stroke="#191B18" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M408 172 C436 250, 444 330, 416 428 L376 418 C394 340, 388 275, 374 235 Z" fill="#FBF9F4" stroke="#191B18" stroke-width="2.5" stroke-linejoin="round"/>
    <circle cx="176" cy="404" r="3.5" fill="#191B18"/>
    <circle cx="180" cy="414" r="3.5" fill="#191B18"/>
    <circle cx="424" cy="404" r="3.5" fill="#191B18"/>
    <circle cx="420" cy="414" r="3.5" fill="#191B18"/>

    <path d="M192 172 L254 156 L300 268 L346 156 L408 172 L374 275 L364 345 L386 502 L300 510 L214 502 L236 345 L226 275 Z" fill="#FBF9F4" stroke="#191B18" stroke-width="2.5" stroke-linejoin="round"/>

    <path d="M244 330 Q260 355 248 395" fill="none" stroke="#72756C" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M356 330 Q340 355 352 395" fill="none" stroke="#72756C" stroke-width="1.5" stroke-linecap="round"/>

    <polygon points="254,156 220,216 238,224 228,248 300,322 300,268" fill="#F2EFE6" stroke="#191B18" stroke-width="2.2"/>
    <polygon points="346,156 380,216 362,224 372,248 300,322 300,268" fill="#F2EFE6" stroke="#191B18" stroke-width="2.2"/>
    <line x1="300" y1="268" x2="316" y2="508" stroke="#191B18" stroke-width="2"/>

    <circle cx="276" cy="348" r="6.5" fill="#191B18" stroke="#C5F53C" stroke-width="1.5"/>
    <circle cx="324" cy="348" r="6.5" fill="#191B18" stroke="#C5F53C" stroke-width="1.5"/>
    <circle cx="276" cy="402" r="6.5" fill="#191B18" stroke="#C5F53C" stroke-width="1.5"/>
    <circle cx="324" cy="402" r="6.5" fill="#191B18" stroke="#C5F53C" stroke-width="1.5"/>

    <rect x="328" y="262" width="40" height="8" rx="2" fill="#EAE6DC" stroke="#191B18" stroke-width="1.8"/>
    <rect x="224" y="425" width="52" height="20" rx="2" fill="#F2EFE6" stroke="#191B18" stroke-width="2"/>
    <rect x="324" y="425" width="52" height="20" rx="2" fill="#F2EFE6" stroke="#191B18" stroke-width="2"/>
  </g>

  <g font-family="sans-serif" font-size="11" font-weight="700">
    <rect x="34" y="218" width="128" height="28" rx="6" fill="#191B18"/>
    <text x="98" y="236" text-anchor="middle" fill="#C5F53C">Giữ đúng cổ ve chữ K</text>
    <line x1="162" y1="232" x2="225" y2="232" stroke="#191B18" stroke-width="1.5" stroke-dasharray="3,3"/>

    <rect x="424" y="340" width="146" height="28" rx="6" fill="#191B18"/>
    <text x="497" y="358" text-anchor="middle" fill="#C5F53C">Đúng 4 cúc &amp; 2 túi nắp</text>
    <line x1="334" y1="354" x2="424" y2="354" stroke="#191B18" stroke-width="1.5" stroke-dasharray="3,3"/>
  </g>

  <rect x="40" y="575" width="520" height="110" rx="12" fill="#191B18"/>
  <text x="64" y="608" font-family="sans-serif" font-size="15" font-weight="700" fill="#C5F53C">Đầu ra: Lên dáng người mẫu Studio (Duyệt ảnh trước khi làm video)</text>
  <text x="64" y="634" font-family="sans-serif" font-size="13" fill="#F6F3EB">• Thể hiện rõ độ đứng phom vai, chiều dài áo và chất liệu linen dưới ánh sáng studio.</text>
  <text x="64" y="658" font-family="sans-serif" font-size="13" fill="#EAE6DC">• Minh bạch: Luôn gửi ảnh tĩnh để chủ shop duyệt kỹ trước khi kết xuất chuyển động.</text>
</svg>`;

fs.writeFileSync(path.join(demosDir, 'shop-before-hanger.svg'), blazerBeforeSvg, 'utf8');
fs.writeFileSync(path.join(demosDir, 'shop-after-model.svg'), blazerAfterSvg, 'utf8');

const demoCards = [
  {
    file: 'edu-slide-preview.svg',
    badge: 'DEMO MINH HỌA • SLIDE BÀI GIẢNG 16:9',
    title: 'Bài 12: Các nguồn năng lượng tái tạo',
    subtitle: 'Bố cục chữ lớn, sơ đồ trực quan giúp học sinh cuối lớp theo dõi rõ',
    boxes: ['01. Khởi động tình huống', '02. Sơ đồ Năng lượng Mặt trời & Gió', '03. Thảo luận nhóm 3 phút'],
  },
  {
    file: 'edu-storyboard.svg',
    badge: 'DEMO MINH HỌA • STORYBOARD 4 CẢNH',
    title: 'Tình huống Học đường: Lắng nghe khi làm việc nhóm',
    subtitle: 'Bảng phân cảnh & lời thoại duyệt trước khi sản xuất hoạt hình bài giảng',
    boxes: ['Cảnh 1: Giao nhiệm vụ nhóm', 'Cảnh 2: Hai ý kiến trái chiều', 'Cảnh 3: Cùng tổng hợp phương án'],
  },
  {
    file: 'shop-product-cgi.svg',
    badge: 'DEMO MINH HỌA • ẢNH SẢN PHẨM & CGI',
    title: 'Phối cảnh Bệ đá & Ánh sáng Studio cho Mỹ phẩm / Phụ kiện',
    subtitle: 'Tách nền sạch từ ảnh chụp gốc, tạo bóng đổ tự nhiên và không gian sang trọng',
    boxes: ['Tách nền chuẩn viền sản phẩm', 'Bối cảnh bệ đá & ánh nắng xiên', 'Đa tỷ lệ 1:1, 4:5 và 16:9'],
  },
  {
    file: 'shop-video-concept.svg',
    badge: 'DEMO MINH HỌA • KỊCH BẢN VIDEO 25 GIÂY',
    title: 'Cấu trúc Video Quảng cáo Thời trang 9:16',
    subtitle: 'Chuyển cảnh mượt mà, giọng đọc tự nhiên và phụ đề nhấn điểm bán hàng',
    boxes: ['00–03s: Hook biến hình lên dáng', '03–18s: 3 góc máy & cận chất vải', '18–25s: Bảng màu & Kêu gọi hành động'],
  },
  {
    file: 'shop-lookbook-ui.svg',
    badge: 'GIAO DIỆN MINH HỌA • WEBSITE LOOKBOOK',
    title: 'Lookbook Bộ sưu tập Thu Đông — Minimalist Atelier',
    subtitle: 'Giao diện web xem bộ sưu tập tối ưu cho điện thoại kèm thông số chất liệu & bảng size',
    boxes: ['Trình bày ảnh Lookbook cỡ lớn', 'Thông tin chất vải & cách chọn size', 'Nút gửi yêu cầu tư vấn nhanh'],
  },
  {
    file: 'office-report-slide.svg',
    badge: 'DEMO MINH HỌA • DỮ LIỆU MINH HỌA',
    title: 'Slide Báo cáo Quý & Đề xuất Chuẩn hóa Quy trình',
    subtitle: 'Trình bày tóm tắt điều hành (Executive Summary) và biểu đồ so sánh rõ trọng tâm',
    boxes: ['KPI Minh họa: Rút ngắn 35% thời gian chờ', 'Biểu đồ Trước & Sau chuẩn hóa', 'Lộ trình triển khai 3 giai đoạn'],
  },
  {
    file: 'office-infographic.svg',
    badge: 'DEMO MINH HỌA • INFOGRAPHIC QUY TRÌNH',
    title: 'Sơ đồ Phối hợp Liên phòng ban 5 bước',
    subtitle: 'Chuyển văn bản quy định dài thành sơ đồ luồng công việc dễ tra cứu',
    boxes: ['Bước 1–2: Tiếp nhận & Phân loại', 'Bước 3–4: Xử lý & Kiểm tra chéo', 'Bước 5: Bàn giao & Lưu trữ'],
  },
  {
    file: 'student-deck.svg',
    badge: 'DEMO MINH HỌA • SLIDE ĐỒ ÁN SINH VIÊN',
    title: 'Khung Trình bày Bảo vệ Khóa luận & Đồ án',
    subtitle: 'Sắp xếp nội dung và số liệu do sinh viên chuẩn bị thành mạch thuyết trình thuyết phục',
    boxes: ['Đặt vấn đề & Mục tiêu nghiên cứu', 'Sơ đồ phương pháp thực hiện', 'Kết quả thực tế & Kết luận'],
  },
  {
    file: 'student-poster.svg',
    badge: 'DEMO MINH HỌA • ACADEMIC POSTER A1',
    title: 'Bố cục Poster Triển lãm Đồ án & Ấn phẩm CLB',
    subtitle: 'Phân cột khoa học, dễ đọc từ khoảng cách 1.5m trong buổi chấm poster',
    boxes: ['Tiêu đề & Tóm tắt nghiên cứu', 'Sơ đồ kiến trúc / quy trình trung tâm', 'Kết quả & Mã QR tài liệu tham khảo'],
  },
  {
    file: 'student-portfolio-ui.svg',
    badge: 'GIAO DIỆN MINH HỌA • WEB PORTFOLIO',
    title: 'Website Hồ sơ Năng lực Cá nhân cho Sinh viên',
    subtitle: 'Tổng hợp đồ án môn học, kỹ năng và liên hệ trong 1 đường link gọn gàng gửi nhà tuyển dụng',
    boxes: ['Giới thiệu định hướng nghề nghiệp', 'Danh mục đồ án & Vai trò thực tế', 'Tải CV PDF & Liên hệ trực tiếp'],
  },
  {
    file: 'creator-character.svg',
    badge: 'DEMO MINH HỌA • CHARACTER SHEET',
    title: 'Hồ sơ Nhân vật & Bảng Biểu cảm Đồng bộ',
    subtitle: 'Giữ nét mặt, kiểu tóc và trang phục nhất quán qua nhiều tập truyện và ảnh bìa kênh',
    boxes: ['3 góc đứng: Chính diện, 3/4, Nghiêng', '4 biểu cảm khuôn mặt đặc trưng', 'Bảng mã màu trang phục cố định'],
  },
  {
    file: 'creator-storyboard.svg',
    badge: 'DEMO MINH HỌA • STORYBOARD KỂ CHUYỆN',
    title: 'Phân cảnh Video Kể chuyện & Kỷ niệm Cá nhân',
    subtitle: 'Biên tập lời dẫn, nhịp điệu ánh sáng và khung hình duyệt trước khi dựng chuyển động',
    boxes: ['Khung 1: Mở đầu gợi không gian', 'Khung 2: Cao trào cảm xúc câu chuyện', 'Khung 3: Lời nhắn kết & Âm nhạc lắng đọng'],
  },
];

for (const item of demoCards) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500" role="img" aria-label="${esc(item.title)}">
  <rect width="800" height="500" rx="16" fill="#F6F3EB" stroke="#191B18" stroke-width="2"/>
  <rect x="28" y="28" width="340" height="32" rx="16" fill="#191B18"/>
  <circle cx="48" cy="44" r="5" fill="#C5F53C"/>
  <text x="64" y="49" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#F6F3EB" letter-spacing="0.8">${esc(item.badge)}</text>
  <text x="28" y="108" font-family="Georgia, serif" font-size="28" font-weight="700" fill="#191B18">${esc(item.title)}</text>
  <text x="28" y="144" font-family="sans-serif" font-size="15" fill="#72756C">${esc(item.subtitle)}</text>
  <line x1="28" y1="172" x2="772" y2="172" stroke="#191B18" stroke-opacity="0.15" stroke-width="1.5"/>
  <g transform="translate(28, 198)">
    <rect x="0" y="0" width="232" height="210" rx="12" fill="#FFFFFF" stroke="#191B18" stroke-width="1.5"/>
    <rect x="18" y="18" width="38" height="24" rx="6" fill="#C5F53C"/>
    <text x="37" y="35" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#191B18">01</text>
    <text x="18" y="74" font-family="sans-serif" font-size="14" font-weight="700" fill="#191B18">${esc(item.boxes[0])}</text>
    <rect x="18" y="102" width="196" height="10" rx="5" fill="#EAE6DC"/>
    <rect x="18" y="122" width="150" height="10" rx="5" fill="#EAE6DC"/>
    <rect x="18" y="152" width="196" height="36" rx="6" fill="#F6F3EB" stroke="#191B18" stroke-opacity="0.2"/>

    <rect x="256" y="0" width="232" height="210" rx="12" fill="#FFFFFF" stroke="#191B18" stroke-width="1.5"/>
    <rect x="274" y="18" width="38" height="24" rx="6" fill="#C5F53C"/>
    <text x="293" y="35" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#191B18">02</text>
    <text x="274" y="74" font-family="sans-serif" font-size="14" font-weight="700" fill="#191B18">${esc(item.boxes[1])}</text>
    <rect x="274" y="102" width="196" height="10" rx="5" fill="#EAE6DC"/>
    <rect x="274" y="122" width="165" height="10" rx="5" fill="#EAE6DC"/>
    <rect x="274" y="152" width="196" height="36" rx="6" fill="#F6F3EB" stroke="#191B18" stroke-opacity="0.2"/>

    <rect x="512" y="0" width="232" height="210" rx="12" fill="#191B18"/>
    <rect x="530" y="18" width="38" height="24" rx="6" fill="#C5F53C"/>
    <text x="549" y="35" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#191B18">03</text>
    <text x="530" y="74" font-family="sans-serif" font-size="14" font-weight="700" fill="#F6F3EB">${esc(item.boxes[2])}</text>
    <rect x="530" y="102" width="196" height="10" rx="5" fill="#72756C" fill-opacity="0.4"/>
    <rect x="530" y="122" width="140" height="10" rx="5" fill="#72756C" fill-opacity="0.4"/>
    <rect x="530" y="152" width="196" height="36" rx="6" fill="#C5F53C" fill-opacity="0.15" stroke="#C5F53C" stroke-opacity="0.5"/>
  </g>
  <text x="28" y="458" font-family="sans-serif" font-size="12.5" fill="#72756C">Fagon Studio — Đồ họa bố cục minh họa cấu trúc thành phẩm (không giả định dự án khách hàng thật)</text>
</svg>`;
  fs.writeFileSync(path.join(demosDir, item.file), svg, 'utf8');
}

console.log('Generated all XML-valid SVG assets in public/ and public/assets/demos/.');
