"use client";
import { dmSans } from './fonts/dmSans'
import "./global.css";
import "maplibre-gl/dist/maplibre-gl.css";
import BotonEstilo from "./components/BotonEstilo";
import { Typography, Button, } from "@material-tailwind/react";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';



export default function RootLayout({ children }) {
	useEffect(() => {
		document.body.classList.add('vsc-initialized');
	}, []);
	const pathname = usePathname();
	return (
		<html lang="en" className={dmSans.variable}>
			<body className='bg-light3 dark:bg-dark1'>
				<nav className="w-full h-20 bg-light3 dark:bg-dark1 flex flex-col items-center justify-center">
					<div className="w-3/4 flex flex-row justify-between items-center z-20">
						<div className='w-44 flex justify-start'>
							<BotonEstilo/>					
						</div>
						<div>
						<Link href="/">
							<Typography variant="h1" className="font-nyght-serif font-bold italic text-light7 dark:text-dark7">
								BEN LOPEZ
							</Typography>
						</Link>
						</div>
						<div className='w-44 flex justify-end'>
							<Button size="sm" variant="text"><Image src="/spain-svgrepo-com.svg" alt="Español" width={22} height={22}/></Button>
							<Button size="sm" variant="text"><Image src="/united-kingdom-uk-svgrepo-com.svg" alt="English" width={22} height={22}/></Button>
							<Button size="sm" variant="text"><Image src="/germany-svgrepo-com.svg" alt="Deutsch" width={22} height={22}/></Button>
						</div>
					</div>
				</nav>
				<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-[600px] overflow-hidden z-10">
					<div className="absolute bg-green-500 dark:bg-green-400 opacity-90 dark:opacity-70 blur-[80px] rounded-full w-[400px] h-[350px] animate-gradientMove animate-squareMove" style={{ top: '-100px', left: '400px' }}></div>
					<div className="absolute bg-blue-500 dark:bg-blue-400 opacity-90 dark:opacity-70 blur-[80px] rounded-full w-[400px] h-[350px] animate-gradientMove animate-triangularMove" style={{ top: '-100px', right: '400px' }}></div>
				</div>
				<AnimatePresence mode="wait">
					<div style={{ position: 'relative', overflow: 'hidden' }}> 
						<motion.div
							key={pathname}
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							style={{ width: '100%', height: '100%' }}
						>
							<main>{children}</main>
						</motion.div>
					</div>
				</AnimatePresence>
			</body>
		</html>
	)
}