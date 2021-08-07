import clsx from 'clsx';

type ButtonProps = {
  href: string;
  children: React.ReactChild | string;
  className?: string;
} & React.ComponentPropsWithoutRef<'button'>;

export default function Button({
  children,
  className = '',
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'inline-flex items-center font-bold hover:text-primary-500 animated-underline',
        className
      )}
    >
      {children}
    </button>
  );
}
