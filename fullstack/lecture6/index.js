// var figlet = require("figlet");

// figlet("Hello World!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });
const express = require("express")
const app = express();
const PORT = 5000;
// console.log(app)
const path = require("path")
app.use(express.static(path.join(__dirname,'public')))
const filePath = path.join(__dirname,'./public/index.html')


app.use("/",(req,res)=>{
  // console.log("use is used for middlewares , like json and cors and routers")
  // res.send("server started ")
  res.sendFile(filePath)
  // next()
})

app.get("/path/:name/:class",(req,res)=>{
  console.log(req.params)
})

// app.get("/",(req,res)=>{
//   res.send("hi")
// })








app.listen(PORT , ()=>{
  console.log(`server started on ${PORT}`)
})