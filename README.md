<div align="center">
  <img width="1200" height="475" alt="Mob Portfolio Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
  <h1>Mob Portfolio - Personal Showcase</h1>
  <p>Một trang web portfolio hiện đại, tối giản và chuyên nghiệp được xây dựng bằng Next.js 15.</p>
</div>

---

## 🚀 Giới thiệu

**Mob Portfolio** là dự án trang web cá nhân được thiết kế để giới thiệu kỹ năng, dự án và kinh nghiệm làm việc một cách trực quan và ấn tượng. Trang web tập trung vào trải nghiệm người dùng với các hiệu ứng chuyển động mượt mà và giao diện responsive hoàn hảo trên mọi thiết bị.

## 🛠️ Công nghệ sử dụng

Dự án được xây dựng dựa trên các công nghệ hiện đại nhất:

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Ngôn ngữ:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/) & [Lucide React](https://lucide.dev/)
- **Quản lý dữ liệu:** Dữ liệu tập trung tại `lib/data.ts` giúp dễ dàng cập nhật nội dung.

## ✨ Tính năng nổi bật

- **Responsive Design:** Hiển thị tối ưu trên Mobile, Tablet và Desktop.
- **Smooth Animations:** Hiệu ứng cuộn và chuyển trang mượt mà nhờ Framer Motion.
- **Project Showcase:** Trình bày các dự án nổi bật với hình ảnh và mô tả chi tiết.
- **Skills Categorization:** Phân loại kỹ năng (Frontend, Backend, Database, Tools) rõ ràng.
- **Contact Form:** Giao diện liên hệ chuyên nghiệp.
- **Clean Architecture:** Cấu trúc thư mục rõ ràng, dễ bảo trì và mở rộng.

## 💻 Hướng dẫn cài đặt

### Yêu cầu hệ thống

- [Node.js](https://nodejs.org/) (phiên bản 18 trở lên)
- [npm](https://www.npmjs.com/) hoặc [yarn](https://yarnpkg.com/)

### Các bước thực hiện

1. **Clone repository:**

   ```bash
   git clone https://github.com/dexter826/mob_portfolio
   cd mob_portfolio
   ```

2. **Cài đặt thư viện:**

   ```bash
   npm install
   ```

3. **Cấu hình môi trường:**
   Sao chép tệp `.env.example` thành `.env.local` và cập nhật các biến cần thiết:

   ```bash
   cp .env.example .env.local
   ```

4. **Chạy dự án ở chế độ phát triển:**
   ```bash
   npm run dev
   ```
   Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt để xem kết quả.

## 📁 Cấu trúc thư mục

- `app/`: Chứa các route và layout chính của ứng dụng.
- `components/`: Các thành phần UI và các section của trang web (`Hero`, `About`, `Projects`,...).
- `hooks/`: Các custom hooks dùng chung.
- `lib/`: Chứa dữ liệu (`data.ts`) và các hàm tiện ích (`utils.ts`).
- `public/`: Chứa các tài nguyên tĩnh như hình ảnh, icons.

---

Thiết kế và phát triển bởi **DEXTER826**.
