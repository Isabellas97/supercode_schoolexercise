// ! Übung 1.3

console.log("%c Level 1.3", "background-color: blue");

let date = new Date();
let date1 = new Date(2222, 5, 20, 15, 42, 38);
let date2 = new Date(2123, 1, 24, 15, 42, 38);

date2.setMonth(2);
let date3 = date2.toString();

date2.setDate(3);
let date4 = date2.toString();

let date5 = new Date();
date5.setDate(date.getDate() + 30);
date5 = date5.toString();

document.body.innerHTML = `
<p>${date1}</p>
<p>${date2}</p>
<p>${date3}</p>
<p>${date4}</p>
<p>${date5}</p>
 `;
