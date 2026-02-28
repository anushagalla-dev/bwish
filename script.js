function enterPage(){
  const music = document.getElementById("bgMusic");
  const entry = document.getElementById("entryScreen");
  const content = document.getElementById("mainContent");
  const canvas = document.getElementById("goldParticles");

  // SHOW PARTICLES
  canvas.style.display = "block";
  startParticles();

  // MUSIC FADE-IN
  music.volume = 0;
  music.play().catch(()=>{});

  let fadeAudio = setInterval(()=>{
    if(music.volume < 0.9){
      music.volume += 0.05;
    } else {
      clearInterval(fadeAudio);
    }
  }, 200);

  // FADE ENTRY
  entry.style.opacity = "0";
  entry.style.transition = "opacity 1s ease";

  setTimeout(()=>{
    entry.style.display = "none";
    content.style.display = "block";
  },1000);
}

function celebrate() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.classList.add("hide");
  setTimeout(() => {
    popup.style.display = "none";
    popup.classList.remove("hide");
  }, 300);
}
function toggleMusic(){
  const music = document.getElementById("bgMusic");
  const btn = document.getElementById("musicBtn");

  if(music.muted){
    music.muted = false;
    btn.innerHTML = "🔊";
  } else {
    music.muted = true;
    btn.innerHTML = "🔇";
  }
}
/* GOLD PARTICLE EFFECT */
function startParticles(){
  const canvas = document.getElementById("goldParticles");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
window.addEventListener("resize", ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
  let particles = [];

  for(let i=0;i<50;i++){
    particles.push({
      x:Math.random()*canvas.width,
      y:Math.random()*canvas.height,
      size:Math.random()*3+1,
      speedY:Math.random()*1+0.5,
      opacity:Math.random()
    });
  }

  let lastTime = 0;
function animate(time){
  if(time - lastTime < 30) {  // ~33fps
    requestAnimationFrame(animate);
    return;
  }
  lastTime = time;

  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
    ctx.fillStyle=`rgba(212,175,55,${p.opacity})`;
    ctx.fill();
    p.y -= p.speedY;

    if(p.y < 0){
      p.y = canvas.height;
      p.x = Math.random()*canvas.width;
    }
  });

  requestAnimationFrame(animate);
}

  animate();
}
