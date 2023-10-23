console.log("Warten für 3 Sekunden");

// ! setTimeout(Funktion, Millisekunden)
// fuehrt eine Funktion aus, nachdem eine angegebene Anzahl von Millisekunden gewartet wurde

// Funktion:
const konsolenAusgabe = () => {
  console.log("Erledigt, du hast 3 Sekunden verschwendet ");
};

setTimeout(konsolenAusgabe, 3000); // hier wird nach 3 Sek. etwas in die console geschrieben

// ! setInterval
// wir koenenn eine Funktion in einem bestimmten Intervall immer wieder ausfuehren lassen

const konsolenAusgabe2 = () => {
  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  console.log("- " + hours + ":" + minutes + ":" + seconds);
};

// setInterval(konsolenAusgabe2, 1000);
