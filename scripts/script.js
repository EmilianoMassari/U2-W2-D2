document.addEventListener("DOMContentLoaded", function () {
  // Bottone conta cappelli
  const btn = document.getElementById("countHatsBtn")
  if (btn) {
    btn.addEventListener("click", function () {
      const cards = document.querySelectorAll("#Saldi .card")
      alert("Numero di cappelli presenti: " + cards.length)
    })
  }
  // Bottone rimuovi tutte le card
  const removeBtn = document.getElementById("removeAllCardsBtn")
  if (removeBtn) {
    removeBtn.addEventListener("click", function () {
      const cards = document.querySelectorAll("#Saldi .card")
      cards.forEach((card) => card.remove())
    })
  }
  // Badge HOT sulle offerte Saldi
  const saldiCards = document.querySelectorAll("#Saldi .card")
  saldiCards.forEach(function (card) {
    const badge = document.createElement("span")
    badge.className = "badge bg-danger position-absolute top-0 end-0 m-2"
    badge.textContent = "HOT"
    card.classList.add("position-relative")
    card.appendChild(badge)
  })
  // Bottone scroll top
  const scrollTopBtn = document.getElementById("scrollTopBtn")
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      scrollTopBtn.style.display = "block"
    } else {
      scrollTopBtn.style.display = "none"
    }
  })
  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" })
  })
  // Invio form modale
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()
      // Chiudi il modale
      const modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById("contactModal")
      )
      modal.hide()
      // Reset del form
      contactForm.reset()
    })
  }
})
