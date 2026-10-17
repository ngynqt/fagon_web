export interface ContactConfig {
  email: string;
  facebookUrl: string;
  facebookLabel: string;
  telegramPhone: string;
  telegramNote: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  language: string;
  colors: {
    cream: string;
    ink: string;
    lime: string;
    muted: string;
  };
  contact: ContactConfig;
  founderStory: {
    authorLabel: string;
    paragraphs: string[];
  };
  generalProcess: ProcessStep[];
  preAgreementChecklist: {
    label: string;
    detail: string;
  }[];
}

export const siteConfig: SiteConfig = {
  brandName: 'Fagon',
  tagline: 'Studio Sáng Tạo × Công Nghệ',
  heroBadge: 'SÁNG TẠO × CÔNG NGHỆ',
  heroTitle: 'Bạn đang muốn tạo nên điều gì?',
  heroDescription:
    'Ảnh, video, slide và website — Fagon giúp bạn biến ý tưởng thành sản phẩm phù hợp với mục tiêu.',
  language: 'vi',
  colors: {
    cream: '#F6F3EB',
    ink: '#191B18',
    lime: '#C5F53C',
    muted: '#72756C',
  },
  contact: {
    email: 'fagonlab@gmail.com',
    facebookUrl: 'https://www.facebook.com/fagonlab',
    facebookLabel: 'facebook.com/fagonlab',
    telegramPhone: '0367931045',
    telegramNote: 'Tìm kiếm và nhắn tin trực tiếp qua số điện thoại trên Telegram.',
  },
  founderStory: {
    authorLabel: 'Người sáng lập Fagon',
    paragraphs: [
      'Tôi xây dựng Fagon với mong muốn giúp những ý tưởng tốt có một cách thể hiện xứng đáng.',
      'Đó có thể là bài học cần sinh động hơn, sản phẩm cần được giới thiệu rõ hơn, hay một câu chuyện đang chờ được kể bằng hình ảnh.',
      'Fagon kết hợp sáng tạo và công nghệ để biến những nhu cầu ấy thành ảnh, video, slide và website có thể sử dụng thực tế. Tôi trực tiếp phát triển ý tưởng và thực hiện từng dự án, từ lúc trao đổi đến khi bàn giao.',
    ],
  },
  generalProcess: [
    {
      stepNumber: '01',
      title: 'Gửi ý tưởng, tài liệu và thời gian mong muốn',
      description:
        'Chia sẻ mục tiêu sử dụng, nội dung hoặc hình ảnh đầu vào hiện có, cùng mốc thời gian bạn cần sản phẩm.',
    },
    {
      stepNumber: '02',
      title: 'Thống nhất phương án, phạm vi, báo giá và đặt cọc',
      description:
        'Chốt rõ định dạng đầu ra, số lượng, thời gian thực hiện, quyền sử dụng, số lượt sửa và mức đặt cọc trước khi triển khai.',
    },
    {
      stepNumber: '03',
      title: 'Duyệt nội dung/mẫu, hoàn thiện và bàn giao',
      description:
        'Gửi bản nháp hoặc ảnh mẫu để bạn kiểm tra (đặc biệt duyệt ảnh tĩnh trước khi dựng thành video), tinh chỉnh trong phạm vi chốt và bàn giao đúng định dạng.',
    },
  ],
  preAgreementChecklist: [
    {
      label: 'Thành phẩm',
      detail: 'Số lượng ảnh, thời lượng video, số trang slide hoặc phạm vi tính năng trang web.',
    },
    {
      label: 'Định dạng',
      detail: 'Tỷ lệ khung hình (9:16, 16:9, 4:5), độ phân giải, chuẩn file (MP4, PNG/WebP, PPTX, PDF, link web).',
    },
    {
      label: 'Lượt sửa',
      detail: 'Tối đa 02 lượt chỉnh sửa trong phạm vi phương án và kịch bản đã thống nhất.',
    },
    {
      label: 'Thời gian',
      detail: 'Lịch gửi bản nháp và thời điểm bàn giao thực tế theo độ phức tạp (không hứa mọi đơn đều xong trong 24 giờ).',
    },
    {
      label: 'Quyền sử dụng',
      detail: 'Phạm vi sử dụng thương mại, giảng dạy hoặc cá nhân; cam kết bảo mật tài liệu đầu vào.',
    },
    {
      label: 'Khả năng chỉnh sửa file',
      detail: 'Làm rõ bàn giao file xuất hoàn chỉnh (MP4/PDF/PNG) hay kèm file nguồn có thể tự sửa (PPTX/Canva/mã nguồn).',
    },
  ],
};
