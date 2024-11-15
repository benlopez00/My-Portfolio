import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

export default function TechCarousel() {
	const images = [
		"/logos/bootstrap-svgrepo-com.svg",
		"/logos/dot-net.svg",
		"/logos/figma-svgrepo-com.svg",
		"/logos/github-142-svgrepo-com.svg",
		"/logos/jira-svgrepo-com.svg",
		"/logos/nextjs-svgrepo-com.svg",
		"/logos/nodejs-svgrepo-com.svg",
		"/logos/progress-blog-default-logo-transparent.png",
		"/logos/react-svgrepo-com.svg",
		"/logos/sass-svgrepo-com.svg",
		"/logos/slack-svgrepo-com.svg",
		"/logos/sql-svgrepo-com.svg",
		"/logos/tailwind-svgrepo-com.svg"
	]
	const RAPIDO = 25;
	const LENTO = 75;

	const [duracion, setDuracion] = useState(RAPIDO);
	let [ref, { width }] = useMeasure();

	const xTranslation = useMotionValue(0);
	const [mustFinish, setMustFinish] = useState(false);
	const [rerender, setRerender] = useState(false);

	useEffect(() => {
		let controls;
		let finalPosition = -width / 2 - 8;
		console.log("este"+width);
	
		if (mustFinish) {
			controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
				ease: "linear",
				duration: duracion * (1 - xTranslation.get() / finalPosition),
				onComplete: () => {
				setMustFinish(false);
				setRerender(!rerender);
				},
			});
		} else {
			controls = animate(xTranslation, [0, finalPosition], {
				ease: "linear",
				duration: duracion,
				repeat: Infinity,
				repeatType: "loop",
				repeatDelay: 0,
			});
		}	
		return controls?.stop;
	}, [rerender, xTranslation, duracion, width]);

	return (
		<div className="w-full py-8">
			<motion.div
				className="absolute left-0 flex gap-4"
				style={{ x: xTranslation }}
				ref={ref}
				onHoverStart={() => {
					setMustFinish(true);
					setDuracion(LENTO);
				}}
				onHoverEnd={() => {
					setMustFinish(true);
					setDuracion(RAPIDO);
				}}
			>
				{[...images, ...images].map((item, idx) => (
						<img
							key={idx}
							src={item}
							alt="Technology logo"
							className="w-16 h-16 object-contain mx-2"
						/>
				))}
			</motion.div>
		</div>
	);
}
