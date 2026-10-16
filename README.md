# Fagon Website — Studio Sáng Tạo × Công Nghệ

Mã nguồn chính thức của website **Fagon** (xây dựng bằng **Astro 5 + TypeScript**, xuất bản tĩnh HTML/CSS chuẩn SEO, ít JavaScript, tách biệt hoàn toàn dữ liệu cấu hình và giao diện).

---

## 1. Yêu cầu môi trường & Cách chạy dự án

### Khai báo môi trường
- **Node.js**: `>= 20.0.0` (đã kiểm tra trên `v24.21.0`, khai báo trong `.nvmrc` và `package.json`).
- **Trình quản lý gói**: `pnpm` (thông qua `corepack pnpm`) hoặc `npm`.

> **Lưu ý trên máy hiện tại**: Nếu mở PowerShell mới mà lệnh `node` chưa có sẵn trong `PATH` mặc định của Windows, hãy chạy dòng lệnh nạp đường dẫn Node có sẵn trên máy trước:
> ```powershell
> $env:Path = "C:\Users\DELL\AppData\Local\OpenAI\Codex\runtimes\cua_node\a9ba6825a525118c\bin;" + $env:Path
> ```

### Các lệnh làm việc chính
```powershell
# 1. Cài đặt phụ thuộc (dependencies)
corepack pnpm install

# 2. Chạy máy chủ phát triển (xem thử trực tiếp tại http://localhost:4321)
corepack pnpm run dev

# 3. Kiểm tra kiểu TypeScript & Build xuất bản tĩnh ra thư mục dist/
corepack pnpm run build

# 4. Xem thử bản build tĩnh (Production Preview)
corepack pnpm run preview

# 5. Chạy kịch bản tự động kiểm tra toàn bộ luồng & giao diện
corepack pnpm run test

# 6. Tạo bản nén sao lưu mã nguồn gọn (không gồm node_modules, dist, .env)
corepack pnpm run backup
```

---

## 2. Cấu trúc thư mục & Hướng dẫn sửa nội dung, giá và ngày ưu đãi

Toàn bộ dữ liệu văn bản, dịch vụ, bảng giá và câu hỏi thường gặp được tách riêng trong thư mục `src/data/` để dễ chỉnh sửa mà không cần can thiệp vào mã giao diện:

| Tệp cấu hình | Nội dung chỉnh sửa |
| :--- | :--- |
| `src/data/site.ts` | Tên thương hiệu, bảng màu, thông tin liên hệ (`fagonlab@gmail.com`, Facebook, số Telegram `0367931045`), câu chuyện **Về Fagon**, quy trình 3 bước chung và 6 cam kết chốt trước. |
| `src/data/pricing.ts` | **Bảng giá 3 gói Video cho Shop** (`originalMin`, `originalMax` lưu dạng số), phần trăm giảm giá (`discountPercent: 70`), và **thời điểm hết hạn ưu đãi** (`expiresAtIso: '2026-10-21T00:00:00+07:00'`). |
| `src/data/audiences.ts` | Nội dung chi tiết của 5 nhóm khách hàng (`/giao-vien`, `/nguoi-ban-hang`, `/van-phong`, `/sinh-vien`, `/sang-tao`): Hero, dịch vụ theo nhóm, quy trình, FAQ và các trường biểu mẫu bổ sung riêng. |
| `src/data/services.ts` | Danh mục 12 dịch vụ chia theo 4 nhóm đầu ra trên trang `/dich-vu` (Mô tả, Đầu vào cần chuẩn bị, Đầu ra có thể đặt). |
| `src/data/portfolio.ts` | Danh sách sản phẩm mẫu, nhãn `Demo minh họa` / `Giao diện minh họa`, đường dẫn ảnh và prompt tạo tài nguyên bổ sung. |

### Cách thay đổi giá hoặc gia hạn ngày ưu đãi:
1. Mở file `src/data/pricing.ts`.
2. Để chỉnh phần trăm giảm hoặc ngày kết thúc, sửa trong `shopVideoPromoConfig`:
   ```ts
   export const shopVideoPromoConfig: PromoConfig = {
     enabled: true, // Đổi thành false nếu muốn tắt ưu đãi ngay lập tức
     discountPercent: 70, // Hệ thống tự tính giá ưu đãi từ giá gốc
     expiresAtIso: '2026-10-21T00:00:00+07:00', // Tự động ẩn ưu đãi ngay khi qua mốc này (UTC+7)
     expiresDisplayLabel: '20/10/2026 (UTC+7)',
     // ...
   };
   ```
3. Để chỉnh giá gốc từng gói, sửa các số `originalMin` và `originalMax` trong `shopVideoPricingTiers`. Giá sau giảm sẽ tự động được tính lại.
4. Chạy `corepack pnpm run build` để cập nhật bản xuất bản.

---

## 3. Hướng dẫn cấu hình Biểu mẫu nhận yêu cầu (`fagonlab@gmail.com`)

Hiện tại, biểu mẫu được thiết kế **trung thực**: khi chưa điền khóa kết nối máy chủ nhận đơn, website **không giả lập gửi thành công** mà giữ nguyên dữ liệu khách vừa nhập, cho phép khách sao chép toàn bộ nội dung chỉ với 1 nút bấm hoặc mở ứng dụng Email/Facebook gửi trực tiếp.

