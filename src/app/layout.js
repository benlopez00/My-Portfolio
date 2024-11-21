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
				<div className="w-full h-20 bg-light3 dark:bg-dark1 flex flex-col items-center justify-center">
					<div className="w-3/4 flex flex-row justify-between items-center">
						<div className='w-44 flex justify-start'>
							<BotonEstilo/>					
						</div>
						<div>
							<Link href="/">
								<Typography variant="h1" className="font-sans font-bold text-[rgb(31,31,31)] dark:text-[rgb(204,204,204)]">BEN LOPEZ</Typography>
							</Link>
						</div>
						<div className='w-44 flex justify-end'>
							<Button size="sm" variant="text"><Image src="/spain-svgrepo-com.svg" alt="Español" width={22} height={22}/></Button>
							<Button size="sm" variant="text"><Image src="/united-kingdom-uk-svgrepo-com.svg" alt="English" width={22} height={22}/></Button>
							<Button size="sm" variant="text"><Image src="/germany-svgrepo-com.svg" alt="Deutsch" width={22} height={22}/></Button>
						</div>
					</div>
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