
//mins and seconds

let min = document.querySelector('.min');
let sec = document.querySelector('.seconds');


//buttons start , stop and reset

const start = document.querySelector('.stopwatch-start');
const stop = document.querySelector('.stopwatch-stop');
const reset = document.querySelector('.stopwatch-reset');


// initalization of variables for second, minutes and pause
let secCount = 0;
let minCount = 0;
let int = null;


//starting the timer - sec count will be zero and clearInterval condition will be false in the start
start.addEventListener('click', startTimer = () => {
  isPaused = false;
  //console.log(int!==null);
  if(int!==null){
    clearInterval(int);
  }
  //console.log('Int Value in Start' + int);
  int = setInterval(displaySeconds, 1000);
  
})


//stopping the timer - passing the int in the clearInteval to stop the setInterval
stop.addEventListener('click', stopTime = () => {
  //console.log('Int Value in Pause' + int);
  clearInterval(int);
})


//reset the timer -  passing the int in the clearInteval to stop the setInterval and setting all variables to zero
reset.addEventListener('click', resetTimer = () => {
  //console.log('Int Value in Reset' + int);
  clearInterval(int);
  sec.innerHTML = '00';
  min.innerHTML = '00';
  secCount = 0;
  minCount = 0;
  
})




//function to display seconds
function displaySeconds() {
  
  
    if(secCount <= 9){
      sec.innerHTML = '0' + secCount++;
    }else{
      sec.innerHTML = secCount++;
    }
    
    //second ending - setting seconds to zero and increment mins to 1 as one min is completed and calling seconds and mins function
    if(secCount === 60){
      secCount = 0;
      minCount++;
      displaySeconds();
      displayMinutes();
    }
   
  
    
}


//function to display minutes
function displayMinutes() {
    
  if(minCount <= 9){
    min.innerHTML = '0' + minCount;
  }else{
    min.innerHTML = minCount;
  }

  if(minCount === 05){
    console.log('Time limit exceeded!')
    
  }

}