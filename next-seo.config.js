const title = 'Next.js Tailwind Starter';
const description = 'A template for Next.js and Tailwindcss by Theodorus Clarence';

const SEO = {
    title,
    description,
    // canonical: 'https://theodorusclarence.com',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://theodorusclarence.com',
        title,
        description,
        images: [
            {
                url: 'https://theodorusclarence.com/favicon/ms-icon-144x144.png',
                alt: title,
                width: 144,
                height: 144,
            },
        ],
    },
};

export default SEO;
