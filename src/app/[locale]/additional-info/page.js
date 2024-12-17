'use client';
import {
	Card,
	CardBody,
	Typography,
	Button,
} from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
import { useTranslations, useLocale } from 'next-intl';

export default function AdditionalInfoOverlay() {
	const t = useTranslations('AboutMe');
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
				<Card className="card col-span-2 row-span-2 py-8 px-12 bg-light2 dark:bg-dark2">
					<CardBody className="p-0 h-full flex flex-col items-start gap-5">
						<Typography
							variant="h2"
							className="font-nyght-serif font-[500] text-light7 dark:text-dark7"
						>
							{t('about_me')}
						</Typography>
						<div className="w-full h-full flex flex-col text-justify justify-around">
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								{t('born_in_munich')}
							</Typography>
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								{t('passion_technology_books')}
							</Typography>
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								{t('curiosity_how_things_work')}
							</Typography>
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								{t('teenage_internet_games')}
							</Typography>
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								{t('student_exchange_bremen')}
							</Typography>
						</div>
					</CardBody>
				</Card>
				<Card className="col-span-1 row-span-2 card bg-light2 dark:bg-dark2 overflow-hidden">
					<Image
						src="/berlinTvTower.webp"
						alt="Berlin Tv Tower"
						fill
						objectFit="cover"
						loading="eager"
						priority
					/>
				</Card>
				<Card className="col-span-1 row-span-2 card bg-light2 dark:bg-dark2 overflow-hidden">
					<Image
						src="/trainTracks.webp"
						alt="Train Tracks near Bremen"
						fill
						objectFit="cover"
						loading="eager"
						priority
					/>
				</Card>
				<Card className="col-span-1 row-span-2 card bg-light2 dark:bg-dark2 overflow-hidden">
					<Image
						src="/bremenAerial.webp"
						alt="Aerial Photo of Bremen"
						fill
						objectFit="cover"
						loading="lazy"
					/>
				</Card>
				<Card className="col-span-2 row-span-1 card py-8 px-12 bg-light2 dark:bg-dark2">
					<CardBody className="p-0 h-full">
						<div className="w-full h-full flex flex-col text-justify justify-around">
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								{t('pandemic_change_programming')}
							</Typography>
						</div>
					</CardBody>
				</Card>
				<Card className="col-span-1 row-span-2 card bg-light2 dark:bg-dark2 overflow-hidden">
					<Image
						src="/bremenNight.webp"
						alt="Main Square of Bremen at night"
						fill
						objectFit="cover"
						loading="lazy"
					/>
				</Card>
				<Card className="col-span-2 row-span-1 card py-8 px-12 bg-light2 dark:bg-dark2">
					<CardBody className="p-0 h-full">
						<div className="w-full h-full flex flex-col text-justify justify-around">
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								{t('exploring_react_dotnet_ui')}
							</Typography>
						</div>
					</CardBody>
				</Card>
				<Card className="col-span-1 row-span-2 card bg-light2 dark:bg-dark2 overflow-hidden">
					<Image
						src="/werderStadium.webp"
						alt="Football Match in Wesser Stadium"
						fill
						objectFit="cover"
						loading="lazy"
					/>
				</Card>
				<Card className="col-span-1 row-span-2 card bg-light2 dark:bg-dark2 overflow-hidden">
					<Image
						src="/hamburgRathaus.webp"
						alt="Hamburg City Hall"
						fill
						objectFit="cover"
						loading="lazy"
					/>
				</Card>
				<Card className="col-span-2 row-span-2 card py-8 px-12 bg-light2 dark:bg-dark2">
					<CardBody className="p-0 h-full">
						<div className="w-full h-full flex flex-col text-justify justify-center gap-16">
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								{t('working_holiday_visa')}
							</Typography>
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								{t('developing_hr_software')}
							</Typography>
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								{t('facing_challenges')}
							</Typography>
						</div>
					</CardBody>
				</Card>
				<Card className="col-span-1 row-span-2 card bg-light2 dark:bg-dark2 overflow-hidden">
					<Image
						src="/werderWesser.webp"
						alt="Wesser Stadium from Outside"
						fill
						objectFit="cover"
						loading="lazy"
					/>
				</Card>
				<Card className="col-span-2 row-span-2 card py-8 px-12 bg-light2 dark:bg-dark2">
					<CardBody className="p-0 h-full flex flex-col items-start gap-5">
						<Typography
							variant="h2"
							className="font-nyght-serif font-[500] text-light7 dark:text-dark7"
						>
							{t('current_goal')}
						</Typography>
						<div className="w-full h-full flex flex-col text-justify justify-center gap-16">
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								{t('current_learning_focus')}
							</Typography>
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								{t('short_term_goal')}
							</Typography>
							<Typography className="font-sans text-[16px] font-normal text-light7 dark:text-dark7">
								{t('long_term_goal')}
							</Typography>
						</div>
					</CardBody>
				</Card>
				<Card className="col-span-1 row-span-2 card bg-light2 dark:bg-dark2 overflow-hidden">
					<Image
						src="/lubeckChurch.webp"
						alt="Church in Luebeck"
						fill
						objectFit="cover"
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
