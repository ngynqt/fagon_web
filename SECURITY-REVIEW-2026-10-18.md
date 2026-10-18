# Báo cáo rà soát bảo mật — Fagon Web

**Phạm vi:** mã nguồn dự án và các phản hồi công khai của `https://fagon.id.vn`.

**Cách kiểm tra:** rà soát cấu hình/mã nguồn và các yêu cầu HTTP hợp lệ, có giới hạn. Không quét mật khẩu, không thử đăng nhập, không gửi tải cao và không gửi dữ liệu khách hàng.

## Kết quả

| Mức độ | Hạng mục | Trạng thái |
| --- | --- | --- |
| Trung bình | Thiếu CSP, chống nhúng trang và một số security header | **Đã vá trong mã nguồn** |
| Thấp | Khóa Web3Forms xuất hiện ở phía trình duyệt | Cần chuyển sang endpoint phía máy chủ để giảm nguy cơ lạm dụng gửi spam |
| Thông tin | API `/api/inquiry` từ chối yêu cầu thiếu dữ liệu | Đạt |
| Thông tin | HTTP tự chuyển sang HTTPS; `.env` trả về 404 | Đạt |

## Chi tiết phát hiện

### SEC-01 — Thiếu security headers (Trung bình) — Đã vá

Trước khi vá, phản hồi trang chủ chưa có `Content-Security-Policy`, `X-Frame-Options`, `Strict-Transport-Security` và `Permissions-Policy`. Điều này làm giảm lớp bảo vệ trước clickjacking, tải tài nguyên ngoài ý muốn và các lỗi XSS phát sinh sau này.

**Khắc phục:** thêm `public/_headers`, để Cloudflare Pages phát hành các header sau cho tài nguyên tĩnh: CSP, HSTS, chống nhúng frame, `nosniff`, Referrer Policy và Permissions Policy. CSP chỉ cho phép Google Fonts và Web3Forms, đúng với các nguồn hiện dùng.

**Cần triển khai:** commit/push thay đổi này để Cloudflare Pages build và áp dụng header.

### SEC-02 — Web3Forms access key ở trình duyệt (Thấp) — Cần cấu hình hạ tầng

Biến `PUBLIC_WEB3FORMS_ACCESS_KEY` được Astro nhúng vào HTML/JavaScript nên mọi người truy cập đều có thể xem khóa. Đây là cơ chế mà Web3Forms cho phép cho static site, nhưng khóa có thể bị lạm dụng để gửi spam nếu nhà cung cấp không chặn đủ.

**Khắc phục khuyến nghị:**

1. Cloudflare Pages → Settings → Variables and secrets: thêm **Secret** `WEB3FORMS_ACCESS_KEY` với cùng Access Key.
2. Thêm biến Text `PUBLIC_FORM_ENDPOINT` có giá trị `/api/inquiry`.
3. Xóa biến Text `PUBLIC_WEB3FORMS_ACCESS_KEY` sau khi đã xác nhận form hoạt động.
4. Deploy lại. File `functions/api/inquiry.ts` đã có validation, honeypot và chuyển tiếp server-side cho luồng này.

Lưu ý: cần bổ sung Cloudflare WAF/Rate Limiting nếu form bị spam; đây là cấu hình Dashboard nên không tự thay đổi trong đợt rà soát này.

## Kiểm tra đã thực hiện

- `http://fagon.id.vn` chuyển 301 sang HTTPS.
- `https://fagon.id.vn/.env` trả 404.
- `POST /api/inquiry` với JSON rỗng trả 400, không phát hiện trace lỗi hoặc dữ liệu nhạy cảm.
- `OPTIONS /api/inquiry` trả 405; endpoint chỉ cho phép phương thức cần thiết.
- Rà soát thao tác DOM: dữ liệu động hiển thị qua `textContent`; không tìm thấy luồng render HTML trực tiếp từ dữ liệu biểu mẫu.

## Giới hạn

Máy rà soát hiện không cài Node.js/pnpm nên chưa thể chạy `astro check`, build hoặc `pnpm audit` cục bộ. Cloudflare Pages sẽ thực hiện build sau khi nhận commit; cần xem Build log để xác nhận triển khai thành công.
