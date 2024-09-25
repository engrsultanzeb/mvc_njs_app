
const express  = require('express')
const app      = express()
const mongoose = require('mongoose');
var cors = require('cors')
const port     = 5000;
const studentRoute = require("./routes/studentRoute");
app.use(express.json());
//Student Route
app.use("/api", studentRoute);
app.get('/',(req,res)=>{
  fetch('http://localhost:5000/api/student') 
  .then(response => response.json())
  .then(data => console.log(data))
  .catch((err) => {
    console.log(err);
 });
    res.send("MVC Application is in progess ");
})
const MONGO_CONNECTION = ""

mongoose.connect(MONGO_CONNECTION).then(() => {
    app.listen(port, () => {
        console.log(`Server is up and runing on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
  

