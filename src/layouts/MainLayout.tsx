import { ReactNode } from 'react';
import { shadowNetLogo } from '../assets/logo';

interface MainLayoutProps {
  children: ReactNode;
}

// Layout principal del HUB; define cabecera base y contenedor general.
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="app-shell">
      <header className="topbar" aria-label="Cabecera principal">
        <a href="#inicio" className="topbar__brand">
          <img src={shadowNetLogo} alt="Logo SHADOW-NET" />
          <span>SHADOW-NET HUB</span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#soluciones">Soluciones</a>
          <a href="#productos">Productos</a>
          <a href="#equipo">Equipo</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
