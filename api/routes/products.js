const express= require('express')
const router = express.Router()
const {Product,User}= require('../models')

router.get('/',(req,res)=>{
    Product.findAll()
    .then(allProducts=>res.status(200).send(allProducts))
})

router.get('/:product',(req,res)=>{
    Product.findOne({where:{name:req.params.product}})
    .then(productMatched=>res.status(200).send(productMatched))
})
