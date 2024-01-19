// function compres(){
//     setTimeout(()=>{
//         console.log("compressing the video");
//         upload();
//     },3000)
// }
// function upload(){
//     setTimeout(()=>{
//         console.log("uploading the image");
//         taskcompleted();
//     },3000)
// }
// function taskcompleted(){
//     setTimeout(()=>{
//         console.log("task completed");
//     },3000)
// }


// compres();



function compres(uplo){
    setTimeout(()=>{
        console.log("compressing the video");
        uplo(taskcompleted);
    },3000)
}
function upload(taskcomplete){
    setTimeout(()=>{
        console.log("uploading the image");
        taskcomplete();
    },3000)
}
function taskcompleted(){
    setTimeout(()=>{
        console.log("task completed");
    },3000)

}


compres(upload);
