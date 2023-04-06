// mendapatkan elemen HTML yang diperlukan
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const resultOutput = document.getElementById("result");

// menambahkan event listener pada form ketika user meng-submit data
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault(); // mencegah halaman web refresh saat tombol submit ditekan

    // memeriksa apakah input valid atau tidak
    if (weightInput.value && heightInput.value) {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value) / 100; // mengubah dari cm menjadi meter
        const bmi = weight / (height ** 2); // menghitung BMI
        const acategory = getCategory(bmi); // mendapatkan kategori BMI
        const color = setCategoryColor(acategory); // mendapatkan warna

        // menampilkan hasil BMI dan kategori di tampilan HTML
        resultOutput.innerHTML = `Your BMI is <strong class="strongp">${bmi.toFixed(1)}</strong>, which is considered <strong class="strongp" style="color: ${color}">${acategory}</strong>.`;

        // membersihkan input form untuk penggunaan selanjutnya
        weightInput.value = "";
        heightInput.value = "";
    }
});

// fungsi untuk mendapatkan kategori BMI
function getCategory(bmi) {
    if (bmi < 18.5) {
        return "underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "overweight";
    } else {
        return "obesity";
    }
}

function setCategoryColor(acategory) {
    switch (acategory) {
        case "underweight":
            return "orange";
        case "normal weight":
            return "green";
        case "overweight":
            return "blue";
        case "obesity":
            return "red";
        default:
            return "black";
    }
}
