function enterPage(){
  const music = document.getElementById("bgMusic");
  const entry = document.getElementById("entryScreen");
  const content = document.getElementById("mainContent");

  music.play().catch(()=>{});

  entry.style.opacity = "0";
  entry.style.transition = "opacity 0.8s ease";

  setTimeout(()=>{
    entry.style.display = "none";
    content.style.display = "block";
  },800);
}

function celebrate() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
