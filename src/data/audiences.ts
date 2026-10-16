export type AudienceId =
  | 'giao-vien'
  | 'nguoi-ban-hang'
  | 'van-phong'
  | 'sinh-vien'
  | 'sang-tao';

export interface AudienceServiceEntry {
  id: string;
  title: string;
  description: string;
  deliverableTag: string;
  linkedServiceId: string;
}

export interface AudienceFaqItem {
  question: string;
  answer: string;
}

export interface DynamicFormField {
  name: string;
  label: string;
  type: 'text' | 'select' | 'url' | 'textarea';
  placeholder?: string;
  options?: string[];
  helperText?: string;
}

export interface AudienceProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface AudienceConfig {
  id: AudienceId;
  slug: AudienceId;
  order: string;
  title: string;
  shortTitle: string;
  homeSummary: string;
  bannerImage: string;
  sceneImage: string;
  ogImage: string;
  bannerAlt: string;
  seoTitle: string;
  seoDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    secondaryCtaAnchor: string;
    highlightNote: string;
  };
  services: AudienceServiceEntry[];
  demoIds: string[];
  processSteps: AudienceProcessStep[];
  pricingMode: 'shop-video-plus-custom' | 'custom-quote';
  pricingExplanation: {
    headline: string;
    summary: string;
    factors: string[];
  };
  faqs: AudienceFaqItem[];
  formFields: DynamicFormField[];
}

