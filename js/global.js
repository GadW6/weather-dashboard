// This section is for the Clock
let clock = document.getElementById("clock");
      
function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = days[today.getDay()];
    let tday = today.getDate();
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let month = months[today.getMonth()];
    // clock.innerHTML =
    // day + " , " + month + " " + tday + " / " + h + ":" + m;
    clock.innerHTML = `
    ${day}, ${month} ${tday} <span></span> ${h}:${m}
    `;

    let t = setTimeout(startTime, 60000);
};

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

// This section is for border in location box 
document.getElementById('location').addEventListener('click', () => {
    document.getElementById('location').style.borderColor = '#590059';
    document.getElementById('location').firstElementChild.style.color = '#590059';
})