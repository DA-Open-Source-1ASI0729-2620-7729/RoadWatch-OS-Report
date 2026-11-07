# Product Design

## 4.1. Style Guidelines.
<a id="4-1-style-guidelines"></a>

Los lineamientos visuales de RoadWatch OS buscan mantener una interfaz clara, ordenada y consistente para los usuarios que realizan actividades de gestión y supervisión ambiental en proyectos viales.

El diseño considera que la plataforma será utilizada tanto desde computadoras como desde dispositivos móviles mediante una interfaz web responsiva. Por ello, se prioriza la legibilidad de la información, la facilidad de navegación y la identificación rápida de mediciones, alertas e incidencias.

### 4.1.1. General Style Guidelines.
<a id="4-1-1-general-style-guidelines"></a>

En esta sección se definen los principales elementos visuales utilizados en RoadWatch OS, incluyendo colores, tipografía, identidad visual, espaciado y tono de comunicación.

Las decisiones de diseño buscan transmitir orden, confianza y relación con el monitoreo ambiental, manteniendo una apariencia sencilla que permita trabajar con información técnica sin sobrecargar la pantalla.

### Colores

![Colores - RoadWatch OS](../assets/images/Colours.png)

La paleta de colores de RoadWatch OS combina tonos relacionados con el ambiente y la infraestructura vial:

- **Verde esmeralda (`#23A277`)**: se utiliza como color principal y representa estados favorables, acciones de confirmación y elementos destacados de la interfaz.
- **Azul pizarra oscuro (`#1E3844`)**: se utiliza principalmente en encabezados, textos de mayor jerarquía y elementos de navegación.
- **Crema suave (`#F6F5EE`)**: se utiliza como fondo general para reducir el contraste excesivo y facilitar la lectura durante periodos prolongados.
- **Amarillo mostaza (`#E5A93C`)**: se utiliza para advertencias y situaciones que requieren atención.
- **Rojo (`#D64545`)**: se reserva para estados críticos, errores o valores que superen los parámetros establecidos.
- **Grises (`#E2E8F0` y `#64748B`)**: se utilizan en bordes, separadores, textos secundarios y elementos de apoyo visual.

El color no será el único recurso utilizado para comunicar el estado de un indicador. Las alertas también estarán acompañadas por etiquetas e íconos que permitan interpretar la información con mayor facilidad.

### Tipografía

Se utiliza **Rubik** como tipografía principal por su legibilidad en pantallas y por mantener una apariencia moderna y sencilla.

La jerarquía visual se establece mediante diferentes tamaños y pesos tipográficos. Los títulos y valores principales utilizan un mayor peso, mientras que las descripciones, etiquetas y datos secundarios utilizan tamaños menores.

### Branding

La identidad visual de RoadWatch OS busca relacionar la tecnología con la gestión ambiental de proyectos viales.

El diseño utiliza formas simples, componentes ordenados y una paleta relacionada con sostenibilidad e infraestructura. Estos elementos se mantienen de manera consistente en la Landing Page y en la aplicación web.

### Espaciado y distribución

La interfaz utiliza espacios suficientes entre componentes para evitar la saturación de información.

Los principales datos se presentan mediante tarjetas, tablas, formularios y bloques de contenido organizados de acuerdo con su importancia. En las vistas de escritorio se aprovecha el espacio horizontal, mientras que en dispositivos móviles los componentes se reorganizan verticalmente.

### Tono de comunicación y lenguaje aplicado

El tono de RoadWatch OS es profesional, claro y directo.

Los mensajes buscan explicar al usuario qué está ocurriendo y qué acciones puede realizar, evitando términos innecesariamente complejos cuando exista una alternativa más sencilla.

La comunicación mantiene un carácter serio y respetuoso, adecuado para usuarios relacionados con la gestión, supervisión y seguimiento ambiental.

### Consistencia

Los diferentes módulos mantienen los mismos colores, tipografía, estilos de botones, campos de formulario, tablas y estados visuales.

Por ejemplo, una advertencia utiliza el mismo tratamiento visual cuando aparece en el panel principal, en una lista de mediciones o dentro del detalle de una incidencia.

### Navegación

La navegación se organiza de acuerdo con las tareas de cada tipo de usuario.

Los usuarios relacionados con empresas constructoras pueden acceder a las funciones necesarias para revisar proyectos, puntos de monitoreo, mediciones, alertas e incidencias.

Los usuarios de empresas supervisoras y consultoras ambientales pueden consultar el estado de los proyectos, revisar mediciones, incidencias, evidencias e información necesaria para el seguimiento ambiental.

### Accesibilidad

RoadWatch OS considera criterios de accesibilidad para facilitar el uso de la plataforma en distintos dispositivos.

Se utilizan textos legibles, contraste suficiente entre los elementos de la interfaz y áreas de interacción adecuadas para dispositivos táctiles.

Los estados ambientales no se comunican únicamente mediante colores, sino también mediante texto e iconografía. De esta manera, por ejemplo, los estados **Óptimo**, **Advertencia** y **Crítico** pueden distinguirse sin depender únicamente del color.

### Elementos de diseño

La interfaz utiliza líneas y bordes suaves para separar contenidos sin generar una cantidad excesiva de divisiones visuales.

El tamaño de los elementos permite establecer jerarquía entre títulos, indicadores, datos secundarios y acciones disponibles.

El espacio entre componentes facilita la lectura y permite agrupar información relacionada, mientras que las formas geométricas y los bordes redondeados mantienen una apariencia uniforme en botones, tarjetas y campos.

### Principios de diseño

El diseño de RoadWatch OS considera principios como contraste, repetición, alineación y proximidad.

El **contraste** permite destacar alertas, indicadores y acciones importantes.

La **repetición** mantiene patrones visuales consistentes en toda la plataforma.

La **alineación** facilita la lectura de tablas, formularios y tarjetas.

La **proximidad** permite agrupar información relacionada, como una medición con su fecha, indicador, valor y estado.

Estos principios buscan que la información ambiental pueda revisarse de manera rápida y ordenada.

### 4.1.2. Web Style Guidelines.
<a id="4-1-2-web-style-guidelines"></a>

Los lineamientos para la experiencia web se basan en los principios de **Material Design**, considerando además el uso de **Angular Material** para mantener consistencia entre los componentes utilizados en la aplicación.

La interfaz es responsiva y adapta la distribución de sus elementos según el tamaño de la pantalla.

### Retícula y tamaños de referencia

| Dispositivo | Ancho de referencia | Retícula | Márgenes |
| :--- | :--- | :--- | :--- |
| Desktop | 1440 px | 12 columnas | 80 px |
| Tablet | 768 px | 8 columnas | 32 px |
| Mobile | 390 px | 4 columnas | 16 px |

En escritorio se utiliza un menú lateral junto con el área principal de contenido. En dispositivos móviles, la navegación y los componentes se reorganizan para aprovechar mejor el espacio disponible.

### Escala tipográfica

