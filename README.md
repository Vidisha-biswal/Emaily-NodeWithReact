# Emaily - Full-Stack SaaS Survey Management App

Emaily is a full-stack Software-as-a-Service (SaaS) application that allows users to create, deploy, and track mass email surveys. The application features a secure user authentication loop, an integrated credit-based payment gateway, custom automated email campaigns, and real-time webhook tracking.

🌐 **Live Demo:** [emaily application](https://emaily-nodewithreact.onrender.com/)  

---

## 🚀 Key Features

* **Secure Authentication:** Integrated Google OAuth 2.0 utilizing Passport.js and secure cookie-based sessions.
* **Payment Processing:** Full integration with Stripe Checkout to safely handle test credit card transactions and update user credit balances.
* **Automated Mass Mailers:** Programmatic email distribution engine built with Twilio SendGrid utilizing custom responsive HTML email templates.
* **Real-Time Webhook Processing:** Custom webhook endpoint that captures, filters, and analyzes user click data ("Yes" / "No") to prevent duplicate voting.
* **Robust Form Handling:** Dynamic frontend survey fields powered by React and Redux Form with instant validation checks.

---

## 🛠️ Technology Stack

### Frontend (Client)
* **React.js** (Functional & Class Architecture)
* **Redux & Redux Thunk** (Global State & Asynchronous Action Management)
* **Redux Form** (Form State Mapping and Client-Side Input Validation)
* **Materialize CSS** (Clean, Modern Responsive Styling UI)
* **Axios** (Asynchronous HTTP Network API Requests)

### Backend (Server)
* **Node.js & Express** (REST API Architecture & Microservice Routing)
* **MongoDB & Mongoose** (NoSQL Database Storage & Schema Modeling)
* **Passport.js** (OAuth 2.0 Authentication Strategy Execution)
* **SendGrid API** (Cloud Transactional Email Distribution Network)

---

## 💻 Local Installation & Setup

Follow these steps to configure and run the full-stack development environment on your machine:

### 1. Clone the Repository
```bash
git clone https://github.com
cd emaily-fullstack
```

### 2. Install Project Dependencies
Install the required node modules for both the root backend server and the frontend client:
```bash
npm install && npm install --prefix client
```

### 3. Setup Local Environment Configurations
Create a `dev.js` configuration file inside your server's config directory:
`server/config/dev.js`

```javascript
module.exports = {
  googleClientID: 'YOUR_GOOGLE_CLIENT_ID',
  googleClientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
  mongoURI: 'YOUR_MONGODB_CONNECTION_STRING',
  cookieKey: 'ANY_RANDOM_SECRET_STRING_FOR_COOKIES',
  stripePublishableKey: 'YOUR_STRIPE_PUBLIC_TEST_KEY',
  stripeSecretKey: 'YOUR_STRIPE_SECRET_TEST_KEY',
  sendGridKey: 'YOUR_SENDGRID_API_KEY',
  redirectDomain: 'http://localhost:3000' 
};
```

### 4. Boot Up Both Development Servers
Execute the concurrent start script from the project root directory to launch the Node backend and React frontend simultaneously:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

---

## 🌐 Production Deployment (Render)

This application is fully optimized for containerized cloud deployment on Render:
1. Ensure your root `index.js` file handles static asset path routing via `path.join(__dirname, 'client', 'build')`.
2. Configure all relevant variables (`MONGO_URI`, `SEND_GRID_KEY`, `NODE_ENV=production`, etc.) inside your Render service dashboard.
