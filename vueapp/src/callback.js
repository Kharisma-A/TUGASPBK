const pelanggan = [
    { id: 1, nama: "andi", email: "andi@gmail.com"},
    { id: 2, nama: "budi", email: "budi@gmail.com"},
    { id: 3, nama: "citra", email: "citra@gmail.com"},
]

const dataList = document.getElementById("dataList");
const prosesBtn = document.getElementById("prosesBtn");

function delay(ms, callback) {
    setTimeout(callback, ms);
}

function prosesData(index) {
    if (index < pelanggan.length ) {
        delay(1000, () => {
            const li = document.createElement("li");
            li.textContent = `${pelanggan[index].nama} - ${pelanggan[index].email}`;
            dataList.appendChild(li);
            prosesData(index + 1);
        });
    } else {
        prosesBtn.disabled = false ;
    }
}

prosesBtn.addEventListener("click", () => {
    dataList.innerHTML = "";
    prosesData(0);
});