import { routing } from './routing';
import { notFound } from 'next/navigation';

export async function getAsyncLocale(params) {
	const { locale } = await params;

	if (!routing.locales.includes(locale)) {
		notFound();
	}

	return locale;
}
