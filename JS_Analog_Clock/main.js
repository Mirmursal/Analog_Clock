let hourHand = document.getElementById('hourHand');
let minuteHand = document.getElementById('minuteHand');
let secondHand = document.getElementById('secondHand');

let digital = document.getElementById('digital');

function initClock(){
let date = new Date();

let hour = date.getHours() % 12;
let minute = date.getMinutes();
let second = date.getSeconds();

digital.innerText = hour +" : "+ minute+" : "+second;

let hourDeg = (hour * 30) + (0.5 * minute);//her saat 30 derece 30/60
let minuteDeg = (minute * 6) + (0.1 * second);//360/60//her deqiqe 6 derece//6/60
let secondDeg = second * 6;//360/60

hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
minuteHand.style.transform = 'rotate(' + minuteDeg + 'deg)';
secondHand.style.transform = 'rotate(' + secondDeg + 'deg)';
    setTimeout(initClock,1000);
}
initClock();