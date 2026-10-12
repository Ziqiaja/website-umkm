const form = document.querySelector("#form-kontak");
const preview = document.querySelector("#preview-form");

if (form && preview) {
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);

  preview.textContent = [
    `Nama             : ${data.get("nama")}`,
    `Email            : ${data.get("email")}`,
    `WhatsApp         : ${data.get("whatsapp")}`,
    `Waktu pengiriman : ${data.get("waktu")}`,
    `Paket            : ${data.get("paket")}`,
    `Topik            : ${data.get("topik")}`,
    `Pesan            : ${data.get("pesan")}`,
    `Metode kontak    : ${data.get("metode")}`
  ].join("\n");
});
}

const productName = new URLSearchParams(window.location.search).get("produk");
if (form && productName) {
  const messageField = form.querySelector("#pesan");
  const productTopic = form.querySelector('input[name="topik"][value="produk"]');

  if (messageField) {
    messageField.value = `Halo, saya ingin bertanya tentang ${productName}.`;
  }
  if (productTopic) {
    productTopic.checked = true;
  }
}