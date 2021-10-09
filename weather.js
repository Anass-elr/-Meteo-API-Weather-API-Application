   
   class Weather {

        constructor(){
            this.key = 'b37d7dab0275ac0a6c2e0288470f8898';
        }

        async get(city){

            const reponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.key}`);

            const wether = await reponse.json();

            return wether ;
        }

    }