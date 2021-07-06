import { classNames } from '@/lib/helper';

export default function Button({ children, className = '', ...rest }) {
  return (
    <button
      {...rest}
      className={classNames(
        'inline-flex items-center font-bold hover:text-primary-500 animated-underline',
        className
      )}
    >
      {children}
    </button>
  );
}
