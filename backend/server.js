const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();  // ✅ Load .env before DB
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));


app.get("/", (req, res) => {
  res.send("Campus EventHub Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
