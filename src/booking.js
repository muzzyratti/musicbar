function loadBookingPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    const heading = document.createElement('h1');
    heading.textContent = "Booking page";
    content.appendChild(heading);
}

export { loadBookingPage };