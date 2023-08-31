let city = document.querySelector("#city");
let querry = document.querySelector("#searchArea");
let temp_c = document.querySelector("#temp-c");
let country = document.querySelector("#country")
let conditionIcon = document.querySelector("#imgCont")
let conditionNature = document.querySelector("#conditionNature")
let feelLike = document.querySelector("#feelLike")
let uv = document.querySelector("#uv")
let windSpeed = document.querySelector("#windSpeed")
let humidity = document.querySelector("#humidity")
let last_update = document.querySelector("#last_update")

console.log(country)
console.log(conditionIcon)
console.log(conditionNature)
console.log(feelLike)
console.log(uv)
console.log(windSpeed)
console.log(humidity)
console.log(last_update)

let urlData = [];

querry.addEventListener("keydown", (event) => {
    if (!querry.value && event.key == "Enter") {
        alert("Enter the location first");
    }
    if (querry.value && event.key == "Enter") {
        search(event.target.value);
        
    }
})

let search = (data) => {

    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${data}`;
    console.log(url)
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '008493e6a2mshac211d36cfa6defp164cc6jsnca9f6c0c458c',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
  


    const api = async () => {
        const response = await fetch(url, options);
        const result = await response.json();
        // temp_c.innerHTML = result.current.temp_c
        displayData(result)
        urlData.push(result);
        console.log(result)
        console.log(urlData)
        return result;
    }
    // api()
    console.log("api called")

    console.log("this is serach function  " + data)
}

let displayData = (data)=>{
    city.innerHTML = data.location.name;
    country.innerHTML = data.location.country;
    conditionIcon.src = data.current.condition.icon;
    console.log(conditionIcon.src)
    conditionNature.innerHTML = data.current.condition.text;
    temp_c.innerHTML = data.current.temp_c;
    feelLike.innerHTML = data.current.feelslike_c;
    uv.innerHTML = data.current.uv;
    windSpeed.innerHTML = data.current.wind_kph;
    humidity.innerHTML = data.current.humidity;
    last_update.innerHTML = data.current.last_updated;
}




