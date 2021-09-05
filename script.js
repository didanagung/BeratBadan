const pria = document.getElementById("pria");
const wanita = document.getElementById("wanita");
const tinggi = document.querySelector("#tinggi");
const berat = document.querySelector("#berat");
const hitung = document.querySelector("#hitung");

hitung.addEventListener("click", () => {
  if (tinggi.value == false) {
    alert("Masukkan Tinggi Badan Anda!");
  } else {
    if (pria.checked == true) {
      const ideal = tinggi.value - 100 - (tinggi.value - 100) * 0.1;
      berat.placeholder = ideal;
    } else if (wanita.checked == true) {
      const ideal = tinggi.value - 100 - (tinggi.value - 100) * 0.15;
      berat.placeholder = ideal;
    } else {
      alert("Harap Pilih Jenis Kelamin Anda!");
    }
  }
});
