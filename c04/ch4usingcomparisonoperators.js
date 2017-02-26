//using comparison operators 

var pass = 50; //pass mark 
var score = 90; //score

//check if the user has passed
var hasPassed = score>= pass;

//write into page

var el = document.getElementById('answer');
el.textContent = 'level passed: ' + hasPassed;