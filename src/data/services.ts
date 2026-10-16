export type OutputCategoryId =
  | 'anh-thiet-ke'
  | 'video-ke-chuyen'
  | 'slide-trinh-bay'
  | 'website-tuong-tac';

export interface OutputCategory {
  id: OutputCategoryId;
  title: string;
  shortLabel: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  categoryId: OutputCategoryId;
  audienceIds: string[];
  shortDescription: string;
  inputsRequired: string[];
  deliverables: string[];
  demoIds: string[];
  pricingHint: string;
}

export const outputCategories: OutputCategory[] = [
  {
    id: 'anh-thiet-ke',
    title: 'Ảnh & thiết kế',
    shortLabel: 'Ảnh & thiết kế',
    description:
      'Ảnh người mẫu AI, ảnh sản phẩm & CGI, nhân vật hoạt hình, bộ hình kênh cá nhân, poster, banner và infographic.',
  },
  {
    id: 'video-ke-chuyen',
    title: 'Video & kể chuyện',
    shortLabel: 'Video & kể chuyện',
    description:
      'Video thời trang, video quảng cáo sản phẩm, hoạt hình bài giảng, kịch bản kể chuyện, storyboard và video theo yêu cầu.',
  },
  {
    id: 'slide-trinh-bay',
    title: 'Slide & trình bày',
    shortLabel: 'Slide & trình bày',
    description:
      'Slide bài giảng sinh động, báo cáo doanh nghiệp, đề xuất dự án, hồ sơ năng lực và bài thuyết trình đồ án sinh viên.',
  },
  {
    id: 'website-tuong-tac',
    title: 'Website & tương tác',
    shortLabel: 'Website & tương tác',
    description:
      'Website giới thiệu, trang bán hàng & Lookbook thời trang, web portfolio cá nhân và trò chơi tương tác cho lớp học.',
  },
];

