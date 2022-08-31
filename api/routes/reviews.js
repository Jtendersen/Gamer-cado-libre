const express= require('express')
const router = express.Router()
const { Review }= require('../models')

//Traer todas las reviews
router.get('/:id', (req, res, next)=>{
    Review.findAll({where:{productId:req.params.id}})
    .then(reviews=>res.status(200).send(reviews))
    .catch(next)
})

router.post('/',(req,res,next)=>{
    //console.log(req.body)
    Review.create(req.body)
    .then(()=>res.sendStatus(204))
    .catch(err=>{console.log(err)})
})

router.delete('/:id',(req,res,next)=>{
    Review.destroy({where:{id:req.params.id}})
    .then((data)=>{
        if(!data)res.sendStatus(404)
        res.sendStatus(204)})
})

module.exports = router