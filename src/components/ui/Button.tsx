import { ArrowDown, ArrowUpRight } from "lucide-react";

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
  const rel = external ? "noreferrer" : undefined;
  const target = external ? "_blank" : undefined;

  return (
    <a className={className} href={href} rel={rel} target={target}>
      <span>{children}</span>
      {icon === "arrow" ? <ArrowUpRight size={16} /> : null}
      {icon === "down" ? <ArrowDown size={16} /> : null}
    </a>
  );
}
