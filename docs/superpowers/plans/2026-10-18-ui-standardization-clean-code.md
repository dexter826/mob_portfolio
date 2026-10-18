# UI Standardization & Clean Code Architecture Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Chuẩn hóa Design Tokens với Tailwind CSS v4 `@theme`, kiến tạo bộ UI Component Kit nội bộ (`src/components/ui/`), tập trung hóa 100% I18n labels và đồng bộ motion tokens để loại bỏ triệt để việc hardcode màu sắc, chuỗi text và tùy biến component rời rạc lộn xộn.

**Architecture:** 
1. Khởi tạo semantic design tokens tại `src/app/globals.css` thông qua `@theme` directive của Tailwind CSS v4 và cập nhật `src/lib/motion.ts`.
2. Mở rộng `src/data/ui-labels.ts` nhằm bao phủ 100% chuỗi UI còn đang hardcode dạng ternary inline trong JSX.
3. Xây dựng 5 UI Primitives tinh gọn tại `src/components/ui/` (`SectionContainer`, `SectionHeader`, `SurfaceCard`, `TagBadge`, `Button`).
4. Refactor tuần tự từng section (`Hero`, `About`, `Experience`, `Projects`, `Marquee`, `ContactModal`) sang dùng Tokens và UI Kit mới mà không thay đổi bất kỳ hành vi thị giác hay làm gãy layout.

**Tech Stack:** Next.js 16 (App Router), React 19, Tailwind CSS v4, Motion (v12), Lucide React, TypeScript 6.

**Spec:** Quyết định đã thống nhất qua phiên phỏng vấn grilling ngày 18/10/2026.

---

## Global Constraints

- **Strict Git Rule:** Tuyệt đối KHÔNG tự ý `git commit` hay `git push` cho đến khi người dùng yêu cầu rõ ràng.
- **Data Integrity:** Giữ nguyên 100% dữ liệu gốc từ `src/data/portfolio.ts`, không bịa đặt hoặc thay đổi bất kỳ mô tả hay thông tin cá nhân nào.
- **Zero Build Regressions:** Mọi tác vụ phải duy trì `npm run lint` (0 error, 0 warning) và `npm run build` thành công.
- **CSS / Styling:** Xóa bỏ hoàn toàn các raw hex strings rải rác (`#0C0C0C`, `#D7E2EA`, `#141414`, `#181818`), chuyển sang các semantic utility classes từ theme (`bg-surface-base`, `text-primary`, `border-subtle`, v.v.).

---

## Review Focus

1. **Tailwind v4 Theme Compatibility:** Đảm bảo các biến theme trong `@theme` tương thích với cú pháp `@theme` của Tailwind v4, không làm hỏng build PostCSS.
2. **I18n Fallback & Reactive Switch:** Khi bấm chuyển đổi `VI` / `EN`, toàn bộ text trên tất cả các section (kể cả badge, header, modal) phải đổi tức thì không gián đoạn.
3. **Sticky Scroll Stacking in Projects Section:** Đảm bảo `SurfaceCard` và cấu trúc thẻ xếp chồng (sticky-stacking) tại `ProjectsSection` hoạt động trơn tru trên mobile lẫn desktop.
4. **Hero 3D Avatar Z-Index & Magnet Tilt:** Không để avatar che khuất chữ tiêu đề hoặc mất hiệu ứng nam châm 3D sau khi refactor.
5. **Contrast Experience Section:** Đảm bảo section trắng tương phản (`bg-surface-contrast text-surface-base`) hiển thị sắc nét với các thẻ năng lực và mốc thời gian.

---

## Task Structure

### Task 1: Foundation Tokens, Motion Cadence & Full I18n Coverage

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/lib/motion.ts`
- Modify: `src/data/ui-labels.ts`

**Interfaces:**
- Produces: 
  - Semantic theme tokens: `surface-base`, `surface-card`, `surface-card-hover`, `surface-contrast`, `text-primary`, `text-muted`, `border-subtle`, `border-strong`, `radius-card`, `radius-container`.
  - Motion tokens in `src/lib/motion.ts`: `easeMotion: [0.25, 0.1, 0.25, 1]`, `transitionSmooth`, `fadeInVariants`.
  - Comprehensive `UI_LABELS` covering: `common.contactMe`, `nav.switchVi`, `nav.switchEn`, `experience.subhead`, `experience.coreCompetenciesSub`, `projects.problemLabel`, `projects.solutionLabel`.

- [x] **Step 1: Cập nhật `src/app/globals.css` với `@theme` block của Tailwind v4**
  - Khai báo các custom properties và map semantic colors, border radius.
- [x] **Step 2: Cập nhật `src/lib/motion.ts` với standard easing và transitions**
  - Đồng bộ easing curve `[0.25, 0.1, 0.25, 1]` vào token dùng chung.
- [x] **Step 3: Bổ sung 100% chuỗi UI còn thiếu vào `src/data/ui-labels.ts`**
  - Chuyển toàn bộ các chuỗi còn đang hardcode dạng ternary trong các section vào đây.
- [x] **Step 4: Kiểm tra build sơ bộ**
  - Chạy `npm run lint` để đảm bảo types và cú pháp hợp lệ.

---

### Task 2: Build Internal UI Component Kit (`src/components/ui/`)

**Files:**
- Create: `src/components/ui/section-container.tsx`
- Create: `src/components/ui/section-header.tsx`
- Create: `src/components/ui/surface-card.tsx`
- Create: `src/components/ui/tag-badge.tsx`
- Create: `src/components/ui/button.tsx`
- Modify: `src/components/ui/contact-button.tsx` (re-export or alias from `button.tsx`)
- Modify: `src/components/ui/live-project-button.tsx` (re-export or alias from `button.tsx`)
- Modify: `src/components/ui/index.ts`

**Interfaces:**
- `SectionContainer({ children, id, className, variant?: 'dark' | 'contrast' })`
- `SectionHeader({ title, subtitle, theme?: 'dark' | 'contrast', align?: 'center' | 'left' })`
- `SurfaceCard({ children, variant?: 'dark' | 'contrast' | 'bordered', className, ...props })`
- `TagBadge({ children, variant?: 'default' | 'success' | 'outline' | 'contrast', size?: 'sm' | 'md' })`
- `Button({ variant?: 'gradient-pill' | 'outline-pill' | 'tab' | 'ghost', href?: string, onClick?: () => void, icon?: React.ReactNode, active?: boolean, children })`

- [x] **Step 1: Tạo `src/components/ui/section-container.tsx`**
  - Đóng gói container chuẩn: responsive padding, max-width, relative position, overflow clip.
- [x] **Step 2: Tạo `src/components/ui/section-header.tsx`**
  - Chuẩn hóa tiêu đề lớn với clamp typography, `hero-heading` gradient (hoặc màu contrast), subtitle font-mono tracking-widest.
- [x] **Step 3: Tạo `src/components/ui/surface-card.tsx`**
  - Card chuẩn với các biến thể nền tối (`#141414`), nền sáng (`#0C0C0C/0.03`), viền mảnh `border-subtle`, bo góc `rounded-card`.
