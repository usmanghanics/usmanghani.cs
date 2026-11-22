import { Icon } from './Icon';

export function StoreLinks({ play, appStore, web, name }: { play?: string; appStore?: string; web?: string; name: string }) {
  return (
    <div className="store-links">
      {play && (
        <a className="store" href={play} target="_blank" rel="noopener" aria-label={`${name} on Google Play`}>
          <Icon name="google-play-logo" size={18} /> Google Play
        </a>
      )}
      {appStore && (
        <a className="store" href={appStore} target="_blank" rel="noopener" aria-label={`${name} on the App Store`}>
          <Icon name="app-store-logo" size={18} /> App Store
        </a>
      )}
      {web && (
        <a className="store" href={web} target="_blank" rel="noopener" aria-label={`${name} website`}>
          <Icon name="globe" size={18} /> Website
        </a>
      )}
    </div>
  );
}
