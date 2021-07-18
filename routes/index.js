const express = require('express')
const Router = express.Router()
const productController = require('../controllers/ProductsController')

Router.get('/products', productController.getAll)
Router.get('/product/:id', productController.getOne)
Router.post('/product', productController.addProduct)
Router.put('/product/:id', productController.updateProduct)
Router.delete('/product/:id', productController.deleteProduct)

module.exports = Router