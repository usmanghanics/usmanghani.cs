type LiquidGlassFrameProps = {
  src: string;
  alt: string;
  size?: "large" | "medium" | "small" | "card" | "featured" | "project" | "thumb";
  className?: string;
  loading?: "lazy" | "eager";
};

export function LiquidGlassFrame({
  src,
  alt,
  size = "medium",
  className,
  loading = "lazy",
}: LiquidGlassFrameProps) {
  return (
    <div className={`device-frame device-${size}${className ? ` ${className}` : ""}`}>
      <div className="device-screen device-screen-image">
        <img src={src} alt={alt} loading={loading} />
      </div>
    </div>
  );
}
