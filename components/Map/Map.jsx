import {
	Marker,
	GoogleMap,
	withScriptjs,
	withGoogleMap,
} from "react-google-maps";

// 31.440192501079878, 31.67835165277682

const MapGoogle = () => {
	return (
		<GoogleMap
			defaultZoom={15}
			defaultCenter={{ lat: 31.440192501079878, lng: 31.67835165277682 }}
		>
			<Marker position={{ lat: 31.440192501079878, lng: 31.67835165277682 }} />
		</GoogleMap>
	);
};

const MapWrapper = withScriptjs(withGoogleMap(MapGoogle));

const API_KEY = "AIzaSyB1rYD_znfOrNZ4nnZySKTHQUMbJAvTXBI";

const Map = () => {
	return (
		<div className="w-100 mt-4" style={{ height: "50vh" }}>
			<MapWrapper
				googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`}
				loadingElement={<div className="spinner-border" role="status" />}
				containerElement={<div className="h-100" />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		</div>
	);
};

export default Map;
