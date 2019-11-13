$(document).ready(function () {
    $('#content').hide().fadeIn(3000);
// Create variables for the welcome message
var greeting = '[not initialized]';
var name = '[not initialized]';
var message = '[not initialized]';
// Concatenate the three variables above to create the welcome message
var welcome = greeting + name + message;

function calculateSign() {
  // Create variables to hold details about the sign
  var sign = '[not initialized]';
  var tiles = sign.length;
  var subTotal = tiles * 5;
  var shipping = 7;
  var grandTotal = subTotal + shipping;
}

function initiateVars() {
  greeting = 'Howdy ';
  name = 'Joseph ';
  message = 'Hows it going.';
}

function setTextContentById(getId, setText) {
    // Get the element that has an id of greeting
    var el = document.getElementById('greeting');
    // Replace the content of that element with the personalized welcome message
    el.textContent = setMsg;
}

function setPage() {
  // Get the element that has an id of userSign then update its contents
  var elSign = document.getElementById('userSign');
  elSign.textContent = sign;

  // Get the element that has an id of tiles then update its contents
  var elTiles = document.getElementById('tiles');
  elTiles.textContent = tiles;

  // Get the element that has an id of subTotal then update its contents
  var elSubTotal = document.getElementById('subTotal');
  elSubTotal.textContent = '$' + subTotal;

  // Get the element that has an id of shipping then update its contents
  var elShipping = document.getElementById('shipping');
  elShipping.textContent = '$' + shipping;

  // Get the element that has an id of grandTotal then update its contents
  var elGrandTotal = document.getElementById('grandTotal');
  elGrandTotal.textContent = '$' + grandTotal;
}

function reset1() {
    welcome = ' ';
    sign = ' ';
    calculateSign();
    setPage();
}

setPage();
setTextContentById('greeting', welcome);
setTextContentById(userSign, sign);
initiateVars();
calculateSign();
})