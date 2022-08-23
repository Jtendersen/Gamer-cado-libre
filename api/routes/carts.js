const express = require("express");
const Cart = require("../models/Carts");

const router = express.Router();

// router.get("/", (req,res)=>{
//     console.log("GET resp")
//     res.sendStatus(200)
// })

router.post("/add/:userId", (req, res) => {
  //ver de levantar el usuario por req.cookies
  /*
    {
        quantity: cant,
        productId: pId,
    }

    */
  console.log(req.body);
  Cart.create(req.body).then((resp) => {
    Cart.setUserId(req.params.userId);
    console.log("resp", resp);
    res.status(201).send(resp);
  });
});

//
module.exports = router;
