
    class UI {

    addData(data){

        document.getElementById('w-location').textContent = `${data.name}, ${data.sys.country}`;

        document.getElementById('w-desc').textContent = `${data.weather[0].description}`;

        const cil =data.main.temp,
              Fara = data.main.temp* 1.8 + 32;

        document.getElementById('w-string').textContent = `${cil} C (${Fara} F)`;


        document.getElementById('w-humidity').textContent = `Humidity : ${data.main.humidity}`;


        
        document.getElementById('w-humidity').textContent = `Humidity : ${data.main.humidity}%`;


        
        document.getElementById('w-dewpoint').textContent = `Temperature maximal : ${data.main.temp_max} C`;

        document.getElementById('w-feels-like').textContent = `Temperature general : ${data.main.feels_like} C`;

        document.getElementById('w-wind').textContent = `Vitesse: ${data.wind.speed}MPH`;


        }


    }