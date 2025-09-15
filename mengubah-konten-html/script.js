// mengubah attribute
const gambar = document.getElementById("gambar");

gambar.setAttribute("width", "400");
gambar.setAttribute("height", "300");

// mengubah konten
const playButton = document.querySelectorAll(".button")[3];
console.log(playButton);
const playButtonElement = playButton.children[0];
playButtonElement.setAttribute("disabled", true);
console.log(playButtonElement);

// deklarasi seperti ini serupa karena javascript menerapkan auto type conversion
// gambar.setAttribute("width", "300");
// gambar.setAttribute("width", 300);
