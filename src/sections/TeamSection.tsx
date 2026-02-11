import { SectionTitle } from '../components/SectionTitle';
import { TeamMemberCard } from '../components/TeamMemberCard';
import { siteConfig } from '../constants/siteConfig';

// Sección institucional para mostrar líderes clave con enlaces directos.
export function TeamSection() {
  return (
    <section id="equipo" className="section">
      <SectionTitle
        eyebrow="EQUIPO"
        title="Liderazgo orientado a ejecución"
        description="Un equipo compacto y técnico, enfocado en construir productos y soluciones de calidad empresarial."
      />
      <div className="grid grid--2">
        {siteConfig.team.map((member) => (
          <TeamMemberCard
            key={member.name}
            role={member.role}
            name={member.name}
            github={member.github}
            portfolio={member.portfolio}
          />
        ))}
      </div>
    </section>
  );
}