- [x] **Step 4: Tạo `src/components/ui/tag-badge.tsx`**
  - Pill chip tái sử dụng cho GPA, trạng thái, tech stack, mốc thời gian.
- [x] **Step 5: Tạo `src/components/ui/button.tsx` & cập nhật aliases**
  - Tích hợp các kiểu nút tương tác, active scale `active:scale-95`, hover state. Giữ backward compatibility cho `ContactButton` và `LiveProjectButton`.
- [x] **Step 6: Cập nhật `src/components/ui/index.ts`**
  - Re-export toàn bộ UI Component Kit.
- [x] **Step 7: Kiểm tra linting**
  - Chạy `npm run lint` để kiểm tra kiểu dữ liệu TypeScript.

---

### Task 3: Refactor Sections to Consume UI Kit & Tokens

**Files:**
- Modify: `src/components/sections/hero-section.tsx`
- Modify: `src/components/sections/about-section.tsx`
- Modify: `src/components/sections/experience-section.tsx`
- Modify: `src/components/sections/projects-section.tsx`
- Modify: `src/components/sections/marquee-section.tsx`
- Modify: `src/components/ui/contact-modal.tsx`

**Refactor Scope:**
- [x] **Step 1: Refactor `hero-section.tsx`**
  - Dùng `Button` với variant `tab` cho Language Switcher.
  - Dùng `Button` với variant `gradient-pill` cho nút liên hệ dưới đáy.
  - Xóa sạch raw hex `#...`, thay bằng theme classes. Dùng `UI_LABELS` cho aria-label và button label.
- [x] **Step 2: Refactor `about-section.tsx`**
  - Sử dụng `SectionHeader` cho tiêu đề About.
  - Sử dụng `SurfaceCard` cho card Học Vấn và Profile Info.
  - Sử dụng `TagBadge` cho GPA và Status.
  - Sử dụng `Button` cho nút CTA liên hệ.
  - Xóa sạch mã hex `#...` và hardcoded copy.
- [x] **Step 3: Refactor `experience-section.tsx`**
  - Sử dụng `SectionContainer` variant `contrast` và `SectionHeader` theme `contrast`.
  - Sử dụng `SurfaceCard` variant `contrast` cho Skill groups.
  - Sử dụng `TagBadge` variant `contrast` cho Period.
  - Triệt tiêu hoàn toàn các ternary inline hardcode text, kết nối trực tiếp vào `UI_LABELS.experience`.
- [x] **Step 4: Refactor `projects-section.tsx`**
  - Sử dụng `SurfaceCard` cho Problem/Solution box, Core Features list, và TechStack box.
  - Sử dụng `TagBadge` cho Tech Stack items và Project ID badges.
  - Sử dụng `Button` variant `outline-pill` cho Live Project button.
  - Sử dụng motion tokens từ `src/lib/motion.ts`.
- [x] **Step 5: Refactor `contact-modal.tsx` & `marquee-section.tsx`**
  - Đồng bộ theme tokens cho nền modal, border, input/copy surfaces.
  - Xóa các mã hex trùng lặp.

---

### Task 4: Complete Verification & Final Audit

**Files:**
- Verification only

- [x] **Step 1: Chạy `npm run lint`**
  - Đảm bảo 0 error, 0 warning trên toàn bộ project.
- [x] **Step 2: Chạy `npm run build`**
  - Kiểm tra Next.js SSG build và kết quả biên dịch PostCSS/Tailwind v4.
- [x] **Step 3: Báo cáo kết quả và trình bày cho người dùng**
  - Báo cáo chi tiết các file đã refactor, bảng đối chiếu trước/sau, chờ lệnh commit từ người dùng.
