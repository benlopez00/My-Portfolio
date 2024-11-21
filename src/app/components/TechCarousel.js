"use client";

import React, { useEffect, useRef } from "react";

const Carousel = () => {
	const images = [
		"/logos/react-svgrepo-com.svg",
		"/logos/dot-net.svg",
		"/logos/flutter-svgrepo-com.svg",
		"/logos/nextjs-svgrepo-com.svg",
		"/logos/svelte-svgrepo-com.svg",
		"/logos/tailwind-svgrepo-com.svg",
		"/logos/nodejs-svgrepo-com.svg",
		"/logos/sql-svgrepo-com.svg",
		"/logos/figma-svgrepo-com.svg",
		"/logos/sass-svgrepo-com.svg",
		"/logos/bootstrap-svgrepo-com.svg",
		"/logos/progress-blog-default-logo-transparent.png",
		"/logos/github-142-svgrepo-com.svg",
		"/logos/slack-svgrepo-com.svg",
		"/logos/jira-svgrepo-com.svg",
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
				height: "100px",
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
				{images.concat(images).map((src, index) => (
					<div
						key={index}
						className="bg-light0 dark:bg-dark4"
						style={{
							width: "100px",
							height: "100px",
							borderRadius: "20px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<img
							src={src}
							alt={`Logo ${index}`}
							style={{
								width: "60%",
								height: "60%",
								objectFit: "contain",
							}}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Carousel;