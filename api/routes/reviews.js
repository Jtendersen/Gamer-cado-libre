const express= require('express')
const router = express.Router()
const { Review }= require('../models')

router.get('/', (req, res, next)=>{
    Review.findAll()
    .then(reviews=>res.status(200).send(reviews))
    .catch(next)
})

router.post('/',(req,res,next)=>{
    Review.create(req.body)
    .then(()=>res.sendStatus(204))
    .catch(next)
})

router.delete('/:id',(req,res,next)=>{
    Review.destroy({where:{id:req.params.id}})
    .then((data)=>{
        if(!data)res.sendStatus(404)
        res.sendStatus(204)})
})

module.exports = router