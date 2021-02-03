const mongoose = require('mongoose');

const { Schema } = mongoose;

const ItemSchema = new Schema({
    name: String,
    amount: Number,
    description: String
});

module.exports = { ItemSchema };