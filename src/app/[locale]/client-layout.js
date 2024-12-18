'use client';

import { useCallback, useEffect } from 'react';
import { TProvider } from './themeProvider';
import './global.css';
import 'maplibre-gl/dist/maplibre-gl.css';
import dynamic from 'next/dynamic';
import { Typography, Button, Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react';
import Image from 'next/image';
import { ReactSVG } from 'react-svg';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const BotonEstilo = dynamic(() => import('./components/BotonEstilo'), {
	ssr: false,
});

const LanguageButton = ({ src, alt, locale }) => {
	const pathname = usePathname();

	const changeLanguage = () => {
		const newPathname = pathname.replace(
			/^\/(en|es|de)/,
			locale === 'default' ? '' : `/${locale}`
		);
		window.location.href = newPathname;
	};

	return (
		<span onClick={changeLanguage} className='p-0 w-16 h-14 flex justify-center items-center hover:bg-light2 dark:hover:bg-dark4'>
			<Image src={src} alt={alt} width={25} height={25} />
		</span>
	);
};

export default function ClientLayout({ children }) {
	const pathname = usePathname();

	const memoizedChildren = useCallback(() => children, [children]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<TProvider>
			<nav className="w-full h-20 flex flex-col items-center justify-center">
				<div className="w-11/12 h-full flex flex-row justify-between items-center z-20">
					<div className="w-[72px] flex justify-center">
						<BotonEstilo />
					</div>
					<div className="w-52 flex justify-center">
						<Link href="/">
							<Typography
								variant="h1"
								className="font-nyght-serif font-bold italic mt-2 text-light7 dark:text-dark7 text-2xl custom-md:text-4xl custom-lg:text-5xl"
							>
								BEN LOPEZ
							</Typography>
						</Link>
					</div>
					<div className="w-40 hidden md:flex justify-start">
						<LanguageButton
							src="/flag-argentina.svg"
							alt="Español"
							locale="es"
						/>
						<LanguageButton
							src="/flag-us.svg"
							alt="English"
							locale="en"
						/>
						<LanguageButton
							src="/flag-germany.svg"
							alt="Deutsch"
							locale="de"
						/>
					</div>
					<div className="w-[72px] flex justify-center md:hidden">
						<Menu>
							<MenuHandler className="p-0 w-12 h-10 flex justify-center items-center bg-light2 dark:bg-dark2">
								<Button className='w-12 h-10'>
									<ReactSVG
										src="language.svg"
										className="p-0 w-6 h-6 fill-light7 dark:fill-dark7 transition-fill duration-300 group-hover:fill-white"
									/>
								</Button>
							</MenuHandler>
							<MenuList className='w-min p-2 flex flex-col justify-center items-center rounded-2xl border-0 bg-light4 dark:bg-dark3'>
								<MenuItem className='p-0 w-16 h-14'>
									<LanguageButton src="/flag-argentina.svg" alt="Español" locale="es" />
								</MenuItem>
								<MenuItem className='p-0 w-16 h-14'>
									<LanguageButton src="/flag-us.svg" alt="English" locale="en" />
								</MenuItem>
								<MenuItem className='p-0 w-16 h-14'>
									<LanguageButton src="/flag-germany.svg" alt="Deutsch" locale="de" />
								</MenuItem>
							</MenuList>
						</Menu>
					</div>
				</div>
			</nav>
			<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-[600px] overflow-hidden z-0">
				<div
					className="absolute bg-green-500 dark:bg-green-400 opacity-90 dark:opacity-70 blur-[80px] rounded-full w-[420px] h-[310px] animate-gradientMove animate-squareMove"
					style={{ top: '-100px', left: '400px' }}
				></div>
				<div
					className="absolute bg-blue-500 dark:bg-blue-400 opacity-90 dark:opacity-70 blur-[80px] rounded-full w-[400px] h-[310px] animate-gradientMove animate-triangularMove"
					style={{ top: '-100px', right: '400px' }}
				></div>
			</div>
			<AnimatePresence mode="wait">
				<section
					className="bg-transparent"
					style={{ position: 'relative', overflow: 'hidden' }}
				>
					<motion.div
						key={pathname}
						initial={{ opacity: 0, y: 70 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						style={{ width: '100%', height: '100%' }}
					>
						{memoizedChildren()}
					</motion.div>
				</section>
			</AnimatePresence>
			<footer className="w-full h-20"></footer>
		</TProvider>
	);
}
