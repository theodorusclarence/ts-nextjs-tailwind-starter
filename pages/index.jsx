import Nav from '../components/Nav';
import Seo from '../components/Seo';

export default function Home() {
    return (
        <>
            <Seo pageTitle='NextJS Tailwind Starter' />
            <Nav />
            <section className='bg-gray-600'>
                <main className='flex flex-col items-center justify-center text text-green-400 min-h-screen'>
                    <h1>
                        <a
                            className='font-bold hover:text-green-500'
                            href='https://github.com/theodorusclarence/nextjs-tailwind-starter'
                            target='_blank'
                            rel='noreferer noopener'
                        >
                            NextJS Tailwind Starter
                        </a>
                    </h1>
                    <p className='text-white'>
                        By{' '}
                        <a
                            className='font-bold hover:text-green-400'
                            href='https://theodorusclarence.github.io'
                            target='_blank'
                            rel='noreferer noopener'
                        >
                            Clarence
                        </a>
                    </p>

                    <footer className='absolute bottom-2 text-gray-100'>
                        © {new Date().getFullYear()}
                    </footer>
                </main>
            </section>
        </>
    );
}
