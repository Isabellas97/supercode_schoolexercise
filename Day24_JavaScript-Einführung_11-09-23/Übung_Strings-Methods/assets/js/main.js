// Nun beschäftigtst du dich mit string-Methoden. Dahinter stecken Methoden, um Zeichenketten - strings - zu analysieren und mit ihnen zu arbeiten.
// So kannst du beispielsweise die Länge eines strings herausfinden oder strings miteinander verbinden.

// Im ersten Schritt sollst du dir zwei Variablen erstellen: firstName und lastName.

let firstName = "Isa";
let lastName = "Nils";

// Lasse dir nun die Länge der beiden Variablen in der Konsole anzeigen. Nutze dafür .length.

console.log("firstName length is", firstName.length);
console.log("lastName length is", lastName.length);

// oder so:

console.log(
  "vorname länge: " + firstName.length,
  "nachname länge: " + lastName.length
);

// Erstelle noch eine Variable fullName, die die Summe der beiden Variablen ist.

let fullName = firstName.length + lastName.length;

// Im Anschluss sollst du dir die Länge der Variable fullName in der Konsole anzeigen lassen.

console.log("fullname länge: " + fullName);

// --------------- Level 1.2 ------------------------------

// Verwende den Befehl indexOf(), um die Position eines Zeichens in einer Zeichenkette als Ergebnis in der Konsole zu erhalten.

const txt =
  "How inappropriate to call this planet Earth, when clearly it is Ocean.";

let letterC = txt.indexOf("c");
console.log("Index von C: " + letterC); //21

// oder:
let letterIndexSmallH = txt.indexOf("h");
console.log({ letterIndexSmallH }); //27

// Suche im Anschluss die Position des Zeichens "Earth" in der Variablen txt.
let Earth = txt.indexOf("Earth");
console.log("Index vom Wort Erde: " + Earth);

// oder:

let earthIndex = txt.indexOf("Earth");
console.log("earth index is", earthIndex); // 38

// Und zuletzt sollst du die Position des Zeichens "Moon" in der Variablen txt suchen.
let Moon = txt.indexOf("Moon");
console.log("Index vom Wort Moon: " + Moon);

// oder:
let moonIndex = txt.indexOf("Moon");
console.log("moon index is", moonIndex);

// --------------- Level 1.3 ------------------------------

// Um die Position eines Zeichens in einer Zeichenkette als Ergebnis in der Konsole zu erhalten, kannst du den Befehl search() verwenden.

let txt2 =
  "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

// 1. Suche die Position des Zeichens ";" in der Variablen txt2.
// 2. Suche die Position des Zeichens "green" in der Variablen txt2.
// 3. Suche die Position des Zeichens "blue" in der Variablen txt2.

let Semikolo = txt2.search(";");
console.log("position vom semikolon: " + Semikolo);

let Green = txt2.search("green");
console.log("position vom green: " + Green);

let Blue = txt2.search("blue");
console.log("position vom blue: " + Blue);

// oder:
let positionSemikolon = txt2.search(";");
console.log({ positionSemikolon }); // 168

let positionGreen = txt2.search("green");
console.log({ positionGreen }); // 6

let positionBlue = txt2.search("blue");
console.log({ positionBlue }); // -1
