const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AttributeSchema = new Schema({
	name: String,
	value: String,
	product_id: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "product",
	},
});

module.exports = mongoose.model("shopping_cart", AttributeSchema);
