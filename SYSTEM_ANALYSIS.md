# Phân tích hệ thống — Quản lý bằng sáng chế khoa học

## Tổng quan
- **Stack**: Node.js + Express, React + MUI v7, MySQL
- **Quy mô**: Nhỏ <100 users
- **Tính năng chính**: Tìm kiếm cơ bản + nâng cao, quản lý bằng sáng chế, phân quyền 3 roles

## Actors & Phân quyền

### Admin
- Toàn quyền CRUD bằng sáng chế
- Quản lý tài khoản người dùng, phân quyền, khoá tài khoản
- Xem log hệ thống, xuất PDF
- Cấu hình danh mục, lĩnh vực

### Nhân viên (Staff)
- Tạo, sửa bằng sáng chế
- Upload ảnh, đính kèm
- Tìm kiếm & xem, xuất PDF
- Xoá bằng sáng chế
- Quản lý tài khoản

### Người dùng (User)
- Đăng ký, đăng nhập
- Tìm kiếm, xem bằng sáng chế
- Xuất PDF kết quả
- Quản lý tài khoản

## Luồng xác thực
Đăng nhập → Server cấp JWT Access Token (15 phút) + Refresh Token (7 ngày, httpOnly cookie) → Mỗi request gắn Bearer token → Middleware xác thực & kiểm tra role → Refresh tự động. Mật khẩu hash bcrypt (cost 12).

## Use Cases (UC)

| ID | Tên | Actor | Mô tả | Ưu tiên |
|---|---|---|---|---|
| UC01 | Đăng ký tài khoản | User | Email, mật khẩu, họ tên. Email xác minh (tùy chọn) | Cao |
| UC02 | Đăng nhập | Tất cả | Email + mật khẩu → JWT. Khoá tạm sau 5 lần sai | Cao |
| UC03 | Đổi/Quên mật khẩu | Tất cả | Reset qua email hoặc đổi khi đã đăng nhập | Trung |
| UC04 | Thêm bằng sáng chế | Admin, Staff | Tiêu đề, mã số, tác giả, năm, lĩnh vực, mô tả, upload ảnh | Cao |
| UC05 | Xem chi tiết | Tất cả | Hiển thị đầy đủ thông tin, ảnh, tác giả | Cao |
| UC06 | Sửa bằng sáng chế | Admin, Staff | Cập nhật, thay ảnh, ghi log lịch sử | Cao |
| UC07 | Xoá bằng sáng chế | Admin | Soft delete — cho phép khôi phục | Cao |
| UC08 | Tìm kiếm cơ bản | Tất cả | Tiêu đề, tác giả, mã số, năm, lĩnh vực | Cao |
| UC09 | Tìm kiếm nâng cao | Tất cả | Kết hợp điều kiện, lọc khoảng năm, sắp xếp | Trung |
| UC10 | Xuất PDF | Tất cả | Xuất danh sách tìm kiếm hoặc chi tiết 1 bằng | Cao |
| UC11 | Quản lý tài khoản | Admin | Xem, sửa, khoá/mở khoá, phân quyền | Trung |
| UC12 | Upload & quản lý ảnh | Admin, Staff | Upload, xem trước, xoá ảnh cũ | Trung |
| UC13 | Quản lý tác giả | Admin, Staff | CRUD danh sách tác giả, liên kết với bằng | Trung |
| UC14 | Cấu hình danh mục | Admin | Thêm sửa xoá lĩnh vực khoa học | Thấp |

## Tính năng Tìm kiếm (Trọng tâm)

### Tìm kiếm cơ bản (Phase 1)

| Trường | Kiểu | Kỹ thuật SQL |
|---|---|---|
| Tiêu đề | Text | LIKE '%keyword%' |
| Mã số | Text | Exact match hoặc LIKE |
| Tên tác giả | Text | JOIN authors + LIKE |
| Năm đăng ký | Số | = hoặc BETWEEN |
| Lĩnh vực | Dropdown | FK exact match |

### API Tìm kiếm
GET /api/patents/search?q=keyword&author=name&category_id=3&year_from=2015&year_to=2023&sort=year_desc&page=1&limit=20

## Mô hình Dữ liệu — MySQL

| Bảng | Mô tả |
|---|---|
| users | Tài khoản (role: admin, staff, user) |
| patents | Bảng chính, soft delete |
| authors | Danh sách tác giả |
| patent_authors | Quan hệ N-N |
| categories | Lĩnh vực khoa học |
| patent_images | Ảnh đính kèm |
| audit_logs | Log lịch sử (JSON diff) |

## Stack Kỹ thuật

| Phần | Công nghệ |
|---|---|
| Backend | Node.js + Express |
| Frontend | React + MUI v7 |
| Database | MySQL 8.x |
| Auth | JWT + bcrypt |
| PDF Export | pdfkit hoặc puppeteer |
| File upload | multer |
| Web server | Nginx |

## Checklist Deploy Production

- Server: VPS Linux (Ubuntu 22.04) — 1 vCPU, 2GB RAM
- Domain & SSL: Let's Encrypt
- Nginx: Reverse proxy, serve static files
- MySQL: Managed DB
- PM2: Process manager
- .env: Bắt buộc (DB_PASS, JWT_SECRET, NODE_ENV)
- Backup: Cron mysqldump hàng ngày
- CORS: Chỉ domain frontend
- Rate limiting: express-rate-limit

## Rủi ro & Giải pháp

1. **Xuất PDF phức tạp**: Dùng puppeteer cho layout đẹp, xử lý async
2. **Upload ảnh lớn**: Giới hạn dung lượng, resize (sharp.js)
3. **Tìm kiếm tiếng Việt**: charset utf8mb4, collation utf8mb4_unicode_ci
4. **Phân quyền**: Test từng role, middleware tập trung

## Timeline (6–8 tuần)

- **Tuần 1–2**: Nền tảng (DB, Auth, CRUD cơ bản)
- **Tuần 3–4**: Tính năng cốt lõi (upload, tác giả, tìm kiếm, phân quyền, UI)
- **Tuần 5**: Tìm kiếm nâng cao, PDF, quản lý tài khoản
- **Tuần 6**: Test & Fix
- **Tuần 7–8**: Deploy production, UAT, Bàn giao