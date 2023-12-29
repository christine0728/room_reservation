const _ = require("lodash");
const express = require("express");
const session = require("express-session");
const app = express(); //create express app
const flash = require('express-flash');
app.use(flash());
//routing

const port = 4000;
app.use(express.static("public")); //root directory of statics
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));


app.use( session({
  secret: "aaBBcc",
  resave:false,
  saveUninitialized:true
}));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// load the ROute handlers
app.use("/", require("./routes/mainRoutes.js"));
// app.use("/products")
