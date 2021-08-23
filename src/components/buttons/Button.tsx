import clsx from 'clsx';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variants?: 'primary' | 'secondary';
} & React.ComponentPropsWithoutRef<'button'>;

export default function Button({
  children,
  className = '',
  variants = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'py-2 px-4 rounded font-bold hover:text-primary-400 animated-underline',
        'border border-gray-600',
        {
          'bg-dark text-white': variants === 'primary',
          'bg-white text-dark hover:bg-gray-200 hover:text-dark transition-colors':
            variants === 'secondary',
        },
        className
      )}
    >
      {children}
    </button>
  );
}
