'use client';
import { Typography } from '@material-tailwind/react';
import React, { useEffect, useRef } from 'react';
import { ReactSVG } from 'react-svg';

const Carousel = () => {
	const images = [
		{ name: 'React', src: '/logos/react.svg' },
		{ name: '.NET', src: '/logos/dot-net.svg' },
		{ name: 'Flutter', src: '/logos/flutter.svg' },
		{ name: 'Next.js', src: '/logos/nextjs.svg' },
		// { name: "Svelte", src: "/logos/svelte.svg" },
		{ name: 'Tailwind', src: '/logos/tailwind.svg' },
		{ name: 'Node.js', src: '/logos/nodejs.svg' },
		{ name: 'SQL', src: '/logos/sql.svg' },
		{ name: 'Figma', src: '/logos/figma.svg' },
		{ name: 'Sass', src: '/logos/sass.svg' },
		{ name: 'Bootstrap', src: '/logos/bootstrap.svg' },
		{ name: 'Telerik', src: '/logos/progress.svg' },
		{ name: 'GitHub', src: '/logos/github.svg' },
		{ name: 'Slack', src: '/logos/slack.svg' },
		{ name: 'Jira', src: '/logos/jira.svg' },
	];

	const carouselRef = useRef(null);
	const animationRef = useRef(null);
	let speed = 0.4;
	const gap = 15;
	let position = 0;

	const animate = () => {
		if (!carouselRef.current) return;
		position -= speed;
		const scrollWidth = (carouselRef.current.scrollWidth + gap) / 2;
		if (position <= -scrollWidth) {
			position = 0;
		}
		carouselRef.current.style.transform = `translateX(${position}px)`;
		animationRef.current = requestAnimationFrame(animate);
	};

	useEffect(() => {
		const element = carouselRef.current;
		const handleMouseEnter = () => (speed = 0.2);
		const handleMouseLeave = () => (speed = 0.4);
		if (element) {
			element.addEventListener('mouseenter', handleMouseEnter);
			element.addEventListener('mouseleave', handleMouseLeave);
		}
		animationRef.current = requestAnimationFrame(animate);
		return () => {
			if (element) {
				element.removeEventListener('mouseenter', handleMouseEnter);
				element.removeEventListener('mouseleave', handleMouseLeave);
			}
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
		};
	}, []);

	return (
		<div className='overflow-hidden w-full h-[70px] relative
			mobile-lg:h-[95px]
			laptop:h-[125px]'
			style={{
				maskImage:
					'radial-gradient(circle, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 95%)',
				WebkitMaskImage:
					'radial-gradient(circle, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 95%)',
			}}
		>
			<div
				ref={carouselRef}
				className='flex w-max'
				style={{
					willChange: 'transform',
					gap: `${gap}px`, 
				}}
			>
				{images.concat(images).map((tech, index) => (
					<div
						key={index}
						className="relative flex items-start justify-center w-[55px] h-[70px]
						mobile-lg:w-[77px] mobile-lg:h-[95px]
						laptop:w-[100px] laptop:h-[125px]"
					>
						<div className="w-[55px] h-[55px] bg-light0 dark:bg-dark4 flex items-center justify-center relative z-20 rounded-xl
							mobile-lg:w-[75px] mobile-lg:h-[75px]
							laptop:w-[100px] laptop:h-[100px]"
						>
							<ReactSVG
								src={tech.src}
								className="w-3/5 h-3/5 fill-black dark:fill-white"
							/>
						</div>
						<div className="w-[55px] h-[55px] absolute top-[15px] z-10 bg-light4 dark:bg-dark1 text-center flex flex-row justify-center items-end rounded-lg
							mobile-lg:w-[75px] mobile-lg:[40px] mobile-lg:top-[37px]
							laptop:w-[100px] laptop:h-[50px] laptop:top-[72px]"
						>
							<Typography className="font-sans font-light text-[9px] mb-[1px] dark:text-dark7
								mobile-lg:text-[13px]
								laptop:text-sm"
							>
								{tech.name}
							</Typography>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Carousel;
