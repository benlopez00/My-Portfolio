import { Card } from '@material-tailwind/react';
import axios from "axios";
import { Map, Marker } from '@vis.gl/react-maplibre';
import { useEffect, useState } from "react";
import Clock from 'react-live-clock';

export default function LocationMap() {
	const [weather, setWeather] = useState(null);
	const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
	useEffect(() => {
	const fetchWeather = async () => {
		try {
		const response = await axios.get(
			`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Tucuman&lang=es`
		);
		const data = response.data;
		setWeather({
			temp: data.current.temp_c,
			condition: data.current.condition.text,
			icon: data.current.condition.icon,
		});
		} catch (error) {
			console.error("Error al obtener los datos meteorológicos:", error);
		}
	};

		fetchWeather();
		const intervalId = setInterval(fetchWeather, 600000);
		return () => clearInterval(intervalId);
	}, []);
	return (
		<Card className="col-span-1 overflow-hidden card w-[250px] h-[250px]">
			<Map
				initialViewState={{
					longitude: -65.2038,
					latitude: -26.8303,
					zoom: 8,
					interactive: false
				}}
				mapStyle="https://tiles.openfreemap.org/styles/bright"
				//mapStyle="/styles/dark.json"
				style={{ width: '250px', height: '250px' }}
				attributionControl={false}
			>
				<Marker longitude={-65.2038} latitude={-26.8303} pitchAlignment="map"></Marker>
			</Map>
			{weather && (
				<div className="absolute bottom-2 right-2 bg-white/80 text-gray-800 p-1 rounded-full text-xs flex items-center space-x-1 shadow-md">
					<Clock format={'h:mma'} ticking={true} timezone="America/Rosario"/>
					<span>{weather.temp}°C</span>
					<img src={weather.icon} alt={weather.condition} className="w-8 h-8" />
				</div>
			)}
		</Card>
	);
}
