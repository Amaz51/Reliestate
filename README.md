**ReliEstate**

ReliEstate is a real estate web app where users can browse, list, and manage properties with secure authentication.

**Features**

User Registration & Login

Email OTP Verification

JWT Authentication (Access + Refresh Tokens)

Property Listing & Management

Profile Management

Secure Logout

**Tech Stack**

**Frontend:**

React

Redux Toolkit

Tailwind CSS

**Backend:**

Node.js

Express.js

MongoDB

Redis (for OTPs & temp data)

**Setup Instructions**
1. Clone the project
git clone <your-repo-url>
cd reliestate

2. Install dependencies

Frontend:

cd frontend
npm install


Backend:

cd backend
npm install

3. Environment Variables

Create a .env file in backend:

MONGO_URI=your_mongodb_url
JWT_SECRET=your_jwt_secret
REDIS_URL=your_redis_url
PORT=5001

4. Run the project

Backend:

npm start


Frontend:

npm run dev

📌 How It Works

User registers → receives OTP

OTP verified → account created

User logs in → tokens generated

User can add / view properties

Logout clears session