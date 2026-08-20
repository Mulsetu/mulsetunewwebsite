import { cn } from "@/lib/cn";

type BadgeVariant =
  | "pill-teal"
  | "pill-olive"
  | "olive"
  | "teal"
  | "filter"
  | "filter-active"
  | "dot";

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

export default function Badge({
  children,
  variant = "pill-teal",
  className,
}: BadgeProps) {
  return (
    <span className={cn("badge", `badge--${variant}`, className)}>
      {variant === "dot" ? <span className="badge__dot" /> : null}
      {children}
    </span>
  );
}
