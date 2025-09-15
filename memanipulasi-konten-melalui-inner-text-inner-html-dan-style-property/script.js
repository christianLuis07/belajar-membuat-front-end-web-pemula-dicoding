// perbedaan innerHTML dan innerText, silahkan cek console untuk melihat perbedaannya
const links = document.getElementById("links");
console.log(links.innerHTML);
console.log(links.innerText);

// manipulasi konten dengan innerText
const dicoding = document.getElementById("dicodingLink");
dicoding.innerText = "Belajar Programming di Dicoding";

const google = document.getElementById("googleLink");
google.innerText = "Mencari Sesuatu di Google";

// manipulasi konten dengan innerHTML
dicoding.innerHTML = "<i>Belajar <b>Programming</b> di Dicoding</i>";
google.innerHTML = "<i>Mencari sesuatu di <b>Google</b></i>";

// manipulasi style konten dengan style.property
const buttons = document.getElementsByClassName("button");

for (const button of buttons) {
  button.children[0].style.borderRadius = "6px";
  button.children[0].style.borderColor = "red";
}
