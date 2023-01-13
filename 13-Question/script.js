//? Get user input using prompt ("enter your age:"). If user is 18 or older, give feedback:"you are old enough to drive".
//? but if not 18 give another feedback stating to wait for the number of years he needs to turn 18

const prompt = require("prompt-sync")({ sigint: true });

let age = prompt("Enter your age:");

if (age == 18) {
  console.log("you are old enough to drive");
} else {
  console.log(`Wait for ${18 - age} more years to turn 18 years old`);
}
