import Lenis from "@studio-freight/lenis";

// Assign Lenis smooth scroll
function initiateLenis() {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

export default initiateLenis;
