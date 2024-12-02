'use client';
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import Link from 'next/link';

export default function AdditionalInfoOverlay() {
	return (
		<div className="p-2 w-full flex flex-col items-center bg-light3 dark:bg-dark1 font-sans">
			<div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(4, 270px)', gridAutoRows: '270px' }}>
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
				<Card className="col-span-2 row-span-1 bg-light2 dark:bg-dark2 card p-4 flex items-center justify-center">
					<Link href="/">
						<Button size="lg" className="bg-blue-500 text-white hover:bg-blue-600">
							Volver
						</Button>
					</Link>
				</Card>
				
				<Card className="card col-span-2 row-span-2 bg-light2 dark:bg-dark2 flex items-center p-3">
					<CardBody className="p-0">
						<Typography variant="h1" className="font-sans font-bold text-light7 dark:text-dark7">
							Experiencia
						</Typography>
						<Typography variant="h2" className="font-sans font-medium text-light7 dark:text-dark7">
							Adata Software Gmbh (Jul '23 – Jun '24)
						</Typography>
						<Typography className="font-sans text-light7 dark:text-dark7">
							Entre el 2023 y el 2024 viví en Alemania y en ese tiempo trabajé un año para Adata de forma presencial en Verden (Baja Sajonia). Allí trabajé junto a 2 desarrolladores en el desarrollo y soporte del Mitarbeiter Portal. ¿Qué es el Mitarbeiter Portal? Es una herramienta integral de recursos humanos que ayuda a pequeñas y medianas empresas a gestionar su personal de manera eficiente. Desde administrar horarios hasta facilitar la comunicación interna, este portal es el corazón organizativo para muchos negocios. Durante ese tiempo, me enfrenté a desafíos técnicos y creativos, pero cada tarea me dejó una enorme satisfacción. Algunas de las contribuciones que hice son:
						</Typography>
					</CardBody>
				</Card>
				<Card className="col-span-2 row-span-2 bg-light2 dark:bg-dark2 card p-4">
					<CardBody>
						<Typography variant="h1" className="font-sans font-bold text-light7 dark:text-dark7">
							Mi objetivo actual
						</Typography>
						<Typography className="font-sans text-light7 dark:text-dark7">
							Estoy enfocado en seguir aprendiendo en las áreas donde necesito más preparación, como el despliegue y la publicación de sitios completos. Mi meta a corto plazo es dominar el proceso de hosting y publicación de aplicaciones, mientras refuerzo mis habilidades en **.NET** y **ReactJS**. A largo plazo, aspiro a liderar equipos de desarrollo y guiar a otros desarrolladores juniors, porque creo que mi experiencia y enfoque pueden marcar una diferencia en su crecimiento profesional.
						</Typography>
					</CardBody>
				</Card>
			</div>
		</div>
	);
}