| Estilo | Tamaño / interlineado | Peso | Uso |
| :--- | :--- | :--- | :--- |
| H1 | 40 / 48 px | Bold | Títulos principales |
| H2 | 28 / 36 px | Bold | Títulos de pantalla |
| H3 | 20 / 28 px | Medium | Secciones y tarjetas |
| KPI | 32 / 40 px | Bold | Indicadores principales |
| Body | 16 / 24 px | Regular | Texto general |
| Small | 14 / 20 px | Regular | Datos secundarios |
| Caption | 12 / 16 px | Medium | Etiquetas y unidades |

### Colores funcionales

| Elemento | Hexadecimal | Uso |
| :--- | :--- | :--- |
| Principal | `#23A277` | Botones principales, elementos activos y estados favorables |
| Secundario | `#1E3844` | Navegación, encabezados y texto principal |
| Advertencia | `#E5A93C` | Estados que requieren atención |
| Crítico | `#D64545` | Errores o situaciones críticas |
| Fondo | `#F6F5EE` | Fondo general |
| Superficie | `#FFFFFF` | Tarjetas, tablas y cuadros de diálogo |
| Borde | `#E2E8F0` | Separadores y bordes |
| Neutro | `#64748B` | Texto secundario e íconos inactivos |

### Componentes

- **Botones:** se diferencian entre acciones principales, secundarias y acciones de texto.
- **Tarjetas:** agrupan indicadores, alertas y datos relevantes de los proyectos.
- **Etiquetas de estado:** muestran estados como Óptimo, Advertencia y Crítico mediante texto, color e ícono.
- **Tablas:** permiten consultar mediciones, incidencias y otros registros de manera ordenada.
- **Formularios:** utilizan etiquetas visibles, mensajes de ayuda y validaciones.
- **Mapas:** permiten ubicar proyectos y puntos de monitoreo.
- **Gráficos:** presentan la evolución de indicadores ambientales y facilitan la comparación de valores.

Los componentes mantienen un comportamiento visual consistente en sus estados normal, seleccionado, deshabilitado, error y foco.

## 4.2. Information Architecture.
<a id="4-2-information-architecture"></a>

La arquitectura de información de RoadWatch OS organiza el contenido de manera que los usuarios puedan encontrar rápidamente los proyectos, mediciones, incidencias, evidencias y reportes que necesitan.

La organización considera los dos segmentos definidos para el proyecto: **Empresas Constructoras Viales** y **Empresas Supervisoras y Consultoras Ambientales**.

Cada tipo de usuario accede a las funciones relacionadas con sus actividades, evitando mostrar información innecesaria y facilitando el recorrido dentro de la plataforma.

### 4.2.1. Organization Systems.
<a id="4-2-1-organization-systems"></a>

RoadWatch OS utiliza una **organización jerárquica** para destacar la información más importante.

En las pantallas principales se priorizan los proyectos que requieren atención, las alertas activas, las incidencias pendientes y los indicadores ambientales relevantes.

También se utiliza una **organización secuencial** en tareas que necesitan completar varios pasos, como registrar una medición, registrar una evidencia o dar seguimiento a una incidencia.

La información histórica se organiza de forma **cronológica**, permitiendo consultar mediciones, incidencias y evidencias según la fecha en la que fueron registradas.

Además, la información puede organizarse por **tipo de indicador ambiental**, como calidad del aire, ruido o parámetros relacionados con la calidad del agua.

Finalmente, se utiliza una organización según la **audiencia**, ya que las empresas constructoras y las empresas supervisoras o consultoras ambientales realizan tareas diferentes dentro de la plataforma.

### 4.2.2. Labeling Systems.
<a id="4-2-2-labeling-systems"></a>

El sistema de etiquetado utiliza nombres breves y fáciles de reconocer para representar las principales secciones de RoadWatch OS.

**Landing Page**

- **Inicio:** presentación general de RoadWatch OS.
- **Solución:** explicación de las principales funciones de la plataforma.
- **Beneficios:** ventajas para empresas constructoras y empresas supervisoras o consultoras ambientales.
- **Equipo:** presentación de VíaNexo y sus integrantes.
- **Contacto:** medio para solicitar información sobre RoadWatch OS.

**Empresa Constructora Vial**

- **Panel:** resumen del estado ambiental de los proyectos.
- **Proyectos:** listado y detalle de proyectos viales.
- **Puntos de monitoreo:** lugares donde se registran mediciones ambientales.
- **Mediciones:** consulta y registro de valores ambientales.
- **Alertas:** situaciones que requieren atención.
- **Incidencias:** problemas ambientales registrados y su seguimiento.
- **Evidencias:** fotografías o documentos relacionados con una incidencia.
- **Configuración:** opciones relacionadas con la cuenta y preferencias del usuario.

**Empresa Supervisora o Consultora Ambiental**

- **Portafolio:** vista general de los proyectos supervisados.
- **Mediciones:** consulta del historial de registros ambientales.
- **Incidencias:** revisión de situaciones ambientales detectadas.
- **Evidencias:** consulta de documentos y registros relacionados.
- **Reportes:** información consolidada para el seguimiento ambiental.
- **Configuración:** opciones de cuenta y preferencias del usuario.

### 4.2.3. SEO Tags and Meta Tags.
<a id="4-2-3-seo-tags-meta-tags"></a>

Los SEO Tags y Meta Tags permiten identificar correctamente las principales páginas de RoadWatch OS y facilitar su indexación en buscadores.

De acuerdo con la configuración de internacionalización del producto, el idioma predeterminado de la experiencia será inglés (`en_US`) y también se contará con soporte para español latinoamericano (`es_419`).

Para la Landing Page se consideran como mínimo los siguientes elementos:

**Title**

```html
<title>RoadWatch OS | Environmental Monitoring for Road Projects</title>
```

**Description**

```html
<meta
  name="description"
  content="RoadWatch OS centralizes environmental monitoring, incidents and evidence for road construction projects."
>
```

**Keywords**

```html
<meta
  name="keywords"
  content="RoadWatch OS, environmental monitoring, road projects, environmental supervision, incidents, environmental evidence"
>
```

**Author**

```html
<meta name="author" content="VíaNexo">
```

Para la aplicación web se utilizarán valores relacionados con el contenido de cada vista. Por ejemplo:

```html
<title>Projects | RoadWatch OS</title>

<meta
  name="description"
  content="Manage and monitor environmental information for road projects in RoadWatch OS."
>

<meta name="author" content="VíaNexo">
```

También se considera la configuración necesaria para una correcta visualización en diferentes dispositivos:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Las versiones localizadas de la plataforma podrán adaptar los títulos y descripciones de acuerdo con el idioma seleccionado por el usuario.

### 4.2.4. Searching Systems.
<a id="4-2-4-searching-systems"></a>

RoadWatch OS incorpora herramientas de búsqueda y filtrado para facilitar la consulta de información, especialmente cuando aumenta la cantidad de proyectos, mediciones e incidencias registradas.

La búsqueda permitirá localizar información utilizando datos como:

- Nombre o código del proyecto.
- Punto de monitoreo.
- Código de incidencia.
- Responsable.
- Tipo de indicador ambiental.

Las secciones que contienen una mayor cantidad de registros podrán utilizar filtros como:

- Tipo de indicador ambiental.
- Estado de la incidencia.
- Estado de riesgo.
- Proyecto.
- Rango de fechas.

Después de realizar una búsqueda o aplicar filtros, los resultados se mostrarán mediante tablas o listas ordenadas, manteniendo visible la información principal de cada registro.

