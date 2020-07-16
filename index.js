/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

<<<<<<< HEAD
function greet(time) {
  //The parseInt() function parses a string and returns an integer. 
   let hour = parseInt(time, 10);
=======
function greet(hour) {
  //let hour = Date.getHours() 
   const hour = parseInt(timeStr, 10);
>>>>>>> b138f3ce25497d5f8f7ffc7a14233a769b30341e
  if ( hour < 12) 
  {
    return "Good Morning";
    
  }
  else if ( hour > 17) {
    
<<<<<<< HEAD
    return "Good Evening"
}
else {
  return "Good Afternoon"
}
=======
    return "Good Evening"}
    else {
  return "Good Afternoon"}
>>>>>>> b138f3ce25497d5f8f7ffc7a14233a769b30341e
}
/* Write your implementation of displayMessage() */

function displayMessage(msg){
  document.getElementById("greeting").innerText = msg;
}