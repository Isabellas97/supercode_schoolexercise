// ! Übung 1
// Wir benötigen eine Abfrage, um zu überprüfen, ob der Benutzer volljährig ist. Deklariere die Funktion adult().

// Erstelle eine HTML-Datei mit einem Formular zur Eingabe des Alters und einem Button für die Überprüfung.

// Im Funktionskörper:
// Wenn das eingegebene Alter größer oder gleich 18 ist, gib true zurück.
// Ist das eingegebene Alter kleiner als 18, gib false zurück.
// Lass Dir das Ergebnis der Funktion im HTML in “Volljährig” oder “Minderjährig” ausgeben.

// function adult() {
//   let age = document.querySelector("#age").value;
//   let output = document.querySelector("#output");

//   if (age >= 18) {
//     console.log(true);
//     output.innerHTML = "Volljährig";
//     output.style.color = "green";
//   } else {
//     output.innerHTML = "Minderjährig";
//     output.style.color = "red";
//     console.log(false);
//   }
// }

// ---- Ternary Operator -------

function adult() {
  let age = document.querySelector("#age").value;
  let output = document.querySelector("#output");

  age >= 18
    ? ((output.innerHTML = "Volljährig"),
      (output.style.color = "green"),
      console.log(true))
    : ((output.innerHTML = "Minderjährig"),
      (output.style.color = "red"),
      console.log(false));
}

// ! Übung 1.4

function saftyPass() {
  let password = document.querySelector("#password").value;

  const passState = document.getElementById("passState");

  password.length >= 8
    ? (passState.innerHTML = "Passwort ist sicher")
    : (passState.innerHTML = "Passwort ist nicht sicher");
}

// function saftyPass() {
//   let password = document.querySelector("#password").value;

//   const passState = document.getElementById("passState");

//   if (password.length >= 8) {
//     console.log(true);
//     passState.innerHTML = "sicher";
//     passState.style.color = "green";
//   } else {
//     passState.innerHTML = "nicht sicher";
//     passState.style.color = "red";
//     console.log(false);
//   }
// }

// ! Übung 2.5

function check() {
  let bundesland = document.querySelector("#bundeslandInfo").value;
  const outputText = document.getElementById("bundeslandInfoErgebnis");

  switch (bundesland.toLowerCase()) {
    case "baden-württemberg":
      outputText.innerHTML =
        "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
      break;
    case "bayern":
      outputText.innerHTML =
        "Bayern hat 10,880 Mio Einwohner und München ist die Hauptstadt";
      break;
    case "berlin":
      outputText.innerHTML =
        "Berlin hat 10,880 Mio Einwohner und Berlin ist die Hauptstadt";
      break;
    case "brandenburg":
      outputText.innerHTML =
        "Brandenburg hat 10,880 Mio Einwohner und Potsdam ist die Hauptstadt";
      break;
    case "bremen":
      outputText.innerHTML =
        "Bremen hat 10,880 Mio Einwohner und Bremen ist die Hauptstadt";
      break;
    case "hamburg":
      outputText.innerHTML =
        "Hamburg hat 10,880 Mio Einwohner und Hamburg ist die Hauptstadt";
      break;
    case "hessen":
      outputText.innerHTML =
        "Hessen hat 10,880 Mio Einwohner und Wiesbaden ist die Hauptstadt";
      break;
    case "mecklenburg-vorpommern":
      outputText.innerHTML =
        "Mecklenburg-Vorpommern hat 10,880 Mio Einwohner und Schwerin ist die Hauptstadt";
      break;
    case "niedersachsen":
      outputText.innerHTML =
        "Niedersachsen hat 10,880 Mio Einwohner und Hannover  ist die Hauptstadt";
      break;
    case "nordrhein-Westfalen":
      outputText.innerHTML =
        "Nordrhein-westfalen hat 10,880 Mio Einwohner und Düsseldorf ist die Hauptstadt";
      break;
    case "rheinland-pfalz":
      outputText.innerHTML =
        "Rheinland-Pfalz hat 10,880 Mio Einwohner und Mainz ist die Hauptstadt";
      break;
    case "saarland":
      outputText.innerHTML =
        "Saarland hat 10,880 Mio Einwohner und Saarbrücken ist die Hauptstadt";
      break;
    case "sachsen":
      outputText.innerHTML =
        "Sachsen hat 10,880 Mio Einwohner und Dresden ist die Hauptstadt";
      break;
    case "sachsen-Anhalt":
      outputText.innerHTML =
        "Sachsen-Anhalt hat 10,880 Mio Einwohner und Magdeburg ist die Hauptstadt";
      break;
    case "schleswig-holstein":
      outputText.innerHTML =
        "Schleswig-Holstein hat 10,880 Mio Einwohner und Kiel ist die Hauptstadt";
      break;
    case "thüringen":
      outputText.innerHTML =
        "Thüringen hat 10,880 Mio Einwohner und Erfurt ist die Hauptstadt";
      break;
    default:
      outputText.innerHTML =
        "Ein solches Bundesland gibt es in Deutschland nicht.";
      break;
  }
}
