// - Function Level 1.2 -

//! Deklariere die Funktion intro2() mit dem Parameter (paramName).
// function intro2(paramName);

// !Deklariere die Variable name mit dem Wert “SuperCoder:in”.

// let name = "SuperCoder:in";

// !Gib dazu folgendes in der Konsole aus: Hi SuperCoder:in. Mein Name ist xyz.
// console.log("Hi " + name + " Mein Name ist " + paramName);

function intro2(paramName) {
  //paraName = Parameter
  let name = "Supercoder:in";
  console.log("Hi " + name + " Mein Name ist " + paramName);
}

// argumente
intro2("Isa");
intro2("Oskar");
intro2("Oskarbella");

// in der console wird erst etwas angezeigt wenn man der Paramenter der Funktion "Argumente" gibt

// Die Parameter sind die Aliase für die Werte, die an die Funktion übergeben werden. Die Argumente sind die tatsächlichen Werte.

// - Function Level 1.3 -

//! Deklariere die Funktion intro3() mit den drei Parametern (name, stadt, alter).

// !Gib unter Verwendung der entsprechenden Argumente folgenden Satz in der Konsole aus: "Hallo, mein Name ist SuperCoder. Ich bin 27 Jahre alt. Ich komme aus Düsseldorf."

function intro3(name, stadt, alter) {
  //mit den Parameter deklariert
  console.log(
    "Hallo, mein Name ist " +
      name + //Parameter
      ". Ich bin " +
      alter + //Parameter
      " Jahre alt. Ich komme aus " +
      stadt + //Parameter
      "."
  );
}

// Argumente
intro3("Isa", "RLP", 26);
intro3("Oskar", "Kirchen", 2);

//

// - Function Level 1.4 -

// ! Deklariere die Funktion hero() mit drei Parametern heroName, heroPower und heroEnemy. Im Funktionskörper {} sollst du dann Folgendes machen

// ! Deklariere drei Variablen name, power und enemy.

function hero(heroName, heroPower, heroEnemy) {
  let name = "Mein:e Lieblingsheld:in ist: " + heroName + ".";
  let power = "Er/sie hat die Fähigkeit: " + heroPower + ".";
  let enemy = "Sein/ihr größte/r Gegner:in ist: " + heroEnemy + ".";
  console.log(name + power + enemy);
}

// ! Übergib Argumente für deine:n Lieblingsheld:in und gib diese in der Konsole aus.

hero("Oskar", "Pupsen", "Treppenstufen");

// - Function Level 1.5 -

// ! Deklariere die Funktion math() mit zwei Parametern. Im Funktionskörper{} passiert Folgendes:

// ! Gib in der Konsole die Multiplikation von den beiden Parametern aus.

function math(num1, num2) {
  let product = num1 * num2;
  let quotient = num1 / num2;
  console.log("Multiplikation von " + num1 + " und " + num2 + ": " + product);
  console.log("Division von " + num1 + " und " + num2 + ": " + quotient);
}

// Ruf die Funktion mit den Argumenten (10, 2) auf.
// Teste auch andere Werte: 30, 20 // 100, 100 // 5, 0 // 45, 173 // 1, 1000.
math(10, 2);
math(30, 20);
math(100, 100);
math(5, 0);
math(45, 173);
math(1, 1000);
