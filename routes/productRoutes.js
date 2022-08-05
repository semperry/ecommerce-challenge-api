const express = require("express");

const ProductSchema = require("../models/productModel");
const Router = express.Router();

Router.get("/products", (req, res) => {
	const { search } = req.query;

	ProductSchema.find((err, result) => {
		if (err) {
			console.log("Get Products Error: ", err);
			return res.status(400).json({ errors: err.toString() });
		}

		return res.status(200).json(result);
	});
});

module.exports = Router;
