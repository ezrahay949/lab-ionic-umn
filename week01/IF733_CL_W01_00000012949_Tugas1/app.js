let total = 0.00;

function tambah() {
    let inputNama    = document.getElementById("inputNama").value;
    let inputJumlah  = parseFloat(document.getElementById("inputJumlah").value);

    if (inputNama && inputJumlah) {
        item = "<ion-item>" + inputNama + ": Rp " + inputJumlah + "</ion-item>"
        document.getElementById("listPengeluaran").innerHTML += item;

        total = total + inputJumlah;
        document.getElementById("outputTotal").innerHTML = "Rp " + total.toFixed(2);

        hapus();
    }
    else {
        displayAlert();
    }
}

function hapus() {
    document.getElementById("inputNama").value = "";
    document.getElementById("inputJumlah").value = "";
}

async function displayAlert() {
    const alertController = document.querySelector('ion-alert-controller');

    const alert = await alertController.create({
        header: 'Terjadi Kesalahan',
        message: 'Mohon masukkan nama dan jumlah pengeluaran.',
        buttons: ['Tutup']
    });
    return await alert.present();
}