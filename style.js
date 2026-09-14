const promoButton = document.querySelector("#promoButton");
const promoButton2 = document.querySelector("#promoButton2");
const promoText = document.querySelector("#promoText");

function tampilkanPromo() {
  promoText.textContent =
    "🎉 Mantap! Kamu dapat diskon 10% untuk pembelian pertama di Cafenya Orang Have. Yuk dukung UMKM lokal! ☕";

  promoButton.textContent = "✓ Promo Berhasil!";
}

promoButton.addEventListener("click", tampilkanPromo);

promoButton2.addEventListener("click", () => {
  alert(
    "☕ Terima kasih sudah mendukung Cafenya Orang Have!\n\n" +
    "🎉 Kamu mendapatkan diskon 10% untuk pembelian pertama.\n\n" +
    "Yuk nongkrong dan nikmati menu favoritmu!"
  );
});
