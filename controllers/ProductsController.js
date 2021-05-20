const Product = require('../models/Product')

module.exports = {
    async getAll(req, res){
        const products = await Product.find({})
        res.json(products)
    },

    async addProduct(req, res){
        const {name, price, qtd} = await req.body
        const product = await Product({
            name,
            price,
            qtd
        }).save()
        res.status(201).json({product})
    },
    async updateProduct(req, res){
        const {name, price, qtd} = await req.body
        const id = req.params.id
        
        const product = await Product.findById(id)

        if (product){
            product.name = (name)? name: product.name,
            product.price = (price)? price: product.price,
            product.qtd = (qtd)? qtd: product.qtd

            await product.save()
            res.status(201).json(product)
        }else{
            res.status(404).json({"Message": "Product not found"})
        }

    },
    async deleteProduct(req, res){
        
        const id = req.params.id
        
        const product = await Product.findById(id)

        if (product){
            product.delete()
            res.status(204).json()
        }else{
            res.status(404).json({"Message": "Product not found"})
        }

    }
}