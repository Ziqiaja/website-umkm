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

function formatRupiah(nilai) {
  return `Rp${nilai.toLocaleString("id-ID")}`;
}

function statusStok(stok) {
  if (stok > 0) {
    return {
      label: `Stok tersedia: ${stok}`,
      className: "stock-available",
    };
  }

  return {
    label: "Stok habis",
    className: "stock-out",
  };
}

function buatElemenProduk(produk) {
  const status = statusStok(produk.stok);
  const productQuery = encodeURIComponent(produk.nama);
  const orderMessage = encodeURIComponent(
    `Halo, saya ingin memesan ${produk.nama}.`,
  );

  const kartu = document.createElement("article");
  kartu.classList.add("product-card");

  const gambar = document.createElement("img");
  gambar.src = produk.gambar;
  gambar.alt = produk.alt;
  gambar.width = produk.lebar;
  gambar.height = produk.tinggi;
  gambar.loading = "lazy";

  const detail = document.createElement("div");
  const kategori = document.createElement("span");
  kategori.classList.add("tag");
  kategori.textContent = produk.kategori;

  const nama = document.createElement("h2");
  nama.textContent = produk.nama;

  const deskripsi = document.createElement("p");
  deskripsi.textContent = produk.deskripsi;

  const harga = document.createElement("strong");
  harga.textContent = formatRupiah(produk.harga);

  const stok = document.createElement("p");
  stok.classList.add("product-stock", status.className);
  stok.textContent = status.label;

  detail.append(kategori, nama);
  if (produk.unggulan) {
    const unggulan = document.createElement("span");
    unggulan.classList.add("tag");
    unggulan.textContent = "Produk unggulan";
    detail.append(unggulan);
  }
  detail.append(deskripsi, harga, stok);

  const aksi = document.createElement("div");
  aksi.classList.add("product-actions");

  const tautanTanya = document.createElement("a");
  tautanTanya.classList.add("product-inquiry");
  tautanTanya.href = `kontak.html?produk=${productQuery}#form-kontak`;
  tautanTanya.textContent = "Tanya produk";

  const tautanPesan = document.createElement("a");
  tautanPesan.classList.add("button", "button-primary");
  tautanPesan.href = `https://wa.me/6285641406465?text=${orderMessage}`;
  tautanPesan.target = "_blank";
  tautanPesan.rel = "noopener noreferrer";
  tautanPesan.textContent = "Pesan";

  const tombolHapus = document.createElement("button");
  tombolHapus.classList.add("remove-product");
  tombolHapus.type = "button";
  tombolHapus.textContent = "×";
  tombolHapus.setAttribute("aria-label", `Hapus ${produk.nama} dari tampilan`);
  tombolHapus.addEventListener("click", () => {
    kartu.remove();
    const jumlahTersisa = productGrid.querySelectorAll(".product-card").length;
    statusProduk.textContent = `Menampilkan ${jumlahTersisa} produk.`;
    if (jumlahTersisa === 0) {
      tampilkanProdukKosong(productGrid, "Tidak ada produk pada tampilan ini.");
    }
  });

  aksi.append(tautanTanya, tautanPesan, tombolHapus);
  kartu.append(gambar, detail, aksi);
  return kartu;
}

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

const productGrid = document.querySelector("#produk-grid");
const statusProduk = document.querySelector("#status-produk");
const tombolFilter = document.querySelectorAll("[data-filter]");
const productTableBody = document.querySelector("#product-table-body");

function tampilkanProdukKosong(container, pesan) {
  const emptyState = document.createElement("p");
  emptyState.classList.add("empty-state");
  emptyState.textContent = pesan;
  container.append(emptyState);
}

function renderProduk(kategoriAktif) {
  if (!productGrid || !statusProduk) {
    return;
  }

  const produkTampil = kategoriAktif === "Semua"
    ? products
    : products.filter((product) => product.kategori === kategoriAktif);
  const kartuProduk = produkTampil.map(buatElemenProduk);
  productGrid.replaceChildren();

  if (kartuProduk.length === 0) {
    tampilkanProdukKosong(productGrid, "Belum ada produk dalam kategori ini.");
    statusProduk.textContent = "Tidak ada produk untuk kategori ini.";
    return;
  }

  productGrid.append(...kartuProduk);
  statusProduk.textContent = `Menampilkan ${kartuProduk.length} produk.`;
}

if (productGrid && statusProduk) {
  tombolFilter.forEach((tombol) => {
    tombol.addEventListener("click", (event) => {
      const filterAktif = event.currentTarget.dataset.filter;
      tombolFilter.forEach((itemFilter) => {
        const isActive = itemFilter === event.currentTarget;
        itemFilter.classList.toggle("is-active", isActive);
        itemFilter.setAttribute("aria-pressed", String(isActive));
      });
      renderProduk(filterAktif);
    });
  });

  renderProduk("Semua");
}

if (productTableBody) {
  const produkTersedia = products.filter((product) => product.stok > 0);
  const produkUnggulan = produkTersedia.find((product) => product.unggulan);

  const barisProduk = products.map((product) => {
    const status = statusStok(product.stok);
    const baris = document.createElement("tr");
    const nama = document.createElement("td");
    const kategori = document.createElement("td");
    const harga = document.createElement("td");
    const stok = document.createElement("td");
    const labelStok = document.createElement("span");

    nama.textContent = product.nama;
    kategori.textContent = product.kategori;
    harga.textContent = formatRupiah(product.harga);
    labelStok.classList.add("product-stock", status.className);
    labelStok.textContent = status.label;
    stok.append(labelStok);
    baris.append(nama, kategori, harga, stok);
    return baris;
  });

  productTableBody.replaceChildren(...barisProduk);
  console.log("Jumlah produk tersedia:", produkTersedia.length);
  console.log(
    "Rekomendasi produk unggulan:",
    produkUnggulan ? produkUnggulan.nama : "Belum ada produk unggulan tersedia",
  );
  console.table(products);
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
