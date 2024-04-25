const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const connectDb = require("../minor-project-backend/config/dbConnection");
const errorHandler = require("./controllers/middleware/errorHandler");
const port = process.env.port || 5000;

connectDb();
app.use(errorHandler);

app.use(express.json());
app.use("/api/students", require("./routes/studentRoutes"));

app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}`);
});