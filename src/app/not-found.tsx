import Link from 'next/link';
import { Icon } from '@/components/Icon';

export default function NotFound() {
  return (
    <section className="wrap lost">
      <p className="muted mono">404</p>
      <h1 className="h2">This page doesn’t exist.</h1>
      <p className="lead">It may have moved when the site was rebuilt.</p>
      <div className="btn-row">
        <Link className="btn btn-primary" href="/">
          Go Home
        </Link>
        <Link className="btn btn-outline" href="/work">
          See My Work <Icon name="arrow-right" size={18} />
        </Link>
      </div>
    </section>
  );
}
