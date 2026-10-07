<div align="center">

<img src="UPC_logo_transparente.png" alt="Logo-UPC" width="150">

**Universidad Peruana de Ciencias Aplicadas**<br>
**Carrera de Ingeniería de Software**

**1ASI0729**<br>

NRC<br>
**7729**<br>
**Informe del Trabajo Final**<br>
Docente<br>
**Mori Paiva, Hugo Allan**<br>
Equipo<br>
**ViaNexo**

Proyecto<br>
**RoadWatch OS**

<br>
**Integrantes**

| Código      | Apellidos y Nombres              |
|-------------|----------------------------------|
| U202418029  | Pancorbo Amorós, Italo Raul      |
| U202412462  |Cabrera Sotelo, Camila Celeste  |
| U202  |Conde Huashuayo, Sebasthian Alex |
| U202 |Montes Chang, Piero Francisco |
| U202410421 |Diaz De La Cruz, Sebastian Gabriel |

**Período 202620**  

**Septiempre 2026**


</div>

---

<div style="page-break-after: always;"></div>

## Registro de Versiones del Informe

| Versión | Fecha | Autores | Descripción de modificación |
| :--- | :--- | :--- | :--- |
| **AV1** | 18/09/2026 | Pancorbo Amorós, Italo Raul<br>Cabrera Sotelo, Camila Celeste<br>Conde Huashuayo, Sebasthian Alex<br>Montes Chang, Piero Francisco<br>Diaz De La Cruz, Sebastian Gabriel | Creación inicial del archivo desde cero y elaboración de la estructura base del **Final Project Documentation Report**. Se incorporaron la carátula, registro de versiones, contenido, Student Outcome, capítulos de Introducción, Requirements Elicitation & Analysis, Requirements Specification, Product Design y Product Implementation, Validation & Deployment, incluyendo la configuración del entorno, gestión del código fuente, guía de estilos, despliegue, implementación de la Landing Page, Sprint 1, Conclusiones, Bibliografía y Anexos. |
| **TB1** | 06/10/2026 | Pancorbo Amorós, Italo Raul<br>Cabrera Sotelo, Camila Celeste<br>Conde Huashuayo, Sebasthian Alex<br>Montes Chang, Piero Francisco<br>Diaz De La Cruz, Sebastian Gabriel | Actualización general del informe para el hito de evaluación **TB1 (Semana 7)**. Se incorporaron la revisión y corrección de artefactos previamente presentados, la actualización de las secciones de Student Outcome y Project Report Collaboration Insights, y el registro del despliegue de la versión mejorada de la Landing Page y la primera versión funcional de la Frontend Web Application. Se agregó el desarrollo completo de la sección **5.2.2 (Sprint 2)**, incluyendo Sprint Planning 2, Aspect Leaders and Collaborators, Sprint Backlog 2, evidencias de desarrollo, ejecución, documentación de servicios (API RESTful), despliegue e insights de colaboración del equipo, junto con la actualización de Conclusiones, Recomendaciones, Bibliografía y Anexos. |
| **AV2** | | | |
| **TB2** | | | |


<div style="page-break-after: always;"></div>

# Project Report Collaboration Insights

# Tabla de Contenidos

## [Capítulo I: Introducción](#introduccion)

