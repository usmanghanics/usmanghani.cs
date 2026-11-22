import { brands, type BrandName } from '@/lib/brands';
import { bizcareLogo as L } from '@/lib/bizcare-logo';

/** A Simple Icons logo, in its brand colour or the current text colour. */
export function Brand({ name, size = 22, color = 'currentColor', label }: { name: string; size?: number; color?: string; label?: string }) {
  const d = brands[name as BrandName];
  if (!d) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      <path d={d} />
    </svg>
  );
}

export function BizcareLogo({ height = 28 }: { height?: number }) {
  const w = (L.width / L.height) * height;
  return (
    <svg width={w} height={height} viewBox={`0 0 ${L.width} ${L.height}`} fill="currentColor" role="img" aria-label="BizCare">
      <path d={L.mark} />
      <circle cx={L.dot.cx} cy={L.dot.cy} r={L.dot.r} fill="#017e84" />
      <path d={L.word} fillRule="evenodd" transform={`translate(${L.wordX} ${L.wordY})`} />
    </svg>
  );
}

/** Store buttons drawn like the official badges. */
export function PlayBadge({ href, name }: { href: string; name: string }) {
  return (
    <a className="badge" href={href} target="_blank" rel="noopener" aria-label={`Get ${name} on Google Play`}>
      <Brand name="googleplay" size={24} color="#fff" />
      <span>
        <small>GET IT ON</small>
        <b>Google Play</b>
      </span>
    </a>
  );
}

export function AppStoreBadge({ href, name }: { href: string; name: string }) {
  return (
    <a className="badge" href={href} target="_blank" rel="noopener" aria-label={`Download ${name} on the App Store`}>
      <Brand name="apple" size={24} color="#fff" />
      <span>
        <small>Download on the</small>
        <b>App Store</b>
      </span>
    </a>
  );
}
