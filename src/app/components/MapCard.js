import { Card } from '@material-tailwind/react';
import { Map, Marker } from '@vis.gl/react-maplibre';

export default function LocationMap() {

	return (
		<Card className="col-span-1 card w-[250px] h-[250px]">
			<Map
				initialViewState={{
					longitude: -65.2038,
					latitude: -26.8303,
					zoom: 9,
					interactive: false
				}}
				mapStyle="https://tiles.openfreemap.org/styles/bright"
				//mapStyle="/styles/dark.json"
				style={{ width: '250px', height: '250px' }}
			>
				<Marker longitude={-65.2038} latitude={-26.8303} pitchAlignment="map">
				</Marker>
			</Map>
		</Card>
	);
}
