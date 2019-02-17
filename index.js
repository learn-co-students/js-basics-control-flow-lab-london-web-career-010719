function scuberGreetingForFeet(someValue) {

  let result

  if (someValue < 200) {
    result = 'This one is on me!'
  }
  else if (someValue > 2000 && someValue <= 2500) {
    result = 'I will gladly take your thirty bucks.'
  }
  else if (someValue > 2500) {
    result = 'No can do.'
  }

  return result
}

function ternaryCheckCity(city) {

  let result

  city === 'NYC' ? result ='Ok, sounds good.' : result = 'No go.'

  return result
}

function switchOnCharmFromTip(tip) {

  let result

  switch (tip) {
    case 'generous':
      result = 'Thank you so much.'
      break;
    case 'not as generous':
      result = 'Thank you.'
      break;
    default:
      result = 'Bye.';
  }

  return result

}
