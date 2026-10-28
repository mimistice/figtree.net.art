
const text = "I saw my life branching out before me like the green fig tree in the story. From the tip of every branch, like a fat purple fig, a wonderful future beckoned and winked.";

const section = document.querySelector(".typing-section");
const output = document.getElementById("typing-text");

function typeOnScroll() {
  const rect = section.getBoundingClientRect();

  const distance =
    section.offsetHeight - window.innerHeight;

  const scrolled = -rect.top;

  // Finish typing at 80% of the scroll
  const progress = Math.max(
    0,
    Math.min(1, scrolled / (distance * 0.8))
  );

  const characters = Math.floor(progress * text.length);

  output.textContent = text.slice(0, characters);
}

window.addEventListener("scroll", typeOnScroll, {
  passive: true
});

window.addEventListener("resize", typeOnScroll);

typeOnScroll();
