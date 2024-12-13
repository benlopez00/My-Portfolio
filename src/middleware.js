import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['en', 'es', 'de'],
    defaultLocale: 'en',
});

export const config = {
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};

console.log('Middleware running');