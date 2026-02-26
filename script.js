document.addEventListener("DOMContentLoaded", function() {
  
  // 1. GESTION DU FORMULAIRE DE CONTACT / DEVIS
  const contactForm = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      formMsg.textContent = "Envoi de votre demande...";
      formMsg.style.color = "var(--text)";

      const formData = new FormData(contactForm);
      
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      })
      .then(response => {
        if (response.ok) {
          formMsg.textContent = "Demande envoyée avec succès ! Je vous réponds sous 48h.";
          formMsg.style.color = "#22c55e"; // Vert succès
          contactForm.reset();
        } else {
          throw new Error();
        }
      })
      .catch(() => {
        formMsg.textContent = "Erreur lors de l'envoi. Merci d'utiliser mon mail direct.";
        formMsg.style.color = "#ef4444"; // Rouge erreur
      });
    });
  }

  // 2. GESTION DU FORMULAIRE D'AVIS
  const reviewForm = document.getElementById('reviewForm');
  const reviewMsg = document.getElementById('reviewMsg');

  if (reviewForm) {
    reviewForm.addEventListener('submit', function(e) {
      e.preventDefault();
      reviewMsg.textContent = "Envoi de votre avis...";
      
      const formData = new FormData(reviewForm);
      
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      })
      .then(response => {
        if (response.ok) {
          reviewMsg.textContent = "Merci ! Votre avis a été envoyé pour vérification.";
          reviewMsg.style.color = "#22c55e";
          reviewForm.reset();
        } else {
          throw new Error();
        }
      })
      .catch(() => {
        reviewMsg.textContent = "Oups ! Erreur lors de l'envoi de l'avis.";
        reviewMsg.style.color = "#ef4444";
      });
    });
  }

  // 3. MISE À JOUR AUTOMATIQUE DE L'ANNÉE AU FOOTER
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
