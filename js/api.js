class Weather {
    constructor(){
        this.key = 'c5b39169ccf47b68ab65fb6a6d69371c';
    }

    async getForecast(location){
        const weatherForecast = await fetch(`https://api.darksky.net/forecast/${this.key}/${location}?units=si`, {
            mode: 'no-cors',
            headers: {
              'Access-Control-Allow-Origin':'https://api.darksky.net/'
            }
        }); // returns a promise

        const forecastResponse = await weatherForecast.json(); // returns a promise

        return {
            data: forecastResponse // returns a promise
        }
    }
}