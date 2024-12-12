'use client';
import { memo, useCallback, useEffect } from 'react';
import { dmSans } from './fonts/dmSans';
import { TProvider } from './themeProvider';
import './global.css';
import 'maplibre-gl/dist/maplibre-gl.css';
import dynamic from 'next/dynamic';
import { Typography, Button } from '@material-tailwind/react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const BotonEstilo = dynamic(() => import('./components/BotonEstilo'), {
	ssr: false,
});

const LanguageButton = memo(({ src, alt }) => (
	<Button size="sm" variant="text">
		<Image src={src} alt={alt} width={22} height={22} />
	</Button>
));

const Layout = ({ children }) => {
	const pathname = usePathname();

	const memoizedChildren = useCallback(() => children, [children]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<html lang="en" className={dmSans.variable} suppressHydrationWarning>
			<body className="bg-light3 dark:bg-dark1">
				<TProvider>
					<nav className="w-full h-20 flex flex-col items-center justify-center">
						<div className="w-3/4 flex flex-row justify-between items-center z-20">
							<div className="w-44 flex justify-start">
								<BotonEstilo />
							</div>
							<div>
								<Link href="/">
									<Typography
										variant="h1"
										className="font-nyght-serif font-bold italic text-light7 dark:text-dark7"
									>
										BEN LOPEZ
									</Typography>
								</Link>
							</div>
							<div className="w-44 flex justify-end">
								<LanguageButton
									src="/flag-argentina.svg"
									alt="Español"
								/>
								<LanguageButton
									src="/flag-us.svg"
									alt="English"
								/>
								<LanguageButton
									src="/flag-germany.svg"
									alt="Deutsch"
								/>
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
						<main
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
								<main>{memoizedChildren()}</main>
							</motion.div>
						</main>
					</AnimatePresence>
					<footer className="w-full h-20"></footer>
				</TProvider>
			</body>
		</html>
	);
};

export default memo(Layout);
