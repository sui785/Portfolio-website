// huidige jaar in de footer
// haal eerst het huidige jaar op
const currentYear = new Date().getFullYear();
// toon huidig jaar nadien in het element met id "year" in footer
document.getElementById("year").textContent = currentYear;