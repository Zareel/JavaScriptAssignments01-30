//? check if the season is Autumn, Winter, Spring or Summer. If the user input is:
/*
-September, October, November, the season is Autumn
-December, January, February, the season is Winter
-March, April, May, the season is Spring
-June, July or August, the season is Summer
*/

const prompt = require("prompt-sync")({ sigint: true });

let month = prompt("Enter the month: ");

if (month == "September" || month == "October" || month == "November") {
  console.log("This is Autumn season");
} else if (month == "December" || month == "January" || month == "February") {
  console.log("This is Winter season");
} else if (month == "March" || month == "April" || month == "May") {
  console.log("This is Spring season");
} else {
  console.log("This is Summer season");
}
