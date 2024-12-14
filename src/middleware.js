import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['en', 'es', 'de'],
    defaultLocale: 'en',
});

export const config = {
    matcher: ['/', '/(de|en|es)/:path*']
};
