'use client';
import { Card, CardHeader, CardBody, CardFooter, Typography, Button, } from "@material-tailwind/react";
import Image from "next/image";
import TechCarousel from "./components/TechCarousel";
import LocationMap from './components/LocationMap.js';
import BotonEstilo from "./components/BotonEstilo";

export default function Component() {
	return (
		<div className="min-h-screen p-2 w-screen flex flex-col items-center gap-1.5 bg-light3 dark:bg-dark1 font-sans">
			<div className="w-full h-16">
				<div className="flex flex-row justify-around">
					<div>
						<BotonEstilo/>					
					</div>
					<div>
						<Typography variant="h1" className="font-sans font-bold text-[rgb(31,31,31)] dark:text-[rgb(204,204,204)]">BEN LOPEZ</Typography>
					</div>
					<div>
						<Button size="sm" variant="text"><Image src="/spain-svgrepo-com.svg" alt="Español" width={22} height={22}/></Button>
						<Button size="sm" variant="text"><Image src="/united-kingdom-uk-svgrepo-com.svg" alt="English" width={22} height={22}/></Button>
						<Button size="sm" variant="text"><Image src="/germany-svgrepo-com.svg" alt="Deutsch" width={22} height={22}/></Button>
					</div>
				</div>
			</div>
			<div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(4, 270px)', gridAutoRows: '270px' }}>
				<Card className="col-span-1 row-span-1 card bg-light2 dark:bg-dark2">
					<img src="/Big_Ben.jpg" alt="Big Ben" className="w-full h-full object-cover card" />
				</Card>
				<Card className="col-span-1 row-span-1 card p-4 bg-light2 dark:bg-dark2">
					<CardBody className="p-0">
						<Typography variant="h1" className="font-sans font-bold text-[rgb(31,31,31)] dark:text-[rgb(204,204,204)]">
							Hola, soy Ben
						</Typography>
						<Typography variant="paragraph" className="font-sans text-[rgb(31,31,31)] dark:text-[rgb(204,204,204)]">
							desarrollador full stack
						</Typography>
						<Typography variant="paragraph" className="font-sans text-[rgb(31,31,31)] dark:text-[rgb(204,204,204)]">
							Tucuman, Argentina
						</Typography>
					</CardBody>
				</Card>
				<Card className="col-span-2 row-span-1 card p-4 bg-light2 dark:bg-dark2">
					<Typography variant="h1" className="font-sans font-bold text-[rgb(31,31,31)] dark:text-[rgb(204,204,204)]">
						Mi Stack
					</Typography>
					<CardBody>
						<TechCarousel/>
					</CardBody>
				</Card>
				<Card className="col-span-2 row-span-1 card p-4 bg-light2 dark:bg-dark2">
					<CardBody>
						<Typography className="font-sans text-[rgb(31,31,31)] dark:text-[rgb(204,204,204)]">
							Soy desarrollador full-stack con experiencia en **.NET**, **ReactJS** y **Flutter**, apasionado por construir soluciones funcionales y efectivas. Mi camino me llevó desde programar Arduinos hasta trabajar en Alemania para mejorar herramientas que hacen más fácil la vida de las personas ¿Quieres saber más sobre mi?
						</Typography>
					</CardBody>
				</Card>
				<Card className="col-span-1 row-span-1 card p-4 bg-light2 dark:bg-dark2 grid gap-5 justify-center content-center" style={{ gridTemplateColumns: 'repeat(2, 100px)', gridTemplateRows: 'repeat(2, 100px)' }}>
					<Card className="rounded-3xl flex items-center justify-center bg-light0 dark:bg-dark4 transition-all ease-in-out duration-700 hover:bg-blue-600 hover:dark:bg-blue-600">
						<a href="https://linkedin.com/in/ebenlopezavila00/" target="_blank" rel="noopener noreferrer" className="w-full h-full flex justify-center items-center rounded-xl">
							<img
								src="/logos/linkedin-svgrepo-com.svg"
								alt="LinkedIn"
								className="w-12 h-12"
							/>
						</a>
					</Card>
					<Card className="rounded-3xl flex items-center justify-center bg-light0 dark:bg-dark4 transition-all ease-in-out duration-700 hover:bg-amber-400 hover:dark:bg-amber-400">
						<a href="mailto:lopezavilaben00@gmail.com" className="w-full h-full flex justify-center items-center rounded-xl">
							<img
								src="/logos/mail-svgrepo-com.svg"
								alt="Mail"
								className="w-12 h-12"
							/>
						</a>
					</Card>
					<Card className="rounded-3xl flex items-center justify-center bg-light0 dark:bg-dark4 instagram-gradient">
						<a href="https://instagram.com/ben_fotos00/" target="_blank" rel="noopener noreferrer" className="w-full h-full flex justify-center items-center rounded-xl">
							<img
								src="/logos/instagram-svgrepo-com.svg"
								alt="Instagram"
								className="w-12 h-12"
							/>
						</a>
					</Card>
					<Card className="rounded-3xl flex items-center justify-center bg-light0 dark:bg-dark4 transition-all ease-in-out duration-700 hover:bg-green-400 hover:dark:bg-green-400">
						<a href="https://example.com/resume" target="_blank" rel="noopener noreferrer" className="w-full h-full flex justify-center items-center rounded-xl">
							<img
								src="/logos/document-svgrepo-com (1).svg"
								alt="Resume"
								className="w-12 h-12"
							/>
						</a>
					</Card>
				</Card>
				<Card className="col-span-1 row-span-2 card p-4 bg-light2 dark:bg-dark2">
					<CardBody className="p-0">
						<Typography variant="h3" className="font-sans font-bold text-[rgb(31,31,31)] dark:text-[rgb(204,204,204)]">
							Hola
						</Typography>
						<Typography variant="paragraph" className="font-sans text-[rgb(31,31,31)] dark:text-[rgb(204,204,204)]">
							Soy un desarrollador autodidacta y colabor
						</Typography>
					</CardBody>
				</Card>
				<LocationMap/>
				<Card className="col-span-1 row-span-1 card p-4 bg-light2 dark:bg-dark2">
					<CardBody className="text-center text-[rgb(31,31,31)] dark:text-[rgb(204,204,204)]">
					</CardBody>
				</Card>
				<Card className="card col-span-2 row-span-2 bg-light2 dark:bg-dark2 flex items-center p-3">
					<CardBody className="p-0">
						<Typography variant="h1" className="font-sans font-bold text-[rgb(31,31,31)] dark:text-[rgb(204,204,204)]">
							Experiencia
						</Typography>
						<Typography variant="h2" className="font-sans font-medium text-[rgb(31,31,31)] dark:text-[rgb(204,204,204)]">
							Adata Software Gmbh (Jul '23 – Jun '24)
						</Typography>
						<Typography className="font-sans text-[rgb(31,31,31)] dark:text-[rgb(204,204,204)]">
							Entre el 2023 y el 2024 viví en Alemania y en ese tiempo trabajé un año para Adata de forma presencial en Verden (Baja Sajonia). Allí trabajé junto a 2 desarrolladores en el desarrollo y soporte del Mitarbeiter Portal. ¿Qué es el Mitarbeiter Portal? Es una herramienta integral de recursos humanos que ayuda a pequeñas y medianas empresas a gestionar su personal de manera eficiente. Desde administrar horarios hasta facilitar la comunicación interna, este portal es el corazón organizativo para muchos negocios. Durante ese tiempo, me enfrenté a desafíos técnicos y creativos, pero cada tarea me dejó una enorme satisfacción. Algunas de las contribuciones que hice son:
						</Typography>
					</CardBody>
				</Card>
				<Card className="card col-span-2 row-span-2 bg-light2 dark:bg-dark2 flex items-center p-3">
					<CardBody className="p-0">
						<Typography className="font-sans text-[rgb(31,31,31)] dark:text-[rgb(204,204,204)]">
							- Rediseñar partes de la UI del Portal con ReactJS para mejorar la experiencia del usuario integrando bibliotecas como KendoUI y Bootstrap
							- Actualizar e implementar nuevas funcionalidades del backend de ASP.NET Core MVC para cumplir con las necesidades de los clientes
							- Implementar funcionalidades en Flutter utilizando Dart, conectando componentes móviles con sistemas backend en .NET a través de APIs RESTful.
							- Utilizar LINQ y HeidiSQL para realizar consultas eficientes a la base de datos y mejorar el rendimiento del sistema, asegurando escalabilidad y optimización de datos.
							- Trabajar en un entorno bajo metodologías Scrum, gestionando tareas en JIRA, participando en revisiones de código y aplicando mejores prácticas de desarrollo full-stack.
							Este año en Adata no solo me enseñó sobre tecnología; me mostró lo gratificante que es trabajar creando software que realmente marcan una diferencia para las personas.
						</Typography>
					</CardBody>
				</Card>
				<Card className="col-span-2 row-span-2 bg-light2 dark:bg-dark2 card p-4">
					<CardBody>
						<Typography variant="h1" className="font-sans font-bold text-[rgb(31,31,31)] dark:text-[rgb(204,204,204)]">
							Mi objetivo actual
						</Typography>
						<Typography className="font-sans text-[rgb(31,31,31)] dark:text-[rgb(204,204,204)]">
							Estoy enfocado en seguir aprendiendo en las áreas donde necesito más preparación, como el despliegue y la publicación de sitios completos. Mi meta a corto plazo es dominar el proceso de hosting y publicación de aplicaciones, mientras refuerzo mis habilidades en **.NET** y **ReactJS**. A largo plazo, aspiro a liderar equipos de desarrollo y guiar a otros desarrolladores juniors, porque creo que mi experiencia y enfoque pueden marcar una diferencia en su crecimiento profesional.
						</Typography>
					</CardBody>
				</Card>
				<Card className="card col-span-2 row-span-2 bg-light2 dark:bg-dark2 flex items-center p-3">
					<CardBody className="p-0">
						<Typography variant="h1" className="font-sans font-bold text-[rgb(31,31,31)] dark:text-[rgb(204,204,204)]">
							Sobre mi
						</Typography>
						<Typography className="font-sans text-[rgb(31,31,31)] dark:text-[rgb(204,204,204)]"> 
							¡Hola! Soy un desarrollador **organizado, disciplinado y metódico**, apasionado por crear soluciones tecnológicas que sean tanto funcionales como estéticamente agradables. Mi camino en la programación comenzó con Arduinos y poco a poco fui construyendo habilidades en herramientas como **ReactJS** y **.NET Core**, que me permiten desarrollar interfaces intuitivas respaldadas por un backend sólido. Los videojuegos, las redes sociales y la curiosidad natural por entender cómo funcionan las cosas me llevaron al mundo de la tecnología. Me inspiran los diseños funcionales y eficaces, y trato de aplicar esos principios en todo lo que desarrollo, desde la lógica backend hasta la experiencia del usuario.
						</Typography>
					</CardBody>
				</Card>
				<Card className="card col-span-2 row-span-2 bg-light2 dark:bg-dark2 flex items-center p-3">
					<CardBody className="p-0">
						<Typography className="font-sans text-[rgb(31,31,31)] dark:text-[rgb(204,204,204)]"> 
							Cuando no estoy programando, me encontrarás leyendo libros sobre economía, ciencia o historia, o disfrutando de la música de **AC/DC**, algo de rap alemán o incluso country americano. Me atraen las sociedades organizadas y funcionales como Alemania (¡y también me encanta el frío!). Creo firmemente que la funcionalidad debe ser la base de cualquier diseño, y que la creatividad debe complementar esa funcionalidad, no competir con ella. Mi objetivo siempre es facilitar la vida a las personas, ya sea resolviendo necesidades que no tenían solución o mejorando las opciones existentes con una experiencia de usuario de calidad.
						</Typography>
					</CardBody>
				</Card>
			</div>
		</div>
	)
}