// Dieses Mal sollst du eine Funktion schreiben, die beim Anklicken des Buttons die jeweilige Farb-Option aus der Liste entfernt.

// Den HTML- und CSS-Code findest du im Code-Snippet.

// Nutze: addEventListener(), selectedIndex und remove().

const btnColor = document.querySelector("#button");
const getColor = document.querySelector("#farbeAuswahlen");

btnColor.addEventListener("click", () => {
  event.preventDefault();
  getColor.remove(getColor.selectedIndex);
});

// - Oder:
// const btnColor = document.querySelector("#button");
// const getColor = document.querySelector("#farbeAuswahlen");

// const removeColor = () => {
//   color.remove(color.selectedIndex);
// };

// btnRemove.addEventListener("click", removeColor);
