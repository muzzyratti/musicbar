function loadEventsPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    const heading = document.createElement('h1');
    heading.textContent = "Events page";
    content.appendChild(heading);
}

export { loadEventsPage };