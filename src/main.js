import "./style.css"

const hamburger = document.getElementById("hamburger")
const menu = document.getElementById("menu")

const navMenu = () => {
    menu.classList.toggle("-translate-y-[150%]")
    menu.classList.toggle("translate-y-0")
    hamburger.classList.toggle("bx-x")
    hamburger.classList.toggle("bx-menu")
}

hamburger.addEventListener("click", () => {
    navMenu()
})