export const audiences: AudienceConfig[] = [
  // 7.1 GIÁO VIÊN
  {
    id: 'giao-vien',
    slug: 'giao-vien',
    order: '01',
    title: 'Giáo viên',
    shortTitle: 'Giáo viên',
    homeSummary: 'Bài giảng, hoạt hình & trò chơi.',
    bannerImage: '/assets/banners/banner-giao-vien.webp',
    sceneImage: '/assets/banners/scene-giao-vien.webp',
    ogImage: '/assets/banners/banner-giao-vien.png',
    bannerAlt: 'Banner Fagon dành cho Giáo viên: Biến bài học thành trải nghiệm sinh động với slide bài giảng, video hoạt hình và web trò chơi tương tác',
    seoTitle: 'Dịch vụ cho Giáo viên — Slide bài giảng, Hoạt hình & Trò chơi tương tác | Fagon',
    seoDescription:
      'Biến bài học thành trải nghiệm sinh động với slide bài giảng, nhân vật hoạt hình, video kể chuyện và web trò chơi tương tác không cần tài khoản học sinh.',
    hero: {
      eyebrow: 'NHÓM NHU CẦU 01 • GIÁO VIÊN & GIẢNG DẠY',
      title: 'Biến bài học thành trải nghiệm sinh động.',
      description: 'Slide, hình ảnh, video và trò chơi tương tác theo nội dung bài học.',
      primaryCtaLabel: 'Trao đổi bài giảng của bạn',
      secondaryCtaLabel: 'Chơi thử trò chơi mẫu',
      secondaryCtaAnchor: '#tro-choi-mau',
      highlightNote:
        'Tất cả sản phẩm được thiết kế bám sát giáo án của giáo viên, chữ rõ trên màn chiếu và dùng ngay tại lớp.',
    },
    services: [
      {
        id: 'gv-slide-bai-giang',
        title: 'Slide bài giảng',
        description:
          'Trình bày mạch bài học rõ ràng từ hoạt động khởi động, khám phá kiến thức đến luyện tập; chữ to, dễ đọc từ cuối lớp.',
        deliverableTag: 'PPTX / Canva / PDF',
        linkedServiceId: 'slide-bai-giang-giao-vien',
      },
      {
        id: 'gv-anh-nhan-vat',
        title: 'Ảnh và nhân vật hoạt hình',
        description:
          'Tạo nhân vật đồng hành xuyên suốt tiết học và tranh minh họa trực quan theo đúng tình huống trong bài.',
        deliverableTag: 'PNG / Bộ tranh minh họa',
        linkedServiceId: 'anh-ai-nhan-vat-hoat-hinh',
      },
      {
        id: 'gv-video-ke-chuyen',
        title: 'Video hoạt hình và kể chuyện',
        description:
          'Video ngắn dẫn nhập đầu giờ, kể chuyện lịch sử, khoa học hoặc tình huống đạo đức có phụ đề và âm thanh rõ.',
        deliverableTag: 'MP4 Full HD',
        linkedServiceId: 'video-hoat-hinh-ke-chuyen',
      },
      {
        id: 'gv-kich-ban-tinh-huong',
        title: 'Kịch bản truyện, tình huống học tập',
        description:
          'Xây dựng lời thoại, câu hỏi gợi mở và bảng phân cảnh (storyboard) từ mục tiêu bài học để học sinh thảo luận.',
        deliverableTag: 'Kịch bản & Storyboard',
        linkedServiceId: 'y-tuong-kich-ban-storyboard',
      },
      {
        id: 'gv-tro-choi-tuong-tac',
        title: 'Trò chơi trắc nghiệm, ghép đôi, vòng quay, ôn tập',
        description:
          'Web trò chơi nhẹ mở ngay trên máy chiếu, bảng tương tác hoặc điện thoại; không cần học sinh đăng nhập.',
        deliverableTag: 'Web HTML chạy trực tiếp',
        linkedServiceId: 'web-tro-choi-giao-vien',
      },
      {
        id: 'gv-poster-thong-bao',
        title: 'Poster, banner, thông báo lớp học',
        description:
          'Infographic tóm tắt kiến thức treo lớp, nội quy trực quan, thông báo họp phụ huynh hoặc sự kiện ngoại khóa.',
        deliverableTag: 'Ảnh in ấn / Gửi nhóm lớp',
        linkedServiceId: 'banner-poster-infographic',
      },
    ],
    demoIds: ['demo-teacher-interactive-game', 'demo-teacher-slide-deck', 'demo-teacher-storyboard'],
    processSteps: [
      {
        stepNumber: '01',
        title: 'Gửi nội dung bài dạy, khối lớp và thời điểm tiết học',
        description:
          'Thầy cô gửi giáo án, trang sách hoặc danh sách câu hỏi cùng thiết bị dự kiến sử dụng trên lớp (máy chiếu, tivi cảm ứng, điện thoại).',
      },
      {
        stepNumber: '02',
        title: 'Thống nhất cấu trúc bài giảng, báo giá và đặt cọc',
        description:
          'Chốt số lượng slide, thời lượng video hoặc dạng trò chơi, định dạng file (có tự sửa chữ được không), số lượt sửa và mức đặt cọc.',
      },
      {
        stepNumber: '03',
        title: 'Duyệt bản mẫu, chỉnh sửa và bàn giao trước tiết dạy',
        description:
          'Thầy cô kiểm tra trước nội dung chữ, hình minh họa và thử thao tác trò chơi; Fagon hoàn thiện và bàn giao kèm hướng dẫn mở tại lớp.',
      },
    ],
    pricingMode: 'custom-quote',
    pricingExplanation: {
      headline: 'Nhận báo giá theo yêu cầu bài dạy',
      summary:
        'Chi phí học liệu được tính linh hoạt dựa trên khối lượng thực tế của tiết học (ví dụ: 1 trò chơi ôn tập lẻ, 1 bộ slide 15 trang, hay trọn gói slide + video mở đầu cho tiết thao giảng).',
      factors: [
        'Độ dài bài học (số trang slide, số câu hỏi trò chơi hoặc thời lượng video)',
        'Mức độ chuẩn bị sẵn nội dung (đã có sẵn câu hỏi/kịch bản hay cần Fagon biên tập cùng)',
        'Yêu cầu bàn giao file xuất tĩnh hay kèm file nguồn chỉnh sửa lại cho các lớp khác',
      ],
    },
    faqs: [
      {
        question: 'Trò chơi tương tác có cần mạng Internet mạnh hoặc bắt học sinh tạo tài khoản không?',
        answer:
          'Không cần tài khoản học sinh và không thu thập tên hay thông tin cá nhân của các em. Trò chơi có thể mở bằng đường link hoặc chạy trực tiếp từ file HTML ngoại tuyến ngay trên máy tính của giáo viên.',
      },
      {
        question: 'Tôi có thể tự sửa lại chữ hoặc câu hỏi trong slide sau khi nhận bàn giao không?',
        answer:
          'Có. Khi chốt phương án ở Bước 2, thầy cô chỉ cần yêu cầu định dạng PowerPoint (PPTX) hoặc Canva để chủ động thay đổi chữ, số liệu cho các tiết dạy tiếp theo.',
      },
      {
        question: 'Nội dung trên website này có phải tài liệu đã thẩm định chính thức của Bộ/Sở không?',
        answer:
          'Các sản phẩm mẫu trên trang đều là "Demo minh họa" năng lực thiết kế và lập trình. Khi thực hiện dự án thật, nội dung kiến thức luôn tuân thủ đúng giáo án và tài liệu do chính thầy cô cung cấp và phê duyệt.',
      },
    ],
    formFields: [
      {
        name: 'subjectTopic',
        label: 'Môn học / Chủ đề bài dạy',
        type: 'text',
        placeholder: 'Ví dụ: Khoa học tự nhiên — Chu trình nước trong tự nhiên',
      },
      {
        name: 'gradeAge',
        label: 'Khối lớp / Độ tuổi học sinh',
        type: 'text',
        placeholder: 'Ví dụ: Lớp 6 (11–12 tuổi) hoặc Tiểu học',
      },
      {
        name: 'teacherProductType',
        label: 'Loại sản phẩm cần thực hiện',
        type: 'select',
        options: [
          'Slide bài giảng trực quan',
          'Web trò chơi tương tác ôn tập',
          'Video hoạt hình / kể chuyện tình huống',
          'Tranh minh họa & nhân vật bài học',
          'Trọn gói tiết thao giảng (Slide + Video/Game)',
        ],
      },
      {
        name: 'classroomDevice',
        label: 'Thiết bị dùng trò chơi / trình chiếu (nếu có)',
        type: 'select',
        options: [
          'Máy tính giáo viên nối máy chiếu / Tivi',
          'Màn hình cảm ứng / Bảng tương tác thông minh',
          'Học sinh thao tác trên điện thoại / máy tính bảng',
          'Chưa dùng trò chơi / Cần tư vấn thêm',
        ],
      },
      {
        name: 'materialLink',
        label: 'Link tài liệu / giáo án nháp (Google Drive, OneDrive...)',
        type: 'url',
        placeholder: 'https://drive.google.com/...',
      },
    ],
  },

  // 7.2 NGƯỜI BÁN HÀNG
  {
    id: 'nguoi-ban-hang',
    slug: 'nguoi-ban-hang',
    order: '02',
    title: 'Người bán hàng',
    shortTitle: 'Người bán hàng',
    homeSummary: 'Ảnh, video & website cho shop.',
    bannerImage: '/assets/banners/banner-nguoi-ban-hang.webp',
    sceneImage: '/assets/banners/scene-nguoi-ban-hang.webp',
    ogImage: '/assets/banners/banner-nguoi-ban-hang.png',
    bannerAlt: 'Banner Fagon dành cho Người bán hàng: Hình ảnh thu hút, khách dễ xem dễ chọn với ảnh người mẫu AI, video quảng cáo và web Lookbook',
    seoTitle: 'Dịch vụ cho Người bán hàng & Shop — Ảnh người mẫu AI, Video thời trang & Lookbook | Fagon',
    seoDescription:
      'Hình ảnh thu hút, khách dễ xem dễ chọn: Ảnh người mẫu AI, video thời trang, video quảng cáo, ảnh sản phẩm CGI và website Lookbook cho shop.',
    hero: {
      eyebrow: 'NHÓM NHU CẦU 02 • THỜI TRANG, MỸ PHẨM & BÁN LẺ',
      title: 'Hình ảnh thu hút. Khách dễ xem, dễ chọn.',
      description:
        'Từ ảnh chụp treo móc, trải sàn đến bộ hình lên dáng người mẫu, video chuyển động và trang Lookbook giới thiệu sản phẩm rõ ràng.',
      primaryCtaLabel: 'Nhận tư vấn cho shop',
      secondaryCtaLabel: 'Xem so sánh Before / After',
      secondaryCtaAnchor: '#before-after-demo',
      highlightNote:
        'Luôn kiểm tra và duyệt ảnh người mẫu tĩnh trước khi tạo chuyển động video. Đang áp dụng ưu đãi 70% cho 3 gói video shop đến hết 20/10/2026.',
    },
    services: [
      {
        id: 'shop-anh-nguoi-mau-ai',
        title: 'Ảnh người mẫu AI',
        description:
          'Lên dáng trang phục từ ảnh chụp treo móc hoặc trải sàn, giúp khách hình dung phom áo quần thực tế.',
        deliverableTag: 'Ảnh 4:5 / 3:4 / 9:16',
        linkedServiceId: 'anh-nguoi-mau-ai',
      },
      {
        id: 'shop-video-thoi-trang',
        title: 'Video thời trang',
        description:
          'Tạo chuyển động bước đi, xoay dáng tự nhiên từ ảnh người mẫu hoặc ma-nơ-canh đã duyệt (5–20 giây).',
        deliverableTag: 'MP4 Dọc / Vuông',
        linkedServiceId: 'video-thoi-trang-quang-cao-shop',
      },
      {
        id: 'shop-video-quang-cao',
        title: 'Video quảng cáo',
        description:
          'Video 20–40 giây có kịch bản mở đầu, giọng đọc hoặc nhép môi, 3–4 bối cảnh và phụ đề thu hút.',
        deliverableTag: 'MP4 Quảng cáo 20–40s',
        linkedServiceId: 'video-thoi-trang-quang-cao-shop',
      },
      {
        id: 'shop-anh-cgi-san-pham',
        title: 'Ảnh và CGI sản phẩm',
        description:
          'Đặt mỹ phẩm, giày dép, túi xách vào bối cảnh studio ánh sáng đẹp, làm nổi bật chất liệu sản phẩm.',
        deliverableTag: 'Ảnh sản phẩm & CGI',
        linkedServiceId: 'anh-san-pham-cgi',
      },
      {
        id: 'shop-banner-bai-dang',
        title: 'Banner, ảnh thông báo, bài đăng',
        description:
          'Thiết kế bộ ảnh chương trình khuyến mãi, bảng size, hướng dẫn bảo quản và ảnh bìa đồng bộ cho gian hàng.',
        deliverableTag: 'Bộ ảnh Social / Sàn',
        linkedServiceId: 'banner-poster-infographic',
      },
      {
        id: 'shop-website-lookbook',
        title: 'Website và Lookbook',
        description:
          'Trang web giới thiệu bộ sưu tập mới hoặc danh mục sản phẩm gọn nhẹ, tải nhanh trên điện thoại để gửi khách.',
        deliverableTag: 'Website / Lookbook tĩnh',
        linkedServiceId: 'website-gioi-thieu-lookbook-portfolio',
      },
    ],
    demoIds: [
      'demo-shop-before-after',
      'demo-shop-cosmetics-cgi',
      'demo-shop-ad-concept',
      'demo-shop-lookbook-web',
    ],
    processSteps: [
      {
        stepNumber: '01',
        title: 'Gửi ảnh sản phẩm đầu vào và mong muốn của shop',
        description:
          'Shop gửi ảnh chụp treo móc/trải sàn/ma-nơ-canh rõ nét kèm mô tả phom dáng, chất liệu và chọn gói dự kiến.',
      },
      {
        stepNumber: '02',
        title: 'Kiểm tra độ phức tạp họa tiết, chốt báo giá và đặt cọc',
        description:
          'Fagon đánh giá ảnh đầu vào (lưu ý phụ thu nếu họa tiết ren/thêu phức tạp), chốt số lượng mẫu, thời gian và nhận cọc 50–100%.',
      },
      {
        stepNumber: '03',
        title: 'Duyệt ảnh tĩnh trước — Dựng chuyển động video và bàn giao',
        description:
          'Shop kiểm tra và duyệt ảnh lên dáng người mẫu trước. Sau khi ảnh đạt yêu cầu, Fagon mới tiến hành tạo chuyển động video, ghép nhạc/phụ đề và bàn giao.',
      },
    ],
    pricingMode: 'shop-video-plus-custom',
    pricingExplanation: {
      headline: 'Bảng giá 3 gói Video cho Shop & Báo giá riêng theo hạng mục',
      summary:
        'Ba gói video thời trang/bán hàng đã có khung giá cố định kèm ưu đãi giảm 70% đến hết 20/10/2026 (UTC+7). Các dịch vụ ảnh lẻ, CGI, banner và website Lookbook được báo giá theo yêu cầu cụ thể.',
      factors: [
        'Chất lượng ảnh chụp đầu vào và độ phức tạp của họa tiết/chất liệu trang phục',
        'Thời lượng video, số góc máy và yêu cầu kịch bản giọng đọc/phụ đề',
        'Đặt lẻ từng mẫu hay đăng ký gói combo định kỳ 5 mẫu / 15 mẫu mỗi tháng',
      ],
    },
    faqs: [
      {
        question: 'Ảnh AI lên người mẫu có giữ chính xác tuyệt đối 100% mọi chi tiết nhỏ của quần áo không?',
        answer:
          'Fagon không hứa hẹn giữ chính xác tuyệt đối từng sợi dệt hay chi tiết siêu nhỏ trong mọi trường hợp. Thay vào đó, Fagon áp dụng quy trình kiểm tra ảnh đầu vào và gửi ảnh người mẫu tĩnh để chủ shop duyệt kỹ phom dáng, màu sắc trước khi dựng thành video chuyển động.',
      },
      {
        question: 'Cần chụp ảnh sản phẩm đầu vào như thế nào để lên dáng đẹp nhất?',
        answer:
          'Bạn chỉ cần chụp bằng điện thoại ở nơi đủ ánh sáng tự nhiên, treo áo quần thẳng phom trên móc hoặc trải phẳng trên nền trơn, góc chụp thẳng chính diện, không bị nhăn nhúm hoặc che khuất chi tiết cổ và tay áo.',
      },
      {
        question: 'Ưu đãi giảm 70% áp dụng cho những dịch vụ nào?',
        answer:
          'Ưu đãi giảm 70% (đến hết ngày 20/10/2026, UTC+7) áp dụng riêng cho 3 gói sản xuất video phục vụ shop (Cơ bản, Tiêu chuẩn, Quảng cáo). Các hạng mục thiết kế lẻ, CGI sản phẩm hay làm website Lookbook sẽ được báo giá riêng theo khối lượng.',
      },
    ],
    formFields: [
      {
        name: 'shopName',
        label: 'Tên shop / Thương hiệu',
        type: 'text',
        placeholder: 'Ví dụ: Atelier Linen / Tiệm Giày Mộc',
      },
      {
        name: 'productCategory',
        label: 'Ngành hàng kinh doanh',
        type: 'select',
        options: [
          'Thời trang nữ / Thiết kế',
          'Thời trang nam / Unisex',
          'Giày dép / Túi xách / Phụ kiện',
          'Mỹ phẩm / Chăm sóc cá nhân',
          'Đồ gia dụng / Quà tặng / Khác',
        ],
      },
      {
        name: 'productCount',
        label: 'Số lượng mẫu / sản phẩm dự kiến',
        type: 'text',
        placeholder: 'Ví dụ: Thử 2 mẫu lẻ hoặc Combo 5 mẫu/tháng',
      },
      {
        name: 'shopLink',
        label: 'Link gian hàng / Fanpage hiện tại (nếu có)',
        type: 'url',
        placeholder: 'https://facebook.com/... hoặc link Shopee/Instagram',
      },
    ],
  },

  // 7.3 VĂN PHÒNG
  {
    id: 'van-phong',
    slug: 'van-phong',
    order: '03',
    title: 'Văn phòng',
    shortTitle: 'Văn phòng',
    homeSummary: 'Slide, báo cáo & thiết kế.',
    bannerImage: '/assets/banners/banner-van-phong.webp',
    sceneImage: '/assets/banners/scene-van-phong.webp',
    ogImage: '/assets/banners/banner-van-phong.png',
    bannerAlt: 'Banner Fagon dành cho Văn phòng: Trình bày rõ ràng, tạo dấu ấn chuyên nghiệp với slide thuyết trình, báo cáo, infographic và banner',
    seoTitle: 'Dịch vụ cho Nhân viên Văn phòng & Doanh nghiệp — Slide báo cáo, Infographic & Website | Fagon',
    seoDescription:
      'Trình bày rõ ràng, tạo dấu ấn chuyên nghiệp: Thiết kế slide báo cáo, đề xuất dự án, hồ sơ doanh nghiệp, infographic quy trình, poster sự kiện và website giới thiệu.',
    hero: {
      eyebrow: 'NHÓM NHU CẦU 03 • VĂN PHÒNG & DOANH NGHIỆP',
      title: 'Trình bày rõ ràng. Tạo dấu ấn chuyên nghiệp.',
      description:
        'Chuyển hóa các bản báo cáo dày đặc chữ, bảng số liệu và quy trình vận hành thành slide thuyết trình, sơ đồ infographic và ấn phẩm nội bộ mạch lạc.',
      primaryCtaLabel: 'Trao đổi tài liệu cần trình bày',
      secondaryCtaLabel: 'Xem mẫu bố cục báo cáo',
      secondaryCtaAnchor: '#demo-section',
      highlightNote:
        'Tôn trọng quy chuẩn nhận diện thương hiệu và cam kết bảo mật tài liệu làm việc được chia sẻ.',
    },
    services: [
      {
        id: 'vp-slide-bao-cao',
        title: 'Slide báo cáo, thuyết trình',
        description:
          'Thiết kế lại slide tổng kết quý/năm, báo cáo tiến độ hoặc thuyết trình chuyên đề với biểu đồ dễ nắm bắt.',
        deliverableTag: 'PPTX / PDF 16:9',
        linkedServiceId: 'slide-bao-cao-van-phong',
      },
      {
        id: 'vp-gioi-thieu-du-an',
        title: 'Giới thiệu doanh nghiệp hoặc dự án',
        description:
          'Biên tập bố cục Company Profile, Pitch Deck gọi vốn hoặc tài liệu đề xuất giải pháp gửi khách hàng, đối tác.',
        deliverableTag: 'Company Profile / Deck',
        linkedServiceId: 'slide-bao-cao-van-phong',
      },
      {
        id: 'vp-infographic-so-do',
        title: 'Infographic và sơ đồ',
        description:
          'Trực quan hóa quy trình phối hợp liên phòng ban, sơ đồ tổ chức hoặc hướng dẫn nghiệp vụ trên 1 trang gọn gàng.',
        deliverableTag: 'Infographic / Flowchart',
        linkedServiceId: 'banner-poster-infographic',
      },
      {
        id: 'vp-banner-poster-su-kien',
        title: 'Banner nội bộ, thông báo, poster sự kiện',
        description:
          'Thiết kế ấn phẩm thông báo nhân sự, phát động phong trào, backdrop/standee hội thảo hoặc bản tin nội bộ.',
        deliverableTag: 'Ấn phẩm Digital & In ấn',
        linkedServiceId: 'banner-poster-infographic',
      },
      {
        id: 'vp-video-huong-dan',
        title: 'Video hướng dẫn',
        description:
          'Video giới thiệu quy trình làm việc cho nhân sự mới (onboarding) hoặc hướng dẫn sử dụng sản phẩm/dịch vụ.',
        deliverableTag: 'Video MP4 có phụ đề',
        linkedServiceId: 'y-tuong-kich-ban-storyboard',
      },
      {
        id: 'vp-website-gioi-thieu',
        title: 'Website giới thiệu',
        description:
          'Landing page giới thiệu dự án mới, sự kiện doanh nghiệp hoặc trang thông tin dịch vụ gọn gàng, chuẩn mực.',
        deliverableTag: 'Website tĩnh chuẩn SEO',
        linkedServiceId: 'website-gioi-thieu-lookbook-portfolio',
      },
    ],
    demoIds: ['demo-office-report-slide', 'demo-office-infographic'],
    processSteps: [
      {
        stepNumber: '01',
        title: 'Gửi nội dung dự thảo, quy chuẩn thương hiệu và lịch họp',
        description:
          'Bạn gửi file nội dung (Word, Excel, slide nháp), bộ màu/logo công ty (nếu có) và mốc thời gian buổi báo cáo.',
      },
      {
        stepNumber: '02',
        title: 'Thống nhất cấu trúc trang mẫu (key slides), báo giá và đặt cọc',
        description:
          'Chốt số trang, phong cách trình bày thông qua 2–3 trang mẫu đầu tiên, định dạng file bàn giao (PPTX chỉnh sửa được) và chi phí.',
      },
      {
        stepNumber: '03',
        title: 'Dàn trang toàn bộ, rà soát số liệu và bàn giao đúng hạn',
        description:
          'Hoàn thiện toàn bộ các trang, kiểm tra đồng bộ phông chữ để mở trên máy phòng họp không bị lỗi, chỉnh sửa tối đa 02 lượt và bàn giao.',
      },
    ],
    pricingMode: 'custom-quote',
    pricingExplanation: {
      headline: 'Nhận báo giá theo khối lượng trang và mức độ xử lý thông tin',
      summary:
        'Chi phí phụ thuộc vào số lượng slide/ấn phẩm, tình trạng nội dung đầu vào (đã chia sẵn theo từng trang hay còn là văn bản Word dài cần tóm lược) và thời gian cần nhận.',
      factors: [
        'Số lượng trang slide hoặc số lượng hạng mục thiết kế',
        'Mức độ biểu đồ hóa dữ liệu, vẽ lại sơ đồ quy trình và tạo hình minh họa riêng',
        'Thời gian tiêu chuẩn hay cần ưu tiên gấp cho cuộc họp sắp tới',
      ],
    },
    faqs: [
      {
        question: 'Khi mở file PowerPoint trên máy tính ở phòng họp có bị lỗi phông chữ tiếng Việt không?',
        answer:
          'Không. Fagon ưu tiên sử dụng phông chữ chuẩn hỗ trợ tiếng Việt đầy đủ, nhúng phông (embed fonts) vào file PPTX và luôn gửi kèm một bản PDF độ phân giải cao dự phòng để bạn trình chiếu an toàn trên mọi thiết bị.',
      },
      {
        question: 'Tài liệu báo cáo của công ty gửi qua có được bảo mật không?',
        answer:
          'Mọi tài liệu, số liệu nội bộ khách hàng chia sẻ chỉ được dùng duy nhất cho việc thực hiện dự án đó và tuyệt đối không được đăng làm sản phẩm mẫu công khai. Các số liệu trên website Fagon hiện tại đều là dữ liệu minh họa giả định.',
      },
      {
        question: 'Sau khi bàn giao, tôi có tự cập nhật được số liệu cho kỳ báo cáo tháng sau không?',
        answer:
          'Hoàn toàn được. Các bảng biểu và ô chữ trong file PPTX được dựng bằng thành phần gốc của PowerPoint (không phải ảnh chụp cứng), giúp bạn nhấp đúp để đổi số liệu mới dễ dàng.',
      },
    ],
    formFields: [
      {
        name: 'officePurpose',
        label: 'Mục đích sử dụng tài liệu',
        type: 'select',
        options: [
          'Báo cáo nội bộ / Tổng kết định kỳ',
          'Đề xuất dự án / Trình duyệt ngân sách',
          'Giới thiệu doanh nghiệp / Hồ sơ năng lực gửi đối tác',
          'Truyền thông nội bộ / Đào tạo nhân sự',
          'Sự kiện / Hội thảo / Khác',
        ],
      },
      {
        name: 'targetViewer',
        label: 'Đối tượng người xem chính',
        type: 'text',
        placeholder: 'Ví dụ: Ban giám đốc, Khách hàng B2B, Nhân viên toàn công ty...',
      },
      {
        name: 'slideCountOrDuration',
        label: 'Số lượng slide / trang hoặc thời lượng dự kiến',
        type: 'text',
        placeholder: 'Ví dụ: Khoảng 15–20 slide hoặc 1 infographic A3',
      },
      {
        name: 'deliveryFormat',
        label: 'Định dạng bàn giao mong muốn',
        type: 'select',
        options: [
          'PowerPoint (PPTX) chỉnh sửa được + PDF',
          'Google Slides / Canva + PDF',
          'File ảnh / PDF in ấn chất lượng cao',
          'Video MP4 / Website tĩnh',
        ],
      },
      {
        name: 'brandGuidelineNote',
        label: 'Yêu cầu nhận diện thương hiệu (Logo, màu sắc, font chữ)',
        type: 'text',
        placeholder: 'Ví dụ: Đã có Brand Guideline / Dùng tông xanh navy trang nhã...',
      },
    ],
  },

  // 7.4 SINH VIÊN
  {
    id: 'sinh-vien',
    slug: 'sinh-vien',
    order: '04',
    title: 'Sinh viên',
    shortTitle: 'Sinh viên',
    homeSummary: 'Thuyết trình & portfolio.',
    bannerImage: '/assets/banners/banner-sinh-vien.webp',
    sceneImage: '/assets/banners/scene-sinh-vien.webp',
    ogImage: '/assets/banners/banner-sinh-vien.png',
    bannerAlt: 'Banner Fagon dành cho Sinh viên: Đưa ý tưởng của bạn lên một cách thuyết phục với slide đồ án, poster học thuật, video và web portfolio',
    seoTitle: 'Dịch vụ cho Sinh viên — Slide đồ án, Poster học thuật & Website Portfolio | Fagon',
    seoDescription:
      'Đưa ý tưởng của bạn lên một cách thuyết phục: Thiết kế slide thuyết trình từ nội dung đã chuẩn bị, poster đồ án, video minh họa và website portfolio cá nhân.',
    hero: {
      eyebrow: 'NHÓM NHU CẦU 04 • ĐỒ ÁN, NGHIÊN CỨU & PORTFOLIO',
      title: 'Đưa ý tưởng của bạn lên một cách thuyết phục.',
      description:
        'Giúp phần nội dung nghiên cứu và công sức làm đồ án của bạn được trình bày sáng sủa, đúng cấu trúc học thuật và gây ấn tượng thị giác tốt trước hội đồng.',
      primaryCtaLabel: 'Gửi yêu cầu hỗ trợ trình bày',
      secondaryCtaLabel: 'Xem mẫu slide & portfolio',
      secondaryCtaAnchor: '#demo-section',
      highlightNote:
        'Fagon thiết kế và trình bày dựa trên nội dung thực do bạn chuẩn bị — không bịa số liệu nghiên cứu và không hứa hẹn điểm số.',
    },
    services: [
      {
        id: 'sv-slide-thuyet-trinh',
        title: 'Slide từ nội dung đã chuẩn bị',
        description:
          'Sắp xếp dàn ý, phân cấp tiêu đề và sơ đồ hóa nội dung bài tiểu luận, khóa luận tốt nghiệp hoặc bài thi cuộc thi học thuật.',
        deliverableTag: 'Slide PPTX / Canva',
        linkedServiceId: 'slide-thuyet-trinh-sinh-vien',
      },
      {
        id: 'sv-poster-infographic',
        title: 'Poster, infographic',
        description:
          'Thiết kế poster học thuật (Academic Poster khổ A0/A1) trưng bày ngày bảo vệ hoặc infographic tóm tắt kết quả khảo sát.',
        deliverableTag: 'Poster in ấn & PDF',
        linkedServiceId: 'banner-poster-infographic',
      },
      {
        id: 'sv-video-minh-hoa',
        title: 'Video minh họa',
        description:
          'Video giới thiệu ý tưởng sản phẩm, mô phỏng kịch bản sử dụng hoặc clip mở đầu 30–60 giây cho bài thuyết trình nhóm.',
        deliverableTag: 'Video MP4 ngắn',
        linkedServiceId: 'video-hoat-hinh-ke-chuyen',
      },
      {
        id: 'sv-website-portfolio',
        title: 'Website portfolio',
        description:
          'Trang web cá nhân tổng hợp các bài tập lớn, dự án thực tập và kỹ năng để đính kèm vào CV khi ứng tuyển.',
        deliverableTag: 'Web Portfolio cá nhân',
        linkedServiceId: 'website-gioi-thieu-lookbook-portfolio',
      },
      {
        id: 'sv-hinh-anh-do-an-clb',
        title: 'Hình ảnh cho đồ án hoặc câu lạc bộ',
        description:
          'Bộ hình minh họa đồng bộ cho dự án truyền thông, sự kiện câu lạc bộ sinh viên hoặc nhân vật linh vật (mascot) nhóm.',
        deliverableTag: 'Bộ ảnh truyền thông',
        linkedServiceId: 'anh-ai-nhan-vat-hoat-hinh',
      },
    ],
    demoIds: ['demo-student-pitch-deck', 'demo-student-poster', 'demo-student-portfolio-web'],
    processSteps: [
      {
        stepNumber: '01',
        title: 'Gửi nội dung đã chuẩn bị, yêu cầu của khoa/cuộc thi và hạn nộp',
        description:
          'Bạn gửi bản nháp nội dung theo từng phần, quy định hình thức (nếu trường/cuộc thi có yêu cầu) và ngân sách dự kiến của cá nhân/nhóm.',
      },
      {
        stepNumber: '02',
        title: 'Đề xuất phương án phù hợp ngân sách và chốt phạm vi',
        description:
          'Fagon tư vấn gói trình bày vừa vặn với ngân sách sinh viên, thống nhất phong cách thiết kế, số trang và thời gian hoàn thành.',
      },
      {
        stepNumber: '03',
        title: 'Duyệt bố cục, tinh chỉnh và bàn giao file dễ tự chỉnh sửa',
        description:
          'Bàn giao file PowerPoint/Canva hoặc mã nguồn web để bạn tự tin luyện tập thuyết trình và chủ động cập nhật khi giảng viên hướng dẫn góp ý.',
      },
    ],
    pricingMode: 'custom-quote',
    pricingExplanation: {
      headline: 'Nhận báo giá phù hợp với phạm vi bài tập & ngân sách sinh viên',
      summary:
        'Hiểu rõ đặc thù ngân sách của sinh viên và nhóm làm đồ án, Fagon luôn tư vấn phương án tối ưu nhất dựa trên phần nội dung bạn đã tự chuẩn bị sẵn.',
      factors: [
        'Mức độ hoàn thiện của nội dung chữ và số liệu đầu vào do bạn cung cấp',
        'Số lượng trang slide, kích thước poster hoặc số mục trong trang portfolio',
        'Thời gian cần nhận bài (đặt sớm trước kỳ bảo vệ sẽ tối ưu chi phí hơn)',
      ],
    },
    faqs: [
      {
        question: 'Fagon có nhận làm hộ nội dung nghiên cứu hay tự điền số liệu khảo sát không?',
        answer:
          'Không. Fagon tôn trọng tính trung thực học thuật: chúng tôi chỉ nhận thiết kế, sơ đồ hóa và nâng cấp cách trình bày từ nội dung, số liệu do chính bạn hoặc nhóm của bạn đã nghiên cứu và chuẩn bị.',
      },
      {
        question: 'Nếu giảng viên hướng dẫn yêu cầu sửa lại một vài số liệu sát ngày bảo vệ thì sao?',
        answer:
          'File bàn giao luôn ở định dạng mở (PowerPoint hoặc Canva) để bạn có thể tự sửa chữ và số ngay lập tức trong vài giây. Ngoài ra, đơn hàng luôn bao gồm 02 lượt hỗ trợ điều chỉnh bố cục trong phạm vi đã chốt.',
      },
      {
        question: 'Nhóm mình có ngân sách hạn chế thì có thể làm từng phần quan trọng trước không?',
        answer:
          'Rất khuyến khích. Bạn có thể ghi rõ ngân sách dự kiến trong biểu mẫu; Fagon sẽ gợi ý cách làm bộ khung (template) chuẩn và thiết kế kỹ các slide đinh (Đặt vấn đề, Sơ đồ phương pháp, Kết quả) để các thành viên trong nhóm tự nhân bản các trang còn lại.',
      },
    ],
    formFields: [
      {
        name: 'studentPurpose',
        label: 'Mục đích bài trình bày / dự án',
        type: 'select',
        options: [
          'Bảo vệ khóa luận / Đồ án tốt nghiệp',
          'Thuyết trình môn học / Tiểu luận nhóm',
          'Thi học thuật / Khởi nghiệp sinh viên',
          'Làm Website Portfolio ứng tuyển thực tập / việc làm',
          'Ấn phẩm sự kiện Câu lạc bộ',
        ],
      },
      {
        name: 'preparedContentState',
        label: 'Tình trạng nội dung đã có',
        type: 'select',
        options: [
          'Đã có đầy đủ nội dung từng trang / slide nháp',
          'Đã có bài báo cáo Word hoàn chỉnh, cần chia bố cục slide',
          'Đã có dàn ý chính và số liệu, đang hoàn thiện chi tiết',
        ],
      },
      {
        name: 'presentationRequirement',
        label: 'Yêu cầu trình bày cụ thể (nếu có)',
        type: 'text',
        placeholder: 'Ví dụ: Tông màu sáng học thuật, cần vẽ lại 2 sơ đồ quy trình...',
      },
      {
        name: 'studentPageCount',
        label: 'Số trang / thời lượng dự kiến',
        type: 'text',
        placeholder: 'Ví dụ: 12 slide thuyết trình trong 10 phút / 1 Poster A1',
      },
      {
        name: 'studentEstimatedBudget',
        label: 'Ngân sách dự kiến của bạn / nhóm',
        type: 'text',
        placeholder: 'Ví dụ: Khoảng 300.000đ – 600.000đ (để Fagon tư vấn phương án vừa vặn)',
      },
    ],
  },

  // 7.5 SÁNG TẠO & CÁ NHÂN
  {
    id: 'sang-tao',
    slug: 'sang-tao',
    order: '05',
    title: 'Sáng tạo & cá nhân',
    shortTitle: 'Sáng tạo & cá nhân',
    homeSummary: 'Kịch bản, hình ảnh & video.',
    bannerImage: '/assets/banners/banner-sang-tao.webp',
    sceneImage: '/assets/banners/scene-sang-tao.webp',
    ogImage: '/assets/banners/banner-sang-tao.png',
    bannerAlt: 'Banner Fagon dành cho Sáng tạo và Cá nhân: Ý tưởng của bạn, một cách thể hiện riêng với ảnh hoạt hình, kịch bản, nhân vật và video theo yêu cầu',
    seoTitle: 'Dịch vụ cho Nhà sáng tạo & Cá nhân — Nhân vật AI, Kịch bản, Storyboard & Video kể chuyện | Fagon',
    seoDescription:
      'Ý tưởng của bạn, một cách thể hiện riêng: Thiết kế nhân vật đồng bộ, phát triển kịch bản, storyboard, video kể chuyện, video kỷ niệm và bộ hình cho kênh cá nhân.',
    hero: {
      eyebrow: 'NHÓM NHU CẦU 05 • NHÀ SÁNG TẠO & DỰ ÁN CÁ NHÂN',
      title: 'Ý tưởng của bạn. Một cách thể hiện riêng.',
      description:
        'Đồng hành cùng người viết truyện, chủ kênh nội dung và khách hàng cá nhân để biến một câu chuyện, một nhân vật trong trí tưởng tượng hay một kỷ niệm đáng nhớ thành hình ảnh và video có chiều sâu.',
      primaryCtaLabel: 'Kể cho Fagon nghe ý tưởng của bạn',
      secondaryCtaLabel: 'Xem mẫu nhân vật & storyboard',
      secondaryCtaAnchor: '#demo-section',
      highlightNote:
        'Không rập khuôn đại trà — mỗi dự án được xây dựng bảng màu, tạo hình nhân vật và nhịp kể chuyện riêng.',
    },
    services: [
      {
        id: 'st-anh-ai-hoat-hinh',
        title: 'Ảnh AI và hoạt hình',
        description:
          'Minh họa cảnh truyện, bìa sách/podcast, tranh nghệ thuật theo phong cách riêng từ mô tả chi tiết.',
        deliverableTag: 'Bộ ảnh độ phân giải cao',
        linkedServiceId: 'anh-ai-nhan-vat-hoat-hinh',
      },
      {
        id: 'st-xay-dung-nhan-vat',
        title: 'Nhân vật',
        description:
          'Thiết kế hồ sơ nhân vật (Character Sheet) giữ nét mặt và trang phục đồng nhất qua nhiều góc nhìn và biểu cảm.',
        deliverableTag: 'Character Sheet đồng bộ',
        linkedServiceId: 'anh-ai-nhan-vat-hoat-hinh',
      },
      {
        id: 'st-y-tuong-kich-ban',
        title: 'Ý tưởng, kịch bản, storyboard',
        description:
          'Cùng bạn cấu trúc lại ý tưởng sơ khai thành kịch bản phân cảnh có mở đầu, cao trào, lời dẫn và góc máy rõ ràng.',
        deliverableTag: 'Kịch bản & Storyboard',
        linkedServiceId: 'y-tuong-kich-ban-storyboard',
      },
      {
        id: 'st-video-ke-chuyen',
        title: 'Video kể chuyện, hoạt hình',
        description:
          'Sản xuất video ngắn hoặc tập truyện hoạt hình kết hợp chuyển động, ánh sáng, âm nhạc và giọng đọc truyền cảm.',
        deliverableTag: 'Video MP4 hoàn chỉnh',
        linkedServiceId: 'video-hoat-hinh-ke-chuyen',
      },
      {
        id: 'st-video-ky-niem',
        title: 'Video kỷ niệm và theo yêu cầu',
        description:
          'Tái hiện hành trình kỷ niệm gia đình, tình bạn, lời chúc dịp đặc biệt bằng hình ảnh minh họa và câu chuyện ấm áp.',
        deliverableTag: 'Video cá nhân hóa',
        linkedServiceId: 'y-tuong-kich-ban-storyboard',
      },
      {
        id: 'st-banner-anh-bia',
        title: 'Banner, ảnh bìa, thông báo',
        description:
          'Thiết kế ảnh bìa YouTube/Facebook/Podcast, khung thumbnail và thông báo ra mắt tập mới cho kênh.',
        deliverableTag: 'Ảnh bìa & Thumbnail',
        linkedServiceId: 'banner-poster-infographic',
      },
      {
        id: 'st-bo-hinh-dong-bo-kenh',
        title: 'Bộ hình đồng bộ cho kênh',
        description:
          'Xây dựng phong cách thị giác xuyên suốt (màu sắc, ánh sáng, bố cục chữ) để người xem nhận ra kênh của bạn ngay lập tức.',
        deliverableTag: 'Visual Kit cho kênh',
        linkedServiceId: 'anh-ai-nhan-vat-hoat-hinh',
      },
    ],
    demoIds: ['demo-creator-character-sheet', 'demo-creator-storyboard', 'demo-student-portfolio-web'],
    processSteps: [
      {
        stepNumber: '01',
        title: 'Chia sẻ câu chuyện, cảm hứng mỹ thuật và mục đích sử dụng',
        description:
          'Bạn gửi tóm tắt ý tưởng, cảm xúc chủ đạo, các hình ảnh/bộ phim bạn yêu thích về mặt màu sắc và thời lượng mong muốn.',
      },
      {
        stepNumber: '02',
        title: 'Chốt tạo hình nhân vật / moodboard, báo giá và đặt cọc',
        description:
          'Thống nhất bảng phong cách (moodboard), phạm vi sản phẩm, quyền sử dụng (cá nhân hay thương mại trên kênh) và chi phí.',
      },
      {
        stepNumber: '03',
        title: 'Duyệt storyboard & khung hình tĩnh trước khi hoàn thiện video',
        description:
          'Bạn duyệt từng khung hình tĩnh và tạo hình nhân vật để đảm bảo đúng tinh thần câu chuyện, sau đó Fagon mới kết xuất chuyển động và âm thanh.',
      },
    ],
    pricingMode: 'custom-quote',
    pricingExplanation: {
      headline: 'Nhận báo giá theo độ chi tiết mỹ thuật và độ dài câu chuyện',
      summary:
        'Mỗi dự án sáng tạo có yêu cầu rất khác nhau (từ việc thiết kế 1 nhân vật đại diện kênh đến sản xuất trọn vẹn 1 video kể chuyện nhiều phân cảnh), nên Fagon báo giá riêng sau khi lắng nghe ý tưởng của bạn.',
      factors: [
        'Số lượng nhân vật cần giữ nét đồng nhất và số lượng bối cảnh trong câu chuyện',
        'Đã có sẵn kịch bản phân cảnh/lời thu âm hay cần Fagon phát triển từ ý tưởng gốc',
        'Thời lượng video hoặc số lượng tranh minh họa trong bộ sản phẩm',
      ],
    },
    faqs: [
      {
        question: 'Làm sao để nhân vật AI không bị biến đổi khuôn mặt qua các bức ảnh khác nhau?',
        answer:
          'Fagon xây dựng bảng tạo hình nhân vật chuẩn (Character Sheet) ở nhiều góc độ và kiểm soát tham số đồng nhất kết hợp tinh chỉnh thủ công từng khung hình, giúp nhân vật giữ được nhận diện xuyên suốt câu chuyện.',
      },
      {
        question: 'Tôi mới chỉ có một ý tưởng ngắn vài dòng, chưa biết viết kịch bản video thì có làm được không?',
        answer:
          'Hoàn toàn được. Bạn chỉ cần kể lại câu chuyện hoặc thông điệp muốn truyền tải; Fagon sẽ giúp bạn chia thành các phân cảnh (storyboard) và viết lời dẫn gợi ý để bạn duyệt trước khi bắt tay vào phần hình ảnh.',
      },
      {
        question: 'Hình ảnh và video sau khi bàn giao tôi có được toàn quyền đăng lên kênh cá nhân không?',
        answer:
          'Có. Ngay ở Bước 2, hai bên sẽ chốt rõ quyền sử dụng cho kênh cá nhân hoặc thương mại của bạn, đồng thời Fagon tôn trọng quyền riêng tư đối với các câu chuyện và kỷ niệm cá nhân.',
      },
    ],
    formFields: [
      {
        name: 'storyIdeaSummary',
        label: 'Tóm tắt ý tưởng / Câu chuyện của bạn',
        type: 'textarea',
        placeholder: 'Chia sẻ ngắn gọn cốt truyện, thông điệp hoặc chủ đề kênh bạn đang ấp ủ...',
      },
      {
        name: 'creatorTargetAudience',
        label: 'Người xem mục tiêu',
        type: 'text',
        placeholder: 'Ví dụ: Người nghe podcast chữa lành, Độc giả truyện thiếu nhi, Gia đình & bạn bè...',
      },
      {
        name: 'visualStylePreference',
        label: 'Phong cách hình ảnh mong muốn',
        type: 'select',
        options: [
          'Hoạt hình 2D ấm áp / Storybook',
          'Bán hiện thực điện ảnh (Cinematic Semi-realistic)',
          '3D mềm mại / Hiện đại',
          'Màu nước / Tranh vẽ tay nghệ thuật',
          'Chưa xác định — Cần Fagon gợi ý theo câu chuyện',
        ],
      },
      {
        name: 'creatorVolumeDuration',
        label: 'Số lượng ảnh hoặc thời lượng video dự kiến',
        type: 'text',
        placeholder: 'Ví dụ: 1 bảng nhân vật + 10 tranh minh họa / Video 60 giây',
      },
      {
        name: 'scriptOrCharacterReady',
        label: 'Bạn đã có kịch bản hoặc tạo hình nhân vật chưa?',
        type: 'select',
        options: [
          'Mới có ý tưởng sơ bộ, cần phát triển thêm',
          'Đã có kịch bản chữ, chưa có hình ảnh nhân vật',
          'Đã có sẵn tạo hình nhân vật, cần làm bộ ảnh / video mới',
          'Đã có cả kịch bản và nhân vật mẫu',
        ],
      },
    ],
  },
];

export function getAudienceBySlug(slug: string): AudienceConfig | undefined {
  return audiences.find((a) => a.slug === slug);
}
