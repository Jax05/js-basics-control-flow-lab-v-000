// Write your code in this file!
function scuberGreetingForFeet(feet) {
  let message;
  if (feet > 2500) {
    message = "No can do."
  } else if (feet > 2000) {
    message = "I will gladly take your thirty bucks."
  } else if (feet <= 400) {
    message = "This one is on me!"
  }
  return message
}

function ternaryCheckCity(city) {
  let message = city === "NYC" ? "Ok, sounds good." : "No go.";
  return message
}
