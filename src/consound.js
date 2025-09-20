function loadMainPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    const heading = document.createElement('h1');
    heading.textContent = "Main Consound page";
    content.appendChild(heading);
}

export { loadMainPage };