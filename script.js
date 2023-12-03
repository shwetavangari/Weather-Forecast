async function updated(){
    var city=document.querySelector(".city");
    var apiURL="https://api.openweathermap.org/data/2.5/weather?q="+city.value+"&appid=891bf2da78cd88e562334b7478c2ad5c";
    console.log(apiURL);
    var raw=await fetch(apiURL);
    var data=await raw.json();
    console.log(data)
    if(data){
        if(data.message=="city not found"){
            alert(data.message);
        }
        else{
            document.querySelector(".location").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=(data.main.temp-273.15).toFixed(2)+"°C";
            document.querySelector(".upd").innerHTML=data.weather[0].description;
            document.querySelector(".pressure").innerHTML=data.main.pressure+"M/B";
            document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
            document.querySelector(".wind").innerHTML=data.wind.speed+"M/S";

            var today=new Date();
            var dd=today.getDate();
            var mm=today.getMonth() +1;
            var yyyy=today.getFullYear();
            document.querySelector(".date").innerHTML=`${dd}-${mm}-${yyyy}`;
            console.log(`${yyyy}/${mm}/${dd}`);

        }
        
    }
}