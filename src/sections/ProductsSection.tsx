import { InfoCard } from '../components/InfoCard';
import { SectionTitle } from '../components/SectionTitle';
import { siteConfig } from '../constants/siteConfig';

// Lista de productos actuales y espacio natural para productos futuros.
export function ProductsSection() {
  return (
    <section id="productos" className="section">
      <SectionTitle
        eyebrow="PRODUCTOS"
        title="Base preparada para un ecosistema SHADOW-NET"
        description="Cada producto vive como módulo independiente y puede agregarse sin romper la estructura del HUB."
      />
      <div className="grid grid--3">
        {siteConfig.products.map((product) => (
          <InfoCard
            key={product.name}
            title={product.name}
            description={product.description}
            badge={product.status}
            footer={
              <a href={product.link} className="text-link">
                Conocer más
              </a>
            }
          />
        ))}
      </div>
    </section>
  );
}
