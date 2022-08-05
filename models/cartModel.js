const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShoppingCartSchema = new Schema({
	user_id: {
		type: mongoose.SchemaTypes.ObjectId,
		required: true,
	},
	items: {
		type: mongoose.SchemaTypes.Array,
	},
});

module.exports = mongoose.model("shopping_cart", ShoppingCartSchema);