De esta manera, los usuarios podrán encontrar información específica sin tener que recorrer manualmente grandes cantidades de registros.

### 4.2.5. Navigation Systems.
<a id="4-2-5-navigation-systems"></a>

La navegación de RoadWatch OS busca mantener un recorrido sencillo y predecible entre las diferentes secciones de la plataforma.

En dispositivos de escritorio, la aplicación utiliza un menú principal desde el cual se puede acceder a las funciones disponibles según el tipo de usuario.

En dispositivos móviles, la navegación se adapta al espacio disponible y mantiene accesibles las opciones utilizadas con mayor frecuencia.

La plataforma considera los siguientes tipos de navegación:

- **Navegación global:** permite acceder a las principales secciones de la aplicación.
- **Navegación contextual:** permite pasar desde un proyecto hacia sus mediciones, incidencias, evidencias u otra información relacionada.
- **Navegación local:** utiliza pestañas o secciones internas cuando una pantalla contiene distintos grupos de información.
- **Acciones rápidas:** facilitan tareas frecuentes como registrar una medición, agregar evidencia o consultar una incidencia.

La estructura de navegación se mantiene consistente entre las diferentes vistas para que el usuario pueda identificar con facilidad dónde se encuentra, qué acciones tiene disponibles y cómo regresar a secciones anteriores.

## 4.3. Landing Page UI Design.
<a id="4-3-landing-page-ui-design"></a>

En esta sección se presenta la propuesta de interfaz de usuario para la Landing Page de RoadWatch OS. La organización del contenido parte de la arquitectura de información definida previamente y busca comunicar de manera clara el propósito de la solución para los dos segmentos objetivo.

Se desarrollaron versiones para **Desktop Web Browser** y **Mobile Web Browser**, manteniendo una estructura consistente y adaptando la distribución de los elementos según el tamaño de pantalla.

### 4.3.1. Landing Page Wireframe.
<a id="4-3-1-landing-page-wireframe"></a>

Los wireframes permiten definir la estructura, jerarquía y distribución de los contenidos antes de aplicar la identidad visual final.

#### Landing Page Web

La versión Desktop organiza la información en bloques claramente diferenciados para facilitar un recorrido progresivo desde la presentación del producto hasta las opciones de contacto.

![Wireframe Hero Desktop](../assets/images/heroDesktop.png)

**Wireframe del Hero Section – Desktop Web Browser.**

La primera sección presenta el nombre del producto, su propuesta general y los principales llamados a la acción.

![Wireframe Funcionalidades Desktop](../assets/images/funcionalidadesDesktop.png)

**Wireframe de funcionalidades – Desktop Web Browser.**

Las funcionalidades se presentan en bloques independientes para facilitar la comprensión de los principales componentes de RoadWatch OS.

![Wireframe Planes Desktop](../assets/images/planesDesktop.png)

**Wireframe de opciones comerciales – Desktop Web Browser.**

Esta sección presenta las opciones comerciales consideradas en el diseño de la Landing Page. Su contenido podrá ajustarse de acuerdo con el modelo de negocio finalmente validado por el equipo.

![Wireframe Equipo Desktop](../assets/images/equipo.png)

**Wireframe de equipo – Desktop Web Browser.**

La sección de equipo presenta a los integrantes de VíaNexo y permite reforzar la identificación del startup responsable del producto.

#### Landing Page Mobile

La versión Mobile mantiene la misma arquitectura general y reorganiza los componentes principalmente en sentido vertical.

![Wireframe Hero Mobile](../assets/images/hero.png)

**Wireframe del Hero Section – Mobile Web Browser.**

![Wireframe Acerca del Proyecto](../assets/images/AcercaDelProyecto.png)

**Wireframe de Acerca del Proyecto – Mobile Web Browser.**

![Wireframe Beneficios Mobile](../assets/images/beneficios.png)

**Wireframe de beneficios – Mobile Web Browser.**

![Wireframe Funcionalidades Mobile](../assets/images/funcionalidades.png)

**Wireframe de funcionalidades – Mobile Web Browser.**

![Wireframe Cómo Funciona Mobile](../assets/images/ComoFunciona.png)

**Wireframe de Cómo Funciona – Mobile Web Browser.**

![Wireframe Equipo y Planes Mobile](../assets/images/equipo%20y%20planes.png)

**Wireframe de Equipo y opciones comerciales – Mobile Web Browser.**

La propuesta aplica jerarquía visual, proximidad, consistencia y simplicidad. También considera tamaños adecuados para elementos interactivos, separación suficiente entre componentes y una organización que no depende únicamente del color para transmitir información.

### 4.3.2. Landing Page Mock-up.
<a id="4-3-2-landing-page-mock-up"></a>

Los mock-ups representan la propuesta visual de alta fidelidad de la Landing Page e incorporan la paleta, tipografía, iconografía y componentes definidos en los lineamientos de estilo.

#### Landing Page Mock-up Web

![Landing Page Mock-up Web](../assets/images/chapter4/landing/landing-web.png)

**Mock-up de la Landing Page – Desktop Web Browser.**

La versión Web presenta una navegación principal, un bloque inicial con la propuesta de valor de RoadWatch OS, información sobre el problema que se busca resolver, beneficios, funcionalidades, explicación general del funcionamiento, información del equipo y medios de contacto.

La comunicación se orienta a los dos segmentos objetivo del proyecto: empresas constructoras viales y empresas supervisoras o consultoras ambientales.

#### Landing Page Mock-up Mobile

![Landing Page Mock-up Mobile](../assets/images/chapter4/landing/landing-mobile.png)

**Mock-up de la Landing Page – Mobile Web Browser.**

La versión Mobile conserva la misma identidad visual, pero adapta los componentes a una lectura vertical y a interacciones táctiles. Los botones, tarjetas, textos e imágenes se ajustan al espacio disponible para mantener la claridad de la información.

## 4.4. Web Applications UX/UI Design.
<a id="4-4-web-applications-ux-ui-design"></a>

En esta sección se presenta la propuesta visual y de interacción de la aplicación web de RoadWatch OS para los dos segmentos objetivo del proyecto.

| Segmento | Persona | Principales tareas representadas |
| :--- | :--- | :--- |
| Empresas Constructoras Viales | Carlos Mendoza | Consultar el estado ambiental, revisar alertas e incidencias, registrar mediciones y evidencias y consultar puntos de monitoreo. |
| Empresas Supervisoras y Consultoras Ambientales | Gisela Chávez | Consultar proyectos supervisados, revisar mediciones e incidencias, validar evidencias y consultar o generar reportes. |

Las pantallas siguen los lineamientos visuales definidos previamente y mantienen consistencia entre las versiones Desktop y Mobile.

### 4.4.1. Web Applications Wireframes.
<a id="4-4-1-web-applications-wireframes"></a>

Los wireframes definen la estructura y jerarquía de cada pantalla antes de aplicar la identidad visual de alta fidelidad.

#### Empresas Constructoras Viales – Desktop

![Wireframe - Login Desktop](../assets/images/chapter4/webapp/wireframes/login.png)

![Wireframe - Dashboard Operativo Desktop](../assets/images/chapter4/webapp/wireframes/c-dashboard.png)

