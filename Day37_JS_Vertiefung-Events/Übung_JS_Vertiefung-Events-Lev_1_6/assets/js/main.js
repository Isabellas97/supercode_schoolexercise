// Der Eventhandler change wird bei einer erfolgten Änderung ausgelöst. Diese Wertänderung wird im Normalfall in einem Formularelement stattfinden.

// Schreibe eine Funktion, die im Paragraph den Text anpasst, nachdem du ein Element aus der Liste ausgewählt hast.

// Nutze: event.target.value, addEventListener("change", (event) => {...} ) und innerHTML oder textContent.

const selectInput = document.querySelector("#select");
const output = document.querySelector(".output");

selectInput.addEventListener("change", () => {
  output.innerHTML = selectInput.value;
});
