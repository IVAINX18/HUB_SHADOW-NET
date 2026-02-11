import { SectionTitle } from '../components/SectionTitle';

// Cierre del home orientado a convertir visitas en oportunidades de negocio.
export function ContactSection() {
  return (
    <section id="contacto" className="section section--contact">
      <SectionTitle
        eyebrow="CONTACTO"
        title="Conversemos sobre tu próximo desafío tecnológico"
        description="Escríbenos para evaluar una solución a medida o la integración de un producto SHADOW-NET en tu operación."
      />
      <a href="mailto:contacto@shadow-net.tech" className="button button--primary">
        contacto@shadow-net.tech
      </a>
    </section>
  );
}