- [1.1. Startup Profile](#1-1-startup-profile)
  - [1.1.1. Descripción de la Startup](#1-1-1-descripcion-de-la-startup)
  - [1.1.2. Perfiles de integrantes del equipo](#1-1-2-perfiles-de-los-miembros-del-equipo)
- [1.2. Solution Profile](#1-2-solution-profile)
  - [1.2.1. Antecedentes y problemática](#1-2-1-antecedentes-y-problematica)
  - [1.2.2. Lean UX Process](#1-2-2-lean-ux-process)
    - [1.2.2.1. Lean UX Problem Statements](#1-2-2-1-lean-ux-problem-statements)
    - [1.2.2.2. Lean UX Assumptions](#1-2-2-2-lean-ux-assumptions)
    - [1.2.2.3. Lean UX Hypothesis Statements](#1-2-2-3-lean-ux-hypothesis-statements)
    - [1.2.2.4. Lean UX Canvas](#1-2-2-4-lean-ux-canvas)
- [1.3. Segmentos objetivo](#1-3-segmentos-objetivos)

---

## [Capítulo II: Requirements Elicitation & Analysis](#2-requirements-elicitation-analysis)

- [2.1. Competidores](#2-1-competidores)
  - [2.1.1. Análisis competitivo](#2-1-1-analisis-competitivo)
  - [2.1.2. Estrategias y tácticas frente a competidores](#2-1-2-estrategias-y-tacticas-frente-a-competidores)
- [2.2. Entrevistas](#2-2-entrevistas)
  - [2.2.1. Diseño de entrevistas](#2-2-1-diseno-de-entrevistas)
  - [2.2.2. Registro de entrevistas](#2-2-2-registro-de-entrevistas)
  - [2.2.3. Análisis de entrevistas](#2-2-3-analisis-de-entrevistas)
- [2.3. Needfinding](#2-3-needfinding)
  - [2.3.1. User Personas](#2-3-1-user-personas)
  - [2.3.2. User Task Matrix](#2-3-2-user-task-matrix)
  - [2.3.3. User Journey Mapping](#2-3-3-user-journey-mapping)
  - [2.3.4. Empathy Mapping](#2-3-4-empathy-mapping)
- [2.4. Big Picture Event Storming](#2-4-big-picture-eventstorming)
- [2.5. Ubiquitous Language](#2-5-ubiquitous-language)

---

## [Capítulo III: Requirements Specification](#3-requirements-specification)

- [3.1. User Stories](#3-1-user-stories)
- [3.2. Impact Mapping](#3-2-impact-mapping)
- [3.3. Product Backlog](#3-3-product-backlog)

---

## [Capítulo IV: Product Design](#4-product-design)

- [4.1. Style Guidelines](#4-1-style-guidelines)
  - [4.1.1. General Style Guidelines](#4-1-1-general-style-guidelines)
  - [4.1.2. Web Style Guidelines](#4-1-2-web-style-guidelines)
- [4.2. Information Architecture](#4-2-information-architecture)
  - [4.2.1. Organization Systems](#4-2-1-organization-systems)
  - [4.2.2. Labeling Systems](#4-2-2-labeling-systems)
  - [4.2.3. SEO Tags and Meta Tags](#4-2-3-seo-tags-meta-tags)
  - [4.2.4. Searching Systems](#4-2-4-searching-systems)
  - [4.2.5. Navigation Systems](#4-2-5-navigation-systems)
- [4.3. Landing Page UI Design](#4-3-landing-page-ui-design)
  - [4.3.1. Landing Page Wireframe](#4-3-1-landing-page-wireframe)
  - [4.3.2. Landing Page Mock-up](#4-3-2-landing-page-mock-up)
- [4.4. Web Applications UX/UI Design](#4-4-web-applications-ux-ui-design)
  - [4.4.1. Web Applications Wireframes](#4-4-1-web-applications-wireframes)
  - [4.4.2. Web Applications Wireflow Diagrams](#4-4-2-web-applications-wireflow-diagrams)
  - [4.4.3. Web Applications Mock-ups](#4-4-3-web-applications-mock-ups)
  - [4.4.4. Web Applications User Flow Diagrams](#4-4-4-web-applications-user-flow-diagrams)
- [4.5. Web Applications Prototyping](#4-5-web-applications-prototyping)
- [4.6. Domain-Driven Software Architecture](#4-6-domain-driven-software-architecture)
  - [4.6.1. Design-Level Event Storming.](#4-6-1-design-level-eventstorming)
  - [4.6.2. Software Architecture Context Diagram](#4-6-2-software-architecture-context-diagram)
  - [4.6.3. Software Architecture Container Diagrams](#4-6-3-software-architecture-container-diagrams)
  - [4.6.4. Software Architecture Components Diagrams](#4-6-4-software-architecture-components-diagrams)
- [4.7. Software Object-Oriented Design](#4-7-software-object-oriented-design)
  - [4.7.1. Class Diagrams](#4-7-1-class-diagrams)
- [4.8. Database Design](#4-8-database-design)
  - [4.8.1. Database Diagram](#4-8-1-database-diagrams)

---

## [Capítulo V: Product Implementation, Validation & Deployment](#product-implementation-validation-deployment)

- [5.1. Software Configuration Management](#5-1-software-configuration-management)
  - [5.1.1. Software Development Environment Configuration](#5-1-1-software-development-environment-configuration)
  - [5.1.2. Source Code Management](#5-1-2-source-code-management)
  - [5.1.3. Source Code Style Guide & Conventions](#5-1-3-source-code-style-guide-conventions)
  - [5.1.4. Software Deployment Configuration](#5-1-4-software-deployment-configuration)
- [5.2. Landing Page, Services & Applications Implementation](#5-2-landing-page-services-applications-implementation)
  - [5.2.1. Sprint 1](#5-2-1-sprint-1)
    - [5.2.1.1. Sprint Planning 1](#5-2-1-1-sprint-planning-1)
    - [5.2.1.2. Aspect Leaders and Collaborators](#5-2-1-2-aspect-leaders-and-collaborators)
    - [5.2.1.3. Sprint Backlog 1](#5-2-1-3-sprint-backlog-1)
    - [5.2.1.4. Development Evidence for Sprint Review](#5-2-1-4-development-evidence-for-sprint-review)
    - [5.2.1.5. Execution Evidence for Sprint Review](#5-2-1-5-execution-evidence-for-sprint-review)
    - [5.2.1.6. Services Documentation Evidence for Sprint Review](#5-2-1-6-services-documentation-evidence-for-sprint-review)
    - [5.2.1.7. Software Deployment Evidence for Sprint Review](#5-2-1-7-software-deployment-evidence-for-sprint-review)
    - [5.2.1.8. Team Collaboration Insights during Sprint](#5-2-1-8-team-collaboration-insights-during-sprint)
 - [5.2.2.1. Sprint Planning 2](#5-2-2-1-sprint-planning-2)
      - [5.2.2.2. Aspect Leaders and Collaborators](#5-2-2-2-aspect-leaders-and-collaborators)
      - [5.2.2.3. Sprint Backlog 2](#5-2-2-3-sprint-backlog-2)
      - [5.2.2.4. Development Evidence for Sprint Review](#5-2-2-4-development-evidence-for-sprint-review)
      - [5.2.2.5. Execution Evidence for Sprint Review](#5-2-2-5-execution-evidence-for-sprint-review)
      - [5.2.2.6. Services Documentation Evidence for Sprint Review](#5-2-2-6-services-documentation-evidence-for-sprint-review)
      - [5.2.2.7. Software Deployment Evidence for Sprint Review](#5-2-2-7-software-deployment-evidence-for-sprint-review)
      - [5.2.2.8. Team Collaboration Insights during Sprint](#5-2-2-8-team-collaboration-insights-during-sprint)

---

## [Conclusiones](#conclusiones)

### Conclusiones

* Se logró consolidar una plataforma web que resuelve de manera efectiva la dispersión de la información ambiental en los proyectos de infraestructura vial. Al centralizar las mediciones, alertas, incidencias y evidencias en un solo ecosistema, **RoadWatch OS** permite que las empresas constructoras y supervisoras mantengan una trazabilidad completa, trazable y en tiempo real del cumplimiento ambiental en sus obras.

* La estructuración del sistema basada en el Diseño Guiado por Dominios (DDD) y la división en *Bounded Contexts* específicos (Identity & Access, Project Management, Environmental Monitoring, Incident Management y Document Management) permitió organizar la complejidad técnica de la plataforma. Este enfoque modular facilitó el desarrollo en paralelo de funcionalidades independientes, garantizando que el sistema sea escalable y adaptable a nuevas exigencias normativas sin comprometer la arquitectura existente.

* El éxito del ciclo de trabajo radicó en la capacidad de autogestión y la estrategia colaborativa del equipo ("divide y vencerás"). La definición de una matriz de aspectos con líderes por dominio y el trabajo sobre ramas independientes redujeron drásticamente los conflictos de código (*merge conflicts*), asegurando la integración fluida de las vistas (Kanban, tabulares y dashboards) en un *layout* unificado.

---

### Recomendaciones

* Durante el desarrollo de las vistas interactivas (como el tablero Kanban y el dashboard ambiental), el mayor reto fue estandarizar la gestión del estado reactivo e integrar los componentes de los cinco dominios en el *layout* principal. La curva de aprendizaje para sincronizar las interacciones de usuario y mantener la coherencia del diseño demandó una alta coordinación técnica inicial que afectó el ritmo en los primeros días del Sprint.

* Se recomienda formalizar de manera anticipada los contratos de comunicación (API RESTful / OpenAPI) entre la capa de presentación y los servicios web. Establecer estos acuerdos desde la fase de diseño mediante adaptadores de datos simulados (*Mock Adapters*) permite que los miembros del equipo trabajen de forma independiente con una visión compartida, minimizando errores de integración y optimizando los tiempos de entrega en los siguientes ciclos de desarrollo.

---

## [Bibliografía](#bibliografia)



## [Anexos](#anexos)

<div style="text-align: left; max-width: 900px; margin: 0 auto;">



### Anexo A: Prototipos y Diseño
<a id="anexo-a-prototipos-y-diseno"></a>

| Recurso | Enlace |
|---|---|
| Link del Figma (App - Web - Wireflows) |https://www.figma.com/design/eGXyMXIHk0qbEQibxcmCCk/roadwatch?node-id=0-1&p=f&t=TNwOgrZQw6Wo0kMn-0 |

---

### Anexo B: Gestión del Proyecto
<a id="anexo-b-gestion-del-proyecto"></a>

| Recurso | Enlace |
|---|---|
| Design-Level Event Storming (Miro) | https://miro.com/welcomeonboard/cExUcjF1YWgyNWl6YlpZZHY3N0tVdFVycklvM3g4eTI0SnBGRy9GVFpMLzgvTHozVkkyVGJ2VSs5YTdib2ZWcllpK3p4cDIyVTcxNWlVYi9GV09VYUd1OFVrZDBZWUZnMkpxd3Avcy9NNmlnallxeWRYSWlPdVJzczBCcTVSay9Bd044SHFHaVlWYWk0d3NxeHNmeG9BPT0hdjE=?share_link_id=452333878649 |
| Sprint Backlog 1 (Trello) |https://trello.com/invite/b/6aaaf893146da1803fa7c582/ATTI953be54ae0a00d9a1f783b712cdcda28CEA7DD62/roadwatch-os-sprint-1  |
| Sprint Backlog 2 (Trello) | https://trello.com/invite/b/6ac45a47333a77ed1bb96de5/ATTIca8bddcc76ee95806b238f44a0f053fbF89A1419/sprin2-roadwatch |






### Anexo C: Videos de Exposiciones
<a id="anexo-d-videos-de-exposiciones"></a>

| Entrega | Título | Enlace |
|---|---|---|
| AV1 | Exposición AV1 — RoadWatch OS | https://upcedupe-my.sharepoint.com/:v:/g/personal/u202410421_upc_edu_pe/IQD_LnHNx-HqRqv-HFAjJ1qpAS--FQJu5dsHsXaKySKqQjY?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=UE0Qfp |
| TB1 | Exposición TB1 — RoadWatch OS | https://upcedupe-my.sharepoint.com/:v:/g/personal/u202410421_upc_edu_pe/IQBv2exzNrqBSrXMzGM1jBgYASk-nrAZWRl3pYsNgxF8844?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=66IAzR|

</div>

#### ABET – EAC - Student Outcome 3

**Criterio:** *Capacidad de comunicarse efectivamente con un rango de audiencias.*

En el siguiente cuadro se describen las acciones realizadas y los enunciados de conclusiones por parte del grupo para el logro del Student Outcome 3 en las entregas **AV1 (Primer Avance)** y **TB1 (Segundo Avance)** del proyecto **RoadWatch OS**:

| Criterio específico | Acciones realizadas | Conclusiones |
|:---|:---|:---|
| **Comunica oralmente con efectividad a diferentes rangos de audiencia.** | **Cabrera Sotelo, Camila Celeste**<br>*AV1:* Conducción oral de entrevistas de investigación para el levantamiento de información y análisis de necesidades.<br>*TB1:* Exposición y sustentación oral de los flujos de diseño (Wireflows, UserFlows) y prototipos de interfaz de usuario.<br><br>**Conde Huashuayo, Sebasthian Alex**<br>*AV1:* Facilitación y comunicación en equipo durante el desarrollo del modelo del EventStorming inicial.<br>*TB1:* Realización oral de la entrevista de validación para el segmento 1 y locución/participación activa en el video de presentación técnica.<br><br>**Diaz De La Cruz, Sebastian Gabriel**<br>*AV1:* Conducción oral de 2 entrevistas a usuarios clave y locución en la edición del video explicativo del proyecto.<br>*TB1:* Exposición oral sobre la arquitectura de despliegue (Deploy) del frontend y sustentación de los módulos de Document & Evidence y Reports & Compliance.<br><br>**Montes Chang, Piero Francisco**<br>*AV1:* Ejecución oral de 2 entrevistas directas con el segmento objetivo para extraer requerimientos de dominio.<br>*TB1:* Entrevistas orales de validación y sustentación del flujo de monitoreo ambiental.<br><br>**Pancorbo Amorós, Italo Raul**<br>*AV1:* Ejecución y moderación oral de 2 entrevistas de campo con potenciales usuarios.<br>*TB1:* Presentación oral principal y locución en el video demostrativo del proyecto, detallando los avances del Sprint 2 y la interacción del módulo de incidencias. | En **AV1**, el equipo estableció una comunicación oral fluida con usuarios reales durante las entrevistas de campo para el levantamiento de información. En **TB1**, se fortaleció la comunicación hacia audiencias académicas y clientes mediante la presentación técnica de prototipos y la producción de videos demostrativos, transmitiendo con claridad el valor de la plataforma. |
| **Comunica por escrito con efectividad a diferentes rangos de audiencia.** | **Cabrera Sotelo, Camila Celeste**<br>*AV1:* Redacción del Needfinding del segmento 1, análisis de entrevistas e implementación técnica de i18n (internacionalización) en la Landing Page.<br>*TB1:* Documentación escrita detallada de Mockups, Wireframes, Wireflows, UserFlows, y desarrollo de código frontend para los Bounded Contexts de *Identity & Access Management* y *Subscription Management*.<br><br>**Conde Huashuayo, Sebasthian Alex**<br>*AV1:* Redacción del Sprint 1, apoyo en la edición del informe general, capturas de mockups y documentación del Capítulo 5.<br>*TB1:* Redacción técnica de correcciones del Capítulo 5, documentación del Bounded Context de *Project Management*, ajustes escritos a la Landing Page y redacción de capítulos de soporte.<br><br>**Diaz De La Cruz, Sebastian Gabriel**<br>*AV1:* Redacción del análisis de 2 entrevistas, actualización de Needfinding y documentación técnica para Landing Page y Mockups mobile.<br>*TB1:* Redacción técnica de correcciones del Capítulo 2 (análisis de entrevistas, Needfinding, diagramas de contenedores y clases), guía escrita del Deploy del frontend y desarrollo frontend de *Document & Evidence* y *Reports & Compliance*.<br><br>**Montes Chang, Piero Francisco**<br>*AV1:* Redacción de la Sección 4.6.1 del informe general, documentación del Design-Level EventStorming (Arquitectura DDD con 8 Bounded Contexts) y análisis escrito de entrevistas.<br>*TB1:* Redacción del informe del proceso de entrevistas y especificación escrita del Bounded Context de *Environmental Monitoring*. <br><br>**Pancorbo Amorós, Italo Raul**<br>*AV1:* Desarrollo escrito del Capítulo I, análisis de competidores, Needfinding del segmento 2, Product Backlog, User Stories y diagramas de clases y ERD.<br>*TB1:* Corrección integral del Lean UX Process en el Capítulo 1, corrección escrita de entrevistas, documentación del frontend de *Incident and Mitigation Management* y reporte del Sprint 2. | La documentación escrita demostró una evolución técnico-formal consistente. En **AV1**, se redactó con precisión la fase de investigación y modelado del negocio. En **TB1**, la comunicación escrita se adaptó a estándares de ingeniería de software, detallando arquitecturas, Bounded Contexts y guías de despliegue. |
