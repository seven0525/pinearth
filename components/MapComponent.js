import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

const MapComponent = compose(
    withProps({
        /**
         * Note: create and replace your own key in the Google console.
         * https://console.developers.google.com/apis/dashboard
         * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
         */
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyDbAOtIl2hgmopE9sk4K95XqUVxjrTfsRw&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap defaultZoom={5} defaultCenter={{ lat: 35.6895, lng: 139.6917 }}>
        {/*{props.isMarkerShown && (*/}
            {/*<Marker position={{ lat: -34.397, lng: 150.644 }} />*/}
        {/*)}*/}
        <Marker position={{ lat: props.ido, lng: props.keido }} />
    </GoogleMap>
));

export default MapComponent;