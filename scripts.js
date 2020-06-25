const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card")

for (const card of cards) {
    card.addEventListener("click", function(){
        const imgId = card.getAttribute("id")
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = `https://bootstrapmade.com/demo/themes/DevFolio/assets/img/${imgId}.jpg`
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
})
