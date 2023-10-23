// - Lev1_3_js-einführung_innerhtml

// Nun erstellen wir uns mit der Methode .innerHTML drei <figure> tags für unsere Galerie.

// - querySelector()
// Damit können wir alles ansprechn: ids ("#"), Klassen (".") oder einfach Elemente ("h2"), und img

// variable erstellen und id in query selector einbinden
const galleryContainer = document.querySelector("#gallery");

// variable.innerHTML = Content den wir bestimmen und einfügen wollen;
galleryContainer.innerHTML = `
<figure><img src='https://picsum.photos/id/1/300/300' alt='pic1'>Fig 1</figure>
<figure><img src='https://picsum.photos/id/1/300/300' alt='pic1'>Fig 2</figure>
<figure><img src='https://picsum.photos/id/1/300/300' alt='pic1'>Fig 3</figure>
`;

// mit variable.style.display einen flex geben
galleryContainer.style.display = "flex";
