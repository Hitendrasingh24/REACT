const a = document.getElementById("a");
const  b = document.getElementById("b");
const c =document.getElementById("c");
const d = document.getElementById("d");
const e = document.getElementById("e");

b.addEventListener("click",async ()=>{
    const val = a.value;
    const data = await fun(val);
    console.log(data)
    c.innerHTML =`${data.name}, ${data.sys.country}`;
    d.innerHTML =`${data.weather[0].description}`;
    e.innerHTML =`${data.main.temp}`;
})

async function fun(val){
    const apiKey = '5d028b4b16d61ffc0ba302e75c8dd34c'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${val}&units=metric&appid=${apiKey}`;
    const data =  await fetch(apiUrl);
    return await data.json();
}