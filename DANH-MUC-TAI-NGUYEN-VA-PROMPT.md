# Danh mục Tài nguyên, Prompt Bổ sung & Hạng mục Cần Chủ Dự Án Duyệt

Tài liệu này liệt kê đầy đủ nguồn gốc các tài nguyên đang dùng trong website **Fagon**, danh sách các tài nguyên thực tế còn thiếu kèm **Prompt tạo ảnh/video** tương ứng, và các nội dung cần chủ dự án xác nhận trước khi công bố chính thức.

---

## 1. Danh mục tài nguyên hiện có trong dự án & Quyền sử dụng

Toàn bộ đồ họa hiện có trong thư mục `public/` đều được **tự khởi tạo mới bằng mã SVG gốc trong dự án** (qua script `scripts/generate-assets.mjs`), hoàn toàn không lấy ảnh từ website khác, không vi phạm bản quyền và có thể sử dụng thương mại vĩnh viễn:

| Đường dẫn tệp | Loại | Mục đích sử dụng | Nhãn hiển thị | Nguồn / Quyền sử dụng |
| :--- | :--- | :--- | :--- | :--- |
| `/assets/banners/banner-*.webp` & `.png` | Ảnh Banner (5 nhóm) | Banner Hero cho 5 trang nhu cầu (`/giao-vien`, `/nguoi-ban-hang`, `/van-phong`, `/sinh-vien`, `/sang-tao`), trình diễn trên Trang chủ và ảnh Open Graph chia sẻ link | Nhận diện Fagon | Chủ dự án cung cấp (Đã tối ưu WebP 65–98KB) |
| `/assets/banners/scene-*.webp` | Ảnh Thumbnail (5 nhóm) | Ảnh minh họa trên 5 thẻ chọn nhóm nhu cầu tại Trang chủ | Nhận diện Fagon | Trích xuất góc phải từ bộ 5 Banner của chủ dự án |
| `/favicon.svg` | Icon SVG | Biểu tượng trình duyệt (Favicon) chữ F + chấm xanh chanh `#C5F53C` | Nhận diện Fagon | Tự thiết kế nội bộ (Toàn quyền sử dụng) |
| `/og-image.svg` | Banner SVG | Ảnh đại diện mặc định khi chia sẻ link (Open Graph 1200×630) | Nhận diện Fagon | Tự thiết kế nội bộ (Toàn quyền sử dụng) |
| `/assets/demos/shop-before-hanger.webp` | Ảnh WebP (4:5) | Ảnh "Trước" (Áo Blazer Linen kem 4 cúc treo móc) trong trình kéo Before/After | `Demo minh họa` | Chủ dự án cung cấp (`FG-SHOP-01-before.png`) |
| `/assets/demos/shop-after-model.webp` | Ảnh WebP (4:5) | Ảnh "Sau" (Cùng mẫu áo Blazer Linen kem lên dáng người mẫu studio) | `Demo minh họa` | Chủ dự án cung cấp (`FG-SHOP-01-after.png`) |
| `/assets/demos/edu-slide-preview.webp` | Ảnh WebP (16:9) | Bố cục mẫu Slide bài giảng 16:9 cho Giáo viên | `Demo minh họa` | Chủ dự án cung cấp (`FG-EDU-02.png`) |
| `/assets/demos/edu-storyboard.webp` | Ảnh WebP (16:9) | Bảng phân cảnh Storyboard 4 khung cho Giáo viên | `Demo minh họa` | Chủ dự án cung cấp (`FG-EDU-03.png`) |
| `/assets/demos/shop-product-cgi.webp` | Ảnh WebP (4:5) | Bố cục phối cảnh ánh sáng Studio & CGI sản phẩm | `Demo minh họa` | Chủ dự án cung cấp (`FG-SHOP-02.png`) |
| `/assets/demos/shop-video-concept.webp` | Ảnh WebP (9:16) | Khung kịch bản phân cảnh Video Quảng cáo 25s (9:16) | `Demo minh họa` | Chủ dự án cung cấp (`FG-SHOP-03-poster.png`) |
| `/assets/demos/shop-lookbook-ui.webp` | Ảnh WebP (16:10) | Mockup bố cục trang web Lookbook thời trang | `Giao diện minh họa` | Chủ dự án cung cấp (`FG-SHOP-04.png`) |
| `/assets/demos/office-report-slide.webp` | Ảnh WebP (16:9) | Bố cục Slide Báo cáo & Đề xuất doanh nghiệp 16:9 | `Demo minh họa` | Chủ dự án cung cấp (`FG-OFF-01.png`) |
| `/assets/demos/office-infographic.webp` | Ảnh WebP (4:5) | Sơ đồ Infographic quy trình phối hợp 5 bước | `Demo minh họa` | Chủ dự án cung cấp (`FG-OFF-02.png`) |
| `/assets/demos/student-deck.webp` | Ảnh WebP (16:9) | Khung bố cục Slide bảo vệ đồ án sinh viên | `Demo minh họa` | Chủ dự án cung cấp (`FG-STU-01.png`) |
| `/assets/demos/student-poster.webp` | Ảnh WebP (3:4) | Bố cục Poster học thuật khổ A1 & sự kiện CLB | `Demo minh họa` | Chủ dự án cung cấp (`FG-STU-02.png`) |
| `/assets/demos/student-portfolio-ui.webp` | Ảnh WebP (16:10) | Mockup giao diện Web Portfolio cá nhân cho sinh viên | `Giao diện minh họa` | Chủ dự án cung cấp (`FG-STU-03.png`) |
| `/assets/demos/creator-character.webp` | Ảnh WebP (16:9) | Bảng thiết kế nhân vật đồng bộ Character Turnaround Sheet | `Demo minh họa` | Chủ dự án cung cấp (`FG-CRE-01.png`) |
| `/assets/demos/creator-storyboard.webp` | Ảnh WebP (16:9) | Bảng phân cảnh Storyboard video kể chuyện điện ảnh | `Demo minh họa` | Chủ dự án cung cấp (`FG-CRE-02.png`) |

