// Events Listeners 
// let tempUI = document.querySelectorAll('.now-temp');
// for (let index = 0; index < tempUI.length; index++) {
//     const tempElement = tempUI[index].innerText;
//     [tempNow, ...tempForecast] = tempElement;
    
//     console.log(tempNow);
// }

// Let's INIT
const weather = new Weather;

// Temp variables
const tempLoc = "31.9279988,34.8623473"


// HTTP Call
weather.getForecast(tempLoc).then((data) => {
    console.log(data);
    
})