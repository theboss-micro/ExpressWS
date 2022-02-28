const express = require ('express')
const app = express()
 

const date = new Date();

const closed = function (req, res, next) {
    if (
      date.getDay() > 1 &&
      date.getDay() < 6 &&
      date.getHours() > 9 &&
      date.getHours() < 17
    ) {
      next();
    } else {
      next("Working hours : Monday to Friday,  from 9 to 17");
    }
  };
  app.use(closed);

  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/homePage.html");
  });
  
  app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/public/contactUs.html");
  });
  
  app.get("/services", (req, res) => {
    res.sendFile(__dirname + "/public/services.html");
  });
  
  const port = process.env.PORT || 7000;
  app.listen(port, (err) => {
    err ? console.log(err) : console.log(`the server is running on ${port}`);
  });
  