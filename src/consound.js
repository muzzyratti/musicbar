function loadMainPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    
    const heading = document.createElement('h1');
    heading.textContent = "Consound - music bar, studio, hotel and coworking";
    content.appendChild(heading);
    
    const descriptionDiv = document.createElement('p');
    descriptionDiv.textContent = "The place where you can party, listen, create, record, release, rehearse and sleep with music.";
    content.appendChild(descriptionDiv);

}

export { loadMainPage };