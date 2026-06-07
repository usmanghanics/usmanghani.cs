import type { App } from "@/data/apps";

type DeviceFrameProps = {
  app: App;
  size?: "small" | "medium" | "large";
  className?: string;
};

export function DeviceFrame({ app, size = "medium", className }: DeviceFrameProps) {
  return (
    <div className={`device-frame device-${size} ${className ?? ""}`}>
      <div className="device-screen device-screen-image">
        <img src={app.screenshots[0]} alt={`${app.name} app screenshot`} />
      </div>
    </div>
  );
}
