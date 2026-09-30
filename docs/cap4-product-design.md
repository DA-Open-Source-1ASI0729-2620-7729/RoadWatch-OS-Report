# Product Design
## 4.1. Style Guidelines.
<a id="4-1-style-guidelines"></a>

El diseño se enfoca en una interfaz intuitiva que garantiza la seguridad y escalabilidad del sistema siendo capaz de manejar múltiples proyectos con alta disponibilidad y un control de acceso estrictamente definido por roles.

### 4.1.1. General Style Guidelines.
<a id="4-1-1-general-style-guidelines"></a>

En este apartado se detallan las decisiones de estilo que definen la identidad visual de RoadWatch OS, una plataforma web y móvil orientada al monitoreo ambiental y la gestión de proyectos de infraestructura. Las decisiones relacionadas con branding, paleta cromática, tipografía, espaciado y lenguaje buscan transmitir precisión técnica, sostenibilidad, claridad operativa y confianza.

### Colores:

![Colours - RoadWatch OS](/assets/images/Colours.png)
La paleta de colores de RoadWatch OS fue seleccionada para reflejar la integración entre el desarrollo de infraestructura vial y la preservación ambiental, garantizando legibilidad y jerarquía visual:

Verde Esmeralda Primario (#23A277): Simboliza sostenibilidad, cumplimiento ambiental y estados óptimos. Se utiliza en acciones primarias (botones de confirmación, accesos directos), estados activos e indicadores de éxito.

Azul Pizarra Oscuro (#1E3844): Transmite solidez, control técnico e infraestructura. Se aplica en contenedores destacados, tarjetas de información principal, encabezados oscuros y textos de alta jerarquía.

Fondo Crema Suave (#F6F5EE): Utilizado como fondo general de la aplicación. Sustituye al blanco puro para reducir la fatiga visual durante jornadas extensas de trabajo de campo o monitoreo continuo.

Mostaza / Amarillo Acento (#E5A93C): Aporta contraste e indicación de estado. Se emplea en etiquetas de categoría (badges como OUR PLATFORM), advertencias preventivas y llamadas de atención moderadas.

Gris Neutro y Bordes (#E2E8F0 / #64748B): Se utiliza en divisores, contornos de tarjetas, campos de texto de formularios y texto secundario para estructurar el contenido sin recargar la interfaz.

### Tipografía:


Se seleccionó la tipografía Rubik como fuente principal para toda la plataforma debido a sus trazos redondeados, estética moderna y alta legibilidad en pantallas de distintas resoluciones.

La jerarquía tipográfica se estructura mediante variaciones de peso (Regular, Medium, Bold) y tamaño: los títulos y métricas principales emplean pesos Bold para captar la atención de inmediato, mientras que las etiquetas secundarias y textos de lectura utilizan pesos Regular y Medium con interlineado amplio.

### Branding:
El branding de RoadWatch OS refleja la supervisión limpia y moderna de activos viales. El logotipo y los componentes de interfaz adoptan un enfoque minimalista con bordes marcadamente suavizados, transmitiendo cercanía, orden y rigurosidad técnica.

### Espaciado y Layout:
La interfaz utiliza un sistema basado en tarjetas independientes (cards) apiladas sobre el fondo crema. Se prioriza el uso de espacio negativo (whitespace) para evitar la saturación visual de datos ambientales complejos. Las tarjetas y botones cuentan con esquinas redondeadas (border-radius pronunciado) y márgenes padding consistentes para garantizar una experiencia limpia y responsiva en dispositivos móviles y de escritorio.

### Tono de comunicación y lenguaje aplicado:

El tono de voz en RoadWatch OS es profesional, preventivo y directo. Combina precisión técnica para el registro de métricas de telemetría con un lenguaje accesible que facilita la respuesta rápida de los oficiales ambientales ante alertas e incidentes en obra.


Además, se han considerado los siguientes aspectos clave en el diseño de RoadWatch OS:

**Consistencia:**

Todos los módulos de la plataforma (Landing Page, Módulo Operativo de la constructora y Módulo de Fiscalización de la supervisora) comparten la misma paleta, tipografía, componentes y código de colores de riesgo. Un indicador en estado crítico se ve igual en el mapa, en la tarjeta de KPI, en la tabla de incidencias y en el reporte PDF, de modo que el usuario reconoce el significado de cada elemento sin volver a aprenderlo en cada pantalla.

**Navegación:**

La navegación se organiza alrededor de las tareas reales de cada rol: el responsable ambiental de la constructora accede en uno o dos clics al Dashboard, las Alertas y las Incidencias para atender desviaciones; el auditor de la supervisora accede al Portafolio, al Historial de mediciones y a Reportes para fiscalizar. El menú lateral muestra únicamente las secciones que corresponden al rol autenticado.

**Accesibilidad:**

La plataforma se diseña para usarse tanto en gabinete (monitores de escritorio) como en campo (celulares a pleno sol). Por ello se emplean contrastes que cumplen el nivel AA de WCAG 2.1, zonas táctiles mínimas de 44 × 44 px, textos base de 14–16 px y un código de riesgo que **no depende solo del color**: cada estado se acompaña de un ícono y una etiqueta textual (Óptimo, Advertencia, Crítico).

**Elementos de Diseño:**

Además de los lineamientos de color, tipografía y branding, el diseño visual de RoadWatch OS aplica los elementos fundamentales del diseño gráfico para presentar datos ambientales complejos de forma clara.

La **línea** se utiliza con moderación para separar filas de tablas de mediciones, dividir secciones de formularios de evidencia y delimitar tarjetas, sin recargar la interfaz. El **color** cumple una función crítica de comunicación: el verde esmeralda indica estados óptimos y acciones principales, la mostaza señala advertencias preventivas y el rojo se reserva exclusivamente para sobrepasos de los Límites Máximos Permisibles (LMP), lo que evita la fatiga de alertas.

El **tamaño** se aplica de manera jerárquica: los valores de los KPIs (PM10, dB, pH) y el índice de salud ambiental del proyecto usan tipografía grande y en negrita, mientras que las unidades, fechas y metadatos usan tamaños menores. En cuanto a la **textura**, se opta por fondos planos color crema y mapas cartográficos simplificados para que los nodos de monitoreo destaquen sobre el trazado de la vía.

El **espacio** negativo separa las tarjetas del dashboard y agrupa la información relacionada, evitando la saturación típica de los paneles técnicos. Finalmente, las **formas** son geométricas y con bordes redondeados (8–16 px) en botones, tarjetas y badges, lo que refuerza una imagen moderna, ordenada y confiable.

**Principios de Diseño:**

El **contraste** destaca los elementos que requieren acción inmediata, como una alerta crítica, un ticket vencido o el botón de "Registrar evidencia". La **repetición** del sistema de semáforo (verde / mostaza / rojo) y de la iconografía de indicadores (aire, ruido, agua) genera consistencia en toda la plataforma.

La **alineación** organiza tablas de mediciones, listas de incidencias y formularios en una retícula de 12 columnas, mientras que la **proximidad** agrupa los datos que se leen juntos: el valor medido con su LMP y su tendencia, o la incidencia con su responsable, su plazo y su evidencia.

Estos principios integran un sistema de diseño funcional orientado al objetivo central de RoadWatch OS: que la constructora detecte y mitigue desviaciones ambientales a tiempo y que la supervisora audite con información confiable, clara e inalterable.


### 4.1.2. Web Style Guidelines.
<a id="4-1-2-web-style-guidelines"></a>

Los lineamientos web aterrizan la guía general en reglas concretas para la Landing Page y la aplicación web responsiva de RoadWatch OS.

**Retícula y breakpoints**

| Dispositivo | Ancho de referencia | Retícula | Márgenes / gutter |
| :--- | :--- | :--- | :--- |
| Desktop | 1440 px | 12 columnas | 80 px / 24 px |
| Tablet | 768 px | 8 columnas | 32 px / 16 px |
| Mobile | 390 px | 4 columnas | 16 px / 16 px |

En Desktop la aplicación usa un menú lateral fijo de 248 px y un área de contenido con tarjetas; en Mobile el menú lateral se convierte en una barra de navegación inferior con las cuatro secciones más usadas del rol.

**Escala tipográfica (Rubik)**

| Estilo | Tamaño / interlineado | Peso | Uso |
| :--- | :--- | :--- | :--- |
| H1 | 40 / 48 px | Bold | Títulos de la Landing Page |
| H2 | 28 / 36 px | Bold | Título de pantalla |
| H3 | 20 / 28 px | Medium | Títulos de tarjetas y secciones |
| KPI | 32 / 40 px | Bold | Valores de indicadores |
| Body | 16 / 24 px | Regular | Texto general |
| Small | 14 / 20 px | Regular | Tablas, metadatos |
| Caption | 12 / 16 px | Medium | Etiquetas, unidades, badges |

**Colores funcionales**

| Token | Hex | Uso |
| :--- | :--- | :--- |
| Primary | `#23A277` | Botones principales, estado Óptimo, enlaces activos |
| Secondary | `#1E3844` | Menú lateral, encabezados, texto de alta jerarquía |
| Tertiary / Warning | `#E5A93C` | Estado Advertencia, badges, alertas preventivas |
| Critical | `#D64545` | Estado Crítico (sobrepaso de LMP), errores |
| Background | `#F6F5EE` | Fondo general de la aplicación |
| Surface | `#FFFFFF` | Tarjetas, tablas, modales |
| Border | `#E2E8F0` | Bordes y divisores |
| Neutral | `#64748B` | Texto secundario, íconos inactivos |

**Componentes**

- **Botones:** primario (fondo `#23A277`, texto blanco), secundario (borde `#1E3844`), terciario (solo texto). Alto de 40 px en Desktop y 48 px en Mobile, radio de 8 px. Estados: normal, hover (10 % más oscuro), foco (anillo de 2 px), deshabilitado (40 % de opacidad).
- **Tarjetas de KPI:** fondo blanco, radio de 16 px, ícono del indicador, valor en estilo KPI, LMP de referencia y badge de estado.
- **Badges de riesgo:** Óptimo (verde), Advertencia (mostaza), Crítico (rojo); siempre con ícono y texto.
- **Tablas:** encabezado en `#1E3844` al 5 %, filas de 48 px, paginación inferior y filtros sobre la tabla.
- **Formularios:** campos de 44 px, etiqueta superior, mensaje de ayuda y de error debajo del campo.
- **Mapa:** marcadores circulares por nodo con el color de su estado y tooltip con la última lectura.
- **Gráficos:** línea de tendencia del indicador con una banda horizontal que marca el LMP.

**Iconografía:** íconos lineales de 24 px (conjunto Lucide) con trazo de 2 px. Cada tipo de indicador tiene un ícono fijo: aire (viento), ruido (onda de sonido), agua (gota).

**Microcopy:** botones con verbos en infinitivo ("Registrar evidencia", "Generar reporte"), mensajes de error que indican cómo resolver el problema y fechas en formato `dd/mm/aaaa hh:mm`.


## 4.2. Information Architecture.
<a id="4-2-information-architecture"></a>
La arquitectura de información de RoadWatch OS parte de una premisa: el estado ambiental de la obra (alertas activas, indicadores fuera de rango e incidencias pendientes) debe ser siempre el punto de partida de la navegación, y cada rol debe ver únicamente la información que le corresponde.

### 4.2.1. Organization Systems.
<a id="4-2-1-organization-systems"></a>
RoadWatch OS emplea principalmente una **organización jerárquica** para destacar la información crítica: el índice de salud ambiental del proyecto, las alertas activas y los indicadores que se acercan o superan su LMP se presentan con mayor jerarquía visual en el dashboard y en el mapa de nodos. Así, el usuario identifica de inmediato qué frente de obra requiere atención.

Se aplica una **organización secuencial** en los procesos que necesitan una guía paso a paso: la atención de un ticket de mitigación (revisar alerta → asignar responsable → registrar evidencia → cerrar incidencia), el alta de un nuevo punto de monitoreo y la generación del expediente de auditoría (seleccionar proyecto → rango de fechas → indicadores → exportar PDF).

En cuanto a los esquemas de categorización, se utiliza una **organización cronológica** para el historial de mediciones, el historial de estados de cada incidencia y el registro de evidencias; una **organización por tipo de indicador** (aire, ruido, agua) en los filtros y gráficos; y una **organización por audiencia**, ya que la constructora, la supervisora y el administrador Enterprise acceden a módulos y vistas distintas según su rol.

### 4.2.2. Labeling Systems.
<a id="4-2-2-labeling-systems"></a>

El sistema de etiquetado utiliza términos cortos, precisos y alineados al lenguaje de la gestión ambiental de obras viales, que son los términos que emplearon los entrevistados:

**Landing Page**

- **Inicio:** presentación de RoadWatch OS y su propuesta de valor.
- **Cómo funciona:** los pasos del servicio (instalación de nodos, monitoreo, alertas, auditoría).
- **Beneficios:** ventajas para constructoras y supervisoras.
- **Planes:** comparación de los planes Base, Profesional y Enterprise.
- **Equipo:** integrantes de VíaNexo.
- **Contacto:** formulario de contacto comercial o solicitud de demo.

**Módulo Operativo – Constructora**

- **Dashboard:** mapa de nodos, KPIs ambientales y alertas activas del proyecto.
- **Alertas:** notificaciones preventivas (Advertencia) y críticas (sobrepaso de LMP).
- **Incidencias:** tablero Kanban de tickets de mitigación (Abierta, En revisión, Resuelta).
- **Evidencias:** fotos georreferenciadas asociadas a cada incidencia.
- **Proyectos:** tramos viales asignados y su estado de cumplimiento.
- **Configuración:** perfil, notificaciones y preferencias.

**Módulo de Fiscalización – Supervisora**

- **Portafolio:** salud ambiental de todos los proyectos supervisados.
- **Mediciones:** historial de lecturas de solo lectura, con filtros por indicador y fecha.
- **Incidencias críticas:** sobrepasos registrados y estado de su mitigación.
- **Reportes:** generación y descarga de expedientes de auditoría en PDF.
- **Configuración:** perfil, usuarios y plan de suscripción.

### 4.2.3. SEO Tags and Meta Tags.
<a id="4-2-3-seo-tags-meta-tags"></a>

Para que la Landing Page de RoadWatch OS sea indexable y tenga un buen posicionamiento orgánico, se configuran los siguientes meta tags:

Title Tag:
`<title>RoadWatch OS | Monitoreo ambiental IoT para obras viales</title>`

Description:
`<meta name="description" content="Monitoreo continuo de aire, ruido y agua en obras viales con sensores IoT neutrales, alertas preventivas y reportes de auditoría inalterables para constructoras y supervisoras.">`

Keywords:
`<meta name="keywords" content="RoadWatch OS, monitoreo ambiental, obras viales, IoT, límites máximos permisibles, fiscalización ambiental, supervisión ambiental, OEFA, MTC">`

Open Graph:

`<meta property="og:title" content="RoadWatch OS: cumplimiento ambiental en tiempo real para obras viales">`

`<meta property="og:description" content="Detecta desviaciones antes de la multa y audita con datos inalterables. Sensores incluidos en tu suscripción.">`

`<meta property="og:image" content="https://roadwatch-os.com/assets/og-preview.png">`

`<meta property="og:url" content="https://roadwatch-os.com">`

Robots:
`<meta name="robots" content="index, follow">`

Idioma y viewport:
`<html lang="es">` y `<meta name="viewport" content="width=device-width, initial-scale=1">`

### 4.2.4. Searching Systems.
<a id="4-2-4-searching-systems"></a>

El sistema de búsqueda reduce el tiempo necesario para ubicar proyectos, puntos de monitoreo e incidencias:

**Búsqueda global:** ubicada en la barra superior de la aplicación. Permite buscar por nombre o código de proyecto, código de punto de monitoreo (por ejemplo, `N-03`), código de incidencia (por ejemplo, `INC-0142`) o responsable asignado.

**Filtros en Mediciones e Incidencias:**

- **Tipo de indicador:** aire (PM10 / PM2.5), ruido (dB), agua (pH, turbidez).
- **Estado de riesgo:** Óptimo, Advertencia, Crítico.
- **Rango de fechas:** selector de fecha inicial y final.
- **Proyecto y tramo:** para cuentas con varios frentes de obra.
- **Estado de la incidencia:** Abierta, En revisión, Resuelta, Estancada (sin seguimiento en 72 h).

**Búsqueda documental:** en Reportes, la supervisora puede localizar expedientes generados anteriormente por proyecto, periodo o palabra clave.

### 4.2.5. Navigation Systems.
<a id="4-2-5-navigation-systems"></a>

La navegación se estructura para que el usuario nunca esté a más de tres clics de la información que necesita:

**Navegación global:** menú lateral persistente en Desktop (barra inferior en Mobile) con las secciones del rol autenticado. Constructora: Dashboard, Alertas, Incidencias, Proyectos. Supervisora: Portafolio, Mediciones, Incidencias críticas, Reportes.

**Navegación contextual:** migas de pan que ubican al usuario dentro de la jerarquía, por ejemplo: *Proyectos › Carretera Central Tramo 2 › Nodo N-03 › INC-0142*.

**Navegación local:** pestañas dentro de cada sección, por ejemplo en el detalle de una incidencia: *Resumen · Evidencias · Comentarios · Historial*.

**Acciones rápidas:** botón flotante "Registrar evidencia" en Mobile para la constructora y botón "Generar reporte" siempre visible en el Portafolio de la supervisora, condicionados por los permisos del rol.


## 4.3. Landing Page UI Design.
<a id="4-3-landing-page-ui-design"></a>

En esta sección se presenta la propuesta de diseño de interfaz de usuario de la Landing Page, desarrollada a partir de la arquitectura de información previamente definida y de las necesidades identificadas en los usuarios.

La propuesta busca ofrecer una experiencia clara, intuitiva y accesible, organizando la información de acuerdo con su nivel de importancia. Para ello, se consideran principios de jerarquía visual, consistencia, proximidad, simplicidad y diseño inclusivo.

Asimismo, se han desarrollado versiones para **Desktop Web Browser** y **Mobile Web Browser**, adaptando la distribución de los componentes de acuerdo con el tamaño de pantalla.

---

### 4.3.1. Landing Page Wireframe.
<a id="4-3-1-landing-page-wireframe"></a>

Los wireframes permiten definir la estructura, distribución y jerarquía de los principales elementos de la Landing Page antes de incorporar los estilos visuales finales.

La propuesta ha sido desarrollada para versiones Desktop y Mobile, manteniendo la misma arquitectura de información y adaptando la disposición de los elementos según el dispositivo utilizado.

#### LANDING PAGE WEB

La versión Desktop aprovecha el espacio horizontal disponible para presentar los contenidos de manera amplia y ordenada.

**Barra de Navegación**:  
Ubicada en la parte superior de la interfaz, permite acceder a las principales secciones de la Landing Page.

**Título Principal**:  
Presenta la propuesta de valor principal del producto mediante un mensaje breve y de alta jerarquía visual.

**Texto**:  
Complementa el título principal explicando de forma resumida el propósito de la solución.

**Llamados a la Acción**:  
Orientan al usuario hacia las principales acciones disponibles dentro de la plataforma.

**Elemento Visual**:  
Refuerza visualmente la propuesta de valor presentada en el Hero Section.

![Wireframe Hero Desktop](../assets/images/heroDesktop.png)

**Figura X. Wireframe del Hero Section – Desktop Web Browser.**  

---

**Sección de Pilares de Gestión**:

Los pilares permiten comunicar los principales aspectos que sustentan la propuesta del producto.

- **Pilar 1**: Presenta el primer aspecto clave de la solución.
- **Pilar 2**: Representa el segundo eje de valor.
- **Pilar 3**: Completa la propuesta mediante el tercer eje de gestión.

**Contenido**:  
Cada pilar se organiza mediante bloques visuales diferenciados, facilitando su comprensión.

![Wireframe Funcionalidades Desktop](../assets/images/funcionalidadesDesktop.png)

**Figura X. Wireframe de funcionalidades – Desktop Web Browser.**  

---

**Planes**:

La sección de planes presenta las distintas opciones disponibles dentro del producto y facilita la comparación de sus principales características.

![Wireframe Planes Desktop](../assets/images/planesDesktop.png)

**Figura X. Wireframe de planes – Desktop Web Browser.**  

---

**Equipo**:

La sección de equipo permite presentar a los integrantes vinculados con el proyecto y reforzar la confianza hacia la solución.

![Wireframe Equipo Desktop](../assets/images/equipo.png)

**Figura X. Wireframe de equipo – Desktop Web Browser.**  

---

#### LANDING PAGE MOBILE

La versión Mobile conserva la arquitectura de información definida para Desktop, pero reorganiza los componentes principalmente en una disposición vertical.

**Cabecera y Navegación**:  
La navegación se simplifica para adaptarse al espacio disponible en dispositivos móviles.

**Headline**:  
El título principal mantiene su jerarquía visual, adaptando su tamaño al ancho de pantalla.

**Imagen de Soporte**:  
El recurso visual se adapta proporcionalmente al dispositivo móvil.

![Wireframe Hero Mobile](../assets/images/hero.png)

**Figura X. Wireframe del Hero Section – Mobile Web Browser.**  

---

**Acerca del Proyecto**:

Esta sección presenta de forma resumida el propósito del proyecto y la necesidad que busca resolver.

![Wireframe Acerca del Proyecto](../assets/images/AcercaDelProyecto.png)

**Figura X. Wireframe de Acerca del Proyecto – Mobile Web Browser.**  

---

**Beneficios y Pilares de Gestión**:

Los beneficios y pilares se organizan verticalmente para facilitar la lectura y mantener una estructura clara.

![Wireframe Beneficios Mobile](../assets/images/beneficios.png)

**Figura X. Wireframe de beneficios – Mobile Web Browser.**  

---

**Funcionalidades**:

Las funcionalidades principales se presentan mediante componentes independientes y distribuidos verticalmente.

![Wireframe Funcionalidades Mobile](../assets/images/funcionalidades.png)

**Figura X. Wireframe de funcionalidades – Mobile Web Browser.**  

---

**Cómo Funciona**:

Esta sección presenta de manera secuencial el proceso de uso de la solución, facilitando la comprensión del flujo de usuario.

![Wireframe Cómo Funciona Mobile](../assets/images/ComoFunciona.png)

**Figura X. Wireframe de Cómo Funciona – Mobile Web Browser.**  
---

**Equipo y Planes**:

Las secciones de equipo y planes se adaptan a una estructura vertical, permitiendo revisar cada bloque de contenido de manera independiente.

![Wireframe Equipo y Planes Mobile](../assets/images/equipo%20y%20planes.png)

**Figura X. Wireframe de Equipo y Planes – Mobile Web Browser.**  

---

#### Principios de Diseño Aplicados

La propuesta aplica jerarquía visual, proximidad, consistencia y simplicidad para facilitar la comprensión de la información y mantener patrones reconocibles durante la navegación.

Desde la perspectiva del diseño inclusivo, se consideran tamaños adecuados para elementos interactivos, separación entre componentes, organización visual clara y una estructura que no depende únicamente del color para transmitir información.

---

#### Arquitectura de Información

La información se organiza siguiendo un recorrido progresivo:

1. Hero Section.
2. Acerca del Proyecto.
3. Pilares de Gestión.
4. Beneficios.
5. Funcionalidades.
6. Cómo Funciona.
7. Planes.
8. Equipo.

Este orden permite presentar la información de lo general a lo específico y facilitar una navegación intuitiva.

---

### 4.3.2. Landing Page Mock-up.
<a id="4-3-2-landing-page-mock-up"></a>

Los mock-ups representan la propuesta visual de alta fidelidad de la Landing Page. En esta etapa se incorporan colores, tipografías, iconografía, componentes, espaciados y demás elementos establecidos dentro del Design System.

#### LANDING PAGE MOCK-UP WEB

La versión Web mantiene la estructura definida previamente en los wireframes y aplica la identidad visual final del producto.

![Landing Page Mock-up Web](../assets/images/chapter4/landing/landing-web.png)

**Figura X. Mock-up de la Landing Page – Desktop Web Browser.**

**Barra de Navegación**:
Logotipo de RoadWatch OS, enlaces a Inicio, Cómo funciona, Beneficios, Planes, Equipo y Contacto, y los accesos "Iniciar sesión" y "Solicitar demo".

**Hero Section**:
Titular "Detecta la desviación ambiental antes de la multa.", texto de apoyo sobre sensores neutrales, alertas preventivas y auditoría inalterable, y dos llamados a la acción diferenciados por segmento: "Soy constructora · Gestiona tu cartera" (US05) y "Soy consultora · Monitorea tu proyecto" (US04). A la derecha se muestra la demo del tablero geolocalizado con nodos y lecturas (US02).

**Acerca del Proyecto**:
Presenta la problemática del monitoreo manual y reactivo en obras viales, respaldada por cifras de las entrevistas y del mercado (RNCA).

**Pilares de Gestión**:
- **Monitoreo continuo:** nodos IoT neutrales para aire, ruido y agua.
- **Mitigación preventiva:** alertas al 90 % del límite y tickets automáticos.
- **Auditoría inalterable:** lecturas selladas y expedientes normativos en minutos.

**Beneficios Enumerados**:
- **01. Control en tiempo real**
- **02. Menos multas y paralizaciones**
- **03. Colaboración sin conflicto**
- **04. Reportes en minutos**

**Funcionalidades**:
Tablero geolocalizado, alertas tempranas, tickets de mitigación y reportes normativos, acompañados de una vista del dashboard.

**Cómo Funciona**:
Cuatro pasos: instalación de nodos, monitoreo en vivo, atención oportuna y auditoría con un clic.

**Impacto y Testimonio**:
Caso ilustrativo del usuario tipo y las metas de impacto definidas en los Impact Maps (−30 % en tiempo de respuesta y −40 % en tiempo de elaboración de expedientes) (US06).

**Planes**:
Comparación de los planes Base, Profesional y Enterprise, con el hardware incluido en la suscripción (US03).

**Equipo**:
Integrantes de VíaNexo con su rol en el proyecto.

**Contacto**:
Formulario de contacto comercial con nombre, empresa, correo y tipo de empresa (US08).

**Pie de Página**:
Enlaces de producto, empresa y legales, incluido el Libro de Reclamaciones.

---

#### LANDING PAGE MOCK-UP MOBILE

La versión Mobile conserva la identidad visual y los componentes establecidos para Desktop, adaptando su distribución a dispositivos de menor tamaño.

![Landing Page Mock-up Mobile](../assets/images/chapter4/landing/landing-mobile.png)

**Figura X. Mock-up de la Landing Page – Mobile Web Browser.**

**Header y Navegación**:
Logotipo y menú tipo hamburguesa.

**Título (H1)**:
Mantiene la jerarquía principal, adaptando el tamaño tipográfico al ancho de pantalla.

**Llamados a la Acción**:
Los botones de cada segmento se apilan a ancho completo para facilitar la interacción táctil.

**Elemento Visual**:
La demo del tablero geolocalizado se adapta proporcionalmente al ancho disponible.

**Cuerpo de Contenidos**:

1. **Acerca del proyecto:** las cifras se presentan una debajo de otra.
2. **Pilares de Gestión:** tarjetas verticales.
3. **Beneficios Enumerados (01-04):** lectura secuencial.
4. **Funcionalidades y Cómo funciona:** tarjetas apiladas en orden.

**Impacto y Testimonio**:
Bloque oscuro con la cita y las metas de impacto.

**Planes**:
Las tres tarjetas se apilan, destacando el plan Profesional.

**Equipo**:
Cuadrícula de dos columnas.

**Contacto y Footer**:
Formulario con campos a ancho completo y enlaces organizados verticalmente.

---


#### Aplicación del Design System

Los mock-ups aplican los criterios definidos dentro del Design System para mantener consistencia visual entre las diferentes secciones y dispositivos.

Se consideran:

- Paleta cromática definida para el producto.
- Jerarquía tipográfica para títulos, subtítulos y textos.
- Estilos consistentes para botones.
- Uso uniforme de iconografía.
- Espaciados y márgenes coherentes.
- Componentes reutilizables.
- Adaptación responsive.

De esta manera, la propuesta mantiene una identidad visual consistente y facilita una experiencia uniforme tanto en Desktop como en Mobile.

## 4.4. Web Applications UX/UI Design.
<a id="4-4-web-applications-ux-ui-design"></a>

En esta sección se presenta el diseño de experiencia e interfaz de la aplicación web de RoadWatch OS para sus dos segmentos objetivo. Cada pantalla se deriva de las User Stories del capítulo III y de los entregables definidos en los Impact Maps:

| Segmento | Persona | Módulo | Pantallas | User Stories |
| :--- | :--- | :--- | :--- | :--- |
| Empresas Constructoras Viales | Carlos Mendoza | Operativo | Login, Dashboard, Alertas, Kanban de incidencias, Detalle de incidencia, Registrar medición, Puntos de monitoreo | US01, US09, US11–US17, US20, US21, US29, US41, US43, US46, US47, US50–US52 |
| Empresas Supervisoras / Consultoras | Gisela Chávez | Fiscalización | Login, Portafolio (tarjetas y lista), Incidencias críticas, Historial de mediciones, Reporte de auditoría, Documentos normativos, Configuración | US10, US13, US18, US19, US22, US23, US33, US35, US36, US44, US45, US49, US50, US53–US57 |

Todas las pantallas aplican la guía de estilos del apartado 4.1: paleta Verde Esmeralda `#23A277`, Azul Pizarra `#1E3844`, Crema `#F6F5EE` y Mostaza `#E5A93C`; tipografía Rubik; tarjetas con bordes redondeados y el código de riesgo Óptimo / Advertencia / Crítico acompañado siempre de ícono y texto.

### 4.4.1. Web Applications Wireframes.
<a id="4-4-1-web-applications-wireframes"></a>

Los wireframes definen la estructura y jerarquía de cada pantalla antes de aplicar la identidad visual. Los mapas, gráficos y fotografías se representan como bloques de reemplazo para concentrar la evaluación en la distribución del contenido.

**Web applications**

Wireframe - Login (Desktop)

![Wireframe - Login Desktop](../assets/images/chapter4/webapp/wireframes/login.png)

Wireframe - Dashboard Operativo (Desktop)

![Wireframe - Dashboard Operativo Desktop](../assets/images/chapter4/webapp/wireframes/c-dashboard.png)

Wireframe - Centro de Alertas (Desktop)

![Wireframe - Centro de Alertas Desktop](../assets/images/chapter4/webapp/wireframes/c-alertas.png)

Wireframe - Tablero Kanban de Incidencias (Desktop)

![Wireframe - Kanban de Incidencias Desktop](../assets/images/chapter4/webapp/wireframes/c-incidencias.png)

Wireframe - Detalle de Incidencia (Desktop)

![Wireframe - Detalle de Incidencia Desktop](../assets/images/chapter4/webapp/wireframes/c-incidencia-detalle.png)

Wireframe - Registrar Medición (Desktop)

![Wireframe - Registrar Medición Desktop](../assets/images/chapter4/webapp/wireframes/c-registrar-medicion.png)

Wireframe - Puntos de Monitoreo (Desktop)

![Wireframe - Puntos de Monitoreo Desktop](../assets/images/chapter4/webapp/wireframes/c-puntos.png)

Wireframe - Portafolio en Tarjetas (Desktop)

![Wireframe - Portafolio Tarjetas Desktop](../assets/images/chapter4/webapp/wireframes/s-portafolio.png)

Wireframe - Portafolio en Lista (Desktop)

![Wireframe - Portafolio Lista Desktop](../assets/images/chapter4/webapp/wireframes/s-portafolio-lista.png)

Wireframe - Incidencias Críticas (Desktop)

![Wireframe - Incidencias Críticas Desktop](../assets/images/chapter4/webapp/wireframes/s-criticas.png)

Wireframe - Historial de Mediciones (Desktop)

![Wireframe - Historial de Mediciones Desktop](../assets/images/chapter4/webapp/wireframes/s-historial.png)

Wireframe - Reporte de Auditoría (Desktop)

![Wireframe - Reporte de Auditoría Desktop](../assets/images/chapter4/webapp/wireframes/s-reporte.png)

Wireframe - Documentos Normativos (Desktop)

![Wireframe - Documentos Normativos Desktop](../assets/images/chapter4/webapp/wireframes/s-documentos.png)

Wireframe - Configuración de Cuenta (Desktop)

![Wireframe - Configuración Desktop](../assets/images/chapter4/webapp/wireframes/s-configuracion.png)

**Web applications mobile**

| Login | Dashboard Operativo | Alertas | Registrar Evidencia |
| :---: | :---: | :---: | :---: |
| ![Wireframe - Login Mobile](../assets/images/chapter4/webapp/wireframes/m-login.png) | ![Wireframe - Dashboard Mobile](../assets/images/chapter4/webapp/wireframes/m-c-dashboard.png) | ![Wireframe - Alertas Mobile](../assets/images/chapter4/webapp/wireframes/m-c-alertas.png) | ![Wireframe - Evidencia Mobile](../assets/images/chapter4/webapp/wireframes/m-c-evidencia.png) |

| Nueva Medición | Portafolio | Mediciones | Reporte |
| :---: | :---: | :---: | :---: |
| ![Wireframe - Medición Mobile](../assets/images/chapter4/webapp/wireframes/m-c-medicion.png) | ![Wireframe - Portafolio Mobile](../assets/images/chapter4/webapp/wireframes/m-s-portafolio.png) | ![Wireframe - Mediciones Mobile](../assets/images/chapter4/webapp/wireframes/m-s-historial.png) | ![Wireframe - Reporte Mobile](../assets/images/chapter4/webapp/wireframes/m-s-reporte.png) |


## 4.4.2. Web Applications Wireflow Diagrams.
<a id="4-4-2-web-applications-wireflow-diagrams"></a>

Los wireflows combinan los wireframes con las interacciones que conectan una pantalla con otra. Cada flecha indica la acción del usuario (botón, enlace o pestaña) y las flechas rojas representan transiciones automáticas del sistema, como la alerta generada cuando una medición supera el 90 % del LMP.

**Segmento 1: Empresas Constructoras Viales — Web**

**El usuario inicia sesión, revisa el dashboard, abre la alerta, atiende el ticket y lo mueve a revisión; desde el dashboard también registra mediciones y edita puntos de monitoreo**

![Wireflow - Constructora Web](../assets/images/chapter4/webapp/wireflows/wireflow-constructora-web.png)

**Segmento 1: Empresas Constructoras Viales — Mobile**

**En campo, el usuario atiende la alerta desde su celular, registra la evidencia fotográfica y envía el ticket a revisión, o registra una medición manual**

![Wireflow - Constructora Mobile](../assets/images/chapter4/webapp/wireflows/wireflow-constructora-mobile.png)

**Segmento 2: Empresas Supervisoras / Consultoras — Web**

**El usuario revisa el portafolio, prioriza el proyecto crítico, valida la mitigación, consulta el historial y genera el expediente de auditoría; si falta un documento obligatorio, lo gestiona en Documentos normativos**

![Wireflow - Supervisora Web](../assets/images/chapter4/webapp/wireflows/wireflow-supervisora-web.png)

**Segmento 2: Empresas Supervisoras / Consultoras — Mobile**

**El usuario consulta el portafolio, revisa las mediciones del periodo y comparte el reporte desde su celular**

![Wireflow - Supervisora Mobile](../assets/images/chapter4/webapp/wireflows/wireflow-supervisora-mobile.png)


## 4.4.3. Web Applications Mock-ups.
<a id="4-4-3-web-applications-mock-ups"></a>

Los mock-ups representan la versión de alta fidelidad de cada pantalla, con la paleta, tipografía, iconografía y componentes definidos en la guía de estilos.

**Versión Desktop Mockups - Empresas Constructoras Viales (Carlos Mendoza)**

**El usuario inicia con el Login correspondiente colocando su correo corporativo y contraseña (US01, US21)**

![Mockup - Login Desktop](../assets/images/chapter4/webapp/mockups/login.png)

**El usuario entra y lo primero que observa es el Dashboard operativo: KPIs de cumplimiento, mapa de nodos IoT con semáforo de riesgo, alertas recientes, salud del tramo, clima en obra y la tendencia del indicador (US12, US13, US15, US17, US50, US51)**

![Mockup - Dashboard Operativo Desktop](../assets/images/chapter4/webapp/mockups/c-dashboard.png)

**El usuario abre el Centro de alertas, donde distingue alertas críticas, preventivas (≥ 90 % del LMP), incidencias estancadas y nodos sin conexión (US17, US46, US47)**

![Mockup - Centro de Alertas Desktop](../assets/images/chapter4/webapp/mockups/c-alertas.png)

**El usuario abre el ticket creado automáticamente por el motor normativo, adjunta evidencias fotográficas georreferenciadas, conversa con el residente de campo y revisa el historial de estados (US14, US16, US43, US52)**

![Mockup - Detalle de Incidencia Desktop](../assets/images/chapter4/webapp/mockups/c-incidencia-detalle.png)

**El usuario mueve la incidencia en el tablero Kanban entre las columnas Abierta, En revisión y Resuelta (US11, US29)**

![Mockup - Kanban de Incidencias Desktop](../assets/images/chapter4/webapp/mockups/c-incidencias.png)

**El usuario registra una medición manual; el formulario valida los campos y deshabilita el botón Guardar si el valor está fuera de rango (US09)**

![Mockup - Registrar Medición Desktop](../assets/images/chapter4/webapp/mockups/c-registrar-medicion.png)

**El usuario revisa los puntos de monitoreo y edita la ubicación o el umbral normativo de un punto sin recargar la página (US20, US38, US41)**

![Mockup - Puntos de Monitoreo Desktop](../assets/images/chapter4/webapp/mockups/c-puntos.png)

**Versión Desktop Mockups - Empresas Supervisoras / Consultoras (Gisela Chávez)**

**El usuario entra al Portafolio y ve la salud ambiental global y una tarjeta por proyecto con su semáforo de estado (US10, US33, US44, US50)**

![Mockup - Portafolio Tarjetas Desktop](../assets/images/chapter4/webapp/mockups/s-portafolio.png)

**El usuario cambia a la vista de lista para revisar más proyectos en una sola pantalla (US22, US48, US55)**

![Mockup - Portafolio Lista Desktop](../assets/images/chapter4/webapp/mockups/s-portafolio-lista.png)

**El usuario revisa la tabla de incidencias críticas con filas resaltadas, consulta la bitácora y valida u observa la mitigación de la constructora (US18, US33, US52)**

![Mockup - Incidencias Críticas Desktop](../assets/images/chapter4/webapp/mockups/s-criticas.png)

**El usuario filtra el historial de mediciones por indicador y rango de fechas; las lecturas son de solo lectura y muestran su hash de integridad (US13, US19, US49)**

![Mockup - Historial de Mediciones Desktop](../assets/images/chapter4/webapp/mockups/s-historial.png)

**El usuario configura y genera el expediente de auditoría en PDF con vista previa (US35, US36, US45)**

![Mockup - Reporte de Auditoría Desktop](../assets/images/chapter4/webapp/mockups/s-reporte.png)

**El usuario gestiona los documentos normativos del hito de auditoría y su historial de versiones; el hito no se puede cerrar si falta un documento requerido (US54, US56)**

![Mockup - Documentos Normativos Desktop](../assets/images/chapter4/webapp/mockups/s-documentos.png)

**El usuario administra los usuarios y roles de su cuenta, su plan de suscripción y el color de marca (US23, US42, US53, US57)**

![Mockup - Configuración Desktop](../assets/images/chapter4/webapp/mockups/s-configuracion.png)

**Versión Mobile Mockups - Empresas Constructoras Viales (Carlos Mendoza)**

| El usuario inicia sesión | El usuario ve la alerta crítica en su Dashboard | El usuario revisa sus alertas | El usuario registra la evidencia del ticket | El usuario registra una medición |
| :---: | :---: | :---: | :---: | :---: |
| ![Mockup - Login Mobile](../assets/images/chapter4/webapp/mockups/m-login.png) | ![Mockup - Dashboard Mobile](../assets/images/chapter4/webapp/mockups/m-c-dashboard.png) | ![Mockup - Alertas Mobile](../assets/images/chapter4/webapp/mockups/m-c-alertas.png) | ![Mockup - Evidencia Mobile](../assets/images/chapter4/webapp/mockups/m-c-evidencia.png) | ![Mockup - Medición Mobile](../assets/images/chapter4/webapp/mockups/m-c-medicion.png) |

**Versión Mobile Mockups - Empresas Supervisoras / Consultoras (Gisela Chávez)**

| El usuario revisa los proyectos que requieren atención | El usuario consulta las mediciones del periodo | El usuario genera y comparte el reporte |
| :---: | :---: | :---: |
| ![Mockup - Portafolio Mobile](../assets/images/chapter4/webapp/mockups/m-s-portafolio.png) | ![Mockup - Mediciones Mobile](../assets/images/chapter4/webapp/mockups/m-s-historial.png) | ![Mockup - Reporte Mobile](../assets/images/chapter4/webapp/mockups/m-s-reporte.png) |


## 4.4.4. Web Applications User Flow Diagrams.
<a id="4-4-4-web-applications-user-flow-diagrams"></a>

Los user flows describen, paso a paso, el recorrido que sigue cada persona para cumplir su objetivo principal, incluyendo los puntos de decisión y los caminos alternos.

**Segmento 1: Empresas Constructoras Viales**

**User Flow Web — Atender una alerta de sobrepaso**<br>

**El usuario inicia sesión; si las credenciales no son válidas, el sistema muestra un error y le permite reintentar**

**El usuario revisa el Dashboard y ve la alerta; si es crítica, abre el ticket creado por el motor normativo; si es preventiva, la atiende y abre un ticket**

**El usuario registra la acción de mitigación y sube la evidencia fotográfica georreferenciada**

**Si la evidencia está completa, el usuario mueve el ticket a “En revisión” y espera la validación de la supervisora**

![User Flow - Constructora Web](../assets/images/chapter4/webapp/userflows/userflow-constructora-web.png)

**User Flow Mobile — Registrar medición y evidencia en campo**<br>

**El usuario ingresa con huella o contraseña y ve la alerta en el Dashboard**

**Si necesita medir, registra una nueva medición; si el valor alcanza el 90 % del LMP, el sistema emite una alerta y crea un ticket**

**Si necesita mitigar, abre el ticket asignado, toma la foto con coordenadas y lo envía a revisión**

![User Flow - Constructora Mobile](../assets/images/chapter4/webapp/userflows/userflow-constructora-mobile.png)

**Segmento 2: Empresas Supervisoras / Consultoras**

**User Flow Web — Fiscalizar y generar el expediente de auditoría**<br>

**El usuario inicia sesión y revisa la salud del portafolio**

**El usuario abre las incidencias críticas; si la mitigación tiene evidencia, la valida; si no, emite una observación a la constructora**

**El usuario filtra el historial por indicador y fechas y configura el reporte de auditoría**

**Si los documentos obligatorios están completos, genera y descarga el PDF; si no, sube o solicita el documento faltante**

![User Flow - Supervisora Web](../assets/images/chapter4/webapp/userflows/userflow-supervisora-web.png)

**User Flow Mobile — Consultar el portafolio y compartir el reporte**<br>

**El usuario inicia sesión y revisa los proyectos que requieren atención**

**Si hay un proyecto crítico, consulta sus mediciones, genera el reporte en PDF y lo comparte con el ente fiscalizador**

![User Flow - Supervisora Mobile](../assets/images/chapter4/webapp/userflows/userflow-supervisora-mobile.png)

## 4.5. Web Applications Prototyping.
<a id="4-5-web-applications-prototyping"></a>

A partir de los mock-ups se elaboró un prototipo navegable que conecta todas las pantallas mediante zonas clicables (botones, menú lateral, pestañas y tarjetas), de modo que se pueden recorrer los flujos principales de ambos segmentos tanto en Desktop como en Mobile. El prototipo se encuentra en la carpeta [`prototype/`](../prototype/index.html) del repositorio; al abrir `prototype/index.html` se elige el recorrido y, con la opción **“Mostrar zonas clicables”**, se resaltan los puntos de interacción.

| Recorrido | Pantallas conectadas |
| :--- | :--- |
| Constructora · Web | Login → Dashboard → Alertas → Detalle de incidencia → Kanban → Registrar medición → Puntos de monitoreo |
| Supervisora · Web | Login → Portafolio → Incidencias críticas → Historial → Reporte de auditoría → Documentos → Configuración |
| Constructora · Mobile | Login → Dashboard → Registrar evidencia → Alertas → Nueva medición |
| Supervisora · Mobile | Login → Portafolio → Mediciones → Reporte |

**Prototipo · Empresas Constructoras Viales (Web)**

![Prototipo - Constructora Web](../assets/images/chapter4/webapp/prototype/prototipo-constructora-web.gif)

**Prototipo · Empresas Supervisoras / Consultoras (Web)**

![Prototipo - Supervisora Web](../assets/images/chapter4/webapp/prototype/prototipo-supervisora-web.gif)

| Prototipo · Constructora (Mobile) | Prototipo · Supervisora (Mobile) |
| :---: | :---: |
| ![Prototipo - Constructora Mobile](../assets/images/chapter4/webapp/prototype/prototipo-constructora-mobile.gif) | ![Prototipo - Supervisora Mobile](../assets/images/chapter4/webapp/prototype/prototipo-supervisora-mobile.gif) |


## 4.6. Domain-Driven Software Architecture.
<a id="4-6-domain-driven-software-architecture"></a>

### 4.6.1. Design-Level EventStorming.
<a id="4-6-1-design-level-eventstorming"></a>

En esta sesión de Design-Level EventStorming, el equipo profundizó en la arquitectura orientada a eventos de **RoadWatch**. Se identificaron los límites transaccionales exactos (Bounded Contexts) que modularizan el sistema SaaS y el flujo IoT, mapeando la coreografía de eventos que automatiza la respuesta ante infracciones ambientales.

**Global EventStorming Map**

<div align="center">
  <img src="../assets/images/EventStorming.jpg" alt="RoadWatch Global Event Storming">
</div>

*Leyenda de Elementos Aplicados*
<table align="center">
  <tr>
    <td align="center" style="background-color: #FDE181; color: #000;">
      <b>User / Actor (Amarillo)</b><br>Quien ejecuta la acción
    </td>
    <td align="center" style="background-color: #8CD2F5; color: #000;">
      <b>Command (Azul)</b><br>La intención o acción a ejecutar
    </td>
    <td align="center" style="background-color: #F9A454; color: #000;">
      <b>Domain Event (Naranja)</b><br>Hecho relevante ocurrido
    </td>
  </tr>
  <tr>
    <td align="center" style="background-color: #C7ACF3; color: #000;">
      <b>Policy (Morado)</b><br>Regla de negocio o automatización
    </td>
    <td align="center" style="background-color: #8BE78B; color: #000;">
      <b>Read Model / View (Verde)</b><br>Datos proyectados para el usuario
    </td>
    <td align="center">
      <b>Flujo Externo (Flechas)</b><br>Coreografía entre contextos
    </td>
  </tr>
</table>

#### Bounded Contexts Identificados


**1. Subscriptions & Payment Management**
Gestiona el ciclo de vida comercial del cliente (constructoras o consultoras). Se encarga de la selección de planes SaaS (Base, Pro, Enterprise), validación de pagos y la activación de la suscripción, liberando las políticas de acceso para el uso de la plataforma.

**2. Identity & Access Management (IAM)**
Administra la seguridad, el onboarding de empresas y el control de acceso basado en roles (RBAC). Asegura que solo ingenieros, técnicos o administradores autorizados puedan interactuar con los proyectos y sensores correspondientes.

**3. Project Management**
Contexto core para la creación y delimitación de los proyectos viales. Aquí los Project Managers definen las coordenadas geográficas de la obra, establecen las líneas base ambientales y determinan los puntos exactos donde se instalará el hardware de monitoreo.

**4. Device & Asset Management (IoT Fleet)**
Controla el ciclo de vida del hardware físico desplegado en campo. Los técnicos registran, instalan y calibran los sensores. Este módulo detecta caídas de conexión (offline) y expiraciones de calibración, garantizando la fiabilidad de los datos recolectados.

**5. Environmental Monitoring**
El motor telemétrico principal de RoadWatch. Recibe el flujo continuo de datos de calidad del aire y ruido desde los sensores IoT, normaliza la data y la evalúa contra los umbrales normativos vigentes. Si se excede un límite crítico, emite eventos de alerta inmediatos.

**Device and Asset Mgmt**

**6. Incident & Mitigation Management**
Módulo de reacción automatizada. Escucha los eventos críticos del monitoreo ambiental y dispara políticas de creación automática de tickets de incidencia. Gestiona el flujo de trabajo (workflow) para que los responsables ambientales ejecuten y registren las acciones de mitigación correspondientes.

**7. Document & Evidence Management**
Actúa como la bóveda digital y trazabilidad legal. Exige y almacena la evidencia fotográfica y los formularios firmados tras la mitigación de una incidencia, aplicando políticas de retención y escaneo de seguridad (virus scan) para mantener un *audit trail* inmutable.

**8. Reports & Compliance**
Consolida la información de todo el sistema para fines de auditoría. Agrega los datos telemétricos crudos y el historial de incidencias cerradas para generar reportes normativos automatizados en PDF y permitir la integración con APIs gubernamentales.

#### Arquitectura de Eventos y Coreografía (Relaciones Externas)
Para que RoadWatch funcione de manera autónoma, los microservicios se comunican asíncronamente mediante *Domain Events*:
* **Provisioning:** El evento `Subscription Activated` (C1) habilita la `Subscription Limit Policy` en Proyectos (C3). A su vez, `Roles Assigned` (C2) autoriza las interacciones técnicas en el sistema.
* **IoT Setup:** El evento `Monitoring Points Defined` (C3) es prerrequisito para ejecutar el comando `Install Sensor on Site` (C4), conectando la definición lógica del proyecto con la instalación física.
* **Motor Reactivo:** El hardware instalado (`Sensor Installed`) inicia la transmisión telemétrica (C5). Cuando el motor detecta una infracción y emite el evento `Critical Normative Limit Exceeded` (C5), este dispara directamente la `Auto-Ticket Generation Policy` en Incidencias (C6), eliminando el factor de error humano.
* **Trazabilidad Normativa:** El registro de una acción correctiva (`Mitigation Action Logged`, C6) bloquea el cierre del ticket hasta que se cumpla el comando `Upload Photographic Evidence` (C7). Finalmente, el cierre formal alimenta la `Data Aggregation Policy` (C8) para las auditorías.


<div style="text-align: left; max-width: 900px; margin: 0 auto;">

### 4.6.2. Software Architecture Context Diagram.
El Diagrama de Contexto representa la vista de más alto nivel de RoadWatch, detallando cómo el sistema interactúa con los usuarios y sistemas externos sin profundizar en detalles técnicos.
<a id="4-6-2-software-architecture-context-diagram"></a>

#### Sistema Central



* **RoadWatch**: Solución integral para la gestión y monitoreo ambiental de proyectos de infraestructura vial, orientada a centralizar la información, detectar riesgos ambientales y facilitar el cumplimiento de las normativas.

#### Usuarios

##### Segmento A: Empresas Constructoras Viales


* Gestionan proyectos de construcción y mantenimiento de carreteras.
* Supervisan las condiciones ambientales de sus proyectos.
* Identifican y atienden riesgos e incidentes ambientales.
* Realizan seguimiento de medidas de mitigación y cumplimiento normativo.

##### Segmento B: Consultoras y Supervisoras Ambientales



* Supervisan el cumplimiento ambiental de múltiples proyectos.
* Realizan inspecciones y monitoreo de indicadores ambientales.
* Validan evidencias y acciones de mitigación.
* Elaboran reportes y dan seguimiento a las incidencias detectadas.

#### Sistemas Externos



* **Servicio de Mapas y Geolocalización**
  Permite visualizar proyectos, puntos de monitoreo e incidencias ambientales mediante información geográfica.

* **Servicio Meteorológico**
  Proporciona información climática que permite relacionar las condiciones ambientales con posibles riesgos dentro de los proyectos.

* **Servicio de Notificaciones**
  Permite enviar alertas automáticas a los responsables cuando se detectan riesgos, incidencias o condiciones que requieren atención.

#### Resumen de Interacción



* Los usuarios (Segmento A y B) interactúan directamente con **RoadWatch**.
* **RoadWatch** centraliza la información ambiental y gestiona:

  * Monitoreo de indicadores ambientales.
  * Registro y seguimiento de incidencias.
  * Acciones de mitigación y responsables.
  * Evidencias y trazabilidad de las actividades.
* **RoadWatch** integra servicios externos para:

  * Geolocalización mediante servicios de mapas.
  * Consulta de condiciones meteorológicas.
  * Envío de notificaciones y alertas.
* Los dispositivos **IoT** pueden enviar datos de sensores ambientales a RoadWatch, permitiendo detectar automáticamente condiciones fuera de los parámetros establecidos y generar alertas o incidencias para su atención.

![Diagrama de Contexto C4 - RoadWatch OS](/assets/images/ContextDiagram.png)


### 4.6.3. Software Architecture Container Diagrams.
Este nivel desglosa el sistema RoadWatch en aplicaciones y componentes independientes, especificando las tecnologías y responsabilidades principales de cada contenedor que conforma la solución.

Web Application


Aplicación web desarrollada con Vue.js, encargada de proporcionar una interfaz interactiva para empresas constructoras viales y consultoras ambientales.

Permite:

Visualizar dashboards de monitoreo ambiental.
Gestionar proyectos y puntos de monitoreo.
Consultar incidencias y alertas.
Registrar y supervisar acciones de mitigación.
Visualizar información geolocalizada.
Consultar evidencias y generar reportes.

La aplicación se comunica con el backend mediante peticiones HTTPS hacia la API RESTful.

API Application


Construida en C# utilizando ASP.NET Core, constituye el núcleo de RoadWatch y centraliza la lógica de negocio y el procesamiento de la información ambiental.

Este componente se encarga de:

Gestionar proyectos y puntos de monitoreo.
Procesar información proveniente de los dispositivos IoT.
Analizar los valores de los indicadores ambientales.
Comparar los datos recibidos con umbrales configurados.
Generar automáticamente alertas e incidencias.
Gestionar acciones de mitigación y responsables.
Exponer endpoints RESTful para la Web Application.
Integrarse con servicios externos de mapas, clima y notificaciones.
IoT Monitoring


Componente encargado de recibir y gestionar los datos provenientes de sensores ambientales instalados en los proyectos viales.

Los dispositivos IoT pueden monitorear variables como:

Calidad del aire.
Nivel de ruido.
Temperatura.
Humedad.
Calidad del agua.

Los datos recopilados son enviados hacia la API Application, donde son procesados y evaluados según los parámetros ambientales establecidos. Cuando se detecta un valor fuera del rango permitido, RoadWatch puede generar automáticamente una alerta e incidencia para su atención.

Database


Motor de base de datos relacional basado en MySQL, responsable de almacenar de forma persistente la información generada por RoadWatch.

Garantiza:

Integridad de la información de los proyectos.
Persistencia de los datos de monitoreo ambiental.
Registro histórico de incidencias y alertas.
Trazabilidad de las acciones de mitigación.
Almacenamiento de responsables, evidencias y estados.
Consulta histórica para la generación de reportes.

La API Application es responsable de gestionar las operaciones de lectura y escritura sobre la base de datos, evitando que la Web Application acceda directamente a ella.

![Diagrama de Contenedores C4 - RoadWatch OS](/assets/images/ContainerDiagram.png)


### 4.6.4. Software Architecture Components Diagrams.
<a id="4-6-4-software-architecture-components-diagrams"></a>

En el nivel de componentes se detalla la descomposición interna de los contenedores de RoadWatch, mostrando los bloques estructurales que conforman la solución y las relaciones entre ellos. Debido a que la Web Application y la Database pueden ser complementadas mediante diagramas específicos de frontend y base de datos, esta sección pone especial énfasis en el contenedor API Application, donde se concentra la lógica de negocio y el procesamiento de la información ambiental.

El diagrama de componentes de la API Application organiza la arquitectura interna de RoadWatch de acuerdo con los principales contextos funcionales del dominio. Cada módulo backend representa un componente encargado de una responsabilidad específica:

Project Management Backend: administra los proyectos viales, sus datos generales, ubicaciones, estados y puntos de monitoreo asociados. Permite crear, consultar, actualizar y gestionar la información de los proyectos.
Environmental Monitoring Backend: procesa y administra los indicadores ambientales registrados en los proyectos, permitiendo consultar mediciones históricas y actuales de variables como calidad del aire, ruido, temperatura, humedad y calidad del agua.
IoT Integration Backend: gestiona la comunicación entre RoadWatch y los dispositivos IoT instalados en los proyectos. Recibe los datos provenientes de los sensores, valida las mediciones y las incorpora al sistema para su posterior análisis.
Risk & Incident Backend: analiza las mediciones ambientales y las compara con los parámetros establecidos. Cuando identifica condiciones que superan los límites permitidos, genera alertas e incidencias ambientales de manera automática.
Mitigation Backend: administra las acciones correctivas y medidas de mitigación asociadas a las incidencias. Permite asignar responsables, establecer fechas límite, actualizar estados y realizar el seguimiento hasta la resolución del problema.
Evidence Backend: gestiona las evidencias relacionadas con inspecciones, incidencias y acciones de mitigación, permitiendo registrar fotografías, documentos y otros archivos que respalden las actividades realizadas.
Reports Backend: centraliza la generación de reportes ambientales y de cumplimiento, utilizando la información almacenada de proyectos, mediciones, incidencias, acciones y evidencias.
Geolocation Backend: administra la información geográfica de proyectos, puntos de monitoreo e incidencias, integrándose con el servicio externo de mapas y geolocalización para representar visualmente la información.
Weather Backend: obtiene información meteorológica mediante el servicio externo correspondiente, permitiendo complementar el análisis de las condiciones ambientales y riesgos asociados a cada proyecto.
Notification Backend: gestiona el envío de alertas y notificaciones a los responsables cuando se generan incidencias, se detectan valores fuera de los parámetros establecidos o existen acciones de mitigación pendientes.
Shared Backend: proporciona componentes comunes, utilidades, validaciones, clases base, manejo de errores y mecanismos de infraestructura reutilizados por los demás módulos de la API.

En el diagrama se refleja cómo:

La Web Application consume los servicios expuestos por los componentes de la API Application mediante endpoints RESTful, permitiendo gestionar proyectos, monitoreo, incidencias, acciones de mitigación, evidencias y reportes.
El IoT Integration Backend recibe las mediciones provenientes del IoT Monitoring, validando y procesando los datos antes de almacenarlos.
El Environmental Monitoring Backend administra las mediciones ambientales y trabaja junto con el Risk & Incident Backend para identificar valores que excedan los umbrales establecidos.
El Risk & Incident Backend genera incidencias automáticamente cuando se detectan condiciones ambientales fuera de los parámetros permitidos y comunica estos eventos al Notification Backend.
El Mitigation Backend gestiona las acciones necesarias para resolver las incidencias, mientras que el Evidence Backend permite registrar evidencias que demuestren el cumplimiento de dichas acciones.
El Project Management Backend, Environmental Monitoring Backend, Risk & Incident Backend, Mitigation Backend, Evidence Backend y Reports Backend acceden a la Database para leer y escribir la información correspondiente a sus responsabilidades.
El Geolocation Backend se integra con el Servicio de Mapas y Geolocalización para obtener información geográfica y representar proyectos, puntos de monitoreo e incidencias.
El Weather Backend se comunica con el Servicio Meteorológico para obtener información climática utilizada como complemento para el monitoreo y análisis de riesgos.
El Notification Backend se integra con el Servicio de Notificaciones para enviar alertas a los responsables de los proyectos.
Todos los componentes backend pueden reutilizar las capacidades proporcionadas por el Shared Backend, favoreciendo la consistencia, reutilización de código y reducción de duplicidad.

De esta manera, el Component Diagram complementa los diagramas de clases y de base de datos de RoadWatch, mostrando cómo la API Application se divide en componentes coherentes con las funcionalidades principales del dominio y cómo estos colaboran entre sí para implementar el monitoreo ambiental, la detección de riesgos, la gestión de incidencias y las acciones de mitigación dentro de los proyectos viales.

![Diagrama de Componentes C4 - RoadWatch OS](/assets/images/ComponentDiagram.png)



## 4.7. Software Object-Oriented Design.
<a id="4-7-software-object-oriented-design"></a>

### 4.7.1. Class Diagrams.
<a id="4-7-1-class-diagrams"></a>

Se centra en la definición de diagramas de clases, la interacción entre objetos y la aplicación de principios.

### Bounded Context 1 - Suscriptions and Payment:
![Class Diagram - RoadWatch OS](/assets/images/CD-Suscriptions%20and%20Payment.png)
### Bounded Context 2 - Identity and Access:
![Class Diagram - RoadWatch OS](/assets/images/CD-IdentityandAccess.png)
### Bounded Context 3 - Project Mangement:
![Class Diagram - RoadWatch OS](/assets/images/CD-ProjectManagement.png)
### Bounded Context 4 - Device and Asset Mgmt:
![Class Diagram - RoadWatch OS](/assets/images/CD-DeviceandAssetMgmt.png)
### Bounded Context 5 - Environmental Monitoring:
![Class Diagram - RoadWatch OS](/assets/images/CD-EnvironmentalMonitoring.png)
### Bounded Context 6 - Incident and mitigation:
![Class Diagram - RoadWatch OS](/assets/images/CD-IncidentandMitigation.png)
### Bounded Context 7 - Document and Evidence:
![Class Diagram - RoadWatch OS](/assets/images/CD-DocumentandEvidence.png)
### Bounded Context 8 - Reports and Compliance:
![Class Diagram - RoadWatch OS](/assets/images/CD-ReportsandCompliance.png)



## 4.8. Database Design.
<a id="4-8-database-design"></a>
El diseño de la base de datos relacional (MySQL) para RoadWatch OS adopta un enfoque de aislamiento por Bounded Context dentro del Monolito Modular, garantizando que cada módulo mantenga la propiedad exclusiva de su esquema y desacoplando persistencias mediante referencias por identificadores UUID.

Características Principales de la Base de Datos

Aislamiento de Módulos: Esquema lógico separado por Bounded Context donde las tablas pertenecientes a un contexto solo son accedidas mediante su propio módulo.

Identificadores Únicos (UUID): Uso de VARCHAR(36) para Primary Keys (PK) y Foreign Keys (FK), evitando dependencias por secuencias numéricas y facilitando integración entre módulos.

Integridad Referencial y 3NF: Aplicación de Tercera Forma Normal (3NF) con restricciones explícitas (PK, FK, UNIQUE, NOT NULL) para asegurar consistencia transaccional.

Campos de Auditoría Estandarizados: Todas las tablas incluyen created_at, updated_at y banderas de estado (status / is_deleted) para trazabilidad legal y soporte de auditorías ambientales.

### 4.8.1. Database Diagrams.
<a id="4-8-1-database-diagrams"></a>


### Bounded Context 1 - Suscriptions and Payment:
![Class Diagram - RoadWatch OS](/assets/images/BC1ERD.jpeg)
### Bounded Context 2 - Identity and Access:
![Class Diagram - RoadWatch OS](/assets/images/BC2ERD.jpeg)
### Bounded Context 3 - Project Mangement:
![Class Diagram - RoadWatch OS](/assets/images/BC3ERD.jpeg)
### Bounded Context 4 - Device and Asset Mgmt:
![Class Diagram - RoadWatch OS](/assets/images/BC4ERD.jpeg)
### Bounded Context 5 - Environmental Monitoring:
![Class Diagram - RoadWatch OS](/assets/images/BC5ERD.jpeg)
### Bounded Context 6 - Incident and mitigation:
![Class Diagram - RoadWatch OS](/assets/images/BC6ERD.jpeg)
### Bounded Context 7 - Document and Evidence:
![Class Diagram - RoadWatch OS](/assets/images/BC7ERD.jpeg)
### Bounded Context 8 - Reports and Compliance:
![Class Diagram - RoadWatch OS](/assets/images/BC8ERD.jpeg)



