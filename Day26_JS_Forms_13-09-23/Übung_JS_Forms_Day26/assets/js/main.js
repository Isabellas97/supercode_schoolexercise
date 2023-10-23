// ! Aufgabe 1_1

console.log("hello bitches"); //Test erfolgreich

// Erstelle ein Formular, in dem du eine Zahl eingeben kannst. Daneben steht ein Button, der eine Funktion ausführt und zwar "Verdoppel mich". Du sollst also eine Funktion deklarieren, die den Wert aus deinem Input-Feld mit 2 multipliziert. Das Ergebnis wird schließlich in deinem HTML ausgegeben.

function multiTwo() {
  const eingabe = document.querySelector("#eingabe").value;
  const ergebnis = eingabe * 2;
  document.querySelector("#ergebnis").innerHTML = ergebnis;
}

// ! Aufgabe 1_2

// In dieser Aufgabe sollst du ein Formular zur Berechnung deines Alters erstellen.

// Erstelle dazu ein Formular, in dem du dein Geburtsjahr eingeben kannst, sowie einen Button, der die Funktion dann ausführt.

// Definiere eine Funktion, die dein Alter in Jahren ausgibt. Dein Alter soll dann in deinem HTML ausgegeben werden.

function countAge() {
  geburtsjahr = document.querySelector("#jahr").value;
  const alter = 2023 - geburtsjahr;
  document.querySelector("#age").innerHTML = alter;
}

// ! Aufgabe 1_3

// Erstelle eine Formular, um das Alter von zwei Leuten zu vergleichen.

// Nutze dafür zwei Input-Felder, einen Button, der die Funktion aufruft und eine Funktion, die die Differenz in Jahren in dein HTML schreibt.

function diffAge() {
  const alter1 = document.querySelector("#alter1").value;
  const alter2 = document.querySelector("#alter2").value;

  const differenz = Math.abs(alter1 - alter2);
  //   absolute zahl
  document.querySelector("#differenz").innerHTML = differenz;
}

// ! Aufgabe 1_4

// Erstelle ein Formular mit einem <input>-Feld und einem Button, mit dessen Hilfe du die Farbe des Hintergrundes ändern kannst.

function switchColor() {
  const useColor = document.querySelector("#bgColor").value;
  document.querySelector(".backgroundColor").style.backgroundColor = useColor;
}

// ! Aufgabe 2_1

function change() {
  let red = document.querySelector(".headline");
  red.classList.add("styling");
}

function reset2() {
  let red = document.querySelector(".headline");
  red.classList.remove("styling");
}
