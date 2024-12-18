'use client';
import { Card } from '@material-tailwind/react';
import axios from 'axios';
import { Map, Marker } from '@vis.gl/react-maplibre';
import { useEffect, useState } from 'react';
import Clock from 'react-live-clock';
import { useTheme } from 'next-themes';

export default function LocationMap() {
	const [weather, setWeather] = useState(null);
	const { theme } = useTheme();
	const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

	useEffect(() => {
		const fetchWeather = async () => {
			try {
				const response = await axios.get(
					`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Tucuman&lang=es`
				);
				const data = response.data;
				setWeather({
					temp: Math.round(data.current.temp_c),
					condition: data.current.condition.text,
					icon: data.current.condition.icon,
				});
			} catch (error) {
				console.error(
					'Error al obtener los datos meteorológicos:',
					error
				);
			}
		};

		fetchWeather();
		const intervalId = setInterval(fetchWeather, 600000);
		return () => clearInterval(intervalId);
	}, [apiKey]);

	const mapStyle =
		theme === 'dark'
			? '/styles/dark_positron.json'
			: '/styles/light_positron.json';
	return (
		<Card className="card w-[140px] h-[140px] relative bg-transparent">
					<Map
						key={mapStyle}
						initialViewState={{
							longitude: -65.2038,
							latitude: -26.8303,
							zoom: 8,
							interactive: false,
						}}
						mapStyle={mapStyle}
						attributionControl={false}
					>
						<Marker
							longitude={-65.2038}
							latitude={-26.8303}
							pitchAlignment="map"
							offset={[0, 7]}
						>
							<img
								src="/location-circle-svgrepo-com.svg"
								alt="Custom Marker"
								className="w-8 h-8"
							/>
						</Marker>
					</Map>
			{weather && (
				<>
					<div className="h-8 w-10 opacity-80 absolute top-2 right-[7px] bg-white dark:bg-dark4 px-1.5 py-1 rounded-full flex items-center justify-center  shadow-md">
						<img
							src={weather.icon}
							alt={weather.condition}
							className="w-6 h-6"
						/>
					</div>

					<div className="h-8 w-22 opacity-80 absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white dark:bg-dark4 text-light7 dark:text-dark7 px-1.5 py-1 rounded-full text-[25px] flex items-center justify-evenly shadow-md">
						<div className="flex justify-center items-center w-10 !my-0 leading-none font-arrayreg text-[14px]">
							<Clock
								noSsr={false}
								format={'HH:mm'}
								ticking={true}
								timezone="America/Rosario"
							/>
						</div>
						<div className="flex justify-center items-center w-10 !my-0 !mx-0 leading-none font-arrayreg text-[14px]">
							<span>{weather.temp}°C</span>
						</div>
					</div>
				</>
			)}
		</Card>
	);
}
