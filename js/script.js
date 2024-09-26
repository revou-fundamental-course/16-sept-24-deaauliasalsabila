// Fungsi untuk memperbarui nama pengguna
function updateUserName() {
    // Menampilkan prompt untuk meminta nama pengguna
    let userName = prompt("Masukkan nama Anda:", "User");

    // Jika nama diisi, perbarui teks dalam elemen <span> dengan id 'user-name'
    if (userName) {
        document.getElementById("user-name").textContent = userName;
    }
}

// Ketika seluruh konten DOM telah dimuat, panggil fungsi updateUserName
document.addEventListener("DOMContentLoaded", function () {
    updateUserName();
});

// Validasi Nama dengan Regex (hanya huruf, minimal 3 karakter)
function validateName() {
    const nameInput = document.getElementById("nama");
    const errorNama = document.getElementById("errorNama");
    const namePattern = /^[a-zA-Z\s]{3,}$/; // Hanya huruf dan spasi, minimal 3 karakter

    if (!nameInput.value.match(namePattern)) {
        errorNama.textContent = "Nama harus terdiri dari huruf dan minimal 3 karakter.";
        nameInput.classList.add("error");
        nameInput.classList.remove("success");
        return false;
    } else {
        errorNama.textContent = "";
        nameInput.classList.add("success");
        nameInput.classList.remove("error");
        return true;
    }
}

// Validasi Tanggal Lahir (tidak boleh kosong)
function validateDate() {
    const dateInput = document.getElementById("tanggalLahir");
    const errorTanggalLahir = document.getElementById("errorTanggalLahir");

    if (!dateInput.value) {
        errorTanggalLahir.textContent = "Tanggal lahir harus diisi.";
        dateInput.classList.add("error");
        dateInput.classList.remove("success");
        return false;
    } else {
        errorTanggalLahir.textContent = "";
        dateInput.classList.add("success");
        dateInput.classList.remove("error");
        return true;
    }
}

// Validasi Jenis Kelamin (harus dipilih salah satu)
function validateGender() {
    const genderInputs = document.querySelectorAll('input[name="jenisKelamin"]');
    const errorJenisKelamin = document.getElementById("errorJenisKelamin");
    let isChecked = false;

    genderInputs.forEach((input) => {
        if (input.checked) {
            isChecked = true;
        }
    });
    
    if (!isChecked) {
        errorJenisKelamin.textContent = "Pilih jenis kelamin.";
        return false;
    } else {
        errorJenisKelamin.textContent = "";
        return true;
    }
}

// Validasi Pesan (minimal 10 karakter)
function validateMessage() {
    const messageInput = document.getElementById("pesan");
    const errorPesan = document.getElementById("errorPesan");

    if (messageInput.value.length < 10) {
        errorPesan.textContent = "Pesan harus minimal 10 karakter.";
        messageInput.classList.add("error");
        messageInput.classList.remove("success");
        return false;
    } else {
        errorPesan.textContent = "";
        messageInput.classList.add("success");
        messageInput.classList.remove("error");
        return true;
    }
}

// Fungsi utama untuk validasi seluruh form sebelum submit
function formResult() {
    const isNameValid = validateName();
    const isDateValid = validateDate();
    const isGenderValid = validateGender();
    const isMessageValid = validateMessage();

    if (isNameValid && isDateValid && isGenderValid && isMessageValid) {
        const nama = document.getElementById("nama").value;
        const tanggalLahir = document.getElementById("tanggalLahir").value;
        const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked').value;
        const pesan = document.getElementById("pesan").value;
        const currentTime = new Date().toString();

        setSenderUI(nama, tanggalLahir, jenisKelamin, pesan, currentTime);
        document.getElementById("messageForm").reset();

        return false; // Prevent actual form submission
    } else {
        return false; // Prevent form submission if any field is invalid
    }
}

// Fungsi untuk menampilkan data yang di-submit
function setSenderUI(nama, tanggalLahir, jenisKelamin, pesan, currentTime) {
    document.getElementById("resultNama").textContent = nama;
    document.getElementById("resultTanggalLahir").textContent = tanggalLahir;
    document.getElementById("resultJenisKelamin").textContent = jenisKelamin;
    document.getElementById("resultPesan").textContent = pesan;
    document.getElementById("currentTime").textContent = currentTime;
}

// Fungsi untuk slide banner
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n ));
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("photo-banner");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;
    
    for (i = 0; i < imgList.length; i++){
        imgList[i].style.display = "none";
    }

        imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 1000);