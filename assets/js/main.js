const yearNode = document.getElementById("currentYear");
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const revealElements = document.querySelectorAll(
  ".section-title, .project-card, .skill-pill, .info-item, .timeline-item, .project-detail-card"
);
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-up", "show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => {
  element.classList.add("reveal-up");
  observer.observe(element);
});
