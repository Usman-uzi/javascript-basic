"use strict";

function add() {
  var firstDigit = document.getElementById("firstNum").value;
  var secondDigit = document.getElementById("secondNum").value;
  var resultElement = document.getElementById("results");

  var result = parseInt(firstDigit) + parseInt(secondDigit);
  resultElement.innerText = "The sum is : " + result;
}

function sub(a, b) {
  var c = a - b;
  alert(this);
  return c;
}
