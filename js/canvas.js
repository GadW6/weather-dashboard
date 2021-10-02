// let weatherCanvasSize = document.getElementById('weather-canvas');
// weatherCanvasSize.style.height = `${weatherCanvasSize.parentElement.offsetHeight - 100}px`;
// weatherCanvasSize.style.height = "500px";
// weatherCanvasSize.style.padding = "20px";
// weatherCanvasSize.style.marginTop = "80px";

let weatherCanvas = document.getElementById('weather-canvas').getContext('2d');

let chart = new Chart(weatherCanvas, {
    // The type of chart we want to create
    type: 'line',
    responsive: true,

    // The data for our dataset
    data: {
        labels: ['Today', 'Tomorrow', '15/08', '16/08', '17/08'],
        datasets: [{
            label: 'Daily Temperature',
            borderColor: 'red',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgb(255, 99, 132)',
            data: [23, 15, 17, 20, 25]
        },{
            label: 'Daily Temperature [min]',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 139, 0.3)',
            data: [5, 3, 7, 10, 12]
        },{
            label: 'Daily Temperature [max]',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(139, 0, 0, 0.4)',
            data: [25, 18, 18, 21, 27]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false
        },
        title: {
            display: false,
            text: 'Temperature 5 days forecast overview'
          }, scales: {
            yAxes: [{ 
              scaleLabel: {
                display: true,
                labelString: "Temperature",
                fontColor: 'rgba(255, 99, 132, 0.8)'
              }
            }],
            xAxes: [{ 
              scaleLabel: {
                display: true,
                labelString: "Days of the Month",
                fontColor: 'rgba(255, 99, 132, 0.8)'
              }
            }]
        }
    }
});