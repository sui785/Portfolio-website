let map = L.map("dataMap").setView([51.229528, 4.416761], 17);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// rechthoek rond de datacenter

let bounds = [
  [51.2294, 4.4165],
  [51.2297, 4.417],
];

// kleur van de rechthoek (#e60005)

L.rectangle(bounds, { color: "#e60005", weight: 1 }).addTo(map);

// plaats van de marker
let dataMarker = L.marker([51.22954, 4.41675]).addTo(map);

// tekst bij de marker
dataMarker
  .bindPopup(
    "<b>Datacenter Antwerpen</b><br>Ellermanstraat 28<br>2030 Antwerpen"
  )
  .openPopup();
