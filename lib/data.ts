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
    title: 'Quản lý Sinh viên',
    description: 'Ứng dụng quản lý thông tin sinh viên, điểm số và lớp học dành cho trường đại học. Tích hợp phân quyền người dùng và xuất báo cáo.',
    tech: ['Java', 'Spring Boot', 'MySQL'],
    icon: Database,
    link: '#',
    image: 'https://picsum.photos/seed/projA/800/600'
  },
  {
    title: 'E-commerce Web',
    description: 'Nền tảng thương mại điện tử với tính năng giỏ hàng, thanh toán và quản lý đơn hàng. Giao diện thân thiện và tối ưu hiệu suất.',
    tech: ['React', 'Node.js', 'MongoDB'],
    icon: Globe,
    link: '#',
    image: 'https://picsum.photos/seed/projB/800/600'
  },
  {
    title: 'Portfolio Website',
    description: 'Trang web cá nhân giới thiệu kỹ năng và dự án, với thiết kế hiện đại, responsive và animation mượt mà.',
    tech: ['Next.js', 'Tailwind', 'Motion'],
    icon: Terminal,
    link: '#',
    image: 'https://picsum.photos/seed/projC/800/600'
  },
];
