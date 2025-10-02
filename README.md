# JorgeMonteros.dev — Portafolio

Portafolio personal de **Jorge Monteros** (Full-Stack).  
Incluye inicio, secciones de habilidades/experiencia, y demos visuales de proyectos.

🌐 **Sitio en vivo:** https://stroky420.github.io

---

## 🚀 Páginas

- `/` → **Inicio** (index.html)
- `/demokatalia.html` → Demo con galería y descripciones (KataliaProV2)
- `/soluciones.html` → **Demo visual** (no funcional) del dashboard **Soluciones Financieras**
- `/eventia.html` → **Demo visual** (no funcional) de la landing **Eventia**

> ⚠️ Las páginas de **Soluciones** y **Eventia** son maquetas sin comportamiento por acuerdos de confidencialidad (NDA).

---

## 🧩 Stack

- HTML, CSS, JS (sin frameworks)
- GitHub Pages para hosting gratuito

---

## 📁 Estructura

.
├─ index.html
├─ styles.css
├─ script.js
├─ demokatalia.html
├─ soluciones.html
├─ eventia.html
├─ assets/
│ └─ CV.pdf
├─ data/
│ └─ profile.json
└─ img/
└─ Logo.png (y demás imágenes)

---

## ✏️ Edición rápida

- **Logo:** `img/Logo.png`  
  - Se usa en el header (`.brand-logo`) y en el hero (`.hero-logo`).

- **WhatsApp:** `index.html` → busca `wa.me/593995134638` y cambia si hace falta.  
  - Botón verde en “Contacto” (`.btn.whatsapp`) y link en “Socials”.

- **CV:** reemplaza `assets/CV.pdf` por tu archivo con el mismo nombre.

- **Texto de héroe (“Disponible para freelance”):**  
  - Badge visual: clase `.hero-badge` en `index.html`.  
  - Si no estás disponible, puedes ocultarlo (quitar el `div.hero-badge` o poner `display:none`).

- **Proyectos / Skills / Experiencia:** (si usas `profile.json`)
  - Edita `data/profile.json` y actualiza `script.js` si quieres más campos.
  - Demos apuntan a:
    ```json
    "demo": "demokatalia.html" | "soluciones.html" | "eventia.html"
    ```
