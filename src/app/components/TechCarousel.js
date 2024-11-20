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
	let speed = 0.4;
	const gap = 20;
	let position = 0;

	const animate = () => {
		position -= speed;
		const scrollWidth = (carouselRef.current.scrollWidth + gap) / 2;
		if (position <= -scrollWidth) {
			position = 0;
		}
		carouselRef.current.style.transform = `translateX(${position}px)`;
		requestAnimationFrame(animate);
	};


	useEffect(() => {
		const element = carouselRef.current;

		const handleMouseEnter = () => (speed = 0.2);
		const handleMouseLeave = () => (speed = 0.4);

		element.addEventListener("mouseenter", handleMouseEnter);
		element.addEventListener("mouseleave", handleMouseLeave);

		requestAnimationFrame(animate);

		return () => {
			element.removeEventListener("mouseenter", handleMouseEnter);
			element.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);

	return (
		<div style={{ overflow: "hidden", width: "100%", height: "120px", position: "relative" }}>
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
						className="bg-light0 dark:bg-dark5"
						style={{
							width: "100px",
							height: "100px",
							borderRadius: "12px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<img
							src={src}
							alt={`Logo ${index}`}
							style={{
								width: "70%",
								height: "70%",
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