![Wireframe - Centro de Alertas Desktop](../assets/images/chapter4/webapp/wireframes/c-alertas.png)

![Wireframe - Kanban de Incidencias Desktop](../assets/images/chapter4/webapp/wireframes/c-incidencias.png)

![Wireframe - Detalle de Incidencia Desktop](../assets/images/chapter4/webapp/wireframes/c-incidencia-detalle.png)

![Wireframe - Registrar Medición Desktop](../assets/images/chapter4/webapp/wireframes/c-registrar-medicion.png)

![Wireframe - Puntos de Monitoreo Desktop](../assets/images/chapter4/webapp/wireframes/c-puntos.png)

#### Empresas Supervisoras y Consultoras Ambientales – Desktop

![Wireframe - Portafolio Tarjetas Desktop](../assets/images/chapter4/webapp/wireframes/s-portafolio.png)

![Wireframe - Portafolio Lista Desktop](../assets/images/chapter4/webapp/wireframes/s-portafolio-lista.png)

![Wireframe - Incidencias Críticas Desktop](../assets/images/chapter4/webapp/wireframes/s-criticas.png)

![Wireframe - Historial de Mediciones Desktop](../assets/images/chapter4/webapp/wireframes/s-historial.png)

![Wireframe - Reporte de Auditoría Desktop](../assets/images/chapter4/webapp/wireframes/s-reporte.png)

![Wireframe - Documentos Normativos Desktop](../assets/images/chapter4/webapp/wireframes/s-documentos.png)

![Wireframe - Configuración Desktop](../assets/images/chapter4/webapp/wireframes/s-configuracion.png)

#### Web Applications Mobile

| Login | Dashboard | Alertas | Evidencia |
| :---: | :---: | :---: | :---: |
| ![Wireframe - Login Mobile](../assets/images/chapter4/webapp/wireframes/m-login.png) | ![Wireframe - Dashboard Mobile](../assets/images/chapter4/webapp/wireframes/m-c-dashboard.png) | ![Wireframe - Alertas Mobile](../assets/images/chapter4/webapp/wireframes/m-c-alertas.png) | ![Wireframe - Evidencia Mobile](../assets/images/chapter4/webapp/wireframes/m-c-evidencia.png) |

| Medición | Portafolio | Historial | Reporte |
| :---: | :---: | :---: | :---: |
| ![Wireframe - Medición Mobile](../assets/images/chapter4/webapp/wireframes/m-c-medicion.png) | ![Wireframe - Portafolio Mobile](../assets/images/chapter4/webapp/wireframes/m-s-portafolio.png) | ![Wireframe - Mediciones Mobile](../assets/images/chapter4/webapp/wireframes/m-s-historial.png) | ![Wireframe - Reporte Mobile](../assets/images/chapter4/webapp/wireframes/m-s-reporte.png) |

### 4.4.2. Web Applications Wireflow Diagrams.
<a id="4-4-2-web-applications-wireflow-diagrams"></a>

Los Wireflow Diagrams relacionan los wireframes con las acciones realizadas por el usuario durante un flujo determinado.

#### Empresas Constructoras Viales – Web

**User goal:** revisar una alerta ambiental y realizar su seguimiento.

![Wireflow - Constructora Web](../assets/images/chapter4/webapp/wireflows/wireflow-constructora-web.png)

El flujo representa el ingreso del usuario, la consulta del panel principal, la revisión de una alerta o incidencia y las acciones necesarias para continuar su seguimiento.

#### Empresas Constructoras Viales – Mobile

**User goal:** registrar información ambiental y evidencias desde campo.

![Wireflow - Constructora Mobile](../assets/images/chapter4/webapp/wireflows/wireflow-constructora-mobile.png)

La versión móvil prioriza tareas que pueden realizarse durante el trabajo de campo, como revisar alertas, registrar mediciones y adjuntar evidencia.

#### Empresas Supervisoras y Consultoras Ambientales – Web

**User goal:** revisar el estado de un proyecto y consultar la información necesaria para su supervisión.

![Wireflow - Supervisora Web](../assets/images/chapter4/webapp/wireflows/wireflow-supervisora-web.png)

El flujo permite revisar el portafolio, consultar incidencias y mediciones y acceder a la información necesaria para elaborar o consultar reportes.

#### Empresas Supervisoras y Consultoras Ambientales – Mobile

**User goal:** consultar rápidamente el estado de los proyectos supervisados.

![Wireflow - Supervisora Mobile](../assets/images/chapter4/webapp/wireflows/wireflow-supervisora-mobile.png)

El flujo móvil facilita la consulta del portafolio, las mediciones recientes y los reportes disponibles.

### 4.4.3. Web Applications Mock-ups.
<a id="4-4-3-web-applications-mock-ups"></a>

Los mock-ups representan la versión de alta fidelidad de las pantallas y aplican los lineamientos visuales definidos para RoadWatch OS.

#### Empresas Constructoras Viales – Desktop

![Mockup - Login Desktop](../assets/images/chapter4/webapp/mockups/login.png)

![Mockup - Dashboard Operativo Desktop](../assets/images/chapter4/webapp/mockups/c-dashboard.png)

![Mockup - Centro de Alertas Desktop](../assets/images/chapter4/webapp/mockups/c-alertas.png)

![Mockup - Detalle de Incidencia Desktop](../assets/images/chapter4/webapp/mockups/c-incidencia-detalle.png)

![Mockup - Kanban de Incidencias Desktop](../assets/images/chapter4/webapp/mockups/c-incidencias.png)

![Mockup - Registrar Medición Desktop](../assets/images/chapter4/webapp/mockups/c-registrar-medicion.png)

![Mockup - Puntos de Monitoreo Desktop](../assets/images/chapter4/webapp/mockups/c-puntos.png)

Estas vistas permiten al usuario consultar el estado de sus proyectos, revisar alertas e incidencias, registrar información ambiental y mantener evidencias relacionadas con el seguimiento realizado.

#### Empresas Supervisoras y Consultoras Ambientales – Desktop

![Mockup - Portafolio Tarjetas Desktop](../assets/images/chapter4/webapp/mockups/s-portafolio.png)

![Mockup - Portafolio Lista Desktop](../assets/images/chapter4/webapp/mockups/s-portafolio-lista.png)

![Mockup - Incidencias Críticas Desktop](../assets/images/chapter4/webapp/mockups/s-criticas.png)

![Mockup - Historial de Mediciones Desktop](../assets/images/chapter4/webapp/mockups/s-historial.png)

![Mockup - Reporte Desktop](../assets/images/chapter4/webapp/mockups/s-reporte.png)

![Mockup - Documentos Desktop](../assets/images/chapter4/webapp/mockups/s-documentos.png)

![Mockup - Configuración Desktop](../assets/images/chapter4/webapp/mockups/s-configuracion.png)

Estas vistas permiten revisar el estado de los proyectos supervisados, consultar mediciones e incidencias, revisar evidencias y acceder a información de seguimiento y reportes.

#### Mobile – Empresas Constructoras Viales

