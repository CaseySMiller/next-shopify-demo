import clsx from 'clsx';
import Image from 'next/image';
import Label from '../label';

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    minAmount: string;
    maxAmount: string;
    currencyCode: string;
    position?: 'bottom' | 'center';
  };
} & React.ComponentProps<typeof Image>) { 
  // if the types are happy and the component is an image then we return this jsx; otherwise, return null
  return (
    <div
      // clsx is a utility for conditionally joining class names together
      // this will apply the first set of classes no matter what
      // it will add on a different set of classes if active is true or false
      className={clsx(
        'group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black',
        {
          relative: label,
          'border-2 border-blue-600': active,
          'border-neutral-200 dark:border-neutral-800': !active
        }
      )}
    >
      {props.src ? (
        // eslint-disable-next-line jsx-a11y/alt-text -- `alt` is inherited from `props`, which is being enforced with TypeScript
        <Image
          className={clsx('relative h-full w-full object-contain', {
            'transition duration-300 ease-in-out group-hover:scale-105': isInteractive
          })}
          {...props}
        />
      ) : null}
      {label ? (
        <Label
          title={label.title}
          minAmount={label.minAmount}
          maxAmount={label.maxAmount}
          currencyCode={label.currencyCode}
          position={label.position}
        />
      ) : null}
    </div>
  );
}
