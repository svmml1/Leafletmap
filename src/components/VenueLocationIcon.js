import L from 'leaflet';

export const VenueLocationIcon = L.icon({
  iconUrl: require('../assets/PIN-txt.svg'),
  iconRetinaUrl: require('../assets/PIN-txt.svg'),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [70, 70],
  className: 'leaflet-venue-icon'
});

export const ThLocationIcon = L.icon({
  iconUrl: require('../assets/PIN-Th.svg'),
  iconRetinaUrl: require('../assets/PIN-Th.svg'),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [100, 100],
  className: 'leaflet-venue-icon'
});