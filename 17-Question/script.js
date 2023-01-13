//? Write a program which tells the numner of days in a month

/* 
30 - September, April, June, November
31 - January, March, May, July, August, October
28 - February
*/

let month = "April";

if (month == "February") {
  console.log("28 Days");
} else if (
  month == "September" ||
  month == "April" ||
  month == "June" ||
  month == "November"
) {
  console.log("30 Days");
} else {
  console.log("31 Days");
}
