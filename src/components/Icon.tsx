import { icons, type IconName } from '@/lib/icons';

type Props = {
  name: IconName;
  size?: number;
  className?: string;
  /** Give a label only when the icon carries meaning on its own. */
  label?: string;
};

export function Icon({ name, size = 20, className, label }: Props) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="currentColor"
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
    >
      <path d={icons[name]} />
    </svg>
  );
}
