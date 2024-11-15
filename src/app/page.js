'use client';
import { Card, CardHeader, CardBody, CardFooter, Typography, Button, } from "@material-tailwind/react";
import Image from "next/image";
import TechCarousel from "./components/TechCarousel";
import LocationMap from './components/LocationMap.js';

export default function Component() {
	const fotos = [
		"/logos/bootstrap-svgrepo-com.svg", 
		"/logos/dot-net.svg", 
		"/logos/figma-svgrepo-com.svg", 
		"/logos/github-142-svgrepo-com.svg", 
		"/logos/jira-svgrepo-com.svg", "/logos/next.svg", 
		"/logos/nextjs-svgrepo-com.svg", 
		"/logos/nodejs-svgrepo-com.svg", 
		"/logos/progress-blog-default-logo-transparent.png",
		"/logos/react-svgrepo-com.svg", 
		"/logos/sass-svgrepo-com.svg", 
		"/logos/slack-svgrepo-com.svg", 
		"/logos/sql-svgrepo-com.svg", 
		"/logos/tailwind-svgrepo-com.svg"
	]
	return (
		<div className="min-h-screen p-2 w-screen flex flex-col items-center gap-1.5" style={{backgroundColor: 'rgb(247, 242, 242)'}}>
			<div className="w-full h-10">
				<div className="flex flex-row justify-around">
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
						<Typography variant="h4">
							Hola, soy Ben
						</Typography>
						<Typography variant="paragraph">
							un desarrollador web argentino.
						</Typography>
						<Typography variant="paragraph">
							Me dedico a construir experiencias digitales que combinan funcionalidad y simplicidad para el usuario.
						</Typography>
					</CardBody>
				</Card>
				<Card className="card col-span-2 row-span-2 bg-white flex items-center p-3">
					<CardBody className="p-0">
						<Typography variant="h2">
							Qué hago
						</Typography>
						<div>
							<ul>
								<li># Backend con .NET y C#: Desarrollo de soluciones sólidas con .NET Core y ASP.NET MVC.</li>
								<li># Frontend con ReactJS y Redux: Diseño de interfaces dinámicas, reutilizables y optimizadas para la gestión de estados.</li>
								<li># Aplicaciones Móviles con Flutter: Experiencia en crear aplicaciones desde cero con Flutter, integrando soporte offline y almacenamiento local con SQLite.</li>
								<li># Consultas Eficientes: Experiencia en LINQ y SQL para manejo de bases de datos.</li>
								<li># UI con Material Design y Bootstrap: Creación de interfaces limpias y funcionales para distintos dispositivos.</li>
								<li># Trabajo en equipo y colaboración: Experiencia trabajando en entornos colaborativos y metodologías ágiles.</li>
							</ul>
						</div>
					</CardBody>
				</Card>
				<Card className="col-span-2 row-span-1 bg-red-400 card p-4">
					<CardBody>
						<h2 className="text-lg font-bold mb-4">My Tech Stack</h2>
						<TechCarousel images={fotos} />
					</CardBody>
				</Card>
				<Card className="col-span-1 row-span-1 bg-blue-400 card p-4">
					<CardBody className="text-center">
						<Typography variant="h3">
							Hola
						</Typography>
					</CardBody>
				</Card>
				<Card className="col-span-1 row-span-3 bg-green-400 card p-4">
					<CardBody className="p-0">
						<Typography variant="h3">
							Hola
						</Typography>
						<Typography variant="paragraph">
							Soy un desarrollador autodidacta y colaborador comprometido que se adapta rápidamente a nuevos entornos y desafíos tecnológicos. Mi experiencia en Alemania desarrollando aplicaciones clave en Flutter y ReactJS me ha permitido entender la importancia de un código limpio y de la experiencia del usuario. Disfruto de trabajar en equipo, donde puedo aportar mis conocimientos y aprender de otros. Busco oportunidades para seguir creciendo, aportar y hacer una diferencia en proyectos que tengan un impacto positivo en los usuarios.
						</Typography>
					</CardBody>
				</Card>
				<Card className="card col-span-2 row-span-2 bg-white flex items-center p-4">
					<CardBody className="p-0">
						<Typography variant="h2">
							Experiencia
						</Typography>
						<Typography variant="lead">
							Adata Software GmbH, Alemania (Jul '23 – Jun '24):
						</Typography>
						<Typography variant="paragraph">
							Desarrollador Full Stack contribuyendo en el diseño y optimización de interfaces con ReactJS y Redux, así como en el desarrollo de una app móvil con Flutter. Integré APIs RESTful para conectar backend en .NET con Flutter y ReactJS, mejorando tanto el rendimiento del sistema como la experiencia del usuario.
							Principales Logros:
						</Typography>
						<div>
							<ul>
								<li># Rediseño del Portal Mitarbeiter para hacerlo responsive y dinámico.</li>
								<li># Desarrollo de soluciones escalables y reutilizables en .NET y ReactJS.</li>
								<li># Implementación de metodologías Agile/Scrum para gestionar y ptiorizar tareas.</li>
							</ul>
						</div>
					</CardBody>
				</Card>
				<LocationMap/>
			</div>
		</div>
	)
}