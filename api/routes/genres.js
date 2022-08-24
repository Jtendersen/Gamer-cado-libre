const express= require('express')
const router = express.Router()
const {Product,User,Genre}= require('../models')

router.get('/',(req,res)=>{
    Genre.findAll()
    .then(genres=>res.status(200).send(genres))
})
router.put('/:actualGenre',(req,res)=>{
    Genre.update(req.body,{where:{genre:req.params.actualGenre}})
    .then(()=>res.sendStatus(201))
})
router.post('/',(req,res)=>{
    Genre.create(req.body)
    .then(()=>res.sendStatus(204))
})


module.exports=router