const yearNode = document.getElementById("currentYear");
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const THEME_KEY = "portfolio-theme";
const VALID_THEMES = ["luxury", "editorial", "tech"];

function applyTheme(themeName) {
  const safeTheme = VALID_THEMES.includes(themeName) ? themeName : "luxury";
  document.body.setAttribute("data-theme", safeTheme);
  localStorage.setItem(THEME_KEY, safeTheme);

  document.querySelectorAll(".theme-btn").forEach((button) => {
    const isActive = button.getAttribute("data-theme") === safeTheme;
    button.classList.toggle("active", isActive);
  });
}

const savedTheme = localStorage.getItem(THEME_KEY) || "luxury";
applyTheme(savedTheme);

document.querySelectorAll(".theme-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const selectedTheme = button.getAttribute("data-theme") || "luxury";
    applyTheme(selectedTheme);
  });
});

const revealElements = document.querySelectorAll(
  ".section-title, .project-card, .repo-card, .skill-pill, .school-skill-card, .info-item, .timeline-item, .profile-card"
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
