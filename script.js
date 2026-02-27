function celebrate() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Auto play music on first interaction (mobile safe)
document.addEventListener("click", function () {
  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play().catch(() => {});
  }
}, { once: true });
