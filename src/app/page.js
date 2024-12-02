'use client';
import { Card, CardHeader, CardBody, CardFooter, Typography, Button, } from "@material-tailwind/react";
import Image from "next/image";
import TechCarousel from "./components/TechCarousel";
import LocationMap from './components/LocationMap.js';
import Link from 'next/link';

export default function Component() {
	return (
		<div className="p-2 w-full flex flex-col items-center bg-light3 dark:bg-dark1 font-sans">
			<div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(4, 270px)', gridAutoRows: '270px' }}>
				<Card className="col-span-1 row-span-1 card bg-light2 dark:bg-dark2">
					<img src="/Big_Ben.jpg" alt="Big Ben" className="w-full h-full object-cover card" />
				</Card>
				<Card className="col-span-1 row-span-1 card p-8 bg-light2 dark:bg-dark2">
					<CardBody className="p-0 h-full flex flex-col items-start gap-10">
						<div>
							<Typography variant="h4" className="font-sans font-medium text-light7 dark:text-dark7">
								¡Hola🖖!
							</Typography>
						</div>
						<div>
							<Typography variant="h2" className="font-sans font-medium text-light7 dark:text-dark7">
								Soy Ben
							</Typography>
						</div>
						<div>
							<Typography variant="small" className="font-sans font-light text-light7 dark:text-dark7">
								Desarrollador Full Stack
							</Typography>
							<Typography variant="small" className="font-sans font-light text-light7 dark:text-dark7">
								🌐Tucuman, Argentina
							</Typography>
						</div>
					</CardBody>
				</Card>
				<Card className="col-span-2 row-span-1 card p-8 bg-light2 dark:bg-dark2">
					<CardBody className="p-0 h-full flex flex-col items-start gap-9">
						<Typography variant="h2" className="font-sans font-medium text-light7 dark:text-dark7">
							Mi Stack
						</Typography>
						<TechCarousel/>
					</CardBody>
				</Card>
				<Card className="col-span-2 row-span-1 card p-8 bg-light2 dark:bg-dark2">
					<CardBody className="p-0 h-full flex flex-col items-start gap-10">
						<div className="w-full flex space justify-between">
							<Typography variant="h2" className="font-sans font-medium text-light7 dark:text-dark7">
								Mas sobre mi
							</Typography>
							<Link href="/additional-info">
								<Button variant="text" size="sm" className="bg-light2 dark:bg-dark2 p-5 text-white hover:bg-darkPrimary dark:hover:bg-darkPrimary  group">
									<img
										src="/logos/open-in-browser-svgrepo-com.svg"
										alt="Open Tab"
										className="w-6 h-6 filter group-hover:invert dark:invert"
									/>
								</Button>
							</Link>
						</div>
						<div className="flex flex-col gap-2">
							<Typography variant="small" className="font-sans font-light text-light7 dark:text-dark7">
								💼 Cuento con experiencia en .NET, ReactJS y Flutter
							</Typography>
							<Typography variant="small" className="font-sans font-light text-light7 dark:text-dark7">
								🚦 Desde programar Arduinos hasta trabajar en Alemania
							</Typography>
							<Typography variant="small" className="font-sans font-light text-light7 dark:text-dark7">
								📈 Siempre buscando mejorar y aprender algo nuevo
							</Typography>
						</div>
					</CardBody>
				</Card>
				<LocationMap/>
				<Card className="col-span-1 row-span-1 card p-4 bg-light2 dark:bg-dark2 grid gap-5 justify-center content-center" style={{ gridTemplateColumns: 'repeat(2, 100px)', gridTemplateRows: 'repeat(2, 100px)' }}>
					<Card shadow={false} className="rounded-3xl flex items-center justify-center bg-light0 dark:bg-dark4 transition-all ease-in-out duration-300 hover:bg-green-400 hover:dark:bg-green-400">
						<a href="https://example.com/resume" target="_blank" rel="noopener noreferrer" className="w-full h-full flex justify-center items-center rounded-xl group">
							<img
								src="/logos/document-svgrepo-com (1).svg"
								alt="Resume"
								className="w-12 h-12 filter group-hover:invert dark:invert"
							/>
						</a>
					</Card>
					<Card shadow={false} className="rounded-3xl flex items-center justify-center bg-light0 dark:bg-dark4 transition-all ease-in-out duration-300 hover:bg-blue-600 hover:dark:bg-blue-600">
						<a href="https://linkedin.com/in/ebenlopezavila00/" target="_blank" rel="noopener noreferrer" className="w-full h-full flex justify-center items-center rounded-xl group">
							<img
								src="/logos/linkedin-svgrepo-com.svg"
								alt="LinkedIn"
								className="w-12 h-12 filter group-hover:invert dark:invert"
							/>
						</a>
					</Card>
					<Card shadow={false} className="rounded-3xl flex items-center justify-center bg-light0 dark:bg-dark4 transition-all ease-in-out duration-300 hover:bg-amber-500 hover:dark:bg-amber-500">
						<a href="mailto:lopezavilaben00@gmail.com" className="w-full h-full flex justify-center items-center rounded-xl group">
							<img
								src="/logos/mail-svgrepo-com.svg"
								alt="Mail"
								className="w-12 h-12 filter group-hover:invert dark:invert"
							/>
						</a>
					</Card>
					<Card shadow={false} className="rounded-3xl flex items-center justify-center bg-light0 dark:bg-dark4 instagram-gradient">
						<a href="https://instagram.com/ben_fotos00/" target="_blank" rel="noopener noreferrer" className="w-full h-full flex justify-center items-center rounded-xl group">
							<img
								src="/logos/instagram-svgrepo-com.svg"
								alt="Instagram"
								className="w-12 h-12 filter group-hover:invert dark:invert"
							/>
						</a>
					</Card>
				</Card>
				<Card className="col-span-2 row-span-1 card p-8 bg-light2 dark:bg-dark2">
					<CardBody className="p-0 h-full flex flex-col items-start gap-10">
						<div className="w-full flex space justify-between">
							<Typography variant="h2" className="font-sans font-medium text-light7 dark:text-dark7">
								Mi experiencia
							</Typography>
							<Link href="/experiencia">
								<Button variant="text" size="sm" className="bg-light2 dark:bg-dark2 p-5 text-white hover:bg-darkPrimary dark:hover:bg-darkPrimary  group">
									<img
										src="/logos/open-in-browser-svgrepo-com.svg"
										alt="Open Tab"
										className="w-6 h-6 filter group-hover:invert dark:invert"
									/>
								</Button>
							</Link>
						</div>
						<div className="flex flex-col gap-2">
							<Typography variant="small" className="font-sans font-light text-light7 dark:text-dark7">
								🥨 Un año trabajando en herramientas de RRHH para empresas.
							</Typography>
							<Typography variant="small" className="font-sans font-light text-light7 dark:text-dark7">
								💎 Mejoré la UX rediseñando interfaces clave.
							</Typography>
							<Typography variant="small" className="font-sans font-light text-light7 dark:text-dark7">
								💻 Implementé y actualicé funcionalidades en frontend, backend y móviles.
							</Typography>
						</div>
					</CardBody>
				</Card>
			</div>
		</div>
	)
}