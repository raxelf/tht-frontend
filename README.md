# THT Frontend - Dashboard

Aplikasi dashboard management system yang dibangun dengan Next.js 16, React 19, TypeScript, dan Tailwind CSS. Aplikasi ini menyediakan fitur autentikasi, dashboard.

## 🚀 Teknologi yang Digunakan

- **Next.js 16.0.3** - React Framework dengan App Router
- **React 19.2.0** - UI Library
- **TypeScript 5** - Type Safety
- **Tailwind CSS 4** - Styling
- **JSON Web Token (JWT)** - Authentication
- **Zod** - Schema Validation
- **Remixicon** - Icon Library

## 📋 Fitur Aplikasi

### 1. **Authentication System**

- Login dengan validasi email dan password
- JWT token-based authentication
- Session management (24 jam)
- Error handling dengan flash messages

### 2. **Dashboard**

- Summary cards untuk statistik

### 3. **Data Table**

- Tabel data user dengan pagination (10 data per halaman)
- Fitur pencarian (search by name & email)
- Sorting multi-kolom:
  - ID
  - Name
  - Email
  - Role
  - Created At
- Sorting ascending/descending dengan indikator visual (▲/▼)
- Data dinamis dari JSON (30 user records)

## 🔐 Kredensial Login

Untuk mengakses aplikasi, gunakan kredensial berikut:

```
Email: admin@example.com
Password: admin123
```

## 📝 API Endpoints

### POST /api/auth/login

Login endpoint untuk autentikasi user.

**Request Body:**

```json
{
  "email": "admin@example.com",
  "password": "admin123"
}
```

**Success Response (200):**

```json
{
  "code": 200,
  "message": "Successfully logged in",
  "access_token": "jwt.token.here"
}
```

**Error Response (401):**

```json
{
  "code": 401,
  "error": "Invalid email or password!"
}
```

Dikembangkan sebagai Test Assignment - Frontend Development

---

**Note:** Aplikasi ini dibuat untuk keperluan demonstrasi. Password disimpan dalam plain text dan tidak di-hash untuk kemudahan testing.
