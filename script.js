setInterval(setClock, 1000);
const hourHand = document.querySelector("[data-hour-hand]");
const minutesHand = document.querySelector("[data-minutes-hand]");
const secondesHand = document.querySelector("[data-secondes-hand]");

function setClock() {
  const currentDate = new Date();
  const secondRatio = currentDate.getSeconds() / 60;
  const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minuteRatio + currentDate.getHours()) / 12;
  setRotation(secondesHand, secondRatio);
  setRotation(minutesHand, minuteRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}
setClock();
