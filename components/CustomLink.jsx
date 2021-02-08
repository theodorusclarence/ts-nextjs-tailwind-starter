import Link from 'next/link';

export default function CustomLink(props) {
    const href = props.href;
    const isInternalLink =
        href && (href.startsWith('/') || href.startsWith('#'));

    if (isInternalLink) {
        return (
            <Link href={href}>
                <a
                    {...props}
                    className='inline-flex items-center font-bold hover:text-primary-400'
                >
                    {props.children}
                </a>
            </Link>
        );
    }

    return (
        <a
            className='inline-flex items-center font-bold hover:text-primary-400'
            target='_blank'
            rel='noopener noreferrer'
            {...props}
        >
            {props.children}
        </a>
    );
}
