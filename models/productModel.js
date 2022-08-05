const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	image: String,
	cost: {
		type: Number,
		required: true,
	},
	manufacturer: String,
	attributes: [
		{
			type: mongoose.SchemaTypes.ObjectId,
			ref: "attribute",
		},
	],
});

module.exports = mongoose.model("product", ProductSchema);