| Login | Dashboard | Alertas | Evidencia | Medición |
| :---: | :---: | :---: | :---: | :---: |
| ![Mockup - Login Mobile](../assets/images/chapter4/webapp/mockups/m-login.png) | ![Mockup - Dashboard Mobile](../assets/images/chapter4/webapp/mockups/m-c-dashboard.png) | ![Mockup - Alertas Mobile](../assets/images/chapter4/webapp/mockups/m-c-alertas.png) | ![Mockup - Evidencia Mobile](../assets/images/chapter4/webapp/mockups/m-c-evidencia.png) | ![Mockup - Medición Mobile](../assets/images/chapter4/webapp/mockups/m-c-medicion.png) |

#### Mobile – Empresas Supervisoras y Consultoras Ambientales

| Portafolio | Mediciones | Reporte |
| :---: | :---: | :---: |
| ![Mockup - Portafolio Mobile](../assets/images/chapter4/webapp/mockups/m-s-portafolio.png) | ![Mockup - Mediciones Mobile](../assets/images/chapter4/webapp/mockups/m-s-historial.png) | ![Mockup - Reporte Mobile](../assets/images/chapter4/webapp/mockups/m-s-reporte.png) |

### 4.4.4. Web Applications User Flow Diagrams.
<a id="4-4-4-web-applications-user-flow-diagrams"></a>

Los User Flow Diagrams representan los recorridos que siguen los usuarios para alcanzar objetivos concretos e incluyen tanto el flujo esperado como las decisiones y rutas alternativas relevantes.

#### Empresas Constructoras Viales

**User goal Web:** revisar una alerta o incidencia y realizar el seguimiento correspondiente.

![User Flow - Constructora Web](../assets/images/chapter4/webapp/userflows/userflow-constructora-web.png)

**User goal Mobile:** registrar una medición o evidencia desde campo y comprobar que la información fue registrada.

![User Flow - Constructora Mobile](../assets/images/chapter4/webapp/userflows/userflow-constructora-mobile.png)

#### Empresas Supervisoras y Consultoras Ambientales

**User goal Web:** revisar un proyecto supervisado, consultar sus incidencias y mediciones y acceder al reporte correspondiente.

![User Flow - Supervisora Web](../assets/images/chapter4/webapp/userflows/userflow-supervisora-web.png)

**User goal Mobile:** consultar los proyectos que requieren atención y acceder rápidamente a sus mediciones y reportes.

![User Flow - Supervisora Mobile](../assets/images/chapter4/webapp/userflows/userflow-supervisora-mobile.png)

Los User Flows deben mantenerse consistentes con los Wireflows y con las pantallas incluidas en los mock-ups.

## 4.5. Web Applications Prototyping.
<a id="4-5-web-applications-prototyping"></a>

A partir de los wireframes, mock-ups y User Flow Diagrams se elaboraron los prototipos navegables de RoadWatch OS para Desktop y Mobile Web Browser.

Los prototipos permiten recorrer los principales flujos correspondientes a los dos segmentos objetivo: **Empresas Constructoras Viales** y **Empresas Supervisoras y Consultoras Ambientales**.

El diseño y prototipo interactivo fueron elaborados en Figma y se encuentran disponibles en el siguiente enlace:

**Figma - RoadWatch OS:**  
https://www.figma.com/design/eGXyMXIHk0qbEQibxcmCCk/roadwatch?node-id=0-1&p=f&t=ALQpv7sHj6sM9D94-0

| Recorrido | Principales pantallas |
| :--- | :--- |
| Constructora · Web | Login → Panel → Alertas → Incidencias → Medición → Puntos de monitoreo |
| Supervisora / Consultora · Web | Login → Portafolio → Incidencias → Historial → Reporte → Configuración |
| Constructora · Mobile | Login → Panel → Alertas → Evidencia → Medición |
| Supervisora / Consultora · Mobile | Login → Portafolio → Mediciones → Reporte |

**Prototipo · Empresas Constructoras Viales (Web)**

![Prototipo - Constructora Web](../assets/images/chapter4/webapp/prototype/prototipo-constructora-web.gif)

**Prototipo · Empresas Supervisoras y Consultoras Ambientales (Web)**

![Prototipo - Supervisora Web](../assets/images/chapter4/webapp/prototype/prototipo-supervisora-web.gif)

| Prototipo · Constructora (Mobile) | Prototipo · Supervisora / Consultora (Mobile) |
| :---: | :---: |
| ![Prototipo - Constructora Mobile](../assets/images/chapter4/webapp/prototype/prototipo-constructora-mobile.gif) | ![Prototipo - Supervisora Mobile](../assets/images/chapter4/webapp/prototype/prototipo-supervisora-mobile.gif) |


## 4.6. Domain-Driven Software Architecture.
<a id="4-6-domain-driven-software-architecture"></a>

La arquitectura de software de RoadWatch OS se plantea a partir del dominio identificado durante el proceso de EventStorming y de las responsabilidades principales que requiere la solución.

La propuesta busca separar las responsabilidades del sistema en contextos coherentes y mantener una relación clara entre el dominio, los servicios de aplicación y los componentes de infraestructura.

### 4.6.1. Design-Level EventStorming.
<a id="4-6-1-design-level-eventstorming"></a>

El Design-Level EventStorming profundiza el modelo obtenido en el Big Picture EventStorming y lo refina hasta el nivel de diseño de software: para cada flujo del dominio se identifican los **actores**, los **commands**, los **aggregates** que los atienden, los **domain events** resultantes, las **policies** que automatizan reglas de negocio y los **read models / queries** que alimentan las pantallas. A partir de este modelo se delimitan los siete Bounded Contexts de RoadWatch OS, que son la base de los diagramas de arquitectura (4.6.2 a 4.6.4), de clases (4.7.1) y de base de datos (4.8.1).

El alcance corresponde al MVP: las mediciones se registran de forma manual y no se modelan dispositivos IoT ni pagos.

**Global EventStorming Map**

<div align="center">
  <img src="../assets/images/EventStorming-global.png" alt="RoadWatch OS - Global EventStorming">
  <br><sub><em>Figura 1. Mapa global del Design-Level EventStorming de RoadWatch OS: los siete Bounded Contexts y sus relaciones (flechas punteadas numeradas 1 a 7).</em></sub>
</div>

El mapa global agrupa en un marco cada Bounded Context. Las flechas continuas muestran el flujo dentro de un contexto; las flechas punteadas numeradas, las relaciones entre contextos (queries síncronas, eventos y referencias por ID), explicadas en la leyenda de la figura.

**EventStorming por Bounded Context**

Cada contexto se detalla en su propio diagrama (actores → commands → aggregates → eventos → policies → read models):

<div align="center">
  <img src="../assets/images/BC1-IdentityAccess.png" alt="BC1-IdentityAccess">
  <br><sub><em>Figura 2. Bounded Context 1 – Identity & Access Management: registro de usuarios, roles, permisos y autenticación.</em></sub>
</div>

<div align="center">
  <img src="../assets/images/BC2-Subscription.png" alt="BC2-Subscription">
  <br><sub><em>Figura 3. Bounded Context 2 – Subscription Management: selección, activación, cambio y cancelación de planes de suscripción.</em></sub>
</div>

