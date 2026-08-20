import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

type TechnologyStackProps = {
  title?: string;
  items: string[];
  className?: string;
};

export default function TechnologyStack({
  title = "Technology Stack",
  items,
  className,
}: TechnologyStackProps) {
  return (
    <section className={cn("section", className)}>
      <div className="container">
        <div className="tech-stack">
          <SectionHeading title={title} align="center" />
          <ul className="tech-stack__list">
            {items.map((item) => (
              <li key={item} className="tech-stack__tag">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
