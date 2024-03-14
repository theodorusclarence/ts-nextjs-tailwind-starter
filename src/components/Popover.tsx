import clsx from 'clsx';
import { ReactNode } from 'react';

const Popover = ({
  trigger,
  reveal,
  triggerClassName,
}: {
  trigger: ReactNode;
  reveal: ReactNode;
  triggerClassName?: string;
}) => {
  return (
    <div className={clsx('cbo-popover__trigger', 'relative', triggerClassName)}>
      {trigger}
      <div
        className={clsx('cbo-popover__reveal', 'absolute left-0 top-full p-2')}
      >
        <div
          className={clsx(
            'border-1  min-w-[150px] overflow-hidden rounded-md border-solid border-gray-300 bg-white'
          )}
        >
          {reveal}
        </div>
      </div>
    </div>
  );
};

export default Popover;
