function toggle_menu(element) {
    element.classList.toggle("change");

    document
    .querySelector(".menu-content")
    .classList.toggle("show");

    document
    .querySelector("main")
    .classList.toggle("blur");
}
function change_theme() {
    document.documentElement.classList.toggle("invert");
}