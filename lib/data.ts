import { Database, Globe, Terminal } from 'lucide-react';

export const PERSONAL_INFO = {
  name: 'Minh.Dev',
  role: 'Software Engineer',
  rolePrefix: 'SOFTWARE',
  roleSuffix: 'ENGINEER',
  basedIn: 'Ho Chi Minh, VN',
  status: 'Available for Internships',
  email: 'tcongminh1604@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  bio: 'Xin chào, mình là Minh — sinh viên IT đam mê lập trình, luôn tìm tòi công nghệ mới. Tập trung vào xây dựng ứng dụng web có khả năng mở rộng và hiệu suất cao. Sẵn sàng học hỏi các design pattern và tham gia dự án thực tế.',
  education: {
    period: '2022 - Hiện tại',
    school: 'Đại học CNTT',
    major: 'Khoa học Máy tính / Kỹ thuật Phần mềm',
  },
};

export const SKILLS = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'Java', 'C++'] },
  { category: 'Database', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'Docker', 'VS Code', 'Figma'] },
];

export const PROJECTS = [
  {
    slug: 'quan-ly-sinh-vien',
    title: 'Quản lý Sinh viên',
    description: 'Ứng dụng quản lý thông tin sinh viên, điểm số và lớp học dành cho trường đại học.',
    fullDescription: 'Một hệ thống quản lý toàn diện cho phép giảng viên nhập điểm, quản lý lớp học và sinh viên theo dõi kết quả học tập. Dự án tập trung vào kiến trúc phân lớp và bảo mật dữ liệu.',
    tech: ['Java', 'Spring Boot', 'MySQL'],
    icon: Database,
    link: '#',
    image: 'https://picsum.photos/seed/projA/800/600'
  },
  {
    slug: 'ecommerce-web',
    title: 'E-commerce Web',
    description: 'Nền tảng thương mại điện tử với tính năng giỏ hàng, thanh toán và quản lý đơn hàng.',
    fullDescription: 'Trang web bán hàng hiện đại với tích hợp thanh toán Stripe, quản lý kho hàng và hệ thống auth bảo mật. Tối ưu hóa trải nghiệm người dùng và tốc độ load trang.',
    tech: ['React', 'Node.js', 'MongoDB'],
    icon: Globe,
    link: '#',
    image: 'https://picsum.photos/seed/projB/800/600'
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Trang web cá nhân giới thiệu kỹ năng và dự án theo phong cách Terminal/Matrix.',
    fullDescription: 'Dự án thể hiện khả năng thiết kế UI/UX độc đáo, sử dụng các công nghệ mới nhất như Tailwind v4 và Framer Motion để tạo ra các hiệu ứng tương tác mượt mà.',
    tech: ['Next.js', 'Tailwind', 'Motion'],
    icon: Terminal,
    link: '#',
    image: 'https://picsum.photos/seed/projC/800/600'
  },
];

export const EXPERIENCE = [
  {
    period: '2023 - Hiện tại',
    role: 'Freelance Web Developer',
    company: 'Self-employed',
    description: 'Phát triển các trang web landing page và ứng dụng quản lý nhỏ cho khách hàng địa phương.',
  },
  {
    period: '2022 - 2023',
    role: 'IT Support Intern',
    company: 'Tech Solutions Inc.',
    description: 'Hỗ trợ kỹ thuật phần cứng, phần mềm và quản lý hệ thống mạng nội bộ.',
  },
];
