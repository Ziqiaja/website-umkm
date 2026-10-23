const menuToggle = document.querySelector(".menu-toggle");
const primaryNavigation = document.getElementById("primary-navigation");

if (menuToggle && primaryNavigation) {
  const closeNavigation = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka menu navigasi");
    primaryNavigation.classList.remove("is-open");
  };

  menuToggle.addEventListener("click", function () {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute(
      "aria-label",
      isExpanded ? "Buka menu navigasi" : "Tutup menu navigasi"
    );
    primaryNavigation.classList.toggle("is-open", !isExpanded);
  });

  primaryNavigation.addEventListener("click", function (event) {
    if (event.target instanceof HTMLAnchorElement) {
      closeNavigation();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      closeNavigation();
      menuToggle.focus();
    }
  });
}

const promoButton = document.getElementById("promoButton");
const promoText = document.getElementById("promoText");

if (promoButton && promoText) {
  promoButton.addEventListener("click", function () {
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
      isPaused ? "Putar musik santai" : "Jeda musik santai"
    );
  };

  audioToggle.addEventListener("click", function () {
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
