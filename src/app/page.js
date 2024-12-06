'use client';
import { Card, CardBody, Typography, Button, } from "@material-tailwind/react";
import TechCarousel from "./components/TechCarousel";
import LocationMap from './components/LocationMap.js';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';

export default function Component() {
	return (
		<div className="p-2 w-full flex flex-col items-center font-sans bg-transparent">
			<div className="grid gap-6 z-20" style={{ gridTemplateColumns: 'repeat(4, 270px)', gridAutoRows: '270px' }}>
				<Card className="col-span-1 row-span-1 card bg-light2 dark:bg-dark2">
					<img src="/Big_Ben.jpg" alt="Big Ben" className="w-full h-full object-cover card" />
				</Card>
				<Card className="col-span-1 row-span-1 card p-8 bg-light2 dark:bg-dark2">
					<CardBody className="p-0 h-full flex flex-col items-start justify-between">
						<div>
							<Typography variant="h4" className="font-sans font-normal text-light7 dark:text-dark7">
								¡Hola🖖!
							</Typography>
						</div>
						<div>
							<Typography variant="h2" className="font-nyght-serif font-[500]  text-light7 dark:text-dark7">
								Soy Ben
							</Typography>
						</div>
						<div>
							<Typography className="font-sans text-[16px] text-light7 dark:text-dark7">
								Desarrollador Full Stack
							</Typography>
							<Typography className="font-sans text-[16px] text-light7 dark:text-dark7">
								Diseñador UI
							</Typography>
						</div>
					</CardBody>
				</Card>
				<Card className="col-span-2 row-span-1 card p-8 bg-light2 dark:bg-dark2">
					<CardBody className="p-0 h-full flex flex-col items-start gap-9">
						<Typography variant="h2" className="font-nyght-serif font-[500]  text-light7 dark:text-dark7">
							Mi Stack
						</Typography>
						<TechCarousel/>
					</CardBody>
				</Card>
				<Card className="col-span-2 row-span-1 card p-8 bg-light2 dark:bg-dark2">
					<CardBody className="p-0 h-full flex flex-col items-center">
						<div className="w-11/12 h-full flex flex-col justify-around">
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								Soy desarrollador web especializado en .NET, React y Flutter, apasionado por crear soluciones innovadoras que combinan funcionalidad y diseño.
							</Typography>
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								Con experiencia en proyectos frontend y backend, disfruto trabajando en equipo y superando retos tecnológicos para entregar productos de alta calidad.
							</Typography>
						</div>
					</CardBody>
				</Card>
				<LocationMap/>
				<Card className="col-span-1 row-span-1 card p-4 bg-light2 dark:bg-dark2 grid gap-5 justify-center content-center" style={{ gridTemplateColumns: 'repeat(2, 100px)', gridTemplateRows: 'repeat(2, 100px)' }}>
					<Card shadow={false} className="rounded-3xl flex items-center justify-center bg-light0 dark:bg-dark4 transition-all ease-in-out duration-300 hover:bg-green-400 hover:dark:bg-green-400">
						<a href="https://example.com/resume" target="_blank" rel="noopener noreferrer" className="w-full h-full flex justify-center items-center rounded-xl group">
							<ReactSVG src="/iconos/DocLogo.svg" className="w-12 h-12 fill-light6 dark:fill-dark7 transition-fill duration-300 group-hover:fill-white"/>
						</a>
					</Card>
					<Card shadow={false} className="rounded-3xl flex items-center justify-center bg-light0 dark:bg-dark4 transition-all ease-in-out duration-300 hover:bg-blue-600 hover:dark:bg-blue-600">
						<a href="https://linkedin.com/in/ebenlopezavila00/" target="_blank" rel="noopener noreferrer" className="w-full h-full flex justify-center items-center rounded-xl group">
							<ReactSVG src="/iconos/LinkedinLogo.svg" className="w-12 h-12 fill-light6 dark:fill-dark7 transition-fill duration-300 group-hover:fill-white"/>
						</a>
					</Card>
					<Card shadow={false} className="rounded-3xl flex items-center justify-center bg-light0 dark:bg-dark4 transition-all ease-in-out duration-300 hover:bg-amber-500 hover:dark:bg-amber-500">
						<a href="mailto:lopezavilaben00@gmail.com" className="w-full h-full flex justify-center items-center rounded-xl group">
							<ReactSVG src="/iconos/MailLogo.svg" className="w-12 h-12 fill-light6 dark:fill-dark7 transition-fill duration-300 group-hover:fill-white"/>
						</a>
					</Card>
					<Card shadow={false} className="rounded-3xl flex items-center justify-center bg-light0 dark:bg-dark4 instagram-gradient">
						<a href="https://instagram.com/ben_fotos00/" target="_blank" rel="noopener noreferrer" className="w-full h-full flex justify-center items-center rounded-xl group">
							<ReactSVG src="/iconos/InstaLogo.svg" className="w-12 h-12 fill-light6 dark:fill-dark7 transition-fill duration-300 group-hover:fill-white"/>
						</a>
					</Card>
				</Card>	
				<Card className="col-span-2 row-span-1 card bg-light2 dark:bg-dark2 overflow-hidden">
					<Link href="/additional-info" className="w-full h-full card p-8 group">
						<CardBody className="p-0 h-full flex flex-col items-start justify-between">
							<div className="w-full flex justify-between items-center">
								<Typography variant="h2" className="font-nyght-serif font-[500]  text-light7 dark:text-dark7">
									Más sobre mí
								</Typography>
								<div className="rounded-full p-3">
									<ReactSVG src="/iconos/OpenTab.svg" className="w-6 h-6 fill-light7 dark:fill-dark7 transition-fill duration-300 group-hover:fill-green-500 group-hover:-translate-y-1"/>
								</div>
							</div>
							<div className="w-full flex flex-col items-start justify-between gap-2 mb-5">
								<Typography className="font-sans text-[16px] text-light7 dark:text-dark7">
									🚦 Desde programar Arduinos hasta trabajar en Alemania.
								</Typography>
								<Typography className="font-sans text-[16px] text-light7 dark:text-dark7">
									🔍 Me encanta encontrar la mejor solución para cada desafío.
								</Typography>
								<Typography className="font-sans text-[16px] text-light7 dark:text-dark7">
									📈 Siempre buscando mejorar y aprender algo nuevo.
								</Typography>
							</div>
						</CardBody>
						<div className="absolute inset-0 card transition-shadow duration-300 group-hover:shadow-[inset_0px_29px_18px_-20px_rgba(76,175,80,0.5)] pointer-events-none"></div>
					</Link>
				</Card>
				<Card className="col-span-2 row-span-1 card p-8 bg-light2 dark:bg-dark2">
					<CardBody className="p-0 h-full flex flex-col justify-between">
					<div className="w-full flex justify-between items-center">
							<Typography variant="h2" className="font-nyght-serif font-[500]  text-light7 dark:text-dark7">
								Mi experiencia
							</Typography>
							<div className="w-32 h-8 rounded-2xl p-1 bg-light4 dark:bg-dark4 flex flex-row justify-around items-center">
								<Typography className="font-sans text-[14px] font-normal text-green-500">
									Disponible
								</Typography>
								<span className="relative flex h-3 w-3">
									<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
									<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
								</span>
							</div>
						</div>
						<Link href="/experiencia" passHref>
							<div className="w-full flex flex-row items-center justify-between card bg-light3 dark:bg-dark4 group relative cursor-pointer rounded-lg">
								<div className="h-full flex flex-col justify-around p-8">
									<Typography className="font-sans text-[20px] font-semibold text-light7 dark:text-dark7">
										Adata Software GmbH
									</Typography>
									<Typography className="font-sans text-[16px] text-light7 dark:text-dark7">
										Desarrollador ASP.NET Core
									</Typography>
									<Typography className="font-sans text-[16px] text-light6 dark:text-dark6">
										Julio 2023 - Junio 2024
									</Typography>
								</div>
								<div className="h-full flex flex-col justify-around p-8">
									<ReactSVG src="/iconos/OpenTab.svg" className="w-6 h-6 fill-light7 dark:fill-dark7 transition-fill duration-300 group-hover:fill-green-500 group-hover:-translate-y-1"/>
								</div>
								<div className="absolute inset-0 card transition-shadow duration-300 group-hover:shadow-[inset_0px_29px_18px_-20px_rgba(76,175,80,0.5)] pointer-events-none"></div>
							</div>
						</Link>
					</CardBody>
				</Card>
			</div>
		</div>
	)
}