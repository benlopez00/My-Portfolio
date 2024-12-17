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
import { ReactSVG } from 'react-svg';
import { useTranslations, useLocale } from 'next-intl';

export default function AdditionalInfoOverlay() {
	const t = useTranslations('Exp');
	const locale = useLocale();

	return (
		<main className="p-2 w-full flex flex-col items-center font-sans bg-transparent">
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
								className="font-nyght-serif font-[500] text-light7 dark:text-dark7"
							>
								{t('adata_title')}
							</Typography>
							<Typography
								variant="h5"
								className="font-sans font-medium text-light5 dark:text-dark5"
							>
								{t('adata_time_span')}
							</Typography>
						</div>
						<div className="w-full h-full flex flex-col text-justify justify-center gap-10">
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								{t('adata_description')}
							</Typography>
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								{t('what_is_mitarbeiter_portal')}
							</Typography>
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								{t('adata_year_learnings')}
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
						>
							<div className="relative h-full w-full">
								<div className="absolute inset-0 grid h-full w-full place-items-center">
									<div className="text-left w-8/12">
										<Typography
											variant="h2"
											className="font-nyght-serif font-[500] text-light7 dark:text-dark7"
										>
											{t('contributions_title')}
										</Typography>
									</div>
								</div>
							</div>
							{['redesign_ui', 'backend_features', 'mobile_development_flutter', 'database_optimizations', 'scrum_practices'].map((key) => (
								<div key={key} className="relative h-full w-full">
									<div className="absolute inset-0 grid h-full w-full place-items-center">
										<div className="text-left w-8/12">
											<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
												{t(key)}
											</Typography>
										</div>
									</div>
								</div>
							))}
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
			</div>
			<div className='w-full my-6 flex justify-center items-center'>
				<Link href={`/${locale}`} className="transform group">
					<Button size="lg" className="flex items-center gap-6 px-6 rounded-xl bg-light2 dark:bg-dark2 text-light7 dark:text-dark7">
						{t('return_button')}
						<ReactSVG
							src="/iconos/OpenTab.svg"
							className="w-6 h-6 fill-light7 dark:fill-dark7 transition-fill duration-300 group-hover:fill-green-500 group-hover:-translate-y-[2px]"
						/>
						<div className="absolute inset-0 rounded-xl transition-shadow duration-300 group-hover:shadow-[inset_0px_29px_18px_-20px_rgba(76,175,80,0.5)] pointer-events-none"></div>
					</Button>
				</Link>
			</div>
		</main>
	);
}
