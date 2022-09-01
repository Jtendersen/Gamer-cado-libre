const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/db");
const Product = require("./Products");

class Review extends Model {}

Review.init(
  {
    review: {
      type: DataTypes.TEXT,
    },
    rating: {
      type: DataTypes.FLOAT,
      validate: {
        min: 0,
        max: 10,
      },
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "review",
  }
);

//SACA EL PROMEDIO DE TODOS LOS RATING REVIEW DE EL PRODUCTO EN EL QUE SE AGREGO LA REVIEW.
Review.addHook('afterCreate',(review)=>{
  Review.findAll({where:{productId:review.productId},
    attributes:['productId','rating'],
    include:{model:Product,
      attributes:['id','valoration']}})
  .then(allReviews=>{
    var avgRating=0
    allReviews.forEach((userReview,i)=>{
      if(userReview.rating)avgRating+=userReview.rating
      if(!allReviews[i+1])avgRating/=i+1
    })
    Product.update({valoration:avgRating},{where:{id:allReviews[0].product.id}})
  })
})

module.exports = Review;
