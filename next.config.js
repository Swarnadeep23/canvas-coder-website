/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	basePath: '/canvas-coder-website',
	assetPrefix: '/canvas-coder-website/',
};

module.exports = nextConfig 