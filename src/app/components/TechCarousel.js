"use client";
import { Typography } from "@material-tailwind/react";
import React, { useEffect, useRef } from "react";

const Carousel = () => {
	const images = [
		{ name: "React", src: "/logos/react-svgrepo-com.svg" },
		{ name: ".NET", src: "/logos/dot-net.svg" },
		{ name: "Flutter", src: "/logos/flutter-svgrepo-com.svg" },
		{ name: "Next.js", src: "/logos/nextjs-svgrepo-com.svg" },
		{ name: "Svelte", src: "/logos/svelte-svgrepo-com.svg" },
		{ name: "Tailwind", src: "/logos/tailwind-svgrepo-com.svg" },
		{ name: "Node.js", src: "/logos/nodejs-svgrepo-com.svg" },
		{ name: "SQL", src: "/logos/sql-svgrepo-com.svg" },
		{ name: "Figma", src: "/logos/figma-svgrepo-com.svg" },
		{ name: "Sass", src: "/logos/sass-svgrepo-com.svg" },
		{ name: "Bootstrap", src: "/logos/bootstrap-svgrepo-com.svg" },
		{ name: "Telerik", src: "/logos/progress-blog-default-logo-transparent.png" },
		{ name: "GitHub", src: "/logos/github-142-svgrepo-com.svg" },
		{ name: "Slack", src: "/logos/slack-svgrepo-com.svg" },
		{ name: "Jira", src: "/logos/jira-svgrepo-com.svg" },
	];

	const carouselRef = useRef(null);
	const animationRef = useRef(null);
	let speed = 0.4;
	const gap = 20;
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
			element.addEventListener("mouseenter", handleMouseEnter);
			element.addEventListener("mouseleave", handleMouseLeave);
		}
		animationRef.current = requestAnimationFrame(animate);
		return () => {
		if (element) {
			element.removeEventListener("mouseenter", handleMouseEnter);
			element.removeEventListener("mouseleave", handleMouseLeave);
		}
		if (animationRef.current) {
			cancelAnimationFrame(animationRef.current); 
		}
		};
	}, []);

	return (
		<div
			style={{
				overflow: "hidden",
				width: "100%",
				height: "125px",
				position: "relative",
				boxShadow: "0 0 40px 20px rgba(0, 0, 0, 0.6)",
				maskImage: "radial-gradient(circle, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 95%)",
				WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 95%)",
			}}
		>
			<div
				ref={carouselRef}
				style={{
					display: "flex",
					width: "max-content",
					willChange: "transform",
					gap: `${gap}px`,
				}}
			>
				{images.concat(images).map((tech, index) => (
					<div
						key={index}
						className="relative flex items-start justify-center"
						style={{
							width: "100px",
							height: "125px",
						}}
					>
						<div
							className="w-[100px] h-[100px] bg-light0 dark:bg-dark4 flex items-center justify-center relative z-20 rounded-2xl"
						>
							<img
								src={tech.src}
								alt={tech.name}
								style={{
									width: "60%",
									height: "60%",
									objectFit: "contain",
								}}
							/>
						</div>
						<div className="bg-light4 dark:bg-dark1 text-center flex flex-row justify-center items-end"
								style={{
									width: "100px",
									height: "100px",
									borderRadius: "10px",
									position: "absolute",
									top: "22px",
									zIndex: 1,
								}}>
							<Typography variant="small" className="font-sans font-light text-light dark:text-dark7">
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