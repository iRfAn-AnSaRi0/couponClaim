# Coupon Distribution System - Backend

## Overview
This is the backend for the Coupon Distribution System. It manages coupon allocation, prevents abuse, and provides APIs for the frontend to claim and display coupons.

## Features
- Distribute coupons in a round-robin manner.
- Prevent multiple claims using IP and cookie tracking.
- Provide API endpoints for fetching and claiming coupons.

## Technologies Used
- Node.js
- Express.js
- MongoDB with Mongoose
- Cookie-parser for session management

## Installation & Setup

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/coupon-system.git
   cd coupon-system/backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```sh
   MONGO_URI= *
   PORT= *
   ```
4. Start the server:
   ```sh
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend:
   ```sh
   npm run dev
   ```

## API Endpoints
### Fetch Available Coupons
```
GET /api/coupons
```
- Response:
```json
[
  { "code": "DISCOUNT50", "status": "available" }
]
```

- Response:
```json
{ "message": "Coupon claimed successfully" }
```

## License
This project is open-source and free to use.

