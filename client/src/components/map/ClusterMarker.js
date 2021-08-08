import React, { useState, useEffect } from "react";
import { useMap, Marker, useMapEvents, Tooltip } from "react-leaflet";
import { selectEvent } from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { divIcon } from "leaflet";
import "react-leaflet-markercluster/dist/styles.min.css";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import "./Map.css";
import markerStyles from "./CustomerMarker/CustomeMarker";
import getCityCoords from "./utils/utils";
moment().format();

const ClusterMarker = () => {
  const eventsInfo = useSelector((state) => state.eventsInfo);
  const [bounds, setBounds] = useState([0, 0, 0, 0]);
  const dispatch = useDispatch();

  const createClusterCustomIcon = (cluster) => {
    const count = cluster.getChildCount();

    let selectedInCluster = cluster
      .getAllChildMarkers()
      .map((marker) => marker.options.isSelected);

    if (selectedInCluster.includes("true")) {
      return divIcon({
        html: `<div>
              <span>${count}</span>
            </div>`,
        className: "marker-cluster selected",
      });
    } else {
      return divIcon({
        html: `<div>
              <span>${count}</span>
            </div>`,
        className: "marker-cluster",
      });
    }
  };

  const map = useMap();

  const mapEvent = useMapEvents({
    locationfound(e) {
      map.setView([e.latlng.lat, e.latlng.lng], 16);
    },
    async locationerror(e) {
      let data = await getCityCoords();
      map.setView([data.latitude, data.longitude], 10);
    },
  });

  useEffect(() => {
    mapEvent.locate();
  }, []);

  useEffect(() => {
    Object.keys(eventsInfo.selectedEvent) > 0 &&
      map.setView(
        [
          eventsInfo.selectedEvent.location.latitude,
          eventsInfo.selectedEvent.location.longitude,
        ],
        17
      );
    console.log(eventsInfo);
  }, [eventsInfo.selectedEvent]);

  return (
    <>
      <MarkerClusterGroup
        key={uuidv4()}
        iconCreateFunction={createClusterCustomIcon}
        spiderLegPolylineOptions={{
          weight: 0,
          opacity: 0,
        }}
      >
        {Array.isArray(eventsInfo.events) &&
          eventsInfo.toggleMyEvents === false &&
          eventsInfo.events.map((event, index) => {
            if (event && event.public) {
              return (
                <Marker
                  key={`event-${index}`}
                  data-id={event._id}
                  icon={
                    event._id === eventsInfo.selectedEvent._id
                      ? markerStyles.selectedCustomMarkerIcon
                      : markerStyles.customMarkerIcon
                  }
                  isSelected={
                    event._id === eventsInfo.selectedEvent._id
                      ? "true"
                      : "false"
                  }
                  position={[event.location.latitude, event.location.longitude]}
                  eventHandlers={{
                    click: () => {
                      dispatch(selectEvent(event));
                    },
                  }}
                >
                  <Tooltip>
                    <span>{event.name}</span>
                    <br />
                    <span>
                      {moment(event.date).format("dddd, MMMM Do YYYY")}
                    </span>
                    <br />
                    <span>{event.startTime}</span>
                  </Tooltip>
                </Marker>
              );
            }
          })}
        {Array.isArray(eventsInfo.events) &&
          eventsInfo.toggleMyEvents === true &&
          eventsInfo.myEvents.map((event, index) => {
            if (event) {
              return (
                <Marker
                  key={`event-${index}`}
                  data-id={event._id}
                  icon={
                    event._id === eventsInfo.selectedEvent._id
                      ? markerStyles.selectedCustomMarkerIcon
                      : markerStyles.customMarkerIcon
                  }
                  isSelected={
                    event._id === eventsInfo.selectedEvent._id
                      ? "true"
                      : "false"
                  }
                  position={[event.location.latitude, event.location.longitude]}
                  eventHandlers={{
                    click: () => {
                      dispatch(selectEvent(event));
                    },
                  }}
                >
                  <Tooltip>
                    <span>{event.name}</span>
                    <br />
                    <span>
                      {moment(event.date).format("dddd, MMMM Do YYYY")}
                    </span>
                    <br />
                    <span>{event.startTime}</span>
                  </Tooltip>
                </Marker>
              );
            }
          })}
      </MarkerClusterGroup>
    </>
  );
};

export default ClusterMarker;
