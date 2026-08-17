# Dharunanand R | Product Manager Portfolio 🚀

> A modern, highly interactive, and premium portfolio website built to showcase my product management experience, philosophies, and technical expertise.

![Portfolio Preview](./public/favicon.ico) *(Insert a screenshot of your hero section here!)*

## 🌟 Key Features

*   **Interactive 3D Environments**: Immersive, scroll-driven 3D shapes built with `Three.js` and `React Three Fiber` that transition as you scroll through the page.
*   **Modern Glassmorphism Aesthetic**: Sleek UI with frosted glass panels, neon `#00E0BA` accents, and smooth `Framer Motion` animations.
*   **Phosphor Icons**: Premium duotone iconography that perfectly complements the dark, cyber-aesthetic theme.
*   **Serverless Contact Form**: Fully functional contact form built with Next.js Server Actions.
*   **Neon Postgres Integration**: Form submissions are instantly saved to a `Neon Serverless Postgres` database.
*   **Secure Admin Dashboard**: A password-protected `/admin` route to view and manage contact form submissions securely.

## 🛠️ Tech Stack

*   **Framework**: [Next.js 15+ (App Router)](https://nextjs.org/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **3D Graphics**: [Three.js](https://threejs.org/) & [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
*   **Database**: [Neon Postgres](https://neon.tech/) (`@neondatabase/serverless`)
*   **Icons**: [Phosphor Icons](https://phosphoricons.com/)

## 🚀 Getting Started Locally

### 1. Clone the repository
```bash
git clone https://github.com/dharun-21-98/Dharun_new_portfolio.git
cd Dharun_new_portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env.local` file in the root of the project. You will need your Neon Postgres connection string and an Admin password.
```env
# Your Neon Postgres connection string
DATABASE_URL="postgres://user:password@hostname/dbname?sslmode=require"

# Password to access the /admin dashboard
ADMIN_PASSWORD="your-secure-password"
```

### 4. Initialize Database
Make sure to create the required table in your Neon database:
```sql
CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### 5. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🌐 Deployment
This project is optimized for deployment on [Vercel](https://vercel.com/). Ensure that your `DATABASE_URL` and `ADMIN_PASSWORD` are configured securely in your Vercel Project Settings.

---
*Designed & Built with passion.*
