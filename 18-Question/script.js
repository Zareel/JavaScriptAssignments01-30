//? Write a program which tells the numner of days in a month. Now consider leap year

function getDaysOfMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
console.log(getDaysOfMonth(2, 2024));
