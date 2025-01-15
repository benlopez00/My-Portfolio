import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import ClientLayout from './client-layout';
import { dmSans } from '../../../public/fonts/dmSans';
import { getAsyncLocale } from '../../i18n/getAsyncLocale';

export const metadata = {
	title: 'Ben Lopez'
}

export default async function RootLayout(props) {
    const params = await props.params;

    const {
        children
    } = props;

    const locale = await getAsyncLocale(params);
    const messages = await getMessages();

    return (
		<html lang={locale} className={dmSans.variable} suppressHydrationWarning>
			<body className="bg-light3 dark:bg-dark1">
				<NextIntlClientProvider messages={messages} locale={locale}>
					<ClientLayout>{children}</ClientLayout>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
