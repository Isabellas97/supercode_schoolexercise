// ! Level 1.1

// Im ersten Schritt sollst du dir zwei Variablen erstellen: firstName und lastName.

let firstName = "Isabella";
let lastName = "Simon";

// Lasse dir nun die Länge der beiden Variablen in der Konsole anzeigen. Nutze dafür .length.

console.log(firstName.length);
console.log(lastName.length);

// Erstelle noch eine Variable fullName, die die Summe der beiden Variablen ist.

let fullName = firstName + lastName;

// Im Anschluss sollst du dir die Länge der Variable fullName in der Konsole anzeigen lassen.

console.log(fullName.length);

//
// ! Level 1.2

const txt =
  "How inappropriate to call this planet Earth, when clearly it is Ocean.";

// Verwende den Befehl indexOf(), um die Position eines Zeichens in einer Zeichenkette als Ergebnis in der Konsole zu erhalten.

console.log(txt.indexOf("H"));
console.log(txt.indexOf("p"));
console.log(txt.indexOf("c"));

// Suche im Anschluss die Position des Zeichens "Earth" in der Variablen txt.

console.log(txt.indexOf("Earth"));

// Und zuletzt sollst du die Position des Zeichens "Moon" in der Variablen txt suchen.

console.log(txt.indexOf("Moon"));
// - in der Console word -1 ausgegeben = wort ist nicht vorhanden.

//
// ! Level 1.3

let txt2 =
  "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

// Um die Position eines Zeichens in einer Zeichenkette als Ergebnis in der Konsole zu erhalten, kannst du den Befehl search() verwenden.

console.log(txt2.search(";"));
console.log(txt2.search("green"));

console.log(txt2.search("blue"));
// - in der Console word -1 ausgegeben = wort ist nicht vorhanden.

//
// ! Level 1.4

const A = "Susi is going to codingschool";

// wende slice() an, um in deinem HTML Folgendes angezeigt zu bekommen:
// Susi
// is
// is going to school
// school
// Susi is school

// Speichere jedes Ergebnis in einer Variablen und verwende document.write(myVar+" "), um das Ergebnis im Dokument auszugeben. myVar ist hier nur ein Beispiel und kann durch den Namen deiner Variablen ersetzt werden.

let A1 = A.slice(0, 4);
let A2 = A.slice(5, 7);
let A3 = A.slice(5, 16);
let A4 = A.slice(23);

document.write(A1 + "<br/>");
document.write(A2 + "<br/>");
document.write(A3 + " " + A4 + "<br/>");
document.write(A4 + "<br/>");
document.write(A1 + " " + A2 + " " + A4 + "<br/>");

//
// ! Level 1.7

const text = "Sam is good at school";

document.write("<br />" + text);

// zeige mit der Methode "replace" folgende Ausgabe in einem HTML-Dokument an:
// Sam is bad at school
// Susi is good at school
// Sam is good at tennis

let replace1 = text.replace("good", "bad");
let replace2 = text.replace("Sam", "Susi");
let replace3 = text.replace("school", "tennis");

// Speichere jedes Ergebnis in einer Variablen und verwende document.write(myVar + "<br>"), um das Ergebnis anzuzeigen. myVar ist hier nur ein Beispiel und kann durch den Namen deiner Variablen ersetzt werden.

document.write("<br />" + replace1);
document.write("<br />" + replace2);
document.write("<br />" + replace3 + "<br />");

//
// ! Level 1.8

// Verwende den Befehl toUpperCase(), um aus der Variable const text2 die veränderte Zeichenkette zu erhalten: SAM IS GOING TO SCHOOL.

const text2 = "Sam is going to school";
let sam = text2.slice(0, 4);
let isGoingTo = text2.slice(4, 16);
let school = text2.slice(16, 22);

// Neben toUpperCase() gibt es auch noch den Befehl toLowerCase(). Schaue, was passiert, wenn du dies auf die Variable text anwendest.
// Erzeuge mit den beiden Befehlen folgende Zeichenketten und gib sie in deinem HTML aus:
// SAM is going to SCHOOL
// sam IS GOING TO school
// Sam Is Going To School

document.write(
  "</br>",
  text2.toUpperCase(),
  "</br>",
  text2.toLowerCase(),
  "</br>",
  sam.toUpperCase(),
  isGoingTo,
  " ",
  school.toUpperCase(),
  "</br>",
  sam,
  isGoingTo.toUpperCase(),
  school
);

let firstLet1 = text2.slice(0, 1);
let firstLet2 = text2.slice(4, 5);
let firstLet3 = text2.slice(7, 8);
let firstLet4 = text2.slice(13, 14);
let firstLet5 = text2.slice(16, 17);

console.log(text2.length);

document.write(
  "</br>" +
    firstLet1.toUpperCase() +
    "am " +
    firstLet2.toUpperCase() +
    "s " +
    firstLet3.toUpperCase() +
    "oing " +
    firstLet4.toUpperCase() +
    "o " +
    firstLet5.toUpperCase() +
    "chool" +
    "</br>"
);
document.write("</br>");

//
// ! Level 1.9

const tex1 = "Sam is going to school";
const tex2 = "Susi";
const tex3 = "and";

// Erzeuge nun mit concat() folgende Ausgaben in deinem HTML-Dokument. Nutze alle Methoden, die du bereits gelernt hast:

// console.log(dönerString.concat(` ${moreText}`));

// Sam is going to school and to the movie theater
let newtex1 = tex1.concat(`${""} ${"and to the movie theater"}`);
document.write(newtex1);
document.write("</br>");

// Susi and Sam are going to school
let newtex2 = tex2.concat(`${""} ${tex3} ${""} ${tex1.replace("is", "are")}`);
document.write(newtex2);

document.write("</br>");

// Susi and Sam are going to gym and to the movie theater
document.write(
  newtex2.replace("school", "gym").concat(`${""} ${"and to the movie theater"}`)
);

document.write("</br>");

// Susi is going to school and to the movie theater
document.write(newtex1.replace("Sam", "Susi"));

document.write("</br>");

// Sam is going to the movie theater
document.write(tex1.slice(0, 15).concat(`${""} ${"the movie theater"}`));

//
// ! Übung 2.3

// Erstelle eine Funktion, die ein bestimmtes Wort, überall wo es vorkommt, in einem Artikel hervorhebt.
// Nutze dafür den vorgebenen Code.

function showWords() {
  const article = document.querySelector("article");
  const articleText = article.innerText;

  const searchWord = document.getElementById("search-input").value;

  const highlightWord = `<span class="highlight">${searchWord}</span>`;

  article.innerHTML = articleText.replaceAll(searchWord, highlightWord);
}
