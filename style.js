const promoButton = document.querySelector("#promoButton");
const promoButton2 = document.querySelector("#promoButton2");
const promoText = document.querySelector("#promoText");

function tampilkanPromo() {
  promoText.textContent =
    "🎉 Selamat! Kamu mendapatkan diskon 10% untuk pembelian pertama.";

  promoButton.textContent = "Promo Berhasil!";
}

promoButton.addEventListener("click", tampilkanPromo);

promoButton2.addEventListener("click", () => {
  alert("🎉 Kamu mendapatkan diskon 10% untuk pembelian pertama!");
});
