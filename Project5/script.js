var myClock = setInterval(timer, 1000);

function timer() {
    var date = new Date();
    document.getElementById('clock').innerHTML = "The time is: " + date.toLocaleTimeString();
}