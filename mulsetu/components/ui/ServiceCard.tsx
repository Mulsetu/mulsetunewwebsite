import type { ServiceOffering } from "@/lib/types";

type ServiceCardProps = ServiceOffering;

export default function ServiceCard({
  title,
  description,
  icon,
  points,
}: ServiceCardProps) {
  return (
    <article className="service-card">
      <div className="service-card__icon">
        {icon ? (
          <img src={icon} alt="" width={18} height={18} />
        ) : (
          <span aria-hidden="true" />
        )}
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__copy">{description}</p>
      {points?.length ? (
        <ul className="service-card__points">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
