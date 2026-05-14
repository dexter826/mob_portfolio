import { 
  Smartphone, 
  CreditCard, 
  MessageSquare,
  Globe,
  Film
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: 'Trần Công Minh',
  role: 'Software Engineer',
  rolePrefix: 'SOFTWARE',
  roleSuffix: 'ENGINEERING',
  basedIn: 'Hồ Chí Minh, VN',
  status: 'SOFTWARE SYSTEM BUILDER',
  email: 'tcongminh1604@gmail.com',
  github: 'https://github.com/dexter826',
  facebook: 'https://www.facebook.com/ctrlkd1',
  instagram: 'https://www.instagram.com/trcongminh04/',
  birthDate: '09/03/2004',

  quote: 'Only God Can Judge Me',
  bio: 'Cử nhân ngành Kỹ thuật Phần mềm, tập trung vào việc sử dụng các công nghệ hiện đại để hiện thực hóa ý tưởng thành ứng dụng thực tế. Luôn tìm kiếm những giải pháp nhanh gọn, hiệu quả và thực dụng nhất để xây dựng và triển khai sản phẩm.',

  education: {
    period: '2022 - 2026',
    school: 'Đại học Công Thương TP.HCM (HUIT)',
    major: 'Kỹ thuật Phần mềm',
    gpa: '3.34/4.0',
  },
};


export const SKILLS = [
  { category: 'Frontend', items: ['Flutter', 'React', 'Tailwind CSS', 'HTML/CSS (Basic)'] },
  { category: 'Backend & DB', items: ['Firebase', 'Firestore'] },
  { category: 'Tools', items: ['Visual Paradigm', 'Git', 'MS Office', 'Photoshop'] },
  { category: 'Languages', items: ['Vietnamese (Native)', 'English (B2 VSTEP)'] },
  { category: 'Soft Skills', items: ['Team Leadership', 'Problem-Solving', 'Technical Documentation', 'Presentation'] },
];


