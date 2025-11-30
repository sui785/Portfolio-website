let map = L.map("dataMap").setView([51.26453538688258, 4.41468579131598], 16);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// bepaal de rechthoek rondom het gebouw van AP (coördinaten zijn 51.23041, 4.4155 en 51.22991, 4.41675)

let bounds = [
  [51.26453, 4.4146],
  [51.26455, 4.4148],
];

// kleur de rechthoek in met de rode AP-kleur (#e60005)

L.rectangle(bounds, { color: "#e60005", weight: 1 }).addTo(map);

// plaats een marker (coördinaten 51.23009 en 4.41616) met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
let dataMarker = L.marker([51.26453, 4.4146]).addTo(map);

dataMarker.bindPopup("<b>Datacenter United</b><br>Antwerpen").openPopup();
