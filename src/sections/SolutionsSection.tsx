import { InfoCard } from '../components/InfoCard';
import { SectionTitle } from '../components/SectionTitle';
import { siteConfig } from '../constants/siteConfig';

// Presenta las líneas de servicio principales del HUB.
export function SolutionsSection() {
  return (
    <section id="soluciones" className="section">
      <SectionTitle
        eyebrow="SOLUCIONES"
        title="Tecnología aplicada a resultados reales"
        description="Diseñamos e implementamos soluciones con enfoque de ingeniería, negocio y escalabilidad."
      />
      <div className="grid grid--4">
        {siteConfig.solutions.map((solution) => (
          <InfoCard key={solution.title} title={solution.title} description={solution.description} />
        ))}
      </div>
    </section>
  );
}
