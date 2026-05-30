document.addEventListener("DOMContentLoaded", function() {
  // Mise à jour auto de l'année
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Optionnel : Animation légère au scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  });

  document.querySelectorAll('.skill-card, .project-card-premium').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "0.6s ease-out";
    observer.observe(el);
  });
});
// On récupère les éléments
const modal = document.getElementById("legalModal");
const btn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close-btn");

// Ouvrir la modale au clic
btn.addEventListener("click", (e) => {
    e.preventDefault(); // Empêche la page de remonter
    modal.style.display = "block";
});

// Fermer au clic sur la croix
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fermer si l'utilisateur clique n'importe où en dehors de la modale
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
