const express = require("express");
const path = require("path");

const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");

// Create Express App
const app = express();

// View Engine
app.set("view engine", "ejs", {
	layouts: path.join(__dirname, "/views"),
});

// Statics
app.use("/libs", express.static(path.join(__dirname, "node_modules")));
app.use("/static", express.static(path.join(__dirname, "public")));

// Routes
app.use("/admin", adminRoutes);
app.use(userRoutes);

// Create Server
app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
