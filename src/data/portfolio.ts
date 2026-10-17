export type DemoLabelType = 'Demo minh họa' | 'Giao diện minh họa';

export type MediaType =
  | 'interactive-game'
  | 'before-after'
  | 'slide-preview'
  | 'storyboard-preview'
  | 'web-preview'
  | 'graphic-preview'
  | 'video-preview';

export interface PortfolioItem {
  code: string;
  id: string;
  title: string;
  description: string;
  audienceIds: string[];
  serviceId: string;
  serviceLabel: string;
  mediaType: MediaType;
  resourcePath: string;
  videoPath?: string;
  posterPath?: string;
  showMediaSwitcher?: boolean;
  mediaFit?: 'cover' | 'contain';
  demoLabel: DemoLabelType;
  status: string;
  liveExperienceAnchor?: string; // Only present when an actual interactive feature exists on the page
  featuredOnHome?: boolean;
  visualData: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    metricsOrPoints: string[];
    accentTag: string;
  };
  assetGenerationPrompt: {
    missingAssetDescription: string;
    recommendedTool: string;
    aspectRatio: string;
    promptText: string;
  };
}

export const portfolioItems: PortfolioItem[] = [
  {
    code: 'FG-EDU-01',
    id: 'demo-teacher-interactive-game',
    title: 'Trò chơi tương tác: Ghép đôi & Trắc nghiệm Khoa học Tự nhiên',
    description:
      'Mini-game ôn tập kiến thức chạy trực tiếp trên trình duyệt: có hướng dẫn rõ ràng, chấm đáp án đúng/sai kèm giải thích ngắn, hỗ trợ cảm ứng và bàn phím, không thu thập thông tin học sinh.',
    audienceIds: ['giao-vien'],
    serviceId: 'web-tro-choi-giao-vien',
    serviceLabel: 'Web trò chơi tương tác cho giáo viên',
    mediaType: 'interactive-game',
    resourcePath: '/giao-vien#tro-choi-mau',
    demoLabel: 'Demo minh họa',
    status: 'Hoạt động thật ngay trên trang (HTML/JS nhẹ, không cần tài khoản)',
    liveExperienceAnchor: '/giao-vien#tro-choi-mau',
    featuredOnHome: true,
    visualData: {
      eyebrow: 'TRÒ CHƠI LỚP HỌC • TƯƠNG TÁC THẬT',
      headline: 'Ôn tập Chu trình Nước & Hệ Sinh Thái',
      subheadline: '4 câu hỏi minh họa + chế độ ghép khái niệm, thiết kế nút bấm lớn cho màn chiếu và điện thoại.',
      metricsOrPoints: [
        'Phản hồi đúng / sai ngay lập tức',
        'Điều khiển được bằng chuột, cảm ứng và bàn phím (Tab/Enter)',
        'Không yêu cầu đăng nhập hay nhập tên học sinh',
      ],
      accentTag: 'Chơi thử ngay',
    },
    assetGenerationPrompt: {
      missingAssetDescription: 'Bộ icon minh họa sinh vật và hiện tượng tự nhiên đồng bộ cho các chủ đề môn học khác',
      recommendedTool: 'Midjourney v6 / Recraft V3 Vector',
      aspectRatio: '1:1',
      promptText:
        'Flat vector educational icon set for middle school natural science: water cycle evaporation, condensation, precipitation, green leaf photosynthesis, warm cream background #F6F3EB, crisp dark ink outlines #191B18, lime green highlights #C5F53C, clean minimalist textbook illustration style --no text, watermark',
    },
  },
  {
    code: 'FG-EDU-02',
    id: 'demo-teacher-slide-deck',
    title: 'Bộ Slide bài giảng: Năng lượng tái tạo & Môi trường',
    description:
      'Bố cục slide bài giảng chia 3 phần (Khởi động tình huống – Kiến thức cốt lõi – Câu hỏi thảo luận nhóm) với tỷ lệ chữ lớn, độ tương phản cao giúp học sinh cuối lớp vẫn đọc rõ.',
    audienceIds: ['giao-vien'],
    serviceId: 'slide-bai-giang-giao-vien',
    serviceLabel: 'Slide bài giảng trực quan',
    mediaType: 'slide-preview',
    resourcePath: '/assets/demos/edu-slide-preview.webp',
    demoLabel: 'Demo minh họa',
    status: 'Bố cục slide bài giảng chuẩn 16:9 thiết kế trực quan',
    featuredOnHome: false,
    visualData: {
      eyebrow: 'SLIDE BÀI GIẢNG • 16:9',
      headline: 'Bài 12: Các nguồn năng lượng trong tự nhiên',
      subheadline: 'Phân tách khái niệm bằng sơ đồ so sánh trực quan và câu hỏi gợi mở tư duy.',
      metricsOrPoints: [
        'Slide 01: Tình huống mở đầu có hình minh họa trực quan',
        'Slide 05: Sơ đồ so sánh Năng lượng mặt trời, gió và thủy điện',
        'Slide 09: Hoạt động thảo luận nhóm 3 phút có bộ đếm giờ',
      ],
      accentTag: 'Bố cục Slide 16:9',
    },
    assetGenerationPrompt: {
      missingAssetDescription: 'Hình minh họa chủ đề Năng lượng tái tạo cho trang bìa Slide bài giảng',
      recommendedTool: 'Midjourney / Flux.1 Dev',
      aspectRatio: '16:9',
      promptText:
        'Clean editorial educational illustration showing solar panels, wind turbines on gentle hills, and clean river hydro energy under warm sunlight, flat modern vector aesthetic, palette of cream #F6F3EB, deep charcoal #191B18, and vibrant lime #C5F53C, generous negative space on left for Vietnamese slide typography --ar 16:9',
    },
  },
  {
    code: 'FG-EDU-03',
    id: 'demo-teacher-storyboard',
    title: 'Video kể chuyện & Storyboard: Tình huống Giao tiếp & Ứng xử học đường',
    description:
      'Video hoạt hình kể chuyện hoàn chỉnh (60 giây) kết hợp bảng phân cảnh 4 khung hình, dẫn dắt tình huống mở đầu tiết học Kỹ năng sống / Hoạt động trải nghiệm.',
    audienceIds: ['giao-vien'],
    serviceId: 'video-hoat-hinh-ke-chuyen',
    serviceLabel: 'Video hoạt hình & kể chuyện bài học',
    mediaType: 'video-preview',
    resourcePath: '/assets/demos/edu-storyboard.webp',
    videoPath: '/assets/videos/edu-storyboard-video.mp4',
    posterPath: '/assets/videos/edu-storyboard-poster.webp',
    showMediaSwitcher: false,
    demoLabel: 'Demo minh họa',
    status: 'Video hoạt hình Full HD (60s) có âm thanh & bảng phân cảnh trực quan',
    liveExperienceAnchor: '#demo-teacher-storyboard',
    featuredOnHome: false,
    visualData: {
      eyebrow: 'VIDEO HOẠT HÌNH • TÌNH HUỐNG HỌC ĐƯỜNG',
      headline: 'Tình huống: Lắng nghe và tôn trọng ý kiến khi làm việc nhóm',
      subheadline: 'Video hoạt hình 2D Full HD có âm thanh, giọng đọc tự nhiên và bảng phân cảnh chi tiết.',
      metricsOrPoints: [
        'Thời lượng 60 giây chuẩn tiết học: Đi thẳng vào trọng tâm tình huống',
        'Âm thanh, nhạc nền và giọng đọc truyền cảm xúc sinh động',
        'Bảng phân cảnh Storyboard 4 khung hình đối chiếu trực tiếp',
      ],
      accentTag: 'Phát video 60s',
    },
    assetGenerationPrompt: {
      missingAssetDescription: 'Video hoạt hình tình huống học đường',
      recommendedTool: 'Midjourney + Kling AI / Runway Gen-3 + CapCut / Premiere dựng âm thanh',
      aspectRatio: '16:9',
      promptText:
        '2D warm storybook animation frame, four Vietnamese middle school students in neat white and navy uniforms sitting around a classroom wooden table discussing a poster project, warm natural window lighting, expressive friendly faces, Ghibli-inspired clean line art --ar 16:9',
    },
  },
  {
    code: 'FG-EDU-04',
    id: 'demo-teacher-learning-storyboard',
    title: 'Storyboard tình huống học tập: Việc nhỏ, trường xanh',
    description:
      'Bảng phân cảnh 4 khung hình minh họa mạch kể chuyện từ một chai nhựa bị bỏ quên đến hành động phân loại rác và thông điệp giữ gìn trường học xanh.',
    audienceIds: ['giao-vien'],
    serviceId: 'y-tuong-kich-ban-storyboard',
    serviceLabel: 'Kịch bản truyện, tình huống học tập',
    mediaType: 'storyboard-preview',
    resourcePath: '/assets/demos/edu-storyboard.webp',
    demoLabel: 'Demo minh họa',
    status: 'Bảng phân cảnh 4 khung hình cho tình huống học tập',
    featuredOnHome: false,
    visualData: {
      eyebrow: 'KỊCH BẢN & STORYBOARD • TÌNH HUỐNG HỌC TẬP',
      headline: 'Việc nhỏ, trường xanh',
      subheadline: 'Một mạch truyện ngắn giúp học sinh quan sát, trao đổi và chốt hành động cụ thể.',
      metricsOrPoints: [
        'Mở đầu bằng tình huống gần gũi để gợi thảo luận',
        'Phân cảnh rõ ràng: phát hiện – hành động – thay đổi',
        'Có thể phát triển thành video, tranh minh họa hoặc hoạt động trên lớp',
      ],
      accentTag: 'Storyboard 4 khung',
    },
    assetGenerationPrompt: {
      missingAssetDescription: 'Storyboard 4 khung cho tình huống học tập có nhân vật và hành động xuyên suốt',
      recommendedTool: 'Phác thảo tay / Figma / Illustrator',
      aspectRatio: '16:9',
      promptText:
        'Four-panel educational storyboard about Vietnamese school children finding a plastic bottle, sorting it for recycling, and celebrating a clean green schoolyard; warm storybook illustration, consistent characters, clear visual sequence --ar 16:9',
    },
  },
  {
    code: 'FG-EDU-05',
    id: 'demo-teacher-green-class-poster',
    title: 'Poster thông báo lớp học: Lớp mầm xanh',
    description:
      'Poster thông báo hoạt động “Bé ươm mầm xanh” dành cho phụ huynh và học sinh: thông điệp rõ ràng, lịch trình dễ xem và hình minh họa thân thiện.',
    audienceIds: ['giao-vien'],
    serviceId: 'banner-poster-infographic',
    serviceLabel: 'Poster, banner, thông báo lớp học',
    mediaType: 'graphic-preview',
    resourcePath: '/assets/demos/teacher-green-class-poster.png',
    mediaFit: 'contain',
    demoLabel: 'Demo minh họa',
    status: 'Poster thông báo hoạt động lớp học dành cho phụ huynh',
    featuredOnHome: false,
    visualData: {
      eyebrow: 'POSTER LỚP HỌC • THÔNG BÁO GỬI BA MẸ',
      headline: 'Lớp mầm xanh — Bé ươm mầm xanh',
      subheadline: 'Truyền tải đầy đủ nội dung hoạt động, thời gian, địa điểm và phần chuẩn bị trong một bố cục gần gũi, dễ đọc.',
      metricsOrPoints: [
        'Thông tin chính được phân cấp rõ để phụ huynh xem nhanh',
        'Hình minh họa vui tươi, phù hợp hoạt động mầm non',
        'Dùng được cho bản in, nhóm lớp và bài đăng mạng xã hội',
      ],
      accentTag: 'Poster thông báo lớp học',
    },
    assetGenerationPrompt: {
      missingAssetDescription: 'Poster thông báo hoạt động xanh cho lớp mầm non',
      recommendedTool: 'Canva / Illustrator / Figma',
      aspectRatio: '4:5',
      promptText:
        'Cheerful Vietnamese kindergarten activity poster about planting seedlings, friendly teachers and children in a green garden, clear event information zones, warm hand-drawn style, high readability --ar 4:5',
    },
  },
  {
    code: 'FG-EDU-06',
    id: 'demo-teacher-squirrel-character-sheet',
    title: 'Nhân vật hoạt hình: Sóc Hạt Dẻ',
    description:
      'Character sheet minh họa nhân vật Sóc Hạt Dẻ với bảng màu, các góc nhìn, biểu cảm và chi tiết thiết kế đồng bộ để sử dụng xuyên suốt bài học.',
    audienceIds: ['giao-vien'],
    serviceId: 'anh-ai-nhan-vat-hoat-hinh',
    serviceLabel: 'Ảnh và nhân vật hoạt hình',
    mediaType: 'graphic-preview',
    resourcePath: '/assets/demos/teacher-squirrel-character-sheet.jpg',
    mediaFit: 'contain',
    demoLabel: 'Demo minh họa',
    status: 'Character sheet nhân vật hoạt hình cho bài giảng',
    featuredOnHome: false,
    visualData: {
      eyebrow: 'NHÂN VẬT HOẠT HÌNH • CHARACTER SHEET',
      headline: 'Sóc Hạt Dẻ — nhân vật đồng hành trong bài học',
      subheadline: 'Một hệ nhân vật nhất quán giúp câu chuyện, hình minh họa và hoạt động học tập dễ nhận biết hơn.',
      metricsOrPoints: [
        'Các góc nhìn và chi tiết thiết kế nhất quán',
        'Ma trận biểu cảm phù hợp nhiều tình huống kể chuyện',
        'Sẵn sàng phát triển thành tranh, slide hoặc video hoạt hình',
      ],
      accentTag: 'Character sheet',
    },
    assetGenerationPrompt: {
      missingAssetDescription: 'Bộ character sheet nhân vật hoạt hình cho bài học',
      recommendedTool: 'Illustrator / Photoshop / Procreate',
      aspectRatio: '4:3',
      promptText:
        'Vietnamese educational cartoon squirrel mascot character sheet, consistent front, side and back views, facial expressions, color palette and detail callouts; clean friendly illustration for classroom storytelling --ar 4:3',
    },
  },
  {
    code: 'FG-SHOP-01',
    id: 'demo-shop-before-after',
    title: 'Before / After: Từ ảnh chụp treo móc sang ảnh lên dáng người mẫu',
    description:
      'So sánh trực quan cùng một mẫu áo Blazer Linen màu kem phối viền: từ ảnh chụp phẳng trên móc treo sang hình ảnh lên dáng chuẩn form để khách dễ hình dung khi mặc.',
    audienceIds: ['nguoi-ban-hang'],
    serviceId: 'anh-nguoi-mau-ai',
    serviceLabel: 'Ảnh người mẫu AI & Video thời trang',
    mediaType: 'before-after',
    resourcePath: '/nguoi-ban-hang#before-after-demo',
    demoLabel: 'Demo minh họa',
    status: 'Trình so sánh Before/After tương tác thật (ảnh thật trên móc vs. ảnh studio lên dáng)',
    liveExperienceAnchor: '/nguoi-ban-hang#before-after-demo',
    featuredOnHome: true,
    visualData: {
      eyebrow: 'BEFORE / AFTER • CÙNG MỘT MẪU ÁO',
      headline: 'Áo Blazer Linen Kem — Chụp treo móc vs. Lên dáng Studio',
      subheadline: 'Kéo thanh trượt bằng cảm ứng/bàn phím hoặc chuyển sang chế độ xem song song 2 ảnh.',
      metricsOrPoints: [
        'Giữ đồng nhất cấu trúc ve áo, 2 hàng cúc, túi nắp và tông màu kem ấm',
        'Quy trình thực tế luôn kiểm tra và duyệt ảnh tĩnh trước khi tạo video chuyển động',
        'Lưu ý minh bạch: Họa tiết quá nhỏ hoặc ren phức tạp cần kiểm tra mẫu đầu vào kỹ',
      ],
      accentTag: 'Kéo so sánh trực tiếp',
    },
    assetGenerationPrompt: {
      missingAssetDescription: 'Cặp ảnh thực tế trước/sau của sản phẩm thời trang đã được chủ shop đồng ý cho phép đăng tải',
      recommendedTool: 'Ảnh chụp gốc của shop + Flux.1 Fill / इन-painting giữ nguyên trang phục',
      aspectRatio: '4:5',
      promptText:
        'High-end editorial fashion studio portrait, Vietnamese female model wearing the exact cream tailored double-breasted linen blazer with dark horn buttons and flap pockets, soft warm studio daylight against neutral warm alabaster background #F6F3EB, natural fabric drape and texture, shot on 85mm lens --ar 4:5',
    },
  },
  {
    code: 'FG-SHOP-02',
    id: 'demo-shop-cosmetics-cgi',
    title: 'Bối cảnh sản phẩm & CGI: Tinh chất dưỡng da',
    description:
      'Bố cục đặt sản phẩm tách nền vào không gian bệ đá tự nhiên, ánh sáng xiên và bóng đổ mềm cho banner bộ sưu tập và ảnh bìa gian hàng.',
    audienceIds: ['nguoi-ban-hang'],
    serviceId: 'anh-san-pham-cgi',
    serviceLabel: 'Ảnh và CGI sản phẩm',
    mediaType: 'graphic-preview',
    resourcePath: '/assets/demos/shop-product-cgi.webp',
    demoLabel: 'Demo minh họa',
    status: 'Ảnh CGI sản phẩm tinh chất dưỡng da trên bệ đá travertine',
    featuredOnHome: false,
    visualData: {
      eyebrow: 'PRODUCT STAGING • CGI CONCEPT',
      headline: 'Phối cảnh ánh sáng Studio cho Tinh chất dưỡng da',
      subheadline: 'Tập trung làm nổi bật chất liệu vỏ chai, chất serum và bố cục khoảng trống đặt tiêu đề khuyến mãi.',
      metricsOrPoints: [
        'Tách nền sạch từ ảnh chụp điện thoại đủ sáng',
        'Tạo bóng đổ tiếp xúc (contact shadow) và phản xạ ánh sáng tự nhiên',
        'Xuất đa tỷ lệ: 1:1 (Sàn TMĐT), 4:5 (Facebook/Instagram), 16:9 (Banner web)',
      ],
      accentTag: 'Bố cục Sản phẩm',
    },
    assetGenerationPrompt: {
      missingAssetDescription: 'Ảnh CGI thực tế chai serum thủy tinh mờ đặt trên bệ đá travertine',
      recommendedTool: 'Blender 3D / Adobe Substance / Flux.1 Product Staging',
      aspectRatio: '4:5',
      promptText:
        'Minimalist luxury product photography,frosted amber glass dropper serum bottle standing on a raw cream travertine stone podium, dappled morning sunlight casting soft botanical leaf shadows, warm cream and charcoal palette, ultra crisp commercial studio lighting --ar 4:5',
    },
  },
  {
    code: 'FG-SHOP-03',
    id: 'demo-shop-ad-concept',
    title: 'Concept Video Quảng cáo 25s: Kịch bản 3 điểm chạm cho Shop Thời trang',
    description:
      'Cấu trúc phân cảnh video quảng cáo ngắn (Gói Quảng cáo 20–40 giây): 3 giây đầu bắt mắt (Hook), 15 giây cận cảnh chất liệu & lên dáng 3 bối cảnh, 7 giây chốt thông điệp.',
    audienceIds: ['nguoi-ban-hang'],
    serviceId: 'video-thoi-trang-quang-cao-shop',
    serviceLabel: 'Video quảng cáo sản phẩm',
    mediaType: 'storyboard-preview',
    resourcePath: '/assets/demos/shop-video-concept.webp',
    demoLabel: 'Demo minh họa',
    status: 'Poster phân cảnh video quảng cáo 9:16 tối ưu giữ chân người xem',
    featuredOnHome: false,
    visualData: {
      eyebrow: 'CONCEPT QUẢNG CÁO • 9:16 VERTICAL',
      headline: 'Cấu trúc Video 25 giây tối ưu giữ chân người xem',
      subheadline: 'Kết hợp chuyển cảnh người mẫu, phóng cận đường may, giọng đọc tự nhiên và phụ đề rõ nét.',
      metricsOrPoints: [
        '00s–03s (Hook): Chuyển cảnh từ áo trên móc sang dáng bước đi tại quán cà phê sáng',
        '03s–18s (Chi tiết): 3 góc máy tôn dáng + phụ đề nhấn mạnh chất vải thoáng mát',
        '18s–25s (CTA): Bảng màu sản phẩm + hướng dẫn chọn size và đặt hàng',
      ],
      accentTag: 'Kịch bản 9:16',
    },
    assetGenerationPrompt: {
      missingAssetDescription: 'Video MP4 dọc 9:16 dài 20 giây minh họa chuyển động người mẫu thực tế',
      recommendedTool: 'Kling AI 1.6 Pro / Runway Gen-3 Alpha + CapCut/Premiere dựng phụ đề',
      aspectRatio: '9:16',
      promptText:
        'Vertical 9:16 fashion commercial shot, smooth slow-motion camera pan following a confident model in a tailored cream linen outfit walking through a sunlit minimalist architectural courtyard, natural fabric movement, cinematic depth of field --ar 9:16',
    },
  },
  {
    code: 'FG-SHOP-04',
    id: 'demo-shop-lookbook-web',
    title: 'Giao diện Web Lookbook: Bộ sưu tập Thu Đông — Minimalist Atelier',
    description:
      'Bố cục trang Lookbook kết hợp danh mục sản phẩm cho thương hiệu thời trang: tôn vinh hình ảnh lớn, bảng thông số chất liệu, gợi ý phối đồ và nút đặt mua nhanh.',
    audienceIds: ['nguoi-ban-hang'],
    serviceId: 'website-gioi-thieu-lookbook-portfolio',
    serviceLabel: 'Website bán hàng & Lookbook',
    mediaType: 'web-preview',
    resourcePath: '/assets/demos/shop-lookbook-ui.webp',
    demoLabel: 'Giao diện minh họa',
    status: 'Giao diện Lookbook thời trang số phong cách Minimalist Atelier',
    featuredOnHome: false,
    visualData: {
      eyebrow: 'LOOKBOOK WEBSITE • UI CONCEPT',
      headline: 'Trải nghiệm xem Bộ sưu tập như tạp chí thời trang số',
      subheadline: 'Tối ưu cho thao tác vuốt trên điện thoại, xem cận chất vải và gửi đơn tư vấn size nhanh.',
      metricsOrPoints: [
        'Trang chủ Lookbook kể câu chuyện bộ sưu tập theo mùa',
        'Thẻ sản phẩm hiển thị rõ giá, màu sắc, bảng size và chất liệu',
        'Tích hợp nút nhắn tin tư vấn trực tiếp hoặc đặt giữ mẫu',
      ],
      accentTag: 'Giao diện minh họa',
    },
    assetGenerationPrompt: {
      missingAssetDescription: 'Bộ ảnh chụp bộ sưu tập 6 looks đồng bộ ánh sáng để đưa vào bản Lookbook thực tế',
      recommendedTool: 'Figma UI + Astro Static Lookbook + Bộ ảnh Lookbook thương hiệu',
      aspectRatio: '16:10',
      promptText:
        'Editorial fashion lookbook web layout showcase on desktop and mobile screens, warm cream background, serif Vietnamese typography, minimalist grid of linen outfits, refined luxury boutique aesthetic --ar 16:10',
    },
  },
  {
    code: 'FG-OFF-01',
    id: 'demo-office-report-slide',
    title: 'Bộ Slide Báo cáo & Đề xuất Dự án: Chuyển đổi Quy trình Vận hành',
    description:
      'Bố cục slide doanh nghiệp chuẩn mực: tóm tắt điều hành (Executive Summary), biểu đồ so sánh hiệu suất và lộ trình triển khai 3 giai đoạn (số liệu trên slide là dữ liệu minh họa).',
    audienceIds: ['van-phong'],
    serviceId: 'slide-bao-cao-van-phong',
    serviceLabel: 'Slide báo cáo & đề xuất dự án',
    mediaType: 'slide-preview',
    resourcePath: '/assets/demos/office-report-slide.webp',
    demoLabel: 'Demo minh họa',
    status: 'Bộ Slide báo cáo & đề xuất dự án doanh nghiệp 16:9',
    featuredOnHome: true,
    visualData: {
      eyebrow: 'SLIDE DOANH NGHIỆP • DỮ LIỆU MINH HỌA',
      headline: 'Báo cáo Quý & Đề xuất Tối ưu Quy trình Nội bộ',
      subheadline: 'Cấu trúc 1 thông điệp chính mỗi trang, giúp người nghe nắm bắt trọng tâm trong 10 giây đầu.',
      metricsOrPoints: [
        'Trang Tóm tắt: 3 chỉ số trọng tâm (KPI minh họa) trình bày sạch, không rối mắt',
        'Trang Phân tích: Biểu đồ so sánh Trước & Sau khi chuẩn hóa quy trình',
        'Trang Lộ trình: Bảng phân công trách nhiệm và mốc thời gian theo tuần',
      ],
      accentTag: 'Chuẩn họp & Báo cáo',
    },
    assetGenerationPrompt: {
      missingAssetDescription: 'Bộ mẫu slide PowerPoint (PPTX) 15 trang chuẩn lưới nhận diện doanh nghiệp',
      recommendedTool: 'PowerPoint / Figma Deck',
      aspectRatio: '16:9',
      promptText:
        'Minimalist executive presentation slide deck layout, Swiss editorial grid, dark charcoal #191B18 and warm cream #F6F3EB with subtle lime #C5F53C data highlights, clean comparison bar charts and timeline blocks, clearly labeled sample data --ar 16:9',
    },
  },
  {
    code: 'FG-OFF-02',
    id: 'demo-office-infographic',
    title: 'Infographic Quy trình & Poster Thông báo Sự kiện Nội bộ',
    description:
      'Sơ đồ hóa quy trình 5 bước phối hợp liên phòng ban và mẫu poster thông báo hội thảo nội bộ, dễ xem trên cả màn hình máy tính lẫn điện thoại.',
    audienceIds: ['van-phong'],
    serviceId: 'banner-poster-infographic',
    serviceLabel: 'Infographic, sơ đồ & poster nội bộ',
    mediaType: 'graphic-preview',
    resourcePath: '/assets/demos/office-infographic.webp',
    demoLabel: 'Demo minh họa',
    status: 'Infographic quy trình 5 bước & poster thông báo nội bộ',
    featuredOnHome: false,
    visualData: {
      eyebrow: 'INFOGRAPHIC & POSTER • VĂN PHÒNG',
      headline: 'Sơ đồ Phối hợp Liên phòng ban & Thông báo Đào tạo',
      subheadline: 'Thay thế văn bản dài bằng luồng bước đi rõ ràng, phân biệt vai trò bằng nhãn màu nhất quán.',
      metricsOrPoints: [
        'Luồng 5 bước: Tiếp nhận → Phân loại → Xử lý → Kiểm tra → Lưu trữ',
        'Định dạng dọc chuẩn gửi qua kênh chat nội bộ hoặc in bảng tin A3',
        'Dữ liệu và tên phòng ban trên hình hoàn toàn là ví dụ minh họa',
      ],
      accentTag: 'Sơ đồ hóa thông tin',
    },
    assetGenerationPrompt: {
      missingAssetDescription: 'Bộ template Infographic dọc và ngang cho truyền thông nội bộ',
      recommendedTool: 'Figma / Illustrator',
      aspectRatio: '4:5',
      promptText:
        'Clean corporate process infographic diagram, 5 numbered steps connected by crisp geometric lines, warm cream background #F6F3EB, charcoal typography #191B18, lime accent badges #C5F53C, modern editorial information design --ar 4:5',
    },
  },
  {
    code: 'FG-STU-01',
    id: 'demo-student-pitch-deck',
    title: 'Slide Bảo vệ Đồ án & Thuyết trình Nghiên cứu Sinh viên',
    description:
      'Khung trình bày 10 trang giúp sinh viên sắp xếp nội dung đã chuẩn bị thành mạch thuyết trình rõ ràng: Đặt vấn đề, Phương pháp, Kết quả thực nghiệm và Kết luận.',
    audienceIds: ['sinh-vien'],
    serviceId: 'slide-thuyet-trinh-sinh-vien',
    serviceLabel: 'Slide từ nội dung đã chuẩn bị',
    mediaType: 'slide-preview',
    resourcePath: '/assets/demos/student-deck.webp',
    demoLabel: 'Demo minh họa',
    status: 'Khung slide bảo vệ đồ án tốt nghiệp & nghiên cứu học thuật',
    featuredOnHome: false,
    visualData: {
      eyebrow: 'SLIDE ĐỒ ÁN • THUYẾT TRÌNH HỌC THUẬT',
      headline: 'Khung trình bày Đồ án Tốt nghiệp & Cuộc thi Khởi nghiệp',
      subheadline: 'Tôn trọng tuyệt đối nội dung và số liệu do sinh viên cung cấp; tối ưu phần thị giác và phân cấp chữ.',
      metricsOrPoints: [
        'Cấu trúc chuẩn: Bối cảnh đề tài → Mục tiêu → Phương pháp → Kết quả → Đề xuất',
        'Sơ đồ hóa quy trình thực hiện để hội đồng dễ theo dõi trong 10–15 phút',
        'Cam kết không bịa đặt số liệu nghiên cứu và không hứa hẹn điểm số',
      ],
      accentTag: 'Rõ mạch bảo vệ',
    },
    assetGenerationPrompt: {
      missingAssetDescription: 'Hình ảnh mockup bộ slide bảo vệ đồ án thiết kế/kỹ thuật/kinh tế',
      recommendedTool: 'Figma / PowerPoint',
      aspectRatio: '16:9',
      promptText:
        'Modern academic thesis presentation slide layout, structured grid for research methodology diagram and data placeholders, warm paper cream background #F6F3EB, crisp dark ink #191B18, subtle lime accent #C5F53C --ar 16:9',
    },
  },
  {
    code: 'FG-STU-02',
    id: 'demo-student-poster',
    title: 'Poster Học thuật (Academic Poster) & Ấn phẩm Câu lạc bộ',
    description:
      'Bố cục poster triển lãm đồ án khổ A1/A0 chia cột khoa học và bộ ảnh truyền thông tuyển thành viên câu lạc bộ sinh viên.',
    audienceIds: ['sinh-vien'],
    serviceId: 'banner-poster-infographic',
    serviceLabel: 'Poster, infographic & hình ảnh CLB',
    mediaType: 'graphic-preview',
    resourcePath: '/assets/demos/student-poster.webp',
    demoLabel: 'Demo minh họa',
    status: 'Poster học thuật khổ dọc & ấn phẩm truyền thông CLB',
    featuredOnHome: false,
    visualData: {
      eyebrow: 'ACADEMIC POSTER & CLB • A1 / SOCIAL',
      headline: 'Bố cục Poster Triển lãm Đồ án & Sự kiện Sinh viên',
      subheadline: 'Phân chia tỷ lệ tiêu đề, tóm tắt, sơ đồ phương pháp và mã QR tài liệu tham khảo cân đối.',
      metricsOrPoints: [
        'Tối ưu khoảng cách đọc từ xa 1.5m cho buổi chấm poster',
        'Đồng bộ màu sắc từ poster in ấn sang bộ ảnh đăng fanpage CLB',
      ],
      accentTag: 'Chuẩn in ấn & Social',
    },
    assetGenerationPrompt: {
      missingAssetDescription: 'Mẫu poster triển lãm đồ án và bộ banner sự kiện câu lạc bộ sinh viên',
      recommendedTool: 'Figma / Illustrator / Midjourney (cho hình minh họa trung tâm)',
      aspectRatio: '3:4',
      promptText:
        'Swiss style academic exhibition poster layout and university club event banner, bold editorial serif header, structured 3-column layout, cream background #F6F3EB, charcoal ink #191B18, lime #C5F53C geometric accents --ar 3:4',
    },
  },
  {
    code: 'FG-STU-03',
    id: 'demo-student-portfolio-web',
    title: 'Giao diện Web Portfolio Cá nhân cho Sinh viên mới ra trường',
    description:
      'Trang portfolio một trang cuộn (one-page) giới thiệu kỹ năng, dự án môn học/thực tập nổi bật và thông tin liên hệ dành cho sinh viên gửi nhà tuyển dụng.',
    audienceIds: ['sinh-vien', 'sang-tao'],
    serviceId: 'website-gioi-thieu-lookbook-portfolio',
    serviceLabel: 'Website portfolio cá nhân',
    mediaType: 'web-preview',
    resourcePath: '/assets/demos/student-portfolio-ui.webp',
    demoLabel: 'Giao diện minh họa',
    status: 'Giao diện Web Portfolio cá nhân giới thiệu đồ án',
    featuredOnHome: false,
    visualData: {
      eyebrow: 'WEB PORTFOLIO • GIAO DIỆN MINH HỌA',
      headline: 'Hồ sơ Năng lực Trực tuyến gọn gàng, dễ gửi qua 1 đường link',
      subheadline: 'Trình bày trung thực các đồ án môn học, bài tập lớn và kỹ năng thực tế của bạn.',
      metricsOrPoints: [
        'Hiển thị tốt trên cả máy tính của HR và điện thoại',
        'Khu vực trình bày chi tiết từng đồ án: Vai trò, Công cụ, Kết quả học hỏi',
        'Nút tải CV PDF và liên hệ trực tiếp qua Email / LinkedIn',
      ],
      accentTag: 'Giao diện minh họa',
    },
    assetGenerationPrompt: {
      missingAssetDescription: 'Ảnh chụp giao diện mẫu trang Portfolio đa ngành (Thiết kế, Marketing, Kỹ thuật)',
      recommendedTool: 'Figma + Astro Static Template',
      aspectRatio: '16:10',
      promptText:
        'Minimalist personal portfolio website design for graduate student, editorial typography, project case study grid, warm cream #F6F3EB and ink #191B18 color scheme --ar 16:10',
    },
  },
  {
    code: 'FG-CRE-01',
    id: 'demo-creator-character-sheet',
    title: 'Xây dựng Nhân vật & Bộ hình đồng bộ cho Kênh kể chuyện',
    description:
      'Thiết kế hồ sơ nhân vật (Character Sheet) giữ nguyên khuôn mặt, trang phục và bảng màu qua nhiều góc độ để phục vụ chuỗi bài đăng, truyện ngắn hoặc kênh video.',
    audienceIds: ['sang-tao'],
    serviceId: 'anh-ai-nhan-vat-hoat-hinh',
    serviceLabel: 'Ảnh AI, hoạt hình & xây dựng nhân vật',
    mediaType: 'graphic-preview',
    resourcePath: '/assets/demos/creator-character.webp',
    demoLabel: 'Demo minh họa',
    status: 'Bảng thiết kế nhân vật đồng bộ Character Turnaround Sheet',
    featuredOnHome: true,
    visualData: {
      eyebrow: 'CHARACTER DESIGN • NHẤT QUÁN HÌNH ẢNH',
      headline: 'Hồ sơ Nhân vật & Bảng Biểu cảm Đồng bộ',
      subheadline: 'Giải quyết bài toán giữ nét nhân vật xuyên suốt nhiều tập truyện và ảnh bìa kênh.',
      metricsOrPoints: [
        'Góc chính diện, góc nghiêng 3/4 và toàn thân kèm mã màu trang phục',
        '4 biểu cảm cơ bản phục vụ ảnh thumbnail và khung truyện',
        'Đồng bộ phong cách ánh sáng và nét vẽ cho toàn bộ kênh nội dung',
      ],
      accentTag: 'Đồng bộ nhân vật',
    },
    assetGenerationPrompt: {
      missingAssetDescription: 'Bảng Character Turnaround Sheet (3 góc đứng + 4 biểu cảm) của nhân vật minh họa mẫu',
      recommendedTool: 'Midjourney --cref / Stable Diffusion LoRA / Flux',
      aspectRatio: '16:9',
      promptText:
        'Character design turnaround sheet of a young Vietnamese creative storyteller wearing an olive utility jacket and round glasses, front view, 3/4 view, side profile, plus four facial expressions, stylized semi-realistic editorial illustration on cream paper background #F6F3EB --ar 16:9',
    },
  },
  {
    code: 'FG-CRE-02',
    id: 'demo-creator-storyboard',
    title: 'Kịch bản & Storyboard Video Kể chuyện / Kỷ niệm cá nhân',
    description:
      'Phát triển từ một kỷ niệm hoặc ý tưởng tản văn thành kịch bản phân cảnh chi tiết có nhịp điệu, lời dẫn, gợi ý âm nhạc và bảng khung hình trực quan.',
    audienceIds: ['sang-tao'],
    serviceId: 'y-tuong-kich-ban-storyboard',
    serviceLabel: 'Ý tưởng, kịch bản & video kể chuyện',
    mediaType: 'storyboard-preview',
    resourcePath: '/assets/demos/creator-storyboard.webp',
    demoLabel: 'Demo minh họa',
    status: 'Storyboard kể chuyện điện ảnh 4 khung hình nostalgic train',
    featuredOnHome: false,
    visualData: {
      eyebrow: 'STORYTELLING • KỊCH BẢN & PHÂN CẢNH',
      headline: 'Chuyển hóa Câu chuyện Cá nhân thành Ngôn ngữ Hình ảnh',
      subheadline: 'Dành cho nhà sáng tạo nội dung, podcast hình ảnh, hoặc video kỷ niệm dịp đặc biệt.',
      metricsOrPoints: [
        'Biên tập lời dẫn (voiceover script) ngắn gọn, giàu hình ảnh',
        'Thiết kế nhịp chuyển cảnh từ mở đầu lắng đọng đến cao trào',
        'Duyệt toàn bộ khung hình tĩnh trước khi kết xuất chuyển động và ghép âm thanh',
      ],
      accentTag: 'Kịch bản & Hình ảnh',
    },
    assetGenerationPrompt: {
      missingAssetDescription: 'Chuỗi 6 khung hình cinematic storyboard cho một video kể chuyện ngắn 60 giây',
      recommendedTool: 'Midjourney v6 + Kling AI / Luma Dream Machine',
      aspectRatio: '16:9',
      promptText:
        'Cinematic storyboard sequence of 4 frames showing a nostalgic late afternoon train journey through Vietnamese coastal countryside, warm film grain, golden hour light through window, poetic storytelling atmosphere --ar 16:9',
    },
  },
];

export function getPortfolioByAudience(audienceId: string): PortfolioItem[] {
  return portfolioItems.filter((item) => item.audienceIds.includes(audienceId));
}

export function getFeaturedHomePortfolio(): PortfolioItem[] {
  return portfolioItems.filter((item) => item.featuredOnHome);
}

export function getPortfolioByIds(ids: string[]): PortfolioItem[] {
  const map = new Map(portfolioItems.map((item) => [item.id, item]));
  return ids.map((id) => map.get(id)).filter((item): item is PortfolioItem => Boolean(item));
}
