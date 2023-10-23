// ! Objekte Level 1.2

console.log("%c Level 1.2", "color: red");

// Erstelle ein Objekt und speichere es in einer Variable namens person
// Deklariere die Eigenschaft alter mit dem Wert deines Alters
// Deklariere die Methode (Funktion) sagNameAlter im Objekt
// Nutze den Befehl alert() im Funktionskörper um name & alter anzuzeigen

const person = {
  name: "Isabella",
  age: 26,
  sagNameAlter: () => {
    alert(
      `Hallo mein Name ist ${person.name} und ich bin ${person.age} Jahre alt`
    );

    console.log(person.name, person.age);
  },
};
// Gib in der Konsole name und alter aus
// Rufe die Funktion sagNameAlter aus dem Objekt auf

person.sagNameAlter();

//

// ! Objekte Level 1.4
console.log("%c Level 1.4", "color: red");

// Github Code:

let unsereHaustiere = [
  {
    tiertyp: "Katze",

    names: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    names: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
];

// Greife auf die Werte "Nala" und "Droopy" in diesem Objekt zu
console.log(unsereHaustiere);

// Lasse dir einmal alle Hundenamen anzeigen

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);

console.log(unsereHaustiere[1].names);

// Nutze eine Methode, um die Hundenamen zu ändern
unsereHaustiere[1].names = ["Oskar", "Odin", "Sunny"];
console.log(unsereHaustiere);
console.log(unsereHaustiere[1].names);

//

// ! Objekte Level 1.5
console.log("%c Level 1.5", "color: red");

// Github Code:

let unserLager = {
  schreibtisch: {
    schublade: "Hefter",
  },
  schrank: {
    "Obere Schublade": {
      Ordner1: "Dokumente",
      Ordner2: "Geheimnisse",
    },
    "Untere Schublade": "Cola",
  },
};

// Greife auf die Eigenschaften dieses Objekts zu und gib folgende Werte in der Konsole aus:
// Geheimnisse
// Cola
// hefter

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);

// ! Objekte Level 1.7
console.log("%c Level 1.7", "color: red");

// Github Code:
let myMusic = [
  {
    artist: "The Beatles",
    title: "Abbey Road",
    release_year: 1969,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
  {
    artist: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_year: 1978,
    medium: ["CS", "CD", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_year: 1971,
    medium: ["CS", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_year: 1983,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
];

// Greife auf die Eigenschaften des Objekts zu und gib folgende Werte mit forEach() im HTML aus:
// Alle "artist"
// Alle "title"
// Alle "medium"

console.log(myMusic);

myMusic.forEach((album) => {
  document.body.innerHTML += `${album.artist} <br>`;
  document.body.innerHTML += `${album.title} <br>`;
  document.body.innerHTML += `${album.medium.join(", ")} <br>`;
  document.body.innerHTML += "<br>";
});
//

// ! Objekte Level 1.8
console.log("%c Level 1.8", "color: red");

// Github Code:
let studentData = [
  {
    name: "Alex",
    age: 23,
    coop: false,
    address: {
      street: "Don Valley Business Park",
      city: "Toronto",
      postalCode: "ONM3C3E5",
    },
    emails: ["alex69@gmail.com", "alex123@yahoo.com"],
  },
  {
    name: "Sandra",
    age: 22,
    coop: true,
    address: {
      street: "34 Lawrence Ave",
      city: "Toronto",
      postalCode: "ONM3C0E5",
    },
    emails: ["sandra@gmail.com", "sandra@yahoo.com"],
  },
];

// Greife mithilfe von forEach() oder map() auf Eigenschaften dieses Objekts zu.
// Schreibe eine Funktion für das Objekt, die in der Konsole folgendes ausgibt:
// name
// coop
// city
// emails

studentData.forEach((student) => {
  console.log(student);
  console.log(student.name);
  console.log(student.coop);
  console.log(student.address.city);
  console.log(student.emails);
});
