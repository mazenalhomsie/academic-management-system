# Damascus Institute Academic Management System

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Tech Stack](https://img.shields.io/badge/built%20with-Next.js%20%7C%20Prisma%20%7C%20Tailwind-blueviolet)

A comprehensive, enterprise-grade academic management platform designed to digitize and automate the entire student-teacher-administration workflow for Damascus Institute. Serving over 500+ users with secure, role-based access tokens and real-time data processing.

## 🚀 Key Features

### 🎓 Student Portal
- **Personalized Dashboard**: Real-time overview of GPA, attendance, and active courses.
- **Academic Records**: Instant access to grades, transcripts, and schedule history.
- **Announcement Hub**: Priority-based notifications from the administration and department heads.

### 👨‍🏫 Teacher Workstation
- **Quick Grade Input**: Streamlined interface for entering marks for mass students.
- **Class Management**: Digital attendance tracking and subject scheduling.
- **Student Analytics**: Access individual student progress reports and contact details.

### 🛡️ Administration (In Development)
- **User Management**: Granular tracking of system access and role assignment.
- **Audit Logs**: Comprehensive logging of critical system actions.

## 🛠️ Technology Stack

- **Frontend Core**: [Next.js 16](https://nextjs.org/) (App Router), [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with a custom design system (Dark Mode supported).
- **Language**: TypeScript for type-safe development.
- **Database**: MySQL (via [Prisma ORM](https://www.prisma.io/)).
- **Authentication**: Role-Based Access Control (RBAC).

## 📂 Project Structure

```bash
├── app/
│   ├── student/       # Student portal routes & layouts
│   ├── teacher/       # Teacher dashboard & grade inputs
│   ├── admin/         # Administration tools
│   ├── lib/           # Shared utilities (DB connection, mock data)
│   └── components/    # Reusable UI components
├── prisma/            # Database schema & migrations
└── public/            # Static assets
```

## ⚡ Getting Started

### Prerequisites
- Node.js 18+ 
- MySQL Database

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/damascus-portal.git
   cd damascus-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment**
   Rename `.env.example` to `.env` and update your database credentials:
   ```env
   DATABASE_URL="mysql://user:password@localhost:3306/damascus_db"
   ```

4. **Initialize Database**
   Push the Prisma schema to your database:
   ```bash
   npx prisma db push
   ```

5. **Run Development Server**
   ```bash
   npm run dev
   ```
   Access the portal at [http://localhost:3000](http://localhost:3000).

## 🧪 Development Notes

- **Mock Data**: Currently, the system uses `app/lib/mockData.ts` for demonstration purposes. Swapping this with `prisma` calls in `app/lib/db.ts` will enable real database persistence.
- **Icons**: Custom SVG icons are used throughout to avoid heavy icon library dependencies.

## 🤝 Contribution

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---
© 2026 Damascus Institute. All Rights Reserved.
