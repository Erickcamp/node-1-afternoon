const express = require('express')
const app = express()
const SERVER_PORT = 4000
const getProducts = require('./getProducts')
const getProductsId = require('./getProductsId')


app.use(express.json())

app.get('/api/products', getProducts.getProducts)

app.get('/api/products/:product_id', getProductsId.getProductsId)

app.listen(SERVER_PORT, () => 
console.log(`Server running on port ${SERVER_PORT}`)
)