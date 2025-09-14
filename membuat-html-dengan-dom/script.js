const newElement = document.createElement("h1");
newElement.innerText = "Selamat datang di website kami";

document.body.appendChild(newElement);
// menambahkan tag bold
const newElement2 = document.createElement("p");
newElement2.innerHTML = "<b>Selamat datang</b> di website kami";

document.body.appendChild(newElement2);

// menambahkan gambar
const newElement3 = document.createElement("img");
newElement3.setAttribute("src", "https://picsum.photos/200/300");
document.body.appendChild(newElement3);
