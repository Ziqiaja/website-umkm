const products = [
  {
    nama: "Kopi Signature",
    kategori: "Minuman",
    harga: 50000,
    stok: 12,
    unggulan: true,
    deskripsi: "Kopi lokal dengan aroma kuat dan rasa seimbang.",
    gambar:
      "https://assets.terradium.io/projects/a297a250-bbb0-5f55-bc32-b0bd9d6aa048/content/40d42fc2-e0ea-43e1-a3ba-d61d6334a533/featured.jpg",
    alt: "Secangkir kopi hitam",
    lebar: 1376,
    tinggi: 768,
  },
  {
    nama: "Es Kopi Gula Aren",
    kategori: "Minuman",
    harga: 70000,
    stok: 8,
    unggulan: true,
    deskripsi: "Espresso, susu creamy, dan gula aren dengan manis yang pas.",
    gambar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdX8Am0bBmpYKhwmzBTKuU1SM3IUCiFmIjnQXlwVJ9r1PjCT9msj3Xyfkk&s=10",
    alt: "Es kopi susu gula aren",
    lebar: 640,
    tinggi: 427,
  },
  {
    nama: "Mix Plater",
    kategori: "Makanan",
    harga: 35000,
    stok: 5,
    unggulan: false,
    deskripsi: "Kentang goreng, sosis, dan nugget untuk sharing.",
    gambar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9gFZq8lkJuxJCSeZNEO0wpAXU6Y1kDb1ocJc14F1AToQAbJNdhoo6S8A&s=10",
    alt: "Kentang goreng dan makanan ringan",
    lebar: 554,
    tinggi: 554,
  },
  {
    nama: "Chocolate Latte",
    kategori: "Minuman",
    harga: 30000,
    stok: 0,
    unggulan: false,
    deskripsi: "Minuman cokelat creamy untuk pencinta rasa manis.",
    gambar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM-j8aAs-VlJz0GY1BioLbLXIv-7bC3nyf9WDe3Tfg8Ag9oJT-dA_djMq2&s=10",
    alt: "Chocolate latte dengan foam susu",
    lebar: 400,
    tinggi: 400,
  },
];

const menuToggle = document.querySelector(".menu-toggle");
const primaryNavigation = document.getElementById("primary-navigation");

if (menuToggle && primaryNavigation) {
  const closeNavigation = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka menu navigasi");
    primaryNavigation.classList.remove("is-open");
  };

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute(
      "aria-label",
      isExpanded ? "Buka menu navigasi" : "Tutup menu navigasi",
    );
    primaryNavigation.classList.toggle("is-open", !isExpanded);
  });

  primaryNavigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeNavigation();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      closeNavigation();
      menuToggle.focus();
    }
  });
}

const promoButton = document.getElementById("promoButton");
const promoText = document.getElementById("promoText");

if (promoButton && promoText) {
  promoButton.addEventListener("click", () => {
    promoText.textContent = "Promo berhasil dipilih! Hubungi kami melalui WhatsApp.";
  });
}

const cafeAudio = document.getElementById("cafeAudio");
const audioToggle = document.getElementById("audioToggle");

if (cafeAudio && audioToggle) {
  const updateAudioButton = () => {
    const isPaused = cafeAudio.paused;
    audioToggle.textContent = isPaused ? "▶️ Putar" : "⏸️ Pause";
    audioToggle.setAttribute(
      "aria-label",
      isPaused ? "Putar musik santai" : "Jeda musik santai",
    );
  };

  audioToggle.addEventListener("click", () => {
    if (cafeAudio.paused) {
      cafeAudio.play();
    } else {
      cafeAudio.pause();
    }
  });

  cafeAudio.addEventListener("play", updateAudioButton);
  cafeAudio.addEventListener("pause", updateAudioButton);
  cafeAudio.addEventListener("ended", updateAudioButton);
  updateAudioButton();
}

const productGrid = document.getElementById("product-grid");
const productTableBody = document.getElementById("product-table-body");

if (productGrid && productTableBody) {
  const formatPrice = (price) => `Rp${price.toLocaleString("id-ID")}`;
  let productCards = "";
  let productRows = "";

  for (const product of products) {
    const stockLabel =
      product.stok > 0 ? `Stok tersedia: ${product.stok}` : "Stok habis";
    const featuredLabel = product.unggulan
      ? '<span class="tag">Produk unggulan</span>'
      : "";
    const productQuery = encodeURIComponent(product.nama);
    const orderMessage = encodeURIComponent(
      `Halo, saya ingin memesan ${product.nama}.`,
    );

    productCards += `
      <article class="product-card">
        <img src="${product.gambar}" alt="${product.alt}" width="${product.lebar}" height="${product.tinggi}">
        <div>
          <span class="tag">${product.kategori}</span>
          <h2>${product.nama}</h2>
          ${featuredLabel}
          <p>${product.deskripsi}</p>
          <strong>${formatPrice(product.harga)}</strong>
          <p class="product-stock">${stockLabel}</p>
          <div class="product-actions">
            <a class="button button-light" href="kontak.html?produk=${productQuery}#form-kontak">Tanya produk</a>
            <a class="button button-primary" href="https://wa.me/6285641406465?text=${orderMessage}" target="_blank" rel="noopener noreferrer">Pesan</a>
          </div>
        </div>
      </article>`;

    productRows += `
      <tr>
        <td>${product.nama}</td>
        <td>${product.kategori}</td>
        <td>${formatPrice(product.harga)}</td>
        <td>${stockLabel}</td>
      </tr>`;
  }

  productGrid.innerHTML = productCards;
  productTableBody.innerHTML = productRows;
  console.table(products);
  console.info(`Debug produk: ${products.length} produk dirender.`);
}

const contactForm = document.querySelector("#form-kontak");
const preview = document.querySelector("#preview-form");

if (contactForm && preview) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(contactForm);
    preview.textContent = [
      `Nama             : ${data.get("nama")}`,
      `Email            : ${data.get("email")}`,
      `WhatsApp         : ${data.get("whatsapp")}`,
      `Waktu pengiriman : ${data.get("waktu")}`,
      `Paket            : ${data.get("paket")}`,
      `Topik            : ${data.get("topik")}`,
      `Pesan            : ${data.get("pesan")}`,
      `Metode kontak    : ${data.get("metode")}`,
    ].join("\n");
  });

  const productName = new URLSearchParams(window.location.search).get("produk");

  if (productName) {
    const messageField = contactForm.querySelector("#pesan");
    const productTopic = contactForm.querySelector(
      'input[name="topik"][value="produk"]',
    );

    if (messageField) {
      messageField.value = `Halo, saya ingin bertanya tentang ${productName}.`;
    }
    if (productTopic) {
      productTopic.checked = true;
    }
  }
}
