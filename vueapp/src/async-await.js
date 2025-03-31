function getData(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Data pelanggan ${id} diambil`);
        }, 1000);
    });
}

async function prosesData() {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<p>Memulai proses...</p>";

    try {
        const data1 = await getData(1);
        outputDiv.innerHTML += `<p>${data1}</p>`;

        const data2 = await getData(2);
        outputDiv.innerHTML += `<p>${data2}</p>`;

        const data3 = await getData(3);
        outputDiv.innerHTML += `<p>${data3}</p>`;

        outputDiv.innerHTML += "<p>Selesai!</p>";
    } catch (error) {
        outputDiv.innerHTML += `<p style="color: red;">Error: ${error.message}</p>`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("prosesButton").addEventListener("click", prosesData);
});
