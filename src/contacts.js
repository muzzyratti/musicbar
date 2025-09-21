function loadContactsPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    const heading = document.createElement('h1');
    heading.textContent = "Location and contacts";
    content.appendChild(heading);

    const address = document.createElement('p');
    address.textContent = "123 Music Lane, Melody City, 45678";
    content.appendChild(address);

    const phone = document.createElement('p');
    phone.textContent = "Phone: (123) 456-7890";
    content.appendChild(phone);
}

export { loadContactsPage };