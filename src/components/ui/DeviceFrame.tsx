import type { App } from "@/data/apps";
import { LiquidGlassFrame } from "@/components/ui/LiquidGlassFrame";

type DeviceFrameProps = {
  app: App;
  size?: "small" | "medium" | "large";
  className?: string;
};

export function DeviceFrame({ app, size = "medium", className }: DeviceFrameProps) {
  return (
    <LiquidGlassFrame
      src={app.screenshots[0]}
      alt={`${app.name} app screenshot`}
      size={size}
      className={className}
      loading="eager"
    />
  );
}
