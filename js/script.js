// ========================================
// TOMBOL PROMO
// ========================================

const promoButton = document.getElementById("promoButton");
const promoText = document.getElementById("promoText");

promoButton.addEventListener("click", function () {

  promoText.textContent =
    "🎉 Promo berhasil dipilih! Hubungi kami melalui WhatsApp untuk mendapatkan informasi.";

});


// ========================================
// CEK STRUKTUR HEADING
// ========================================

const headings = [
  ...document.querySelectorAll("h1, h2, h3")
];

console.log("=== STRUKTUR HEADING ===");

headings.forEach((heading) => {

  console.log(
    heading.tagName,
    "-",
    heading.textContent.trim()
  );

});


// ========================================
// CEK GAMBAR
// ========================================

const images = document.querySelectorAll("img");

console.log("=== PEMERIKSAAN ALT IMAGE ===");

images.forEach((image) => {

  if (image.alt.trim() === "") {

    console.warn(
      "Gambar belum memiliki alt text:",
      image.src
    );

  } else {

    console.log(
      "OK:",
      image.alt
    );

  }

});


// ========================================
// NAVIGASI AKTIF
// ========================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {

  link.addEventListener("click", function () {

    navLinks.forEach((item) => {
      item.classList.remove("active");
    });

    this.classList.add("active");

  });

});