export const PROJECTS = [
  {
    slug: 'cinemob',
    title: 'CineMOB',
    role: 'Project Lead & Developer',
    description: 'Ứng dụng quản lý và khám phá phim ảnh cá nhân hóa tích hợp AI gợi ý.',
    fullDescription: 'CineMOB là một ứng dụng web/PWA hiện đại được xây dựng nhằm mang lại trải nghiệm tuyệt vời nhất cho việc theo dõi, quản lý và khám phá phim ảnh. Không chỉ dừng lại ở việc lưu trữ danh sách phim, ứng dụng tích hợp trí tuệ nhân tạo (AI) để đưa ra những gợi ý cá nhân hóa và cung cấp biểu đồ thống kê trực quan.',
    problem: 'Việc tìm kiếm phim phù hợp thường mất thời gian, và người dùng thiếu một công cụ trực quan, cá nhân hóa để quản lý danh sách phim đã xem cũng như theo dõi lịch phát sóng các TV Show yêu thích.',
    solution: 'Xây dựng ứng dụng PWA (Progressive Web App) với kiến trúc Serverless qua Firebase. Tích hợp API của TMDB để lấy dữ liệu, kết hợp OpenRouter AI để phân tích sở thích và đưa ra đề xuất chuẩn xác.',
    features: [
      'Xác thực qua Google (Firebase)',
      'Tìm kiếm với TMDB API',
      'AI Gợi ý thông minh (OpenRouter)',
      'Theo dõi lịch TV Show',
      'Thống kê trực quan (Recharts)'
    ],
    detailedFeatures: [
      {
        category: 'Khám phá & Gợi ý',
        items: ['Tìm kiếm nâng cao với TMDB', 'AI đề xuất phim dựa trên sở thích', 'Random Picker cho Watchlist']
      },
      {
        category: 'Quản lý cá nhân',
        items: ['Quản lý Album & Bộ sưu tập', 'Theo dõi lịch phát sóng TV Show', 'Export dữ liệu ra file Excel (.xlsx)']
      },
      {
        category: 'Trải nghiệm người dùng',
        items: ['Hỗ trợ PWA (Cài đặt như ứng dụng native)', 'Giao diện Light/Dark mode tối giản', 'Biểu đồ thống kê thói quen xem phim']
      }
    ],
    tech: ['TypeScript', 'React', 'Firebase'],
    techStack: {
      frontend: 'React 19, TypeScript, Vite, Tailwind CSS v4',
      state: 'Zustand 5',
      backend: 'Firebase v12 (Auth, Firestore)',
      external: 'TMDB API, OpenRouter API'
    },
    icon: Film,
    link: 'https://github.com/dexter826/cinemob',
    liveDemo: 'https://cinematrics-e0231.firebaseapp.com/',
    image: '/cinemob.jpg'
  },
  {
    slug: 'shiftpay-system',
    title: 'ShiftPay - Payroll System',
    role: 'Project Lead & Developer',
    description: 'Hệ thống quản lý nhân sự và tiền lương thông minh tích hợp thanh toán VietQR.',
    fullDescription: 'ShiftPay được thiết kế để tối ưu hóa việc quản lý nhân sự cho các đơn vị làm việc theo ca kíp phức tạp. Thử thách lớn nhất là thuật toán tính lương linh hoạt và khả năng hoạt động ngay cả khi không có kết nối mạng (Offline Mode). Tôi đã triển khai giải pháp lưu trữ local đồng bộ với Firebase, kết hợp cùng VietQR API để tạo ra trải nghiệm thanh toán lương "một chạm".',
    problem: 'Việc quản lý nhân sự đi làm theo ca, tính toán lương thưởng, tạm ứng và thanh toán cho hàng trăm nhân viên mỗi tháng là một cực hình đối với quản lý nếu làm thủ công, dễ sai sót và thiếu minh bạch.',
    solution: 'Phát triển Web App (Mobile-first) với React 19, tối ưu hóa trải nghiệm người dùng với các bộ chọn vòng xoay phong cách iOS, hỗ trợ chế độ Offline và tự động hóa quy trình thanh toán qua VietQR.',
    features: [
      'Tự động hóa bảng lương theo ca kíp',
      'Tích hợp thanh toán nhanh VietQR',
      'Hỗ trợ chế độ Offline & Sync dữ liệu',
      'Dashboard thống kê thu chi trực quan',
      'Quản lý công nợ & tạm ứng nhân viên'
    ],
    detailedFeatures: [
      {
        category: 'Nhân sự & Chấm công',
        items: ['Quản lý hồ sơ nhân viên & tài khoản ngân hàng', 'Phân ca làm việc (Sáng/Chiều) theo sự kiện', 'Tự động tính lương dựa trên cấu hình ca']
      },
      {
        category: 'Tài chính',
        items: ['Theo dõi công nợ & lương chưa thanh toán', 'Tích hợp mã QR chuyển khoản VietQR tự động nội dung', 'Hỗ trợ ứng lương & lưu lịch sử quyết toán']
      },
      {
        category: 'Trải nghiệm người dùng',
        items: ['Hỗ trợ Dark/Light Mode', 'Hoạt động Offline hoàn hảo', 'Responsive design cho cả mobile và desktop']
      }
    ],
    tech: ['TypeScript', 'React', 'Firebase'],
    techStack: {
      frontend: 'React 19, TypeScript, Vite, Tailwind CSS',
      state: 'Zustand',
      backend: 'Firebase (Firestore, Auth)',
      ui: 'Framer Motion, Lucide React, Lottie'
    },
    icon: CreditCard,
    link: 'https://github.com/dexter826/at_shiftpay',
    liveDemo: 'https://at-shiftpay.web.app/',
    image: '/shiftpay.jpg'
  },
  {
    slug: 'smurfy-social',
    title: 'Smurfy - Realtime Social',
    role: 'Fullstack Developer',
    description: 'Nền tảng mạng xã hội thời gian thực với đầy đủ tính năng chat, gọi video và gợi ý bạn bè.',
    fullDescription: 'Smurfy không chỉ là một ứng dụng mạng xã hội, mà là một thử nghiệm về khả năng xử lý dữ liệu quy mô lớn và tính tương tác cao. Tôi đã áp dụng cơ chế Fan-out on write để tối ưu hóa tốc độ tải bảng tin và thuật toán Cosine Similarity chạy trên Cloud Functions để đưa ra các gợi ý kết bạn thông minh.',
    problem: 'Xây dựng một nền tảng mạng xã hội hiện đại đòi hỏi khả năng xử lý real-time cực cao, đảm bảo tính nhất quán của dữ liệu khi hàng ngàn người dùng tương tác cùng lúc (like, comment, chat).',
    solution: 'Sử dụng kiến trúc kết hợp giữa Firestore (dữ liệu bài viết) và Realtime Database (dữ liệu chat/hiện diện). Triển khai Cloud Functions để xử lý các tác vụ nặng và AI gợi ý bạn bè.',
    features: [
      'Nhắn tin & Gọi Video realtime 1-1/Group',
      'Gợi ý bạn bè bằng thuật toán thông minh',
      'Hệ thống bảng tin (Feed) tối ưu hiệu năng',
      'Quản trị viên (Admin) kiểm soát nội dung',
      'Dark/Light mode & Responsive tuyệt đối'
    ],
    detailedFeatures: [
      {
        category: 'Tương tác & Kết nối',
        items: ['Chat đa phương tiện (Text, Image, File, Voice, GIF)', 'Gọi video/giọng nói qua ZegoCloud', '6 loại cảm xúc bài viết & bình luận lồng nhau']
      },
      {
        category: 'Thông minh & Bảo mật',
        items: ['Gợi ý bạn bè dựa trên Cosine Similarity', 'Phân quyền Admin: xử lý báo cáo, ban user', 'Xác thực Email & Onboarding chuyên nghiệp']
      },
      {
        category: 'Kiến trúc hệ thống',
        items: ['Fan-out on write cho Newsfeed', 'Firebase Cloud Messaging (FCM) cho thông báo', 'Firestore Security Rules bảo mật dữ liệu']
      }
    ],
    tech: ['TypeScript', 'React', 'Firebase'],
    techStack: {
      frontend: 'React 19, TypeScript, Zustand',
      backend: 'Firebase (Firestore, RTDB, Functions, Auth, Storage, FCM)',
      external: 'ZegoCloud (Video Call), Giphy API, LinkPreview API'
    },
    icon: Globe,
    link: 'https://github.com/dexter826/smurf_social',
    liveDemo: 'https://smurfy-138c1.web.app/',
    image: '/smurfy.jpg'
  },
];


export const EXPERIENCE = [
  {
    period: '07/2025 - 09/2025',
    role: 'IT Hardware Intern',
    company: 'Thanh Nhan Computer Co., Ltd (TNC)',
    link: 'https://www.tnc.com.vn/gioi-thieu-ve-cong-ty.html',
    description: 'Lắp ráp và cấu hình phần cứng máy tính; cài đặt hệ điều hành và thiết lập phần mềm tiện ích cho khách hàng.',

  },
];

