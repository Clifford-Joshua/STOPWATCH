let seconds = document.querySelector(".seconds");
let minutes = document.querySelector(".minutes");
let hours = document.querySelector(".hours");
let btn = document.querySelectorAll(".btn");
let sec = 0;
let mins = 0;
let hrs = 0;
let timeinterval;
btn.forEach((Each) => {
  Each.addEventListener("click", (e) => {
    // values from dom
    const upDateText = (sec, mins, hr) => {
      seconds.textContent = twoDigit(sec);
      minutes.textContent = twoDigit(mins);
      hours.textContent = twoDigit(hr);
    };

    // start function
    function onstart() {
      sec++;
      // if seconds = 60 count minutes
      if (sec == 60) {
        sec = 0;
        mins++;
        // if minutes = 60 count hour
        if (sec == 60) {
          mins = 0;
          hrs++;
        }
      }

      upDateText(sec, mins, hrs);
    }
    // reset button
    function reset() {
      clearInterval(timeinterval);
      sec = 0;
      mins = 0;
      hrs = 0;
      upDateText(sec, mins, hrs);
    }
    // stop function
    function stop() {
      clearInterval(timeinterval);
    }
    // 00:00:00 function
    function twoDigit(value) {
      return value < 10 ? "0" + value : value;
    }

    let clickedBtn = e.currentTarget.classList;
    //  start button
    if (clickedBtn.contains("start")) {
      timeinterval = setInterval(onstart, 1000);
    }
    // reset button
    if (clickedBtn.contains("reset")) {
      reset();
    }
    // stop button
    if (clickedBtn.contains("stop")) {
      stop();
    }
  });
});
