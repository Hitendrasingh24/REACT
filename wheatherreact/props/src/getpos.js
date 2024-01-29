const  getpost =  async () =>{
    const data = await fetch("https://jsonplaceholder.typicode.com/posts"
    ,{
        method: "GET",
    })
    return  await data.json();
};
export default getpost;