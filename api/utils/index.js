// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
require("dotenv").config();

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = (
  to,
  userName,
  orderNumber,
  productsArray,
  receiverName,
  totalOrderPrice
) => {
  const msg = {
    to: to,
    from: "jtendersen@gmail.com", //no cambiar
    templateId: "d-0bc7fe4f295d4dc4abceb6d433a2958a",
    dynamic_template_data: {
      User_Name: userName,
      Order_Number: orderNumber,
      Product_Details: productsArray,
      Receiver_Name: receiverName,
      Precio_Total: totalOrderPrice,
    },
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = sendEmail;
