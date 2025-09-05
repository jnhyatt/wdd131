const lastModified = document.getElementById('last-modified');
const currentYear = document.getElementById('current-year');

lastModified.textContent = document.lastModified;
currentYear.textContent = new Date().getFullYear();
