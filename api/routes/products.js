const express= require('express')
const router = express.Router()
const {Product,User}= require('../models')

router.get('/',(req,res)=>{
    Product.findAll()
    .then(allProducts=>res.status(200).send(allProducts))
})

router.get('/:product',(req,res)=>{
    Product.findAll({where:{name:req.params.product}})
    .then(productMatched=>res.status(200).send(productMatched))
})
router.get('/:genre',(req,res)=>{
    Product.findAll({where:{genre:req.params.genre}})
    .then(products=>res.status(200).send(products))
})


router.delete('/:productID',(req,res)=>{
        Product.destroy(productMatched,{where:{id:req.params.productID}})
        .then(()=>res.sendStatus(201))
})

router.post('/',(req,res)=>{
    Product.create(req.body)
    .then(productCreated=>{
        res.status(204).send(productCreated)
    })
})

router.put('/:productID',(req,res)=>{
    Product.update(req.body,{where:{id:req.params.productID}})
})

module.exports=router