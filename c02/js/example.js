// Create variables for the welcome message
var greeting = 'Howdy ';
var name = 'James';
var message = ', please check the fucking order:';
//Concatenate the three variables above to create the welcome message
var welcome = greeting + name + message;

//Create variables to hold details about the sign
var sign = "Dark House";
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

//Get the element that has an id of greeting
var el = document.getElementById('greeting');
//Replace the content of the element with the personalized welsome message
el.textContent = welcome;

//Get the element that has an id userSign then update its content
var elSign =document.getElementById('userSign');
elSign.textContent = sign; 

//Get the element that has an id of tiles then update its contents
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

//Get the element that has an id of subTotal then update its contents
var elsubTotal = document.getElementById('subTotal');
elsubTotal.textContent = '$' + subTotal; 

//Get the element that has an id of shipping then update its contents
var elshipping = document.getElementById('shipping');
elshipping.textContent = '$' + shipping;

//Get the element that has an id of grandTotal then update its contents
var elgrandTotal = document.getElementById('grandTotal');
elgrandTotal.textContent = '$' + grandTotal;
