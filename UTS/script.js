const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function(){
    navMenu.classList.toggle("active");
});

const btnKirim = document.getElementById("btnKirim");
const notif = document.getElementById("notif");

btnKirim.addEventListener("click", function () {
    // Ambil nilai dari input
    const nama = document.getElementById("nama").value.trim();
    const hp = document.getElementById("hp").value.trim();
    const pesan = document.getElementById("pesan").value.trim();

    // Cek apakah semua field sudah diisi
    if (nama === "" || hp === "" || pesan === "") {
        alert("⚠️ Mohon isi semua kolom terlebih dahulu!");
        return; // berhenti, tidak lanjut
    }

    // Kalau semua terisi, tampilkan notifikasi sukses
    notif.style.display = "block";

    // Kosongkan form setelah kirim
    document.getElementById("nama").value = "";
    document.getElementById("hp").value = "";
    document.getElementById("pesan").value = "";

    // Sembunyikan notifikasi lagi setelah 4 detik
    setTimeout(function () {
        notif.style.display = "none";
    }, 4000);
});

// ===== TAB KATEGORI PAKET =====
const paketTabs = document.querySelectorAll(".paket-tab");
const paketGroups = document.querySelectorAll(".paket-group");

paketTabs.forEach(function(tab) {
    tab.addEventListener("click", function() {
        // Hapus active dari semua tab dan group
        paketTabs.forEach(t => t.classList.remove("active"));
        paketGroups.forEach(g => g.classList.remove("active"));

        // Aktifkan tab dan group yang diklik
        tab.classList.add("active");
        const targetId = "tab-" + tab.getAttribute("data-tab");
        document.getElementById(targetId).classList.add("active");
    });
});


// ===== KLIK "PESAN SEKARANG" DI KARTU =====
// Otomatis isi dropdown dan scroll ke form
const btnsPesan = document.querySelectorAll(".btn-pesan");

btnsPesan.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        e.preventDefault();
        const namaPaket = btn.getAttribute("data-paket");

        // Cari dan pilih opsi yang mengandung nama paket
        const selectPaket = document.getElementById("f-paket");
        for (let i = 0; i < selectPaket.options.length; i++) {
            if (selectPaket.options[i].text.includes(namaPaket)) {
                selectPaket.selectedIndex = i;
                break;
            }
        }

        // Scroll ke form
        document.getElementById("form-pesan").scrollIntoView({ behavior: "smooth" });
    });
});


// ===== SUBMIT FORM PEMESANAN =====
document.getElementById("btnOrder").addEventListener("click", function() {
    const nama    = document.getElementById("f-nama").value.trim();
    const hp      = document.getElementById("f-hp").value.trim();
    const paket   = document.getElementById("f-paket").value;
    const tanggal = document.getElementById("f-tanggal").value;
    const jenis   = document.getElementById("f-jenis").value;

    if (!nama || !hp || !paket || !tanggal || !jenis) {
        alert("⚠️ Mohon lengkapi semua kolom yang wajib diisi!");
        return;
    }

    // Sembunyikan form, tampilkan konfirmasi
    document.getElementById("formPesan").style.display = "none";
    const konfirmasi = document.getElementById("konfirmasi");
    konfirmasi.style.display = "block";
    document.getElementById("nama-konfirmasi").textContent = nama;
});