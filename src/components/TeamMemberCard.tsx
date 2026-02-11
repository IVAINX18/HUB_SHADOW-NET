interface TeamMemberCardProps {
  role: string;
  name: string;
  github: string;
  portfolio?: string;
}

// Tarjeta para mostrar perfiles del equipo de forma sobria y consistente.
export function TeamMemberCard({ role, name, github, portfolio }: TeamMemberCardProps) {
  return (
    <article className="team-card">
      <p className="team-card__role">{role}</p>
      <h3>{name}</h3>
      <div className="team-card__links">
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        {portfolio ? (
          <a href={portfolio} target="_blank" rel="noreferrer">
            Portafolio
          </a>
        ) : null}
      </div>
    </article>
  );
}
