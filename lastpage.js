
const text = "I saw myself sitting in the crotch of this fig tree, starving to death, just because I couldn’t make up my mind which of the figs I would choose. I wanted each and every one of them, but choosing one meant losing all the rest, and, as I sat there, unable to decide, the figs began to wrinkle and go black, and, one by one, they plopped to the ground at my feet.";

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

