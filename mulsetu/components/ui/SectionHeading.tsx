import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  eyebrowVariant?: "pill-teal" | "pill-olive" | "dot";
  title?: React.ReactNode;
  lede?: string;
  align?: "left" | "center";
  rule?: boolean;
  label?: string;
  light?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  eyebrowVariant = "pill-olive",
  title,
  lede,
  align = "left",
  rule = false,
  label,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "section-heading",
        align === "center" && "section-heading--center",
        className,
      )}
    >
      {eyebrow ? <Badge variant={eyebrowVariant}>{eyebrow}</Badge> : null}
      {label ? (
        <div className="section-heading__label">
          <span className="section-heading__label-line" />
          {label}
        </div>
      ) : null}
      {title ? (
        <h2
          className={cn(
            "section-heading__title",
            light && "section-heading__title--light",
          )}
        >
          {title}
        </h2>
      ) : null}
      {rule ? <span className="section-heading__rule" /> : null}
      {lede ? <p className="section-heading__lede">{lede}</p> : null}
    </div>
  );
}
