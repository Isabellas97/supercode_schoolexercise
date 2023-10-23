// Schreibe eine Funktion, die beim Anklicken des Buttons die ausgewählte Farboption auf den Hintergrund des <body> anwendet.

// Verwende den Code aus dem Code-Snippet.

// Verwende folgende Befehle für die Aufgabe: addEventListener(“click”), event.preventDefault(); und .value oder selectedIndex.

// Nutze Google, um zu lernen wie man Leerzeichen in Zeichenketten entfernt.

const btnColor = document.querySelector("#button");
const getColor = document.querySelector("#farbeAuswahlen");
const BG = document.querySelector("body");

btnColor.addEventListener("click", () => {
  event.preventDefault();
  const color = getColor.value.toLowerCase().split(" ").join("");
  BG.style.backgroundColor = color;
});
