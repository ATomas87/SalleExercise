const link = "https://api.openweathermap.org/data/2.5/weather?lat=41.3828939&lon=2.1774322&appid=01d9e7b4d713c38aec39e45459f44833&units=metric";

 let weather = {
    temp: "",
    feels_like: "",
    temp_min: "",
    temp_max: "",
    pressure: "",
    humidity: ""
 };


async function getMyData(link) {
  let response = await fetch(link);
  let data = await response.json();
  return data;
}

// var jsonPerson = '{"first_name":"billy", "age":23}';
// var personObject = JSON.parse(jsonPerson); //parse json
// console.log(personObject.age);

async function showResult(callback) {
  let result = await getMyData(link);  
  return result;
}

let caca = showResult(getMyData).then( result => {
     
    weather.temp = result.main.temp;
    weather.feels_like = result.main.feels_like;
    weather.temp_min= result.main.temp_min;
    weather.temp_max= result.main.temp_max;
    weather.pressure= result.main.pressure;
    weather.humidity= result.main.humidity;
   
 
})

console.log(caca);

