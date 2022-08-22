const express = require("express");
const User = require("../models/Users")

const router = express.Router();

router.get("/", (req,res)=>{
    console.log("GET USER")
    res.sendStatus(200)
})


router.post("/", (req,res)=>{
    console.log("BODY", req.body)
    User.create(req.body).then((user)=>{
        console.log("user", user)
        res.status(201).send(user)
    })
})


module.exports = router