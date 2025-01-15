'use client';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@material-tailwind/react';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';

export default function notFound() {
	const locale = useLocale();
	const t = useTranslations('NotFound');
	return (
		<div className="flex flex-col items-center justify-center min-h-[90vh] bg-transparent">
			<div className="w-5/6 flex flex-col gap-8 items-center justify-center bg-transparent word-wrap">
				<h1
					className="font-nyght-serif text-center text-4xl font-[500] text-light7 dark:text-dark7
						mobile-lg:text-4xl
						laptop:text-6xl"
				>
					{t('title')}
				</h1>
				<p
					className="font-sans text-justify text-sm text-light7 dark:text-dark7
						laptop:text-[16px]"
				>
					{t('description')}
				</p>
				<Link href={`/${locale}`} className="transform group">
					<Button
						size="lg"
						className="flex items-center gap-6 px-6 rounded-xl bg-light2 dark:bg-dark2 text-light7 dark:text-dark7"
					>
						{t('goHome')}
						<ReactSVG
							src="/iconos/OpenTab.svg"
							className="w-6 h-6 fill-light7 dark:fill-dark7 transition-fill duration-300 group-hover:fill-green-500 group-hover:-translate-y-[2px]"
						/>
						<div className="absolute inset-0 rounded-xl transition-shadow duration-300 group-hover:shadow-[inset_0px_29px_18px_-20px_rgba(76,175,80,0.5)] pointer-events-none"></div>
					</Button>
				</Link>
			</div>
		</div>
	);
}
