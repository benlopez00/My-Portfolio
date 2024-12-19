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
		className={`rounded-2xl laptop-lg:rounded-3xl flex items-center justify-center bg-light0 dark:bg-dark4 transition-all ease-in-out duration-300 ${gradient}`}
	>
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="w-full h-full flex justify-center items-center rounded-xl group"
		>
			<ReactSVG
				src={icon}
				className="w-8 h-8 fill-light6 dark:fill-dark7 transition-fill duration-300 group-hover:fill-white
				mobile-lg:w-10 mobile-lg:h-10
				laptop-lg:w-14 laptop-lg:h-14"
			/>
		</a>
	</Card>
));

const InfoCard = memo(({ title, children }) => (
	<Card className="col-span-2 row-span-1 card p-4 bg-light2 dark:bg-dark2
		mobile-md:p-5
		laptop-lg:p-8"
	>
		<CardBody className="p-0 h-full flex flex-col items-start gap-3
			mobile-lg:gap-4 
			laptop-lg:gap-8
		">
			<Typography
				variant="h2"
				className="font-nyght-serif font-[500] text-light7 dark:text-dark7 text-xl
				mobile-lg:text-2xl
				laptop-lg:text-4xl"
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
				className="grid gap-4 z-20 
				grid-cols-[repeat(2,_140px)] auto-rows-[140px]
				mobile-md:grid-cols-[repeat(2,_150px)] mobile-md:auto-rows-[150px]
				mobile-lg:grid-cols-[repeat(2,_180px)] mobile-lg:auto-rows-[180px] 
				tablet:grid-cols-[repeat(4,_210px)] tablet:auto-rows-[210px]
				laptop:grid-cols-[repeat(4,_240px)] laptop:auto-rows-[240px] 
				laptop-lg:grid-cols-[repeat(4,_270px)] laptop-lg:auto-rows-[270px] laptop-lg:gap-6"
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
				<Card className="col-span-1 row-span-1 card p-4 mobile-md:p-5 laptop-lg:p-8 bg-light2 dark:bg-dark2">
					<CardBody className="p-0 h-full flex flex-col items-start justify-between">
						<Typography
							variant="h4"
							className="font-sans font-normal text-light7 dark:text-dark7 text-md
							mobile-lg:text-lg
							laptop-lg:text-2xl"
						>
							{t('welcome')}
						</Typography>
						<Typography
							variant="h2"
							className="font-nyght-serif font-[500] text-light7 dark:text-dark7 text-xl
							mobile-lg:text-2xl
							laptop-lg:text-4xl"
						>
							{t('i_am')}
						</Typography>
						<div className='w-full'>
							<Typography className="font-sans text-light7 dark:text-dark7 text-xs
								mobile-lg:text-sm
								laptop-lg:text-[16px]"
							>
								{t('about_one')}
							</Typography>
							<Typography className="font-sans text-light7 dark:text-dark7 text-xs
								mobile-lg:text-sm
								laptop-lg:text-[16px]"
							>
								{t('about_two')}
							</Typography>
						</div>
					</CardBody>
				</Card>
				<InfoCard title={t('my_stack')}>
					<TechCarousel />
				</InfoCard>
				<Card className="col-span-2 row-span-2 card py-4 px-8 bg-light2 dark:bg-dark2
					laptop-lg:row-span-1
					laptop-lg:py-8 laptop-lg:px-12"				
				>
					<CardBody className="p-0 h-full flex flex-col items-center">
						<div className="w-full h-full flex flex-col text-justify justify-around">
							<Typography className="font-sans text-xs font-normal text-light7 dark:text-dark7
								mobile-lg:text-sm
								laptop-lg:text-[16px]"
							>
								{t('intro_one')}
							</Typography>
							<Typography className="font-sans text-xs font-normal text-light7 dark:text-dark7
								mobile-lg:text-sm
								laptop-lg:text-[16px]"
							>
								{t('intro_two')}
							</Typography>
						</div>
					</CardBody>
				</Card>
				<Card className="col-span-1 row-span-1 overflow-clip card bg-transparent">
					<LocationMap />
				</Card>
				<Card
					className="col-span-1 row-span-1 card p-4 mobile-md:p-5 laptop-lg:p-8 bg-light2 dark:bg-dark2 grid gap-2 justify-center content-center
						grid-cols-[repeat(2,_55px)] grid-rows-[repeat(2,_55px)]
						mobile-md:grid-cols-[repeat(2,_60px)] mobile-md:grid-rows-[repeat(2,_60px)]
						mobile-lg:grid-cols-[repeat(2,_70px)] mobile-lg:grid-rows-[repeat(2,_70px)] mobile-lg:gap-3
						laptop-lg:grid-cols-[repeat(2,_100px)] laptop-lg:grid-rows-[repeat(2,_100px)] laptop-lg:gap-5
					"
				>
					{socialLinks.map((link, index) => (
						<SocialLink key={index} {...link} />
					))}
				</Card>
				<Card className="col-span-2 row-span-1 card bg-light2 dark:bg-dark2 overflow-hidden">
					<Link
						href={`/${locale}/additional-info`}
						className="w-full h-full card p-4 mobile-md:p-5 laptop-lg:p-8 group"
					>
						<CardBody className="p-0 h-full flex flex-col items-start justify-between">
							<div className="w-full flex justify-between items-center">
								<Typography
									variant="h2"
									className="font-nyght-serif font-[500] text-xl text-light7 dark:text-dark7
									mobile-lg:text-2xl
									laptop-lg:text-4xl"
								>
									{t('more_about_me')}
								</Typography>
								<div className="rounded-full
									laptop-lg:pr-3"
								>
									<ReactSVG
										src="/iconos/OpenTab.svg"
										className="w-6 h-6 fill-light7 dark:fill-dark7 transition-fill duration-300 group-hover:fill-green-500 group-hover:-translate-y-1"
									/>
								</div>
							</div>
							<div className="w-full flex flex-col items-start justify-between gap-2 mb-5
								mobile-lg:mb-1
								laptop-lg:mb-5"
							>
								<Typography className="font-sans text-xs text-light7 dark:text-dark7
									laptop-lg:text-[16px]"
								>
									{t('more_about_me_one')}
								</Typography>
								<Typography className="font-sans hidden mobile-lg:flex text-xs text-light7 dark:text-dark7
									laptop-lg:text-[16px]"
								>
									{t('more_about_me_two')}
								</Typography>
								<Typography className="font-sans hidden mobile-lg:flex text-xs text-light7 dark:text-dark7
									laptop-lg:text-[16px]"
								>
									{t('more_about_me_three')}
								</Typography>
							</div>
						</CardBody>
						<div className="absolute inset-0 card transition-shadow duration-300 group-hover:shadow-[inset_0px_29px_18px_-20px_rgba(76,175,80,0.5)] pointer-events-none"></div>
					</Link>
				</Card>
				<Card className="col-span-2 row-span-1 card p-4 mobile-md:p-5 laptop-lg:p-8 bg-light2 dark:bg-dark2">
					<CardBody className="p-0 h-full flex flex-col justify-between">
						<div className="w-full flex justify-between items-center">
							<Typography
								variant="h2"
								className="font-nyght-serif font-[500] text-xl text-light7 dark:text-dark7
								mobile-lg:text-2xl
								laptop-lg:text-4xl"
							>
								{t('my_exp')}
							</Typography>
							<div className="w-24 h-8 rounded-3xl relative bottom-[3px] p-1 bg-light4 dark:bg-dark4 flex flex-row justify-around items-center
								laptop-lg:w-32 laptop-lg:h-10"
							>
								<Typography className="font-sans text-xs font-normal text-green-500
									laptop-lg:text-sm"
								>
									{t('available')}
								</Typography>
								<span className="relative flex h-2 w-2
									laptop-lg:h-3 laptop-lg:w-3" 
								>
									<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
									<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500
										laptop-lg:h-3 laptop-lg:w-3"
									></span>
								</span>
							</div>
						</div>
						<Link href={`/${locale}/experiencia`} passHref>
							<div className="w-full flex flex-row items-center justify-between rounded-3xl bg-light3 dark:bg-dark4 group sticky cursor-pointer">
								<div className="h-full flex flex-col justify-around py-2 px-4
									mobile-lg:py-3 mobile-lg:px-6
									laptop-lg:p-8"
								>
									<Typography className="font-sans text-md font-semibold text-light7 dark:text-dark7
										mobile-lg:text-lg
										laptop-lg:text-xl"
									>
										{t('adata_name')}
									</Typography>
									<Typography className="font-sans text-xs text-light7 dark:text-dark7
										mobile-lg:text-sm
										laptop-lg:text-[16px]"
									>
										{t('net_dev')}
									</Typography>
									<Typography className="font-sans text-xs text-light6 dark:text-dark6
										mobile-lg:text-sm
										laptop-lg:text-[16px]"
									>
										{t('adata_time_span')}
									</Typography>
								</div>
								<div className="h-full flex flex-col justify-around p-4 mobile-md:p-5 laptop-lg:p-8">
									<ReactSVG
										src="/iconos/OpenTab.svg"
										className="w-5 h-5 fill-light7 dark:fill-dark7 transition-fill duration-300 group-hover:fill-green-500 group-hover:-translate-y-1
										laptop-lg:w-6 laptop-lg:h-6"
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
