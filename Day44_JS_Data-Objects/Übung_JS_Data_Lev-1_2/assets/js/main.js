// ! Übung 1.2

// - Du siehst hier das aktuelle Datum des Screenshots! Dein Ergebnis orientiert sich an dem aktuellen Datum.

//Github Code:
let monate = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

let wochenTag = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

let day_output = document.getElementById("day");
let hour_output = document.getElementById("hours");
let minutes_output = document.getElementById("minutes");
let seconds_output = document.getElementById("seconds");
let period_output = document.getElementById("period");

let date = new Date();
let year = date.getFullYear();
let month_index = date.getMonth();
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let weekday_index = date.getDay();
let weekday = date.toLocaleDateString("default", { weekday: "short" });
let month = date.toLocaleDateString("default", { month: "long" }); // Oktober

let weekdaysShort = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];

let weekdaytimer = "";
for (let i = 0; i < weekdaysShort.length; i++) {
  if (i === weekday_index) {
    weekdaytimer = weekdaysShort[i];
    // console.log(weekdaytimer);
  }
}

day_output.innerHTML = weekdaytimer;
hour_output.innerHTML = hour % 12 || 12;
minutes_output.innerHTML = minute;
seconds_output.innerHTML = second;
period_output.innerHTML = hour >= 12 ? "PM" : "AM";
