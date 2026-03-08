const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function initRevealObservers() {
  const nodes = document.querySelectorAll("[data-reveal]");
  if (!nodes.length) return;

  if (reducedMotion) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
  );

  nodes.forEach((node) => observer.observe(node));
}

function initSpotlights() {
  document.querySelectorAll("[data-spotlight]").forEach((node) => {
    node.addEventListener("pointermove", (event) => {
      const rect = node.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      node.style.setProperty("--spotlight-x", `${clamp(x, 0, 100)}%`);
      node.style.setProperty("--spotlight-y", `${clamp(y, 0, 100)}%`);
    });
  });
}

function initTiltPanels() {
  document.querySelectorAll("[data-tilt]").forEach((node) => {
    if (reducedMotion) return;

    const reset = () => {
      node.style.setProperty("--tilt-x", "0deg");
      node.style.setProperty("--tilt-y", "0deg");
      node.style.setProperty("--shift-x", "0px");
      node.style.setProperty("--shift-y", "0px");
    };

    node.addEventListener("pointermove", (event) => {
      const rect = node.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      node.style.setProperty("--tilt-y", `${clamp(px * 9, -7, 7)}deg`);
      node.style.setProperty("--tilt-x", `${clamp(py * -8, -6, 6)}deg`);
      node.style.setProperty("--shift-x", `${clamp(px * 6, -4, 4)}px`);
      node.style.setProperty("--shift-y", `${clamp(py * 6, -4, 4)}px`);
    });

    node.addEventListener("pointerleave", reset);
    node.addEventListener("blur", reset, true);
  });
}

function initMagneticLinks() {
  document.querySelectorAll("[data-magnetic]").forEach((node) => {
    if (reducedMotion) return;

    const reset = () => {
      node.style.setProperty("--magnetic-x", "0px");
      node.style.setProperty("--magnetic-y", "0px");
    };

    node.addEventListener("pointermove", (event) => {
      const rect = node.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      node.style.setProperty("--magnetic-x", `${clamp(x * 0.08, -6, 6)}px`);
      node.style.setProperty("--magnetic-y", `${clamp(y * 0.08, -6, 6)}px`);
    });

    node.addEventListener("pointerleave", reset);
    node.addEventListener("blur", reset, true);
  });
}

function initHeaderState() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const sync = () => {
    header.dataset.scrolled = String(window.scrollY > 10);
  };

  sync();
  window.addEventListener("scroll", sync, { passive: true });
}

initRevealObservers();
initSpotlights();
initTiltPanels();
initMagneticLinks();
initHeaderState();
