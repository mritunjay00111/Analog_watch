const secondHand = document.querySelector(".sec");
const minuteHand = document.querySelector(".min");
const hourHand = document.querySelector(".hour");

function setDate() {
  const currDate = new Date();

  const currSec = currDate.getSeconds();
  const currMin = currDate.getMinutes(); 
  const currHour = currDate.getHours();
  
  const secHandDeg = currSec * 6 + 90;
  const minHandDeg = currMin * 6 + currSec*0.1 + 90;
  const hourHandDeg = (currHour%12) *30 + currMin*0.5 + 90;

  secondHand.style.transform = `rotate(${secHandDeg}deg)`;
  minuteHand.style.transform = `rotate(${minHandDeg}deg)`;
  hourHand.style.transform = `rotate(${hourHandDeg}deg)`;
}

setInterval(setDate, 1000);
setDate();
