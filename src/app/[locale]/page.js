'use client';

import { memo, useMemo } from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
import { useTranslations, useLocale } from 'next-intl';
import LocationMap from './components/LocationMap';
import TechCarousel from './components/TechCarousel';

const SocialLink = memo(({ href, icon, gradient }) => (
	<Card
		shadow={false}
		className={`rounded-2xl flex items-center justify-center bg-light0 dark:bg-dark4 transition-all ease-in-out duration-300 ${gradient}`}
	>
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="w-full h-full flex justify-center items-center rounded-xl group"
		>
			<ReactSVG
				src={icon}
				className="w-8 h-8 fill-light6 dark:fill-dark7 transition-fill duration-300 group-hover:fill-white"
			/>
		</a>
	</Card>
));

const InfoCard = memo(({ title, children }) => (
	<Card className="col-span-2 row-span-1 card p-4 bg-light2 dark:bg-dark2">
		<CardBody className="p-0 h-full flex flex-col items-start gap-2">
			<Typography
				variant="h2"
				className="font-nyght-serif font-[500] text-light7 dark:text-dark7 text-xl"
			>
				{title}
			</Typography>
			{children}
		</CardBody>
	</Card>
));

export default function Component() {
	const t = useTranslations('Home');
	const locale = useLocale();

	const socialLinks = useMemo(
		() => [
			{
				href: 'https://example.com/resume',
				icon: '/iconos/DocLogo.svg',
				gradient: 'hover:bg-green-400 hover:dark:bg-green-400',
			},
			{
				href: 'https://linkedin.com/in/ebenlopezavila00/',
				icon: '/iconos/LinkedinLogo.svg',
				gradient: 'hover:bg-blue-600 hover:dark:bg-blue-600',
			},
			{
				href: 'mailto:lopezavilaben00@gmail.com',
				icon: '/iconos/MailLogo.svg',
				gradient: 'hover:bg-amber-500 hover:dark:bg-amber-500',
			},
			{
				href: 'https://instagram.com/ben_fotos00/',
				icon: '/iconos/InstaLogo.svg',
				gradient: 'instagram-gradient',
			},
		],
		[]
	);

	return (
		<main className="p-2 w-full flex flex-col items-center font-sans bg-transparent">
			<div
				className="grid gap-4 z-20 grid-cols-[repeat(2,_140px)] auto-rows-[140px]
				custom-xsm:grid-cols-[repeat(2,_150px)] custom-xsm:auto-rows-[150px]
				custom-sm:grid-cols-[repeat(2,_190px)] custom-sm:auto-rows-[190px] 
				custom-md:grid-cols-[repeat(4,_210px)] custom-md:auto-rows-[210px]
				custom-lg:grid-cols-[repeat(4,_240px)] custom-lg:auto-rows-[240px] 
				custom-xlg:grid-cols-[repeat(4,_270px)] custom-xlg:auto-rows-[270px]"
			>
				<Card className="col-span-1 row-span-1 card bg-light2 dark:bg-dark2 overflow-hidden">
					<Image
						src="/Big_Ben.webp"
						alt="Ben Lopez Profile Photo"
						width={270}
						height={270}
						loading="eager"
						priority
					/>
				</Card>
				<Card className="col-span-1 row-span-1 card p-4 bg-light2 dark:bg-dark2">
					<CardBody className="p-0 h-full flex flex-col items-start justify-between">
						<Typography
							variant="h4"
							className="font-sans font-normal text-light7 dark:text-dark7 text-md"
						>
							{t('welcome')}
						</Typography>
						<Typography
							variant="h2"
							className="font-nyght-serif font-[500] text-light7 dark:text-dark7 text-xl"
						>
							{t('i_am')}
						</Typography>
						<div className='w-full whitespace-nowrap'>
							<Typography className="font-sans text-light7 dark:text-dark7 text-xs">
								{t('about_one')}
							</Typography>
							<Typography className="font-sans text-light7 dark:text-dark7 text-xs">
								{t('about_two')}
							</Typography>
						</div>
					</CardBody>
				</Card>
				<InfoCard title={t('my_stack')}>
					<TechCarousel />
				</InfoCard>
				<Card className="col-span-2 row-span-2 card py-4 px-8 bg-light2 dark:bg-dark2">
					<CardBody className="p-0 h-full flex flex-col items-center">
						<div className="w-full h-full flex flex-col text-justify justify-around">
							<Typography className="font-sans text-xs font-normal text-light7 dark:text-dark7">
								{t('intro_one')}
							</Typography>
							<Typography className="font-sans text-xs font-normal text-light7 dark:text-dark7">
								{t('intro_two')}
							</Typography>
						</div>
					</CardBody>
				</Card>
				<Card className="col-span-1 row-span-1 overflow-clip card bg-transparent">
					<LocationMap />
				</Card>
				<Card
					className="col-span-1 row-span-1 card p-4 bg-light2 dark:bg-dark2 grid gap-2 justify-center content-center"
					style={{
						gridTemplateColumns: 'repeat(2, 55px)',
						gridTemplateRows: 'repeat(2, 55px)',
					}}
				>
					{socialLinks.map((link, index) => (
						<SocialLink key={index} {...link} />
					))}
				</Card>
				<Card className="col-span-2 row-span-1 card bg-light2 dark:bg-dark2 overflow-hidden">
					<Link
						href={`/${locale}/additional-info`}
						className="w-full h-full card p-4 group"
					>
						<CardBody className="p-0 h-full flex flex-col items-start justify-between">
							<div className="w-full flex justify-between items-center">
								<Typography
									variant="h2"
									className="font-nyght-serif font-[500] text-xl text-light7 dark:text-dark7"
								>
									{t('more_about_me')}
								</Typography>
								<div className="rounded-full p-3">
									<ReactSVG
										src="/iconos/OpenTab.svg"
										className="w-6 h-6 fill-light7 dark:fill-dark7 transition-fill duration-300 group-hover:fill-green-500 group-hover:-translate-y-1"
									/>
								</div>
							</div>
							<div className="w-full flex flex-col items-start justify-between gap-2 mb-5">
								<Typography className="font-sans text-xs text-light7 dark:text-dark7">
									{t('more_about_me_one')}
								</Typography>
								<Typography className="font-sans hidden md:flex text-xs text-light7 dark:text-dark7">
									{t('more_about_me_two')}
								</Typography>
								<Typography className="font-sans hidden md:flex text-xs text-light7 dark:text-dark7">
									{t('more_about_me_three')}
								</Typography>
							</div>
						</CardBody>
						<div className="absolute inset-0 card transition-shadow duration-300 group-hover:shadow-[inset_0px_29px_18px_-20px_rgba(76,175,80,0.5)] pointer-events-none"></div>
					</Link>
				</Card>
				<Card className="col-span-2 row-span-1 card p-4 bg-light2 dark:bg-dark2">
					<CardBody className="p-0 h-full flex flex-col justify-between">
						<div className="w-full flex justify-between items-center">
							<Typography
								variant="h2"
								className="font-nyght-serif font-[500] text-xl text-light7 dark:text-dark7"
							>
								{t('my_exp')}
							</Typography>
							<div className="w-24 h-8 rounded-3xl relative bottom-[3px] p-1 bg-light4 dark:bg-dark4 flex flex-row justify-around items-center">
								<Typography className="font-sans text-xs font-normal text-green-500">
									{t('available')}
								</Typography>
								<span className="relative flex h-2 w-2">
									<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
									<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
								</span>
							</div>
						</div>
						<Link href={`/${locale}/experiencia`} passHref>
							<div className="w-full flex flex-row items-center justify-between rounded-3xl bg-light3 dark:bg-dark4 group sticky cursor-pointer">
								<div className="h-full flex flex-col justify-around py-2 px-4">
									<Typography className="font-sans text-md font-semibold text-light7 dark:text-dark7">
										{t('adata_name')}
									</Typography>
									<Typography className="font-sans text-xs text-light7 dark:text-dark7">
										{t('net_dev')}
									</Typography>
									<Typography className="font-sans text-xs text-light6 dark:text-dark6">
										{t('adata_time_span')}
									</Typography>
								</div>
								<div className="h-full flex flex-col justify-around p-4">
									<ReactSVG
										src="/iconos/OpenTab.svg"
										className="w-5 h-5 fill-light7 dark:fill-dark7 transition-fill duration-300 group-hover:fill-green-500 group-hover:-translate-y-1"
									/>
								</div>
								<div className="absolute inset-0 rounded-3xl transition-shadow duration-300 group-hover:shadow-[inset_0px_29px_18px_-20px_rgba(76,175,80,0.5)] pointer-events-none"></div>
							</div>
						</Link>
					</CardBody>
				</Card>
			</div>
		</main>
	);
}
