
const mobile_menu = document.querySelector("#mobile-menu")
const body = document.querySelector("body")

document.querySelector("#burger-btn").addEventListener("click", () => {
	mobile_menu.style.display = "block"
	body.style.overflow = "hidden"
})

document.querySelector("#close-btn").addEventListener("click", () => {
	mobile_menu.style.display = "none"
	body.style.overflow = "initial"
})

// Mobile menu disappear if screen is resized
window.addEventListener("resize", () => {
	mobile_menu.style = "none"
	body.style.overflow = "initial"
})