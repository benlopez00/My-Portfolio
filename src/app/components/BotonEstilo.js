'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Switch } from '@material-tailwind/react';

const BotonEstilo = () => {
	const { setTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	const toggleTheme = () => {
		setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
	};

	if (!mounted) return null;

	return (
		<div className="flex items-center">
			<label htmlFor="theme-switch" className="mr-2 text-sm">
				{resolvedTheme === 'light' ? '☀️' : '🌙'}
			</label>
			<Switch
				id="theme-switch"
				ripple={false}
				checked={resolvedTheme === 'dark'}
				onChange={toggleTheme}
				className="h-full w-full bg-dark1 checked:bg-light3"
				containerProps={{
					className: 'w-11 h-6',
				}}
				circleProps={{
					className:
						'before:hidden left-0.5 border-none bg-light3 dark:bg-dark1',
				}}
			/>
		</div>
	);
};

export default BotonEstilo;
