import express from "express";
import path from "path";
import router from "../router";

// 1-ENTRANCE: Initialize express and middleware
const app = express();
app.use(express.static(path.join(__dirname, "public"))); // Serve static files
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(express.json()); // Parse JSON data

// 2-SESSIONS: (Sessions can be added here if needed)

// 3-VIEWS: Set up view engine (EJS) and views directory
app.set("views", path.join(__dirname, "views")); // Set views folder
app.set("view engine", "ejs"); // Use EJS as template engine

// 4-ROUTERS: (Routes should be added here)

app.use('/', router);

// Export the app for use in other files
export default app;