// const fs =require("fs")
// const path = require('path')

// let moviedir = path.join(__dirname,'movie.txt')

// fs.readFile(
// moviedir,{
//     encoding:"utf-8",
// },
// ((err,data)=>{
//     if (err) return console.log(err);
//     else console.log(data);
// })
// )
const fs = require("fs");
const path =require("path");

let moviedir = path.join(__dirname,'movie.txt')

fs.readFile(moviedir,{
    encoding:"utf-8",
},((err,data)=>{
    if(err) console.log(err);
    else console.log(data)
})
)