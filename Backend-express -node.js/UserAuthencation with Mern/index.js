const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
//import routes
const authRoutes = require("./routes/auth");
const { db } = require("./models/User");
//app
const app = express();
// db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  //👿📓-note-point: as apne passwords companies-emplyees ko bhi nhi bataya hota hai. and esski liyeh phle password-hashin hoke password-database meh store hoteh hai. 👿📓
  .then(() => console.log("DB Connected"));
//middlewares
app.use(bodyParser.json());
app.use(cors());
//routes middleware
app.use("/api", authRoutes);
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

// visit this for tut-refrence: https://medium.com/swlh/user-authentication-using-mern-stack-part-1-backend-cd4d193f15b1