<div align="center">
  <img src="../assets/images/BC3-ProjectManagement.png" alt="BC3-ProjectManagement">
  <br><sub><em>Figura 4. Bounded Context 3 – Project Management: proyectos viales, responsables y puntos de monitoreo (con validación de ubicación mediante Maps & Geolocation Service).</em></sub>
</div>

<div align="center">
  <img src="../assets/images/BC4-EnvironmentalMonitoring.png" alt="BC4-EnvironmentalMonitoring">
  <br><sub><em>Figura 5. Bounded Context 4 – Environmental Monitoring: registro de mediciones, evaluación frente a umbrales normativos y generación de alertas.</em></sub>
</div>

<div align="center">
  <img src="../assets/images/BC5-IncidentMitigation.png" alt="BC5-IncidentMitigation">
  <br><sub><em>Figura 6. Bounded Context 5 – Incident & Mitigation Management: ciclo de vida de las incidencias, acciones de mitigación, comentarios y control de vencimiento.</em></sub>
</div>

<div align="center">
  <img src="../assets/images/BC6-DocumentEvidence.png" alt="BC6-DocumentEvidence">
  <br><sub><em>Figura 7. Bounded Context 6 – Document & Evidence Management: evidencias, documentos normativos, versiones y documentos requeridos.</em></sub>
</div>

<div align="center">
  <img src="../assets/images/BC7-ReportsCompliance.png" alt="BC7-ReportsCompliance">
  <br><sub><em>Figura 8. Bounded Context 7 – Reports & Compliance Management: reportes de auditoría, indicadores ambientales y evaluación del cumplimiento.</em></sub>
</div>

**Leyenda de elementos aplicados**

| Elemento | Color | Significado |
| :--- | :--- | :--- |
| Actor / Rol | Amarillo | Quien ejecuta la acción (Admin, Project Manager, Environmental Officer, Auditor). |
| Command | Azul | Intención o acción que se solicita al sistema. |
| Aggregate | Amarillo claro con borde oscuro | Raíz de consistencia que valida el command y emite el evento. |
| Domain Event | Naranja | Hecho relevante que ya ocurrió en el dominio. |
| Policy | Morado | Regla de negocio o automatización que reacciona a un evento o a una consulta. |
| Read Model / Query | Verde | Datos proyectados para las pantallas de la aplicación. |
| Sistema externo | Rosado | Servicio fuera de RoadWatch OS (Maps & Geolocation Service). |
| Dependencia con otro contexto | Borde rojo discontinuo | Policy que depende de otro Bounded Context. |

#### Bounded Contexts identificados

| # | Bounded Context | Responsabilidad | Aggregates | Commands principales | Domain Events principales | Read models / Queries |
| :-- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **Identity & Access Management** | Autenticación, usuarios, roles y permisos (RBAC). | `User` (root), `Role` ◆ `Permission`, `AuthToken` | Register User, Assign Role, Grant Permission to Role, Authenticate, Deactivate User | User Registered, Role Assigned, Permission Granted, Session Token Issued, User Deactivated | User Management Dashboard, Roles & Permissions Matrix |
| 2 | **Subscription Management** | Planes, suscripciones y límites operativos por cuenta. | `Subscription` (root) → `Plan` | Select Plan, Activate Subscription, Change Plan, Cancel Subscription | Plan Selected, Subscription Activated, Plan Changed, Subscription Cancelled | Plan Catalog, Current Plan & Quota Usage |
| 3 | **Project Management** | Proyectos viales, responsables y puntos de monitoreo. | `Project` (root) ◆ `MonitoringPoint` | Create Road Project, Assign Responsible, Define Monitoring Point, Update Point Location / Threshold, Archive Project | Road Project Created, Responsible Assigned, Monitoring Point Defined, Monitoring Point Updated, Project Archived | Project Portfolio, Project Detail, Monitoring Points Map |
| 4 | **Environmental Monitoring** | Registro de mediciones, evaluación frente a umbrales normativos y alertas. | `EnvironmentalMeasurement` (root) → `EnvironmentalAlert`, `NormativeThreshold` | Register Environmental Measurement, Evaluate Measurement, Generate Alert, Acknowledge Alert, Configure Normative Threshold | Measurement Registered, Measurement Classified, Environmental Alert Generated, Alert Acknowledged, Threshold Updated | Monitoring Dashboard, Measurement History, Alert Center |
| 5 | **Incident & Mitigation Management** | Ciclo de vida de las incidencias y sus acciones de mitigación. | `EnvironmentalIncident` (root) ◆ `MitigationAction`, `IncidentComment`, `IncidentStatusHistory` | Create Environmental Incident, Register Mitigation Action, Add Comment, Change Incident Status, Mark Overdue | Environmental Incident Created, Mitigation Action Registered, Comment Added, Incident Status Changed, Incident Marked Overdue | Incident Kanban Board, Critical Incidents Table, Incident Detail & Status History |
| 6 | **Document & Evidence Management** | Evidencias, documentos normativos, versiones y documentos requeridos. | `Evidence`, `NormativeDocument` (root) ◆ `DocumentVersion`, `RequiredDocument` | Upload Evidence, Create Normative Document, Upload New Version, Define Required Document, Mark Document Missing | Evidence Uploaded, Normative Document Created, Document Version Uploaded, Required Document Defined, Document Marked Missing | Evidence Library, Normative Documents & Versions, Required Documents Checklist |
| 7 | **Reports & Compliance Management** | Reportes de auditoría, indicadores y evaluación del cumplimiento. | `AuditReport` (root), `EnvironmentalKpi`, `ComplianceSummary` | Request Audit Report, Generate Audit Report, Recalculate KPIs, Recalculate Compliance | Audit Report Requested, Audit Report Generated / Failed, KPIs Recalculated, Compliance Calculated | Compliance Scorecard, Environmental KPI Panel, Audit Report History |

#### Coreografía entre Bounded Contexts

Los contextos no comparten modelos: se relacionan únicamente mediante identificadores, consultas controladas o eventos de dominio.

| Relación | Tipo | Descripción |
| :--- | :--- | :--- |
| Subscription → Identity & Access | Query (síncrona) | `validateUserQuota` antes de registrar un usuario (*User Quota Policy*). |
| Subscription → Project Management | Query (síncrona) | `validateProjectQuota` antes de crear un proyecto (*Project Quota Policy*). |
| Project Management → Environmental Monitoring | Referencia por ID | Cada medición guarda el `monitoringPointId` de un punto que pertenece al aggregate `Project`. |
| Environmental Monitoring → Incident & Mitigation | Evento (asíncrono) | *Environmental Alert Generated* dispara la *Auto-Incident Generation Policy*. |
| Document & Evidence → Incident & Mitigation | Query (síncrona) | La *Evidence Required Policy* verifica que exista evidencia antes de cambiar el estado de cierre de la incidencia. |
| Environmental Monitoring / Incident → Reports & Compliance | Evento (asíncrono) | *Measurement Classified* e *Incident Status Changed* alimentan la *KPI Projection Policy*. |
| Environmental Monitoring / Document & Evidence → Reports & Compliance | Evento (asíncrono) | *Measurement Classified* y *Document Version Uploaded* alimentan la *Compliance Projection Policy*. |
| Identity & Access → todos los contextos | Token JWT | *Role Assigned* determina qué comandos puede ejecutar cada rol (*Access Control Policy*). |

