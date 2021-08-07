import clsx from 'clsx';

export default function Button({ children, className = '', ...rest }) {
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
