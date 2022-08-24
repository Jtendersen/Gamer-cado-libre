const express= require('express')
const router = express.Router()
const {Product,User, Genre}= require('../models')

router.get('/allProducts',(req,res)=>{
    Product.findAll()
    .then(allProducts=>res.status(200).send(allProducts))
})
router.get('/:product',(req,res)=>{
    Product.findOne({where:{name:req.params.product}})
    .then(productMatched=>res.status(200).send(productMatched))
})
router.get('/allGenres/:genre',(req,res)=>{
    Genre.findOne({where:{genre:req.params.genre}})
    .then(genreMatched=>{
        if(!genreMatched)res.status(404).send('ESE GENERO NO EXISTE, COMPROBAR COMO FUE TIPEADO')
        const {id}=genreMatched
        Product.findAll({where:{genreId:id}})
        .then(productsMatched=>res.status(200).send(productsMatched))
    })
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