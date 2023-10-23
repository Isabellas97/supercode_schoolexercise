console.log("hello bitches"); //Test erfolgreich

// ! Aufgabe 1_1

// Wenn das eingegebene Alter größer oder gleich 18 ist, gib true zurück.
// Ist das eingegebene Alter kleiner als 18, gib false zurück.
// Lass Dir das Ergebnis der Funktion im HTML in “Volljährig” oder “Minderjährig” ausgeben.

function adult() {
  const age = Number(document.querySelector("#age").value);
  const altersKlasse = document.querySelector("#altersKlasse");

  if (age >= 18) {
    // console.log("volljährig");
    altersKlasse.innerHTML = "Volljährig";
  } else {
    // console.log("minderjährig");
    altersKlasse.innerHTML = "Minderjährig";
  }
}

// ! Aufgabe 1_3

function shisha() {
  const age = Number(document.getElementById("age2").value);
  const erlaubnis = document.querySelector("#erlaubnis");

  if (age >= 18) {
    // console.log("volljährig");
    erlaubnis.innerHTML = "Du darfst Shisha rauchen";
  } else {
    // console.log("minderjährig");
    erlaubnis.innerHTML = "Du darfst noch nicht Shisha rauchen";
  }
}

// ! Aufgabe 2_2
function checkAirQuality() {
  const air = Number(document.querySelector("#airQuali").value);
  let text1 = document.querySelector(".outputText1");
  let text2 = document.querySelector(".outputText2");
  const background = document.querySelector("body");

  if (air <= 50) {
    text1.innerHTML = "Level of health concern: Good ";
    text2.innerHTML = "Level of health effect: Little or no risk";
    background.style.backgroundColor = "green";
  } else if (air > 50 && air <= 100) {
    text1.innerHTML = "Level of health concern: Moderate ";
    text2.innerHTML = "Level of health effect: Acceptable quality";
    background.style.backgroundColor = "yellow";
  } else {
    text1.innerHTML =
      "Level of health concern: Unhealthy for sensitive groups ";
    text2.innerHTML =
      "Level of health effect: Generable publics not likely affected";
    background.style.backgroundColor = "red";
  }
}

// ! Aufgabe 2_3

// Schreibe eine Funktion, um die Differenz zwischen einer bestimmten Zahl und 27 zu erhalten.
// Wenn die Zahl größer als 27 ist, multipliziere die Differenz mit 2.
// Lass dir das Ergebnis in der Konsole ausgeben.
// Teste die Nummern: 35, 74, 123.

function diff() {
  const input = Number(document.querySelector("#differenz").value);
  const zahl = 27;
  const diff = input - zahl;

  if (input > 27) {
    console.log(diff * 2);
  } else {
    console.log("es kommt eine negative Zahl raus");
  }
}
