const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");

const app = express();

const authRoutes = require("./Routes/authRoutes");
app.use("/api/auth", authRoutes);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Ecommerce Backend");
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
