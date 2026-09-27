const pages = document.querySelectorAll(".page");

const currentPage = location.pathname
    .split("/")
    .pop()
    .replace(".html", "");

pages.forEach(page => {
    const name = page.textContent.trim().toLowerCase();

    page.classList.toggle(
        "active",
        name === currentPage
    );
});