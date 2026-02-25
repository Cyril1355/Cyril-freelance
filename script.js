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
        reviewMsg.style.color = "#4ade80";
        reviewForm.reset();
      } else {
        throw new Error();
      }
    })
    .catch(() => {
      reviewMsg.textContent = "Erreur lors de l'envoi de l'avis.";
      reviewMsg.style.color = "#f87171";
    });
  });
}
