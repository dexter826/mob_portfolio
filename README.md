<div align="center">
  <img width="140" alt="Mob Portfolio Logo" src="public/logo.png" />

  <h1>Mob Portfolio</h1>

  <p>
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js" alt="Next.js" /></a>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19.2-20232A?style=for-the-badge&logo=react" alt="React" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-4.3-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" /></a>
    <a href="https://motion.dev/"><img src="https://img.shields.io/badge/Motion-12.2-FF0055?style=for-the-badge&logo=framer" alt="Motion" /></a>
  </p>

  <p>
    Ứng dụng web portfolio hiện đại, tối giản và hiệu năng cao được xây dựng bằng <strong>Next.js 16 (App Router)</strong>, <strong>Tailwind CSS v4</strong> và <strong>Motion v12</strong>.
  </p>

  <p>
    <a href="https://mob-portfolio-sand.vercel.app/" target="_blank" rel="noopener noreferrer"><strong>🚀 Xem bản Live Demo</strong></a>
  </p>
</div>

---

## 📌 Tính năng kỹ thuật nổi bật

- **M.O.B Signal Design System:** Giao diện tông màu trầm tối giản (Deep Dark `#0C0C0C`, Card `#141414`) kết hợp kỹ thuật đảo màu tương phản cao (High Contrast White). Hệ thống design token được cấu hình trực tiếp qua chỉ thị `@theme` của Tailwind CSS v4.
- **Kiến trúc hướng dữ liệu (Data-Driven):** Tách bạch hoàn toàn tầng giao diện và tầng nội dung. Dữ liệu được định kiểu tĩnh chặt chẽ (strict typing) và quản lý tập trung tại `src/data/portfolio.ts`.
- **Hỗ trợ song ngữ động (Dynamic i18n):** Chuyển đổi ngôn ngữ Tiếng Việt — Tiếng Anh tức thì ở client qua React Context (`LanguageProvider`), không yêu cầu cấu hình routing phức tạp hay tải lại trang.
- **Tương tác vật lý với Motion v12:** Tích hợp hiệu ứng **Sticky Stacking Cards** khi cuộn qua danh mục dự án, dải chữ Marquee chạy vô tận và các vi tương tác được tinh chỉnh theo đường cong chuyển động mượt mà.

---

## 🛠️ Công nghệ sử dụng

| Phân loại               | Công nghệ                                       | Vai trò trong hệ thống                                          |
| :---------------------- | :---------------------------------------------- | :-------------------------------------------------------------- |
| **Framework**           | [Next.js 16](https://nextjs.org/) (App Router)  | Tối ưu hóa render, quản lý layout và SEO                        |
| **UI Library**          | [React 19](https://react.dev/)                  | Xây dựng các thành phần giao diện tương tác                     |
| **Ngôn ngữ**            | [TypeScript 6](https://www.typescriptlang.org/) | Đảm bảo an toàn kiểu dữ liệu từ data schema tới props component |
| **Styling**             | [Tailwind CSS 4](https://tailwindcss.com/)      | Engine CSS thế hệ mới với CSS-first configuration qua `@theme`  |
| **Animation**           | [Motion 12](https://motion.dev/)                | Điều khiển các hiệu ứng cuộn trang, xếp chồng card và modal     |
| **Icons**               | [Lucide React](https://lucide.dev/)             | Hệ thống biểu tượng tối giản, đồng bộ                           |
| **Chất lượng mã nguồn** | ESLint 9 & Prettier                             | Duy trì quy chuẩn cú pháp và định dạng code đồng nhất           |

---

## 📁 Cấu trúc thư mục

Mã nguồn được tổ chức theo mô hình phân tầng trong thư mục `src/`:

```text
mob_portfolio/
├── public/                 # Tài nguyên tĩnh: logo, favicon, hình ảnh minh họa
├── src/
│   ├── app/                # Next.js App Router (layout, page chính, globals.css với Tailwind v4)
│   ├── components/
│   │   ├── sections/       # Các khối giao diện chính: Hero, Marquee, About, Experience, Projects
│   │   └── ui/             # Các component tái sử dụng: ContactModal, BentoCard, Badge, Button
│   ├── context/            # Quản lý state toàn cục (LanguageContext phục vụ chuyển ngữ VI / EN)
│   ├── data/               # Tầng dữ liệu tập trung (portfolio.ts, ui-labels.ts)
│   ├── lib/                # Cấu hình motion easing (motion.ts) và tiện ích kết hợp class (utils.ts)
│   └── types/              # Type definitions nghiêm ngặt (I18n, Portfolio, Skills, Project)
├── package.json            # Khai báo dependencies và các script thực thi
└── tsconfig.json           # Cấu hình TypeScript compiler
```

---

## 💻 Cài đặt & Khởi chạy

### Yêu cầu môi trường

- **Node.js:** Phiên bản 18.18 trở lên (khuyến nghị bản LTS).
- **Package Manager:** `npm`, `pnpm` hoặc `yarn`.

### Các bước cài đặt

1. **Clone repository:**

   ```bash
   git clone https://github.com/dexter826/mob_portfolio.git
   cd mob_portfolio
   ```

2. **Cài đặt thư viện:**

   ```bash
   npm install
   ```

3. **Khởi chạy môi trường phát triển:**
   ```bash
   npm run dev
   ```
   Mở trình duyệt tại địa chỉ [http://localhost:3000](http://localhost:3000).

### Danh mục Script vận hành

| Lệnh                   | Mô tả chức năng                                            |
| :--------------------- | :--------------------------------------------------------- |
| `npm run dev`          | Khởi chạy máy chủ phát triển cục bộ                        |
| `npm run build`        | Biên dịch và tối ưu hóa mã nguồn cho môi trường production |
| `npm run start`        | Khởi chạy production server sau khi đã build thành công    |
| `npm run lint`         | Quét và kiểm tra lỗi cú pháp/quy chuẩn với ESLint          |
| `npm run format`       | Tự động định dạng lại toàn bộ mã nguồn bằng Prettier       |
| `npm run format:check` | Kiểm tra định dạng code trong CI/CD pipeline               |
| `npm run clean`        | Xóa bộ nhớ đệm `.next` để làm sạch bản build               |

---

## ⚙️ Tùy biến dữ liệu

Giao diện được thiết kế để render tự động dựa trên schema dữ liệu. Để cập nhật nội dung hiển thị:

1. Chỉnh sửa thông tin cá nhân, danh sách dự án, kinh nghiệm và kỹ năng tại [`src/data/portfolio.ts`](src/data/portfolio.ts).
2. Tùy biến các nhãn hiển thị đa ngôn ngữ tại [`src/data/ui-labels.ts`](src/data/ui-labels.ts).

---

Thiết kế và phát triển bởi **Trần Công Minh** ([@dexter826](https://github.com/dexter826)).
