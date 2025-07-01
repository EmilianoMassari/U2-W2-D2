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

document.addEventListener("DOMContentLoaded", function () {
  // Aggiungi la X per rimuovere la singola card
  const saldiCards = document.querySelectorAll("#Saldi .card")
  saldiCards.forEach(function (card) {
    // Badge HOT
    const badge = document.createElement("span")
    badge.className = "badge bg-danger position-absolute top-0 end-0 m-2"
    badge.textContent = "HOT"
    card.classList.add("position-relative")
    card.appendChild(badge)
    // X per rimuovere la card
    const closeBtn = document.createElement("button")
    closeBtn.type = "button"
    closeBtn.innerHTML = "&times;"
    closeBtn.className =
      "btn btn-sm position-absolute top-0 start-0 m-2 p-0 shadow d-flex align-items-center justify-content-center"
    closeBtn.style.backgroundColor = "#dc3545"
    closeBtn.style.color = "white"
    closeBtn.style.borderRadius = "0"
    closeBtn.style.width = "28px"
    closeBtn.style.height = "28px"
    closeBtn.style.fontSize = "1.3rem"
    closeBtn.style.lineHeight = "1"
    closeBtn.style.zIndex = 2
    closeBtn.setAttribute("aria-label", "Rimuovi card")
    closeBtn.addEventListener("click", function () {
      card.remove()
    })
    card.appendChild(closeBtn)
  })
})
