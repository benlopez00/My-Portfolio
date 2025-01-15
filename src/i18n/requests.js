import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
    const locale = await requestLocale;

    if (!locale) {
        console.warn('Locale not found, defaulting to "es".');
    }

    try {
        const messages = (await import(`../../messages/${locale || 'es'}.json`)).default;
        return { messages, locale: locale || 'es' };
    } catch (error) {
        console.error(`Error loading messages for locale: ${locale || 'es'}`, error);
        throw new Error('Localization messages could not be loaded');
    }
});
