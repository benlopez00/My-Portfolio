'use client';
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import Link from 'next/link';

export default function AdditionalInfoOverlay() {
	return (
		<div className="p-2 w-full flex flex-col items-center font-sans bg-transparent">
			<div className="grid gap-6 z-40" style={{ gridTemplateColumns: 'repeat(4, 270px)', gridAutoRows: '270px' }}>
				<Card className="card col-span-2 row-span-2 p-8 bg-light2 dark:bg-dark2">
					<CardBody className="p-0 h-full flex flex-col items-start gap-5">
						<Typography variant="h2" className="font-nyght-serif font-[500]  text-light7 dark:text-dark7">
							Sobre mi
						</Typography>
						<div className="w-11/12 h-full flex flex-col justify-around">
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								Nací en Munich, Alemania, y fui criado en Argentina.
							</Typography>
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								Desde pequeño me apasiona la tecnología y los libros de historia (y los autos).
							</Typography>
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								Siempre me preguntaba como funcionaba el televisor que teníamos en el living o la radio del auto, el como las cosas iban evolucionando y mejorando.
							</Typography>	
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								Mi adolescencia fue marcada por el internet y los videojuegos. Y en el club Interact de mi ciudad encontré mi lugar diseñando posts para el comité de relaciones publicas.
							</Typography>
						</div>
					</CardBody>
				</Card>
				<Card className="col-span-1 row-span-2 card bg-light2 dark:bg-dark2 overflow-hidden">
					<img src="/berlinTvTower.jpg" alt="Big Ben" className="w-full h-full object-cover" />
				</Card>
				<Card className="col-span-1 row-span-2 card bg-light2 dark:bg-dark2 overflow-hidden">
					<img src="/trainTracks.jpg" alt="Big Ben" className="w-full h-full object-cover" />
				</Card>
				<Card className="col-span-1 row-span-2 card bg-light2 dark:bg-dark2 overflow-hidden">
					<img src="/bremenAerial.jpg" alt="Big Ben" className="w-full h-full object-cover" />
				</Card>
				<Card className="col-span-1 row-span-2 card bg-light2 dark:bg-dark2 overflow-hidden">
					<img src="/bremenNight.jpg" alt="Big Ben" className="w-full h-full object-cover" />
				</Card>
				<Card className="col-span-2 row-span-2 card p-8 bg-light2 dark:bg-dark2">
					<CardBody className="p-0 h-full">
						<div className="h-full flex flex-col justify-evenly">
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								Fue a través de Interact que participe de un intercambio estudiantil en Alemania, allí estuve 1 año en Bremen.
							</Typography>
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								Ya de vuelta en Tucuman y en la universidad, la pandemia me encontró sin mucho animo estudiando economía. Fue entonces que comencé a adentrarme en la programación y el diseño de interfaces
							</Typography>
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								A través de cursos y mucho aprendizaje por mi cuenta, fui explorando React, .NET y diseño UI, áreas que rápidamente se convirtieron en mi pasión y en el enfoque de mi desarrollo profesional.
							</Typography>
						</div>
					</CardBody>
				</Card>
				<Card className="col-span-2 row-span-2 card p-8 bg-light2 dark:bg-dark2">
					<CardBody className="p-0 h-full flex flex-col items-start gap-5">
						<div>
							<Typography variant="h2" className="font-nyght-serif font-[500]  text-light7 dark:text-dark7">
								Adata Software Gmbh
							</Typography>
							<Typography variant="h5" className="font-sans font-medium text-light5 dark:text-dark5">
								Jul '23 – Jun '24
							</Typography>
						</div>
						<div className="h-full flex flex-col justify-evenly">
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								Deseoso de visitar nuevamente Alemania, aplique a una visa working-holiday. Allí trabaje durante un año en Adata Software GmbH en Verden, Baja Sajonia.
							</Typography>
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								Me dediqué al desarrollo y soporte del Mitarbeiter Portal, un software de recursos humanos que ayuda a pequeñas y medianas empresas a gestionar su personal.
							</Typography>
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								Durante ese tiempo, me enfrenté a desafíos técnicos y creativos, pero cada tarea me dejó una enorme satisfacción.
							</Typography>
						</div>
					</CardBody>
				</Card>				
				<Card className="col-span-2 row-span-2 card p-8 bg-light2 dark:bg-dark2">
					<CardBody className="p-0 h-full flex flex-col items-start gap-5">
						<Typography variant="h2" className="font-nyght-serif font-[500]  text-light7 dark:text-dark7">
							Mi objetivo actual
						</Typography>
						<div className="h-full flex flex-col justify-evenly">
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								Estoy enfocado en seguir aprendiendo en las áreas donde necesito más preparación, como el despliegue y la publicación de sitios completos.
							</Typography>
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								Mi meta a corto plazo es dominar el proceso de hosting y publicación de aplicaciones, mientras refuerzo mis habilidades en .NET y ReactJS.
							</Typography>
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								A largo plazo, aspiro a liderar equipos de desarrollo y guiar a otros desarrolladores juniors, porque creo que mi experiencia y enfoque pueden marcar una diferencia en su crecimiento profesional.
							</Typography>
						</div>
					</CardBody>
				</Card>
				<Link href="/" className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
					<Button
						size="lg"
						className="bg-darkPrimary text-white hover:bg-green-500"
					>
						Volver
					</Button>
				</Link>
			</div>
		</div>
	);
}