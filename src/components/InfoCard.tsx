import { ReactNode } from 'react';

interface InfoCardProps {
  title: string;
  description: string;
  badge?: string;
  footer?: ReactNode;
}

// Tarjeta base para soluciones y productos; evita duplicar estructura visual.
export function InfoCard({ title, description, badge, footer }: InfoCardProps) {
  return (
    <article className="info-card">
      {badge ? <span className="info-card__badge">{badge}</span> : null}
      <h3>{title}</h3>
      <p>{description}</p>
      {footer ? <footer className="info-card__footer">{footer}</footer> : null}
    </article>
  );
}
