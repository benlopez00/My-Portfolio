import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/requests.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['cdn.weatherapi.com'],
	},
};

export default withNextIntl(nextConfig);
