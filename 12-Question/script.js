//? Create a human readable time format using Date time object

//* yyyy-mm-dd hh:mm

let timeFormat01 = () => {
  let d = new Date();
  let date = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();

  if (date < 10) {
    date = "0" + date;
  }

  if (month < 10) {
    month = "" + month;
  }

  let hours = d.getHours();
  let minute = d.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minute < 10) {
    minute = "0" + minute;
  }

  formatedTimeDate =
    [year, month + 1, date].join("-") + " " + [hours, minute].join(":");
  console.log(formatedTimeDate);
};

timeFormat01();

//*  dd-mm-yyyy hh:mm

let timeFormat02 = () => {
  let d = new Date();
  let date = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();

  if (date < 10) {
    date = "0" + date;
  }

  if (month < 10) {
    month = "" + month;
  }

  let hours = d.getHours();
  let minutes = d.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let formatedTimeDate02 =
    [date, month + 1, year].join("-") + " " + [hours, minutes].join(":");
  console.log(formatedTimeDate02);
};
timeFormat02();

//* dd/mm/yyyy hh:mm

let timeFormat03 = () => {
  let d = new Date();
  let date = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();

  if (date < 10) {
    date = "0" + date;
  }

  if (month < 10) {
    month = "" + month;
  }

  let hours = d.getHours();
  let minutes = d.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let formattedTimeDate03 =
    [date, month + 1, year].join("/") + " " + [hours, minutes].join(":");
  console.log(formattedTimeDate03);
};

timeFormat03();
