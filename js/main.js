const page = document.querySelector(".page")
const header = document.querySelector("header")
const hamburger = document.querySelector(".hamburger")
const overlayMenu = document.querySelector(".overlay-menu")
const checkBox = document.getElementById("check-theme")

hamburger.addEventListener("click", this.openMenu)
overlayMenu.addEventListener("click", this.closeMenu)
checkBox.addEventListener("change", this.changeTheme)

function openMenu() {
    header.classList.add("menu-active")
}

function closeMenu() {
    header.classList.remove("menu-active")
}

function changeTheme(ev) {
    if (ev.target.checked) {
        page.style.setProperty("--color", "rgba(255,255,255,.85)")
        page.style.setProperty("--background", "rgba(0,0,0,.95)")
        page.style.setProperty("--background-head", "#000")
        page.style.setProperty("--background-2", "rgba(0,0,0,.98)")
        page.style.setProperty("--border-color", "rgba(255,255,255,0.15)")
        page.style.setProperty("--background-menu", "rgb(14,14,14)")
        return
    }
    setDefaultProperties()
}

function setDefaultProperties() {
    page.style.setProperty("--color", "rgba(0,0,0,.85)")
    page.style.setProperty("--background", "#fff")
    page.style.setProperty("--background-head", "#fff")
    page.style.setProperty("--background-2", "#eee")
    page.style.setProperty("--border-color", "rgba(0,0,0,0)")
    page.style.setProperty("--background-menu", "#eee")
}