import { ArrowDown, ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "store";
  icon?: "arrow" | "down" | "none";
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  icon = "arrow",
  external,
}: ButtonProps) {
  const className = `button button-${variant}`;
  const iconNode =
    icon === "arrow" ? <ArrowUpRight size={16} /> : icon === "down" ? <ArrowDown size={16} /> : null;

  return (
    <MagneticButton
      href={href}
      className={className}
      external={external}
      icon={iconNode}
      strength={0.28}
    >
      {children}
    </MagneticButton>
  );
}
