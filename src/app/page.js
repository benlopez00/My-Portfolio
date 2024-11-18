'use client';
import { Card, CardHeader, CardBody, CardFooter, Typography, Button, } from "@material-tailwind/react";
import Image from "next/image";
import TechCarousel from "./components/TechCarousel";
import LocationMap from './components/LocationMap.js';
import BotonEstilo from "./components/BotonEstilo";

export default function Component() {
	return (
		<div className="min-h-screen p-2 w-screen flex flex-col items-center gap-1.5 bg-lightBackground dark:bg-darkBackground ">
			<div className="w-full h-10">
				<div className="flex flex-row justify-around">
					<div>
						<BotonEstilo/>					
					</div>
					<div>						
						<Button size="sm" variant="text"><Image src="/spain-svgrepo-com.svg" alt="Español" width={22} height={22}/></Button>
						<Button size="sm" variant="text"><Image src="/united-kingdom-uk-svgrepo-com.svg" alt="English" width={22} height={22}/></Button>
						<Button size="sm" variant="text"><Image src="/germany-svgrepo-com.svg" alt="Deutsch" width={22} height={22}/></Button>
					</div>
					<div>
						<Button size="sm" variant="text"><Image src="/spain-svgrepo-com.svg" alt="Español" width={22} height={22}/></Button>
						<Button size="sm" variant="text"><Image src="/united-kingdom-uk-svgrepo-com.svg" alt="English" width={22} height={22}/></Button>
						<Button size="sm" variant="text"><Image src="/germany-svgrepo-com.svg" alt="Deutsch" width={22} height={22}/></Button>
					</div>
				</div>
			</div>
			<div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(4, 270px)', gridAutoRows: '270px' }}>
				<Card className="col-span-1 row-span-1 card">
					<img src="/Big_Ben.jpg" alt="Big Ben" className="w-full h-full object-cover card" />
				</Card>
				<Card className="col-span-1 row-span-1 bg-blue-400 card p-4">
					<CardBody className="p-0">
						<Typography variant="h1">
							Hola, soy Ben
						</Typography>
						<Typography variant="paragraph">
							desarrollador full stack
						</Typography>
						<Typography variant="paragraph">
							Tucuman, Argentina
						</Typography>
					</CardBody>
				</Card>
				<Card className="col-span-2 row-span-1 bg-red-400 card p-4">
					<CardHeader floated={false}>
						<Typography variant="h1">
							Mi Stack
						</Typography>
					</CardHeader>
					<CardBody>
						<TechCarousel/>
					</CardBody>
				</Card>
				<Card className="col-span-1 row-span-1 bg-blue-400 card p-4 grid gap-5 justify-center content-center" style={{ gridTemplateColumns: 'repeat(2, 100px)', gridTemplateRows: 'repeat(2, 100px)' }}>
					<Card className="flex items-center justify-center">
						<a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="w-full h-full flex justify-center items-center rounded-xl">
							<img
								src="/logos/linkedin-svgrepo-com.svg"
								alt="LinkedIn"
								className="w-12 h-12"
							/>
						</a>
					</Card>
					<Card className="flex items-center justify-center">
						<a href="mailto:example@example.com" className="w-full h-full flex justify-center items-center rounded-xl">
							<img
								src="/logos/mail-svgrepo-com.svg"
								alt="Mail"
								className="w-12 h-12"
							/>
						</a>
					</Card>
					<Card className="flex items-center justify-center">
						<a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="w-full h-full flex justify-center items-center rounded-xl">
							<img
								src="/logos/instagram-svgrepo-com.svg"
								alt="Instagram"
								className="w-12 h-12"
							/>
						</a>
					</Card>
					<Card className="flex items-center justify-center">
						<a href="https://example.com/resume" target="_blank" rel="noopener noreferrer" className="w-full h-full flex justify-center items-center rounded-xl">
							<img
								src="/logos/document-svgrepo-com (1).svg"
								alt="Resume"
								className="w-12 h-12"
							/>
						</a>
					</Card>
				</Card>
				<Card className="col-span-1 row-span-2 bg-green-400 card p-4">
					<CardBody className="p-0">
						<Typography variant="h3">
							Hola
						</Typography>
						<Typography variant="paragraph">
							Soy un desarrollador autodidacta y colabor
						</Typography>
					</CardBody>
				</Card>
				<LocationMap/>
				<Card className="col-span-1 row-span-1 bg-blue-400 card p-4">
					<CardBody className="text-center">
					</CardBody>
				</Card>
				<Card className="card col-span-2 row-span-2 bg-white flex items-center p-3">
					<CardBody className="p-0">
						<Typography variant="h1">
							Experiencia
						</Typography>
						<Typography variant="h2">
							Adata Software Gmbh (Jul '23 – Jun '24)
						</Typography>
						<Typography>
							Entre el 2023 y el 2024 viví en Alemania y en ese tiempo trabajé un año para Adata de forma presencial en Verden (Baja Sajonia). Allí trabajé junto a 2 desarrolladores en el desarrollo y soporte del Mitarbeiter Portal. ¿Qué es el Mitarbeiter Portal? Es una herramienta integral de recursos humanos que ayuda a pequeñas y medianas empresas a gestionar su personal de manera eficiente. Desde administrar horarios hasta facilitar la comunicación interna, este portal es el corazón organizativo para muchos negocios. Durante ese tiempo, me enfrenté a desafíos técnicos y creativos, pero cada tarea me dejó una enorme satisfacción. Algunas de las contribuciones que hice son:
						</Typography>
					</CardBody>
				</Card>
				<Card className="card col-span-2 row-span-2 bg-white flex items-center p-3">
					<CardBody className="p-0">
						<Typography>
							- Rediseñar partes de la UI del Portal con ReactJS para mejorar la experiencia del usuario integrando bibliotecas como KendoUI y Bootstrap
							- Actualizar e implementar nuevas funcionalidades del backend de ASP.NET Core MVC para cumplir con las necesidades de los clientes
							- Implementar funcionalidades en Flutter utilizando Dart, conectando componentes móviles con sistemas backend en .NET a través de APIs RESTful.
							- Utilizar LINQ y HeidiSQL para realizar consultas eficientes a la base de datos y mejorar el rendimiento del sistema, asegurando escalabilidad y optimización de datos.
							- Trabajar en un entorno bajo metodologías Scrum, gestionando tareas en JIRA, participando en revisiones de código y aplicando mejores prácticas de desarrollo full-stack.
							Este año en Adata no solo me enseñó sobre tecnología; me mostró lo gratificante que es trabajar creando software que realmente marcan una diferencia para las personas.						</Typography>
					</CardBody>
				</Card>
			</div>
		</div>
	)
}