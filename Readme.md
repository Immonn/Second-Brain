# 🧠 Brainly — Link & Content Sharing App

**Brainly** is a full-stack web application that lets users save useful links (YouTube, X/Twitter) and share their entire collection (“brain”) with anyone using a simple shareable link.

Think of it as your **personal knowledge vault**, with effortless sharing.

---

## ✨ Features

- 🔐 JWT-based authentication  
- 📌 Save & manage links (YouTube / X)
- 🔗 One-click shareable brain link
- 🌍 Public access to shared content (no login required)
- ⚡ Fast SPA frontend built with Vite + React
- 🧩 Clean separation of backend API and frontend UI

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express
- TypeScript
- MongoDB + Mongoose
- JWT Authentication
- CORS enabled

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS (utility classes)

---

## 📂 Repository Structure

Brainly/
├── Backend/
│   ├── src/
│   │   ├── index.ts          # App entry point
│   │   ├── db.ts             # Mongoose models (User, Content, Links)
│   │   ├── middleware.ts     # JWT auth middleware
│   │   └── routes/
│   │       ├── auth.ts       # Signup / Signin
│   │       ├── content.ts    # Add / Get / Delete content
│   │       └── links.ts      # Share brain & public access
│   ├── dist/                 # Compiled output
│   └── .env.example
│
├── Frontend/
│   ├── src/
│   │   ├── App.tsx           # App routes
│   │   ├── pages/            # Landing, Auth, Dashboard, Share
│   │   ├── components/       # Reusable UI components
│   │   ├── hooks/            # Custom hooks
│   │   └── config.ts         # Backend base URL
│   └── vite.config.ts


---

## 🔐 Authentication Flow

- Users sign up or sign in using `/auth/up` or `/auth/in`
- Server returns a **JWT token**
- Token is:
  - Stored in `localStorage`
  - Sent with every protected request via the `token` header
- Backend middleware validates the token and attaches `userId` to the request


## 🧩 Data Model (Content)

```ts
{
  title: string,
  link: string,
  type: "youtube" | "x",
  userId: ObjectId
}

⚙️ Environment Variables

Create a .env file inside the Backend/ directory:

MONGO_URL=your_mongodb_connection_string
JWT_USER=your_jwt_secret

🚀 Running Locally

For Backend
    cd Backend
    npm install
    npm run dev

Backend runs on http://localhost:3000

For Frontend
    cd Frontend
    npm install
    npm run dev

Frontend runs on http://localhost:5173

🛣️ Improvements
🔄 Move JWT storage to HttpOnly cookies
🧪 Add backend & frontend tests
⚙️ Improve API error handling
🔍 Add search & pagination
🚀 Add Docker + CI/CD pipeline

