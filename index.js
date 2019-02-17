// Write your code in this file!

// Use `if` and `else if` statements to return correct greeting based distance travelled
function scuberGreetingForFeet(distanceTravelled) {
  let result
  if (distanceTravelled <= 400) {
    result = 'This one is on me!';
  } else if (distanceTravelled > 2000 && distanceTravelled < 2499) {
    result = 'I will gladly take your thirty bucks.';
  } else {
    result = 'No can do.';
  }
  return result
}

//Use ternary operator ( condition ? Expression1 : expression2 )to return correct response based on the desired destination
function ternaryCheckCity(passengerDestination) {
  return passengerDestination === "NYC" ? "Ok, sounds good." : "No go.";
}


// Use a `switch` statement to return different response based on tip amount
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
        return 'Thank you so much.';
        break;
    case 'not as generous':
        return 'Thank you.';
        break;
    default:
        return 'Bye.';
        break;
  }
}