export const allServices: ServiceItem[] = [
  // 1. Ảnh & thiết kế
  {
    id: 'anh-nguoi-mau-ai',
    title: 'Ảnh người mẫu AI & Lookbook trang phục',
    categoryId: 'anh-thiet-ke',
    audienceIds: ['nguoi-ban-hang'],
    shortDescription:
      'Chuyển ảnh quần áo chụp treo móc hoặc trải sàn thành hình người mẫu mặc tự nhiên, đúng tinh thần thương hiệu mà không cần thuê studio phức tạp.',
    inputsRequired: [
      'Ảnh chụp sản phẩm treo móc hoặc trải sàn rõ form, đủ ánh sáng',
      'Ghi chú chất liệu, độ rủ, màu sắc thực tế và chi tiết cổ/tay áo',
      'Mô tả phong cách người mẫu và bối cảnh mong muốn (studio tối giản, đường phố, trong nhà)',
    ],
    deliverables: [
      'Bộ ảnh người mẫu AI độ phân giải cao (tỷ lệ 4:5, 3:4 hoặc 9:16)',
      'Kiểm tra và duyệt ảnh mẫu trước khi xuất hàng loạt hoặc dựng thành video',
      'Tặng kèm theo phạm vi khi đặt gói combo video tháng đã xác nhận',
    ],
    demoIds: ['demo-shop-before-after'],
    pricingHint: 'Theo số lượng mẫu hoặc tặng kèm trong gói combo video xác nhận',
  },
  {
    id: 'anh-san-pham-cgi',
    title: 'Ảnh sản phẩm & bối cảnh CGI',
    categoryId: 'anh-thiet-ke',
    audienceIds: ['nguoi-ban-hang'],
    shortDescription:
      'Đặt mỹ phẩm, túi xách, giày dép hoặc phụ kiện vào bối cảnh ánh sáng studio, bệ đá, mặt nước hoặc không gian trưng bày sang trọng.',
    inputsRequired: [
      'Ảnh chụp sản phẩm gốc sắc nét ở góc chính diện hoặc góc nghiêng cần giữ',
      'Kích thước tương đối của sản phẩm và tông màu chủ đạo của thương hiệu',
    ],
    deliverables: [
      'Ảnh sản phẩm ghép bối cảnh CGI ánh sáng chân thực (PNG/JPG/WebP)',
      'Phiên bản cắt nền sạch và phiên bản phối cảnh đăng sàn TMĐT / mạng xã hội',
    ],
    demoIds: ['demo-shop-cosmetics-cgi'],
    pricingHint: 'Nhận báo giá theo yêu cầu',
  },
  {
    id: 'anh-ai-nhan-vat-hoat-hinh',
    title: 'Ảnh AI, nhân vật hoạt hình & bộ hình đồng bộ',
    categoryId: 'anh-thiet-ke',
    audienceIds: ['giao-vien', 'sang-tao', 'sinh-vien'],
    shortDescription:
      'Thiết kế nhân vật minh họa bài học, linh vật câu lạc bộ, hoặc bộ hình ảnh đồng nhất phong cách cho kênh nội dung cá nhân và truyện kể.',
    inputsRequired: [
      'Mô tả tính cách, độ tuổi, trang phục của nhân vật hoặc chủ đề bài học',
      'Phong cách mỹ thuật mong muốn (hoạt hình 2D ấm áp, màu nước, 3D mềm mại, editorial)',
    ],
    deliverables: [
      'Bảng tạo hình nhân vật (character sheet) giữ nét nhất quán qua nhiều tư thế/biểu cảm',
      'Bộ tranh minh họa theo từng cảnh truyện hoặc từng phần bài giảng',
    ],
    demoIds: ['demo-creator-character-sheet', 'demo-teacher-storyboard'],
    pricingHint: 'Nhận báo giá theo yêu cầu',
  },
  {
    id: 'banner-poster-infographic',
    title: 'Banner, poster, ảnh bìa & infographic',
    categoryId: 'anh-thiet-ke',
    audienceIds: ['giao-vien', 'nguoi-ban-hang', 'van-phong', 'sinh-vien', 'sang-tao'],
    shortDescription:
      'Thiết kế bố cục thông tin rõ ràng cho poster sự kiện, thông báo lớp học, sơ đồ quy trình nội bộ, poster học thuật hoặc banner chương trình bán hàng.',
    inputsRequired: [
      'Nội dung chữ đã chốt (tiêu đề, thông tin chính, ngày giờ, lời kêu gọi)',
      'Logo, bộ màu nhận diện (nếu có) và kích thước nơi đăng tải hoặc in ấn',
    ],
    deliverables: [
      'File ảnh xuất sắc nét đúng tỷ lệ (Facebook, Website, Standee, A4/A3)',
      'File nguồn hoặc link mẫu có thể chỉnh sửa chữ khi thỏa thuận trước',
    ],
    demoIds: ['demo-office-infographic', 'demo-student-poster'],
    pricingHint: 'Nhận báo giá theo yêu cầu',
  },

  // 2. Video & kể chuyện
  {
    id: 'video-thoi-trang-quang-cao-shop',
    title: 'Video thời trang & video quảng cáo cho shop',
    categoryId: 'video-ke-chuyen',
    audienceIds: ['nguoi-ban-hang'],
    shortDescription:
      'Tạo chuyển động người mẫu mặc trang phục, xoay dáng tự nhiên hoặc dựng thành video quảng cáo có kịch bản mở đầu, giọng đọc và phụ đề.',
    inputsRequired: [
      'Ảnh người mẫu/ma-nơ-canh sẵn có (Gói Cơ bản) hoặc ảnh chụp treo móc/trải sàn (Gói Tiêu chuẩn & Quảng cáo)',
      'Điểm bán hàng chính (chất vải, form dáng, ưu đãi) nếu làm gói Quảng cáo',
    ],
    deliverables: [
      'Duyệt ảnh người mẫu tĩnh trước khi tạo chuyển động video',
      'Video hoàn chỉnh 5–40 giây (MP4 Full HD) kèm nhạc nền hoặc giọng đọc/phụ đề theo gói',
      'Tối đa 02 lượt chỉnh sửa trong phạm vi phương án đã chốt',
    ],
    demoIds: ['demo-shop-before-after', 'demo-shop-ad-concept'],
    pricingHint: 'Từ 45.000đ/video (ưu đãi 70% đến hết 20/10/2026 cho 3 gói shop)',
  },
  {
    id: 'video-hoat-hinh-ke-chuyen',
    title: 'Video hoạt hình, kể chuyện & minh họa bài giảng',
    categoryId: 'video-ke-chuyen',
    audienceIds: ['giao-vien', 'sang-tao', 'sinh-vien'],
    shortDescription:
      'Chuyển kịch bản truyện, tình huống đạo đức/lịch sử/khoa học hoặc câu chuyện cá nhân thành video hoạt hình và chuyển cảnh sinh động.',
    inputsRequired: [
      'Cốt truyện, nội dung bài học hoặc thông điệp cần truyền tải',
      'Thời lượng dự kiến và yêu cầu về giọng đọc / phụ đề',
    ],
    deliverables: [
      'Kịch bản phân cảnh (storyboard) và tạo hình nhân vật duyệt trước',
      'Video hoàn chỉnh (MP4) đồng bộ hình ảnh, chuyển động, âm thanh và phụ đề',
    ],
    demoIds: ['demo-teacher-storyboard', 'demo-creator-storyboard'],
    pricingHint: 'Nhận báo giá theo yêu cầu',
  },
  {
    id: 'y-tuong-kich-ban-storyboard',
    title: 'Ý tưởng, kịch bản, xây dựng nhân vật & video theo yêu cầu',
    categoryId: 'video-ke-chuyen',
    audienceIds: ['sang-tao', 'giao-vien', 'van-phong'],
    shortDescription:
      'Phát triển từ ý tưởng sơ khai thành kịch bản chi tiết, bảng phân cảnh (storyboard), hồ sơ nhân vật hoặc video hướng dẫn / kỷ niệm riêng.',
    inputsRequired: [
      'Mục tiêu của video/câu chuyện và đối tượng người xem mục tiêu',
      'Tư liệu sẵn có (ghi chú, hình ảnh kỷ niệm, quy trình hướng dẫn)',
    ],
    deliverables: [
      'Bản kịch bản lời bình + mô tả góc máy / khung hình chi tiết',
      'Bảng storyboard minh họa trực quan hoặc thành phẩm video hoàn thiện',
    ],
    demoIds: ['demo-creator-storyboard', 'demo-creator-character-sheet'],
    pricingHint: 'Nhận báo giá theo yêu cầu',
  },

  // 3. Slide & trình bày
  {
    id: 'slide-bai-giang-giao-vien',
    title: 'Slide bài giảng trực quan cho giáo viên',
    categoryId: 'slide-trinh-bay',
    audienceIds: ['giao-vien'],
    shortDescription:
      'Thiết kế bài giảng rõ mạch kiến thức, kết hợp hình minh họa, câu hỏi khởi động và bố cục dễ quan sát trên màn hình chiếu lớp học.',
    inputsRequired: [
      'Giáo án, đề cương bài dạy hoặc nội dung chữ thô theo từng mục',
      'Khối lớp / độ tuổi học sinh và thời lượng tiết học',
    ],
    deliverables: [
      'Bộ slide hoàn chỉnh (PPTX / Canva / PDF) dễ chỉnh sửa chữ và trình chiếu mượt',
      'Hệ thống hình minh họa, sơ đồ tư duy và trang câu hỏi tương tác đồng bộ',
    ],
    demoIds: ['demo-teacher-slide-deck'],
    pricingHint: 'Nhận báo giá theo yêu cầu',
  },
  {
    id: 'slide-bao-cao-van-phong',
    title: 'Slide báo cáo, đề xuất dự án & hồ sơ doanh nghiệp',
    categoryId: 'slide-trinh-bay',
    audienceIds: ['van-phong'],
    shortDescription:
      'Biến tài liệu nhiều chữ và bảng biểu rời rạc thành bài trình bày mạch lạc, chuyên nghiệp cho buổi họp ban giám đốc, khách hàng hoặc đối tác.',
    inputsRequired: [
      'Nội dung báo cáo/đề xuất (Word, Excel, slide nháp) và thông điệp trọng tâm',
      'Quy chuẩn màu sắc / logo công ty và định dạng bàn giao mong muốn',
    ],
    deliverables: [
      'Bộ slide chuẩn nhận diện (16:9 hoặc A4 ngang), biểu đồ hóa số liệu dễ đọc',
      'File gốc PowerPoint (PPTX) hoặc Google Slides/Canva để đội ngũ chủ động cập nhật',
    ],
    demoIds: ['demo-office-report-slide'],
    pricingHint: 'Nhận báo giá theo yêu cầu',
  },
  {
    id: 'slide-thuyet-trinh-sinh-vien',
    title: 'Slide thuyết trình đồ án, tiểu luận & cuộc thi sinh viên',
    categoryId: 'slide-trinh-bay',
    audienceIds: ['sinh-vien'],
    shortDescription:
      'Trình bày nội dung nghiên cứu, đồ án tốt nghiệp hoặc bài thi nhóm một cách logic, hiện đại, tôn trọng tuyệt đối số liệu thực của sinh viên.',
    inputsRequired: [
      'Nội dung đề tài, dàn ý thuyết trình và số liệu nghiên cứu do bạn đã chuẩn bị',
      'Thời gian bảo vệ/thuyết trình và yêu cầu hình thức của trường/khoa (nếu có)',
    ],
    deliverables: [
      'Bộ slide thuyết trình rõ cấu trúc vấn đề – phương pháp – kết quả',
      'Sơ đồ hóa quy trình/dữ liệu trực quan, dễ theo dõi khi đứng trình bày',
    ],
    demoIds: ['demo-student-pitch-deck'],
    pricingHint: 'Nhận báo giá theo yêu cầu (hỗ trợ ngân sách sinh viên)',
  },

  // 4. Website & tương tác
  {
    id: 'web-tro-choi-giao-vien',
    title: 'Web trò chơi tương tác cho giáo viên',
    categoryId: 'website-tuong-tac',
    audienceIds: ['giao-vien'],
    shortDescription:
      'Tạo trò chơi trắc nghiệm, ghép đôi thẻ, vòng quay câu hỏi hoặc hoạt động ôn tập chạy ngay trên trình duyệt, không cần học sinh tạo tài khoản.',
    inputsRequired: [
      'Danh sách câu hỏi, đáp án đúng và giải thích ngắn theo bài học',
      'Thiết bị dự kiến sử dụng trên lớp (máy chiếu + chuột, bảng tương tác, hay điện thoại)',
    ],
    deliverables: [
      'Đường link web hoặc bộ file HTML chạy trực tiếp, phản hồi đúng/sai tức thì và chơi lại dễ dàng',
      'Không thu thập tên hay dữ liệu cá nhân của học sinh',
    ],
    demoIds: ['demo-teacher-interactive-game'],
    pricingHint: 'Nhận báo giá theo yêu cầu',
  },
  {
    id: 'website-gioi-thieu-lookbook-portfolio',
    title: 'Website giới thiệu, bán hàng, Lookbook & Portfolio',
    categoryId: 'website-tuong-tac',
    audienceIds: ['nguoi-ban-hang', 'van-phong', 'sinh-vien', 'sang-tao'],
    shortDescription:
      'Thiết kế và lập trình website tĩnh tốc độ cao: trang Lookbook bộ sưu tập cho shop, trang giới thiệu dịch vụ/dự án, hoặc web portfolio cá nhân.',
    inputsRequired: [
      'Mục tiêu trang web (giới thiệu bộ sưu tập, hồ sơ năng lực, nhận liên hệ tư vấn)',
      'Nội dung chữ, hình ảnh sản phẩm/dự án và thông tin liên hệ chính thức',
    ],
    deliverables: [
      'Website chuẩn responsive trên điện thoại và máy tính, tối ưu tốc độ tải và SEO cơ bản',
      'Bàn giao đầy đủ mã nguồn kèm hướng dẫn tự thay đổi nội dung và xuất bản miễn phí',
    ],
    demoIds: ['demo-shop-lookbook-web', 'demo-student-portfolio-web'],
    pricingHint: 'Nhận báo giá theo yêu cầu',
  },
];

export function getServicesByCategory(categoryId: OutputCategoryId): ServiceItem[] {
  return allServices.filter((s) => s.categoryId === categoryId);
}

export function getServiceById(serviceId: string): ServiceItem | undefined {
  return allServices.find((s) => s.id === serviceId);
}
