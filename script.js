let millisecons = document.querySelector(".miliseconds");
let seconds = document.querySelector(".seconds");
let minutes = document.querySelector(".minutes");
let btn = document.querySelectorAll(".btn");
let startmilli = 0;
let sec = 0;
let min = 0;
let timeinterval;
btn.forEach((Each) => {
  Each.addEventListener("click", (e) => {
    let clickedbtn = e.currentTarget.classList;
    //  start button
    if (clickedbtn.contains("start")) {
      timeinterval = setInterval(onstart, 16.67);
    }
    // reset button
    if (clickedbtn.contains("reset")) {
      reset();
    }
    // stop button
    if (clickedbtn.contains("stop")) {
      stop();
    }
  });
  // startfunction
  function onstart() {
    startmilli++;
    // if millisecond = 60 count seconds as 1
    if (startmilli == 60) {
      startmilli = 0;
      sec++;
      // if seconds = 60 count minutes as 1
      if (sec == 60) {
        sec = 0;
        min++;
        // if minutes = 60 start from 0
        if (min == 60) {
          min = 0;
        }
      }
    }
    millisecons.textContent = twodigit(startmilli);
    seconds.textContent = twodigit(sec);
    minutes.textContent = twodigit(min);
  }
  // reset button
  function reset() {
    clearInterval(timeinterval);
    startmilli = 0;
    sec = 0;
    min = 0;
    millisecons.textContent = twodigit(startmilli);
    seconds.textContent = twodigit(sec);
    minutes.textContent = twodigit(min);
  }
  // stop function
  function stop() {
    clearInterval(timeinterval);
  }
  // 00:00:00 function
  function twodigit(value) {
    return value < 10 ? "0" + value : value;
  }
});
