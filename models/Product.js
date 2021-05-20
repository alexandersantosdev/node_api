const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = Schema({
    name: String,
    price: Number,
    qtd: Number
}, {timestamps: true})

module.exports = mongoose.model('Product', productSchema)