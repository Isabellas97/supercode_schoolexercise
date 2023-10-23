console.log("hello bitches"); //Test erfolgreich

let outputVal = 0;
const output = document.querySelector(".output");

function plus1() {
  outputVal++;
  output.innerHTML = outputVal;
}

function minus1() {
  outputVal--;
  output.innerHTML = outputVal;
}

function plus10() {
  outputVal = outputVal + 10;
  output.innerHTML = outputVal;
}

function minus10() {
  outputVal = outputVal - 10;
  output.innerHTML = outputVal;
}

function plus100() {
  outputVal = outputVal + 100;
  output.innerHTML = outputVal;
}

function minus100() {
  outputVal = outputVal - 100;
  output.innerHTML = outputVal;
}

function multi2() {
  outputVal = outputVal * 2;
  output.innerHTML = outputVal;
}

// geht nicht mit dem namen reset mit reset1 funktioniert es???
function reset1() {
  outputVal = 0;
  output.innerHTML = outputVal;
}
