function loadMenuPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    const heading = document.createElement('h1');
    heading.textContent = "Menu page";
    content.appendChild(heading);
}

export { loadMenuPage };