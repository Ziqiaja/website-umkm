// ================================
// TOMBOL PROMO HERO
// ================================

const promoButton = document.getElementById("promoButton");
const promoText = document.getElementById("promoText");

promoButton.addEventListener("click", function () {

  promoText.textContent =
    "🎉 Promo hari ini: Dapatkan diskon 10% untuk pembelian pertama!";

});


// ================================
// TOMBOL PROMO SECTION
// ================================

const promoButton2 = document.getElementById("promoButton2");
const promoText2 = document.getElementById("promoText2");

promoButton2.addEventListener("click", function () {

  promoText2.textContent =
    "☕ Promo berhasil dipilih! Silakan hubungi kami melalui WhatsApp.";

});


// ================================
// CEK STRUKTUR HEADING
// ================================

const headings = [
  ...document.querySelectorAll("h1, h2, h3")
];

console.log("Daftar heading pada halaman:");

headings.forEach((heading) => {

  console.log(
    heading.tagName,
    "-",
    heading.textContent.trim()
  );

});


// ================================
// EFEK LINK NAVIGASI
// ================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {

  link.addEventListener("click", function () {

    navLinks.forEach((item) => {
      item.classList.remove("active");
    });

    this.classList.add("active");

  });

});
