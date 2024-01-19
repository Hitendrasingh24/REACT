const mypro= new Promise((resolve,reject)=>{
  let flag= true;
  if(flag){
    setTimeout(()=>{
      console.log(2);
      resolve();
    }, 3000);
  }
  else{
    reject()
  }
  });
console.log(1)
mypro.then(()=>{
  console.log(3);
})
.catch(()=>{
  console.log("ye kya hua ")
})



// promise is an object , represents completion of an async operation and its resulting value.
// callback can also be used to perform a async task as sync task , when  a function is passed as an argument within a function then it is called a callback function .