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
<script>
    // Récupération des éléments du DOM
    const modal = document.getElementById("legalModal");
    const btn = document.getElementById("openModal");
    const closeBtn = document.querySelector(".close-btn");

    // Vérification de sécurité pour s'assurer que les éléments existent
    if (btn && modal && closeBtn) {
        // Ouvrir la modale au clic sur le lien
        btn.addEventListener("click", function(e) {
            e.preventDefault(); // Bloque la remontée de page
            modal.style.display = "block";
        });

        // Fermer la modale au clic sur la croix (×)
        closeBtn.addEventListener("click", function() {
            modal.style.display = "none";
        });

        // Fermer si l'utilisateur clique n'importe où en dehors de la boîte blanche
        window.addEventListener("click", function(e) {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    } else {
        console.error("Erreur : Un ou plusieurs éléments de la modale sont introuvables dans le HTML.");
    }
</script>
