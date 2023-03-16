// soal 1

class Hewan {
    constructor (hewan,jenis,warna,makanan) {
        this.hewan = hewan;
        this.jenis = jenis;
        this.warna = warna;
        this.makanan = makanan;
    }
    mandi(majikan) {
        return this.hewan + " yang berwarna " + this.warna + " sedang dimandikan oleh " + majikan;
    }

    bermain(tempat) {
        return this.hewan + " yang sedang makan " + this.makanan + " di " + tempat + " adalah " + this.hewan + " jenis " + this.jenis;
    }

}

var hewanjocelyn = new Hewan ('sapi','limosin','putih','rumput');
console.log(hewanjocelyn.hewan);
console.log(hewanjocelyn.jenis);
console.log(hewanjocelyn.warna);
console.log(hewanjocelyn.makanan);

console.log(hewanjocelyn.mandi("jocelyn"));
console.log(hewanjocelyn.bermain("ladang"));
console.table(hewanjocelyn);


// soal 2

const body = document.body;
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

const newTextt = document.createElement("h1");
newTextt.textContent = "Berhasil !!"

document.getElementById("btn1").addEventListener("dblclick", function () {
    alert("Tombol di klik 2x");
  });

const newText = document.createElement("h1");
newText.textContent = "X RPL"
newText.style.color = "red"


function klick() {
    body.append(newTextt);
}
function mouseIn() {
    body.append(newText);
}
function mouseOut() {
    newText.style.color = "green"
}
function del() {
    body.remove()
}