# ✨ Hero Section – Style Guide

## 🧠 Propósito Estratégico

La sección **Hero** debe captar la atención del usuario desde el primer segundo, transmitiendo claridad, confianza y profesionalismo. El foco está en potenciar el mensaje de valor: **activar el potencial del ISMS a través de Comblocks**, destacando simplicidad, impacto y organización desde el primer pantallazo.

---

## 🧩 Estructura del Componente

- **Contenedor principal:**  
  `section` de altura completa (`min-h-screen`), fondo negro, centrado tanto vertical como horizontalmente. Padding lateral adaptativo.

- **Decoración de fondo:**  
  Gradiente radial desde la esquina superior derecha, simulando un foco de luz sutil. Aporta profundidad visual sin distraer del contenido.

- **Layout interno:**  
  Dos columnas (`flex-col` en mobile, `flex-row` en desktop) con `gap` progresivo y paddings verticales amplios (`pt-40 pb-40`).

---

## 📝 Contenido y Tipografía

### 🅰️ Slogan Principal

```tsx
<h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7rem] font-light leading-[1.1] tracking-tight font-[var(--font-geist-sans)]">
  Activate your
  <br />
  <span className="font-semibold text-white">ISMS </span>potential
</h1>
```
# comblocks
