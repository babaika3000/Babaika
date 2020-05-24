let IsShow = false;
let left = -100;
let interval;

function buttonAlert() {
  // console.log("zzzzzzz");
  // const circle = document.getElementById('circleRed');
  // console.log("circle", circleRed);
  // IsShow = !IsShow;
  // if (IsShow){
  //     circle.classList.add("show");
  // } else {
  //      circle.classList.remove("show");
  // }
  interval = setInterval(() => {
    document.getElementById("circleRed").style.left = left + 2 + "px";
    left += 2;
  }, 20);
}
function stopIt() {
  clearInterval(interval);
}

const button = document.getElementById("console");
console.log(button);

button.addEventListener("click", buttonAlert);

var myVar;

function alertHello() {
  alert("Hello");
}

function myFunction() {
  myVar = setTimeout(alertHello, 3000);
}

function myStopFunction() {
  clearTimeout(myVar);
}
