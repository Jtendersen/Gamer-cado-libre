const express= require('express')
const { validateToken } = require('../middlewares/tokens')
const router = express.Router()
const {Product,User, Genre}= require('../models')
const {Op}=require('sequelize')


//DEVUELVE TODOS LOS PRODUCTOS
router.get('/allProducts',(req,res,next)=>{
    try {
        Product.findAll()
    .then(allProducts=>res.status(200).send(allProducts))
    } catch (error) {
        console.log(error)
    }
    
})

//BUSCA UN PRODUCTO POR ID
router.get('/:productID',(req,res,next)=>{
    try {
        Product.findByPk(req.params.productID)
        .then(productMatched=>res.status(200).send(productMatched))
    } catch (error) {
        console.log(error)
    }
})

//BUSCA TODOS LOS JUEGOS CON TITULO SIMILAR A EL INPUT DEL USER EN LA BUSQUEDA
router.get('/search/:input',(req,res,next)=>{
    if(!req.params.input)res.status(404).send('empty input')
    Product.findAll({where:{
        [Op.or]:
    [{name:{[Op.iLike]:`%${req.params.input}%`}},
    {description:{[Op.iLike]:`%${req.params.input}%`}}
    ]
    }})
    .then(productMatches=>{
        //console.log(productMatches)
        if(!productMatches)res.status(201).send('NO MATCHES')
        res.status(200).send(productMatches)})
        .catch(next)
})

//BUSCA TODOS LOS JUEGOS DE UN MISMO GENERO
router.get('/allGenres/:genre',(req,res,next)=>{
    
    Genre.findOne({where:
        {genre:req.params.genre}, include:{model:Product}})
        .then(resp=>{res.status(200).send(resp.dataValues.products)})
})

// Ruta para eliminar un producto.
router.delete('/:productID',(req,res,next)=>{
        Product.destroy({where:{id:req.params.productID}})
        .then(()=>res.sendStatus(204))
        .catch(next)
})

// Ruta para crear un producto.
router.post('/',(req,res,next)=>{
    const {name,price}=req.body
    if(!name || !price) res.status(404).send('COLUMNA NAME Y PRICE NO PUEDE ESTAR UNDEFINED')
    Product.create(req.body)
    .then(productCreated=>{
        res.status(204).send(productCreated)
    })
    .catch(next)
})


// Ruta para agregar o cambiar el genero, se tiene que pasar como parametro el id del genero | genreId:2 |
router.put('/:productID',(req,res,next)=>{
    if(!req.params.productID)res.status(404).send('PRODUCT ID EMPTY')
    Product.update(req.body,{where:{id:req.params.productID}})
    .then(data=>res.status(201).send(data))
    .catch(next)
})

module.exports=router