---

## 2. Danh sách Tài nguyên thực tế còn thiếu & Prompt tạo Ảnh / Video bổ sung

Khi chủ dự án muốn thay các đồ họa bố cục SVG bằng ảnh AI / video render thực tế, hãy sử dụng các prompt dưới đây (và cập nhật đường dẫn file trong `src/data/portfolio.ts`):

### 2.1. Nhóm Người bán hàng (`/nguoi-ban-hang`)
1. **Cặp ảnh Before/After trang phục thực tế (`FG-SHOP-01`)**
   - **Tài nguyên cần tạo**: 01 ảnh chụp áo thực tế trên móc treo + 01 ảnh AI lên dáng người mẫu mặc đúng chiếc áo đó (tỷ lệ `4:5`, định dạng `.webp`).
   - **Prompt gợi ý (Flux.1 Fill / Inpainting trên ảnh áo thật)**:
     > `High-end editorial fashion studio portrait, Vietnamese female model wearing the exact cream tailored double-breasted linen blazer with dark horn buttons and flap pockets, soft warm studio daylight against neutral warm alabaster background #F6F3EB, natural fabric drape and texture, shot on 85mm lens --ar 4:5`
2. **Ảnh sản phẩm & CGI mỹ phẩm / túi da (`FG-SHOP-02`)**
   - **Tài nguyên cần tạo**: Ảnh sản phẩm đặt trên bệ đá tự nhiên với ánh nắng xiên (tỷ lệ `4:5`, `.webp`).
   - **Prompt gợi ý**:
     > `Minimalist luxury product photography, frosted amber glass dropper serum bottle standing on a raw cream travertine stone podium, dappled morning sunlight casting soft botanical leaf shadows, warm cream and charcoal palette, ultra crisp commercial studio lighting --ar 4:5`
3. **Video thời trang / Quảng cáo mẫu 15–25 giây (`FG-SHOP-03`)**
   - **Tài nguyên cần tạo**: Video `.mp4` dọc `9:16` (có ảnh `poster` `.webp` đi kèm, chỉ bật thẻ `<video controls preload="none">` sau khi đã có file video thật).
   - **Prompt gợi ý (Kling AI / Runway Gen-3)**:
     > `Vertical 9:16 fashion commercial shot, smooth slow-motion camera pan following a confident model in a tailored cream linen outfit walking through a sunlit minimalist architectural courtyard, natural fabric movement, cinematic depth of field --ar 9:16`

### 2.2. Nhóm Giáo viên (`/giao-vien`)
4. **Hình minh họa Slide bài giảng Khoa học / Tự nhiên (`FG-EDU-02`)**
   - **Tài nguyên cần tạo**: Tranh minh họa chủ đề Năng lượng tái tạo hoặc Chu trình nước (tỷ lệ `16:9`, `.webp`).
   - **Prompt gợi ý**:
     > `Clean editorial educational illustration showing solar panels, wind turbines on gentle hills, and clean river hydro energy under warm sunlight, flat modern vector aesthetic, palette of cream #F6F3EB, deep charcoal #191B18, and vibrant lime #C5F53C, generous negative space on left for Vietnamese slide typography --ar 16:9`
