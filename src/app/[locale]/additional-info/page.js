'use client';

import { useEffect, useState } from 'react';
import { Card, CardBody, Typography, Button } from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useTranslations, useLocale } from 'next-intl';

const ReactSVG = dynamic(
	() => import('react-svg').then((mod) => mod.ReactSVG),
	{
		ssr: false,
		loading: () => <span className="w-6 h-6"></span>,
	}
);

export default function AdditionalInfoOverlay() {
	const t = useTranslations('AboutMe');
	const locale = useLocale();
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	return (
		<main className="p-2 w-full flex flex-col items-center font-sans bg-transparent">
			<div
				className="grid gap-4 z-20 
				grid-cols-[repeat(2,_140px)] auto-rows-[140px]
				mobile-md:grid-cols-[repeat(2,_150px)] mobile-md:auto-rows-[150px]
				mobile-lg:grid-cols-[repeat(2,_180px)] mobile-lg:auto-rows-[180px] 
				tablet:grid-cols-[repeat(4,_190px)] tablet:auto-rows-[190px]
				laptop:grid-cols-[repeat(4,_240px)] laptop:auto-rows-[240px] 
				laptop-lg:grid-cols-[repeat(4,_270px)] laptop-lg:auto-rows-[270px] laptop-lg:gap-6"
			>
				<Card
					className="card col-span-2 row-span-4 py-5 px-8 bg-light2 dark:bg-dark2 order-1 laptop:order-1
					laptop:col-span-2 laptop:row-span-2 laptop:py-8 laptop:px-12"
				>
					<CardBody className="p-0 h-full flex flex-col items-start gap-5">
						<Typography
							variant="h2"
							className="font-nyght-serif font-[500] text-light7 dark:text-dark7 text-xl
							mobile-lg:text-2xl
							laptop:text-4xl"
						>
							{t('about_me')}
						</Typography>
						<div className="w-full h-full flex flex-col text-justify justify-around">
							<Typography
								className="font-sans text-light7 dark:text-dark7 text-[13px]
									mobile-lg:text-sm
									laptop:text-[16px]"
							>
								{t('born_in_munich')}
							</Typography>
							<Typography
								className="font-sans text-light7 dark:text-dark7 text-[13px]
								mobile-lg:text-sm
								laptop:text-[16px]"
							>
								{t('passion_technology_books')}
							</Typography>
							<Typography
								className="font-sans text-light7 dark:text-dark7 text-[13px]
								mobile-lg:text-sm
								laptop:text-[16px]"
							>
								{t('curiosity_how_things_work')}
							</Typography>
							<Typography
								className="font-sans text-light7 dark:text-dark7 text-[13px]
								mobile-lg:text-sm
								laptop:text-[16px]"
							>
								{t('teenage_internet_games')}
							</Typography>
							<Typography
								className="font-sans text-light7 dark:text-dark7 text-[13px]
								mobile-lg:text-sm
								laptop:text-[16px]"
							>
								{t('student_exchange_bremen')}
							</Typography>
						</div>
					</CardBody>
				</Card>
				<Card className="col-span-1 row-span-2 card bg-light2 dark:bg-dark2 overflow-hidden order-2 laptop:order-2">
					<div className="relative w-full h-full">
						<Image
							src="/berlinTvTower.webp"
							alt="Berlin Tv Tower"
							fill
							sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, (max-width: 1024px) 190px, (max-width: 1280px) 240px, 270px"
							style={{ objectFit: 'cover' }}
							priority
							placeholder="blur"
							blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2NjY2NjYyIvPjwvc3ZnPg=="
						/>
					</div>
				</Card>
				<Card className="col-span-1 row-span-2 card bg-light2 dark:bg-dark2 overflow-hidden order-3 laptop:order-3">
					<div className="relative w-full h-full">
						<Image
							src="/trainTracks.webp"
							alt="Train Tracks near Bremen"
							fill
							sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, (max-width: 1024px) 190px, (max-width: 1280px) 240px, 270px"
							style={{ objectFit: 'cover' }}
							priority
							placeholder="blur"
							blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2NjY2NjYyIvPjwvc3ZnPg=="
						/>
					</div>
				</Card>
				<Card className="col-span-1 row-span-2 card bg-light2 dark:bg-dark2 overflow-hidden order-5 laptop:order-4">
					<div className="relative w-full h-full">
						<Image
							src="/bremenAerial.webp"
							alt="Aerial Photo of Bremen"
							fill
							sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, (max-width: 1024px) 190px, (max-width: 1280px) 240px, 270px"
							style={{ objectFit: 'cover' }}
							loading="lazy"
							placeholder="blur"
							blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2NjY2NjYyIvPjwvc3ZnPg=="
						/>
					</div>
				</Card>

				<Card
					className="card col-span-2 row-span-2 py-5 px-8 bg-light2 dark:bg-dark2 order-4 laptop:order-5
					laptop:col-span-2 laptop:row-span-1 laptop:py-8 laptop:px-12"
				>
					<CardBody className="p-0 h-full">
						<div className="w-full h-full flex flex-col text-justify justify-around">
							<Typography
								className="font-sans text-light7 dark:text-dark7 text-[13px]
								mobile-lg:text-sm
								laptop:text-[16px]"
							>
								{t('pandemic_change_programming')}
							</Typography>
						</div>
					</CardBody>
				</Card>

				<Card className="col-span-1 row-span-2 card bg-light2 dark:bg-dark2 overflow-hidden order-6 laptop:order-6">
					<div className="relative w-full h-full">
						<Image
							src="/bremenNight.webp"
							alt="Main Square of Bremen at night"
							fill
							sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, (max-width: 1024px) 190px, (max-width: 1280px) 240px, 270px"
							style={{ objectFit: 'cover' }}
							loading="lazy"
							placeholder="blur"
							blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2NjY2NjYyIvPjwvc3ZnPg=="
						/>
					</div>
				</Card>

				<Card
					className="card col-span-2 row-span-2 py-5 px-8 bg-light2 dark:bg-dark2 order-7 laptop:order-7
					laptop:col-span-2 laptop:row-span-1 laptop:py-8 laptop:px-12"
				>
					<CardBody className="p-0 h-full">
						<div className="w-full h-full flex flex-col text-justify justify-around">
							<Typography
								className="font-sans text-light7 dark:text-dark7 text-[13px]
								mobile-lg:text-sm
								laptop:text-[16px]"
							>
								{t('exploring_react_dotnet_ui')}
							</Typography>
						</div>
					</CardBody>
				</Card>
				{isLoaded && (
					<>
						<Card className="col-span-1 row-span-2 card bg-light2 dark:bg-dark2 overflow-hidden 
						order-8 tablet:order-9 laptop:order-8">
							<div className="relative w-full h-full">
								<Image
									src="/werderStadium.webp"
									alt="Football Match in Wesser Stadium"
									fill
									sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, (max-width: 1024px) 190px, (max-width: 1280px) 240px, 270px"
									style={{ objectFit: 'cover' }}
									loading="lazy"
									placeholder="blur"
									blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2NjY2NjYyIvPjwvc3ZnPg=="
								/>
							</div>
						</Card>

						<Card className="col-span-1 row-span-2 card bg-light2 dark:bg-dark2 overflow-hidden 
						order-9 tablet:order-10 laptop:order-9">
							<div className="relative w-full h-full">
								<Image
									src="/hamburgRathaus.webp"
									alt="Hamburg City Hall"
									fill
									sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, (max-width: 1024px) 190px, (max-width: 1280px) 240px, 270px"
									style={{ objectFit: 'cover' }}
									loading="lazy"
									placeholder="blur"
									blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2NjY2NjYyIvPjwvc3ZnPg=="
								/>
							</div>
						</Card>
					</>
				)}

				<Card
					className="card col-span-2 row-span-3 py-5 px-8 bg-light2 dark:bg-dark2 
					order-10 tablet:order-8 laptop:order-10
					laptop:col-span-2 laptop:row-span-2 laptop:py-8 laptop:px-12"
				>
					<CardBody className="p-0 h-full">
						<div className="w-full h-full flex flex-col text-justify justify-center gap-16">
							<Typography
								className="font-sans text-light7 dark:text-dark7 text-[13px]
								mobile-lg:text-sm
								laptop:text-[16px]"
							>
								{t('working_holiday_visa')}
							</Typography>
							<Typography
								className="font-sans text-light7 dark:text-dark7 text-[13px]
								mobile-lg:text-sm
								laptop:text-[16px]"
							>
								{t('developing_hr_software')}
							</Typography>
							<Typography
								className="font-sans text-light7 dark:text-dark7 text-[13px]
								mobile-lg:text-sm
								laptop:text-[16px]"
							>
								{t('facing_challenges')}
							</Typography>
						</div>
					</CardBody>
				</Card>

				{isLoaded && (
					<Card className="col-span-1 row-span-2 card bg-light2 dark:bg-dark2 overflow-hidden 
					order-11 tablet:order-[13] laptop:order-11">
						<div className="relative w-full h-full">
							<Image
								src="/werderWesser.webp"
								alt="Wesser Stadium from Outside"
								fill
								sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, (max-width: 1024px) 190px, (max-width: 1280px) 240px, 270px"
								style={{ objectFit: 'cover' }}
								loading="lazy"
								placeholder="blur"
								blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2NjY2NjYyIvPjwvc3ZnPg=="
							/>
						</div>
					</Card>
				)}

				<Card
					className="card col-span-2 row-span-4 py-5 px-8 bg-light2 dark:bg-dark2 
					order-[13] tablet:order-11 laptop:order-12
					mobile-lg:row-span-3
					laptop:col-span-2 laptop:row-span-2 laptop:py-8 laptop:px-12"
				>
					<CardBody className="p-0 h-full flex flex-col items-start gap-5">
						<Typography
							variant="h2"
							className="font-nyght-serif font-[500] text-light7 dark:text-dark7 text-xl
							mobile-lg:text-2xl
							laptop:text-4xl"
						>
							{t('current_goal')}
						</Typography>
						<div className="w-full h-full flex flex-col text-justify justify-center gap-16">
							<Typography
								className="font-sans text-light7 dark:text-dark7 text-[13px]
								mobile-lg:text-sm
								laptop:text-[16px]"
							>
								{t('current_learning_focus')}
							</Typography>
							<Typography
								className="font-sans text-light7 dark:text-dark7 text-[13px]
								mobile-lg:text-sm
								laptop:text-[16px]"
							>
								{t('short_term_goal')}
							</Typography>
							<Typography
								className="font-sans text-light7 dark:text-dark7 text-[13px]
								mobile-lg:text-sm
								laptop:text-[16px]"
							>
								{t('long_term_goal')}
							</Typography>
						</div>
					</CardBody>
				</Card>

				{isLoaded && (
					<Card className="col-span-1 row-span-2 card bg-light2 dark:bg-dark2 overflow-hidden 
					order-12 tablet:order-12 laptop:order-[13]">
						<div className="relative w-full h-full">
							<Image
								src="/lubeckChurch.webp"
								alt="Church in Luebeck"
								fill
								sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, (max-width: 1024px) 190px, (max-width: 1280px) 240px, 270px"
								style={{ objectFit: 'cover' }}
								loading="lazy"
								placeholder="blur"
								blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2NjY2NjYyIvPjwvc3ZnPg=="
							/>
						</div>
					</Card>
				)}
			</div>
			<div className="w-full my-6 flex justify-center items-center">
				<Link href={`/${locale}`} className="transform group">
					<Button
						size="lg"
						className="flex items-center gap-6 px-6 rounded-xl bg-light2 dark:bg-dark2 text-light7 dark:text-dark7"
					>
						{t('return_button')}
						{isLoaded && (
							<ReactSVG
								src="/iconos/OpenTab.svg"
								className="w-6 h-6 fill-light7 dark:fill-dark7 transition-fill duration-300 group-hover:fill-green-500 group-hover:-translate-y-[2px]"
							/>
						)}
						<div className="absolute inset-0 rounded-xl transition-shadow duration-300 group-hover:shadow-[inset_0px_29px_18px_-20px_rgba(76,175,80,0.5)] pointer-events-none"></div>
					</Button>
				</Link>
			</div>
		</main>
	);
}
