/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'links.papareact.com',
                port: '',
                pathname: '/*',
            },
            {
                protocol: 'https',
                hostname: 'a0.muscache.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig