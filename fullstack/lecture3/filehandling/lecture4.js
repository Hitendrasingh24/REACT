// let ar=[{
//     movie:'golmaal',
//     imdb:9
// },{
//     movie:'animal',
//     imdb:8
// },{
//     movie:'golmaal 2 ',
//     imdb:9
// }]
// JSON.stringify(ar)
// console.log(ar)
// JSON.parse(ar)
// console.log(ar)
 
const fs = require('fs');
let ar = [{"movie": 'golmaal', "imdb": 9}, {"movie": 'animal', "imdb": 8}, {"movie": 'golmaal 2', "imdb": 9}];

fs.writeFile(
    'movie.json',
    JSON.stringify(ar), // Convert the array to a JSON string
    {
        encoding: "utf-8", 
        flag: 'w',
    },
    (err) => {
        if (err) console.log(err);
        else console.log("success");
    }
);
