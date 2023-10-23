// Eine h1 mit “Hello World!”
// Einen p mit “Have a nice day!”
// Deklariere die Variable myText und fülle sie mit “Hello again”.
//  Schreibe die Variable anschließend in dein Dokument.
// Deklariere Variablen: vorname, nachname und fülle sie mit deinem Namen.
// Schreibe sie anschließend in dein Dokument.

let myText = "Hello again";
document.write(myText);

document.write("<br>");
document.write("<hr>");

let firstName = "Isabella";
let lastName = "Simon";

document.write("My name is " + firstName + " " + lastName + ".");
document.write("<hr>");

// oder:

document.write("<h1>Hello World</h1><p>Have a nice day!!</p>");

let myTexts = "Hello again";
document.write(myTexts + "</br>");

let vorName = "yan";
let nachName = "keita";

document.write("vor: " + vorName + "</br>", "nach: " + nachName);
