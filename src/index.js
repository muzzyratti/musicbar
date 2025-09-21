import { loadMainPage } from "./consound.js";
import { loadMenuPage } from "./menu.js";
import { loadContactsPage } from "./contacts.js";

const mainBtn = document.getElementById('mainBtn');
const menuBtn = document.getElementById('menuBtn');
const contactsBtn = document.getElementById('contactsBtn');


loadMainPage();

mainBtn.addEventListener('click', () => { loadMainPage(); });
menuBtn.addEventListener('click', () => { loadMenuPage(); });
contactsBtn.addEventListener('click', () => { loadContactsPage(); });

