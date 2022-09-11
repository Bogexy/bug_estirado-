var seconds = 0;
var minutes = 0;
var hours = 0;
var days = 0;

var secondsR = 60;
var minutesR = 60;
var hoursR = 24;
var daysR = 5;

const getRemainingTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));
  
    return {
      remainSeconds,
      remainMinutes,
      remainHours,
      remainDays,
      remainTime
    }
  };
  
  const countdown = (deadline,elem,finalMessage) => {
    const el = document.getElementById(elem);
  
    const timerUpdate = setInterval( () => {
      let t = getRemainingTime(deadline);
      el.innerHTML = `${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;
  
      if(t.remainTime <= 1) {
        clearInterval(timerUpdate);
        el.innerHTML = finalMessage;
      }
  
    }, 1000)
  };
  
  countdown('Dec 31 2025 21:34:40 GMT-0500', 'clock', '¡El Futuro es hoy !¡¿me oiste viejo?!');



  /*let timerInterval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
        seconds=0;
        minutes++;
    }
    if (minutes === 60){
        minutes=0;
        hours++;
    }
    if (hours === 24) {
        hours=0;
        days++;
    }
    let contadorAcendente = `${days}d:${hours}h:${minutes}m:${seconds}s`;
    
    console.log(contadorAcendente);
  }, 1000);*/
 


  let timerIntervalReverse = setInterval(() => {
    secondsR=secondsR-1;
    if (secondsR === 0) {
        secondsR=60;
        minutesR=minutesR-1;
    }
    if (minutesR === 0){
        minutes=60;
        hoursR=hoursR-1;
    }
    if (hoursR === 0) {
        hoursR=24;
        daysR=daysR-1;
    }
      
  }, 1000);


 
 
 
  
  
 
   
    
  

 