#### Decisiones de diseño

- **Los puntos de monitoreo pertenecen a Project Management.** `MonitoringPoint` es una entidad dentro del aggregate `Project`. Environmental Monitoring solo los referencia por identificador.
- **Reports & Compliance no duplica lógica operativa.** Consume eventos de otros contextos y mantiene sus propios indicadores (`EnvironmentalKpi`, `ComplianceSummary`).
- **Fuera del alcance del MVP:** gestión de dispositivos y sensores IoT, pagos, escaneo de virus y retención de documentos.

### 4.6.2. Software Architecture Context Diagram.
<a id="4-6-2-software-architecture-context-diagram"></a>

El Context Diagram representa a RoadWatch OS como sistema central y muestra a los usuarios y sistemas externos con los que interactúa.

#### Sistema central

**RoadWatch OS** es una plataforma orientada a centralizar la información de monitoreo ambiental de proyectos viales, facilitar el seguimiento de incidencias y evidencias y apoyar la supervisión ambiental.

#### Usuarios

**Empresas Constructoras Viales**

- Consultan el estado ambiental de sus proyectos.
- Registran o revisan mediciones ambientales.
- Atienden alertas e incidencias.
- Registran evidencias y acciones relacionadas con el seguimiento ambiental.

**Empresas Supervisoras y Consultoras Ambientales**

- Supervisan uno o varios proyectos.
- Consultan mediciones, incidencias y evidencias.
- Revisan el historial de seguimiento.
- Consultan o generan reportes ambientales.

#### Sistemas externos

- **Servicio de Mapas y Geolocalización:** sistema externo consultado por la plataforma para proporcionar referencias geográficas y representación visual de las ubicaciones de los proyectos viales y de sus puntos de monitoreo ambiental.

![Diagrama de Contexto C4 - RoadWatch OS](../assets/images/ContextDiagram.png)

### 4.6.3. Software Architecture Container Diagrams.
<a id="4-6-3-software-architecture-container-diagrams"></a>

El Container Diagram muestra las principales unidades de despliegue (contenedores) de **RoadWatch OS**, las responsabilidades de cada una, los protocolos de comunicación y las tecnologías seleccionadas para su implementación:

#### Landing Page

Sitio web estático desarrollado con **HTML5**, **CSS3** y **JavaScript**, desplegado en **GitHub Pages**. Presenta la propuesta de valor de RoadWatch OS, beneficios, funcionalidades, planes de suscripción y redirige a los usuarios de ambos segmentos hacia la Web Application.

#### Web Application

Aplicación web *Single-Page Application (SPA)* desarrollada utilizando **Angular Framework**, **TypeScript**, HTML5 y CSS3, aplicando **Angular Material** bajo los lineamientos de Material Design.

La aplicación permite a los usuarios:

- Iniciar sesión y acceder a vistas diferenciadas según su segmento (Constructora Vial o Supervisora / Consultora Ambiental).
- Consultar proyectos viales y sus puntos de monitoreo.
- Registrar y consultar mediciones ambientales.
- Revisar alertas preventivas/críticas y gestionar incidencias en el tablero Kanban.
- Registrar y consultar evidencias fotográficas y documentos normativos.
- Consultar el historial de seguimiento y generar reportes de cumplimiento.

La Web Application se comunica con los servicios backend mediante peticiones **HTTPS/JSON** hacia la RESTful API.

#### RESTful API

Servicios backend desarrollados utilizando **Java** con **Spring Boot**, **Spring Security (JWT)** y **Spring Data JPA**, estructurados como un monolito modular alineado a Domain-Driven Design (DDD).

La API es responsable de:

- Gestionar la autenticación, usuarios, roles, permisos y planes de suscripción.
- Gestionar los datos de proyectos viales y puntos de monitoreo, consultando el servicio externo de mapas y geolocalización cuando se requiere representación geográfica.
- Gestionar mediciones ambientales y evaluarlas frente a los umbrales normativos configurados.
- Generar alertas y gestionar el ciclo de vida de las incidencias y acciones de mitigación.
- Gestionar el repositorio de documentos normativos, versiones y evidencias ambientales.
- Consolidar indicadores de cumplimiento y estructurar los reportes de auditoría.

#### Database

**RoadWatch OS** utiliza una base de datos relacional para almacenar de forma persistente e íntegra la información de los siete Bounded Contexts del sistema (usuarios, suscripciones, proyectos, puntos de monitoreo, mediciones, alertas, incidencias, acciones de mitigación, evidencias, documentos y reportes).

La Web Application no accede directamente a la base de datos; todas las operaciones de lectura y escritura son gobernadas por la RESTful API mediante JPA/JDBC.

![Diagrama de Contenedores C4 - RoadWatch OS](../assets/images/ContainerDiagram.png)


### 4.6.4. Software Architecture Components Diagrams.
<a id="4-6-4-software-architecture-components-diagrams"></a>

El Component Diagram descompone internamente el contenedor **RESTful API** de **RoadWatch OS**, mostrando cómo se organiza la lógica del backend en **7 módulos de Bounded Context** independientes y cohesivos, además de detallar la arquitectura interna por capas que aplica cada contexto.

#### Justificación de la descomposición del contenedor RESTful API

Se descomponen los componentes del contenedor **RESTful API** debido a que concentra las reglas de negocio, las políticas de validación normativa, el control de acceso y la orquestación de datos entre la **Web Application**, la **Relational Database** y el **Servicio de Mapas y Geolocalización**.

Cada uno de los siete Bounded Contexts sigue internamente una **arquitectura en capas orientada al dominio (DDD Layered Architecture)** compuesta por cuatro niveles:

1. **Interfaces Layer (`REST Controllers` & `Assemblers`):** Expone los endpoints RESTful (`HTTPS/JSON`), valida las peticiones entrantes de la Web Application y transforma entidades de dominio en *Resources / DTOs*.
2. **Application Layer (`Command Services`, `Query Services` & `Outbounded Context Facades / ACL`):** Coordina los casos de uso del contexto, procesa comandos y consultas, y gestiona la comunicación controlada con otros Bounded Contexts cuando un flujo transversal lo requiere.
3. **Domain Layer (`Aggregates`, `Entities`, `Value Objects`, `Domain Services` & `Repository Interfaces`):** Encapsula las reglas de negocio invariantes (como la comparación de mediciones contra umbrales normativos, el cambio de estado de incidencias o la validación de cuotas de suscripción).
4. **Infrastructure Layer (`JPA Repositories` & `External Adapters`):** Implementa la persistencia relacional mediante **Spring Data JPA** hacia la base de datos y los adaptadores hacia servicios externos (como geolocalización y seguridad JWT).

#### Especificación de Componentes Internos por Bounded Context

