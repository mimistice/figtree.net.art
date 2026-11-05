
const text = "I saw my life branching out before me like the green fig tree in the story. From the tip of every branch, like a fat purple fig, a wonderful future beckoned and winked. ";

function typeOnScroll() {
  const section = document.querySelector(".typing-section");
  const output = document.getElementById("typing-text");

  const distance = section.offsetHeight - window.innerHeight;
  const scrolled = -section.getBoundingClientRect().top;
  const progress = Math.max(0, Math.min(1, scrolled / (distance * 0.8)));

  output.textContent = text.slice(0, Math.floor(progress * text.length));
}

window.addEventListener("scroll", typeOnScroll);
typeOnScroll();



setTimeout(() => {
  window.location.href = "15lastpage.html";
}, 30000);

