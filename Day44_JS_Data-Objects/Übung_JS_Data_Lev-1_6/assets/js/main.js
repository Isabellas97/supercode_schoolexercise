//  ! Übung 1.6
console.log("%c Level 1.6", "background-color: blue");

function checkDate(datum) {
  let hour = datum.getHours();
  let result = hour >= 12 ? "PM" : "AM";
  console.log(result);
}

const datum1 = new Date(1999, 10, 5, 15); //PM
const datum2 = new Date();
const datum3 = new Date(2019, 12, 3, 12); //PM
const datum4 = new Date(2000, 1, 1, 11); //AM

checkDate(datum1);
checkDate(datum2);
checkDate(datum3);
checkDate(datum4);
