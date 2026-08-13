# Emaily - Full-Stack SaaS Survey Management App

Emaily is a full-stack Software-as-a-Service (SaaS) application that allows users to create, deploy, and track mass email surveys. The application features a secure user authentication loop, an integrated credit-based payment gateway, custom automated email campaigns, and real-time webhook tracking.

🌐 **Live Demo:** [Emaily App](https://emaily-saasmanagement-rako85nvg-work-lab.vercel.app/)  

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
cd emaily_SaaS
```

### 2. Install Project Dependencies
Install the required node modules for both the root backend server and the frontend client:
```bash
npm install && npm install --prefix client
```

### 3. Setup Local Environment Configurations
Create a `dev.js` configuration file inside your server's config directory:
`config/dev.js`


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

### 4. Configure Your Webhook Tunnel (ngrok)
Because SendGrid needs to communicate clicks back to your local server on port 5000, spin up an ngrok tunnel in a separate terminal:
```bash
npm install -g ngrok
ngrok http 5000
```
Copy your active forwarding `.dev` or `.app` secure URL and paste it into your SendGrid **Event Webhook** settings dashboard as the endpoint:
`https://YOUR_TUNNEL_ID.ngrok-free.dev/api/surveys/webhooks`

### 5. Boot Up Both Development Servers
Execute the concurrent start script from the project root directory to launch the Node backend and React frontend simultaneously:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

---

## 🌐 Production Deployment (Render)

This application is fully optimized for cloud deployment on Render:
1. The root configuration utilizes custom Express middleware logic to safely isolate backend routing definitions from the React production static build folder pathway (`client/build`).
2. Add your production environment settings directly within the Render service **Environment** dashboard tab, ensuring `NODE_ENV` is set to `production` and mapping your dynamic cloud `REDIRECT_DOMAIN` directly to your production URL.
