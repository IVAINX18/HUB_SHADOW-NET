import { shadowNetLogo } from '../assets/logo';
import { siteConfig } from '../constants/siteConfig';

// Sección de apertura con mensaje principal y llamadas a la acción.
export function HeroSection() {
  return (
    <section id="inicio" className="hero section">
      <div className="hero__content">
        <img src={shadowNetLogo} alt="Logo SHADOW-NET" className="hero__logo" />
        <p className="hero__tag">Startup tecnológica | IA + Software + Automatización</p>
        <h1>{siteConfig.brand.name}</h1>
        <p>{siteConfig.brand.slogan}</p>
        <div className="hero__actions">
          <a href={siteConfig.cta.primaryLink} className="button button--primary">
            {siteConfig.cta.primaryLabel}
          </a>
          <a href={siteConfig.cta.secondaryLink} className="button button--ghost">
            {siteConfig.cta.secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
