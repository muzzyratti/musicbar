function loadConceptPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    const heading = document.createElement('h1');
    heading.textContent = "Concept page";
    content.appendChild(heading);
}

export { loadConceptPage };