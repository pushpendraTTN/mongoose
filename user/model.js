const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventoryItemSchema = new Schema(
    {
      name:  String,
      quantity: Number,
      isSanitized: Boolean,
      unit: String,
      expiryDate: {
        type: Date,
        default: null
      },
      createdDate: {
        type: Date,
        default: Date.now
      },
      updatedDate: {
        type: Date,
        default: Date.now
      },
      category: String,
      location: String
});



const InventoryModel = mongoose.model('Inventory', InventoryItemSchema);

module.exports = {
  InventoryModel
};