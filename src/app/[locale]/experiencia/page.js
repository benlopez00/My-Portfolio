'use client';
import {
	Card,
	CardBody,
	Typography,
	Button,
	Carousel,
	IconButton,
} from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';

export default function AdditionalInfoOverlay() {
	return (
		<div className="p-2 w-full flex flex-col items-center font-sans bg-transparent">
			<div
				className="grid gap-6 z-40"
				style={{
					gridTemplateColumns: 'repeat(4, 270px)',
					gridAutoRows: '270px',
				}}
			>
				<Card className="col-span-2 row-span-2 card py-8 px-12 bg-light2 dark:bg-dark2">
					<CardBody className="p-0 h-full flex flex-col items-start gap-5">
						<div>
							<Typography
								variant="h2"
								className="font-nyght-serif font-[500]  text-light7 dark:text-dark7"
							>
								Adata Software Gmbh
							</Typography>
							<Typography
								variant="h5"
								className="font-sans font-medium text-light5 dark:text-dark5"
							>
								JUL '23 – JUN '24
							</Typography>
						</div>
						<div className="w-full h-full flex flex-col text-justify justify-center gap-10">
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								Trabajé un año para Adata de forma presencial en
								Verden (Baja Sajonia). Allí trabajé junto a 2
								desarrolladores en el desarrollo y soporte del
								Mitarbeiter Portal.
							</Typography>
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								¿Qué es el Mitarbeiter Portal? Es una
								herramienta integral de recursos humanos que
								ayuda a pequeñas y medianas empresas a gestionar
								su personal de manera eficiente. Desde
								administrar horarios hasta facilitar la
								comunicación interna, este portal es el corazón
								organizativo para muchos negocios.
							</Typography>
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								Este año en Adata no solo me enseñó sobre
								tecnología; me permitió comprender el impacto
								tangible que un software bien diseñado puede
								tener en la vida laboral de sus usuarios.
							</Typography>
						</div>
					</CardBody>
				</Card>
				<Card className="col-span-2 row-span-1 card p-0 bg-light2 dark:bg-dark2 overflow-hidden">
					<CardBody className="p-0 h-full flex flex-col items-start gap-4 overflow-hidden">
						<Carousel
							className="h-full bottom-2"
							prevArrow={({ handlePrev }) => (
								<IconButton
									variant="text"
									color="white"
									size="lg"
									onClick={handlePrev}
									className="!absolute top-1/2 left-2 -translate-y-[47%]"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={2}
										stroke="currentColor"
										className="h-6 w-6 stroke-light6 dark:stroke-dark7"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
										/>
									</svg>
								</IconButton>
							)}
							nextArrow={({ handleNext }) => (
								<IconButton
									variant="text"
									color="white"
									size="lg"
									onClick={handleNext}
									className="!absolute top-1/2 !right-2 -translate-y-[47%]"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={2}
										stroke="currentColor"
										className="h-6 w-6 stroke-light6 dark:stroke-dark7"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
										/>
									</svg>
								</IconButton>
							)}
							navigation={({
								setActiveIndex,
								activeIndex,
								length,
							}) => (
								<div className="absolute bottom-1 left-0 right-0 flex justify-center gap-2">
									{Array.from({ length }).map((_, i) => (
										<span
											key={i}
											onClick={() => setActiveIndex(i)}
											className={`cursor-pointer block h-2 w-2 rounded-full transition-all duration-500 ${
												i === activeIndex
													? 'bg-light7 dark:bg-dark7 scale-125'
													: 'bg-light4 dark:bg-dark4'
											}`}
										/>
									))}
								</div>
							)}
						>
							<div className="relative h-full w-full">
								<div className="absolute inset-0 grid h-full w-full place-items-center">
									<div className="text-left w-8/12">
										<Typography
											variant="h2"
											className="font-nyght-serif font-[500]  text-light7 dark:text-dark7"
										>
											Algunas de las contribuciones que
											hice
										</Typography>
									</div>
								</div>
							</div>
							<div className="relative h-full w-full">
								<div className="absolute inset-0 grid h-full w-full place-items-center">
									<div className="text-left w-8/12">
										<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
											<em className="italic">
												Rediseñar
											</em>{' '}
											partes de la{' '}
											<strong className="font-bold text-light7 dark:text-dark7">
												UI
											</strong>{' '}
											del Portal con{' '}
											<strong className="font-bold text-light7 dark:text-dark7">
												ReactJS
											</strong>{' '}
											para mejorar la experiencia del
											usuario integrando bibliotecas como
											KendoUI y Bootstrap
										</Typography>
									</div>
								</div>
							</div>
							<div className="relative h-full w-full">
								<div className="absolute inset-0 grid h-full w-full place-items-center">
									<div className="text-left w-8/12">
										<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
											Actualizar e implementar{' '}
											<em className="italic">
												nuevas funcionalidades
											</em>{' '}
											del backend de{' '}
											<strong className="font-bold text-light7 dark:text-dark7">
												ASP.NET Core MVC
											</strong>{' '}
											para cumplir con las necesidades de
											los clientes
										</Typography>
									</div>
								</div>
							</div>
							<div className="relative h-full w-full">
								<div className="absolute inset-0 grid h-full w-full place-items-center">
									<div className="text-left w-8/12">
										<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
											<em className="italic">
												Desarrollo móvil
											</em>{' '}
											en{' '}
											<strong className="font-bold text-light7 dark:text-dark7">
												Flutter
											</strong>{' '}
											utilizando Dart, conectando
											componentes con sistemas backend en{' '}
											<strong className="font-bold text-light7 dark:text-dark7">
												.NET
											</strong>{' '}
											a través de{' '}
											<strong className="font-bold text-light7 dark:text-dark7">
												APIs RESTful
											</strong>
											.
										</Typography>
									</div>
								</div>
							</div>
							<div className="relative h-full w-full">
								<div className="absolute inset-0 grid h-full w-full place-items-center">
									<div className="text-left w-8/12">
										<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
											Utilizar{' '}
											<strong className="font-bold text-light7 dark:text-dark7">
												LINQ
											</strong>{' '}
											y{' '}
											<strong className="font-bold text-light7 dark:text-dark7">
												HeidiSQL
											</strong>{' '}
											para realizar{' '}
											<em className="italic">
												consultas eficientes a la base
												de datos
											</em>{' '}
											y mejorar el rendimiento, asegurando
											escalabilidad y optimización de
											datos.
										</Typography>
									</div>
								</div>
							</div>
							<div className="relative h-full w-full">
								<div className="absolute inset-0 grid h-full w-full place-items-center">
									<div className="text-left w-8/12">
										<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
											<em className="italic">Trabajar</em>{' '}
											con metodologías{' '}
											<strong className="font-bold text-light7 dark:text-dark7">
												Scrum
											</strong>
											, gestionando tareas en{' '}
											<strong className="font-bold text-light7 dark:text-dark7">
												JIRA
											</strong>
											, participando en code-reviews y
											aplicando mejores prácticas de
											desarrollo.
										</Typography>
									</div>
								</div>
							</div>
						</Carousel>
					</CardBody>
				</Card>
				<Card className="col-span-1 row-span-1 card bg-light2 dark:bg-dark2 overflow-hidden">
					<Image
						src="/adataOffice.webp"
						width={270}
						height={564}
						alt="Adata Office in Verden"
						loading="lazy"
					/>
				</Card>
				<Card className="col-span-1 row-span-1 card bg-light2 dark:bg-dark2 overflow-hidden">
					<Image
						src="/adataInfo.webp"
						width={270}
						height={564}
						alt="Adata Mitarbeiter Portal Flyer"
						loading="lazy"
					/>
				</Card>
				<Link
					href="/"
					className="fixed bottom-4 left-1/2 transform -translate-x-1/2"
				>
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
