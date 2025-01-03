'use client';

import { useTheme } from 'next-themes';

const BotonEstilo = () => {
    const { setTheme, resolvedTheme } = useTheme();

    const toggleTheme = () => {
        const newTheme = resolvedTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    return (
        <div className="flex items-center">
            <span className="mr-1 text-sm dark:hidden">☀️</span>
			<span className="mr-1 text-sm hidden dark:block">🌙</span>
            <div
                className={`h-[22px] w-[40px] rounded-[40px] flex justify-start items-center relative bg-light6`}
                onClick={toggleTheme}
            >
                <div
                    className={`!h-4 !w-4 rounded-[30px] absolute flex justify-center items-center bg-light3 
                    transform transition-transform duration-300
					translate-x-[4px] dark:translate-x-[20px]`}
                ></div>
            </div>
        </div>
    );
};

export default BotonEstilo;
