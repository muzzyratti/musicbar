function loadContactsPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    const heading = document.createElement('h1');
    heading.textContent = "Contacts page";
    content.appendChild(heading);
}

export { loadContactsPage };