// functions.js
function addTwoNumbers(num1, num2) {
  var result = num1 + num2;
  return result;
}

function sayHello(name) {
var newGreet;

  if(name === "Will")
  {
    newGreet = "No more testing Will!"
  }
  else {
    newGreet = `Hi there ${name}!`;
  }
return newGreet;

}

module.exports = {
    addTwoNumbers,
    sayHello,
    // buildCar
}