5. **Chuỗi 4 khung hình hoạt hình tình huống lớp học (`FG-EDU-03`)**
   - **Tài nguyên cần tạo**: 4 bức tranh đồng bộ nhân vật học sinh thảo luận nhóm (tỷ lệ `16:9`, `.webp`).
   - **Prompt gợi ý**:
     > `2D warm storybook animation frame, four Vietnamese middle school students in neat white and navy uniforms sitting around a classroom wooden table discussing a poster project, warm natural window lighting, expressive friendly faces, Ghibli-inspired clean line art --ar 16:9`

### 2.3. Nhóm Văn phòng (`/van-phong`) & Sinh viên (`/sinh-vien`)
6. **Ảnh trích xuất bộ Slide Báo cáo Doanh nghiệp (`FG-OFF-01`) & Slide Đồ án Sinh viên (`FG-STU-01`)**
   - **Tài nguyên cần tạo**: Ảnh xuất PNG/WebP từ 3–4 slide mẫu PowerPoint do Fagon thiết kế (ghi rõ nhãn dữ liệu minh họa).
   - **Prompt bố cục tham khảo**:
     > `Minimalist executive presentation slide deck layout, Swiss editorial grid, dark charcoal #191B18 and warm cream #F6F3EB with subtle lime #C5F53C data highlights, clean comparison bar charts and timeline blocks, clearly labeled sample data --ar 16:9`

### 2.4. Nhóm Sáng tạo & Cá nhân (`/sang-tao`)
7. **Bảng thiết kế nhân vật đồng bộ — Character Sheet (`FG-CRE-01`)**
   - **Tài nguyên cần tạo**: Ảnh `16:9` thể hiện 1 nhân vật ở 3 góc đứng (chính diện, nghiêng 3/4, ngang) và 4 biểu cảm khuôn mặt.
   - **Prompt gợi ý**:
     > `Character design turnaround sheet of a young Vietnamese creative storyteller wearing an olive utility jacket and round glasses, front view, 3/4 view, side profile, plus four facial expressions, stylized semi-realistic editorial illustration on cream paper background #F6F3EB --ar 16:9`
8. **Chuỗi phân cảnh Storyboard kể chuyện điện ảnh (`FG-CRE-02`)**
   - **Tài nguyên cần tạo**: Bảng 4 khung hình kể chuyện hành trình tàu hỏa chiều hoàng hôn (`16:9`, `.webp`).
   - **Prompt gợi ý**:
     > `Cinematic storyboard sequence of 4 frames showing a nostalgic late afternoon train journey through Vietnamese coastal countryside, warm film grain, golden hour light through window, poetic storytelling atmosphere --ar 16:9`

---

## 3. Các phần cần Chủ Dự Án duyệt hoặc cung cấp thêm

1. **Duyệt bản nháp câu chuyện thương hiệu ("Về Fagon")**:
   - Hiện đang hiển thị tại mục **Về Fagon** trên trang chủ dưới danh xưng **"Người sáng lập Fagon"** (trong file `src/data/site.ts`) đúng theo bản nháp yêu cầu. Chủ dự án hãy kiểm tra và chốt câu chữ cuối cùng trước khi phát hành.
2. **Cung cấp khóa nhận biểu mẫu (`PUBLIC_WEB3FORMS_ACCESS_KEY` hoặc `PUBLIC_FORM_ENDPOINT`)**:
   - Điền vào file `.env` theo hướng dẫn trong `README.md` để chuyển biểu mẫu từ chế độ dự phòng (Sao chép nội dung / Mở ứng dụng Email) sang chế độ gửi tự động thẳng về `fagonlab@gmail.com`.
3. **Cập nhật Username Telegram (khi có)**:
   - Hiện tại số Telegram `0367931045` chưa có username công khai nên website đang hiển thị số kèm nút **Sao chép số Telegram** (không tạo link `t.me` chưa kiểm chứng). Khi chủ dự án tạo username Telegram, có thể bổ sung vào `src/data/site.ts`.
4. **Cập nhật địa chỉ triển khai thực tế (`PUBLIC_SITE_URL`)**:
   - Sau khi đưa lên Cloudflare Pages / Vercel (ví dụ `https://fagon.pages.dev`), hãy điền vào biến `PUBLIC_SITE_URL` để hệ thống tự sinh thẻ `canonical` và `og:url` tuyệt đối chính xác.
