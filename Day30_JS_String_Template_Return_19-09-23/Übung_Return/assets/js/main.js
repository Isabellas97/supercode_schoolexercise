// In dieser Übung werden wir die Funktion mit der Variable vergleichen.
// Deklariere die Funktion returnOne(). Schreibe return in den Funtionskörper

function returnOne() {
  return 2;
}

// Deklariere die Variable x mit dem Wert 1, außerhalb des Funktionskörpers.

let x = 2;

// Deklariere die Variable y mit dem Wert returnOne(), außerhalb des Funktionskörpers.

let y = returnOne();

// Füge, außerhalb des Funktionskörpers, folgendes hinzu

if (x === y) {
  console.log("Wird das gedruckt?");
} else {
  console.log("Nein, es wird nicht gedruckt.");
}

// Wenn x gleich y ist, dann wird in der Konsole “Wird das gedruckt?” angezeigt. Wenn x ungleich y ist, dann wird es nicht angezeigt.

//- Das return Statment beendet eine Funktion und gibt ein Wert zurück
