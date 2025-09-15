// menambahkan elemen dengan appendChild
const newElement = document.createElement("li");
newElement.innerText = "Selamat Menikmati!";

const daftar = document.getElementById("daftar");
daftar.appendChild(newElement);

// menambahkan elemen dengan insertBefore
const elementAwal = document.createElement("li");
elementAwal.innerText = "Hidupkan kompor";

// daftar.insertBefore(elementAwal, daftar.children[1]);
const itemAwal = document.getElementById("awal");
daftar.insertBefore(elementAwal, itemAwal);
