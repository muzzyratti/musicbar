import { loadMainPage } from "./consound.js";
import { loadMenuPage } from "./menu.js";
import { loadEventsPage } from "./events.js";
import { loadBookingPage } from "./booking.js";
import { loadContactsPage } from "./contacts.js";
import { loadConceptPage } from "./concept.js";

const mainBtn = document.getElementById('mainBtn');
const menuBtn = document.getElementById('menuBtn');
const eventsBtn = document.getElementById('eventsBtn');
const bookingBtn = document.getElementById('bookingBtn');
const contactsBtn = document.getElementById('contactsBtn');
const conceptBtn = document.getElementById('conceptBtn');

mainBtn.addEventListener('click', () => { loadMainPage(); });
menuBtn.addEventListener('click', () => { loadMenuPage(); });
eventsBtn.addEventListener('click', () => { loadEventsPage(); });
bookingBtn.addEventListener('click', () => { loadBookingPage(); });
contactsBtn.addEventListener('click', () => { loadContactsPage(); });
conceptBtn.addEventListener('click', () => { loadConceptPage(); });
