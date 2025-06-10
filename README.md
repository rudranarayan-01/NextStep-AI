# 🧠 AI Interview & Resume Builder Platform

A modern web platform that empowers job seekers with AI-driven tools to streamline their career journey — from resume and cover letter generation to interview preparation and progress tracking.

---

## 🔥 Features

- 🔐 **Secure Authentication** with Clerk
- 📈 **Industry Insights with Trends** to stay updated
- 📄 **AI-Powered Resume & Cover Letter Generator**
- 🧠 **Mock Interview Preparation** based on skills and experience
- 📊 **Progress Tracking Dashboard** for preparation insights

---

## 🛠️ Tech Stack

| Tech             | Description                                      |
|------------------|--------------------------------------------------|
| **Next.js**      | React framework for full-stack development       |
| **Tailwind CSS** | Utility-first CSS for rapid UI design            |
| **Shadcn UI**    | Accessible, customizable UI components           |
| **Neon**         | Serverless PostgreSQL for scalable databases     |
| **Inngest**      | Serverless background jobs and event workflows   |
| **Clerk**        | Seamless authentication and session management   |
| **Framer Motion**| Smooth UI animations and transitions             |
| **TypeScript**   | Strong typing support for safer code             |
| **Postgree**     | Storing the data                                 |

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone [https://github.com/your-username/ai-interview-platform.git](https://github.com/rudranarayan-01/NextStep-AI)
cd NextStep-AI

```
### 2. Install dependencies
```bash
npm install
```

3. Configure environment variables
Create a .env.local file in the root directory and add the following:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=##################
CLERK_SECRET_KEY=

NEXT_PUBLIC_SIGNIN_URL = /sign-in
NEXT_PUBLIC_SIGNUP_URL = /sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGNIN_URL = /onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGNUP_URL = /onboarding

NEON_ROLE_PASSWORD = 
DATABASE_URL = 

GEMINI_API_KEY = 

```