| Bounded Context (Módulo) | Controladores REST (`Interfaces`) | Servicios de Aplicación y Dominio (`Application / Domain`) | Repositorios y Adaptadores (`Infrastructure`) | Interacciones con otros Contextos / Sistemas |
| :--- | :--- | :--- | :--- | :--- |
| **1. Identity & Access Management** | `AuthController`<br>`UserController`<br>`RoleController` | `AuthService` (emisión y validación de tokens JWT)<br>`UserService` (gestión de usuarios, perfiles y RBAC) | `UserRepository`<br>`RoleRepository`<br>`JwtSecurityAdapter` (Spring Security) | Provee validación de identidad y roles para las peticiones provenientes de la *Web Application*. |
| **2. Subscription Management** | `SubscriptionController`<br>`PlanController` | `SubscriptionService` (validación de vigencia y estado)<br>`PlanQuotaService` (control de límites de proyectos y usuarios por plan) | `SubscriptionRepository`<br>`PlanRepository` | Es consultado por *Project Management* para verificar las cuotas operativas disponibles antes de dar de alta nuevos recursos. |
| **3. Project Management** | `ProjectController`<br>`MonitoringPointController` | `ProjectService` (ciclo de vida de obras viales y asignación de responsables)<br>`MonitoringPointService` (gestión de ubicación y estado de puntos de monitoreo) | `ProjectRepository`<br>`MonitoringPointRepository`<br>`GeolocationClientAdapter` | Consulta límites activos en *Subscription Management* y consume el *Servicio de Mapas y Geolocalización* externo. |
| **4. Environmental Monitoring** | `MeasurementController`<br>`ThresholdController`<br>`AlertController` | `MeasurementService` (registro y consulta histórica de aire, ruido y agua)<br>`ThresholdEvaluatorService` (motor de comparación frente a umbrales)<br>`AlertService` (generación de alertas preventivas y críticas) | `MeasurementRepository`<br>`NormativeThresholdRepository`<br>`AlertRepository` | Verifica la existencia del punto en *Project Management* y notifica a *Incident & Mitigation Management* cuando una medición supera un umbral crítico. |
| **5. Incident & Mitigation Management** | `IncidentController`<br>`MitigationActionController`<br>`IncidentCommentController` | `IncidentService` (flujo Kanban: *Abierta*, *En proceso*, *Mitigada*, *Cerrada*)<br>`MitigationService` (seguimiento de acciones correctivas y plazos) | `IncidentRepository`<br>`MitigationActionRepository`<br>`IncidentCommentRepository` | Recibe eventos de desviación desde *Environmental Monitoring* y vincula respaldos a través de *Document & Evidence Management*. |
| **6. Document & Evidence Management** | `EvidenceController`<br>`RegulatoryDocumentController` | `EvidenceService` (asociación de fotografías y archivos a mediciones o incidencias)<br>`DocumentVersionService` (control de versiones e hitos documentales obligatorios) | `EvidenceRepository`<br>`RegulatoryDocumentRepository`<br>`DocumentVersionRepository` | Se relaciona con *Incident & Mitigation Management* y provee información de validación documental a *Reports & Compliance Management*. |
| **7. Reports & Compliance Management** | `ComplianceReportController`<br>`DashboardKpiController` | `ComplianceCalculationService` (cálculo de porcentaje de cumplimiento y salud ambiental)<br>`AuditReportGeneratorService` (consolidación histórica y exportación PDF) | `ComplianceReportRepository`<br>`PdfReportExportAdapter` | Agrega y consolida información de *Project Management*, *Environmental Monitoring*, *Incident & Mitigation* y *Document & Evidence*. |

![Diagrama de Componentes C4 - RoadWatch OS](../assets/images/ComponentDiagram.png)

## 4.7. Software Object-Oriented Design.
<a id="4-7-software-object-oriented-design"></a>

Esta sección presenta los diagramas de clases utilizados para representar con mayor detalle la estructura orientada a objetos de cada uno de los **siete Bounded Contexts** de RoadWatch OS.

Los diagramas mantienen consistencia directa con el Component Diagram definido en la arquitectura y representan las clases de dominio, servicios de aplicación, interfaces de repositorio, enumeraciones, atributos, métodos, visibilidad y multiplicidades correspondientes (destacando que en *Project Management* la entidad `MonitoringPoint` mantiene únicamente una clave de referencia `normativeThresholdId` hacia la configuración normativa gobernada por *Environmental Monitoring*).

### 4.7.1. Class Diagrams.
<a id="4-7-1-class-diagrams"></a>

A continuación se presentan los Class Diagrams correspondientes a los siete Bounded Contexts definidos para RoadWatch OS. Estos diagramas detallan las principales clases, interfaces, enumeraciones, atributos, métodos y relaciones que permiten representar las responsabilidades de cada contexto.

### Bounded Context - Identity & Access Management

![Class Diagram - Identity and Access](../assets/images/CD-IdentityandAccess.png)

### Bounded Context - Subscription Management

![Class Diagram - Subscription Management](../assets/images/CD-SubscriptionManagement.png)

### Bounded Context - Project Management

![Class Diagram - Project Management](../assets/images/CD-ProjectManagement.png)

### Bounded Context - Environmental Monitoring

![Class Diagram - Environmental Monitoring](../assets/images/CD-EnvironmentalMonitoring.png)

### Bounded Context - Incident & Mitigation Management

![Class Diagram - Incident and Mitigation](../assets/images/CD-IncidentandMitigation.png)

### Bounded Context - Document & Evidence Management

![Class Diagram - Document and Evidence](../assets/images/CD-DocumentandEvidence.png)

### Bounded Context - Reports & Compliance Management

![Class Diagram - Reports and Compliance](../assets/images/CD-ReportsandCompliance.png)

## 4.8. Database Design.
<a id="4-8-database-design"></a>

El diseño de base de datos de RoadWatch OS se organiza de acuerdo con los siete Bounded Contexts definidos para la solución, manteniendo la integridad de los datos y el registro histórico necesario para el seguimiento ambiental de los proyectos:

- **Identity & Access Management**
- **Subscription Management**
- **Project Management**
- **Environmental Monitoring**
- **Incident & Mitigation Management**
- **Document & Evidence Management**
- **Reports & Compliance Management**

El diseño relacional aplica claves primarias (`PK`), claves foráneas (`FK`), tipos de datos, restricciones de integridad y relaciones consistentes con los modelos de dominio de cada contexto.

### 4.8.1. Database Diagrams.
<a id="4-8-1-database-diagrams"></a>

Los Database Diagrams representan las estructuras persistentes correspondientes a cada Bounded Context. En ellos se especifican las tablas, columnas, claves primarias, claves foráneas, restricciones y relaciones necesarias para mantener la integridad de la información de RoadWatch OS.

### Bounded Context - Identity & Access Management

![Database Diagram - Identity and Access](../assets/images/BC1ERD.png)

### Bounded Context - Subscription Management

![Database Diagram - Subscription Management](../assets/images/BC2ERD.png)

### Bounded Context - Project Management

![Database Diagram - Project Management](../assets/images/BC3ERD.png)

### Bounded Context - Environmental Monitoring

![Database Diagram - Environmental Monitoring](../assets/images/BC4ERD.png)

### Bounded Context - Incident & Mitigation Management

![Database Diagram - Incident and Mitigation](../assets/images/BC5ERD.png)

### Bounded Context - Document & Evidence Management

![Database Diagram - Document and Evidence](../assets/images/BC6ERD.png)

### Bounded Context - Reports & Compliance Management

![Database Diagram - Reports and Compliance](../assets/images/BC7ERD.png)
