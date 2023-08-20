// option-1 directly set on the HTML element
//option-2
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}

//option-3
const blueButton = document.getElementById("make-blue");
blueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

//option-4
const purpleButton = document.getElementById("make-purple");
purpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};
