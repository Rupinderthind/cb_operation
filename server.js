var express = require("express");
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
var app = express();
app.use(bodyParser.json());

/*------------------Routing Started ------------------------*/
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,DELETE,POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static(__dirname + "/build"));

var smtpTransport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "Gmail",
  port: 587,
  secure: false,
  auth: {
    user: "rupinderpalsinghthind@gmail.com ",
    pass: "allry8baby@123"
  }
});

app.post("/sendemail", function(req, res) {
  var data = `<tr><td>Name:</td><td>${
    req.body.name
  }</td></tr><tr><td>Email:</td><td>${
    req.body.email
  }</td></tr><tr><td>Message:</td><td>${req.body.message}</td></tr>`;
  var table = "";

  var html = "<table>" + data + "</p>";
  var mailOptions = {
    subject: "Message from iamrupinder",
    html: html,
    to: "rupinderpalthind@gmail.com"
  };
  smtpTransport.sendMail(mailOptions, function(error, response) {
    if (error) {
      res.json({ message: "email not sent", status: false });
    } else {
      res.json({ message: "email sent", status: true });
    }
  });
});

app.get("/*", function(req, res) {
  res.sendFile("/build/index.html", { root: __dirname });
});

/*--------------------Routing Over----------------------------*/

app.listen(3030, function() {
  console.log("Express Started on Port 3030");
});
