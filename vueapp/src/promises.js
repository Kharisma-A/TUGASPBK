const pelanggan = [
    { id: 1, nama: "Andi", email: "andi@mail.com" },
    { id: 2, nama: "Budi", email: "budi@mail.com" },
    { id: 3, nama: "Citra", email: "citra@mail.com" }
];

const dataList = document.getElementById("dataList");
const prosesBtn = document.getElementById("prosesBtn");

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function prosesData() {
    dataList.innerHTML = ""; 
    prosesBtn.disabled = true; 

    let promise = Promise.resolve(); 

    pelanggan.forEach((pelanggan, index) => {
        promise = promise
            .then(() => delay(1000)) 
            .then(() => {
                const li = document.createElement("li");
                li.textContent = `${pelanggan.nama} - ${pelanggan.email}`;
                dataList.appendChild(li);
            });
    });

    promise.finally(() => prosesBtn.disabled = false);
}

prosesBtn.addEventListener("click", prosesData);
