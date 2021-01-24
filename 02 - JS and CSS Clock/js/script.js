function showClock() {
  // declare les variables date 
  let date        = new Date(),
    currentHour   = date.getHours(),
    currentMinute = date.getMinutes(),
    currentSecond = date.getSeconds(),

    // les variables à afficher dans l'horloge
    handSecond    = currentSecond * (360 / 60), // 
    handMinute    = currentMinute * (360 / 60) + (handSecond / 60), // 
    handHour      = currentHour * (360 / 12) + (handMinute / 12); // 


  // cibler les éléments de dom et appliquer un style de transform 
  document.querySelector(".hour-hand").style.transform = `rotate(${90 + handHour}deg)`;
  document.querySelector(".min-hand").style.transform = `rotate(${90 + handMinute}deg)`;
  document.querySelector(".second-hand").style.transform = `rotate(${90 + handSecond}deg)`;


  // vérifier l'heure et la minute et les seconds si inférieur à 10 → ajout zéro avant
  if (currentHour < 10) {
    currentHour   = '0' + currentHour;
  }
  if (currentSecond < 10) {
    currentSecond = '0' + currentSecond;
  }
  if (currentMinute < 10) {
    currentMinute = '0' + currentMinute;
  }

  // afficher l'heure en digitale
  document.querySelector(".horloge").textContent = `${currentHour} : ${currentMinute} : ${currentSecond}`;
}


setInterval(showClock, 1000);
