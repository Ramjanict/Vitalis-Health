# Vitalis — AI-Powered Health & Wellness Admin Dashboard

> An enterprise-grade, responsive healthcare and wellness management dashboard built with **Next.js 16**, **React 19**, **Tailwind CSS**, and **Redux Toolkit**. Delivers comprehensive patient monitoring, wearable device integrations, AI health companion logs, nutrition database tracking, and proactive wellness nudges.

---

## 🌟 Visual Preview

![Vitalis Dashboard Hero](/images/dashboard-hero.jpg)

<p align="center">
  <img src="/images/health-vitals.jpg" width="48%" alt="Health Vitals Monitoring" />
  <img src="/images/ai-wellness-assistant.jpg" width="48%" alt="AI Wellness Assistant" />
</p>

<p align="center">
  <img src="/images/nutrition-scanner.jpg" width="48%" alt="Nutrition Scanner" />
  <img src="/images/wellness-nudges.jpg" width="48%" alt="Wellness Nudges" />
</p>

---

## 🚀 Key Features

### 📊 1. Overview & Platform Analytics
- **Live Metric Cards:** Real-time visibility into Total Users, Active Users, Lab Reports, and AI Conversations.
- **Trend Visualizations:** Interactive charts for user growth, engagement trajectory, and health metric distributions (Sleep, Heart Rate, Nutrition, Steps) powered by **Recharts**.
- **Recent Platform Activity:** Dynamic audit trail recording lab report submissions, smart watch synchronizations, and AI chat sessions.

### 👥 2. User & Patient Management
- **Directory & Status Filter:** Real-time filtering across active and inactive users with debounced multi-field search.
- **Deep Profile Inspector:** Comprehensive modal view displaying contact details, connected wearable devices (Apple Watch, Fitbit, Garmin, Whoop, Oura), vitals averages, and recent activity logs.
- **Profile Customization:** In-place profile editor with full form validation for biometrics (height, weight, health goals, language preferences).
- **Safe Record Management:** Soft-delete confirmation with custom alert dialogs and instant status toasts.

### 🩺 3. Health & Biometrics Monitoring
- **Vitals Tracking:** Comprehensive dashboard monitoring heart rate (ECG), SpO2, sleep cycle metrics, and active minutes.
- **Device Ecosystem:** Native integration support for Apple Health, Fitbit, Garmin, and Strava.
- **Automated Health Alerts:** Threshold notifications for abnormal biometric readings and critical events.

### 🤖 4. AI Health Companion & Chat
- **Conversational Diagnostics:** Monitoring chat logs between users and the AI Wellness Assistant.
- **Symptom & Nutrition Analysis:** Conversational triage, automated lifestyle recommendations, and personalized guidance.

### 🧪 5. Lab Reports Management
- **Report Intake & Verification:** Track uploaded clinical lab reports across *Pending*, *Under Review*, and *Completed* stages.
- **Biomarker Analysis:** Quick reference for medical staff and wellness coaches to review blood work and metabolic panels.

### 🥗 6. Nutrition & Meal Database
- **Calorie & Macronutrient Tracker:** Breakdown of protein, carbohydrates, fats, and essential micronutrients.
- **Scanning Trends:** Visual analytics on top scanned healthy foods and meal logging patterns.

### 💡 7. Proactive Wellness Nudges
- **Behavioral Habit Triggers:** Design and schedule nudges for hydration, posture, walking breaks, and mindful breathing.
- **Engagement Optimization:** Track nudge completion rates and impact on daily user health score.

### ⚙️ 8. Administration & Preferences
- **Admin Profile & Security:** Multi-tab settings for profile avatar, credentials, session management, and notifications.
- **Client-Side Auth Guards:** Secure protected route wrappers with seamless local state persistence and one-click demo access.

---

## 🔐 Default Demo Credentials

The platform runs in an optimized standalone static client mode without external backend dependencies. You can sign in immediately using the default credentials:

| Field | Value |
| :--- | :--- |
| **Email** | `admin@wellness.com` |
| **Password** | `password123` |

> *Note: The login form comes pre-filled with these credentials for rapid preview and evaluation.*

---

## 🛠️ Tech Stack & Architecture

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/) & React Redux
- **UI Components:** [Radix UI](https://www.radix-ui.com/) & [Lucide React](https://lucide.dev/) / React Icons
- **Charts & Data Viz:** [Recharts](https://recharts.org/)
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/)

---

## 📁 Project Directory Structure

```text
surajashray/
├── app/
│   ├── (auth)/
│   │   ├── login/                 # Client-side demo login page
│   │   └── signup/                # Signup page
│   ├── (dashboard)/
│   │   └── dashboard/
│   │       ├── ai-chat/           # AI Health conversation monitoring
│   │       ├── analytics/         # Deep analytics & metrics
│   │       ├── health-monitoring/ # Biometrics & vitals monitoring
│   │       ├── lab-reports/       # Patient clinical test records
│   │       ├── nutrition-database/# Calorie & meal tracker
│   │       ├── overview/          # Main KPI dashboard
│   │       ├── settings/          # Admin platform settings
│   │       ├── users-management/  # User table, inspection & edit
│   │       └── wellness-nudges/   # Habit reminders & nudges
│   ├── (privacy)/
│   │   └── role/                  # Privacy policy and terms pages
│   ├── globals.css                # Global styles and Tailwind configuration
│   └── layout.tsx                 # Root layout with Redux providers
├── components/
│   ├── common/                    # Navbar, Sidebar, headers, buttons
│   ├── overview/                  # KPI cards, growth & health charts
│   ├── user/                      # Users table, profile modal, inspection
│   ├── health/                    # Vitals & health alerts
│   ├── nutrition/                 # Nutrition database cards & trends
│   ├── wellness/                  # Wellness nudge cards & creation modal
│   └── ui/                        # Radix UI primitives (modals, tabs, badges)
├── lib/
│   ├── mockData.ts                # Standalone data store & reactive hooks
│   └── utils.ts                   # Class merging and styling utilities
├── public/
│   └── images/                    # Platform preview & feature graphics
└── store/
    ├── auth/                      # Authentication slice and actions
    └── store.ts                   # Redux store setup
```

---

## 🚦 Getting Started

### Prerequisites

Ensure you have **Node.js 18+** or **Node.js 20+** installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/softvence-omega-future-stack/surajashray.git
   cd surajashray
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to **[http://localhost:3000](http://localhost:3000)**.
   You will automatically be redirected to `/login`, where you can sign in using `admin@wellness.com` / `password123`.

---

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
