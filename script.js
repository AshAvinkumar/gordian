const days = document.getElementById("days");
const hourse = document.getElementById("hourse");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const year = document.getElementById("year");
const countdown = document.getElementById("countown");
let currentyear = new Date().getFullYear();
let nextyear = currentyear + 1;
year.innerHTML = nextyear;
let newyearTime = new Date(`january 01 ${nextyear} 00`)
console.log(newyearTime.getFullYear());

function updateCountDown() {
    let currentTime= new Date();
    let diff = newyearTime - currentTime;
    // console.log(diff);

    let d = Math.floor(diff / 1000 / 60 / 60 / 24);
    let h = Math.floor(diff / 1000 / 60 / 60) % 24;
    let m = Math.floor(diff / 1000 / 60) % 60;
    let s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d < 10 ? "0" + d : d;
    hourse.innerHTML = h < 10 ? "0" + h : h;
    minutes.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;
}



setInterval(updateCountDown, 1000);