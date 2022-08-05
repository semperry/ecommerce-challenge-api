require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 4000;
const app = express();

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log("Store DB Connected"))
	.catch((err) => console.log("DB Connection Error: ", err));

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
	console.log(`Shop API running on port ${PORT}`);
});
