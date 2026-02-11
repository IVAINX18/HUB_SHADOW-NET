import { MainLayout } from '../layouts/MainLayout';
import { ContactSection } from '../sections/ContactSection';
import { HeroSection } from '../sections/HeroSection';
import { ProductsSection } from '../sections/ProductsSection';
import { SolutionsSection } from '../sections/SolutionsSection';
import { TeamSection } from '../sections/TeamSection';

// Página principal del HUB; orquesta secciones sin mezclar lógica de presentación.
export function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <SolutionsSection />
      <ProductsSection />
      <TeamSection />
      <ContactSection />
    </MainLayout>
  );
}