Để kích hoạt gửi tự động thẳng về hộp thư **`fagonlab@gmail.com`** hoàn toàn miễn phí (ngân sách 0đ):

### Phương án A: Dùng Web3Forms (Khuyên dùng cho web tĩnh — Miễn phí, không cần tạo tài khoản phức tạp)
1. Truy cập [https://web3forms.com](https://web3forms.com).
2. Nhập email **`fagonlab@gmail.com`** để nhận mã `Access Key` gửi về hộp thư.
3. Sao chép file `.env.example` thành `.env` ở thư mục gốc dự án và điền mã vừa nhận:
   ```env
   PUBLIC_FORM_PROVIDER=web3forms
   PUBLIC_WEB3FORMS_ACCESS_KEY=dien_access_key_cua_ban_vao_day
   ```
   *(Lưu ý: Access Key của Web3Forms là định danh hộp thư công khai được thiết kế riêng cho static site, hoặc bạn có thể đặt khóa này trong biến môi trường ẩn `WEB3FORMS_ACCESS_KEY` của Cloudflare Pages kết hợp với endpoint `/api/inquiry` có sẵn trong `functions/api/inquiry.ts`).*

### Phương án B: Dùng Cloudflare Pages Function (`/api/inquiry`)
Dự án đã có sẵn file kiểm tra dữ liệu phía máy chủ tại `functions/api/inquiry.ts`:
1. Khi triển khai lên Cloudflare Pages, vào **Settings → Environment variables**, thêm biến `WEB3FORMS_ACCESS_KEY`.
2. Đặt biến `PUBLIC_FORM_ENDPOINT=/api/inquiry`.
3. Biểu mẫu sẽ gửi qua endpoint `/api/inquiry` để kiểm tra độ dài trường, lọc spam (honeypot) phía máy chủ trước khi chuyển tiếp về `fagonlab@gmail.com`.

---

## 4. Hướng dẫn Xuất bản Miễn phí (Chi phí 0đ — Trong ngân sách < 100.000đ)

Stack **Astro Static** xuất ra thư mục `dist/` thuần tĩnh, tương thích hoàn hảo với gói **Miễn phí (0đ/tháng)** của **Cloudflare Pages** (băng thông không giới hạn, miễn phí địa chỉ `*.pages.dev`, hỗ trợ sẵn `404.html` và đường dẫn tĩnh không cần cấu hình phức tạp):

1. Tạo tài khoản miễn phí tại [https://pages.cloudflare.com](https://pages.cloudflare.com) (không tốn chi phí).
2. Chọn **Create a project** → **Direct Upload** (Tải trực tiếp thư mục `dist` lên) hoặc kết nối với kho Git riêng (Private GitHub/GitLab).
3. Nếu kết nối Git, điền cấu hình build:
   - **Build command**: `pnpm run build`
   - **Build output directory**: `dist`
   - **Environment variables**: `NODE_VERSION = 22` (hoặc `20`), cùng `PUBLIC_SITE_URL` (địa chỉ thật sau khi tạo, ví dụ `https://fagon-studio.pages.dev`).
4. **Chi phí thực tế**: **0đ** (vẫn giữ nguyên ngân sách 100.000đ dự phòng). Khi nào muốn mua tên miền riêng (`.vn` hoặc `.com` thường từ 250.000đ–750.000đ/năm), chủ dự án chỉ cần trỏ DNS về Cloudflare Pages và cập nhật biến `PUBLIC_SITE_URL`.

---

## 5. Hướng dẫn Sao lưu để không mất mã nguồn lần nữa

### 5.1. Tạo bản nén sao lưu gọn
Chạy lệnh:
```powershell
corepack pnpm run backup
```
Lệnh này sẽ tạo file nén `backups/fagon-web-source-backup.zip` chứa toàn bộ mã nguồn, tài nguyên, cấu hình và tài liệu (đã tự động loại trừ `node_modules/`, `dist/` và file `.env` chứa khóa thật).

### 5.2. Lưu bản sao ở vị trí thứ hai (Quy tắc 3-2-1)
Ngay sau khi nhận bàn giao, hãy sao chép file `backups/fagon-web-source-backup.zip` sang ít nhất **02 nơi độc lập** ngoài ổ cứng máy tính hiện tại:
1. **Đám mây cá nhân**: Tải lên Google Drive của hộp thư `fagonlab@gmail.com` hoặc Microsoft OneDrive.
2. **Thiết bị lưu trữ rời**: Chép vào USB cá nhân hoặc ổ cứng ngoài.

### 5.3. Đưa lên kho Git riêng (Private Repository) nếu muốn quản lý lịch sử sửa đổi
Nếu sau này cài Git và muốn lưu trữ trên GitHub / GitLab cá nhân ở chế độ **Riêng tư (Private)**:
```powershell
git init
git add .
git commit -m "chore: initial complete Fagon website source"
git branch -M main
# Tạo một Private Repository trống trên GitHub/GitLab cá nhân, sau đó chạy:
git remote add origin https://github.com/<ten-tai-khoan>/<ten-kho-rieng-tu>.git
git push -u origin main
```
*(File `.gitignore` đã được cấu hình sẵn để không bao giờ đẩy nhầm `node_modules`, `dist` hoặc file `.env` lên Git).*
