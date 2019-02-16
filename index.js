// Write your code in this file!

function scuberGreetingForFeet(someValue) {
  //this is where we can use conditionals given our argument, someValue
  //don't forget to return whatever the result is!
  let result;
    if (someValue <= 400) {
     result = "This one is on me!";
   }
       else if (someValue > 2500){
         result = "No can do."
       }
          else if (someValue >= 2000){
            result = "I will gladly take your thirty bucks.";
          }
 return result
}


function ternaryCheckCity(city) {

let destination;

city === "NYC" ? (destination = 'Ok, sounds good.') : (destination = 'No go.');

return destination
}



function switchOnCharmFromTip(tip) {

let speech;

  switch (tip) {
      case "generous":
          speech = "Thank you so much.";
          break;
      case "not as generous":
          speech = "Thank you.";
          break;
      default:
          speech = "Bye.";
          break;
        }
return speech
}
