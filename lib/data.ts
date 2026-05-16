import { 
  Smartphone, 
  CreditCard, 
  MessageSquare,
  Globe,
  Film
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: 'Trần Công Minh',
  role: {
    vi: 'Software Engineer',
    en: 'Software Engineer'
  },
  rolePrefix: 'SOFTWARE',
  roleSuffix: 'ENGINEERING',
  basedIn: {
    vi: 'Hồ Chí Minh, Việt Nam',
    en: 'Ho Chi Minh City, Vietnam'
  },
  status: {
    vi: 'SOFTWARE SYSTEM BUILDER',
    en: 'SOFTWARE SYSTEM BUILDER'
  },
  email: 'tcongminh1604@gmail.com',
  github: 'https://github.com/dexter826',
  facebook: 'https://www.facebook.com/ctrlkd1',
  instagram: 'https://www.instagram.com/trcongminh04/',
  birthDate: '09/03/2004',

  quote: {
    vi: "I'm living in blessings that used to be prayer requests ♰",
    en: "I'm living in blessings that used to be prayer requests ♰"
  },
  bio: {
    vi: 'Cử nhân ngành Kỹ thuật Phần mềm, tập trung vào việc sử dụng các công nghệ hiện đại để hiện thực hóa ý tưởng thành ứng dụng thực tế. Luôn tìm kiếm những giải pháp nhanh gọn, hiệu quả và thực dụng nhất để xây dựng và triển khai sản phẩm.',
    en: 'Bachelor of Software Engineering, focusing on using modern technologies to turn ideas into practical applications. Always seeking fast, efficient, and pragmatic solutions to build and deploy products.'
  },

  education: {
    period: '2022 - 2026',
    school: {
      vi: 'Đại học Công Thương TP.HCM (HUIT)',
      en: 'HCMC University of Industry and Trade (HUIT)'
    },
    major: {
      vi: 'Công nghệ Phần mềm',
      en: 'Software Engineering'
    },
    gpa: '3.34/4.0',
  },
};

export const UI_LABELS = {
  nav: {
    about: { vi: 'Giới thiệu', en: 'About' },
    skills: { vi: 'Kỹ năng', en: 'Skills' },
    projects: { vi: 'Dự án', en: 'Projects' },
    experience: { vi: 'Kinh nghiệm', en: 'Experience' },
    contact: { vi: 'Liên hệ', en: 'Contact' }
  },
  hero: {
    basedIn: { vi: 'Sống tại', en: 'Based in' }
  },
  about: {
    title: { vi: 'Giới thiệu', en: 'About' },
    education: { vi: 'Học vấn', en: 'Education' },
    info: { vi: 'Thông tin', en: 'Profile' },
    birthDate: { vi: 'Ngày sinh', en: 'Birth Date' },
    email: { vi: 'Email', en: 'Email' }
  },
  skills: {
    title: { vi: 'Kỹ năng', en: 'Skills' }
  },
  projects: {
    title: { vi: 'Dự án', en: 'Projects' },
    viewDetail: { vi: 'Xem chi tiết dự án', en: 'View Project Details' },
    github: { vi: 'GitHub', en: 'GitHub' },
    backToHome: { vi: 'Quay lại', en: 'Back' },
    overview: { vi: 'Tổng quan', en: 'Overview' },
    problem: { vi: 'Vấn đề', en: 'Problem' },
    solution: { vi: 'Giải pháp', en: 'Solution' },
    coreFeatures: { vi: 'Tính năng chính', en: 'Core Features' },
    caseStudy: { vi: 'Phân tích dự án', en: 'Case Study' },
    techStack: { vi: 'Công nghệ', en: 'Tech Stack' },
    viewSource: { vi: 'Xem mã nguồn', en: 'View Source' },
    liveDemo: { vi: 'Bản Demo', en: 'Live Demo' },
    idPrefix: { vi: 'PROJECT', en: 'PROJECT' }
  },
  experience: {
    title: { vi: 'Kinh nghiệm', en: 'Experience' },
    viewCompany: { vi: 'Xem chi tiết công ty', en: 'View Company' }
  },
  contact: {
    title: { vi: 'THIẾT LẬP KẾT NỐI', en: 'ESTABLISH CONNECTION' },
    description: { 
      vi: 'Đang tìm kiếm những thách thức mới. Nếu bạn có dự án thú vị, hãy để lại lời nhắn.', 
      en: 'Seeking new challenges. If you have an interesting project, leave a message.' 
    },
    button: { vi: 'Liên hệ ngay', en: 'Contact Now' }
  }
};

