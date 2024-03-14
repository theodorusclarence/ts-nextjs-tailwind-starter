import clsx from 'clsx';
import { ReactNode } from 'react';

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={clsx('rounded-xl bg-transparent p-3', className)}>{children}</div>
  );
};

export default Card
