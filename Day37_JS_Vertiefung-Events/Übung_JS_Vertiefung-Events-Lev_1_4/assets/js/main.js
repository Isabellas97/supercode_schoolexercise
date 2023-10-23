// In dieser Übung sollst du den addEventListener() nutzen, um beim Anklicken des Paragraphens eine Nachricht in der Konsole auszugeben.

// Schreibe mit den Befehlen Click Here, addEventListener(), click, function, console.log("Du hast auf den Event-Paragraphen geklickt."); und getElementById() eine Funktion dazu.

const clickHere = document.querySelector("#clickHere");

clickHere.addEventListener("click", () => {
  console.log("Du hast auf den Event-Paragraphen geklickt.");
});