export const SKILLS = [
  { 
    category: { vi: 'Tools', en: 'Tools' }, 
    items: ['Visual Paradigm (UML)', 'Git / GitHub', 'Photoshop', 'MS Office', 'Firebase'] 
  },
  { 
    category: { vi: 'Soft Skills', en: 'Soft Skills' }, 
    items: [
      { vi: 'Giải quyết vấn đề', en: 'Problem Solving' },
      { vi: 'Tư duy thiết kế', en: 'Design Thinking' },
      { vi: 'Tư duy phản biện', en: 'Critical Thinking' },
      { vi: 'Viết tài liệu kỹ thuật', en: 'Technical Documentation' }
    ] 
  },
  { 
    category: { vi: 'Languages', en: 'Languages' }, 
    items: [
      { vi: 'Tiếng Việt (Bản ngữ)', en: 'Vietnamese (Native)' },
      { vi: 'Tiếng Anh - (B2 VSTEP)', en: 'English - (B2 VSTEP)' }
    ] 
  },
];

export const PROJECTS = [
  {
    slug: 'cinemob',
    title: 'CineMOB - Movie Tracker',
    role: { vi: 'Project Lead & Developer', en: 'Project Lead & Developer' },
    description: {
      vi: 'Nền tảng quản lý phim ảnh cá nhân và khám phá điện ảnh thông minh tích hợp AI.',
      en: 'Personal movie management and smart cinema discovery platform with AI integration.'
    },
    fullDescription: {
      vi: 'Một giải pháp hiện đại giúp bạn dễ dàng theo dõi, quản lý bộ sưu tập phim và nhận gợi ý nội dung dựa trên sở thích cá nhân.',
      en: 'A modern solution helping you easily track, manage your movie collection, and receive content recommendations based on personal preferences.'
    },
    problem: {
      vi: 'Việc tìm kiếm phim phù hợp thường mất thời gian, và người dùng thiếu một công cụ trực quan để quản lý.',
      en: 'Finding the right movie often takes time, and users lack an intuitive tool for management.'
    },
    solution: {
      vi: 'Xây dựng ứng dụng PWA với kiến trúc Serverless qua Firebase. Tích hợp AI của OpenRouter.',
      en: 'Built a PWA app with Serverless architecture via Firebase. Integrated OpenRouter AI.'
    },
    features: [
      { vi: 'Xác thực qua Google', en: 'Google Authentication' },
      { vi: 'Tìm kiếm với TMDB API', en: 'Search with TMDB API' },
      { vi: 'AI Gợi ý thông minh', en: 'Smart AI Suggestions' },
      { vi: 'Theo dõi lịch TV Show', en: 'Track TV Show Schedule' },
      { vi: 'Thống kê trực quan', en: 'Visual Statistics' }
    ],
    detailedFeatures: [
      {
        category: { vi: 'Khám phá & Gợi ý', en: 'Discovery & Suggestions' },
        items: [
          { vi: 'Tìm kiếm nâng cao với TMDB', en: 'Advanced Search with TMDB' },
          { vi: 'AI đề xuất phim dựa trên sở thích', en: 'AI Movie Recommendations' },
          { vi: 'Random Picker cho Watchlist', en: 'Random Picker for Watchlist' }
        ]
      },
      {
        category: { vi: 'Quản lý cá nhân', en: 'Personal Management' },
        items: [
          { vi: 'Quản lý Album & Bộ sưu tập', en: 'Manage Albums & Collections' },
          { vi: 'Theo dõi lịch phát sóng TV Show', en: 'Track TV Show Schedule' },
          { vi: 'Export dữ liệu ra file Excel (.xlsx)', en: 'Export Data to Excel (.xlsx)' }
        ]
      },
      {
        category: { vi: 'Trải nghiệm người dùng', en: 'User Experience' },
        items: [
          { vi: 'Hỗ trợ PWA', en: 'PWA Support' },
          { vi: 'Giao diện Light/Dark mode tối giản', en: 'Minimalist Light/Dark Mode' },
          { vi: 'Biểu đồ thống kê thói quen xem phim', en: 'Visual Viewing Habit Charts' }
        ]
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
    role: { vi: 'Project Lead & Developer', en: 'Project Lead & Developer' },
    description: {
      vi: 'Hệ thống hỗ trợ quản lý nhân sự, chấm công và tự động hóa bảng lương linh hoạt.',
      en: 'Flexible system for HR management, attendance tracking, and automated payroll.'
    },
    fullDescription: {
      vi: 'Công cụ tối ưu cho các mô hình vận hành theo ca, giúp đơn giản hóa việc tính lương và tích hợp thanh toán nhanh qua VietQR.',
      en: 'Optimized tool for shift-based models, simplifying payroll calculation and integrating fast VietQR payments.'
    },
    problem: {
      vi: 'Việc quản lý nhân sự ca kíp và tính toán lương thưởng thủ công dễ sai sót.',
      en: 'Manual shift management and payroll calculation are prone to errors.'
    },
    solution: {
      vi: 'Phát triển Web App Mobile-first với React 19, hỗ trợ Offline và thanh toán qua VietQR.',
      en: 'Developed a Mobile-first Web App with React 19, supporting Offline and VietQR payments.'
    },
    features: [
      { vi: 'Tự động hóa bảng lương', en: 'Payroll Automation' },
      { vi: 'Tích hợp VietQR', en: 'VietQR Integration' },
      { vi: 'Hỗ trợ Offline & Sync', en: 'Offline & Sync Support' },
      { vi: 'Dashboard thống kê', en: 'Visual Dashboard' },
      { vi: 'Quản lý công nợ', en: 'Debt Management' }
    ],
    detailedFeatures: [
      {
        category: { vi: 'Nhân sự & Chấm công', en: 'HR & Attendance' },
        items: [
          { vi: 'Quản lý hồ sơ nhân viên & tài khoản ngân hàng', en: 'Manage Employee Profiles & Bank Accounts' },
          { vi: 'Phân ca làm việc (Sáng/Chiều)', en: 'Shift Assignment (Morning/Afternoon)' },
          { vi: 'Tự động tính lương dựa trên cấu hình ca', en: 'Auto Salary Calculation based on Shift' }
        ]
      },
      {
        category: { vi: 'Tài chính', en: 'Finance' },
        items: [
          { vi: 'Theo dõi công nợ & lương chưa thanh toán', en: 'Track Debt & Unpaid Salary' },
          { vi: 'Tích hợp mã QR VietQR tự động nội dung', en: 'Integrated VietQR with Auto Content' },
          { vi: 'Hỗ trợ ứng lương & lưu lịch sử', en: 'Salary Advance Support & History' }
        ]
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
    role: { vi: 'Fullstack Developer', en: 'Fullstack Developer' },
    description: {
      vi: 'Mạng xã hội thời gian thực hỗ trợ kết nối và chia sẻ đa phương tiện mượt mà.',
      en: 'Real-time social network supporting seamless connection and multimedia sharing.'
    },
    fullDescription: {
      vi: 'Không gian giao tiếp trực tuyến tập trung vào tốc độ phản hồi và trải nghiệm tương tác trực quan giữa người dùng.',
      en: 'An online communication space focused on response speed and intuitive interaction experiences between users.'
    },
    problem: {
      vi: 'Xây dựng nền tảng mạng xã hội đòi hỏi khả năng xử lý real-time cực cao.',
      en: 'Building a social platform requires extremely high real-time processing capabilities.'
    },
    solution: {
      vi: 'Sử dụng kiến trúc kết hợp Firestore và Realtime Database. Triển khai Cloud Functions.',
      en: 'Used a hybrid architecture of Firestore and Realtime Database. Deployed Cloud Functions.'
    },
    features: [
      { vi: 'Nhắn tin & Gọi Video realtime', en: 'Real-time Chat & Video Call' },
      { vi: 'Gợi ý bạn bè thông minh', en: 'Smart Friend Suggestions' },
      { vi: 'Newsfeed tối ưu', en: 'Optimized Newsfeed' },
      { vi: 'Quản trị viên kiểm soát', en: 'Admin Controls' },
      { vi: 'Responsive tuyệt đối', en: 'Fully Responsive' }
    ],
    detailedFeatures: [
      {
        category: { vi: 'Tương tác & Kết nối', en: 'Interaction & Connection' },
        items: [
          { vi: 'Chat đa phương tiện (Text, Image, File, Voice, GIF)', en: 'Multimedia Chat (Text, Image, File, Voice, GIF)' },
          { vi: 'Gọi video/giọng nói qua ZegoCloud', en: 'Video/Voice Call via ZegoCloud' },
          { vi: '6 loại cảm xúc bài viết', en: '6 Types of Post Reactions' }
        ]
      },
      {
        category: { vi: 'Thông minh & Bảo mật', en: 'Intelligence & Security' },
        items: [
          { vi: 'Gợi ý bạn bè dựa trên Cosine Similarity', en: 'Friend Suggestions based on Cosine Similarity' },
          { vi: 'Phân quyền Admin: xử lý báo cáo, ban user', en: 'Admin Roles: Report Handling, Banning' },
          { vi: 'Xác thực Email & Onboarding', en: 'Email Verification & Onboarding' }
        ]
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
    role: { vi: 'IT Hardware Intern', en: 'IT Hardware Intern' },
    company: 'Thanh Nhan Computer Co., Ltd (TNC)',
    link: 'https://www.tnc.com.vn/gioi-thieu-ve-cong-ty.html',
    description: {
      vi: 'Lắp ráp và cấu hình phần cứng máy tính; cài đặt hệ điều hành và thiết lập phần mềm tiện ích cho khách hàng.',
      en: 'Assembling and configuring computer hardware; installing OS and setting up utility software for customers.'
    },
  },
];
