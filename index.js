// Write your code in this file!
function scuberGreetingForFeet(rideDistance){
  let message
  if (rideDistance <= 400) {
    message = "This one is on me!";
  } else if (rideDistance >= 2000 && rideDistance <= 2500) {
    message = "I will gladly take your thirty bucks.";
  } else if (rideDistance >= 2500) {
    message = "No can do.";
  } else {
  }
  return message
}

function ternaryCheckCity(city){
  return city === "NYC"? "Ok, sounds good.":"No go.";
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
  }
}
