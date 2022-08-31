// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
require("dotenv").config();

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = (
  to,
  from,
  userName,
  orderNumber,
  productsArray,
  receiverName
) => {
  const msg = {
    to:
      // "jtendersen@hotmail.com",
      to,
    from: "jtendersen@gmail.com", //no cambiar
    templateId: "d-0bc7fe4f295d4dc4abceb6d433a2958a",
    dynamic_template_data: {
      User_Name:
        // "Juanchito",
        userName,
      Order_Number:
        // "99999565465462",
        orderNumber,
      Product_Details:
        // "<p>Producto1</p><p>Producto2</p><p>Producto3</p>",
        productsArray,
      Receiver_Name:
        // "El que este en tu casa",
        receiverName,
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
