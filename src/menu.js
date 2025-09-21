function loadMenuPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const heading = document.createElement('h1');
    heading.textContent = "Bar menu";
    content.appendChild(heading);

    const menuList = document.createElement('ul');
    const items = [
        "Classic Cocktails",
        "Signature Cocktails",
        "Mocktails",
        "Craft Beers",
        "Fine Wines",
        "Non-Alcoholic Beverages"
    ];

    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        menuList.appendChild(listItem);
    });

    content.appendChild(menuList);

}

export { loadMenuPage };