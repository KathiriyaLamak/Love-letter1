const btn = document.getElementById("startBtn");
const tulipContainer = document.getElementById("tulip-container");
const letter = document.getElementById("letter");

btn.addEventListener("click", () => {
  btn.style.display = "none";

  startTulipRain();

  setTimeout(() => {
    letter.classList.remove("hidden");
    letter.classList.add("show");
  }, 1500);
});

function createTulip() {
  const tulip = document.createElement("div");
  tulip.classList.add("tulip");
  tulip.innerHTML = "💙";

  tulip.style.left = Math.random() * window.innerWidth + "px";
  tulip.style.animationDuration = (3 + Math.random() * 5) + "s";
  tulip.style.fontSize = (16 + Math.random() * 20) + "px";

  tulipContainer.appendChild(tulip);

  setTimeout(() => {
    tulip.remove();
  }, 8000);
}

function startTulipRain() {
  setInterval(createTulip, 200);
}