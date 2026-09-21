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
