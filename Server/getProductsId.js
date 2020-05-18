const products = require('../products.json')

const getProductsId = (req, res) => {
    const { product_id } = req.params
    const pId = products.find((element) => element.id === +product_id)

    if(pId) {
        res.status(200).send(pId)
    } else {
        res.status(500).send('Item not in list')
    }
}
module.exports = {getProductsId}
