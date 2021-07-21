import { divIcon } from "leaflet";

const markerHtmlStyles = `
  background-color: #3F51B4;
  width: 2.5rem;
  height: 2.5rem;
  display: block;
  left: -1.5rem;
  top: -1.5rem;
  position: relative;
  border-radius: 1.5rem 1.5rem 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`;

const selectedMarkerHtmlStyles = `
  background-color: #2bb437;
  border: solid 2px black;
  width: 2.5rem;
  height: 2.5rem;
  display: block;
  left: -1.5rem;
  top: -1.5rem;
  position: relative;
  border-radius: 2.5rem 2.5rem 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`;

const markerStyles = {
  customMarkerIcon: divIcon({
    html: `<span style="${markerHtmlStyles}">`,
  }),
  selectedCustomMarkerIcon: divIcon({
    html: `<span style="${selectedMarkerHtmlStyles}">`,
  }),
};

export default markerStyles;
