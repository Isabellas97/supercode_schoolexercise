// Schreibe eine Funktion, die einen Klickzähler hochzählt, wenn du auf einen Button klickst.

// Nutze getElementById(), Anzahl = 0; (es ist wichtig, hier zu initiieren!), Anzahl += 1; und innerHTML.

const clickMe = document.querySelector("#clickMe");
let count = 0;

clickMe.addEventListener("click", () => {
  count++;
  clickMe.innerHTML = "Click me: " + count;
});
