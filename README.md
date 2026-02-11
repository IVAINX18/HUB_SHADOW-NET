# SHADOW-NET HUB

Aplicación web profesional construida con **React + TypeScript** para representar el HUB oficial de SHADOW-NET.

## Objetivo del proyecto

Este repositorio es la base para escalar hacia múltiples productos (por ejemplo, `ShadowNet: Defender`) y mantener una arquitectura clara para un equipo pequeño de desarrollo.

## Estructura del proyecto

```text
src/
  assets/        # Referencias a recursos visuales (logo y futuros recursos)
  components/    # Componentes reutilizables y atómicos
  constants/     # Configuración central de textos, enlaces y listas
  layouts/       # Estructuras base (navbar, wrappers, shells)
  pages/         # Páginas completas (Home y futuras páginas de productos)
  sections/      # Bloques de alto nivel que componen cada página
  styles/        # Estilos globales y tokens visuales
```

> Los logos originales están en `Logos/` y se consumen desde `src/assets/logo.ts`.

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

## Cómo agregar nuevos productos

1. Abre `src/constants/siteConfig.ts`.
2. Agrega un nuevo objeto dentro de `products` con `name`, `description`, `status` y `link`.
3. Si el producto tendrá página propia:
   - crea `src/pages/NombreProductoPage.tsx`.
   - reutiliza `MainLayout` y crea secciones específicas en `src/sections/`.
4. Conecta la navegación desde el navbar en `src/layouts/MainLayout.tsx`.

## Cómo modificar secciones

Cada sección del Home está separada en `src/sections/`:

- `HeroSection.tsx`
- `SolutionsSection.tsx`
- `ProductsSection.tsx`
- `TeamSection.tsx`
- `ContactSection.tsx`

Para cambiar contenido sin tocar estructura, prioriza editar `src/constants/siteConfig.ts`.

## Cómo cambiar animaciones

Las animaciones se mantienen simples y están centralizadas en `src/styles/global.css`:

- Animación de entrada principal: `@keyframes fade-up`.
- Hover de tarjetas y botones: reglas `.info-card:hover`, `.team-card:hover` y `.button:hover`.

Si deseas desactivar animaciones rápidamente:

1. Elimina `animation: fade-up ...` de `.section`.
2. Elimina los `transform` en reglas `:hover`.

## Convenciones de mantenimiento

- Mantener componentes pequeños y con responsabilidad única.
- Centralizar textos y enlaces en `constants/`.
- Evitar mezclar lógica de layout con lógica de negocio.
- Comentar en español las piezas nuevas para facilitar onboarding.
