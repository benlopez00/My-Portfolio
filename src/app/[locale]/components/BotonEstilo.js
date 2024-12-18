'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const BotonEstilo = () => {
	const { setTheme, resolvedTheme } = useTheme();
	const [isActive, setIsActive] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	const toggleTheme = () => {
		setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
		setIsActive(!isActive);
	};

	if (!mounted) return null;

	return (
		<div className="flex items-center">
			<span className="mr-1 text-sm">
				{resolvedTheme === 'light' ? '☀️' : '🌙'}
			</span>
			<div className={`h-[22px] w-[40px] rounded-[40px] flex justify-start items-center relative bg-light7 dark:bg-dark7`}
			onClick={toggleTheme}
			>
				<div className={`h-[16px] w-[16px] rounded-[30px] absolute flex justify-center items-center bg-light1 dark:bg-dark2
				transform transition-transform duration-300
				${isActive ? 'translate-x-[20px]' : 'translate-x-[4px]'}`}></div>
			</div>
		</div>
	);
};

export default BotonEstilo;
