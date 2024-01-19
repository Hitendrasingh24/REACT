// why node?
// node js was created because it provide local environment to run our javascript code.
console.log("inside the  lib1");
function sum(a,b){
    return a+b
}
function sub(a,b){
    return a-b;
}
module.exports={sum,sub}
// module.exports={
//     sum:sum,
//     sub:sub
// }