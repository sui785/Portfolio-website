let map = L.map("dataMap").setView([51.2635, 4.4146], 16);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// rechthoek rond de datacenter

let bounds = [
  [51.263238, 4.414454],
  [51.263034, 4.414918],
];

// kleur van de rechthoek (#e60005)

L.rectangle(bounds, { color: "#e60005", weight: 1 }).addTo(map);

// plaats van de marker
let dataMarker = L.marker([51.263108, 4.41467]).addTo(map);

// tekst bij de marker
dataMarker
  .bindPopup("<b>Datacenter United</b><br>Haifastraat 6<br>2030 Antwerpen")
  .openPopup();
