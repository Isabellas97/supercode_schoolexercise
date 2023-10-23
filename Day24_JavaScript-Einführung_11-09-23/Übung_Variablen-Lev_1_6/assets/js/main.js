let x = 34;
console.log("x", x);

const y = 34;
console.log("y", y);

// wir haben hier keine let da wir die Variable schon in Zeile 28 erstellt haben
x = 67;
console.log({ x });

// Ich erhale eine Fehlermeldung, da cih eine Constante Variable überschreibe.
y = 67;
console.log({ y });
