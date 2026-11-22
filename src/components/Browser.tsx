/** A website screenshot inside a glass-rim browser window. */
export function Browser({ src, alt, url, eager = false }: { src: string; alt: string; url: string; eager?: boolean }) {
  return (
    <figure className="browser">
      <div className="browser-inner">
        <div className="browser-bar" aria-hidden="true">
          <span className="browser-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="browser-url">{url}</span>
          <span style={{ width: 42 }} />
        </div>
        <img src={src} alt={alt} width={1400} height={875} loading={eager ? 'eager' : 'lazy'} decoding="async" />
      </div>
    </figure>
  );
}
