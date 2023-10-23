//! Erstelle mit document.getElementById(“info”).innerHTML eine h1 mit dem Text “Hello World”.

// - getElementById()
// Damit sprechen wir Elemente über die ID an
// id aus dem HTML: info
const info = document.getElementById("info");

info.innerHTML = "<h1>Hello World</h1>";

// Anzeige in der Console mit diesem Befehl
console.log(info.innerHTML);

// --------------------

//! Füge noch eine h2 hinzu mit dem Text “How are you?”.
info.innerHTML += "<h2>How are you?</h2>";

// Sieh’ dir das Ergebnis über den Live Server an.
console.log(info.innerHTML);

//! Nutze document.getElementById('container').innerHTML, um einen <p>-Tag mit dem Text “start of the element” zu kreieren

const container = document.getElementById("container");

container.innerHTML = "start of the element";

//! Schreibe nun document.write("end of the element")

document.write("end of the element");
// document.write wird automatisch immer ganz unten ans ende gesetzt
