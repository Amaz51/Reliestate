
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const allowedOrigins = ['http://localhost:5173']; // Frontend origin
const app = express();
app.use(cors({
    origin: allowedOrigins,
    credentials: true, // allow cookies
}));
// Import Routes
const authRoutes = require("./api/auth/auth.routes");
const userRoutes = require("./api/users/user.routes");
const propertyRoutes = require("./api/properties/property.routes");
const inquiryRoutes = require("./api/inquiries/inquiry.routes");
const adminRoutes = require("./api/admin/admin.routes");

// Load environment variables
dotenv.config();

// Create Express app


// Middleware

app.use(morgan("dev")); // Logging
app.use(express.json()); // JSON parser
app.use(cookieParser()); // Parse cookies
app.options('*', cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ['GET','POST','PUT','DELETE','OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/inquiries", inquiryRoutes);
app.use("/api/admin", adminRoutes);

// Health check
app.get("/", (req, res) => {
    res.status(200).json({ message: "API is running!" });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
});

module.exports = app;
