//? use the date object to do the following activities

// todo what is the year today

let yearToday = new Date().getFullYear();
console.log(yearToday);

// todo what is the month today

let monthToday = new Date().getMonth();
console.log(monthToday);

// todo what is the date today

let dateToday = new Date().getDate();
console.log(dateToday);

//todo what is the day today
let dayToday = new Date().getDay();
console.log(dayToday);

// todo What is the hours now
let hoursNow = new Date().getHours();
console.log(hoursNow);

// todo what is the minutes now?
let minutesNow = new Date().getMinutes();
console.log(minutesNow);

// todo find out the numbers of seconds elapsed from January 1 1970 to now

let past = new Date(1970 - 01 - 01);
let now = new Date();
let elapsed = now - past;
console.log(Math.floor(elapsed / 1000));
