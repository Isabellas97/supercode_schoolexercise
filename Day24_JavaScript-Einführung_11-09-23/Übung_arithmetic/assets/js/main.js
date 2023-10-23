//  Deklariere die Variablen x = 20 und y = 30. Für diese Variablen sollst du nun arithmetische Operatoren verwenden.
let x = 20;
let y = 30;
let z = 10;

console.log(x + y);

console.log(x - y);

console.log(x * y);

console.log(x / y);

//  Deklariere eine weitere Variable z mit dem Wert 10. Multipliziere x und y. Teile dann das Ergebnis durch z.

console.log(x * y);

console.log(600 / z);

//  ein Versuch - Übung ----

let addScore = x * y;
console.log(addScore);

console.log(addScore / z);

//  Speichere das Ergebnis in einer neuen Variablen namens resultOne.

let resultOne = 60;

// Zeige den Rest an, wenn a durch b geteilt wird. Nutze Remainder(%), auch Modulus Operator genannt.

let a = 15;
let b = 9;

console.log(15 % 9); //6

// Deklariere eine weitere Variable c mit dem Wert 20. Addiere a und b und multipliziere das Ergebnis mit c. Speichere das Ergebnis in der Variable resultTwo. Gib resultTwo in der Konsole aus.

let c = 20;
console.log(a + b);

console.log(24 * c);

let resultTwo = 480;
console.log(resultTwo);

// Inkrementiere a. Gib das Ergebnis in der Konsole aus.

console.log({ a });
a++;
a++;
console.log({ a });

// Dekrementiere b. Gib das Ergebnis in der Konsole aus.

console.log({ b });
b--;
b--;
console.log({ a });

// Subtrahiere b von a und speichere das Ergebnis in einer neuen Variablen resultThree.

console.log(a - b);

let resultThree = 10;

// Gib den Rest aus wenn resultOne durch resultTwo geteilt wird in der Konsole aus. Nutze den Remainder(%) bzw. Modulu-Operator.

console.log(resultTwo % resultOne); // 0
// console.log(480 % 60);

// - ÜBUNG 2 UUND 3 -------------------

// Mit arithmetischen Operatoren kann man nicht nur einfache Rechnungen durchführen, sondern auch noch einen Schritt weitergehen.
// Schaue dir die Beispiele unter Hinweise an und versuche Folgendes umzusetzen:
// Inkrementierung und Dekrementierungen können wie folgt verwendet werden:

let zahl = 1;
console.log("zahl", zahl);
console.log(zahl);

zahl = zahl + 1;
zahl += 1;
zahl++;
console.log("increment: " + zahl);
zahl--;
console.log("dekrement: " + zahl);

//

// Multiplikation geht vor und so wird 5 * 10 zuerst durchgeführt:
let score = 5 + 5 * 10;
console.log("Ergebnis: " + score);

// Du kannst Klammern() hinzufügen, um die Reihenfolge der Prioritäten zu ändern:
let score2 = (5 + 5) * 10;
console.log("Ergebnis: " + score2);

// Du kannst Werte auf Variablen addieren:
let score3 = 0;
score3 = score3 + 10;
console.log("Ergebnis: " + score3);

// Hiervon gibt es eine verkürzte Version:
score3 += 10;
console.log("Ergebnis: " + score3);

// - Übung - Intro Leven 1_12

// Addition
let addition_operator = 1 + 1;
console.log("addition: " + addition_operator);
// Subtraktion
let subtraktion_operator = 2 - 1;
console.log("subtraktion: " + subtraktion_operator);
// Multiplikation
let multiplication_operator = 2 * 2;
console.log("multiplication: " + multiplication_operator);
// Division
let division_operator = 4 / 2;
console.log("division: " + division_operator);
// Modul: zeigt an, was der Rest sein würde.
let modulus_operator = 14 % 5;
console.log("modulus: " + modulus_operator);
