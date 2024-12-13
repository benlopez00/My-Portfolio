import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import ClientLayout from './client-layout';
import {notFound} from "next/navigation";
import {routing} from '@/i18n/routing';

export default async function RootLayout({ children, params }) {
	const { locale } = await params;
	if (!routing.locales.includes(locale)) {
		notFound();
	}
	const messages = await getMessages();

	return (
		<NextIntlClientProvider messages={messages} locale={locale}>
			<ClientLayout>{children}</ClientLayout>
		</NextIntlClientProvider>
	);
}
