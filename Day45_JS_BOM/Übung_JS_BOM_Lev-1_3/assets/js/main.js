// Hole dir die Informationen über den Browser wie folgt:
// - Browsername
// - Betriebssystem-Architektur
// - Browser-Version
// - Window Auflösung
// - Innenhöhe und -breite des Dokuments
// - colorDepth
// - pixelDepth

function displayBrowserInfo() {
  // Browsername
  var browserName = window.navigator.userAgent;

  // Betriebssystem-Architektur
  var osArchitecture = window.navigator.platform;

  // Browser-Version
  var browserVersion = window.navigator.appVersion;

  // Window-Auflösung
  var windowResolution = window.screen.width + "x" + window.screen.height;

  // Innenhöhe und Innenbreite des Dokuments
  var documentInnerHeight = document.documentElement.clientHeight;
  var documentInnerWidth = document.documentElement.clientWidth;

  // ColorDepth
  var colorDepth = window.screen.colorDepth;

  // PixelDepth
  var pixelDepth = window.screen.pixelDepth;

  const button = document.querySelector("#browserinfo");
  const output = document.querySelector("#output");

  // Display the information in HTML elements

  button.addEventListener("click", () => {
    output.innerHTML = `Browsername:  ${browserName} Betriebssystem-Architektur: ${osArchitecture} Browser-Version: ${browserVersion} Window-Auflösung: 
  ${windowResolution} Innenhöhe und Innenbreite des Dokuments: ${documentInnerHeight} x ${documentInnerWidth} ColorDepth: ${colorDepth} PixelDepth: 
      p${pixelDepth}`;
  });
}

// browserinfo.addEventListener("click", () => {
//   button.innerHTML = `Browsername ${browserName}`;
// });
