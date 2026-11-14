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
**VíaNexo**

Proyecto<br>
**RoadWatch OS**

<br>
**Integrantes**

| Código      | Apellidos y Nombres              |
|-------------|----------------------------------|
| U202418029  | Pancorbo Amorós, Italo Raul      |
| U202412462  | Cabrera Sotelo, Camila Celeste   |
| U20241E356  | Conde Huashuayo, Sebasthian Alex |
| U20241G031  | Montes Chang, Piero Francisco    |
| U202410421  | Diaz De La Cruz, Sebastian Gabriel |

**Período 202620**  

**Septiembre 2026**


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
  - [5.2.2. Sprint 2](#5-2-2-sprint-2)
    - [5.2.2.1. Sprint Planning 2](#5-2-2-1-sprint-planning-2)
    - [5.2.2.2. Aspect Leaders and Collaborators](#5-2-2-2-aspect-leaders-and-collaborators)
    - [5.2.2.3. Sprint Backlog 2](#5-2-2-3-sprint-backlog-2)
    - [5.2.2.4. Development Evidence for Sprint Review](#5-2-2-4-development-evidence-for-sprint-review)
    - [5.2.2.5. Execution Evidence for Sprint Review](#5-2-2-5-execution-evidence-for-sprint-review)
    - [5.2.2.6. Services Documentation Evidence for Sprint Review](#5-2-2-6-services-documentation-evidence-for-sprint-review)
    - [5.2.2.7. Software Deployment Evidence for Sprint Review](#5-2-2-7-software-deployment-evidence-for-sprint-review)
    - [5.2.2.8. Team Collaboration Insights during Sprint](#5-2-2-8-team-collaboration-insights-during-sprint)
  - [5.2.3. Sprint 3](#5-2-3-sprint-3)
    - [5.2.3.1. Sprint Planning 3](#5-2-3-1-sprint-planning-3)
    - [5.2.3.2. Aspect Leaders and Collaborators](#5-2-3-2-aspect-leaders-and-collaborators)
    - [5.2.3.3. Sprint Backlog 3](#5-2-3-3-sprint-backlog-3)
    - [5.2.3.4. Development Evidence for Sprint Review](#5-2-3-4-development-evidence-for-sprint-review)
    - [5.2.3.5. Execution Evidence for Sprint Review](#5-2-3-5-execution-evidence-for-sprint-review)
    - [5.2.3.6. Services Documentation Evidence for Sprint Review](#5-2-3-6-services-documentation-evidence-for-sprint-review)
    - [5.2.3.7. Software Deployment Evidence for Sprint Review](#5-2-3-7-software-deployment-evidence-for-sprint-review)
    - [5.2.3.8. Team Collaboration Insights during Sprint](#5-2-3-8-team-collaboration-insights-during-sprint)
- [5.3. Validation Interviews](#5-3-validation-interviews)
  - [5.3.1. Diseño de Entrevistas](#5-3-1-diseno-de-entrevistas)
  - [5.3.2. Registro de Entrevistas](#5-3-2-registro-de-entrevistas)
  - [5.3.3. Evaluaciones según heurísticas](#5-3-3-evaluaciones-segun-heuristicas)
- [5.4. Video About-the-Product](#5-4-video-about-the-product)

---

## [Conclusiones](#conclusiones)
<a id="conclusiones"></a>

### Conclusiones

* RoadWatch OS responde a la necesidad de reunir información ambiental de proyectos viales en una misma experiencia de consulta. La versión de frontend desarrollada y validada permite recorrer proyectos, mediciones, alertas, incidencias, evidencias y reportes para los dos segmentos objetivo. Las entrevistas registradas muestran que los participantes comprendieron la organización general y valoraron la centralización; estas apreciaciones corresponden a las sesiones observadas y no equivalen a una validación de uso a escala.

* La separación en siete *Bounded Contexts* permitió distribuir la implementación del backend por responsabilidades y ramas de trabajo. En el Sprint 3 se integraron esas ramas en `develop`, se documentaron rutas REST y se registró una compilación y ejecución de pruebas seleccionadas sin fallos. La evidencia técnica acredita el estado del código integrado en esas verificaciones, pero no demuestra por sí sola que todos los flujos de negocio funcionen de extremo a extremo.

* Las capturas de Railway muestran el backend y MySQL en línea, así como tablas de varios contextos. Las de Swagger UI muestran la documentación interactiva publicada y esquemas de recursos visibles. Sigue pendiente registrar una operación REST exitosa sobre el despliegue, comprobar la lectura o escritura de datos persistidos y asociar la instancia a un commit específico. Por ello, la integración funcional con la base de datos no se da por cerrada en esta entrega.

* Las entrevistas de validación identificaron mejoras concretas para ambos segmentos: mostrar unidades y límites junto a las mediciones, explicar el origen y los siguientes pasos de las incidencias, facilitar el acceso a evidencias y documentos, distinguir versiones vigentes y permitir buscar proyectos por nombre al preparar reportes. Estos hallazgos orientan la siguiente iteración de la interfaz y la priorización del Product Backlog.

* El tablero de Trello muestra diez historias en `Done` y GitHub Insights registra actividad de los integrantes en los repositorios. Estas evidencias respaldan el seguimiento y la distribución del trabajo. La aceptación de cada historia requiere contrastar sus criterios con pruebas funcionales y resultados de revisión, ya que el estado del tablero y el número de commits no miden por sí mismos la calidad del producto.

---

### Recomendaciones

* Durante el desarrollo de las vistas interactivas (como el tablero Kanban de incidencias, el historial de mediciones y las vistas de supervisión de portafolio), uno de los principales retos fue estandarizar la gestión del estado y la navegación compartida para integrar los componentes de los siete *Bounded Contexts* en el *layout* principal. Definir desde el inicio un diseño común de *App Shell*, rutas y componentes reutilizables permite reducir la fricción de integración en los primeros días de cada Sprint.

* Se recomienda formalizar de manera anticipada los contratos de comunicación (API RESTful / OpenAPI) entre la capa de presentación y los servicios backend de cada *Bounded Context*. Establecer estos acuerdos desde la fase de diseño y apoyarse inicialmente en adaptadores de datos simulados (*Mock Adapters*) permite validar los flujos de usuario del frontend de manera temprana y preparar una transición ordenada hacia la implementación y conexión de los servicios web en los siguientes Sprints.

---

## [Bibliografía](#bibliografia)
<a id="bibliografia"></a>

Brown, S. (s. f.). *Structurizr - Embedding diagrams*. Structurizr. https://docs.structurizr.com/cloud/embed

Cámara Peruana de la Construcción [CAPECO]. (2025). *Informe Económico de la Construcción (IEC)*. CAPECO. https://www.capeco.org/

Cohn, M. (s. f.). *User stories articles*. Mountain Goat Software. https://www.mountaingoatsoftware.com/blog/tag/user-stories

Dittrich, J. (s. f.). *A beginner’s guide to finding user needs*. https://jdittrich.github.io/userNeedResearchBook/

DZone. (s. f.). *Acceptance criteria in Scrum: Explanation, examples, and template*. https://dzone.com/articles/acceptance-criteria-in-software-explanation-exampl

Fowler, M. (s. f.). *Ubiquitous Language*. https://martinfowler.com/bliki/UbiquitousLanguage.html

IBM. (s. f.). *As-is scenario map: Build a better understanding of your users’ current experience*. https://www.ibm.com/design/thinking/page/toolkit/activity/as-is-scenario-map

IBM. (s. f.). *Empathy map: Build empathy for your users through a conversation informed by your team’s observations*. https://www.ibm.com/design/thinking/page/toolkit/activity/empathy-map

IBM. (s. f.). *To-be scenario map: Draft a vision of your user’s future experience*. https://www.ibm.com/design/thinking/page/toolkit/activity/to-be-scenario-map

Mendel, J. (s. f.). *Seriously, what’s your startup’s problem?* Medium. https://medium.com/@jakemendel/seriously-whats-your-startup-s-problem-b3a884c54ab4

Modern Requirements. (s. f.). *Using a Requirements Traceability Matrix to improve project quality*. https://www.modernrequirements.com/blogs/using-a-requirements-traceability-matrix-to-improve-project-quality/

Nielsen Norman Group. (s. f.). *Empathy mapping: The first step in design thinking*. https://www.nngroup.com/articles/empathy-mapping/

Open Practice Library. (s. f.). *Ubiquitous Language: Unambiguously define the terms and concepts of a business domain*. https://openpracticelibrary.com/practice/ubiquitous-language/

Organismo de Evaluación y Fiscalización Ambiental [OEFA]. (2025). *Fiscalización ambiental en el sector transportes y comunicaciones*. Plataforma Digital Única del Estado Peruano. https://www.gob.pe/oefa

Progressa Lean. (s. f.). *5W+2H - Técnica de análisis de problemas*. https://www.progressalean.com/5w2h-tecnica-de-analisis-de-problemas/

Servicio Nacional de Certificación Ambiental para las Inversiones Sostenibles [SENACE]. (2024). *Registro Nacional de Consultoras Ambientales (RNCA)*. Plataforma Digital Única del Estado Peruano. https://www.gob.pe/senace

Tamim, N. (s. f.). *How to use PlantUML with Markdown*. GitHub Gist. https://gist.github.com/noamtamim/f11982b28602bd7e604c233fbe9d910f

The Markdown Guide. (s. f.). *Markdown Guide*. https://www.markdownguide.org/

UX for the Masses. (s. f.). *A step-by-step guide to scenario mapping*. http://www.uxforthemasses.com/scenario-mapping/

UXPressia. (s. f.). *How to create an Impact Map in 4 easy steps?* https://uxpressia.com/blog/build-impact-map-4-easy-steps

UXPressia. (s. f.). *User vs. Buyer Persona: Differences and free template*. https://uxpressia.com/blog/user-persona-vs-buyer-persona-difference



## [Anexos](#anexos)
<a id="anexos"></a>

- [Anexo A: Prototipos y Diseño](#anexo-a-prototipos-y-diseno)
- [Anexo B: Gestión del Proyecto](#anexo-b-gestion-del-proyecto)
- [Anexo C: Videos de Exposiciones](#anexo-c-videos-de-exposiciones)
- [Anexo D: Repositorios y Despliegues](#anexo-d-repositorios-y-despliegues)
- [Anexo E: Videos de Validación y Presentación del Producto](#anexo-e-videos-de-validacion-y-presentacion)
- [ABET – EAC - Student Outcome 3](#abet-eac-student-outcome-3)

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
| Sprint Backlog 3 (Trello) | https://trello.com/invite/b/6af79e14bc4744f18eca99eb/ATTI2a6f590a79b636427ecbf0a061cf468bBE7268C9/sprin-backlog-roadwatch |






### Anexo C: Videos de Exposiciones
<a id="anexo-c-videos-de-exposiciones"></a>

| Entrega | Título | Enlace |
|---|---|---|
| AV1 | Exposición AV1 — RoadWatch OS | https://upcedupe-my.sharepoint.com/:v:/g/personal/u202410421_upc_edu_pe/IQD_LnHNx-HqRqv-HFAjJ1qpAS--FQJu5dsHsXaKySKqQjY?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=UE0Qfp |
| TB1 | Exposición TB1 — RoadWatch OS | https://upcedupe-my.sharepoint.com/:v:/g/personal/u202410421_upc_edu_pe/IQBv2exzNrqBSrXMzGM1jBgYASk-nrAZWRl3pYsNgxF8844?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=66IAzR|
| AV2 | Exposición AV2 — RoadWatch OS |https://upcedupe-my.sharepoint.com/:v:/g/personal/u202410421_upc_edu_pe/IQCAPsJLPwHNSIhicDCn7uTPAWiXR4MqPgD5Hb1yZJUiOuQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=5q0Y8a https://youtu.be/7SikAQk__qM |
| TB2 | Exposición TB2 — RoadWatch OS | |

### Anexo D: Repositorios y Despliegues
<a id="anexo-d-repositorios-y-despliegues"></a>

| Recurso | Enlace |
|---|---|
| Organización de GitHub de RoadWatch OS | https://github.com/DA-Open-Source-1ASI0729-2620-7729 |
| Repositorio de Landing Page | https://github.com/DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-LandingPage |
| Repositorio de Frontend Web Application | https://github.com/DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Frontend |
| Repositorio de Web Services (RESTful API) | https://github.com/DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Backend |
| Repositorio del Project Report | https://github.com/DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Report |
| Landing Page desplegada | https://da-open-source-1asi0729-2620-7729.github.io/RoadWatch-OS-LandingPage/ |
| Frontend Web Application (QA, Sprint 2) | https://road-watch-os-frontend.vercel.app/auth/login |
| Frontend Web Application (validación) | https://roadwatch-os-frontend.vercel.app/monitoring |
| Swagger UI del backend en Railway | https://roadwatch-os-backend-production.up.railway.app/swagger-ui/swagger-ui/index.html |
| URL pública de Railway para el backend | https://roadwatch-os-backend-production.up.railway.app/ |

---

### Anexo E: Videos de Validación y Presentación del Producto
<a id="anexo-e-videos-de-validacion-y-presentacion"></a>

| Recurso | Enlace |
|---|---|
| Video de validación — Segmento 1, Luis Alfonso Chávez Madueño | https://1drv.ms/v/c/113B281D1AF386CE/IQCB0f8yxgWfQL5eUdYlqZ4UAQ2dNnxRUecP-YCOKLZu3Yk?e=eRa2tx |
| Video de validación — Segmento 1, Alexandra Ojeda | https://upcedupe-my.sharepoint.com/:v:/g/personal/u20241g031_upc_edu_pe/IQBwKceYtUksQYnne1fwPT9AAdl9I2SEgCI_u-6XKf7DCCg?e=HSHvhS |
| Video de validación — Segmento 2, Fabio | https://1drv.ms/v/c/113B281D1AF386CE/IQBDCHbWA_ctTLGyzkoQZ6cQAQfKLGio0Fs2fa5OnTfZ1lA?e=ZDMWNZ |
| Video de validación — Segmento 2, Angie Cuya | https://upcedupe-my.sharepoint.com/:v:/g/personal/u20241g031_upc_edu_pe/IQCNFffK_lqoTZJj9FQ2qr8gATUKWnJMGmx5yxSGesEvLCU?e=ZQPETb |
| Video About-the-Product (YouTube) | https://youtu.be/-9enNXuyJ3s |
| Video About-the-Product (Microsoft Stream) | https://upcedupe-my.sharepoint.com/:v:/g/personal/u202410421_upc_edu_pe/IQDrL1dLRqU-SKn2kd0TEq0JAYzZsyz2tN2wUUkIwW8EH7k?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXcifX0%3D&e=AB0p8t |
| Video About-the-Team | https://upcedupe-my.sharepoint.com/personal/u202410421_upc_edu_pe/_layouts/15/stream.aspx?id=%2Fpersonal%2Fu202410421%5Fupc%5Fedu%5Fpe%2FDocuments%2Fupc%2Dpre%2D202620%2D1asi0729%2D7729%2Droadwatch%2Dos%2Dabout%2Dthe%2Dteam%2Dsprint%2D3%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0=&ga=1|

</div>


#### ABET – EAC - Student Outcome 3
<a id="abet-eac-student-outcome-3"></a>

**Criterio:** *Capacidad de comunicarse efectivamente con un rango de audiencias.*

En el siguiente cuadro se describen las acciones realizadas y los enunciados de conclusiones por parte del grupo para el logro del Student Outcome 3 en las entregas **AV1 (Primer Avance)**, **TB1 (Segundo Avance)** y **AV2 (Tercer Avance)** del proyecto **RoadWatch OS**:

| Criterio específico | Acciones realizadas | Conclusiones |
|:---|:---|:---|
| **Comunica oralmente con efectividad a diferentes rangos de audiencia.** | **Cabrera Sotelo, Camila Celeste**<br>*AV1:* Conducción oral de entrevistas de investigación para el levantamiento de información y análisis de necesidades.<br>*TB1:* Exposición y sustentación oral de los flujos de diseño (Wireflows, UserFlows) y prototipos de interfaz de usuario.<br>*AV2:* Preparación de contenidos para la comunicación audiovisual de las lecciones 9 y 10 del curso de Java dirigido a estudiantes de secundaria, abordando arreglos de objetos y un programa de registro de estudiantes. Organización de explicaciones y ejemplos prácticos para facilitar la comprensión de conceptos técnicos por una audiencia principiante.<br><br>**Conde Huashuayo, Sebasthian Alex**<br>*AV1:* Facilitación y comunicación en equipo durante el desarrollo del modelo del EventStorming inicial.<br>*TB1:* Realización oral de la entrevista de validación para el segmento 1 y locución/participación activa en el video de presentación técnica.<br>*AV2:* Preparación de materiales para la explicación audiovisual de las lecciones 7 y 8 del curso de Java, sobre clases, objetos, constructores y encapsulación. Organización de ejemplos progresivos que permiten comunicar conceptos de programación orientada a objetos a estudiantes sin conocimientos técnicos avanzados.<br><br>**Diaz De La Cruz, Sebastian Gabriel**<br>*AV1:* Conducción oral de 2 entrevistas a usuarios clave y locución en la edición del video explicativo del proyecto.<br>*TB1:* Exposición oral sobre la arquitectura de despliegue (Deploy) del frontend y sustentación de los módulos de Document & Evidence y Reports & Compliance.<br>*AV2:* Preparación de las lecciones audiovisuales 1 y 2 del curso de Java para estudiantes de secundaria, enfocadas en los fundamentos de programación, variables y tipos de datos. Estructuración de explicaciones sencillas y demostraciones prácticas para comunicar conceptos técnicos a una audiencia sin experiencia previa en programación.<br><br>**Montes Chang, Piero Francisco**<br>*AV1:* Ejecución oral de 2 entrevistas directas con el segmento objetivo para extraer requerimientos de dominio.<br>*TB1:* Entrevistas orales de validación y sustentación del flujo de monitoreo ambiental.<br>*AV2:* Preparación de recursos para la presentación audiovisual de las lecciones 3 y 4 del curso de Java, relacionadas con operadores, expresiones y estructuras condicionales. Organización de ejemplos demostrativos para explicar el funcionamiento de operaciones y decisiones mediante código, adaptando el lenguaje técnico a estudiantes de secundaria.<br><br>**Pancorbo Amorós, Italo Raul**<br>*AV1:* Ejecución y moderación oral de 2 entrevistas de campo con potenciales usuarios.<br>*TB1:* Presentación oral principal y locución en el video demostrativo del proyecto, detallando los avances del Sprint 2 y la interacción del módulo de incidencias.<br>*AV2:* Preparación de contenidos para la comunicación audiovisual de las lecciones 5 y 6 del curso de Java, enfocadas en estructuras repetitivas, métodos y entrada/salida de datos. Elaboración de ejemplos secuenciales y ejercicios demostrativos orientados a facilitar la explicación de conceptos de programación a una audiencia principiante. | En **AV1**, el equipo estableció una comunicación oral fluida con usuarios reales durante las entrevistas de campo para el levantamiento de información. En **TB1**, se fortaleció la comunicación hacia audiencias académicas y clientes mediante la presentación técnica de prototipos y la producción de videos demostrativos, transmitiendo con claridad el valor de la plataforma.<br><br>En **AV2**, el equipo amplió sus habilidades de comunicación oral mediante el desarrollo de contenidos educativos audiovisuales de programación Java dirigidos a estudiantes de secundaria. Esta actividad permitió trabajar en la adaptación del lenguaje técnico, la organización de explicaciones y el uso de ejemplos prácticos para una audiencia no especializada. Asimismo, la elaboración de los videos About-the-Product y About-the-Team de RoadWatch OS contribuyó a comunicar la propuesta de valor del producto, el proceso de desarrollo y los aprendizajes del equipo, fortaleciendo la comunicación hacia audiencias académicas y potenciales usuarios. |
| **Comunica por escrito con efectividad a diferentes rangos de audiencia.** | **Cabrera Sotelo, Camila Celeste**<br>*AV1:* Redacción del Needfinding del segmento 1, análisis de entrevistas e implementación técnica de i18n (internacionalización) en la Landing Page.<br>*TB1:* Documentación escrita detallada de Mockups, Wireframes, Wireflows, UserFlows, y desarrollo de código frontend para los Bounded Contexts de *Identity & Access Management* y *Subscription Management*.<br>*AV2:* Actualización de la documentación arquitectónica del Capítulo IV mediante diagramas C4 de componentes y relaciones entre los siete Bounded Contexts. Desarrollo de servicios REST y pruebas del backend correspondientes a *Incident & Mitigation Management*, aplicando convenciones de código para comunicar las responsabilidades de los componentes. Asimismo, elaboración de guiones, ejercicios iniciales y ejemplos completos de las lecciones 9 y 10 del curso de Java, adaptando el contenido técnico a estudiantes principiantes.<br><br>**Conde Huashuayo, Sebasthian Alex**<br>*AV1:* Redacción del Sprint 1, apoyo en la edición del informe general, capturas de mockups y documentación del Capítulo 5.<br>*TB1:* Redacción técnica de correcciones del Capítulo 5, documentación del Bounded Context de *Project Management*, ajustes escritos a la Landing Page y redacción de capítulos de soporte.<br>*AV2:* Actualización y corrección de la documentación del Design-Level EventStorming del Capítulo IV, incorporando los siete Bounded Contexts de RoadWatch OS. Desarrollo de componentes del backend de *Document & Evidence Management* y *Reports & Compliance Management*, incluyendo servicios, recursos y controladores REST organizados según las convenciones arquitectónicas del proyecto. Adicionalmente, elaboración de guiones y materiales didácticos para las lecciones 7 y 8 del curso de Java, utilizando explicaciones y ejemplos de programación orientada a objetos.<br><br>**Diaz De La Cruz, Sebastian Gabriel**<br>*AV1:* Redacción del análisis de 2 entrevistas, actualización de Needfinding y documentación técnica para Landing Page y Mockups mobile.<br>*TB1:* Redacción técnica de correcciones del Capítulo 2 (análisis de entrevistas, Needfinding, diagramas de contenedores y clases), guía escrita del Deploy del frontend y desarrollo frontend de *Document & Evidence* y *Reports & Compliance*.<br>*AV2:* Desarrollo e integración de componentes del frontend Angular y servicios backend para los Bounded Contexts de *Identity & Access Management*, *Subscription Management*, *Document & Evidence Management* y *Reports & Compliance Management*. Implementación de funcionalidades de autenticación, gestión de suscripciones, documentos, evidencias y reportes, junto con ajustes de integración entre el frontend y la API REST. Contribución a la configuración del backend para su despliegue en Railway con MySQL y actualización del contenido del Landing Page para mantener consistencia con el alcance del producto. Asimismo, elaboración y actualización de guiones y recursos educativos de las lecciones 1 y 2 del curso de Java, incluyendo instrucciones y enlaces de práctica.<br><br>**Montes Chang, Piero Francisco**<br>*AV1:* Redacción de la Sección 4.6.1 del informe general, documentación del Design-Level EventStorming (Arquitectura DDD con 7 Bounded Contexts) y análisis escrito de entrevistas.<br>*TB1:* Redacción del informe del proceso de entrevistas y especificación escrita del Bounded Context de *Environmental Monitoring*.<br>*AV2:* Actualización de los diagramas de clases y base de datos de las secciones 4.7.1 y 4.8.1 del informe, mejorando la representación de entidades y sus relaciones. Implementación del backend de *Environmental Monitoring*, incluyendo modelos de dominio, repositorios de persistencia, servicios de aplicación y endpoints REST. Adicionalmente, elaboración de guiones, ejercicios iniciales y ejemplos resueltos de las lecciones 3 y 4 del curso de Java, comunicando por escrito conceptos de operadores y estructuras condicionales para estudiantes principiantes.<br><br>**Pancorbo Amorós, Italo Raul**<br>*AV1:* Desarrollo escrito del Capítulo I, análisis de competidores, Needfinding del segmento 2, Product Backlog, User Stories y diagramas de clases y ERD.<br>*TB1:* Corrección integral del Lean UX Process en el Capítulo 1, corrección escrita de entrevistas, documentación del frontend de *Incident and Mitigation Management* y reporte del Sprint 2.<br>*AV2:* Realización de correcciones y mejoras en la documentación del proyecto, incluyendo el alcance del MVP, criterios de aceptación, requisitos y aspectos de implementación. Desarrollo del backend de *Project Management*, incorporando operaciones REST para proyectos y puntos de monitoreo, búsquedas, paginación y pruebas de respuestas. Aplicación de convenciones técnicas para facilitar la comprensión y mantenimiento del código. Asimismo, elaboración de guiones, ejercicios y materiales educativos de las lecciones 5 y 6 del curso de Java, incluyendo enlaces de práctica para favorecer el aprendizaje autónomo. | La documentación escrita demostró una evolución técnico-formal consistente. En **AV1**, se redactó con precisión la fase de investigación y modelado del negocio. En **TB1**, la comunicación escrita se adaptó a estándares de ingeniería de software, detallando arquitecturas, Bounded Contexts y guías de despliegue.<br><br>En **AV2**, el equipo fortaleció sus habilidades de comunicación escrita mediante la actualización de documentación técnica, diagramas de arquitectura, modelos de dominio, especificaciones de requisitos y desarrollo estructurado de código fuente y pruebas. El uso de GitHub permitió registrar los cambios de forma organizada y trazable, facilitando la comunicación entre los integrantes durante la implementación e integración del frontend y backend de RoadWatch OS. Complementariamente, la elaboración del curso de Java permitió adaptar la comunicación escrita a una audiencia no especializada, mediante guiones, ejercicios prácticos y ejemplos resueltos. Estas actividades evidencian la capacidad del equipo para transmitir información técnica de manera clara, organizada y adecuada para desarrolladores, evaluadores académicos y estudiantes principiantes. |

---

# Capítulo I: Introducción
<a id="introduccion"></a>

El presente proyecto tiene como finalidad el diseño, desarrollo e implementación de una solución tecnológica distribuida conformada por una API REST y una aplicación web responsiva. La propuesta está orientada a mejorar la gestión y supervisión ambiental en proyectos de infraestructura vial, centralizando información relacionada con proyectos, puntos de monitoreo, mediciones ambientales, incidencias, evidencias, acciones de mitigación y reportes. Para su desarrollo se aplican prácticas de diseño centrado en el usuario mediante Lean UX, metodologías ágiles y una arquitectura orientada a servicios.

En la actualidad, las empresas constructoras viales y las empresas supervisoras o consultoras ambientales enfrentan dificultades para registrar, organizar y dar seguimiento a la información ambiental generada durante la ejecución de los proyectos. El uso de hojas de cálculo, documentos, fotografías y distintos canales de comunicación puede ocasionar información dispersa, dificultades para consultar antecedentes y demoras en la identificación y atención de posibles desviaciones ambientales.

Para atender esta problemática, se plantea el desarrollo de **RoadWatch OS**, una plataforma web que permite centralizar y consultar la información ambiental de los proyectos viales. La solución facilita el registro de mediciones, la comparación de valores con los umbrales establecidos, el seguimiento de alertas e incidencias, la asociación de evidencias y acciones de mitigación, y la generación de información consolidada para apoyar los procesos de supervisión y elaboración de reportes.

Dentro del alcance del MVP, las mediciones ambientales pueden ser registradas mediante los servicios desarrollados por la plataforma, sin depender de una integración directa con dispositivos físicos. Como evolución futura del producto, RoadWatch OS podrá incorporar integraciones con dispositivos de monitoreo ambiental para automatizar la recepción de mediciones provenientes de campo.

---

## 1.1. Startup Profile
<a id="1-1-startup-profile"></a>

En esta sección se expone la estructura institucional de la entidad desarrolladora, detallando su enfoque de negocio, la propuesta de valor integrada y la conformación de su equipo de trabajo.

### 1.1.1. Descripción de la Startup
<a id="1-1-1-descripcion-de-la-startup"></a>

**VíaNexo** es una startup tecnológica orientada al desarrollo de soluciones digitales para apoyar la gestión y supervisión ambiental en proyectos de infraestructura vial. Su propuesta busca facilitar el registro, organización y seguimiento de información relacionada con mediciones ambientales, incidencias, evidencias, acciones de mitigación y reportes, permitiendo que los distintos actores involucrados puedan trabajar con información centralizada y organizada.

El nombre **VíaNexo** representa la conexión entre la infraestructura vial y los procesos digitales que permiten gestionar y supervisar la información ambiental asociada a los proyectos. La startup busca reducir la dispersión de información y facilitar la coordinación entre empresas constructoras viales y empresas supervisoras o consultoras ambientales.

La estrategia de comercialización considera un modelo de suscripción orientado a los dos principales segmentos del producto: las empresas constructoras viales y las empresas supervisoras o consultoras ambientales. RoadWatch OS podrá ofrecer diferentes niveles de servicio de acuerdo con las funcionalidades y capacidades disponibles para cada organización, permitiendo adaptar el uso de la plataforma a las necesidades de cada empresa.

En el marco de esta propuesta, VíaNexo desarrolla **RoadWatch OS**, una plataforma web orientada a centralizar la gestión ambiental de proyectos viales. La solución permite registrar proyectos y puntos de monitoreo, gestionar mediciones ambientales, identificar posibles desviaciones respecto de los umbrales establecidos, dar seguimiento a incidencias y acciones de mitigación, asociar evidencias y generar información consolidada para la supervisión y elaboración de reportes.

#### Misión

Desarrollar soluciones digitales que faciliten a las empresas constructoras viales y a las empresas supervisoras o consultoras ambientales la gestión, seguimiento y supervisión de la información ambiental de sus proyectos, promoviendo una mejor organización de los datos y una atención más oportuna de las incidencias.

#### Visión

Consolidarse como una startup tecnológica reconocida por ofrecer soluciones digitales que contribuyan a mejorar la gestión y supervisión ambiental en proyectos de infraestructura vial, mediante herramientas accesibles, organizadas y adaptables a las necesidades de las empresas del sector.

### 1.1.2. Perfiles de los Miembros del Equipo
<a id="1-1-2-perfiles-de-los-miembros-del-equipo"></a>

| Foto | Apellido y Nombre | Código | Rol / Perfil |
|:---|:---|:---|:---|
| <img src="assets/images/chapter1/Italo.jpeg" alt="Italo" width="120" height="120" style="object-fit: cover;"> | Italo Raul Pancorbo Amorós | U202418029 | Estudiante de Ingeniería de Software. Me considero una persona responsable, aplicada y me gusta aprender nuevas tecnologías enfocadas en el desarrollo web y arquitecturas limpias. |
| <img src="assets/images/chapter1/Sebasthian.png" alt="Sebasthian" width="120" height="120" style="object-fit: cover;"> | Sebasthian Alex Conde Huashuayo | U20241E356 | Estudiante de Ingeniería de Software. Me gusta la programación y el desarrollo de software, buscando construir soluciones mantenibles mediante buenas prácticas de ingeniería. |
| <img src="assets/images/chapter1/Diaz.jpg" alt="Sebastian Diaz" width="120" height="120" style="object-fit: cover;"> | Sebastian Gabriel Díaz De la Cruz | U202410421 | Estudiante de Ingeniería de Software, interesado en el diseño de arquitecturas de software, el desarrollo de soluciones digitales y el trabajo colaborativo. |
| <img src="assets/images/chapter1/perfilpiero.jpg" alt="Piero" width="120" height="120" style="object-fit: cover;"> | Piero Francisco Montes Chang | U20241G031 | Estudiante de Ingeniería de Software. Desarrollo software para proyectos académicos y personales, con interés en la lógica de negocio, modelado de dominio y estructuras de datos. |
| <img src="assets/images/chapter1/cabrera-camila.png" alt="Camila Cabrera" width="120" height="120" style="object-fit: cover;"> | Camila Celeste Cabrera Sotelo | U202412462 | Estudiante de Ingeniería de Software, interesada en el diseño de experiencias de usuario (UX/UI), desarrollo de aplicaciones web, usabilidad y nuevas tecnologías. |

---

## 1.2. Solution Profile
<a id="1-2-solution-profile"></a>

**RoadWatch OS** es una plataforma web orientada a apoyar la gestión y supervisión ambiental en proyectos de infraestructura vial. La solución permite centralizar información relacionada con proyectos, puntos de monitoreo, mediciones ambientales, alertas, incidencias, evidencias, acciones de mitigación y reportes dentro de un mismo entorno digital.

La plataforma está dirigida a dos segmentos principales: empresas constructoras viales y empresas supervisoras o consultoras ambientales. Cada segmento accede a funcionalidades relacionadas con sus responsabilidades dentro del proceso de seguimiento ambiental, manteniendo una experiencia adaptada a sus necesidades.

RoadWatch OS busca facilitar la consulta y trazabilidad de la información ambiental, reducir la dispersión de registros entre diferentes medios y permitir una atención más ordenada de las situaciones que requieran seguimiento. En el MVP, las mediciones pueden registrarse mediante los servicios de la plataforma, mientras que la integración directa con dispositivos de monitoreo ambiental se considera como una posible evolución futura del producto.

#### Propuesta de valor

RoadWatch OS es una plataforma pensada para apoyar la gestión y supervisión ambiental en proyectos viales. La propuesta busca resolver un problema que se repite en este tipo de proyectos: la información suele estar repartida entre hojas de cálculo, fotografías, correos, reportes y diferentes canales de comunicación.

La idea es reunir esa información en un solo lugar para que sea más fácil revisar mediciones, incidencias, evidencias y acciones correctivas, y así tener una visión más clara de lo que está ocurriendo en cada proyecto.

La propuesta considera los dos segmentos objetivo definidos para RoadWatch OS:

| Segmento | Problema principal | Propuesta de valor | Resultado esperado |
| :--- | :--- | :--- | :--- |
| **Empresas Constructoras Viales** | La información ambiental de la obra se encuentra distribuida entre distintos documentos y canales, lo que dificulta hacer seguimiento a mediciones, incidencias y acciones correctivas. | Centralizar mediciones ambientales, puntos de monitoreo, incidencias, evidencias y alertas dentro de una misma plataforma. | Facilitar el seguimiento ambiental de la obra, detectar posibles desviaciones con mayor anticipación y mantener mejor organizada la evidencia. |
| **Empresas Supervisoras y Consultoras Ambientales** | La supervisión de uno o varios proyectos implica recopilar y revisar información proveniente de distintos responsables y fuentes. | Contar con una vista organizada del estado ambiental de los proyectos, sus mediciones, incidencias, evidencias, historial y reportes. | Reducir el tiempo empleado en recopilar información y facilitar la supervisión, elaboración de reportes y procesos de fiscalización. |

#### Alcance del producto

RoadWatch OS se plantea como una plataforma web para apoyar la gestión y supervisión ambiental de proyectos viales.

Para mantener un alcance realista durante el desarrollo del proyecto, el MVP considera las siguientes funcionalidades:

**Incluido en el alcance del MVP:**

- Landing Page responsiva para presentar RoadWatch OS, su propuesta de valor y sus principales características.
- Aplicación web responsiva para la gestión y supervisión ambiental.
- Inicio de sesión y control de acceso según el tipo de usuario.
- Registro y consulta de proyectos viales.
- Registro y consulta de puntos de monitoreo ambiental.
- Registro de mediciones ambientales.
- Visualización del estado ambiental de los proyectos mediante indicadores.
- Identificación de valores que se acerquen o superen los umbrales establecidos.
- Registro y seguimiento de incidencias ambientales.
- Registro de evidencias relacionadas con mediciones o incidencias.
- Seguimiento de acciones correctivas o medidas de mitigación.
- Consulta del historial de mediciones e incidencias.
- Visualización de información consolidada para la supervisión de varios proyectos.
- Generación y consulta de reportes de seguimiento.
- Búsqueda y filtrado de información por proyecto, fecha, tipo de indicador u otros criterios relacionados.

Entre las variables ambientales consideradas se encuentran:

- Calidad del aire, mediante registros de material particulado.
- Nivel de ruido.
- Parámetros básicos relacionados con la calidad del agua.

**Fuera del alcance del MVP:**

- Desarrollo o fabricación de dispositivos físicos de monitoreo ambiental.
- Aplicaciones móviles nativas para Android o iOS.
- Integración directa con sistemas de entidades públicas.
- Uso de inteligencia artificial o modelos predictivos avanzados.
- Automatización completa de procesos oficiales de fiscalización.
- Pasarelas de pago reales.
- Certificación oficial de documentos o firmas digitales.

Como posible evolución del producto, se podrá considerar una integración directa con dispositivos de monitoreo ambiental. Para el MVP, los registros necesarios para validar el funcionamiento de la plataforma podrán ser ingresados mediante los servicios desarrollados por el sistema.

El alcance será evaluado principalmente por la capacidad de organizar la información ambiental, facilitar el seguimiento de incidencias y reducir el tiempo necesario para encontrar y consolidar información de los proyectos.

#### Componente innovador

El componente innovador de RoadWatch OS se encuentra en reunir dentro de una sola plataforma distintas actividades que actualmente pueden realizarse de manera separada usando hojas de cálculo, documentos, fotografías, correos y otros medios.

La propuesta no se centra únicamente en registrar información, sino también en facilitar el seguimiento preventivo de situaciones ambientales y mantener relacionada la información de cada proyecto.

| Componente | ¿En qué consiste? | Valor aportado |
| :--- | :--- | :--- |
| **Monitoreo ambiental centralizado** | Las mediciones, puntos de monitoreo, incidencias y evidencias se organizan dentro de una misma plataforma. | Ayuda a reducir la dispersión de información y facilita su consulta. |
| **Seguimiento preventivo de indicadores** | Los valores ambientales pueden compararse con los umbrales establecidos para identificar situaciones que necesiten atención. | Permite actuar con mayor anticipación frente a posibles desviaciones. |
| **Gestión de incidencias ambientales** | Las observaciones o problemas detectados pueden registrarse y mantenerse asociados al proyecto correspondiente. | Facilita el seguimiento de los pendientes y de las acciones realizadas. |
| **Trazabilidad de información** | Las mediciones, incidencias, evidencias y acciones quedan relacionadas dentro del historial del proyecto. | Permite revisar con mayor facilidad lo ocurrido durante el desarrollo del proyecto. |
| **Supervisión de múltiples proyectos** | Los responsables de supervisión pueden revisar información de distintos proyectos desde un mismo espacio. | Facilita la comparación y seguimiento del estado ambiental de varios proyectos. |
| **Integración de evidencias y reportes** | Fotografías, registros y documentos pueden relacionarse con las actividades ambientales correspondientes. | Facilita la preparación de reportes y la revisión de información durante supervisiones o fiscalizaciones. |

---

### 1.2.1. Antecedentes y Problemática
<a id="1-2-1-antecedentes-y-problematica"></a>

El desarrollo de infraestructura vial constituye un eje prioritario en el crecimiento económico a nivel nacional, representando una porción sustancial de la inversión pública y privada en construcción (Cámara Peruana de la Construcción [CAPECO], 2025). La ejecución de este tipo de obras se encuentra condicionada al cumplimiento de estrictos Instrumentos de Gestión Ambiental (IGA), cuya fiscalización sectorial es conducida por la Dirección General de Asuntos Ambientales del Ministerio de Transportes y Comunicaciones (MTC) y por organismos de evaluación y fiscalización ambiental (Organismo de Evaluación y Fiscalización Ambiental [OEFA], 2025). Paralelamente, la elaboración y seguimiento de los planes ambientales requiere la participación de consultoras debidamente acreditadas en el Registro Nacional de Consultoras Ambientales (RNCA), el cual abarca a más de 1,200 entidades autorizadas (Servicio Nacional de Certificación Ambiental para las Inversiones Sostenibles [SENACE], 2024).

A pesar del marco regulatorio vigente, los procedimientos de monitoreo ambiental en obra continúan sufriendo de un bajo nivel de adopción tecnológica. En la mayoría de frentes de trabajo, la toma de datos depende de muestreos periódicos cuyos resultados se compilan manualmente en hojas de cálculo o reportes extemporáneos. Esta desconexión operativa dificulta la adopción de medidas correctivas inmediatas, eleva el riesgo de multas para el contratista y exige que las entidades supervisoras destinen recursos significativos a la verificación presencial de los registros presentados.

#### ¿QUÉ?

RoadWatch OS busca resolver la dispersión de información ambiental en proyectos viales, centralizando en una sola plataforma los datos relacionados con proyectos, puntos de monitoreo, mediciones, alertas, incidencias, evidencias, acciones de mitigación y reportes.

#### ¿CUÁNDO?

La necesidad de contar con una herramienta de este tipo se presenta durante la ejecución y supervisión de proyectos viales, especialmente cuando se requiere revisar periódicamente mediciones ambientales, identificar posibles desviaciones y dar seguimiento a incidencias o acciones correctivas.

#### ¿DÓNDE?

La solución está orientada a empresas constructoras viales y empresas supervisoras o consultoras ambientales que participan en proyectos de infraestructura vial. La plataforma puede ser utilizada desde oficinas técnicas o desde campo mediante una aplicación web responsiva.

#### ¿QUIÉN?

Los principales usuarios de RoadWatch OS son las empresas constructoras viales, representadas por responsables de gestión ambiental, jefes de proyecto e ingenieros de obra, y las empresas supervisoras o consultoras ambientales encargadas de revisar el cumplimiento y seguimiento ambiental de los proyectos.

#### ¿POR QUÉ?

La información ambiental de un proyecto suele encontrarse distribuida entre hojas de cálculo, documentos, fotografías, correos y otros medios. Esta dispersión dificulta la consulta de antecedentes, el seguimiento de incidencias y la elaboración de reportes. RoadWatch OS busca facilitar la organización de esta información y mejorar la trazabilidad de las acciones realizadas durante el proyecto.

#### ¿CÓMO?

RoadWatch OS funciona mediante una aplicación web integrada con una API REST. Los usuarios pueden registrar y consultar proyectos, puntos de monitoreo y mediciones ambientales. El sistema permite comparar los valores registrados con los umbrales configurados, generar alertas, registrar incidencias, asociar evidencias, dar seguimiento a acciones de mitigación y consultar información consolidada para la supervisión y elaboración de reportes.

En el MVP, las mediciones pueden ser registradas mediante los servicios de la plataforma. La integración directa con dispositivos físicos de monitoreo ambiental se considera una posible evolución futura.

#### ¿CUÁNTO?

El modelo de negocio considera un esquema de suscripción para las organizaciones que utilicen RoadWatch OS. Se podrán definir distintos niveles de servicio de acuerdo con las funcionalidades, cantidad de usuarios, proyectos o capacidades disponibles para cada organización.

Dentro del MVP no se contempla la implementación de una pasarela de pago real. La gestión comercial de los planes podrá representarse mediante la configuración de suscripciones y límites de uso dentro de la plataforma.

---

### 1.2.2. Lean UX Process
<a id="1-2-2-lean-ux-process"></a>

Actualmente, la gestión y supervisión ambiental en proyectos de infraestructura vial puede involucrar el uso de hojas de cálculo, documentos, fotografías, correos y otros medios separados para registrar y consultar información. Esta forma de trabajo dificulta mantener una visión consolidada de las mediciones, incidencias, evidencias y acciones realizadas durante el desarrollo de un proyecto.

RoadWatch OS busca atender esta problemática mediante una plataforma web que centralice la información ambiental y facilite su seguimiento. La solución permitirá registrar mediciones, identificar valores cercanos o superiores a los umbrales establecidos, gestionar incidencias, asociar evidencias, realizar seguimiento a acciones de mitigación y consultar reportes relacionados con el estado ambiental de los proyectos.

El producto está orientado principalmente a dos segmentos: las empresas constructoras viales, responsables de gestionar y atender las situaciones ambientales que se presentan durante la ejecución de las obras, y las empresas supervisoras o consultoras ambientales, encargadas de revisar la información, realizar seguimiento y elaborar reportes sobre los proyectos bajo su supervisión.

Se considerará que la propuesta genera valor cuando los usuarios puedan encontrar y revisar la información ambiental con mayor facilidad, identificar situaciones que requieran atención, mantener un historial organizado de las acciones realizadas y reducir el tiempo necesario para consolidar información para la supervisión y elaboración de reportes.

---

#### 1.2.2.1. Lean UX Problem Statements
<a id="1-2-2-1-lean-ux-problem-statements"></a>

Actualmente, la gestión y supervisión ambiental en proyectos de infraestructura vial presenta dificultades relacionadas con la dispersión de información entre distintos medios, como hojas de cálculo, documentos, fotografías, correos y reportes independientes. Esta situación dificulta mantener una visión actualizada y organizada de las mediciones ambientales, incidencias, evidencias y acciones realizadas durante la ejecución de un proyecto.

Este problema afecta principalmente a las empresas constructoras viales y a las empresas supervisoras o consultoras ambientales. En el caso de las constructoras, los responsables de gestión ambiental necesitan registrar y revisar información de manera oportuna para identificar situaciones que requieran atención y realizar seguimiento a las acciones de mitigación. Por otro lado, las empresas supervisoras o consultoras requieren acceder a información consolidada de uno o varios proyectos para revisar antecedentes, verificar el seguimiento realizado y preparar reportes.

La falta de centralización de la información puede generar demoras en la consulta de registros, dificultades para relacionar mediciones con incidencias y evidencias, pérdida de tiempo durante la consolidación de información y menor trazabilidad de las acciones realizadas.

RoadWatch OS busca abordar esta problemática mediante una plataforma web que centraliza la información ambiental de los proyectos viales. La solución permite registrar proyectos, puntos de monitoreo y mediciones ambientales, comparar los valores con los umbrales establecidos, gestionar alertas e incidencias, asociar evidencias y acciones de mitigación, y consultar información histórica y reportes.

El objetivo es facilitar el seguimiento ambiental de los proyectos y permitir que los usuarios encuentren, relacionen y consulten la información necesaria de manera más ordenada, reduciendo la dependencia de múltiples fuentes y herramientas separadas.

---

#### 1.2.2.2. Lean UX Assumptions
<a id="1-2-2-2-lean-ux-assumptions"></a>

##### A. Business Assumptions

1. **Creemos que** las empresas constructoras viales y las empresas supervisoras o consultoras ambientales necesitan una herramienta que les permita centralizar y organizar la información ambiental de sus proyectos.

2. **Creemos que** RoadWatch OS puede generar valor al facilitar el registro y seguimiento de mediciones, incidencias, evidencias, acciones de mitigación y reportes dentro de una misma plataforma.

3. **Creemos que** un modelo de suscripción permitirá adaptar el acceso a la plataforma de acuerdo con las necesidades y capacidades de cada organización.

4. **Creemos que** la diferenciación de RoadWatch OS estará en integrar dentro de una sola solución funciones que actualmente pueden encontrarse distribuidas entre hojas de cálculo, documentos, correos, fotografías y otros medios.

##### B. Business Outcome Assumptions

1. **Creemos que** aumentará la adopción de RoadWatch OS si los usuarios perciben una reducción en el tiempo necesario para encontrar y consolidar información ambiental.

2. **Creemos que** la plataforma generará mayor recurrencia de uso si permite mantener organizados los proyectos, mediciones, incidencias, evidencias y reportes.

3. **Creemos que** las organizaciones estarán dispuestas a mantener una suscripción si las funcionalidades disponibles facilitan sus procesos de seguimiento y supervisión ambiental.

4. **Creemos que** el valor del producto podrá medirse mediante la frecuencia de uso, el número de proyectos gestionados y la reducción del tiempo empleado en consolidar información.

##### C. User Assumptions

1. **Creemos que** los usuarios del segmento de empresas constructoras viales necesitan registrar y consultar información ambiental de manera rápida durante la ejecución de los proyectos.

2. **Creemos que** los usuarios del segmento de empresas supervisoras o consultoras ambientales necesitan revisar información consolidada de uno o varios proyectos para realizar seguimiento y elaborar reportes.

3. **Creemos que** ambos segmentos necesitan acceder a información histórica relacionada con mediciones, incidencias, evidencias y acciones realizadas.

##### D. User Outcome & Benefit Assumptions

1. **Creemos que** los responsables ambientales de las empresas constructoras podrán identificar con mayor rapidez las situaciones que requieran atención al contar con mediciones, alertas e incidencias organizadas dentro de la plataforma.

2. **Creemos que** los usuarios podrán reducir el tiempo empleado en buscar información al contar con evidencias, historial y acciones de mitigación asociadas directamente a cada proyecto o incidencia.

3. **Creemos que** las empresas supervisoras o consultoras ambientales podrán revisar con mayor facilidad el estado de varios proyectos mediante información consolidada y reportes.

4. **Creemos que** ambos segmentos obtendrán una mejor trazabilidad de las actividades realizadas al mantener relacionados los registros ambientales dentro de un mismo sistema.

##### E. Feature Assumptions

1. **Creemos que** el registro de proyectos y puntos de monitoreo permitirá organizar correctamente la información ambiental de cada obra.

2. **Creemos que** el registro de mediciones y su comparación con umbrales configurados permitirá identificar posibles desviaciones ambientales.

3. **Creemos que** un módulo de alertas e incidencias permitirá dar seguimiento a situaciones que necesiten atención.

4. **Creemos que** el registro de evidencias y acciones de mitigación permitirá mantener información asociada al tratamiento de cada incidencia.

5. **Creemos que** la generación y consulta de reportes facilitará la supervisión y consolidación de información ambiental.

6. **Creemos que** un sistema de roles y permisos permitirá controlar el acceso a las funcionalidades de acuerdo con las responsabilidades de cada usuario.
   
---

#### 1.2.2.3. Lean UX Hypothesis Statements
<a id="1-2-2-3-lean-ux-hypothesis-statements"></a>

##### Hipótesis 1: Centralización de información ambiental

- **Creemos que lograremos:** una reducción en el tiempo empleado para localizar y consolidar información ambiental de los proyectos.
- **Si:** los responsables ambientales de empresas constructoras y supervisoras utilizan RoadWatch OS de manera frecuente.
- **Alcanzar:** una mejor organización y acceso a la información relacionada con proyectos, mediciones, incidencias, evidencias y reportes.
- **Mediante:** una plataforma web que centraliza la información ambiental dentro de un mismo entorno.

##### Hipótesis 2: Seguimiento preventivo de mediciones

- **Creemos que lograremos:** una identificación más oportuna de situaciones que requieran atención ambiental.
- **Si:** los responsables de gestión ambiental registran y revisan periódicamente las mediciones de sus proyectos.
- **Alcanzar:** la capacidad de detectar valores cercanos o superiores a los umbrales establecidos.
- **Mediante:** un sistema que compara las mediciones ambientales con los límites configurados y genera alertas cuando corresponde.

##### Hipótesis 3: Gestión de incidencias y acciones de mitigación

- **Creemos que lograremos:** una mejora en el seguimiento de las incidencias ambientales y de las acciones realizadas para atenderlas.
- **Si:** los responsables ambientales de las empresas constructoras registran y actualizan las incidencias dentro de la plataforma.
- **Alcanzar:** una mejor trazabilidad de las situaciones detectadas, las acciones de mitigación realizadas y las evidencias asociadas.
- **Mediante:** un módulo de gestión de incidencias, acciones de mitigación y evidencias.

##### Hipótesis 4: Supervisión de múltiples proyectos

- **Creemos que lograremos:** una reducción en el tiempo necesario para revisar el estado ambiental de varios proyectos.
- **Si:** los usuarios de empresas supervisoras o consultoras ambientales utilizan la plataforma para consultar la información consolidada de los proyectos bajo su responsabilidad.
- **Alcanzar:** una visión más clara del estado de las mediciones, incidencias, evidencias y reportes de cada proyecto.
- **Mediante:** un panel de supervisión que permite consultar y comparar información de múltiples proyectos.

##### Hipótesis 5: Generación y consulta de reportes

- **Creemos que lograremos:** una mayor eficiencia en la preparación de información para procesos de seguimiento y supervisión ambiental.
- **Si:** los usuarios utilizan RoadWatch OS para registrar y mantener actualizada la información de sus proyectos.
- **Alcanzar:** la posibilidad de consultar información histórica y consolidada de manera más rápida.
- **Mediante:** funcionalidades de generación, consulta y descarga de reportes ambientales.

##### Hipótesis 6: Modelo de suscripción

- **Creemos que lograremos:** una mayor sostenibilidad del modelo de negocio de RoadWatch OS.
- **Si:** las organizaciones perciben valor en las funcionalidades ofrecidas por la plataforma.
- **Alcanzar:** un uso recurrente de RoadWatch OS de acuerdo con las necesidades de cada organización.
- **Mediante:** distintos niveles de suscripción asociados a funcionalidades y capacidades de uso de la plataforma.
  
---

#### 1.2.2.4. Lean UX Canvas
<a id="1-2-2-4-lean-ux-canvas"></a>

| **Business Problem** | **Solutions (Features)** | **Business Outcomes** |
| :--- | :--- | :--- |
| Las empresas constructoras viales y las empresas supervisoras o consultoras ambientales suelen gestionar información ambiental mediante hojas de cálculo, documentos, fotografías, correos y otros medios separados. Esta dispersión dificulta el seguimiento de mediciones, incidencias, evidencias y acciones realizadas durante el proyecto. **RoadWatch OS** busca centralizar esta información en una sola plataforma para facilitar su consulta, seguimiento y consolidación. | **1. Gestión de proyectos y puntos de monitoreo:** permite organizar la información ambiental según cada obra y ubicación.<br>**2. Registro y seguimiento de mediciones:** permite ingresar valores ambientales y compararlos con los umbrales definidos.<br>**3. Gestión de alertas e incidencias:** permite identificar situaciones que requieren atención y realizar su seguimiento.<br>**4. Registro de evidencias y acciones de mitigación:** permite asociar fotografías, documentos y acciones realizadas a cada incidencia.<br>**5. Supervisión de múltiples proyectos:** permite revisar información consolidada de varios proyectos.<br>**6. Generación y consulta de reportes:** facilita la consolidación y revisión de información ambiental.<br>**7. Gestión de usuarios, roles y suscripciones:** permite controlar accesos y adaptar las capacidades disponibles según la organización. | - Reducción del tiempo necesario para localizar y consolidar información ambiental.<br>- Mayor frecuencia de uso de la plataforma para actividades de seguimiento y supervisión.<br>- Incremento en la cantidad de proyectos gestionados dentro de RoadWatch OS.<br>- Mejora en la organización y trazabilidad de mediciones, incidencias, evidencias y acciones realizadas.<br>- Mayor recurrencia de organizaciones que mantengan el uso de la plataforma mediante un modelo de suscripción. |

| **Users** | **User Outcomes & Benefits** |
| :--- | :--- |
| **Segmento 1: Empresas Constructoras Viales:** responsables de gestión ambiental, jefes de proyecto e ingenieros vinculados al seguimiento ambiental de la obra.<br><br>**Segmento 2: Empresas Supervisoras y Consultoras Ambientales:** profesionales responsables de revisar, consolidar y supervisar la información ambiental de uno o varios proyectos. | **Empresas Constructoras Viales:** pueden registrar y consultar mediciones, revisar alertas, gestionar incidencias, asociar evidencias y realizar seguimiento a acciones de mitigación dentro de una misma plataforma.<br><br>**Empresas Supervisoras y Consultoras Ambientales:** pueden revisar el estado ambiental de varios proyectos, consultar mediciones, incidencias y evidencias, y acceder a información consolidada para facilitar la elaboración de reportes y actividades de supervisión. |

| **Hypotheses** | **What's the most important thing we need to learn first?** | **What's the least amount of work we need to do to learn the next most important thing?** |
| :--- | :--- | :--- |
| **H1:** Creemos que la centralización de la información reducirá el tiempo necesario para localizar y revisar datos ambientales.<br>**H2:** Creemos que la comparación de mediciones con umbrales permitirá identificar situaciones que requieran atención con mayor anticipación.<br>**H3:** Creemos que la gestión de incidencias, acciones de mitigación y evidencias mejorará la trazabilidad del seguimiento ambiental.<br>**H4:** Creemos que la visualización consolidada de varios proyectos facilitará el trabajo de supervisión.<br>**H5:** Creemos que la generación y consulta de reportes reducirá el tiempo necesario para consolidar información.<br>**H6:** Creemos que las organizaciones mantendrán una suscripción si perciben valor en las funcionalidades ofrecidas por RoadWatch OS. | - ¿Los usuarios consideran que la dispersión de información ambiental es un problema relevante en su trabajo?<br>- ¿Las empresas constructoras consideran útil recibir alertas basadas en mediciones y umbrales configurados?<br>- ¿Las empresas supervisoras necesitan revisar información consolidada de varios proyectos?<br>- ¿Los usuarios consideran útil relacionar incidencias, evidencias y acciones de mitigación dentro de una misma plataforma?<br>- ¿Las organizaciones estarían dispuestas a utilizar un modelo de suscripción para acceder a RoadWatch OS? | - Realizar entrevistas con representantes de los dos segmentos objetivo para validar sus principales problemas y necesidades.<br>- Utilizar los wireframes y mock-ups de RoadWatch OS para validar la comprensión de los flujos principales.<br>- Probar el prototipo navegable con usuarios representativos de ambos segmentos.<br>- Evaluar tareas como registrar una medición, revisar una alerta, gestionar una incidencia, adjuntar evidencia y consultar un reporte.<br>- Recopilar comentarios sobre la utilidad percibida de los distintos niveles de servicio o suscripción. |

---

## 1.3. Segmentos Objetivo
<a id="1-3-segmentos-objetivos"></a>

### Segmento 1: Empresas Constructoras Viales

Este segmento está conformado por empresas encargadas de la ejecución de proyectos de infraestructura vial, representadas principalmente por responsables de gestión ambiental, jefes de proyecto, ingenieros residentes y otros profesionales relacionados con el seguimiento ambiental de la obra.

Estos usuarios utilizarán **RoadWatch OS** para registrar y consultar proyectos, puntos de monitoreo y mediciones ambientales, revisar alertas, gestionar incidencias, registrar evidencias y dar seguimiento a acciones de mitigación. La plataforma busca facilitar la organización de la información ambiental y permitir que los responsables identifiquen con mayor rapidez las situaciones que requieren atención.

El principal beneficio para este segmento es contar con un entorno centralizado que permita mantener relacionadas las mediciones, incidencias, evidencias y acciones realizadas durante la ejecución del proyecto, reduciendo la dispersión de información entre diferentes documentos y herramientas.

### Segmento 2: Empresas Supervisoras y Consultoras Ambientales

Este segmento está conformado por empresas y profesionales responsables de supervisar, revisar y analizar la información ambiental generada durante el desarrollo de proyectos viales.

Los usuarios de este segmento utilizarán **RoadWatch OS** para consultar el estado de los proyectos bajo su supervisión, revisar mediciones ambientales, incidencias, evidencias e historiales, así como acceder a información consolidada y reportes que faciliten sus actividades de seguimiento.

El principal beneficio para este segmento es disponer de una visión organizada de uno o varios proyectos, facilitando la revisión de antecedentes, la identificación de situaciones relevantes y la consolidación de información necesaria para los procesos de supervisión y elaboración de reportes.

---

# Requirements Elicitation & Analysis
<a id="2-requirements-elicitation-analysis"></a>

## 2.1 Competidores
<a id="2-1-competidores"></a>
### 2.1.1 Análisis Competitivo
<a id="2-1-1-analisis-competitivo"></a>

| **¿Por qué llevar a cabo este análisis?** | El objetivo de este análisis competitivo es identificar las principales características, fortalezas, debilidades y enfoques de soluciones existentes relacionadas con el monitoreo ambiental y la gestión de proyectos de construcción. El contraste entre RoadWatch OS, SiteHive, Sonitus Systems y Autodesk Construction Cloud permite identificar oportunidades de diferenciación para la propuesta de VíaNexo, especialmente en la centralización de información ambiental, seguimiento de incidencias, trazabilidad de evidencias y apoyo a la gestión preventiva en proyectos viales. |
| :--- | :--- |

| **Categoría** | **RoadWatch OS (VíaNexo)** | **SiteHive** | **Sonitus Systems** | **Autodesk Construction Cloud** |
| :--- | :---: | :---: | :---: | :---: |
| **Cabecera** | <img src="assets/images/chapter2/RoadWatchLogo.jpeg" alt="Logo de RoadWatch OS" width="110"/> | <img src="assets/images/chapter2/SiteHiveLogo.png" alt="Logo de SiteHive" width="110"/> | <img src="assets/images/chapter2/SonitusSystemsLogo.png" alt="Logo de Sonitus Systems" width="110"/> | <img src="assets/images/chapter2/AutodeskCCLogo.png" alt="Logo de Autodesk Construction Cloud" width="110"/> |
| **Perfil** | | | | |
| **Overview** | Plataforma web orientada a la gestión y supervisión ambiental de proyectos viales. Centraliza proyectos, puntos de monitoreo, mediciones, alertas, incidencias, acciones de mitigación, evidencias y reportes dentro de un mismo entorno digital. | Plataforma SaaS australiana especializada en monitoreo ambiental continuo de ruido, polvo y vibración para proyectos de construcción y minería. | Proveedor especializado en instrumentación y monitoreo ambiental mediante dispositivos para ruido y calidad del aire integrados con servicios en la nube. | Suite integral basada en la nube para la gestión de proyectos de construcción, coordinación, documentación y seguimiento de incidencias. |
| **Ventaja competitiva (valor al cliente)** | Integración de la gestión ambiental con el seguimiento de incidencias, acciones de mitigación, evidencias e información histórica dentro de una plataforma orientada específicamente a proyectos viales. La propuesta busca reducir la dispersión de información y facilitar una gestión preventiva y trazable. | Automatización del procesamiento de datos ambientales de campo y capacidades especializadas para monitoreo continuo en proyectos de construcción. | Especialización en equipos de medición ambiental y monitoreo remoto mediante instrumentación orientada al control de ruido y calidad ambiental. | Integración con herramientas de diseño y construcción del ecosistema Autodesk, permitiendo centralizar documentación, coordinación y seguimiento de proyectos. |
| **Perfil de Marketing** | | | | |
| **Mercado objetivo** | Empresas constructoras viales y empresas supervisoras o consultoras ambientales que gestionan uno o varios proyectos de infraestructura. | Empresas constructoras, contratistas y proyectos de infraestructura que requieren monitoreo ambiental continuo. | Consultoras ambientales, autoridades, empresas industriales y organizaciones que requieren monitoreo de ruido y calidad ambiental. | Empresas constructoras, consorcios de ingeniería, estudios de diseño y organizaciones responsables de gestionar proyectos de construcción. |
| **Estrategias de marketing** | Prospección B2B dirigida a empresas constructoras viales y consultoras ambientales, presencia en espacios especializados del sector y presentación de la propuesta mediante casos de uso relacionados con gestión ambiental, trazabilidad y seguimiento de incidencias. | Marketing de contenidos, presentación de casos de uso en proyectos de construcción y promoción de capacidades de monitoreo ambiental continuo. | Venta consultiva especializada, presencia en mercados de instrumentación ambiental y comercialización mediante distribuidores y canales especializados. | Marketing B2B global, ecosistema de socios comerciales, certificaciones profesionales y promoción integrada dentro del ecosistema Autodesk. |
| **Perfil de Producto** | | | | |
| **Productos & Servicios** | Plataforma web para la gestión y supervisión ambiental de proyectos viales, con registro y consulta de proyectos, puntos de monitoreo, mediciones, alertas, incidencias, acciones de mitigación, evidencias, historial y reportes. | Dispositivos de monitoreo ambiental y plataforma en la nube con visualización de datos, alertas y reportes. | Equipos de medición ambiental integrados con una plataforma web para consulta y análisis de información histórica. | Módulos de gestión de construcción, documentación, coordinación, incidencias, planos y colaboración entre participantes del proyecto. |
| **Precios & Costos** | Modelo de suscripción orientado a organizaciones, con diferentes niveles de servicio según funcionalidades, cantidad de usuarios, proyectos y capacidades disponibles. La implementación de pasarelas de pago reales no forma parte del MVP. | Modelo de contratación asociado al uso de dispositivos y servicios de monitoreo. | Comercialización de dispositivos de medición junto con servicios de acceso a plataforma y gestión de información. | Licenciamiento mediante suscripciones para usuarios y organizaciones, con diferentes planes según productos y capacidades contratadas. |
| **Canales de distribución** | Aplicación web responsiva accesible mediante navegador para empresas constructoras viales y empresas supervisoras o consultoras ambientales. | Plataforma web y servicios asociados al despliegue de dispositivos de monitoreo. | Plataforma web y distribución de equipos especializados mediante canales comerciales y representantes. | Plataforma web, aplicaciones móviles y herramientas integradas dentro del ecosistema Autodesk. |
| **Análisis SWOT** | *Las fortalezas permiten aprovechar oportunidades y sustentar la propuesta de diferenciación.* | | | |
| **Fortalezas** | Especialización en gestión ambiental para proyectos viales e integración de mediciones, alertas, incidencias, acciones de mitigación, evidencias e información histórica dentro de una misma plataforma. | Especialización en monitoreo ambiental continuo y experiencia en proyectos de construcción e infraestructura. | Experiencia en instrumentación ambiental y disponibilidad de equipos especializados de monitoreo. | Amplio ecosistema de herramientas para proyectos de construcción y elevada integración entre sus productos. |
| **Debilidades** | Producto en etapa inicial de desarrollo, con menor presencia en el mercado y menor madurez tecnológica que competidores internacionales consolidados. El alcance inicial contempla un conjunto limitado de variables y funcionalidades de monitoreo ambiental. | Su enfoque se concentra principalmente en monitoreo ambiental y puede requerir soluciones adicionales para gestionar procesos operativos posteriores a una incidencia. | Su propuesta se centra principalmente en instrumentación y monitoreo, por lo que la gestión operativa de incidencias puede depender de herramientas complementarias. | Su alcance es general para gestión de construcción y no está específicamente orientado a procesos de supervisión ambiental vial. |
| **Oportunidades** | Creciente necesidad de digitalizar los procesos de gestión y supervisión ambiental, centralizar información proveniente de diferentes proyectos y mejorar la trazabilidad de mediciones, incidencias y evidencias. | Expansión de proyectos que requieren monitoreo ambiental continuo y mayor trazabilidad de información. | Crecimiento de la demanda de instrumentación ambiental conectada y monitoreo remoto. | Incorporación progresiva de capacidades adicionales mediante integraciones y extensiones del ecosistema de construcción. |
| **Amenazas** | Presencia de proveedores internacionales consolidados, incorporación progresiva de funcionalidades ambientales en plataformas generales de construcción y posibilidad de que las empresas clientes mantengan procesos manuales existentes debido a costos o complejidad de adopción. | Entrada de nuevos proveedores especializados y plataformas con capacidades similares de monitoreo ambiental. | Competencia de fabricantes de equipos de menor costo y nuevas soluciones de monitoreo conectado. | Aparición de plataformas especializadas que resuelvan necesidades específicas de industrias o dominios que una solución generalista no cubre en profundidad. |

#### Síntesis del análisis competitivo

El análisis evidencia que las soluciones evaluadas cubren diferentes partes del problema. SiteHive y Sonitus Systems presentan capacidades especializadas de monitoreo ambiental mediante dispositivos y plataformas digitales, mientras que Autodesk Construction Cloud ofrece un entorno más amplio para la gestión de proyectos de construcción.

La oportunidad identificada para RoadWatch OS se encuentra en combinar el seguimiento de variables ambientales con la gestión operativa de incidencias, acciones de mitigación, responsables y evidencias dentro de un entorno orientado al contexto de proyectos viales.

Esta diferenciación no se plantea únicamente desde el registro o consulta de mediciones, sino desde la posibilidad de relacionar la información ambiental con las acciones posteriores que realizan las empresas constructoras y las empresas supervisoras o consultoras ambientales.

### 2.1.2. Estrategias y tácticas frente a competidores
<a id="2-1-2-estrategias-y-tacticas-frente-a-competidores"></a>

A partir del análisis competitivo realizado, VíaNexo identifica oportunidades para diferenciar RoadWatch OS frente a plataformas especializadas en monitoreo ambiental, proveedores de instrumentación y soluciones generales de gestión de proyectos de construcción.

Las estrategias y tácticas propuestas buscan aprovechar las fortalezas identificadas en el análisis competitivo, responder a las principales debilidades observadas en las alternativas evaluadas y fortalecer la propuesta de valor de RoadWatch OS dentro del contexto de proyectos viales.

#### Estrategia 1: Integración de la gestión ambiental y el seguimiento operativo

Mientras algunas soluciones se concentran principalmente en la captura o visualización de mediciones ambientales, RoadWatch OS busca integrar en un mismo entorno la información necesaria para realizar seguimiento a los proyectos, mediciones, alertas, incidencias, acciones de mitigación y evidencias.

**Tácticas:**

- Centralizar la información ambiental de los diferentes proyectos y frentes de obra.
- Relacionar las mediciones con alertas, incidencias, responsables y acciones de mitigación.
- Asociar evidencias y documentos a las situaciones ambientales correspondientes.
- Mantener un historial que permita revisar las acciones realizadas durante el desarrollo del proyecto.

#### Estrategia 2: Orientación preventiva frente a posibles desviaciones ambientales

RoadWatch OS busca diferenciarse de los procesos principalmente reactivos mediante la identificación oportuna de mediciones que se acerquen o superen los umbrales ambientales configurados.

**Tácticas:**

- Comparar las mediciones registradas con los umbrales establecidos.
- Mostrar alertas cuando se identifiquen valores que requieran atención.
- Facilitar la consulta de información histórica para reconocer cambios en los indicadores ambientales.
- Permitir que los responsables identifiquen rápidamente los proyectos, frentes o puntos de monitoreo que necesitan revisión.

#### Estrategia 3: Centralización y trazabilidad de evidencias ambientales

Frente al uso fragmentado de hojas de cálculo, correos electrónicos, fotografías, documentos y aplicaciones de mensajería, RoadWatch OS busca mantener relacionada la información ambiental dentro de una misma plataforma.

**Tácticas:**

- Asociar fotografías, documentos y otros registros a las mediciones o incidencias correspondientes.
- Mantener un historial de evidencias y acciones realizadas.
- Facilitar la búsqueda y consulta de información por proyecto, fecha, punto de monitoreo u otros criterios.
- Reducir el tiempo necesario para localizar y consolidar información durante supervisiones, auditorías o fiscalizaciones.

#### Estrategia 4: Modelo de suscripción adaptable a las organizaciones

RoadWatch OS plantea un modelo de suscripción que permita a las organizaciones acceder a diferentes capacidades de la plataforma según sus necesidades y características operativas.

**Tácticas:**

- Definir diferentes niveles de servicio según las funcionalidades disponibles.
- Considerar límites relacionados con cantidad de usuarios, proyectos u otras capacidades de uso.
- Permitir que las organizaciones puedan cambiar de plan según sus necesidades.
- Facilitar una adopción progresiva de la plataforma sin requerir una inversión inicial en infraestructura tecnológica especializada.

#### Estrategia 5: Especialización en gestión ambiental de proyectos viales

A diferencia de soluciones generales para la gestión de proyectos de construcción, RoadWatch OS se orienta específicamente a las actividades de gestión y supervisión ambiental asociadas a proyectos de infraestructura vial.

**Tácticas:**

- Utilizar conceptos y flujos propios del dominio de gestión ambiental vial.
- Organizar la información por proyecto, tramo, frente de obra y punto de monitoreo.
- Priorizar funcionalidades relacionadas con mediciones ambientales, alertas, incidencias, acciones de mitigación, evidencias y reportes.
- Diseñar la experiencia de uso considerando las necesidades diferenciadas de empresas constructoras viales y empresas supervisoras o consultoras ambientales.

#### Estrategia 6: Supervisión consolidada de múltiples proyectos

RoadWatch OS busca ofrecer una visión organizada de varios proyectos para apoyar a las empresas supervisoras o consultoras ambientales que gestionan información proveniente de distintas obras y responsables.

**Tácticas:**

- Presentar información consolidada del estado ambiental de varios proyectos.
- Facilitar la identificación de proyectos con incidencias abiertas o situaciones que requieran atención.
- Permitir la consulta de indicadores, evidencias e historial de cada proyecto.
- Facilitar la generación y consulta de reportes para actividades de seguimiento y supervisión.
  
## 2.2 Entrevistas
<a id="2-2-entrevistas"></a>

### 2.2.1 Diseño de Entrevistas
<a id="2-2-1-diseno-de-entrevistas"></a>

Las entrevistas tienen como objetivo conocer cómo los representantes de los dos segmentos realizan actualmente las actividades relacionadas con la gestión y supervisión ambiental de proyectos viales, así como identificar sus principales necesidades, objetivos, dificultades, herramientas utilizadas y hábitos de trabajo.

Las preguntas fueron planteadas de manera abierta para evitar condicionar las respuestas de los participantes. Además de conocer el proceso actual, se busca recopilar información que permita identificar características comunes de cada segmento y construir posteriormente los User Personas.

Durante las entrevistas se recopilará información demográfica y profesional, experiencia, responsabilidades, herramientas de trabajo, dispositivos utilizados, canales de comunicación, objetivos, frustraciones y expectativas relacionadas con la gestión ambiental.

#### Preguntas de presentación

Estas preguntas se realizarán a los participantes de ambos segmentos:

1. ¿Cuál es su nombre y edad?

2. ¿En qué distrito reside actualmente?

3. ¿Cuál es su cargo y en qué tipo de empresa trabaja?

4. ¿Cuántos años de experiencia tiene en proyectos de infraestructura, construcción o gestión ambiental?

5. ¿Cuáles son sus principales responsabilidades dentro de su trabajo?

---

#### Segmento 1: Empresas Constructoras Viales

##### Preguntas principales

1. ¿Cómo es un día habitual de trabajo para usted cuando tiene que realizar seguimiento ambiental a uno o varios frentes de obra?

2. ¿Cómo realizan actualmente el registro de las mediciones ambientales, como ruido, material particulado o calidad del agua?

3. ¿Cómo organizan la información ambiental correspondiente a los diferentes proyectos, tramos o frentes de obra?

4. ¿Qué herramientas utilizan para registrar o consultar mediciones, fotografías, documentos y reportes ambientales?

5. Cuando se detecta una medición fuera de lo esperado o una posible desviación ambiental, ¿qué sucede desde que se identifica hasta que se atiende?

6. ¿Cómo asignan actualmente las acciones correctivas o medidas de mitigación a los responsables?

7. ¿Cómo realizan el seguimiento para saber si una incidencia o acción pendiente ya fue atendida?

8. ¿Qué dificultades encuentra al trabajar con varios proyectos o frentes de obra al mismo tiempo?

9. ¿Qué problemas suelen presentarse al momento de buscar mediciones, fotografías, documentos o evidencias anteriores?

10. ¿Cómo preparan actualmente la información cuando reciben una solicitud de la supervisión, una auditoría o una fiscalización?

11. ¿Qué parte del proceso de gestión ambiental considera que le consume más tiempo?

12. ¿Cuál es la situación que más le preocupa durante el seguimiento ambiental de una obra?

13. Si pudiera mejorar una sola parte del proceso actual, ¿cuál sería y por qué?

##### Preguntas complementarias

14. ¿Utiliza principalmente computadora, celular, tablet u otro dispositivo durante sus actividades de trabajo?

15. ¿Qué aplicaciones o canales utiliza con mayor frecuencia para comunicarse con el personal de campo y otros responsables?

16. ¿Qué tipo de información necesita revisar con mayor frecuencia durante el día?

17. ¿Prefiere revisar información mediante tablas, gráficos, mapas, reportes u otro formato? ¿Por qué?

18. ¿Qué tan cómodo se siente utilizando nuevas aplicaciones o herramientas digitales en su trabajo?

19. Cuando necesita tomar una decisión rápidamente, ¿qué información considera indispensable tener disponible?

20. ¿Qué características debería tener una herramienta para que realmente le resulte útil en su trabajo diario?

21. ¿Hay alguna aplicación, plataforma o herramienta digital que utilice frecuentemente y que considere especialmente sencilla o útil? ¿Qué le gusta de ella?

---

#### Segmento 2: Empresas Supervisoras y Consultoras Ambientales

##### Preguntas principales

1. ¿Cómo es un día habitual de trabajo cuando tiene que supervisar o revisar la información ambiental de uno o varios proyectos?

2. ¿Cómo recibe actualmente las mediciones ambientales provenientes de los proyectos que supervisa?

3. ¿Qué herramientas utiliza para organizar mediciones, documentos, fotografías, observaciones y reportes?

4. Cuando supervisa varios proyectos al mismo tiempo, ¿cómo identifica cuáles requieren mayor atención?

5. ¿Qué sucede cuando encuentra una medición, observación o situación que podría representar un problema ambiental?

6. ¿Cómo comunica actualmente una observación a la empresa responsable del proyecto?

7. ¿Cómo realiza el seguimiento para comprobar que una observación o incidencia haya sido atendida?

8. ¿Qué dificultades encuentra al revisar información proveniente de diferentes empresas, proyectos o responsables?

9. ¿Qué problemas suelen presentarse cuando necesita consultar información histórica de un proyecto?

10. ¿Cómo prepara actualmente la información necesaria para elaborar reportes, auditorías o procesos de fiscalización?

11. ¿Qué parte del proceso de supervisión ambiental considera que requiere mayor trabajo manual?

12. ¿Qué información considera más importante para conocer rápidamente el estado ambiental de un proyecto?

13. Si pudiera cambiar una sola parte del proceso actual de supervisión, ¿cuál sería y por qué?

##### Preguntas complementarias

14. ¿Utiliza principalmente computadora, celular, tablet u otro dispositivo para realizar sus actividades?

15. ¿Qué canales utiliza normalmente para comunicarse con las empresas constructoras o responsables de los proyectos?

16. ¿Con qué frecuencia necesita consultar información histórica, evidencias o reportes anteriores?

17. ¿Prefiere revisar la información mediante tablas, gráficos, mapas, indicadores u otro formato? ¿Por qué?

18. ¿Qué tan cómodo se siente utilizando nuevas plataformas digitales en sus actividades de supervisión?

19. Cuando existen varios proyectos con observaciones pendientes, ¿cómo decide cuál revisar primero?

20. ¿Qué características debería tener una herramienta digital para ayudarle a supervisar varios proyectos?

21. ¿Hay alguna aplicación o plataforma que utilice en su trabajo y cuya forma de presentar u organizar la información considere especialmente útil? ¿Por qué?

### 2.2.2 Registro de Entrevistas
<a id="2-2-2-registro-de-entrevistas"></a>

Las entrevistas se realizaron a representantes de los dos segmentos objetivo definidos para RoadWatch OS. Para cada participante se registró información demográfica y profesional, evidencia audiovisual, duración de la entrevista y un resumen de los principales hallazgos obtenidos.

La información recopilada permitirá identificar características objetivas y subjetivas de cada segmento, incluyendo experiencia profesional, responsabilidades, herramientas utilizadas, dispositivos, canales digitales, objetivos, frustraciones, hábitos de trabajo y principales dificultades relacionadas con la gestión y supervisión ambiental.

### Segmento 1: Empresas Constructoras Viales

Los participantes de este segmento corresponden a profesionales involucrados en la gestión de proyectos viales y en actividades relacionadas con el seguimiento y cumplimiento ambiental de las obras.

#### Entrevista #1

| Campo | Información |
|---|---|
| Nombres | Luis Alfonso |
| Apellidos | Chávez Madueño|
| Edad | 52 |
| Distrito | Magdalena |
| Cargo | Lider de gestión de proyectos viales |
| Años de experiencia | 10 |
| Evidencia |<img src="assets/images/chapter2/EnvidenciaAlfonso.jpeg" alt="Evidencia entrevista Luis Alfonso" width="400">  |
| Enlace de video | [Ver Grabación del Video (SharePoint/OneDrive)](https://upcedupe-my.sharepoint.com/:v:/g/personal/u202418029_upc_edu_pe/IQC5hE5D4yYbSoeDSpUqJJhtAVSoS5G6YbZyQICU7nfboMs?e=oIDYf7) |
| Inicio de entrevista | 0:00|
| Duración | 17:54 |
| Resumen | Alfonso es un ingeniero industrial que lleva trabajando 10 años en el puesto de Líder de gestión de proyectos viales. Esto comprende la construcción de proyectos viales tanto terrestres como de vía férrea, donde su principal función es asegurarse con su equipo de que los proyectos en ejecución cumplan con las normativas y compromisos aplicables. Comenta que lo máximo que suele administrar simultáneamente son poco más de 3 proyectos, de los cuales la prioridad se enfoca en aquel que se encuentre en un momento crítico o requiera atención inmediata. En cuanto a la comunicación, utiliza el correo electrónico para gestiones formales y WhatsApp para consultas rápidas de información. Para su trabajo emplea principalmente dispositivos portátiles (celular y laptop) para mantenerse al tanto de las situaciones en los distintos proyectos. Nos comenta que mantener organizado el proyecto en general —tomando en cuenta fotografías, mediciones e información— demanda tiempo adicional al emplear herramientas separadas como MS Project y Primavera. Lo que más tiempo le consume en la realización de estos proyectos es la planificación y consolidación de información previa para prevenir problemas de gestión o ambientales, ya que cualquier incumplimiento implicaría pérdidas de presupuesto, tiempo y reputación. |

#### Entrevista #2

| Campo | Información |
|---|---|
| Nombres | Alex Dante  |
| Apellidos | Quintanilla Pérez |
| Edad | 49 años |
| Distrito | San Juan de Lurigancho |
| Cargo | Jefe de SSOMA |
| Años de experiencia | 12 años |
| Evidencia |![Entrevista Alex Quintanilla](assets/images/chapter2/EntrevistaAlexQuintanilla.png)  |
| Enlace de video | [Ver video](https://upcedupe-my.sharepoint.com/:v:/g/personal/u20241e356_upc_edu_pe/IQDOHhvGbnQpQYQcNzJf3safAW7v3ItfV2NOiFdIGRSiGZc?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=7eKvFx) |
| Duración | 0:00 - 3:16 |
| Resumen | Alex Dante Quintanilla Pérez es Jefe de SSOMA con 12 años de experiencia en construcción vial. Actualmente gestiona 3 proyectos simultáneos con múltiples frentes de obra, lo que le obliga a delegar constantemente en supervisores de campo al no poder estar presente en todos los puntos a la vez. El registro de mediciones ambientales se realiza de forma manual mediante formatos físicos que luego se trasladan a hojas de cálculo Excel, y las evidencias fotográficas se comparten por WhatsApp o Messenger, reconociendo que no es el método ideal pero es el disponible actualmente. Ante una incidencia reciente de niveles de ruido elevados cerca de una zona residencial, la coordinación se realizó por llamadas telefónicas y la documentación se gestionó en un archivo Word, sin un sistema centralizado de seguimiento formal. Su mayor dificultad es la pérdida de tiempo al buscar registros históricos dispersos en múltiples archivos y grupos de WhatsApp, pudiendo tomar hasta media hora localizar información de un mes específico. Señala además que toda notificación depende de que alguien recuerde avisar manualmente, sin ningún tipo de alerta automática. Las consecuencias de no detectar un incumplimiento a tiempo incluyen multas, paralización de obra y pérdida del contrato en proyectos públicos. Como mejora principal, identifica la necesidad de un panel centralizado con visibilidad en tiempo real del estado de todos sus puntos de monitoreo y alertas automáticas ante sobrepasos de límites normativos, sin depender de terceros para enterarse de una desviación.|

#### Entrevista #3

<table>
<thead>
  <tr>
    <th colspan="2">Entrevista #3</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Nombres</td>
    <td>José Luis</td>
  </tr>
  <tr>
    <td>Apellidos</td>
    <td>Pérez Ramírez</td>
  </tr>
  <tr>
    <td>Edad</td>
    <td>28</td>
  </tr>
  <tr>
    <td>Ciudad</td>
    <td>Piura</td>
  </tr>
  <tr>
    <td>Cargo</td>
    <td>Gestor Ambiental de Proyectos</td>
  </tr>
  <tr>
    <td>Años de experiencia</td>
    <td>7 años (2 en empresa privada y 5 en la municipalidad)</td>
  </tr>
  <tr>
    <td>Evidencia</td>
    <td><img src="assets/images/chapter2/evidenciaentrevistapieromontes.png" alt="Evidencia entrevista José Luis" width="400"></td>
  </tr>
  <tr>
    <td>Link</td>
    <td><a href="https://upcedupe-my.sharepoint.com/:v:/g/personal/u20241g031_upc_edu_pe/IQCMhQ7MolsyRKtp8PIvyZf8AYI-jf1wqdwDhOm84XWl-X8" target="_blank">Ver video</a></td>
  </tr>
  <tr>
    <td>Duración</td>
    <td>0:00 - 8:52</td>
  </tr>
  <tr>
    <td>Resumen</td>
    <td>José Luis, un Gestor Ambiental de Proyectos en Piura con 7 años de experiencia, supervisa actualmente de 10 a 30 proyectos de construcción y áreas verdes de forma simultánea. Las principales dificultades en su trabajo radican en la recolección y centralización de datos ambientales, los cuales recibe principalmente a través de WhatsApp en forma de mensajes, fotos e informes, los que posteriormente él mismo debe vaciar y organizar en tablas de Excel. A José Luis le frustra la falta de herramientas modernas, ya que los métodos tradicionales que emplea resultan lentos y dependen de su presencia física o la impresión de documentos para acceder a la información cuando no está en su oficina. Su objetivo principal es asegurar que los proyectos cumplan con la normativa y los estándares medioambientales planificados. Para mejorar su labor, propone la implementación de una herramienta o plataforma digital que unifique el registro de datos y agilice la comunicación con su equipo, permitiendo el acceso en tiempo real a la información de cada proyecto sin depender del Excel o WhatsApp, buscando que su flujo de trabajo sea más fluido y eficiente.</td>
  </tr>
</tbody>
</table>

### Segmento 2: Empresas Supervisoras y Consultoras Ambientales

Los participantes de este segmento corresponden a profesionales responsables de actividades de supervisión, consultoría, auditoría o seguimiento ambiental de uno o varios proyectos.

#### Entrevista #1

<table>
<thead>
  <tr>
    <th colspan="2">Entrevista #1</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Nombre</td>
    <td>Angiela</td>
  </tr>
  <tr>
    <td>Apellidos</td>
    <td>Fuentes Alvarez</td>
  </tr>
  <tr>
    <td>Edad</td>
    <td>24</td>
  </tr>
  <tr>
    <td>Distrito</td>
    <td>San Juan de Lurigancho</td>
  </tr>
  <tr>
    <td>Cargo</td>
    <td>Supervisora y Consultora Ambiental</td>
  </tr>
  <tr>
    <td>Años de experiencia</td>
    <td>3 años</td>
  </tr>
  <tr>
    <td>Evidencia</td>
    <td><img src="assets/images/chapter2/EvidenciaAngiela.jpeg" alt="Evidencia entrevista Angiela" width="400"></td>
  </tr>
  <tr>
    <td>Link</td>
    <td><a href="https://1drv.ms/v/c/113B281D1AF386CE/IQDGziSKN-XBRKO401eqvDWJARuiheeZ5hj3WNWlq3t0GE8?e=MV9WvJ" target="_blank">Ver video</a></td>
  </tr>
  <tr>
    <td>Duración</td>
    <td>0:00 - 4:23</td>
  </tr>
  <tr>
    <td>Resumen</td>
    <td>Angiela es una supervisora y consultora ambiental encargada de monitorear los indicadores de aire, ruido y agua en múltiples proyectos simultáneos. Para el control, seguimiento y recepción de evidencias, utiliza un conjunto de herramientas fragmentadas que incluyen Excel, correos electrónicos, WhatsApp, carpetas compartidas y documentos físicos. Busca garantizar el cumplimiento ambiental de todos los proyectos y agilizar la preparación de informes para auditorías o fiscalizaciones. Sin embargo, enfrenta grandes dificultades debido a la falta de centralización de la información; al manejar distintos formatos y canales por cada proyecto, se ve obligada a invertir demasiado tiempo en consolidar datos y rastrear evidencias. Esta desorganización le impide tener una visión global clara sobre qué proyectos tienen incidencias abiertas o están próximos a un incumplimiento. Como expectativa personal, menciona que contar con una plataforma centralizada —incluso imaginando a futuro una integración con sensores para recibir alertas inmediatas— tendría un impacto positivo al reducir el trabajo manual y mejorar el seguimiento ambiental de sus proyectos.</td>
  </tr>
</tbody>
</table>


#### Entrevista #2

<table>
<thead>
  <tr>
    <th colspan="2">Entrevista #2</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Nombre</td>
    <td>Guadalupe</td>
  </tr>
  <tr>
    <td>Apellidos</td>
    <td>Kim Chang</td>
  </tr>
  <tr>
    <td>Edad</td>
    <td>44</td>
  </tr>
  <tr>
    <td>Distrito</td>
    <td>San Isidro</td>
  </tr>
  <tr>
    <td>Cargo</td>
    <td>Coordinadora de Supervisión y Seguimiento Ambiental</td>
  </tr>
  <tr>
    <td>Años de experiencia</td>
    <td>12 años</td>
  </tr>
  <tr>
    <td>Evidencia</td>
    <td><img src="assets/images/chapter2/EvidenciaChang.jpg" alt="Evidencia entrevista Guadalupe" width="400"></td>
  </tr>
  <tr>
    <td>Link</td>
    <td><a href="https://upcedupe-my.sharepoint.com/:v:/g/personal/u202410421_upc_edu_pe/IQAzGWBr_180TaX5r2Ce2iHmAa0uzBUXWMWKYnJheWzFmdM?e=lzPTKe&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJWaWV3IiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D" target="_blank">Ver video</a></td>
  </tr>
  <tr>
    <td>Duración</td>
    <td>0:00 - 5:34</td>
  </tr>
  <tr>
    <td>Resumen</td>
    <td>Guadalupe desempeña funciones de supervisión y coordinación, realizando seguimiento a diferentes actividades y proyectos, revisando información, verificando el cumplimiento de procesos y coordinando con los responsables cuando se detectan observaciones o incidencias. Para el seguimiento ambiental utiliza principalmente reportes, hojas de cálculo, informes, correos electrónicos, carpetas compartidas y WhatsApp, lo que genera que la información se encuentre distribuida en diversos canales. Esta fragmentación dificulta localizar rápidamente mediciones, documentos, fotografías, incidencias y acciones correctivas, especialmente cuando se supervisan varios proyectos de manera simultánea. Además, señala que el seguimiento suele ser reactivo debido a que las mediciones no siempre están disponibles de forma inmediata y que el control de incidencias abiertas y acciones pendientes requiere una revisión manual. Guadalupe considera que una plataforma centralizada con alertas preventivas permitiría mejorar significativamente este proceso, especialmente si incorpora estados visuales como verde, amarillo y rojo para identificar rápidamente situaciones normales, de atención o críticas. Asimismo, considera útil integrar sensores para obtener información continua y facilitar la supervisión remota, sin reemplazar completamente las visitas presenciales. Destaca también la importancia de conservar un historial completo de mediciones, incidencias, responsables, acciones correctivas y evidencias para auditorías o fiscalizaciones. Finalmente, considera que una solución ideal debería ofrecer una vista general de todos los proyectos, visualización geográfica mediante mapas, alertas automáticas y generación de reportes descargables en PDF o Excel, reduciendo así el trabajo manual y facilitando la toma de decisiones.</td>
  </tr>
</tbody>
</table>

#### Entrevista #3

<table>
<thead>
  <tr>
    <th colspan="2">Entrevista #3</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Nombres</td>
    <td>Rosa Mariel</td>
  </tr>
  <tr>
    <td>Apellidos</td>
    <td>Montes Chang</td>
  </tr>
  <tr>
    <td>Edad</td>
    <td>23</td>
  </tr>
  <tr>
    <td>Distrito</td>
    <td>Santa, Chimbote</td>
  </tr>
  <tr>
    <td>Cargo</td>
    <td>Ingeniera de Proyectos</td>
  </tr>
  <tr>
    <td>Años de experiencia</td>
    <td>3 años</td>
  </tr>
  <tr>
    <td>Evidencia</td>
    <td><img src="assets/images/chapter2/evidenciaentrevistapieromontes2.png" alt="Evidencia entrevista Rosa Mariel" width="400"></td>
  </tr>
  <tr>
    <td>Link</td>
    <td><a href="https://upcedupe-my.sharepoint.com/:v:/g/personal/u20241g031_upc_edu_pe/IQDGfGytNgvfQ4rcVobTw5pWAZyAVgsiLJHVdPOQr6odWDw" target="_blank">Ver video</a></td>
  </tr>
  <tr>
    <td>Duración</td>
    <td>0:00 - 13:56</td>
  </tr>
  <tr>
    <td>Resumen</td>
    <td>Rosa Mariel, de 23 años, es Ingeniera de Proyectos con 3 años de experiencia trabajando en empresas del rubro pesquero, naval y metalmecánico. En su rol, supervisa hasta 10 proyectos de manera simultánea durante temporada alta, compartiendo funciones administrativas, de oficina y de campo, tales como el control de cronogramas y estándares de calidad y seguridad. En el ámbito ambiental, su principal dificultad es el proceso de registro de datos, específicamente con los formatos físicos (en papel) para la segregación de residuos. Rosa indica que, debido a la falta de practicidad y el apuro diario, estos documentos muchas veces no se llenan, lo cual es un riesgo grave ante auditorías inopinadas de entidades reguladoras como la OEFA, pudiendo derivar en multas o sanciones. Actualmente, la comunicación interna se apoya en WhatsApp para el envío de fotografías, y herramientas como Power BI o Looker Studio para presentar reportes al cliente, pero el acceso a esta información desde el celular es limitado y poco práctico cuando está en campo. Para mejorar el proceso, Rosa considera crucial la implementación de una plataforma digital o aplicación propia que agilice la fase de registro, eliminando la dependencia del papel y asegurando que toda la documentación ambiental esté siempre consolidada, accesible y lista para cualquier fiscalización.</td>
  </tr>
</tbody>
</table>

### 2.2.3 Análisis de Entrevistas
<a id="2-2-3-analisis-de-entrevistas"></a>

El análisis de entrevistas se realizó de manera independiente para cada segmento objetivo, considerando las respuestas y resúmenes obtenidos de tres participantes por segmento. A partir de esta información se identificaron características objetivas y subjetivas recurrentes, así como necesidades, dificultades, hábitos de trabajo y expectativas comunes.

Los porcentajes presentados corresponden a la cantidad de entrevistados que mencionaron o evidenciaron una determinada característica dentro de cada grupo de tres participantes.

#### Segmento 1: Empresas Constructoras Viales

Para este segmento se analizaron las entrevistas realizadas a Luis Alfonso Chávez Madueño, Alex Dante Quintanilla Pérez y José Luis Pérez Ramírez, profesionales vinculados con la gestión de proyectos, SSOMA y gestión ambiental.

| Característica | Mención | % | Evidencia |
|---|:---:|:---:|---|
| Gestión simultánea de varios proyectos o frentes de trabajo | 3/3 | 100% | Luis Alfonso menciona que administra hasta tres proyectos; Alex gestiona tres proyectos simultáneos con múltiples frentes; y José Luis supervisa entre 10 y 30 proyectos de manera simultánea. |
| Uso de múltiples herramientas y canales para organizar información | 3/3 | 100% | Los participantes utilizan herramientas como correo electrónico, WhatsApp, Messenger, Excel, Word, Project, Primavera y documentos físicos para gestionar información relacionada con los proyectos. |
| Necesidad de mantener organizada y disponible la información del proyecto | 3/3 | 100% | Los tres entrevistados requieren revisar información proveniente de diferentes proyectos, responsables y medios, lo cual demanda esfuerzo adicional para mantener la información actualizada y accesible. |
| Importancia del cumplimiento ambiental y normativo | 3/3 | 100% | Luis Alfonso busca evitar problemas que afecten presupuesto, tiempo y reputación; Alex señala riesgos de multas, paralización y pérdida de contratos; y José Luis tiene como objetivo asegurar el cumplimiento de normas y estándares ambientales. |
| Procesos manuales o dependientes de herramientas dispersas | 2/3 | 66.7% | Alex registra mediciones inicialmente en formatos físicos que luego traslada a Excel, mientras que José Luis recibe información por WhatsApp y posteriormente la organiza manualmente en hojas de cálculo. |
| Dificultad para localizar o consolidar información histórica | 2/3 | 66.7% | Alex menciona que localizar registros anteriores puede tomar hasta media hora debido a la dispersión de archivos y grupos de mensajería. José Luis señala que debe recopilar y organizar manualmente información recibida por distintos medios. |
| Necesidad de una plataforma digital centralizada | 2/3 | 66.7% | Alex propone disponer de un panel centralizado que le permita conocer el estado de sus puntos de monitoreo, mientras que José Luis considera necesaria una plataforma que unifique el registro de información y facilite la comunicación con su equipo. |
| Necesidad de consultar información desde diferentes ubicaciones | 2/3 | 66.7% | Luis Alfonso utiliza principalmente celular y laptop para mantenerse informado sobre diferentes proyectos, mientras que José Luis manifiesta la necesidad de acceder a la información sin depender de encontrarse físicamente en la oficina. |
| Interés en alertas automáticas ante situaciones ambientales | 1/3 | 33.3% | Alex señala expresamente que actualmente las notificaciones dependen de que una persona recuerde comunicar una situación y considera útil contar con alertas automáticas ante desviaciones ambientales. |

#### Insights destacados del Segmento 1

* La gestión de múltiples proyectos o frentes de obra es una característica común en los tres entrevistados, por lo que disponer de información organizada resulta especialmente importante para este segmento.

* Existe una fuerte dependencia de herramientas y canales separados como Excel, WhatsApp, correo electrónico, documentos físicos y diferentes aplicaciones de gestión, lo cual genera mayor esfuerzo para organizar la información.

* El cumplimiento ambiental representa una preocupación relevante debido al impacto que un problema puede tener sobre los costos, los plazos, la reputación de la empresa o incluso la continuidad de un proyecto.

* Dos de los tres entrevistados identifican de manera explícita la necesidad de contar con una plataforma que centralice información y reduzca el trabajo manual asociado a la búsqueda, registro y consolidación de datos.

* La posibilidad de acceder oportunamente a la información desde distintos lugares también resulta relevante, especialmente cuando los responsables deben coordinar varios proyectos o frentes sin encontrarse físicamente en cada uno de ellos.

---

#### Segmento 2: Empresas Supervisoras y Consultoras Ambientales

Para este segmento se analizaron las entrevistas realizadas a Angiela Fuentes Alvarez, Guadalupe Kim Chang y Rosa Mariel Montes Chang, quienes desempeñan funciones relacionadas con supervisión, coordinación, auditoría y gestión de proyectos.

| Característica | Mención | % | Evidencia |
|---|:---:|:---:|---|
| Supervisión simultánea de varios proyectos | 3/3 | 100% | Angiela realiza seguimiento a múltiples proyectos, Guadalupe supervisa diferentes actividades y proyectos, y Rosa Mariel puede gestionar hasta diez proyectos durante periodos de alta carga. |
| Uso de múltiples herramientas y canales para gestionar información | 3/3 | 100% | Los tres participantes utilizan combinaciones de Excel, correo electrónico, WhatsApp, documentos PDF, carpetas compartidas, formatos físicos y herramientas de visualización como Power BI o Looker Studio. |
| Dificultad para centralizar y consolidar información | 3/3 | 100% | Angiela debe consolidar información proveniente de diferentes proyectos; Guadalupe encuentra mediciones, documentos y evidencias distribuidos en diversos canales; y Rosa trabaja con registros en papel, mensajería y herramientas digitales separadas. |
| Necesidad de una plataforma digital centralizada | 3/3 | 100% | Angiela considera necesaria una plataforma que concentre la información de los proyectos; Guadalupe destaca la utilidad de una solución centralizada; y Rosa propone una aplicación propia que permita registrar y consultar la información ambiental en un solo lugar. |
| Importancia de disponer de información organizada para auditorías o fiscalizaciones | 3/3 | 100% | Los tres participantes necesitan reunir y validar información para reportes, auditorías o fiscalizaciones, y mencionan dificultades cuando los documentos o evidencias están distribuidos en diferentes fuentes. |
| Necesidad de mantener trazabilidad e historial de la información | 3/3 | 100% | Angiela necesita rastrear evidencias de distintos proyectos; Guadalupe destaca la importancia de conservar el historial de mediciones, incidencias, responsables y acciones; y Rosa necesita mantener la documentación accesible ante posibles auditorías. |
| Necesidad de una visión global del estado de los proyectos | 2/3 | 66.7% | Angiela manifiesta dificultad para identificar rápidamente cuáles proyectos presentan incidencias, mientras que Guadalupe considera necesaria una vista general que permita revisar el estado de varios proyectos de manera simultánea. |
| Interés en alertas preventivas e información oportuna | 2/3 | 66.7% | Angiela y Guadalupe consideran útil contar con alertas o información continua que permita identificar oportunamente situaciones que requieran atención. |
| Necesidad de acceso remoto o móvil a la información | 2/3 | 66.7% | Guadalupe valora la posibilidad de supervisar remotamente diferentes proyectos, mientras que Rosa señala que actualmente el acceso desde el celular es limitado cuando se encuentra trabajando en campo. |
| Uso de indicadores visuales para facilitar la toma de decisiones | 2/3 | 66.7% | Guadalupe propone estados visuales como verde, amarillo y rojo para identificar situaciones normales o críticas, mientras que Rosa utiliza herramientas como Power BI y Looker Studio para presentar y analizar información. |

#### Insights destacados del Segmento 2

* La principal dificultad del segmento se relaciona con la dispersión de información proveniente de distintos proyectos, empresas, responsables y canales de comunicación.

* Los tres entrevistados coinciden en la necesidad de disponer de una solución que permita centralizar documentos, mediciones, evidencias y reportes para reducir el trabajo de consolidación manual.

* La preparación de auditorías y fiscalizaciones requiere información completa, ordenada y trazable, por lo que el almacenamiento histórico y la disponibilidad de evidencias resultan especialmente importantes.

* La supervisión de varios proyectos genera la necesidad de contar con una vista consolidada que facilite la identificación de situaciones que requieren atención.

* También se observa interés por acceder a información de manera oportuna y desde diferentes ubicaciones, especialmente cuando los responsables realizan actividades tanto de oficina como de campo.

#### Conclusiones del análisis

Los resultados obtenidos evidencian que ambos segmentos presentan problemas relacionados con la dispersión de información, el uso de múltiples herramientas y el tiempo requerido para buscar, organizar y consolidar datos ambientales.

En el caso de las empresas constructoras viales, las principales necesidades se relacionan con el seguimiento operativo de varios proyectos o frentes de obra, el cumplimiento ambiental, la organización de mediciones y evidencias y la disponibilidad oportuna de información para responder ante posibles desviaciones.

En las empresas supervisoras y consultoras ambientales adquieren mayor relevancia la consolidación de información proveniente de varios proyectos, la trazabilidad documental, la preparación de auditorías o fiscalizaciones y la capacidad de obtener una visión general del estado ambiental de los proyectos supervisados.

> **Nota de delimitación respecto al alcance del MVP:** Si bien algunos entrevistados mencionaron de manera espontánea el deseo de contar con sensores físicos (*IoT*) o telemetría continua como parte de una solución ideal a futuro, **dentro del alcance del MVP de RoadWatch OS no se incluye la integración con dispositivos físicos ni el uso de modelos de inteligencia artificial**. En el MVP, las necesidades identificadas se atienden mediante el registro digital centralizado de mediciones ambientales en la aplicación web, su evaluación automática frente a los umbrales normativos configurados, la generación de alertas preventivas/críticas y la trazabilidad de incidencias, evidencias y reportes.

Estos hallazgos servirán como base para revisar y sustentar los User Personas, el User Task Matrix, los User Journey Maps y los demás artefactos de Needfinding desarrollados para RoadWatch OS.

---

## 2.3 Needfinding
<a id="2-3-needfinding"></a>

### 2.3.1. User Personas
<a id="2-3-1-user-personas"></a>

**Segmento 1**

Para el Segmento 1 (Empresas Constructoras Viales / Módulo Operativo) se elaboró el User Persona Carlos Mendoza. Se consideraron factores como su rol de Jefe de Proyectos Viales en una empresa constructora, su experiencia liderando múltiples frentes de obra y su responsabilidad de coordinar el avance del proyecto asegurando el cumplimiento de los requisitos ambientales aplicables.

Sus principales objetivos se centran en mantener la continuidad de la obra, reducir el riesgo de observaciones o paralizaciones, disponer oportunamente de información sobre mediciones e incidencias y mantener organizadas las evidencias y acciones realizadas en cada frente de trabajo.

Sus principales frustraciones se relacionan con la dispersión de información entre herramientas como WhatsApp, Excel, correo electrónico y documentos físicos, la dificultad para localizar registros históricos, la demora en consolidar evidencias y la dependencia de procesos manuales para conocer el estado de diferentes proyectos o frentes.

Asimismo, se tomó en cuenta su necesidad de contar con una plataforma web centralizada que permita consultar mediciones registradas, alertas, incidencias, responsables, acciones de mitigación, evidencias e información histórica desde un mismo entorno, facilitando el seguimiento de los proyectos y la toma de decisiones ante posibles desviaciones ambientales (considerando que en el alcance del MVP los registros se gestionan directamente en la plataforma web y cualquier mención a telemetría física en la lámina corresponde únicamente a una proyección futura del usuario).

Todo ello está orientado a reducir el tiempo dedicado a tareas administrativas, mejorar la trazabilidad de la información y disminuir los riesgos asociados al incumplimiento ambiental.

![User Persona - Carlos Mendoza](assets/images/chapter2/CarlosUserPerson.jpeg)

**Segmento 2**

Para el Segmento 2 (Empresas Supervisoras y Consultoras Ambientales / Módulo de Fiscalización) se elaboró el User Persona Gisela Chavez. Se consideraron factores como su rol de Directora de Operaciones en una consultora ambiental, su experiencia coordinando actividades de supervisión y su responsabilidad de revisar el cumplimiento ambiental de varios proyectos de manera simultánea.

Sus principales objetivos se centran en disponer de una visión general del estado de los proyectos supervisados, identificar rápidamente situaciones que requieren atención, mantener la trazabilidad de mediciones, incidencias y evidencias, y reducir el tiempo requerido para preparar reportes, auditorías o fiscalizaciones.

Sus principales frustraciones se relacionan con la dispersión de información entre correos electrónicos, hojas de cálculo, documentos, carpetas compartidas y aplicaciones de mensajería, así como con la dificultad para consolidar información proveniente de diferentes empresas y responsables.

Asimismo, se tomó en cuenta su necesidad de contar con una plataforma web que centralice información de múltiples proyectos, permita revisar indicadores de cumplimiento, consultar evidencias e historial, identificar observaciones pendientes y generar reportes de manera más organizada (precisando que para el MVP la consolidación y generación de reportes se realiza sobre los registros y evidencias ingresados en la plataforma, sin depender de sensores físicos).

Todo ello está orientado a facilitar la supervisión de varios proyectos, mejorar la disponibilidad de la información y reducir el esfuerzo manual asociado a la validación y consolidación de documentos.

![User Persona - Gisela Chavez](assets/images/chapter2/GiselaUserPerson.jpeg)
### 2.3.2. User Task Matrix
<a id="2-3-2-user-task-matrix"></a>

El User Task Matrix permite identificar y comparar las principales tareas que realizan los User Personas de los dos segmentos objetivo de RoadWatch OS para cumplir sus responsabilidades actuales.

Las tareas descritas corresponden a actividades que existen independientemente de la solución propuesta. Por lo tanto, no representan funcionalidades de RoadWatch OS, sino acciones propias del trabajo cotidiano de los usuarios dentro de los procesos de gestión y supervisión ambiental de proyectos viales.

Los User Personas considerados son:

- **Carlos Mendoza:** representante del Segmento 1, correspondiente a empresas constructoras viales.
- **Gisela Chavez:** representante del Segmento 2, correspondiente a empresas supervisoras y consultoras ambientales.

Para cada tarea se evalúa su frecuencia y nivel de importancia dentro de las actividades de cada User Persona.

| Task | Carlos Mendoza - Frequency | Carlos Mendoza - Importance | Gisela Chavez - Frequency | Gisela Chavez - Importance |
|---|---|---|---|---|
| Revisar el estado ambiental de los proyectos o frentes de obra | Daily | Critical | Daily | Critical |
| Revisar mediciones ambientales registradas en campo | Daily | Critical | Weekly | High |
| Coordinar con responsables ambientales y personal de campo | Daily | High | Daily | High |
| Verificar el cumplimiento de compromisos y requisitos ambientales | Daily | Critical | Daily | Critical |
| Identificar posibles desviaciones o incumplimientos ambientales | Daily | Critical | Daily | Critical |
| Solicitar o recopilar evidencias de las actividades realizadas | Daily | High | Daily | High |
| Revisar fotografías, documentos y registros asociados a incidencias | Daily | High | Daily | High |
| Coordinar acciones correctivas o de mitigación | When required | Critical | When required | High |
| Realizar seguimiento a acciones correctivas pendientes | Daily | High | Daily | Critical |
| Organizar información por proyecto, tramo o punto de monitoreo | Daily | High | Daily | Critical |
| Consultar información histórica de mediciones e incidencias | Weekly | Medium | Weekly | High |
| Consolidar información proveniente de diferentes fuentes | Weekly | High | Daily | Critical |
| Preparar reportes de seguimiento ambiental | Weekly | High | Weekly | Critical |
| Preparar documentación para supervisiones, auditorías o fiscalizaciones | Monthly | Critical | Monthly | Critical |
| Comunicar observaciones o incidencias a los responsables correspondientes | When required | High | When required | Critical |
| Verificar el cierre de observaciones o incidencias | When required | High | When required | Critical |
| Supervisar varios proyectos o frentes de manera simultánea | Daily | High | Daily | Critical |

#### Análisis del User Task Matrix

La matriz evidencia que ambos User Personas comparten varias actividades relacionadas con el seguimiento ambiental, revisión de mediciones, gestión de evidencias, identificación de incidencias y verificación del cumplimiento de requisitos ambientales.

Para **Carlos Mendoza**, las tareas con mayor frecuencia e importancia están relacionadas con la operación diaria de los frentes de obra. Entre ellas destacan la revisión de mediciones ambientales, la coordinación con el personal de campo, la identificación de posibles desviaciones y la ejecución o seguimiento de medidas correctivas. Su trabajo requiere reaccionar rápidamente ante situaciones que puedan afectar la continuidad de la obra o generar observaciones ambientales.

Para **Gisela Chavez**, además de revisar el cumplimiento ambiental, adquieren especial importancia las tareas relacionadas con la consolidación de información proveniente de distintos proyectos, el seguimiento de observaciones pendientes y la preparación de documentación para auditorías, fiscalizaciones o reportes de cumplimiento. Debido a que supervisa múltiples proyectos, necesita mantener una visión global y organizada de la información recibida.

Las principales coincidencias entre ambos perfiles se encuentran en la necesidad de revisar información ambiental, identificar problemas, coordinar con responsables y mantener evidencias de las acciones realizadas. Sin embargo, mientras Carlos concentra su actividad en la gestión operativa de los frentes de obra, Gisela tiene una mayor responsabilidad sobre la supervisión, consolidación y validación de información proveniente de varios proyectos.

Estas diferencias permiten comprender las necesidades particulares de cada segmento sin asociarlas todavía a funcionalidades específicas de RoadWatch OS.

### 2.3.3. User Journey Mapping
<a id="2-3-3-user-journey-mapping"></a>

**Segmento 1**

El User Journey Map de Carlos Mendoza representa el recorrido actual que sigue durante la gestión ambiental de un proyecto vial. El análisis se centra en las actividades, dificultades y puntos de dolor que forman parte de su proceso de trabajo actual, previo a la implementación de RoadWatch OS.

El recorrido comprende las siguientes etapas: 1. Planificación del frente de obra y revisión de requisitos ambientales, 2. Registro de mediciones y evidencias en campo, 3. Identificación de posibles desviaciones o excedencias ambientales, 4. Coordinación y ejecución de acciones correctivas o de mitigación, 5. Consolidación de información para reportes periódicos y 6. Preparación de documentación para supervisiones o auditorías.

Los principales puntos de dificultad se presentan durante el registro de información, la identificación oportuna de desviaciones y la consolidación de evidencias. Actualmente, las mediciones, fotografías, reportes y comunicaciones pueden encontrarse distribuidos entre hojas de cálculo, aplicaciones de mensajería, correos electrónicos y documentos compartidos.

Esta dispersión obliga a Carlos y a su equipo a revisar manualmente distintas fuentes para conocer el estado ambiental de los frentes de obra. Cuando la información no está disponible oportunamente, existe el riesgo de identificar una desviación después de que esta ya haya ocurrido.

Durante la preparación de reportes, supervisiones o auditorías también es necesario localizar y organizar evidencias provenientes de diferentes responsables y momentos del proyecto, incrementando el tiempo dedicado a tareas administrativas y dificultando la trazabilidad de las acciones realizadas.

![User Journey Map - Carlos Mendoza](assets/images/chapter2/CarlosJourneyMap.jpeg)

**Segmento 2**

El User Journey Map de Gisela Chavez representa el recorrido actual que sigue durante la supervisión ambiental de múltiples proyectos. El análisis se centra en las actividades, dificultades y puntos de dolor que forman parte de su proceso de trabajo actual, previo a la implementación de RoadWatch OS.

El recorrido comprende las siguientes etapas: 1. Incorporación de un nuevo proyecto a la cartera de supervisión, 2. Revisión periódica del estado ambiental de los proyectos, 3. Solicitud y revisión de mediciones, informes y evidencias, 4. Identificación y comunicación de observaciones, 5. Seguimiento de acciones correctivas y 6. Consolidación de información para reportes y fiscalizaciones.

Los principales puntos de dificultad se presentan durante la revisión simultánea de varios proyectos y la recopilación de información proveniente de diferentes empresas y responsables.

Actualmente, Gisela debe consultar correos electrónicos, documentos, hojas de cálculo, carpetas compartidas y otros canales para verificar el estado de las observaciones y acciones pendientes. Esta fragmentación dificulta obtener rápidamente una visión general de la situación ambiental de cada proyecto.

Además, durante la elaboración de reportes o procesos de fiscalización, debe consolidar manualmente mediciones, documentos y evidencias generadas en distintos momentos, lo que incrementa el tiempo requerido para validar la información y mantener la trazabilidad de las observaciones realizadas.

![User Journey Map - Gisela Chavez](assets/images/chapter2/GiselaJourneyMap.jpeg)

### 2.3.4. Empathy Mapping
<a id="2-3-4-empathy-mapping"></a>

**Segmento 1**

Para el Empathy Mapping del Segmento 1 se tomó como referencia a Carlos Mendoza, quien representa a los responsables de proyectos en empresas constructoras viales.

Carlos trabaja coordinando distintos frentes de obra y debe estar pendiente tanto del avance del proyecto como del cumplimiento de los aspectos ambientales. Durante su trabajo revisa mediciones, reportes, fotografías y documentos enviados por el personal de campo. También coordina con los responsables cuando aparece algún problema o cuando se necesita aplicar una medida de mitigación.

En su día a día ve mucha información distribuida entre Excel, WhatsApp, correos, carpetas compartidas y documentos. Esto hace que muchas veces tenga que revisar varias fuentes antes de entender qué está pasando en un frente de obra.

Carlos escucha constantemente indicaciones de la gerencia sobre los plazos del proyecto, reportes del personal de campo y observaciones relacionadas con el cumplimiento ambiental. Cuando aparece una incidencia necesita comunicarse con los responsables, pedir información y verificar qué acciones se realizaron.

Una de sus principales preocupaciones es enterarse tarde de una posible desviación ambiental. También le genera frustración tener que invertir tiempo buscando fotografías, mediciones o documentos cuando necesita preparar un reporte o responder a una supervisión.

Entre sus principales dificultades se encuentran la información dispersa, el seguimiento manual de incidencias, la demora en recibir algunos reportes y la dificultad para mantener ordenadas las evidencias de cada frente de obra.

Carlos espera poder trabajar con información más organizada, reducir el tiempo que dedica a buscar documentos y tener mayor claridad sobre el estado de los diferentes frentes y las acciones que todavía están pendientes.

![Empathy Map - Carlos Mendoza](assets/images/chapter2/CarlosEmpathyMap.jpeg)

**Segmento 2**

Para el Empathy Mapping del Segmento 2 se tomó como referencia a Gisela Chavez, quien representa a los responsables de supervisión y consultoría ambiental que trabajan con varios proyectos al mismo tiempo.

Gisela debe revisar información proveniente de distintas empresas y responsables, verificar el cumplimiento ambiental de los proyectos y hacer seguimiento a observaciones, incidencias y acciones correctivas. Parte importante de su trabajo consiste en revisar reportes, documentos, fotografías y mediciones antes de preparar informes o responder a una fiscalización.

En su día a día recibe información por correo, Excel, documentos PDF, carpetas compartidas y aplicaciones de mensajería. Al manejar varios proyectos de manera simultánea, muchas veces necesita revisar diferentes fuentes para conocer el estado de una observación o confirmar si una acción pendiente ya fue atendida.

Gisela escucha solicitudes de gerencia, comunicaciones de los responsables de los proyectos y observaciones relacionadas con el cumplimiento ambiental. También debe coordinar con diferentes personas cuando falta información o cuando necesita aclarar algún dato antes de incluirlo en un informe.

Una de sus principales preocupaciones es no contar a tiempo con toda la información necesaria para revisar correctamente un proyecto. También le genera frustración tener que consolidar manualmente documentos provenientes de diferentes fuentes y volver a solicitar información cuando esta llega incompleta o desordenada.

Entre sus principales dificultades se encuentran la dispersión de la información, el seguimiento manual de observaciones, la cantidad de documentos que debe revisar y el tiempo que toma consolidar información de varios proyectos.

Gisela espera poder tener la información mejor organizada, revisar con mayor facilidad el estado de cada proyecto y reducir el tiempo que dedica a buscar, validar y consolidar documentos para reportes, auditorías o fiscalizaciones.

![Empathy Map - Gisela Chavez](assets/images/chapter2/GiselaEmpathyMap.jpeg)

## 2.4. Big Picture EventStorming
<a id="2-4-big-picture-eventstorming"></a>

### Paso 1 – Exploración no estructurada

En esta primera etapa, el equipo realizó una exploración abierta del dominio relacionado con la gestión y supervisión ambiental de proyectos viales.

El objetivo fue identificar los principales eventos que ocurren durante el seguimiento ambiental de una obra, considerando las actividades realizadas por empresas constructoras, supervisores, consultores ambientales y demás responsables involucrados.

Durante esta exploración se identificaron eventos como la asignación de nuevos tramos viales, la definición de puntos de monitoreo ambiental, el registro de niveles de ruido y material particulado, la identificación de excedencias, la revisión de medidas de mitigación y la preparación de documentación para supervisiones o fiscalizaciones.

También se reconocieron situaciones problemáticas dentro del proceso actual, como discrepancias entre reportes de la constructora y la supervisión, riesgo de incumplimientos ambientales, actualización manual de registros y consolidación tardía de documentación.

Los eventos identificados en esta primera etapa se colocaron sin seguir inicialmente un orden cronológico, con la finalidad de obtener una visión amplia de las situaciones que forman parte del dominio.

![Paso 1 - Exploración no estructurada](assets/images/chapter2/Step1RoadWatch.jpeg)

### Paso 2 – Línea de tiempo

Luego de identificar los principales eventos del dominio, el equipo los organizó en una línea de tiempo para representar de manera más clara cómo se desarrolla el proceso de gestión y supervisión ambiental de un proyecto vial.

Los eventos fueron agrupados en cinco etapas principales:

**1. Preparación**

En esta etapa se inicia el proceso con la asignación de un nuevo tramo vial a la empresa constructora y la definición de los puntos de monitoreo ambiental que serán considerados durante el proyecto.

Eventos principales:

- Nuevo tramo vial asignado a la empresa constructora.
- Puntos de monitoreo ambiental definidos.

**2. Monitoreo en campo**

Durante la ejecución de las actividades se realizan registros de las principales variables ambientales y se identifican posibles desviaciones respecto de los valores establecidos.

Eventos principales:

- Niveles de ruido y material particulado registrados.
- Umbral de ruido excedido en tramo urbano.

**3. Identificación del problema**

Cuando se detecta una situación que requiere atención, se revisa la información disponible y se identifican posibles diferencias entre los registros de los distintos participantes del proyecto.

Eventos principales:

- Discrepancia encontrada entre reportes de la constructora y la supervisión.
- Riesgo de incumplimiento ambiental identificado por la supervisión.

**4. Seguimiento y consolidación**

Después de identificar el problema, se revisan las medidas de mitigación aplicadas, se actualizan los registros ambientales y se organiza la documentación necesaria para sustentar las acciones realizadas.

Eventos principales:

- Medidas de mitigación ambiental revisadas.
- Registros ambientales actualizados en hojas de cálculo.
- Documentación de cumplimiento consolidada a último momento.

**5. Supervisión y fiscalización**

Finalmente, la información recopilada y organizada es utilizada durante procesos de supervisión o fiscalización, donde se revisa el cumplimiento ambiental del proyecto y se pueden solicitar antecedentes adicionales.

Eventos principales:

- Fiscalizadores realizan una inspección no programada.
- Reporte regulatorio presentado a la supervisión.
- Información histórica de cumplimiento solicitada por SENACE.

La organización cronológica de los eventos permitió identificar que varias de las dificultades del proceso se relacionan con la disponibilidad de información, la coordinación entre responsables, la existencia de registros distribuidos y el tiempo necesario para consolidar evidencias antes de una supervisión o fiscalización.

![Paso 2 - Línea de tiempo](assets/images/chapter2/Step2RoadWatch.jpeg)

## 2.5. Ubiquitous Language
<a id="2-5-ubiquitous-language"></a>

Con el propósito de mantener una comunicación clara y consistente entre los integrantes del equipo y los stakeholders, se establece el siguiente glosario de términos propios del dominio de gestión y supervisión ambiental en proyectos viales.

Los términos se presentan en inglés, acompañados por su equivalente en español entre paréntesis. Las definiciones se desarrollan en español y se enfocan únicamente en conceptos propios del dominio, evitando términos técnicos de ingeniería de software.

* **Environmental Monitoring (Monitoreo Ambiental):** Proceso de observación, medición y seguimiento de variables ambientales relevantes dentro de un proyecto vial, como ruido, material particulado, calidad del aire o calidad del agua.

* **Road Construction Company (Empresa Constructora Vial):** Organización responsable de ejecutar obras de infraestructura vial y de cumplir con las obligaciones ambientales asociadas al proyecto.

* **Environmental Supervisor (Supervisor Ambiental):** Profesional encargado de revisar y verificar el cumplimiento de los compromisos y requisitos ambientales durante la ejecución de un proyecto.

* **Environmental Consultant (Consultor Ambiental):** Profesional o empresa especializada que brinda asesoría, evaluación y soporte técnico en temas relacionados con la gestión y cumplimiento ambiental.

* **Monitoring Point (Punto de Monitoreo):** Ubicación definida dentro del proyecto donde se realizan mediciones o controles de una determinada variable ambiental.

* **Environmental Measurement (Medición Ambiental):** Registro obtenido durante la evaluación de una variable ambiental en un punto y momento determinados.

* **Environmental Threshold (Umbral Ambiental):** Valor de referencia utilizado para evaluar si una determinada medición ambiental se encuentra dentro de los límites considerados aceptables.

* **Threshold Deviation (Desviación de Umbral):** Situación en la que una medición ambiental se aproxima, alcanza o supera un valor de referencia establecido.

* **Environmental Incident (Incidencia Ambiental):** Situación relacionada con una condición ambiental que requiere revisión, seguimiento o atención por parte de los responsables del proyecto.

* **Mitigation Measure (Medida de Mitigación):** Acción ejecutada con el objetivo de reducir, controlar o corregir un impacto ambiental identificado durante el desarrollo del proyecto.

* **Corrective Action (Acción Correctiva):** Acción realizada para atender una observación o problema ambiental identificado y evitar que continúe o vuelva a producirse.

* **Environmental Evidence (Evidencia Ambiental):** Información que permite sustentar una medición, actividad, incidencia o acción realizada, como fotografías, registros, documentos o informes.

* **Environmental Report (Reporte Ambiental):** Documento que reúne información relacionada con mediciones, observaciones, incidencias, acciones realizadas y resultados del seguimiento ambiental.

* **Regulatory Audit (Fiscalización / Auditoría Regulatoria):** Proceso de revisión realizado por una entidad competente o responsable de supervisión para verificar el cumplimiento de los compromisos y obligaciones ambientales de un proyecto.

---

# Requirements Specification
<a id="3-requirements-specification"></a>

## 3.1. User Stories
<a id="3-1-user-stories"></a>

En esta sección se presentan las User Stories identificadas para **RoadWatch OS** a partir de las necesidades y hallazgos obtenidos durante el proceso de *Requirements Elicitation & Analysis*. Con el propósito de mantener una trazabilidad clara entre los objetivos de negocio, el diseño arquitectónico y la planificación iterativa, las historias se vinculan mediante **Epics (`EP01` a `EP11`)** hacia los **7 Bounded Contexts** del sistema y los respectivos Sprints de implementación.

Cada User Story incluye una descripción expresada desde la perspectiva del actor correspondiente y múltiples escenarios de aceptación redactados en formato *Given-When-Then* (cubriendo flujo principal, validaciones y control de estado o permisos), sin alterar las funcionalidades implementadas en la plataforma.

### Matriz de Epics y Trazabilidad Arquitectónica

| Epic ID | Epic Title | Descripción de la Épica | Bounded Context Principal | User Stories Asociadas |
| :--- | :--- | :--- | :--- | :--- |
| **EP01** | Proyecto | Gestión del portafolio de proyectos viales, tramos, ubicaciones y administración de puntos de monitoreo. | *Project Management* | US20, US22, US26, US40, US41, US48, US55 |
| **EP02** | Indicador | Registro, validación, filtrado y consulta histórica de mediciones de variables ambientales (aire, ruido y agua). | *Environmental Monitoring* | US09, US13, US27, US38, US49 |
| **EP03** | Alerta | Evaluación de mediciones frente a umbrales normativos y generación de alertas preventivas o de incumplimiento. | *Environmental Monitoring* | US07, US17, US28, US34, US46, US47 |
| **EP04** | Incidencia | Gestión operativa de incidencias ambientales, tablero Kanban, responsables, comentarios y acciones de mitigación. | *Incident & Mitigation Management* | US11, US16, US18, US29, US43, US52 |
| **EP05** | Mapa | Visualización geográfica de proyectos y puntos de monitoreo ambiental con estado operativo por ubicación. | *Project Management* / *Environmental Monitoring* | US02, US12 |
| **EP06** | Dashboard | Visualización consolidada de indicadores clave (KPIs), porcentaje de cumplimiento y salud ambiental del portafolio. | *Reports & Compliance Management* | US05, US10, US15, US19, US33, US44, US50, US51 |
| **EP07** | Reporte | Consolidación de historial normativo, generación y exportación de reportes de seguimiento y auditoría ambiental. | *Reports & Compliance Management* | US06, US35, US36, US45 |
| **EP08** | Usuario | Autenticación segmentada (constructora y supervisora), gestión de sesiones, perfiles, roles y permisos. | *Identity & Access Management* | US01, US04, US21, US32, US42, US53 |
| **EP09** | Suscripción | Presentación de planes comerciales, administración de cuotas operativas y personalización de cuenta corporativa. | *Subscription Management* | US03, US08, US23, US39, US57 |
| **EP10** | Documento | Carga y respaldo de evidencias fotográficas, control de documentos normativos obligatorios y versionamiento. | *Document & Evidence Management* | US14, US30, US54, US56 |
| **EP11** | API | Especificaciones transversales de los servicios RESTful: documentación OpenAPI/Swagger, paginación y seguridad. | *Cross-Cutting / RESTful API* | US24, US25, US31, US37 |

---

## 1. Landing Page (Presentación y Conversión — Sprint 1)

| ID | Título | Descripción | Criterios de Aceptación | Relacionado con |
| :--- | :--- | :--- | :--- | :--- |
| US01 | Autenticación | **Como** usuario registrado, **deseo** poder iniciar sesión **para** acceder a mi cuenta y perfil según mi organización. | **Escenario 1 (Acceso válido):** **Dado** que el usuario ingresa credenciales válidas o selecciona un perfil activo en el sistema, **cuando** se procesa la solicitud de inicio de sesión, **entonces** el sistema le otorga acceso al entorno correspondiente a su segmento (Constructora o Supervisora).<br>**Escenario 2 (Credenciales inválidas):** **Dado** que el usuario ingresa credenciales incorrectas o campos vacíos, **cuando** intenta iniciar sesión, **entonces** el sistema rechaza el acceso y muestra un mensaje indicando el error de validación. | EP08: Usuario |
| US02 | Demo de Tablero Geolocalizado | **Como** visitante del segmento consultora, **deseo** ver una vista previa del mapa de indicadores **para** entender cómo se visualizaría mi obra. | **Escenario 1 (Visualización de demo):** **Dado** que el visitante navega por el sitio público, **cuando** accede a la sección de funciones, **entonces** el sistema presenta una vista previa del tablero con puntos de monitoreo simulados.<br>**Escenario 2 (Adaptación responsiva):** **Dado** que el visitante accede desde un dispositivo móvil, **cuando** visualiza la sección de funciones, **entonces** la demostración visual se adapta al ancho de pantalla sin desbordar el diseño. | EP05: Mapa |
| US03 | Explicación de planes | **Como** visitante del segmento constructora, **deseo** comparar los planes Base, Profesional y Enterprise **para** elegir el que se ajuste a mi empresa. | **Escenario 1 (Comparación de planes):** **Dado** que el visitante accede a la sección de precios, **cuando** el sistema carga la información, **entonces** presenta una estructura comparativa detallando las características, límites de proyectos y usuarios de cada plan.<br>**Escenario 2 (Selección de plan):** **Dado** que el visitante revisa las opciones comerciales, **cuando** selecciona el botón de acción de un plan específico, **entonces** el sistema lo dirige hacia el formulario de contacto o flujo de acceso comercial. | EP09: Suscripción |
| US04 | CTA Segmento Consultora | **Como** visitante del segmento consultora, **deseo** una llamada a la acción clara para probar la plataforma **para** evaluar si resuelve mi problema de monitoreo. | **Escenario 1 (Redirección a plataforma):** **Dado** que el visitante interactúa con el contenido para consultoras, **cuando** acciona el llamado a la acción principal, **entonces** el sistema lo redirige a la vista de acceso de la aplicación web.<br>**Escenario 2 (Claridad visual):** **Dado** que el visitante recorre la sección principal del Landing Page, **cuando** se renderizan los botones de acción, **entonces** el botón del segmento supervisora/consultora se distingue visualmente con texto e iconografía claros. | EP08: Usuario |
| US05 | CTA Segmento Empresa Multi-Proyecto | **Como** visitante con múltiples proyectos, **deseo** una ruta dirigida a la gestión multi-proyecto **para** acceder a la vista correspondiente. | **Escenario 1 (Acceso a flujo multi-proyecto):** **Dado** que el visitante interactúa con la sección empresarial, **cuando** acciona el llamado a la acción, **entonces** el sistema lo dirige al acceso de la aplicación web para gestionar portafolios de obras.<br>**Escenario 2 (Consistencia de navegación):** **Dado** que el visitante utiliza el llamado a la acción desde cualquier resolución de pantalla, **cuando** se ejecuta el enlace, **entonces** mantiene la ruta configurada hacia el entorno de la plataforma. | EP06: Dashboard |
| US06 | Caso de Uso / Testimonio | **Como** visitante del landing page, **deseo** visualizar casos de éxito o métricas de impacto **para** confiar en la efectividad de la plataforma. | **Escenario 1 (Despliegue de testimonios):** **Dado** que el visitante explora la información del producto, **cuando** accede a la sección de impacto, **entonces** el sistema despliega testimonios de usuarios e indicadores de mejora en la gestión ambiental.<br>**Escenario 2 (Lectura por segmento):** **Dado** que el visitante revisa los casos presentados, **cuando** visualiza cada tarjeta de testimonio, **entonces** identifica el cargo y tipo de organización (constructora o supervisora) asociada al caso. | EP07: Reporte |
| US07 | Notificaciones Push Landing | **Como** visitante del landing page, **deseo** aceptar notificaciones del navegador **para** recibir novedades sin ingresar a la plataforma. | **Escenario 1 (Aceptación de permiso):** **Dado** que el sistema solicita el permiso de notificaciones en el navegador, **cuando** el visitante lo aprueba, **entonces** se registra la preferencia de avisos en el navegador.<br>**Escenario 2 (Rechazo de permiso):** **Dado** que el visitante decide no otorgar permisos de notificación, **cuando** cierra o rechaza la solicitud, **entonces** el sitio continúa operando con normalidad sin bloquear la navegación. | EP03: Alerta |
| US08 | Formulario de Contacto Comercial | **Como** visitante del segmento corporativo, **deseo** dejar mis datos de contacto **para** recibir una propuesta personalizada. | **Escenario 1 (Envío exitoso):** **Dado** que el visitante completa el formulario de contacto con nombre, correo corporativo y mensaje válidos, **cuando** confirma el envío, **entonces** el sistema registra la solicitud y emite un mensaje de confirmación.<br>**Escenario 2 (Datos incompletos o inválidos):** **Dado** que el visitante omite un campo requerido o ingresa un formato de correo inválido, **cuando** intenta enviar el formulario, **entonces** el sistema impide el envío y resalta los campos que requieren corrección. | EP09: Suscripción |

---

## 2. Web Application (Frontend Interactivo — Sprint 2)

| ID | Título | Descripción | Criterios de Aceptación | Relacionado con |
| :--- | :--- | :--- | :--- | :--- |
| US09 | Formulario de Registro de Indicador | **Como** responsable de gestión ambiental, **deseo** llenar un formulario validado **para** registrar mediciones sin enviar errores al servidor. | **Escenario 1 (Registro válido):** **Dado** que el responsable selecciona un proyecto, punto de monitoreo, tipo de indicador (aire, ruido o agua) e ingresa un valor numérico válido, **cuando** confirma el registro, **entonces** el sistema guarda la medición, evalúa su estado frente al umbral y actualiza el listado.<br>**Escenario 2 (Campos obligatorios faltantes):** **Dado** que el usuario omite un campo obligatorio o ingresa un valor no numérico, **cuando** intenta registrar la medición, **entonces** el sistema rechaza la operación y muestra mensajes de validación en los campos correspondientes.<br>**Escenario 3 (Restricción por rol):** **Dado** que el usuario autenticado pertenece al perfil de supervisión/auditoría en modo consulta, **cuando** accede al módulo de mediciones, **entonces** visualiza el historial sin habilitar la creación de registros operativos de obra. | EP02: Indicador |
| US10 | Tarjetas de Proyecto (Cards) | **Como** usuario de RoadWatch, **deseo** visualizar resúmenes individuales de cada proyecto **para** entender su estado ambiental de un vistazo. | **Escenario 1 (Visualización de tarjetas):** **Dado** que el usuario consulta su portafolio de proyectos, **cuando** el sistema carga los datos, **entonces** presenta cada proyecto en una tarjeta modular mostrando nombre, ubicación, responsable y estado ambiental (*Óptimo*, *Advertencia* o *Crítico*).<br>**Escenario 2 (Acceso al detalle):** **Dado** que el usuario visualiza las tarjetas del portafolio, **cuando** selecciona un proyecto específico, **entonces** el sistema navega hacia la vista de detalle con sus puntos de monitoreo, mediciones e incidencias.<br>**Escenario 3 (Portafolio filtrado sin coincidencias):** **Dado** que el usuario aplica un criterio de búsqueda que no coincide con ningún proyecto, **cuando** se actualiza la vista, **entonces** el sistema muestra un estado vacío informativo. | EP06: Dashboard |
| US11 | Tablero Kanban de Incidencias | **Como** responsable de gestión ambiental, **deseo** mover incidencias entre diferentes estados **para** gestionar mi flujo de trabajo. | **Escenario 1 (Actualización de estado):** **Dado** que existe una incidencia registrada en el tablero Kanban, **cuando** el responsable cambia su estado entre las etapas del flujo (*Abierta*, *En proceso*, *Mitigada* / *Cerrada*), **entonces** el sistema actualiza la columna de la incidencia y persiste el cambio.<br>**Escenario 2 (Visualización de severidad y responsable):** **Dado** que el usuario accede al tablero Kanban, **cuando** se cargan las tarjetas de incidencias, **entonces** cada tarjeta muestra su código, proyecto asociado, nivel de severidad y responsable asignado.<br>**Escenario 3 (Consulta de detalle desde el tablero):** **Dado** que el usuario selecciona una tarjeta del Kanban, **cuando** abre su vista de detalle, **entonces** visualiza las acciones de mitigación, evidencias y comentarios vinculados. | EP04: Incidencia |
| US12 | Vista de Mapa Interactivo | **Como** responsable de gestión ambiental, **deseo** ver un mapa con la ubicación de puntos de monitoreo **para** identificar zonas críticas rápidamente. | **Escenario 1 (Ubicación y estado de puntos):** **Dado** que el usuario accede a la vista de puntos de monitoreo del proyecto, **cuando** el sistema procesa las ubicaciones registradas, **entonces** muestra cada punto indicando sus coordenadas, variable medida y nivel de riesgo actual.<br>**Escenario 2 (Selección de punto de monitoreo):** **Dado** que el usuario interactúa con un punto de monitoreo específico, **cuando** lo selecciona en la vista, **entonces** el sistema despliega su última medición registrada y el estado frente al umbral configurado. | EP05: Mapa |
| US13 | Filtro por Tipo de Indicador | **Como** responsable de gestión ambiental, **deseo** filtrar la información por tipo de indicador (aire, ruido, agua) **para** enfocar mi revisión. | **Escenario 1 (Aplicación de filtro por indicador):** **Dado** que existen mediciones de distintas variables ambientales, **cuando** el usuario selecciona un filtro específico (calidad del aire, ruido o calidad del agua), **entonces** el sistema actualiza la vista mostrando únicamente los registros correspondientes.<br>**Escenario 2 (Restablecimiento de filtros):** **Dado** que el usuario tiene un filtro de indicador activo, **cuando** selecciona la opción para ver todos los indicadores, **entonces** el sistema restaura el listado completo de mediciones del proyecto. | EP02: Indicador |
| US14 | Adjuntar Evidencia Fotográfica | **Como** responsable de gestión ambiental, **deseo** adjuntar archivos fotográficos o documentales **para** respaldar una medición o acción de mitigación. | **Escenario 1 (Carga de evidencia válida):** **Dado** que el usuario selecciona un archivo válido y completa los metadatos requeridos (proyecto, incidencia o medición asociada y descripción), **cuando** confirma el registro, **entonces** el sistema asocia la evidencia y la incorpora al listado documental.<br>**Escenario 2 (Validación de datos incompletos):** **Dado** que el usuario intenta registrar una evidencia sin adjuntar archivo o sin indicar la referencia asociada, **cuando** envía el formulario, **entonces** el sistema impide el guardado y solicita completar los datos obligatorios.<br>**Escenario 3 (Consulta de evidencia):** **Dado** que una evidencia ha sido registrada, **cuando** un supervisor o responsable accede al módulo de documentos y evidencias, **entonces** puede visualizar su estado, fecha de carga y entidad vinculada. | EP10: Documento |
| US15 | Barra de Progreso de Cumplimiento | **Como** jefe de proyecto, **deseo** visualizar el porcentaje de indicadores dentro de la norma **para** medir el avance rápidamente. | **Escenario 1 (Cálculo y visualización de cumplimiento):** **Dado** que el proyecto cuenta con mediciones y controles registrados, **cuando** el usuario accede al panel o resumen de cumplimiento, **entonces** el sistema muestra visualmente el porcentaje de indicadores dentro de los parámetros normativos.<br>**Escenario 2 (Actualización ante nuevas mediciones):** **Dado** que se registra una nueva medición que modifica la proporción de registros en norma, **cuando** se actualiza el panel del proyecto, **entonces** la barra e indicador porcentual reflejan el nuevo valor calculado. | EP06: Dashboard |
| US16 | Feed de Comentarios en Incidencia | **Como** usuario de RoadWatch, **deseo** ver el historial de comentarios de una incidencia **para** entender el contexto de su seguimiento. | **Escenario 1 (Visualización cronológica):** **Dado** que una incidencia posee comentarios de seguimiento, **cuando** el usuario accede al detalle de la incidencia, **entonces** el sistema despliega el listado cronológico indicando autor, rol y fecha de cada anotación.<br>**Escenario 2 (Incidencia sin comentarios previos):** **Dado** que una incidencia recién creada aún no tiene anotaciones, **cuando** el usuario abre su detalle, **entonces** el sistema indica que no existen comentarios registrados y habilita el campo para agregar el primero. | EP04: Incidencia |
| US17 | Alertas y Notificaciones | **Como** usuario de RoadWatch, **deseo** contar con un centro de notificaciones **para** revisar alertas de incumplimientos recientes. | **Escenario 1 (Visualización de alertas activas):** **Dado** que existen mediciones que se acercan o superan los umbrales configurados, **cuando** el usuario ingresa al centro de alertas, **entonces** visualiza las alertas clasificadas por severidad (*Advertencia* o *Crítico*) junto con el punto de monitoreo afectado.<br>**Escenario 2 (Filtrado de alertas por estado o severidad):** **Dado** que el usuario revisa el centro de alertas, **cuando** filtra por nivel de criticidad o proyecto, **entonces** la lista muestra únicamente los eventos que requieren atención prioritaria. | EP03: Alerta |
| US18 | Tabla de Incidencias Críticas | **Como** gerente de cartera de proyectos, **deseo** identificar las incidencias críticas de un vistazo dentro de un listado **para** priorizar su atención. | **Escenario 1 (Destacado de severidad crítica):** **Dado** que existen incidencias con distintos niveles de severidad, **cuando** el usuario consulta la tabla de incidencias críticas, **entonces** el sistema destaca mediante etiquetas visuales, color e iconografía aquellas de severidad alta o crítica.<br>**Escenario 2 (Navegación al expediente de la incidencia):** **Dado** que el gerente o supervisor identifica una incidencia crítica en la tabla, **cuando** selecciona el registro, **entonces** accede al detalle de las acciones de mitigación y evidencias asociadas. | EP04: Incidencia |
| US19 | Selector de Rango de Fechas | **Como** usuario de RoadWatch, **deseo** delimitar un rango de fechas **para** revisar el histórico de mediciones o reportes de un periodo específico. | **Escenario 1 (Filtrado por intervalo válido):** **Dado** que el usuario establece una fecha de inicio y una fecha de fin válidas, **cuando** aplica el filtro temporal, **entonces** el sistema actualiza los registros e indicadores mostrándolos únicamente para dicho periodo.<br>**Escenario 2 (Validación de rango coherente):** **Dado** que el usuario selecciona una fecha final anterior a la fecha inicial, **cuando** intenta aplicar el filtro, **entonces** el sistema advierte la inconsistencia del rango y mantiene la vista consistente. | EP06: Dashboard |
| US20 | Edición Visual de Punto de Monitoreo | **Como** responsable de gestión ambiental, **deseo** editar los datos operativos de un punto de monitoreo **para** actualizar su denominación, ubicación o estado dentro del proyecto. | **Escenario 1 (Actualización de datos del punto):** **Dado** que el usuario con permisos de gestión selecciona un punto de monitoreo existente en el proyecto, **cuando** modifica su nombre, tramo, coordenadas o estado operativo y guarda los cambios, **entonces** el sistema actualiza la información del punto en la interfaz sin recargar la página.<br>**Escenario 2 (Validación de campos obligatorios del punto):** **Dado** que el usuario edita un punto de monitoreo, **cuando** deja vacío el nombre o ingresa coordenadas con formato inválido, **entonces** el sistema impide guardar los cambios y señala los campos requeridos. | EP01: Proyecto |
| US21 | Login Minimalista | **Como** usuario de RoadWatch, **deseo** una interfaz de acceso libre de distracciones **para** reducir la fricción al entrar a la plataforma. | **Escenario 1 (Presentación centrada del acceso):** **Dado** que un usuario sin sesión activa ingresa a la aplicación web, **cuando** se carga la ruta de autenticación, **entonces** el sistema despliega el formulario minimalista de inicio de sesión y selección de perfil por segmento como elemento central.<br>**Escenario 2 (Redirección automática según segmento):** **Dado** que el usuario completa el inicio de sesión desde la interfaz minimalista, **cuando** se valida su perfil, **entonces** el sistema carga la navegación lateral y la vista principal correspondiente a su segmento objetivo. | EP08: Usuario |
| US22 | Vista de Lista de Proyectos | **Como** gerente de cartera de proyectos, **deseo** alternar hacia una vista tabular **para** visualizar mayor cantidad de proyectos simultáneamente. | **Escenario 1 (Cambio a vista de lista):** **Dado** que el usuario se encuentra en el portafolio de proyectos, **cuando** selecciona la opción de visualización en formato lista, **entonces** el sistema presenta los proyectos en filas tabulares mostrando código, tramo, estado ambiental e incidencias abiertas.<br>**Escenario 2 (Persistencia de filtros al alternar vista):** **Dado** que el usuario ha aplicado un filtro o búsqueda sobre el portafolio, **cuando** alterna entre la vista de tarjetas y la vista de lista, **entonces** el sistema conserva los resultados filtrados en ambas presentaciones. | EP01: Proyecto |
| US23 | Selector de Color de Marca | **Como** administrador de cuenta Enterprise, **deseo** definir preferencias visuales y parámetros de suscripción de mi organización **para** reflejar la configuración corporativa en la plataforma. | **Escenario 1 (Actualización de configuración corporativa):** **Dado** que el administrador accede a la sección de configuración y suscripción, **cuando** selecciona una preferencia visual o actualiza los parámetros de su cuenta y guarda los cambios, **entonces** el sistema aplica la configuración y muestra confirmación.<br>**Escenario 2 (Visualización del plan y límites activos):** **Dado** que el usuario consulta el módulo de suscripción, **cuando** se carga la vista, **entonces** visualiza el plan contratado, las cuotas operativas de proyectos/usuarios y el estado actual de su cuenta. | EP09: Suscripción |

---

## 3. RESTful API (Backend & Lógica de Negocio — Sprint 3)

| ID | Título | Descripción | Criterios de Aceptación | Relacionado con |
| :--- | :--- | :--- | :--- | :--- |
| US24 | Auth JWT | **Como** Developer, **deseo** un mecanismo de generación de tokens JWT **para** asegurar todas las peticiones a los endpoints. | **Escenario 1 (Emisión de token):** **Dado** que el cliente envía credenciales válidas al endpoint `POST /api/v1/auth/login`, **cuando** se procesa la solicitud, **entonces** el servicio responde con status `200 OK` y un token JWT junto con el rol y segmento del usuario.<br>**Escenario 2 (Rechazo de petición no autenticada):** **Dado** que un cliente invoca un endpoint protegido sin un token válido, **cuando** el filtro de seguridad evalúa la petición, **entonces** retorna status `401 Unauthorized`. | EP11: API |
| US25 | Swagger / Documentación | **Como** Developer, **deseo** acceder a la documentación interactiva del API **para** integrarme de forma autónoma. | **Escenario 1 (Acceso a OpenAPI):** **Dado** que el Developer realiza una petición `GET` a la ruta de Swagger UI, **cuando** el servicio responde, **entonces** presenta la interfaz interactiva con los endpoints organizados por los 7 Bounded Contexts.<br>**Escenario 2 (Esquemas de solicitud y respuesta):** **Dado** que el Developer inspecciona un endpoint en Swagger, **cuando** despliega su especificación, **entonces** visualiza la estructura de los recursos JSON y los códigos de estado HTTP posibles. | EP11: API |
| US26 | CRUD Proyectos API | **Como** Developer, **deseo** disponer de endpoints GET/POST/PUT/DELETE **para** gestionar la persistencia de los proyectos viales. | **Escenario 1 (Creación de proyecto):** **Dado** que el cliente envía un payload JSON válido vía `POST /api/v1/projects`, **cuando** se procesa la solicitud, **entonces** el sistema persiste el proyecto vial y responde con status `201 Created`.<br>**Escenario 2 (Validación de payload inválido):** **Dado** que el cliente envía datos incompletos al crear o actualizar un proyecto, **cuando** el controlador valida la petición, **entonces** retorna status `400 Bad Request` detallando los errores. | EP01: Proyecto |
| US27 | Endpoint de Registro de Indicador | **Como** Developer, **deseo** un endpoint POST **para** recibir y persistir las mediciones ambientales registradas. | **Escenario 1 (Persistencia de medición):** **Dado** que el cliente envía una petición válida a `POST /api/v1/measurements` indicando punto de monitoreo, variable y valor, **cuando** el servicio la procesa, **entonces** almacena el registro con fecha y hora y retorna status `201 Created`.<br>**Escenario 2 (Punto de monitoreo inexistente):** **Dado** que la medición referencia un punto de monitoreo no registrado, **cuando** se procesa la solicitud, **entonces** el API retorna status `404 Not Found`. | EP02: Indicador |
| US28 | Motor de Comparación Normativa | **Como** Developer, **deseo** que el sistema evalúe cada nueva medición contra sus límites configurados **para** determinar incumplimientos. | **Escenario 1 (Detección de superación de umbral):** **Dado** que ingresa una nueva medición al servicio de monitoreo, **cuando** su valor iguala o supera el umbral crítico configurado, **entonces** el sistema clasifica la medición en estado de incumplimiento y genera la alerta correspondiente.<br>**Escenario 2 (Medición dentro de parámetros):** **Dado** que ingresa una medición cuyo valor se mantiene por debajo del umbral de advertencia, **cuando** es evaluada por el dominio, **entonces** se registra con estado *Óptimo* sin disparar alertas críticas. | EP03: Alerta |
| US29 | Generador Automático de Incidencia | **Como** Developer, **deseo** que el motor de reglas genere o vincule un registro de incidencia **para** tratar un incumplimiento detectado. | **Escenario 1 (Creación de incidencia por incumplimiento):** **Dado** que una medición adquiere el estado de incumplimiento crítico, **cuando** finaliza su evaluación, **entonces** el sistema registra una incidencia asociada al proyecto y punto de monitoreo afectado.<br>**Escenario 2 (Trazabilidad de origen):** **Dado** que se genera la incidencia a partir de una desviación ambiental, **cuando** se consulta el registro creado, **entonces** conserva la referencia a la medición y alerta que la originaron. | EP04: Incidencia |
| US30 | API de Subida de Evidencias | **Como** Developer, **deseo** un endpoint de registro documental **para** almacenar metadatos y archivos de evidencias ambientales. | **Escenario 1 (Registro de evidencia válido):** **Dado** que el cliente envía un archivo y sus metadatos válidos al endpoint de documentos, **cuando** concluye el procesamiento, **entonces** el API retorna status `201 Created` con la referencia del recurso almacenado.<br>**Escenario 2 (Formato o tamaño no permitido):** **Dado** que el cliente intenta adjuntar un archivo con formato no soportado, **cuando** el servicio valida la petición, **entonces** rechaza la carga con status `400 Bad Request`. | EP10: Documento |
| US31 | Paginación de Resultados | **Como** Developer, **deseo** que los endpoints de listados soporten parámetros de paginación **para** optimizar el consumo de red y memoria. | **Escenario 1 (Consulta paginada):** **Dado** que el cliente incluye los parámetros `page` y `size` en la petición `GET`, **cuando** el servicio responde, **entonces** retorna el subconjunto de registros solicitado junto con el total de elementos y páginas.<br>**Escenario 2 (Valores por defecto):** **Dado** que el cliente omite los parámetros de paginación en un listado, **cuando** se ejecuta la consulta, **entonces** el servicio aplica valores predeterminados seguros. | EP11: API |
| US32 | Cifrado de Contraseñas | **Como** Developer, **deseo** que el sistema aplique algoritmos de hashing a las credenciales **para** proteger la información de los usuarios en la base de datos. | **Escenario 1 (Almacenamiento como hash):** **Dado** que se solicita el registro o actualización de credenciales de un usuario, **cuando** el servicio persiste la entidad en base de datos, **entonces** la contraseña se almacena exclusivamente mediante un hash BCrypt irreversible.<br>**Escenario 2 (Verificación en autenticación):** **Dado** que un usuario intenta iniciar sesión, **cuando** el servicio compara la contraseña ingresada contra el hash almacenado, **entonces** valida la coincidencia sin exponer texto plano. | EP08: Usuario |
| US33 | Cálculo de Salud Ambiental del Proyecto | **Como** Developer, **deseo** un endpoint que consolide el porcentaje de indicadores fuera de norma **para** determinar el estado de salud del proyecto. | **Escenario 1 (Determinación de estado crítico):** **Dado** que el cliente solicita el estado ambiental de un proyecto, **cuando** existen alertas o incidencias críticas activas que superan el límite tolerable, **entonces** el API retorna el estado global *Crítico* junto con el porcentaje de cumplimiento.<br>**Escenario 2 (Proyecto en cumplimiento):** **Dado** que todas las mediciones vigentes de un proyecto se encuentran en rango permitido, **cuando** se consulta su resumen, **entonces** el API retorna estado *Óptimo*. | EP06: Dashboard |
| US34 | Tarea Programada de Revisión de Vencimientos | **Como** Developer, **deseo** contar con un proceso de verificación de plazos **para** identificar incidencias pendientes de atención. | **Escenario 1 (Detección de incidencia vencida):** **Dado** que se ejecuta la verificación de plazos sobre las incidencias abiertas, **cuando** el sistema detecta registros que superaron su fecha límite sin mitigación, **entonces** actualiza su indicador de vencimiento y genera una alerta de seguimiento.<br>**Escenario 2 (Incidencias ya resueltas):** **Dado** que una incidencia se encuentra en estado *Cerrada* o *Mitigada*, **cuando** se ejecuta la revisión de vencimientos, **entonces** el proceso la excluye del escalamiento. | EP03: Alerta |
| US35 | Generador de JSON para Reporte de Auditoría | **Como** Developer, **deseo** un endpoint que agregue los datos históricos de un proyecto **para** estructurarlos como fuente de reportes. | **Escenario 1 (Consolidación de datos de auditoría):** **Dado** que el cliente invoca `GET /api/v1/reports/compliance` indicando proyecto y rango de fechas, **cuando** el servicio finaliza la consulta, **entonces** retorna un objeto JSON estructurado con mediciones, incidencias, evidencias y porcentaje de cumplimiento.<br>**Escenario 2 (Proyecto sin registros en el periodo):** **Dado** que no existen mediciones en el intervalo consultado, **cuando** el servicio responde, **entonces** retorna la estructura del reporte con totales en cero sin producir errores de servidor. | EP07: Reporte |
| US36 | Endpoint de Exportación a PDF | **Como** Developer, **deseo** un endpoint de procesamiento que transforme los datos consolidados en un documento descargable **para** su presentación en auditorías. | **Escenario 1 (Generación de documento de reporte):** **Dado** que el usuario o cliente solicita la exportación de un reporte de cumplimiento válido, **cuando** el servicio culmina la generación del documento, **entonces** entrega el recurso listo para su descarga en formato PDF.<br>**Escenario 2 (Solicitud sobre reporte inexistente):** **Dado** que se solicita exportar un reporte con un identificador inválido, **cuando** el servicio valida la petición, **entonces** responde con status `404 Not Found`. | EP07: Reporte |
| US37 | Limitación de Peticiones (Rate Limiting) | **Como** Developer, **deseo** implementar un control de frecuencia de peticiones **para** proteger la estabilidad de los servicios web. | **Escenario 1 (Límite de peticiones excedido):** **Dado** que un cliente supera la cuota máxima de solicitudes permitidas por minuto, **cuando** envía una petición adicional, **entonces** el servidor rechaza la operación devolviendo status `429 Too Many Requests`.<br>**Escenario 2 (Tráfico dentro del umbral):** **Dado** que las peticiones de un cliente se mantienen dentro del rango permitido, **cuando** interactúa con el API, **entonces** las solicitudes se procesan normalmente. | EP11: API |
| US38 | Validación de Umbral por Tipo de Norma | **Como** Developer, **deseo** gestionar los umbrales normativos por variable ambiental **para** evaluar correctamente las mediciones ingresadas en cada monitoreo. | **Escenario 1 (Configuración y aplicación de umbral):** **Dado** que en *Environmental Monitoring* se definen los límites permisibles y preventivos para una variable ambiental (aire, ruido o agua), **cuando** se registra una medición para dicho indicador, **entonces** el sistema utiliza el umbral normativo vigente para evaluar su cumplimiento.<br>**Escenario 2 (Validación de coherencia de umbrales):** **Dado** que se intenta configurar un umbral preventivo mayor al umbral crítico máximo, **cuando** el servicio valida la regla de negocio, **entonces** rechaza la configuración con status `400 Bad Request`. | EP02: Indicador |
| US39 | Gestión de Planes de Suscripción (API) | **Como** Developer, **deseo** validar las cuotas asociadas al plan de suscripción de cada organización **para** controlar la creación de recursos según el plan contratado. | **Escenario 1 (Límite de plan alcanzado):** **Dado** que una organización ha alcanzado el número máximo de proyectos activos permitidos por su plan actual, **cuando** solicita registrar un proyecto adicional, **entonces** el API retorna status `403 Forbidden` informando la necesidad de actualizar su suscripción.<br>**Escenario 2 (Disponibilidad de cuota en el plan):** **Dado** que la organización cuenta con cupos disponibles dentro de su suscripción activa, **cuando** solicita crear el recurso, **entonces** el servicio autoriza la operación. | EP09: Suscripción |

---

## 4. Requerimientos de Negocio Compartidos (Fullstack — Sprints 2 y 3)

| ID | Título | Descripción | Criterios de Aceptación | Relacionado con |
| :--- | :--- | :--- | :--- | :--- |
| US40 | Creación de Proyecto Vial | **Como** jefe de gestión ambiental, **deseo** registrar un proyecto nuevo asignando sus metadatos principales **para** tener su seguimiento en la plataforma. | **Escenario 1 (Registro exitoso de proyecto):** **Dado** que el usuario ingresa código, nombre de la obra, ubicación/tramo, fechas y responsable, **cuando** confirma la creación, **entonces** el sistema almacena el proyecto y lo incorpora al portafolio activo.<br>**Escenario 2 (Código de proyecto duplicado o datos faltantes):** **Dado** que el usuario intenta registrar un proyecto omitiendo datos obligatorios o con un código ya existente, **cuando** envía el formulario, **entonces** el sistema impide el registro y muestra el mensaje de validación correspondiente. | EP01: Proyecto |
| US41 | Registro de Punto de Monitoreo | **Como** supervisor de obra, **deseo** registrar puntos de monitoreo geolocalizados dentro de un proyecto **para** estructurar la toma de mediciones. | **Escenario 1 (Alta de punto de monitoreo):** **Dado** que el usuario selecciona un proyecto activo, **cuando** registra el nombre del punto, tramo/coordenadas y tipo de variable ambiental a controlar, **entonces** el punto queda vinculado al proyecto y habilitado para el registro de mediciones.<br>**Escenario 2 (Validación de ubicación y proyecto):** **Dado** que el usuario intenta crear un punto sin especificar su ubicación o proyecto asociado, **cuando** confirma la acción, **entonces** el sistema solicita completar los campos obligatorios antes de continuar. | EP01: Proyecto |
| US42 | Asignación de Responsable por Proyecto | **Como** gerente de cartera, **deseo** vincular un responsable ambiental a cada proyecto **para** descentralizar la supervisión y garantizar accountability. | **Escenario 1 (Asignación de responsable válida):** **Dado** que existe un proyecto activo y usuarios disponibles en la organización, **cuando** el gerente asigna a un responsable ambiental, **entonces** el sistema actualiza la ficha del proyecto y refleja al responsable en las vistas de portafolio.<br>**Escenario 2 (Cambio de responsable):** **Dado** que un proyecto requiere reasignación operativa, **cuando** el gerente selecciona a un nuevo responsable autorizado, **entonces** el sistema actualiza la asignación manteniendo el historial del proyecto. | EP08: Usuario |
| US43 | Comentarios en Incidencia | **Como** usuario con permisos de lectura/escritura, **deseo** registrar anotaciones en una incidencia **para** mantener la comunicación fluida entre los actores involucrados. | **Escenario 1 (Registro de nuevo comentario):** **Dado** que el usuario visualiza una incidencia activa, **cuando** redacta una observación o actualización y la envía, **entonces** el sistema la agrega al historial de la incidencia con fecha, hora y autor.<br>**Escenario 2 (Comentario vacío):** **Dado** que el usuario intenta enviar un comentario sin contenido de texto, **cuando** presiona el botón de registro, **entonces** el sistema deshabilita o rechaza la acción evitando entradas vacías. | EP04: Incidencia |
| US44 | Salud Ambiental del Portafolio | **Como** gerente de cartera, **deseo** visualizar una métrica consolidada del estado de mis proyectos **para** enfocar mis decisiones preventivas. | **Escenario 1 (Resumen consolidado del portafolio):** **Dado** que la organización gestiona o supervisa múltiples proyectos viales, **cuando** el usuario accede a la vista general del portafolio, **entonces** el sistema presenta indicadores globales de proyectos en estado *Óptimo*, *Advertencia* y *Crítico*.<br>**Escenario 2 (Identificación de proyectos prioritarios):** **Dado** que uno o más proyectos presentan incidencias críticas abiertas, **cuando** se calcula el resumen del portafolio, **entonces** dichos proyectos se destacan para facilitar su revisión inmediata. | EP06: Dashboard |
| US45 | Reporte de Auditoría por Proyecto | **Como** auditor ambiental, **deseo** solicitar la generación de un reporte consolidado por proyecto **para** presentarlo como evidencia ante fiscalización. | **Escenario 1 (Generación de reporte consolidado):** **Dado** que el auditor selecciona un proyecto y el periodo de evaluación, **cuando** solicita generar el reporte de cumplimiento, **entonces** el sistema consolida las mediciones, alertas, incidencias y evidencias del proyecto en una vista estructurada lista para exportar.<br>**Escenario 2 (Filtro por criterios de auditoría):** **Dado** que el auditor desea revisar un alcance específico, **cuando** filtra el reporte por estado de cumplimiento o rango de fechas, **entonces** el reporte actualiza las secciones y métricas mostradas. | EP07: Reporte |
| US46 | Alerta de Incumplimiento Inminente | **Como** responsable ambiental, **deseo** que el sistema advierta cuando un indicador se acerca a su límite máximo normativo **para** tomar acciones preventivas. | **Escenario 1 (Generación de alerta preventiva):** **Dado** que se registra una medición cuyo valor supera el umbral preventivo pero aún no excede el límite máximo normativo, **cuando** el sistema evalúa el registro, **entonces** genera una alerta de nivel *Advertencia* asociada al punto de monitoreo.<br>**Escenario 2 (Visualización diferenciada):** **Dado** que se ha generado una alerta preventiva, **cuando** el responsable consulta el panel o centro de alertas, **entonces** la identifica visualmente con etiqueta de advertencia (amarillo) diferenciada de las alertas críticas (rojo). | EP03: Alerta |
| US47 | Alerta de Incidencia sin Atender | **Como** jefe de gestión ambiental, **deseo** recibir una advertencia si una incidencia permanece sin cambios por un tiempo crítico **para** intervenir operativamente. | **Escenario 1 (Identificación de incidencia pendiente de atención):** **Dado** que una incidencia abierta supera el plazo de atención establecido sin registrar acciones de mitigación, **cuando** se consulta el panel de seguimiento, **entonces** el sistema la resalta como pendiente prioritaria.<br>**Escenario 2 (Actualización tras atención):** **Dado** que el responsable registra una acción de mitigación y actualiza el estado de la incidencia, **cuando** se guarda el avance, **entonces** cesa la condición de inactividad sobre dicho registro. | EP03: Alerta |
| US48 | Eliminación/Archivo de Proyecto | **Como** gerente de cartera, **deseo** archivar los proyectos culminados **para** mantener el entorno de trabajo enfocado en las obras activas. | **Escenario 1 (Archivo de proyecto finalizado):** **Dado** que un proyecto vial ha concluido su etapa de ejecución activa, **cuando** el gerente confirma su cambio de estado a archivado, **entonces** el proyecto se retira del listado operativo principal conservando íntegro su historial para consultas de auditoría.<br>**Escenario 2 (Protección del historial):** **Dado** que un proyecto se encuentra archivado, **cuando** un auditor consulta sus reportes o evidencias históricas, **entonces** toda la información permanece accesible en modo consulta. | EP01: Proyecto |
| US49 | Seguimiento de Indicadores por Proyecto | **Como** responsable ambiental, **deseo** consultar la tendencia histórica de los indicadores **para** visualizar la evolución ambiental de la obra. | **Escenario 1 (Consulta de historial por indicador):** **Dado** que el usuario accede al historial de mediciones de un proyecto, **cuando** selecciona una variable ambiental (PM10, PM2.5, ruido en dB o pH/turbidez), **entonces** el sistema presenta la evolución cronológica de los valores registrados frente a su umbral de referencia.<br>**Escenario 2 (Combinación con filtros de proyecto y fecha):** **Dado** que el usuario revisa la evolución de un indicador, **cuando** acota la consulta por proyecto o periodo, **entonces** la tabla y los indicadores se actualizan con los registros correspondientes. | EP02: Indicador |
| US50 | Visualización de KPIs Ambientales | **Como** auditor ambiental, **deseo** disponer de indicadores clave de rendimiento del proyecto **para** evaluar su desempeño normativo general. | **Escenario 1 (Presentación de KPIs):** **Dado** que el usuario ingresa al panel principal o vista de supervisión, **cuando** se cargan las métricas del proyecto o portafolio, **entonces** visualiza KPIs como porcentaje de cumplimiento normativo, total de alertas activas, incidencias críticas y estado documental.<br>**Escenario 2 (Consistencia con filtros activos):** **Dado** que el usuario filtra la vista por un proyecto específico, **cuando** el sistema recalcula los indicadores, **entonces** los KPIs reflejan los valores exactos de dicho proyecto. | EP06: Dashboard |
| US51 | Actualización Reactiva de Información | **Como** usuario en sesión activa, **deseo** que el sistema refleje de inmediato los nuevos registros realizados en la plataforma **para** operar con información actualizada. | **Escenario 1 (Refresco de estado en interfaz):** **Dado** que el usuario registra una nueva medición, incidencia o documento dentro de la aplicación, **cuando** se confirma la operación, **entonces** las tablas, contadores e indicadores relacionados se actualizan inmediatamente en la vista.<br>**Escenario 2 (Sincronización entre módulos):** **Dado** que se cambia el estado de una incidencia en el tablero Kanban, **cuando** el usuario navega hacia el panel de resumen o listado de incidencias, **entonces** visualiza el estado actualizado de manera consistente. | EP06: Dashboard |
| US52 | Historial de Estados de Incidencia | **Como** auditor ambiental, **deseo** auditar la bitácora de transiciones de estado de una incidencia **para** garantizar la trazabilidad de su resolución. | **Escenario 1 (Consulta de trazabilidad de la incidencia):** **Dado** que una incidencia ha pasado por distintas etapas (*Abierta*, *En proceso*, *Mitigada* / *Cerrada*), **cuando** el auditor consulta su detalle, **entonces** visualiza el registro cronológico de cambios, acciones de mitigación y responsables.<br>**Escenario 2 (Verificación de evidencias de cierre):** **Dado** que una incidencia figura como mitigada o cerrada, **cuando** el auditor revisa su expediente, **entonces** puede verificar las acciones correctivas y evidencias asociadas a su resolución. | EP04: Incidencia |
| US53 | Roles y Permisos | **Como** administrador de cuenta, **deseo** gestionar los niveles de autorización de los miembros de mi equipo **para** adecuar el acceso según el rol y segmento de cada usuario. | **Escenario 1 (Navegación y vistas según rol/segmento):** **Dado** que un usuario inicia sesión en la plataforma, **cuando** el sistema identifica su perfil (Empresa Constructora Vial o Empresa Supervisora / Consultora Ambiental), **entonces** adapta el menú de navegación y habilita únicamente los módulos y acciones permitidos para su rol.<br>**Escenario 2 (Restricción de acciones no autorizadas):** **Dado** que un usuario tiene un rol sin permisos de administración o edición operativa, **cuando** intenta acceder a una acción restringida, **entonces** el sistema bloquea la operación. | EP08: Usuario |
| US54 | Control de Versiones de Documento Normativo | **Como** auditor ambiental, **deseo** que el sistema preserve revisiones sucesivas del mismo documento **para** garantizar la integridad del expediente. | **Escenario 1 (Registro de nueva versión documental):** **Dado** que existe un documento normativo o instrumento de gestión ambiental en el proyecto, **cuando** el usuario autorizado carga una actualización del documento, **entonces** el sistema registra la nueva versión manteniendo la referencia del historial previo.<br>**Escenario 2 (Consulta de estado y versión vigente):** **Dado** que el auditor revisa el repositorio de documentos normativos, **cuando** inspecciona un expediente, **entonces** identifica claramente el número de versión vigente, su fecha de actualización y estado de validación. | EP10: Documento |
| US55 | Búsqueda Global de Proyectos/Incidencias | **Como** usuario de la plataforma, **deseo** utilizar un buscador por texto o código **para** localizar rápidamente proyectos, puntos de monitoreo, incidencias o documentos. | **Escenario 1 (Búsqueda con coincidencias):** **Dado** que el usuario ingresa un nombre, código o palabra clave en la barra de búsqueda de un módulo, **cuando** se ejecuta el filtrado, **entonces** el sistema muestra únicamente los registros que coinciden con el criterio ingresado.<br>**Escenario 2 (Búsqueda sin resultados):** **Dado** que el término ingresado no coincide con ningún registro existente, **cuando** se procesa la consulta, **entonces** el sistema muestra un mensaje claro indicando que no se encontraron coincidencias y permite limpiar el filtro. | EP01: Proyecto |
| US56 | Documentos Obligatorios por Hito Normativo | **Como** auditor ambiental, **deseo** verificar los requisitos documentales obligatorios de cada proyecto **para** estandarizar el proceso de supervisión y fiscalización. | **Escenario 1 (Verificación de documentos requeridos):** **Dado** que un proyecto tiene definidos documentos normativos y evidencias requeridas, **cuando** el usuario accede a la vista de documentos obligatorios, **entonces** visualiza el estado de cada entregable (*Vigente*, *Pendiente* u *Observado*).<br>**Escenario 2 (Advertencia por documentos pendientes):** **Dado** que un proyecto mantiene documentos obligatorios sin adjuntar o vencidos, **cuando** se evalúa su estado de cumplimiento documental, **entonces** el sistema refleja los pendientes requeridos para auditoría. | EP10: Documento |
| US57 | Upgrade/Downgrade de Plan | **Como** administrador de cuenta, **deseo** modificar los parámetros de mi suscripción comercial **para** ajustar las capacidades operativas a la demanda actual de la empresa. | **Escenario 1 (Actualización de plan de suscripción):** **Dado** que el administrador accede al módulo de gestión de suscripción, **cuando** selecciona un nuevo plan comercial (Base, Profesional o Enterprise) y confirma la actualización, **entonces** el sistema actualiza el plan activo y refleja los nuevos límites operativos.<br>**Escenario 2 (Validación al reducir de plan):** **Dado** que la organización intenta cambiar a un plan inferior cuyo límite es menor a la cantidad de recursos actualmente activos, **cuando** solicita el cambio, **entonces** el sistema advierte la restricción de cuota antes de aplicar la modificación. | EP09: Suscripción |

---

### 3.2. Impact Mapping
<a id="3-2-impact-mapping"></a>

## IMPACT MAPPING 1

El Impact Mapping correspondiente al segmento de empresas constructoras viales permite visualizar la relación entre el objetivo de negocio, la persona representativa, los impactos esperados, los entregables y las historias de usuario asociadas. El objetivo se orienta a reducir el tiempo promedio de respuesta ante desviaciones de parámetros ambientales, mediante la detección oportuna de riesgos, el seguimiento oportuno de las mediciones ambientales, la generación de alertas tempranas, el seguimiento de acciones correctivas y la centralización de evidencias ambientales trazables.

![Impact Mapping - Segmento 1](<assets/images/chapter3/Impact map Empresas Constructoras Viales.png>)

## IMPACT MAPPING 2

El Impact Mapping correspondiente al segmento de empresas supervisoras ambientales y consultoras permite relacionar el objetivo de negocio con las necesidades de fiscalización y auditoría. El objetivo se orienta a disminuir el tiempo requerido para estructurar y validar expedientes de auditoría ambiental, mediante la supervisión centralizada de múltiples proyectos, la identificación de riesgos críticos, la consulta de información histórica inalterable y trazable, la generación automatizada de reportes y la organización de documentación normativa.

![Impact Mapping - Segmento 2](<assets/images/chapter3/Impact map Empresas Supervisoras Ambientales _ Consultoras.png>)

## 3.3. Product Backlog
<a id="3-3-product-backlog"></a>

A continuación, se presenta el **Product Backlog** priorizado de **RoadWatch OS**, manteniendo la trazabilidad directa entre el orden de prioridad, el código de cada *User Story*, su *Epic* asociada, el *Bounded Context* correspondiente y su estimación en *Story Points*:

| # Orden | User Story Id | Epic | Bounded Context | Título | Descripción | Story Points (1/2/3/5/8) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | US03 | EP09: Suscripción | Subscription Management | Explicación de Planes (Landing) | Como visitante del segmento constructora, deseo comparar los planes Base, Profesional y Enterprise para elegir el que se ajuste a mi empresa. | 3 |
| 2 | US04 | EP08: Usuario | Identity & Access Management | CTA Segmento Consultora (Landing) | Como visitante del segmento consultora, deseo una llamada a la acción clara para probar la plataforma para evaluar si resuelve mi problema de monitoreo. | 2 |
| 3 | US05 | EP06: Dashboard | Reports & Compliance Management | CTA Segmento Empresa Multi-Proyecto (Landing) | Como visitante con múltiples proyectos, deseo una ruta dirigida a la gestión multi-proyecto para acceder a la vista correspondiente. | 2 |
| 4 | US08 | EP09: Suscripción | Subscription Management | Formulario de Contacto Comercial (Landing) | Como visitante del segmento corporativo, deseo dejar mis datos de contacto para recibir una propuesta personalizada. | 2 |
| 5 | US02 | EP05: Mapa | Project Management | Demo de Tablero Geolocalizado (Landing) | Como visitante del segmento consultora, deseo ver una vista previa del mapa de indicadores para entender cómo se visualizaría mi obra. | 3 |
| 6 | US06 | EP07: Reporte | Reports & Compliance Management | Caso de Uso / Testimonio (Landing) | Como visitante del landing page, deseo visualizar casos de éxito o métricas de impacto para confiar en la efectividad de la plataforma. | 2 |
| 7 | US40 | EP01: Proyecto | Project Management | Creación de Proyecto Vial | Como jefe de gestión ambiental, deseo registrar un proyecto nuevo asignando sus metadatos principales para tener su seguimiento en la plataforma. | 3 |
| 8 | US26 | EP01: Proyecto | Project Management | CRUD Proyectos API | Como Developer, deseo disponer de endpoints GET/POST/PUT/DELETE para gestionar la persistencia de los proyectos viales. | 5 |
| 9 | US41 | EP01: Proyecto | Project Management | Registro de Punto de Monitoreo | Como supervisor de obra, deseo registrar puntos de monitoreo geolocalizados dentro de un proyecto para estructurar la toma de mediciones. | 5 |
| 10 | US27 | EP02: Indicador | Environmental Monitoring | Endpoint de Registro de Indicador | Como Developer, deseo un endpoint POST para recibir y persistir las mediciones ambientales registradas. | 5 |
| 11 | US09 | EP02: Indicador | Environmental Monitoring | Formulario de Registro de Indicador | Como responsable de gestión ambiental, deseo llenar un formulario validado para registrar mediciones sin enviar errores al servidor. | 3 |
| 12 | US28 | EP03: Alerta | Environmental Monitoring | Motor de Comparación Normativa | Como Developer, deseo que el sistema evalúe cada nueva medición contra sus límites configurados para determinar incumplimientos. | 8 |
| 13 | US12 | EP05: Mapa | Project Management | Vista de Mapa Interactivo | Como responsable de gestión ambiental, deseo ver un mapa con la ubicación de puntos de monitoreo para identificar zonas críticas rápidamente. | 8 |
| 14 | US10 | EP06: Dashboard | Project Management | Tarjetas de Proyecto (Cards) | Como usuario de RoadWatch, deseo visualizar resúmenes individuales de cada proyecto para entender su estado ambiental de un vistazo. | 3 |
| 15 | US21 | EP08: Usuario | Identity & Access Management | Login Minimalista | Como usuario de RoadWatch, deseo una interfaz de acceso libre de distracciones para reducir la fricción al entrar a la plataforma. | 2 |
| 16 | US01 | EP08: Usuario | Identity & Access Management | Autenticación | Como usuario registrado, deseo poder iniciar sesión para acceder a mi cuenta y perfil según mi organización. | 2 |
| 17 | US24 | EP11: API | Identity & Access Management | Auth JWT | Como Developer, deseo un mecanismo de generación de tokens JWT para asegurar todas las peticiones a los endpoints. | 5 |
| 18 | US32 | EP08: Usuario | Identity & Access Management | Cifrado de Contraseñas | Como Developer, deseo que el sistema aplique algoritmos de hashing a las credenciales para proteger la información de los usuarios en la base de datos. | 3 |
| 19 | US29 | EP04: Incidencia | Incident & Mitigation Management | Generador Automático de Incidencia | Como Developer, deseo que el motor de reglas genere un ticket automático para aislar y tratar un incumplimiento detectado. | 5 |
| 20 | US11 | EP04: Incidencia | Incident & Mitigation Management | Tablero Kanban de Incidencias | Como responsable de gestión ambiental, deseo mover incidencias entre diferentes estados para gestionar mi flujo de trabajo. | 8 |
| 21 | US33 | EP06: Dashboard | Reports & Compliance Management | Cálculo de Salud Ambiental del Proyecto | Como Developer, deseo un endpoint que consolide el porcentaje de indicadores fuera de norma para determinar el estado de salud del proyecto. | 3 |
| 22 | US15 | EP06: Dashboard | Reports & Compliance Management | Barra de Progreso de Cumplimiento | Como jefe de proyecto, deseo visualizar el porcentaje de indicadores dentro de la norma para medir el avance rápidamente. | 2 |
| 23 | US44 | EP06: Dashboard | Reports & Compliance Management | Salud Ambiental del Portafolio | Como gerente de cartera, deseo visualizar una métrica consolidada del estado de mis proyectos para enfocar mis decisiones preventivas. | 5 |
| 24 | US50 | EP06: Dashboard | Reports & Compliance Management | Visualización de KPIs Ambientales | Como auditor ambiental, deseo disponer de indicadores clave de rendimiento del proyecto para evaluar su desempeño normativo general. | 5 |
| 25 | US38 | EP02: Indicador | Environmental Monitoring | Validación de Umbral por Tipo de Norma | Como Developer, deseo gestionar los umbrales normativos por variable ambiental para evaluar correctamente las mediciones ingresadas en cada monitoreo. | 5 |
| 26 | US42 | EP08: Usuario | Project Management | Asignación de Responsable por Proyecto | Como gerente de cartera, deseo vincular un responsable ambiental a cada proyecto para descentralizar la supervisión y garantizar accountability. | 3 |
| 27 | US22 | EP01: Proyecto | Project Management | Vista de Lista de Proyectos | Como gerente de cartera de proyectos, deseo alternar hacia una vista tabular para visualizar mayor cantidad de proyectos simultáneamente. | 2 |
| 28 | US53 | EP08: Usuario | Identity & Access Management | Roles y Permisos | Como administrador de cuenta, deseo gestionar los niveles de autorización de los miembros de mi equipo para adecuar el acceso según el rol y segmento de cada usuario. | 8 |
| 29 | US18 | EP04: Incidencia | Incident & Mitigation Management | Tabla de Incidencias Críticas | Como gerente de cartera de proyectos, deseo identificar las incidencias críticas de un vistazo dentro de un listado para priorizar su atención. | 2 |
| 30 | US13 | EP02: Indicador | Environmental Monitoring | Filtro por Tipo de Indicador | Como responsable de gestión ambiental, deseo filtrar la información por tipo de indicador (aire, ruido, agua) para enfocar mi revisión. | 2 |
| 31 | US49 | EP02: Indicador | Environmental Monitoring | Seguimiento de Indicadores por Proyecto | Como responsable ambiental, deseo consultar la tendencia histórica de los indicadores para visualizar la evolución ambiental de la obra. | 5 |
| 32 | US19 | EP06: Dashboard | Reports & Compliance Management | Selector de Rango de Fechas | Como usuario de RoadWatch, deseo delimitar un rango de fechas para revisar el histórico de mediciones o reportes de un periodo específico. | 3 |
| 33 | US43 | EP04: Incidencia | Incident & Mitigation Management | Comentarios en Incidencia | Como usuario con permisos de lectura/escritura, deseo registrar anotaciones en una incidencia para mantener la comunicación fluida entre los actores involucrados. | 3 |
| 34 | US16 | EP04: Incidencia | Incident & Mitigation Management | Feed de Comentarios en Incidencia | Como usuario de RoadWatch, deseo ver el historial de comentarios de una incidencia para entender el contexto de su seguimiento. | 3 |
| 35 | US14 | EP10: Documento | Document & Evidence Management | Adjuntar Evidencia Fotográfica | Como responsable de gestión ambiental, deseo adjuntar archivos fotográficos o documentales para respaldar una medición o acción de mitigación. | 3 |
| 36 | US30 | EP10: Documento | Document & Evidence Management | API de Subida de Evidencias | Como Developer, deseo un endpoint de registro documental para almacenar metadatos y archivos de evidencias ambientales. | 5 |
| 37 | US20 | EP01: Proyecto | Project Management | Edición Visual de Punto de Monitoreo | Como responsable de gestión ambiental, deseo editar los datos operativos de un punto de monitoreo para actualizar su denominación, ubicación o estado dentro del proyecto. | 2 |
| 38 | US48 | EP01: Proyecto | Project Management | Eliminación/Archivo de Proyecto | Como gerente de cartera, deseo archivar los proyectos culminados para mantener el entorno de trabajo enfocado en las obras activas. | 3 |
| 39 | US51 | EP06: Dashboard | Reports & Compliance Management | Actualización Reactiva de Información | Como usuario en sesión activa, deseo que el sistema refleje de inmediato los nuevos registros realizados en la plataforma para operar con información actualizada. | 8 |
| 40 | US46 | EP03: Alerta | Environmental Monitoring | Alerta de Incumplimiento Inminente | Como responsable ambiental, deseo que el sistema advierta cuando un indicador se acerca a su límite máximo normativo para tomar acciones preventivas. | 5 |
| 41 | US47 | EP03: Alerta | Environmental Monitoring | Alerta de Incidencia sin Atender | Como jefe de gestión ambiental, deseo recibir una advertencia si una incidencia permanece sin cambios por un tiempo crítico para intervenir operativamente. | 3 |
| 42 | US17 | EP03: Alerta | Environmental Monitoring | Alertas y Notificaciones | Como usuario de RoadWatch, deseo contar con un centro de notificaciones para revisar alertas de incumplimientos recientes. | 2 |
| 43 | US34 | EP03: Alerta | Incident & Mitigation Management | Tarea Programada de Revisión de Vencimientos | Como Developer, deseo contar con un proceso de verificación de plazos para identificar incidencias pendientes de atención. | 3 |
| 44 | US52 | EP04: Incidencia | Incident & Mitigation Management | Historial de Estados de Incidencia | Como auditor ambiental, deseo auditar la bitácora de transiciones de estado de una incidencia para garantizar la trazabilidad de su resolución. | 3 |
| 45 | US54 | EP10: Documento | Document & Evidence Management | Control de Versiones de Documento Normativo | Como auditor ambiental, deseo que el sistema preserve revisiones sucesivas del mismo documento para garantizar la integridad del expediente. | 8 |
| 46 | US56 | EP10: Documento | Document & Evidence Management | Documentos Obligatorios por Hito Normativo | Como auditor ambiental, deseo verificar los requisitos documentales obligatorios de cada proyecto para estandarizar el proceso de supervisión y fiscalización. | 3 |
| 47 | US35 | EP07: Reporte | Reports & Compliance Management | Generador de JSON para Reporte de Auditoría | Como Developer, deseo un endpoint que agregue los datos históricos de un proyecto para estructurarlos como fuente de reportes. | 5 |
| 48 | US36 | EP07: Reporte | Reports & Compliance Management | Endpoint de Exportación a PDF | Como Developer, deseo un endpoint de procesamiento que transforme los datos consolidados en un documento descargable para su presentación en auditorías. | 5 |
| 49 | US45 | EP07: Reporte | Reports & Compliance Management | Reporte de Auditoría por Proyecto | Como auditor ambiental, deseo solicitar la generación de un reporte consolidado por proyecto para presentarlo como evidencia ante fiscalización. | 3 |
| 50 | US55 | EP01: Proyecto | Project Management | Búsqueda Global de Proyectos/Incidencias | Como usuario de la plataforma, deseo utilizar un buscador por texto o código para localizar rápidamente proyectos, puntos de monitoreo, incidencias o documentos. | 5 |
| 51 | US25 | EP11: API | Cross-Cutting / RESTful API | Swagger / Documentación | Como Developer, deseo acceder a la documentación interactiva del API para integrarme de forma autónoma. | 2 |
| 52 | US39 | EP09: Suscripción | Subscription Management | Gestión de Planes de Suscripción (API) | Como Developer, deseo validar las cuotas asociadas al plan de suscripción de cada organización para controlar la creación de recursos según el plan contratado. | 5 |
| 53 | US57 | EP09: Suscripción | Subscription Management | Upgrade/Downgrade de Plan | Como administrador de cuenta, deseo modificar los parámetros de mi suscripción comercial para ajustar las capacidades operativas a la demanda actual de la empresa. | 5 |
| 54 | US23 | EP09: Suscripción | Subscription Management | Selector de Color de Marca | Como administrador de cuenta Enterprise, deseo definir preferencias visuales y parámetros de suscripción de mi organización para reflejar la configuración corporativa en la plataforma. | 5 |
| 55 | US07 | EP03: Alerta | Environmental Monitoring | Notificaciones Push Landing | Como visitante del landing page, deseo aceptar notificaciones del navegador para recibir novedades sin ingresar a la plataforma. | 5 |
| 56 | US31 | EP11: API | Cross-Cutting / RESTful API | Paginación de Resultados | Como Developer, deseo que los endpoints de listados soporten parámetros de paginación para optimizar el consumo de red y memoria. | 3 |
| 57 | US37 | EP11: API | Cross-Cutting / RESTful API | Limitación de Peticiones (Rate Limiting) | Como Developer, deseo implementar un control de frecuencia de peticiones para proteger la estabilidad de los servicios web. | 5 |

---

# Product Design
<a id="4-product-design"></a>

## 4.1. Style Guidelines.
<a id="4-1-style-guidelines"></a>

Los lineamientos visuales de RoadWatch OS buscan mantener una interfaz clara, ordenada y consistente para los usuarios que realizan actividades de gestión y supervisión ambiental en proyectos viales.

El diseño considera que la plataforma será utilizada tanto desde computadoras como desde dispositivos móviles mediante una interfaz web responsiva. Por ello, se prioriza la legibilidad de la información, la facilidad de navegación y la identificación rápida de mediciones, alertas e incidencias.

### 4.1.1. General Style Guidelines.
<a id="4-1-1-general-style-guidelines"></a>

En esta sección se definen los principales elementos visuales utilizados en RoadWatch OS, incluyendo colores, tipografía, identidad visual, espaciado y tono de comunicación.

Las decisiones de diseño buscan transmitir orden, confianza y relación con el monitoreo ambiental, manteniendo una apariencia sencilla que permita trabajar con información técnica sin sobrecargar la pantalla.

### Colores

![Colores - RoadWatch OS](assets/images/Colours.png)

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

![Wireframe Hero Desktop](assets/images/heroDesktop.png)

**Wireframe del Hero Section – Desktop Web Browser.**

La primera sección presenta el nombre del producto, su propuesta general y los principales llamados a la acción.

![Wireframe Funcionalidades Desktop](assets/images/funcionalidadesDesktop.png)

**Wireframe de funcionalidades – Desktop Web Browser.**

Las funcionalidades se presentan en bloques independientes para facilitar la comprensión de los principales componentes de RoadWatch OS.

![Wireframe Planes Desktop](assets/images/planesDesktop.png)

**Wireframe de opciones comerciales – Desktop Web Browser.**

Esta sección presenta las opciones comerciales consideradas en el diseño de la Landing Page. Su contenido podrá ajustarse de acuerdo con el modelo de negocio finalmente validado por el equipo.

![Wireframe Equipo Desktop](assets/images/equipo.png)

**Wireframe de equipo – Desktop Web Browser.**

La sección de equipo presenta a los integrantes de VíaNexo y permite reforzar la identificación del startup responsable del producto.

#### Landing Page Mobile

La versión Mobile mantiene la misma arquitectura general y reorganiza los componentes principalmente en sentido vertical.

![Wireframe Hero Mobile](assets/images/hero.png)

**Wireframe del Hero Section – Mobile Web Browser.**

![Wireframe Acerca del Proyecto](assets/images/AcercaDelProyecto.png)

**Wireframe de Acerca del Proyecto – Mobile Web Browser.**

![Wireframe Beneficios Mobile](assets/images/beneficios.png)

**Wireframe de beneficios – Mobile Web Browser.**

![Wireframe Funcionalidades Mobile](assets/images/funcionalidades.png)

**Wireframe de funcionalidades – Mobile Web Browser.**

![Wireframe Cómo Funciona Mobile](assets/images/ComoFunciona.png)

**Wireframe de Cómo Funciona – Mobile Web Browser.**

![Wireframe Equipo y Planes Mobile](assets/images/equipo%20y%20planes.png)

**Wireframe de Equipo y opciones comerciales – Mobile Web Browser.**

La propuesta aplica jerarquía visual, proximidad, consistencia y simplicidad. También considera tamaños adecuados para elementos interactivos, separación suficiente entre componentes y una organización que no depende únicamente del color para transmitir información.

### 4.3.2. Landing Page Mock-up.
<a id="4-3-2-landing-page-mock-up"></a>

Los mock-ups representan la propuesta visual de alta fidelidad de la Landing Page e incorporan la paleta, tipografía, iconografía y componentes definidos en los lineamientos de estilo.

#### Landing Page Mock-up Web

![Landing Page Mock-up Web](assets/images/chapter4/landing/landing-web.png)

**Mock-up de la Landing Page – Desktop Web Browser.**

La versión Web presenta una navegación principal, un bloque inicial con la propuesta de valor de RoadWatch OS, información sobre el problema que se busca resolver, beneficios, funcionalidades, explicación general del funcionamiento, información del equipo y medios de contacto.

La comunicación se orienta a los dos segmentos objetivo del proyecto: empresas constructoras viales y empresas supervisoras o consultoras ambientales.

#### Landing Page Mock-up Mobile

![Landing Page Mock-up Mobile](assets/images/chapter4/landing/landing-mobile.png)

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

![Wireframe - Login Desktop](assets/images/chapter4/webapp/wireframes/login.png)

![Wireframe - Dashboard Operativo Desktop](assets/images/chapter4/webapp/wireframes/c-dashboard.png)

![Wireframe - Centro de Alertas Desktop](assets/images/chapter4/webapp/wireframes/c-alertas.png)

![Wireframe - Kanban de Incidencias Desktop](assets/images/chapter4/webapp/wireframes/c-incidencias.png)

![Wireframe - Detalle de Incidencia Desktop](assets/images/chapter4/webapp/wireframes/c-incidencia-detalle.png)

![Wireframe - Registrar Medición Desktop](assets/images/chapter4/webapp/wireframes/c-registrar-medicion.png)

![Wireframe - Puntos de Monitoreo Desktop](assets/images/chapter4/webapp/wireframes/c-puntos.png)

#### Empresas Supervisoras y Consultoras Ambientales – Desktop

![Wireframe - Portafolio Tarjetas Desktop](assets/images/chapter4/webapp/wireframes/s-portafolio.png)

![Wireframe - Portafolio Lista Desktop](assets/images/chapter4/webapp/wireframes/s-portafolio-lista.png)

![Wireframe - Incidencias Críticas Desktop](assets/images/chapter4/webapp/wireframes/s-criticas.png)

![Wireframe - Historial de Mediciones Desktop](assets/images/chapter4/webapp/wireframes/s-historial.png)

![Wireframe - Reporte de Auditoría Desktop](assets/images/chapter4/webapp/wireframes/s-reporte.png)

![Wireframe - Documentos Normativos Desktop](assets/images/chapter4/webapp/wireframes/s-documentos.png)

![Wireframe - Configuración Desktop](assets/images/chapter4/webapp/wireframes/s-configuracion.png)

#### Web Applications Mobile

| Login | Dashboard | Alertas | Evidencia |
| :---: | :---: | :---: | :---: |
| ![Wireframe - Login Mobile](assets/images/chapter4/webapp/wireframes/m-login.png) | ![Wireframe - Dashboard Mobile](assets/images/chapter4/webapp/wireframes/m-c-dashboard.png) | ![Wireframe - Alertas Mobile](assets/images/chapter4/webapp/wireframes/m-c-alertas.png) | ![Wireframe - Evidencia Mobile](assets/images/chapter4/webapp/wireframes/m-c-evidencia.png) |

| Medición | Portafolio | Historial | Reporte |
| :---: | :---: | :---: | :---: |
| ![Wireframe - Medición Mobile](assets/images/chapter4/webapp/wireframes/m-c-medicion.png) | ![Wireframe - Portafolio Mobile](assets/images/chapter4/webapp/wireframes/m-s-portafolio.png) | ![Wireframe - Mediciones Mobile](assets/images/chapter4/webapp/wireframes/m-s-historial.png) | ![Wireframe - Reporte Mobile](assets/images/chapter4/webapp/wireframes/m-s-reporte.png) |

### 4.4.2. Web Applications Wireflow Diagrams.
<a id="4-4-2-web-applications-wireflow-diagrams"></a>

Los Wireflow Diagrams relacionan los wireframes con las acciones realizadas por el usuario durante un flujo determinado.

#### Empresas Constructoras Viales – Web

**User goal:** revisar una alerta ambiental y realizar su seguimiento.

![Wireflow - Constructora Web](assets/images/chapter4/webapp/wireflows/wireflow-constructora-web.png)

El flujo representa el ingreso del usuario, la consulta del panel principal, la revisión de una alerta o incidencia y las acciones necesarias para continuar su seguimiento.

#### Empresas Constructoras Viales – Mobile

**User goal:** registrar información ambiental y evidencias desde campo.

![Wireflow - Constructora Mobile](assets/images/chapter4/webapp/wireflows/wireflow-constructora-mobile.png)

La versión móvil prioriza tareas que pueden realizarse durante el trabajo de campo, como revisar alertas, registrar mediciones y adjuntar evidencia.

#### Empresas Supervisoras y Consultoras Ambientales – Web

**User goal:** revisar el estado de un proyecto y consultar la información necesaria para su supervisión.

![Wireflow - Supervisora Web](assets/images/chapter4/webapp/wireflows/wireflow-supervisora-web.png)

El flujo permite revisar el portafolio, consultar incidencias y mediciones y acceder a la información necesaria para elaborar o consultar reportes.

#### Empresas Supervisoras y Consultoras Ambientales – Mobile

**User goal:** consultar rápidamente el estado de los proyectos supervisados.

![Wireflow - Supervisora Mobile](assets/images/chapter4/webapp/wireflows/wireflow-supervisora-mobile.png)

El flujo móvil facilita la consulta del portafolio, las mediciones recientes y los reportes disponibles.

### 4.4.3. Web Applications Mock-ups.
<a id="4-4-3-web-applications-mock-ups"></a>

Los mock-ups representan la versión de alta fidelidad de las pantallas y aplican los lineamientos visuales definidos para RoadWatch OS.

#### Empresas Constructoras Viales – Desktop

![Mockup - Login Desktop](assets/images/chapter4/webapp/mockups/login.png)

![Mockup - Dashboard Operativo Desktop](assets/images/chapter4/webapp/mockups/c-dashboard.png)

![Mockup - Centro de Alertas Desktop](assets/images/chapter4/webapp/mockups/c-alertas.png)

![Mockup - Detalle de Incidencia Desktop](assets/images/chapter4/webapp/mockups/c-incidencia-detalle.png)

![Mockup - Kanban de Incidencias Desktop](assets/images/chapter4/webapp/mockups/c-incidencias.png)

![Mockup - Registrar Medición Desktop](assets/images/chapter4/webapp/mockups/c-registrar-medicion.png)

![Mockup - Puntos de Monitoreo Desktop](assets/images/chapter4/webapp/mockups/c-puntos.png)

Estas vistas permiten al usuario consultar el estado de sus proyectos, revisar alertas e incidencias, registrar información ambiental y mantener evidencias relacionadas con el seguimiento realizado.

#### Empresas Supervisoras y Consultoras Ambientales – Desktop

![Mockup - Portafolio Tarjetas Desktop](assets/images/chapter4/webapp/mockups/s-portafolio.png)

![Mockup - Portafolio Lista Desktop](assets/images/chapter4/webapp/mockups/s-portafolio-lista.png)

![Mockup - Incidencias Críticas Desktop](assets/images/chapter4/webapp/mockups/s-criticas.png)

![Mockup - Historial de Mediciones Desktop](assets/images/chapter4/webapp/mockups/s-historial.png)

![Mockup - Reporte Desktop](assets/images/chapter4/webapp/mockups/s-reporte.png)

![Mockup - Documentos Desktop](assets/images/chapter4/webapp/mockups/s-documentos.png)

![Mockup - Configuración Desktop](assets/images/chapter4/webapp/mockups/s-configuracion.png)

Estas vistas permiten revisar el estado de los proyectos supervisados, consultar mediciones e incidencias, revisar evidencias y acceder a información de seguimiento y reportes.

#### Mobile – Empresas Constructoras Viales

| Login | Dashboard | Alertas | Evidencia | Medición |
| :---: | :---: | :---: | :---: | :---: |
| ![Mockup - Login Mobile](assets/images/chapter4/webapp/mockups/m-login.png) | ![Mockup - Dashboard Mobile](assets/images/chapter4/webapp/mockups/m-c-dashboard.png) | ![Mockup - Alertas Mobile](assets/images/chapter4/webapp/mockups/m-c-alertas.png) | ![Mockup - Evidencia Mobile](assets/images/chapter4/webapp/mockups/m-c-evidencia.png) | ![Mockup - Medición Mobile](assets/images/chapter4/webapp/mockups/m-c-medicion.png) |

#### Mobile – Empresas Supervisoras y Consultoras Ambientales

| Portafolio | Mediciones | Reporte |
| :---: | :---: | :---: |
| ![Mockup - Portafolio Mobile](assets/images/chapter4/webapp/mockups/m-s-portafolio.png) | ![Mockup - Mediciones Mobile](assets/images/chapter4/webapp/mockups/m-s-historial.png) | ![Mockup - Reporte Mobile](assets/images/chapter4/webapp/mockups/m-s-reporte.png) |

### 4.4.4. Web Applications User Flow Diagrams.
<a id="4-4-4-web-applications-user-flow-diagrams"></a>

Los User Flow Diagrams representan los recorridos que siguen los usuarios para alcanzar objetivos concretos e incluyen tanto el flujo esperado como las decisiones y rutas alternativas relevantes.

#### Empresas Constructoras Viales

**User goal Web:** revisar una alerta o incidencia y realizar el seguimiento correspondiente.

![User Flow - Constructora Web](assets/images/chapter4/webapp/userflows/userflow-constructora-web.png)

**User goal Mobile:** registrar una medición o evidencia desde campo y comprobar que la información fue registrada.

![User Flow - Constructora Mobile](assets/images/chapter4/webapp/userflows/userflow-constructora-mobile.png)

#### Empresas Supervisoras y Consultoras Ambientales

**User goal Web:** revisar un proyecto supervisado, consultar sus incidencias y mediciones y acceder al reporte correspondiente.

![User Flow - Supervisora Web](assets/images/chapter4/webapp/userflows/userflow-supervisora-web.png)

**User goal Mobile:** consultar los proyectos que requieren atención y acceder rápidamente a sus mediciones y reportes.

![User Flow - Supervisora Mobile](assets/images/chapter4/webapp/userflows/userflow-supervisora-mobile.png)

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

![Prototipo - Constructora Web](assets/images/chapter4/webapp/prototype/prototipo-constructora-web.gif)

**Prototipo · Empresas Supervisoras y Consultoras Ambientales (Web)**

![Prototipo - Supervisora Web](assets/images/chapter4/webapp/prototype/prototipo-supervisora-web.gif)

| Prototipo · Constructora (Mobile) | Prototipo · Supervisora / Consultora (Mobile) |
| :---: | :---: |
| ![Prototipo - Constructora Mobile](assets/images/chapter4/webapp/prototype/prototipo-constructora-mobile.gif) | ![Prototipo - Supervisora Mobile](assets/images/chapter4/webapp/prototype/prototipo-supervisora-mobile.gif) |


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
  <img src="assets/images/EventStorming-global.png" alt="RoadWatch OS - Global EventStorming">
  <br><sub><em>Figura 1. Mapa global del Design-Level EventStorming de RoadWatch OS: los siete Bounded Contexts y sus relaciones (flechas punteadas numeradas 1 a 7).</em></sub>
</div>

El mapa global agrupa en un marco cada Bounded Context. Las flechas continuas muestran el flujo dentro de un contexto; las flechas punteadas numeradas, las relaciones entre contextos (queries síncronas, eventos y referencias por ID), explicadas en la leyenda de la figura.

**EventStorming por Bounded Context**

Cada contexto se detalla en su propio diagrama (actores → commands → aggregates → eventos → policies → read models):

<div align="center">
  <img src="assets/images/BC1-IdentityAccess.png" alt="BC1-IdentityAccess">
  <br><sub><em>Figura 2. Bounded Context 1 – Identity & Access Management: registro de usuarios, roles, permisos y autenticación.</em></sub>
</div>

<div align="center">
  <img src="assets/images/BC2-Subscription.png" alt="BC2-Subscription">
  <br><sub><em>Figura 3. Bounded Context 2 – Subscription Management: selección, activación, cambio y cancelación de planes de suscripción.</em></sub>
</div>

<div align="center">
  <img src="assets/images/BC3-ProjectManagement.png" alt="BC3-ProjectManagement">
  <br><sub><em>Figura 4. Bounded Context 3 – Project Management: proyectos viales, responsables y puntos de monitoreo (con validación de ubicación mediante Maps & Geolocation Service).</em></sub>
</div>

<div align="center">
  <img src="assets/images/BC4-EnvironmentalMonitoring.png" alt="BC4-EnvironmentalMonitoring">
  <br><sub><em>Figura 5. Bounded Context 4 – Environmental Monitoring: registro de mediciones, evaluación frente a umbrales normativos y generación de alertas.</em></sub>
</div>

<div align="center">
  <img src="assets/images/BC5-IncidentMitigation.png" alt="BC5-IncidentMitigation">
  <br><sub><em>Figura 6. Bounded Context 5 – Incident & Mitigation Management: ciclo de vida de las incidencias, acciones de mitigación, comentarios y control de vencimiento.</em></sub>
</div>

<div align="center">
  <img src="assets/images/BC6-DocumentEvidence.png" alt="BC6-DocumentEvidence">
  <br><sub><em>Figura 7. Bounded Context 6 – Document & Evidence Management: evidencias, documentos normativos, versiones y documentos requeridos.</em></sub>
</div>

<div align="center">
  <img src="assets/images/BC7-ReportsCompliance.png" alt="BC7-ReportsCompliance">
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

![Diagrama de Contexto C4 - RoadWatch OS](assets/images/ContextDiagram.png)

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

![Diagrama de Contenedores C4 - RoadWatch OS](assets/images/ContainerDiagram.png)


### 4.6.4. Software Architecture Components Diagrams.
<a id="4-6-4-software-architecture-components-diagrams"></a>

El Component Diagram descompone el contenedor **RESTful API** de **RoadWatch OS**. Muestra cómo se organiza la lógica del backend en **7 módulos**, uno por cada Bounded Context identificado en el Design-Level EventStorming (4.6.1), y detalla los componentes internos de cada módulo. Las relaciones entre módulos son las mismas de la coreografía definida en 4.6.1: consultas síncronas a través de fachadas, referencias por identificador y domain events publicados en un bus interno.

#### Justificación de la descomposición del contenedor RESTful API

Se descompone el contenedor **RESTful API** porque concentra las reglas de negocio, las políticas de validación normativa, el control de acceso y la orquestación de datos entre la **Web Application**, la **Database** y el **Servicio de Mapas y Geolocalización**.

Cada uno de los siete Bounded Contexts sigue internamente una **arquitectura en capas orientada al dominio (DDD Layered Architecture)** compuesta por cuatro niveles:

1. **Interfaces Layer (`REST Controllers`, `Event Listeners` y `Schedulers`):** Expone los endpoints RESTful (`HTTPS/JSON`) que consume la Web Application, recibe los domain events de otros contextos y ejecuta las políticas programadas (como el control de vencimiento de incidencias).
2. **Application Layer (`Services`, `Context Facades` y `ACL Clients`):** Coordina los casos de uso del contexto (los *commands* del EventStorming). Las *Context Facades* exponen a otros módulos solo las consultas permitidas y los *ACL Clients* traducen las consultas que el módulo necesita de otro contexto, sin compartir su modelo.
3. **Domain Layer (`Aggregates`, `Entities`, `Value Objects` y `Repository Interfaces`):** Encapsula las reglas de negocio invariantes, como la clasificación de mediciones frente a umbrales normativos, las transiciones de estado de incidencias o la validación de cuotas de suscripción.
4. **Infrastructure Layer (`JPA Repositories` y `External Adapters`):** Implementa la persistencia relacional mediante **Spring Data JPA** y los adaptadores técnicos (`JwtTokenProvider`, `PasswordEncoder`, `GeolocationClientAdapter`, `PdfExportService`).

La comunicación asíncrona entre contextos se realiza mediante el **Domain Event Bus** (`ApplicationEventPublisher` de Spring). Así, *Reports & Compliance* proyecta sus indicadores a partir de eventos y no consulta directamente los datos operativos de otros módulos.

**Component Diagram del contenedor RESTful API**

<div align="center">
  <img src="assets/images/chapter4/components/c4-component-restful-api.png" alt="C4 Component Diagram - RoadWatch OS RESTful API">
  <br><sub><em>Figura 11. Component Diagram del contenedor RESTful API: los 7 módulos de Bounded Context, el Domain Event Bus y sus relaciones con la Web Application, la Database y el Servicio de Mapas y Geolocalización.</em></sub>
</div>

#### Relaciones entre módulos

| Relación (4.6.1) | Componente origen | Componente destino | Mecanismo |
| :--- | :--- | :--- | :--- |
| Subscription → Identity & Access | `SubscriptionQuotaClient` (IAM) | `SubscriptionContextFacade` | Llamada interna síncrona `validateUserQuota` (*User Quota Policy*). |
| Subscription → Project Management | `SubscriptionQuotaClient` (Project) | `SubscriptionContextFacade` | Llamada interna síncrona `validateProjectQuota` (*Project Quota Policy*). |
| Project Management → Environmental Monitoring | `ProjectPointClient` (Monitoring) | `ProjectContextFacade` | Validación del `monitoringPointId`; la medición solo guarda el identificador. |
| Environmental Monitoring → Incident & Mitigation | `AlertService` | `AutoIncidentGenerationPolicy` | Evento *Environmental Alert Generated* vía Domain Event Bus. |
| Document & Evidence → Incident & Mitigation | `EvidenceClient` (Incident) | `EvidenceContextFacade` | Llamada interna síncrona `hasEvidenceForIncident` (*Evidence Required Policy*). |
| Monitoring / Incident / Document → Reports & Compliance | `ThresholdEvaluationService`, `IncidentService`, `DocumentService` | `ReportingEventHandler` | Eventos *Measurement Classified*, *Incident Status Changed* y *Document Version Uploaded* (*KPI* y *Compliance Projection Policies*). |
| Identity & Access → todos los contextos | `JwtAuthenticationFilter` | Controladores de los 7 módulos | Validación del token JWT en cada petición (*Access Control Policy*). |
| Project Management → Servicio de Mapas | `GeolocationClientAdapter` | Servicio de Mapas y Geolocalización | `HTTPS/JSON` (*Geo-validation Policy*). |

#### Especificación de Componentes Internos por Bounded Context

| Bounded Context (Módulo) | Interfaces | Application | Infrastructure | Interacciones con otros Contextos / Sistemas |
| :--- | :--- | :--- | :--- | :--- |
| **1. Identity & Access Management** | `JwtAuthenticationFilter`<br>`AuthController`<br>`UserController`<br>`RoleController` | `AuthenticationService`<br>`UserService`<br>`RoleService`<br>`SubscriptionQuotaClient` (ACL) | `UserRepository`<br>`RoleRepository`<br>`PermissionRepository`<br>`PasswordEncoder`<br>`JwtTokenProvider` | Consulta `validateUserQuota` en *Subscription Management* antes de registrar un usuario y valida el JWT de las peticiones a todos los contextos. |
| **2. Subscription Management** | `PlanController`<br>`SubscriptionController` | `PlanService`<br>`SubscriptionService`<br>`SubscriptionContextFacade` | `PlanRepository`<br>`SubscriptionRepository` | Expone `validateUserQuota` y `validateProjectQuota` a *Identity & Access* y *Project Management*. |
| **3. Project Management** | `ProjectController`<br>`MonitoringPointController` | `ProjectService`<br>`MonitoringPointService`<br>`ProjectContextFacade`<br>`SubscriptionQuotaClient` (ACL) | `ProjectRepository`<br>`MonitoringPointRepository`<br>`GeolocationClientAdapter` | Consulta la cuota en *Subscription Management*, valida coordenadas con el *Servicio de Mapas y Geolocalización* y expone los puntos de monitoreo a *Environmental Monitoring*. |
| **4. Environmental Monitoring** | `MeasurementController`<br>`ThresholdController`<br>`AlertController` | `MeasurementService`<br>`ThresholdEvaluationService`<br>`AlertService`<br>`ProjectPointClient` (ACL) | `MeasurementRepository`<br>`ThresholdRepository`<br>`AlertRepository` | Valida el `monitoringPointId` en *Project Management* y publica *Measurement Classified* y *Environmental Alert Generated*. |
| **5. Incident & Mitigation Management** | `IncidentController`<br>`MitigationActionController`<br>`IncidentCommentController`<br>`AutoIncidentGenerationPolicy` (listener)<br>`OverdueCheckPolicy` (scheduler) | `IncidentService`<br>`MitigationService`<br>`CommentService`<br>`EvidenceClient` (ACL) | `IncidentRepository`<br>`MitigationRepository`<br>`CommentRepository`<br>`IncidentStatusHistoryRepository` | Crea incidencias a partir de *Environmental Alert Generated*, verifica evidencia en *Document & Evidence* antes del cierre y publica *Incident Status Changed*. |
| **6. Document & Evidence Management** | `EvidenceController`<br>`NormativeDocumentController`<br>`RequiredDocumentController` | `EvidenceService`<br>`DocumentService`<br>`RequiredDocumentService`<br>`EvidenceContextFacade` | `EvidenceRepository`<br>`DocumentRepository`<br>`DocumentVersionRepository`<br>`RequiredDocumentRepository` | Expone `hasEvidenceForIncident` a *Incident & Mitigation* y publica *Document Version Uploaded*. |
| **7. Reports & Compliance Management** | `AuditReportController`<br>`KpiController`<br>`ComplianceController`<br>`ReportingEventHandler` (listener) | `ReportService`<br>`KpiService`<br>`ComplianceService` | `AuditReportRepository`<br>`EnvironmentalKpiRepository`<br>`ComplianceSummaryRepository`<br>`PdfExportService` | Consume *Measurement Classified*, *Incident Status Changed* y *Document Version Uploaded* para recalcular KPIs y cumplimiento. No consulta directamente los datos de otros contextos. |

#### Component Diagrams por Bounded Context

**Bounded Context 1 – Identity & Access Management**

`JwtAuthenticationFilter` intercepta todas las peticiones de la Web Application y valida el token con `JwtTokenProvider`. `AuthenticationService` verifica credenciales con `PasswordEncoder` y emite el token. Antes de registrar un usuario, `UserService` consulta la cuota del plan mediante `SubscriptionQuotaClient`.

<div align="center">
  <img src="assets/images/chapter4/components/c4-component-bc1-identity-access.png" alt="C4 Component Diagram - Identity and Access Management">
  <br><sub><em>Figura 11.1. Component Diagram de Identity & Access Management.</em></sub>
</div>

**Bounded Context 2 – Subscription Management**

`SubscriptionService` atiende la selección, activación, cambio y cancelación de planes. `SubscriptionContextFacade` es el único punto de entrada para los otros contextos y expone las validaciones de cuota de usuarios y de proyectos.

<div align="center">
  <img src="assets/images/chapter4/components/c4-component-bc2-subscription.png" alt="C4 Component Diagram - Subscription Management">
  <br><sub><em>Figura 11.2. Component Diagram de Subscription Management.</em></sub>
</div>

**Bounded Context 3 – Project Management**

`ProjectService` verifica la cuota de proyectos antes de crear una obra. `MonitoringPointService` valida la ubicación de los puntos con `GeolocationClientAdapter`. `ProjectContextFacade` permite que *Environmental Monitoring* valide un `monitoringPointId` sin acceder al aggregate `Project`.

<div align="center">
  <img src="assets/images/chapter4/components/c4-component-bc3-project.png" alt="C4 Component Diagram - Project Management">
  <br><sub><em>Figura 11.3. Component Diagram de Project Management.</em></sub>
</div>

**Bounded Context 4 – Environmental Monitoring**

`MeasurementService` registra la medición y solicita su evaluación a `ThresholdEvaluationService`, que publica *Measurement Classified*. Si el resultado es `WARNING` o `NON_COMPLIANT`, `AlertService` genera la alerta y publica *Environmental Alert Generated*.

<div align="center">
  <img src="assets/images/chapter4/components/c4-component-bc4-environmental-monitoring.png" alt="C4 Component Diagram - Environmental Monitoring">
  <br><sub><em>Figura 11.4. Component Diagram de Environmental Monitoring.</em></sub>
</div>

**Bounded Context 5 – Incident & Mitigation Management**

`AutoIncidentGenerationPolicy` recibe *Environmental Alert Generated* y crea la incidencia, y `OverdueCheckPolicy` marca las vencidas. Antes de cerrar una incidencia, `IncidentService` verifica la evidencia con `EvidenceClient`. Cada cambio de estado queda en `IncidentStatusHistoryRepository` y se publica como *Incident Status Changed*.

<div align="center">
  <img src="assets/images/chapter4/components/c4-component-bc5-incident-mitigation.png" alt="C4 Component Diagram - Incident and Mitigation Management">
  <br><sub><em>Figura 11.5. Component Diagram de Incident & Mitigation Management.</em></sub>
</div>

**Bounded Context 6 – Document & Evidence Management**

`EvidenceService` asocia evidencias a mediciones o incidencias, y `EvidenceContextFacade` responde la consulta de *Evidence Required Policy*. `DocumentService` versiona los documentos normativos y publica *Document Version Uploaded*.

<div align="center">
  <img src="assets/images/chapter4/components/c4-component-bc6-document-evidence.png" alt="C4 Component Diagram - Document and Evidence Management">
  <br><sub><em>Figura 11.6. Component Diagram de Document & Evidence Management.</em></sub>
</div>

**Bounded Context 7 – Reports & Compliance Management**

`ReportingEventHandler` consume los eventos de los otros contextos y dispara las proyecciones de `KpiService` y `ComplianceService`. `ReportService` aplica la *Data Aggregation Policy* sobre esos indicadores y exporta el reporte de auditoría con `PdfExportService`.

<div align="center">
  <img src="assets/images/chapter4/components/c4-component-bc7-reports-compliance.png" alt="C4 Component Diagram - Reports and Compliance Management">
  <br><sub><em>Figura 11.7. Component Diagram de Reports & Compliance Management.</em></sub>
</div>

## 4.7. Software Object-Oriented Design.
<a id="4-7-software-object-oriented-design"></a>

El diseño orientado a objetos de **RoadWatch OS** detalla la estructura interna de clases, interfaces, enumeraciones y asociaciones de los **siete Bounded Contexts** identificados en el **Design-Level EventStorming (4.6.1)** y representados como módulos independientes en el **Component Diagram (4.6.4)**.

Para preservar la autonomía de cada contexto y reflejar fielmente las reglas de negocio del dominio, se aplican los siguientes principios tácticos de *Domain-Driven Design (DDD)*:

- **Raíces de Agregado y Composición Interna:** Cada *Aggregate Root* (`User`, `Subscription`, `Project`, `EnvironmentalMeasurement`, `EnvironmentalIncident`, `NormativeDocument`, `AuditReport`) encapsula sus atributos de estado y gobierna sus entidades internas mediante relaciones de composición (`◆`), exponiendo métodos de negocio alineados con los *commands* del EventStorming.
- **Referencias entre Contextos por Identificador (ID):** Siguiendo las decisiones de diseño de la arquitectura, ningún agregado mantiene referencias de objeto directas hacia clases de otro Bounded Context. Toda vinculación transversal se realiza mediante claves de referencia inmutables (`accountId`, `projectId`, `responsibleUserId`, `monitoringPointId`, `normativeThresholdId`, `measurementId`, `incidentId`).
- **Separación entre Dominio, Servicios e Infraestructura:** Los servicios coordinan la lógica de aplicación, las políticas de validación (*Quota Policies*, *Threshold Evaluation Policy*, *Evidence Required Policy*) y los adaptadores externos (`GeolocationClientAdapter`, `JwtTokenProvider`, `PdfExportService`), desacoplando el acceso a datos mediante interfaces de repositorio.


### 4.7.1. Class Diagrams.
<a id="4-7-1-class-diagrams"></a>

A continuación se presentan los Class Diagrams correspondientes a los siete Bounded Contexts definidos para RoadWatch OS, especificando sus clases de dominio, enumeraciones, servicios, interfaces de repositorio y multiplicidades.

#### Bounded Context 1 – Identity & Access Management

Modela el registro de usuarios, el control de acceso basado en roles (*RBAC*) y la autenticación mediante sesiones JWT. El agregado raíz `User` administra su estado (`UserStatus`: `ACTIVE`, `INACTIVE`, `PENDING`) y se asocia con `Role` (`RoleType`: `ADMIN`, `MANAGER`, `ENVIRONMENTAL_OFFICER`, `AUDITOR`), el cual compone (`◆`) los permisos granulares (`Permission`) que determinan qué comandos puede ejecutar cada actor (*Access Control Policy*). `AuthenticationService` verifica credenciales apoyándose en `PasswordEncoder` y emite instancias de `AuthToken` a través de `JwtTokenProvider`. Por su parte, `UserService` y `RoleService` gestionan el ciclo de vida de usuarios, roles y permisos mediante `UserRepository`, `RoleRepository` y `PermissionRepository`.

<div align="center">
  <img src="..\assets\images\plantuml-diagram (9).png" alt="Class Diagram - Identity and Access">
  <br><sub><em>Figura 12. Bounded Context 1 – Identity & Access Management: diagrama de clases de dominio, servicios y repositorios.</em></sub>
</div>

#### Bounded Context 2 – Subscription Management

Representa el catálogo comercial de planes y el control de cuotas operativas por cuenta (`accountId`). El agregado raíz `Subscription` controla la vigencia y estado de la suscripción (`SubscriptionStatus`: `ACTIVE`, `INACTIVE`, `CANCELLED`) y referencia al `Plan` contratado (`PlanType`: `BASE`, `PROFESSIONAL`, `ENTERPRISE`), donde se establecen los topes `maxProjects` y `maxUsers`. `SubscriptionService` procesa la selección, activación, cambio y cancelación de planes, además de exponer los métodos `validateUserQuota` y `validateProjectQuota` requeridos síncronamente por las políticas *User Quota Policy* y *Project Quota Policy*.

<div align="center">
  <img src="..\assets\images\plantuml-diagram (12).png" alt="Class Diagram - Subscription Management">
  <br><sub><em>Figura 13. Bounded Context 2 – Subscription Management: diagrama de clases de dominio, servicios y repositorios.</em></sub>
</div>

#### Bounded Context 3 – Project Management

Gestiona el ciclo de vida de los proyectos viales (`ProjectStatus`: `ACTIVE`, `ARCHIVED`), la asignación del usuario responsable (`responsibleUserId`) y los puntos de monitoreo ambiental. El agregado raíz `Project` compone (`1` a `0..*`) las entidades `MonitoringPoint`, cada una de las cuales almacena sus coordenadas (`latitude`, `longitude`) y la referencia por identificador `normativeThresholdId` hacia el umbral normativo correspondiente. `ProjectService` y `MonitoringPointService` dirigen los comandos del contexto apoyándose en `ProjectRepository`, `MonitoringPointRepository` y `GeolocationClientAdapter`, el cual valida las coordenadas geográficas con el *Servicio de Mapas y Geolocalización* externo (*Geo-validation Policy*).

<div align="center">
  <img src="..\assets\images\plantuml-diagram (13).png" alt="Class Diagram - Project Management">
  <br><sub><em>Figura 14. Bounded Context 3 – Project Management: diagrama de clases de dominio, servicios y repositorios.</em></sub>
</div>

#### Bounded Context 4 – Environmental Monitoring

Encapsula el registro manual de mediciones ambientales (`IndicatorType`: `AIR`, `NOISE`, `WATER`), su evaluación frente a parámetros regulatorios y la gestión de alertas. Al registrarse una medición en `MeasurementService` vinculada a un `monitoringPointId`, `ThresholdEvaluationService` aplica la *Threshold Evaluation Policy* comparando el valor de `EnvironmentalMeasurement` contra los límites `warningLimit` y `maximumLimit` de `NormativeThreshold`, asignando el estado `COMPLIANT`, `WARNING` o `NON_COMPLIANT`. Cuando el resultado es preventivo o crítico, `AlertService` ejecuta la *Alert Generation Policy* creando una `EnvironmentalAlert` (`0..1`), la cual puede ser posteriormente reconocida (`acknowledgeAlert`).

<div align="center">
  <img src="..\assets\images\plantuml-diagram (14).png" alt="Class Diagram - Environmental Monitoring">
  <br><sub><em>Figura 15. Bounded Context 4 – Environmental Monitoring: diagrama de clases de dominio, servicios y repositorios.</em></sub>
</div>

#### Bounded Context 5 – Incident & Mitigation Management

Gobierna el ciclo de vida de las incidencias ambientales originadas automáticamente a partir de alertas críticas (*Auto-Incident Generation Policy*) o registradas durante la supervisión. El agregado raíz `EnvironmentalIncident` controla la severidad (`IncidentSeverity`: `LOW`, `MEDIUM`, `HIGH`, `CRITICAL`) y el estado en el flujo Kanban (`IncidentStatus`: `OPEN`, `IN_PROGRESS`, `RESOLVED`, `CLOSED`, `OVERDUE`), componiendo (`◆`) las acciones correctivas (`MitigationAction`), los comentarios de seguimiento (`IncidentComment`) y el registro auditable de transiciones (`IncidentStatusHistory`). `IncidentService` gestiona los cambios de estado —verificando previamente la *Evidence Required Policy*— y marca como vencidas las incidencias que superan su plazo de atención (*Overdue Check Policy*).

<div align="center">
  <img src="..\assets\images\plantuml-diagram (15).png" alt="Class Diagram - Incident and Mitigation">
  <br><sub><em>Figura 16. Bounded Context 5 – Incident & Mitigation Management: diagrama de clases de dominio, servicios y repositorios.</em></sub>
</div>

#### Bounded Context 6 – Document & Evidence Management

Administra las evidencias operativas de campo y el repositorio de documentos normativos por proyecto. El agregado `Evidence` asocia archivos fotográficos o documentales a mediciones (`measurementId`) o incidencias (`incidentId`), permitiendo a `EvidenceService` validar la existencia de respaldo probatorio (`hasEvidenceForIncident`) antes del cierre de una incidencia. Por su parte, el agregado raíz `NormativeDocument` controla su estado (`DocumentStatus`: `REQUIRED`, `UPLOADED`, `MISSING`) y compone su historial inmutable de versiones (`DocumentVersion` de `1` a `1..*`), mientras que `RequiredDocument` y `RequiredDocumentService` definen y verifican los documentos obligatorios por hito de auditoría.

<div align="center">
  <img src="..\assets\images\plantuml-diagram (16).png" alt="Class Diagram - Document and Evidence">
  <br><sub><em>Figura 17. Bounded Context 6 – Document & Evidence Management: diagrama de clases de dominio, servicios y repositorios.</em></sub>
</div>

#### Bounded Context 7 – Reports & Compliance Management

Consolida los indicadores ambientales, el resumen de cumplimiento y los reportes de auditoría sin duplicar la lógica operativa de los demás módulos. `KpiService` y `ComplianceService` implementan la *KPI Projection Policy* y la *Compliance Projection Policy*, recalculando los agregados `EnvironmentalKpi` y `ComplianceSummary` por proyecto (`projectId`). Finalmente, `ReportService` gestiona la solicitud y generación de `AuditReport` (`ReportStatus`: `REQUESTED`, `GENERATED`, `FAILED`) aplicando la *Data Aggregation Policy* y delegando en `PdfExportService` la exportación del expediente en formato PDF.

<div align="center">
  <img src="..\assets\images\plantuml-diagram (17).png" alt="Class Diagram - Reports and Compliance">
  <br><sub><em>Figura 18. Bounded Context 7 – Reports & Compliance Management: diagrama de clases de dominio, servicios y repositorios.</em></sub>
</div>

#### Síntesis de Clases, Servicios y Repositorios por Bounded Context

| # | Bounded Context | Aggregates y Entidades de Dominio | Enumeraciones | Servicios y Adaptadores | Interfaces de Repositorio |
| :-- | :--- | :--- | :--- | :--- | :--- |
| 1 | **Identity & Access Management** | `User` (root), `Role` ◆ `Permission`, `AuthToken` | `UserStatus`, `RoleType` | `AuthenticationService`, `UserService`, `RoleService`, `PasswordEncoder`, `JwtTokenProvider` | `UserRepository`, `RoleRepository`, `PermissionRepository` |
| 2 | **Subscription Management** | `Subscription` (root) → `Plan` | `SubscriptionStatus`, `PlanType` | `SubscriptionService`, `PlanService` | `SubscriptionRepository`, `PlanRepository` |
| 3 | **Project Management** | `Project` (root) ◆ `MonitoringPoint` | `ProjectStatus` | `ProjectService`, `MonitoringPointService`, `GeolocationClientAdapter` | `ProjectRepository`, `MonitoringPointRepository` |
| 4 | **Environmental Monitoring** | `EnvironmentalMeasurement` (root) → `EnvironmentalAlert`, `NormativeThreshold` | `IndicatorType`, `MeasurementStatus` | `MeasurementService`, `ThresholdEvaluationService`, `AlertService` | `MeasurementRepository`, `ThresholdRepository`, `AlertRepository` |
| 5 | **Incident & Mitigation Management** | `EnvironmentalIncident` (root) ◆ `MitigationAction`, `IncidentComment`, `IncidentStatusHistory` | `IncidentStatus`, `IncidentSeverity` | `IncidentService`, `MitigationService`, `CommentService` | `IncidentRepository`, `MitigationRepository`, `CommentRepository`, `IncidentStatusHistoryRepository` |
| 6 | **Document & Evidence Management** | `Evidence`, `NormativeDocument` (root) ◆ `DocumentVersion`, `RequiredDocument` | `DocumentStatus` | `EvidenceService`, `DocumentService`, `RequiredDocumentService` | `EvidenceRepository`, `DocumentRepository`, `DocumentVersionRepository`, `RequiredDocumentRepository` |
| 7 | **Reports & Compliance Management** | `AuditReport` (root), `EnvironmentalKpi`, `ComplianceSummary` | `ReportStatus` | `ReportService`, `KpiService`, `ComplianceService`, `PdfExportService` | `AuditReportRepository`, `EnvironmentalKpiRepository`, `ComplianceSummaryRepository` |


## 4.8. Database Design.
<a id="4-8-database-design"></a>

El diseño de base de datos relacional de **RoadWatch OS** organiza las estructuras persistentes de acuerdo con los siete Bounded Contexts de la arquitectura, garantizando la integridad de los datos y la trazabilidad histórica necesaria para el seguimiento y la fiscalización ambiental:

- **Identity & Access Management:** `users`, `roles`, `permissions`, `user_roles`, `role_permissions`.
- **Subscription Management:** `plans`, `subscriptions`.
- **Project Management:** `projects`, `monitoring_points`.
- **Environmental Monitoring:** `normative_thresholds`, `environmental_measurements`, `environmental_alerts`.
- **Incident & Mitigation Management:** `environmental_incidents`, `mitigation_actions`, `incident_comments`, `incident_status_history`.
- **Document & Evidence Management:** `normative_documents`, `document_versions`, `evidences`, `required_documents`.
- **Reports & Compliance Management:** `audit_reports`, `environmental_kpis`, `compliance_summaries`.


- **Identity & Access Management**
- **Subscription Management**
- **Project Management**
- **Environmental Monitoring**
- **Incident & Mitigation Management**
- **Document & Evidence Management**
- **Reports & Compliance Management**


- **Integridad referencial intra-contexto (`«FK»`):** Las relaciones entre tablas que forman parte de un mismo Bounded Context se imponen mediante claves foráneas físicas (`«FK, NOT NULL»`), asegurando la consistencia interna de cada agregado.
- **Desacoplamiento inter-contexto mediante IDs lógicos:** En concordancia con la coreografía de Bounded Contexts definida en la sección 4.6.1, las referencias hacia entidades gobernadas por otros contextos (`account_id`, `responsible_user_id`, `normative_threshold_id`, `monitoring_point_id`, `measurement_id`, `project_id`) se persisten como columnas `BIGINT` sin restricciones de clave foránea entre esquemas de contextos distintos.
- **Convenciones de tipos y auditoría:** Todas las tablas utilizan identificadores `BIGINT «PK»`, nomenclatura `snake_case` en plural, tipos `DECIMAL` para coordenadas, mediciones y porcentajes de cumplimiento, `VARCHAR` para estados provenientes de enumeraciones y marcas temporales `TIMESTAMP` (`created_at`, `updated_at`, `measured_at`, `calculated_at`).

### 4.8.1. Database Diagrams.
<a id="4-8-1-database-diagrams"></a>

Los Database Diagrams representan los esquemas entidad-relación persistentes de cada Bounded Context, especificando sus tablas, columnas, tipos de datos, claves primarias (`«PK»`), claves foráneas (`«FK»`), restricciones de nulidad/unicidad y cardinalidades.

#### Bounded Context 1 – Identity & Access Management

Modela las tablas `users`, `roles` y `permissions`, resolviendo las asociaciones muchos a muchos mediante las tablas intermedias `user_roles` (`user_id`, `role_id`) y `role_permissions` (`role_id`, `permission_id`) con claves primarias compuestas (`«PK, FK»`). La clase `AuthToken` no requiere tabla física por gestionarse como sesión stateless mediante JWT.

<div align="center">
  <img src="assets/images/BC1ERD.png" alt="Database Diagram - Identity and Access">
  <br><sub><em>Figura 19. Bounded Context 1 – Identity & Access Management: diagrama de base de datos.</em></sub>
</div>

#### Bounded Context 2 – Subscription Management

Persiste el catálogo comercial en la tabla `plans` (`name «UNIQUE, NOT NULL»`, `max_projects`, `max_users`, `active`) y las suscripciones por cuenta en `subscriptions` (`account_id`, `status`, `start_date`, `updated_at`), vinculadas mediante la clave foránea `plan_id «FK, NOT NULL»` (`defines`).

<div align="center">
  <img src="assets/images/BC2ERD.png" alt="Database Diagram - Subscription Management">
  <br><sub><em>Figura 20. Bounded Context 2 – Subscription Management: diagrama de base de datos.</em></sub>
</div>

#### Bounded Context 3 – Project Management

Estructura los proyectos viales en la tabla `projects` y sus ubicaciones de control en `monitoring_points`, vinculados mediante la relación uno a muchos `project_id «FK, NOT NULL»` (`contains`). Las coordenadas geográficas (`latitude`, `longitude`) se almacenan con precisión `DECIMAL «NOT NULL»` y el umbral aplicable se referencia mediante `normative_threshold_id`.

<div align="center">
  <img src="assets/images/BC3ERD.png" alt="Database Diagram - Project Management">
  <br><sub><em>Figura 21. Bounded Context 3 – Project Management: diagrama de base de datos.</em></sub>
</div>

#### Bounded Context 4 – Environmental Monitoring

Contiene la tabla `normative_thresholds` para los límites regulatorios por tipo de indicador (`warning_limit`, `maximum_limit`, `unit`), la tabla `environmental_measurements` para las lecturas registradas en cada punto (`monitoring_point_id`, `value`, `measured_at`, `status`) y la tabla `environmental_alerts`, vinculada a la medición que originó la alerta mediante `measurement_id «FK, NOT NULL»`.

<div align="center">
  <img src="..\assets\images\plantuml-diagram (8).png" alt="Database Diagram - Environmental Monitoring">
  <br><sub><em>Figura 22. Bounded Context 4 – Environmental Monitoring: diagrama de base de datos.</em></sub>
</div>

#### Bounded Context 5 – Incident & Mitigation Management

Organiza el ciclo de vida de las incidencias en torno a la tabla `environmental_incidents` (`measurement_id`, `title`, `status`, `severity`), de la cual dependen mediante clave foránea `incident_id «FK, NOT NULL»` las tablas `mitigation_actions` (`has`), `incident_comments` (`receives`) e `incident_status_history` (`records`).

<div align="center">
  <img src="assets/images/BC5ERD.png" alt="Database Diagram - Incident and Mitigation">
  <br><sub><em>Figura 23. Bounded Context 5 – Incident & Mitigation Management: diagrama de base de datos.</em></sub>
</div>

#### Bounded Context 6 – Document & Evidence Management

Comprende las tablas `normative_documents` y `document_versions` vinculadas por `document_id «FK, NOT NULL»` (`contains`) con restricción de unicidad compuesta (`UNIQUE: document_id + version_number`), además de la tabla `evidences` para los respaldos probatorios asociados a `incident_id` o `measurement_id` y la tabla `required_documents` para los documentos obligatorios por hito (`milestone_name`).

<div align="center">
  <img src="assets/images/BC6ERD.png" alt="Database Diagram - Document and Evidence">
  <br><sub><em>Figura 24. Bounded Context 6 – Document & Evidence Management: diagrama de base de datos.</em></sub>
</div>

#### Bounded Context 7 – Reports & Compliance Management

Persiste los reportes de auditoría en `audit_reports` (`project_id`, `status`, `generated_at`, `file_url`), las métricas consolidadas en `environmental_kpis` (`compliance_percentage`, `average_resolution_time`, `open_incidents`, `critical_incidents`) y el balance de mediciones en `compliance_summaries` (`compliant_measurements`, `non_compliant_measurements`, `compliance_percentage`).

<div align="center">
  <img src="assets/images/BC7ERD.png" alt="Database Diagram - Reports and Compliance">
  <br><sub><em>Figura 25. Bounded Context 7 – Reports & Compliance Management: diagrama de base de datos.</em></sub>
</div>

---

# Capítulo V: Product Implementation, Validation & Deployment
<a id="product-implementation-validation-deployment"></a>

## 5.1. Software Configuration Management
<a id="5-1-software-configuration-management"></a>

En esta sección se establecen las decisiones y convenciones adoptadas por el equipo de VíaNexo para garantizar la consistencia, trazabilidad y calidad del ciclo de vida del software a lo largo del desarrollo de RoadWatch OS.

---

### 5.1.1. Software Development Environment Configuration
<a id="5-1-1-software-development-environment-configuration"></a>

A continuación, se especifican los productos de software utilizados por los miembros del equipo para colaborar en cada etapa del ciclo de vida del producto digital, organizados por tipo de actividad.

#### Project Management

- **Trello** — Herramienta de gestión de tareas y tableros Kanban utilizada para el seguimiento del Sprint Backlog y la coordinación de actividades entre miembros del equipo.  
  Ruta de referencia: https://trello.com

- **Discord / WhatsApp** — Canales de comunicación sincrónica y asincrónica para la coordinación interna del equipo.

#### Requirements Management

- **GitHub (repositorio de informe)** — Plataforma de control de versiones utilizada para la elaboración colaborativa del Project Report en formato Markdown.  
  Ruta de referencia: https://github.com

- **UXPressia** — Herramienta SaaS utilizada para la elaboración de User Personas, Empathy Maps, Journey Maps e Impact Maps.  
  Ruta de referencia: https://uxpressia.com

#### Product UX/UI Design

- **Figma** — Herramienta de diseño colaborativo utilizada para la elaboración de Wireframes, Mock-ups y Prototipos interactivos del Landing Page y la Web Application.  
  Ruta de referencia: https://figma.com

- **FigJam / LucidChart** — Herramientas de diagramación visual utilizadas para la elaboración de Wireflows, User Flows y diagramas de EventStorming.  
  Ruta de referencia: https://figma.com/figjam | https://lucidchart.com

#### Software Development

- **Visual Studio Code** — Editor de código principal utilizado para el desarrollo del Landing Page (HTML5, CSS3 y JavaScript).  
  Ruta de descarga: https://code.visualstudio.com

- **IntelliJ IDEA** — IDE utilizado para el desarrollo del backend con Spring Boot Framework y Java.  
  Ruta de descarga: https://www.jetbrains.com/idea

- **WebStorm** — IDE utilizado para el desarrollo del Frontend Web Application con Angular Framework y TypeScript.  
  Ruta de descarga: https://www.jetbrains.com/webstorm

- **Node.js / npm** — Entorno de ejecución y gestor de paquetes necesario para el desarrollo con Angular.  
  Ruta de descarga: https://nodejs.org

- **Angular CLI** — Interfaz de línea de comandos para la creación y gestión de proyectos Angular.  
  Ruta de referencia: https://angular.io/cli

- **Java JDK 17** — Kit de desarrollo para la implementación del backend con Spring Boot.  
  Ruta de descarga: https://adoptium.net

- **Spring Boot** — Framework Java utilizado para el desarrollo de la RESTful API bajo arquitectura orientada a servicios.  
  Ruta de referencia: https://spring.io/projects/spring-boot

#### Software Deployment

- **GitHub Pages** — Plataforma de hosting estático utilizada para el despliegue del Landing Page.  
  Ruta de referencia: https://pages.github.com

- **Git** — Sistema de control de versiones distribuido utilizado en todos los repositorios del proyecto.  
  Ruta de descarga: https://git-scm.com

#### Software Documentation

- **Swagger / OpenAPI** — Herramienta utilizada para la documentación interactiva de los endpoints del RESTful API.  
  Ruta de referencia: https://swagger.io

- **Structurizr** — Herramienta basada en C4 Model DSL utilizada para la elaboración de diagramas de arquitectura de software.  
  Ruta de referencia: https://structurizr.com

- **ERDPlus / LucidChart** — Herramientas utilizadas para la elaboración de diagramas de base de datos (ERD).  
  Ruta de referencia: https://erdplus.com | https://lucidchart.com

---

### 5.1.2. Source Code Management
<a id="5-1-2-source-code-management"></a>

El equipo gestiona el código fuente mediante **GitHub** como plataforma de control de versiones, organizado bajo una organización pública que agrupa los repositorios de cada producto digital del proyecto.

**Organización GitHub:**  
https://github.com/DA-Open-Source-1ASI0729-2620-7729

**Repositorios del proyecto:**

| Producto | URL del Repositorio |
|:---|:---|
| Landing Page | https://github.com/DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-LandingPage |
| Frontend Web Application | https://github.com/DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Frontend.git |
| Web Services (RESTful API) | https://github.com/DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Backend.git|
| Project Report | https://github.com/DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Report |
#### GitFlow Workflow

El equipo implementa **GitFlow** como estrategia de ramificación para gestionar el ciclo de vida del código. Las ramas definidas son:

- **`main`**: Rama principal que contiene el código de producción estable. Solo recibe merges desde `release` o `hotfix`.
- **`develop`**: Rama de integración continua donde se consolidan los features completados antes de pasar a producción.
- **`feature/<nombre-feature>`**: Rama individual para el desarrollo de cada funcionalidad. Se crea desde `develop` y se integra de vuelta a `develop` al completarse. Ejemplo: `feature/hero-section`, `feature/navbar`, `feature/contact-form`.
- **`release/<versión>`**: Rama de preparación de una nueva versión de producción. Se crea desde `develop` cuando el Sprint está completo. Ejemplo: `release/1.0.0`.
- **`hotfix/<descripción>`**: Rama para correcciones críticas en producción. Se crea desde `main`. Ejemplo: `hotfix/fix-cta-redirect`.

#### Semantic Versioning

Para el nombramiento de versiones se aplica **Semantic Versioning 2.0.0** con el formato `MAJOR.MINOR.PATCH`:
- `MAJOR`: cambios incompatibles con versiones anteriores.
- `MINOR`: nuevas funcionalidades compatibles con versiones anteriores.
- `PATCH`: correcciones de errores compatibles con versiones anteriores.

La primera versión del Landing Page se etiqueta como `v1.0.0`.

#### Conventional Commits

Para los mensajes de commit, el equipo aplica la especificación **Conventional Commits**, usando el formato:

```
<type>(<scope>): <description>
```

Los tipos permitidos son:
- `feat`: nueva funcionalidad.
- `fix`: corrección de error.
- `docs`: cambios en documentación.
- `style`: cambios de formato que no afectan la lógica.
- `refactor`: reestructuración de código sin cambio funcional.
- `chore`: tareas de mantenimiento (dependencias, configuración).
- `test`: adición o modificación de pruebas.

Ejemplos aplicados al proyecto:
```
feat(landing): add hero section with CTA buttons
feat(landing): implement responsive navbar
fix(landing): correct mobile layout for plans section
docs(readme): update deployment instructions
style(landing): apply Material Design color tokens
```

---

### 5.1.3. Source Code Style Guide & Conventions
<a id="5-1-3-source-code-style-guide-conventions"></a>

El equipo adopta las siguientes guías de estilo y convenciones de codificación para garantizar uniformidad y legibilidad en todos los productos. Toda nomenclatura se redacta en **inglés**.

#### HTML5 & CSS3 (Landing Page)
- Se aplica la guía **W3Schools HTML Style Guide** para estructura semántica, indentación con 2 espacios, atributos en minúsculas y uso de comillas dobles.
- Se aplica la guía **Google HTML/CSS Style Guide** para nomenclatura de clases en `kebab-case`, evitar el uso de selectores de ID en CSS y priorizar propiedades abreviadas.
- El diseño visual se basa en **Material Design** como sistema de diseño de referencia.

#### TypeScript & Angular (Frontend Web Application)
- Se aplica la **Angular Coding Style Guide** oficial: componentes con sufijo `Component`, servicios con sufijo `Service`, módulos con sufijo `Module`.
- Nombres de archivos en `kebab-case`: `project-list.component.ts`.
- Se aplica la **Google TypeScript Style Guide** para tipado estricto y gestión de imports.

#### Java & Spring Boot (Web Services)
- Se sigue la convención de **Spring Boot** para controladores (`@RestController`), servicios (`@Service`) y repositorios (`@Repository`).

#### Gherkin (Acceptance Criteria)
- Se aplican las **Gherkin Conventions for Readable Specifications**: un solo nivel de indentación para `Given/When/Then`, escenarios en inglés, descripciones en tercera persona.

---

### 5.1.4. Software Deployment Configuration
<a id="5-1-4-software-deployment-configuration"></a>

En esta sección se describe la configuración de despliegue para el Landing Page, único producto desplegado en el Sprint 1.

#### Landing Page — GitHub Pages

El Landing Page de RoadWatch OS se despliega como sitio web estático mediante **GitHub Pages**, directamente desde el repositorio:  

https://github.com/DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-LandingPage


**Pasos para el despliegue:**

1. Asegurarse de que la rama `main` contiene los archivos del Landing Page (`index.html`, carpetas `css/`, `js/`, `assets/`).
2. Ingresar al repositorio en GitHub y navegar a **Settings > Pages**.
3. En la sección **Source**, seleccionar la rama `main` y la carpeta `/ (root)`.
4. Hacer clic en **Save**. GitHub Pages genera automáticamente la URL de despliegue.
5. Verificar el sitio desplegado en la URL generada por GitHub Pages.

Cualquier push a la rama `main` actualiza automáticamente el sitio desplegado.

---

## 5.2. Landing Page, Services & Applications Implementation
<a id="5-2-landing-page-services-applications-implementation"></a>

### 5.2.1. Sprint 1
<a id="5-2-1-sprint-1"></a>

#### 5.2.1.1. Sprint Planning 1
<a id="5-2-1-1-sprint-planning-1"></a>

El Sprint 1 tiene como objetivo principal la implementación y despliegue de la primera versión funcional del Landing Page de RoadWatch OS, que permita presentar la propuesta de valor de VíaNexo a los segmentos objetivo (empresas constructoras viales y consultoras supervisoras ambientales) y redirigirlos hacia la futura Web Application.

| Sprint # | Sprint 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|:---|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Sprint Planning Background** |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Date | 2026-08-25                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Time | 07:00 PM                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Location | Reunión virtual vía Discord                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Prepared By | Pancorbo Amorós, Italo Raul                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Attendees | Cabrera Sotelo, Camila Celeste / Conde Huashuayo, Sebasthian Alex / Diaz De La Cruz, Sebastian Gabriel / Montes Chang, Piero Francisco / Pancorbo Amorós, Italo Raul                                                                                                                                                                                                                                                                                                                     |
| Sprint 0 Review Summary | Al ser el primer Sprint del proyecto, no existe un Sprint anterior. Se parte del Product Backlog inicial definido y de los artefactos elaborados en los capítulos previos.                                                                                                                                                                                                                                                                                                               |
| Sprint 0 Retrospective Summary | El equipo acordó establecer estándares de trabajo desde el inicio: aplicar GitFlow, Conventional Commits y dividir las responsabilidades de implementación del Landing Page por secciones entre los miembros.                                                                                                                                                                                                                                                                            |
| **Sprint Goal & User Stories** |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Sprint 1 Goal | Our focus is on delivering a fully deployed and navigable Landing Page for RoadWatch OS. We believe it delivers a clear understanding of the value proposition to potential clients from both target segments (construction companies and environmental supervisors). This will be confirmed when visitors can navigate all sections of the Landing Page, identify the product's features, compare subscription plans, and access the call-to-action buttons for each segment.           |
| Sprint 1 Velocity | 20 Story Points                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Sum of Story Points | 19 Story Points                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

---

#### 5.2.1.2. Aspect Leaders and Collaborators
<a id="5-2-1-2-aspect-leaders-and-collaborators"></a>

Para el Sprint 1, los aspectos de trabajo se organizan en torno a las secciones del Landing Page y la configuración del entorno de desarrollo y despliegue. Cada aspecto cuenta con un líder responsable de liderar la implementación y uno o más colaboradores de apoyo.

| Team Member | GitHub Username            | Hero & Navbar | Plans Section | Features Section | Contact Form | Deployment & Config |
|:---|:---------------------------|:---:|:---:|:---:|:---:|:---:|
| Cabrera Sotelo, Camila Celeste | *whcamm*               | L | C | | | C |
| Conde Huashuayo, Sebasthian Alex | *SebasthianCH*             | C | | L | C | C |
| Diaz De La Cruz, Sebastian Gabriel | *tipaso07*               | C | | C | L | |
| Montes Chang, Piero Francisco | *PieroMchang*               | | L | C | | C |
| Pancorbo Amorós, Italo Raul | *pancorboitalo-design*               | | C | C | | L |

*L = Líder | C = Colaborador*

---

#### 5.2.1.3. Sprint Backlog 1
<a id="5-2-1-3-sprint-backlog-1"></a>

El objetivo principal de este Sprint es implementar y desplegar la primera versión del Landing Page de RoadWatch OS, cubriendo las secciones de presentación de valor, funcionalidades, planes de suscripción, testimonios y formulario de contacto, con CTAs diferenciados para cada segmento objetivo.

A continuación, se presenta el tablero de control del Sprint 1. El Sprint # es el 1, con un velocity acordado de 20 Story Points y un total comprometido de 19 Story Points.

> **URL del Board en Trello:** https://trello.com/invite/b/6aaaf893146da1803fa7c582/ATTI953be54ae0a00d9a1f783b712cdcda28CEA7DD62/roadwatch-os-sprint-1

*![Trello.png](assets/images/chapter5/Trello-Sprint%201.png)*

| **Story Id** | **Story Title** | **Task Id**| **Task Title** | **Task Description** | **Estimation (Hours)** | **Assigned To** | **Status** |
|:---|:---|:---|:---|:---|:---|:---|:---|
| US02 | Demo de Tablero Geolocalizado | T01 | Sección "Funciones" con mapa demo | Implementar la sección de funcionalidades del Landing Page mostrando un mapa estático o animación del tablero de monitoreo como demo visual. | 4 | Conde Huashuayo, Sebasthian | Done |
| US03 | Explicación de planes | T02 | Sección "Planes" con tabla comparativa | Desarrollar la sección de planes con tabla de comparación Base / Profesional / Enterprise y sus características. | 4 | Montes Chang, Piero | Done |
| US04 | CTA Segmento Consultora | T03 | Botón CTA "Monitorea tu proyecto" | Implementar el call-to-action para el segmento de consultoras supervisoras, con redirección a la vista de registro/login de la Web App. | 2 | Diaz De La Cruz, Sebastian | Done |
| US05 | CTA Segmento Empresa Multi-Proyecto | T04 | Botón CTA "Gestiona tu cartera" | Implementar el call-to-action para el segmento de empresas constructoras multi-proyecto, con redirección al dashboard. | 2 | Diaz De La Cruz, Sebastian | Done |
| US06 | Caso de Uso / Testimonio | T05 | Sección de métricas e impacto | Implementar sección con cifras de impacto ilustrativas (ej. reducción de tiempo de respuesta, proyectos integrados). | 3 | Conde Huashuayo, Sebasthian | Done |
| US08 | Formulario de Contacto Comercial | T06 | Formulario de contacto con validación | Desarrollar el formulario de captura de leads con validación de campos y mensaje de confirmación al enviar. | 4 | Diaz De La Cruz, Sebastian | Done |
| — | Configuración general | T07 | Navbar y estructura base del Landing Page | Implementar el navbar responsivo con logo, secciones y links de navegación internos. Configurar la estructura HTML base del proyecto. | 3 | Cabrera Sotelo, Camila | Done |
| — | Configuración general | T08 | Hero Section con propuesta de valor | Diseñar e implementar la sección hero con headline, subtítulo, imagen de fondo y CTAs principales. | 3 | Cabrera Sotelo, Camila | Done |
| — | Despliegue | T09 | Configuración y despliegue en GitHub Pages | Configurar el repositorio para despliegue automático vía GitHub Pages desde la rama main. Verificar el correcto funcionamiento del sitio desplegado. | 2 | Pancorbo Amorós, Italo | Done |

---

#### 5.2.1.4. Development Evidence for Sprint Review
<a id="5-2-1-4-development-evidence-for-sprint-review"></a>

Durante el Sprint 1 se implementó la primera versión del Landing Page de RoadWatch OS. Los commits realizados en el repositorio evidencian el avance progresivo por secciones y la aplicación de una estrategia de desarrollo basada en ramas feature.

| Repository | Branch | Commit Id | Commit Message | Commit Message Body | Commited on (Date) |
|:---|:---|:---|:---|:---|:---|
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-LandingPage | feature/landing-structure | `52869286c7239091875e09e6935e52ba89deac6c` | `feat(landing): add base HTML structure` | Se agregó la estructura HTML base del Landing Page de RoadWatch OS. | 2026-09-16 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-LandingPage | feature/header | `f4c281f021cab74c299ebca7a661ff1e19a0ba53` | `feat(header): add navigation header` | Se implementó el encabezado de navegación principal del Landing Page. | 2026-09-16 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-LandingPage | feature/hero | `c1e7e45f0d206e252a2a352581b3ec8631e059be` | `feat(hero): add landing hero section` | Se implementó la sección Hero con la presentación principal de RoadWatch OS. | 2026-09-16 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-LandingPage | feature/solutions | `f6ea802311d905ac384f69933ebc66f080baba8a` | `feat(solutions): add environmental solutions section` | Se agregó la sección de soluciones ambientales del Landing Page. | 2026-09-16 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-LandingPage | feature/benefits | `ac12b760c23af3125a847ee8c1a7d20ce51b027d` | `feat(benefits): add benefits section` | Se implementó la sección de beneficios de RoadWatch OS. | 2026-09-16 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-LandingPage | feature/features | `23a0a8441d395cd9ff5637228bd18a52d53bd6cc` | `feat(features): add technology features section` | Se implementó la sección de funcionalidades principales del producto. | 2026-09-16 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-LandingPage | feature/pricing | `61dd05f1adb9aa491e167f43e3694e3d13e1d1ef` | `feat(pricing): add SaaS pricing plans` | Se agregó la sección de planes comerciales del Landing Page. | 2026-09-16 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-LandingPage | feature/team | `ead82cfd4f06492dba1471288496079579f9efd3` | `feat(team): add team section` | Se implementó la sección de presentación del equipo VíaNexo. | 2026-09-16 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-LandingPage | feature/testimonials | `5a19956fd32f3484084eb90fbfe68171167c3d9f` | `feat(testimonials): add testimonials and final CTA` | Se agregó la sección de testimonios y el llamado a la acción final. | 2026-09-16 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-LandingPage | feature/footer | `def4c893cde8902b11f7df50e9c84108fde2b821` | `feat(footer): add site footer` | Se implementó el footer principal del Landing Page. | 2026-09-16 |

---

#### 5.2.1.5. Execution Evidence for Sprint Review
<a id="5-2-1-5-execution-evidence-for-sprint-review"></a>

Al finalizar el Sprint 1, se logró desplegar la primera versión funcional del Landing Page de RoadWatch OS en GitHub Pages. El sitio presenta todas las secciones planificadas en el Sprint Backlog: navbar responsivo, hero section con propuesta de valor, sección de funcionalidades con demo visual del tablero de monitoreo, sección de planes de suscripción con tabla comparativa, sección de métricas de impacto, CTAs diferenciados para cada segmento objetivo y formulario de contacto comercial con validación.

La experiencia es consistente entre el segmento de empresas constructoras y supervisoras ambientales, y los call-to-action de cada segmento redirigen al usuario a la vista correspondiente en la Web Application (actualmente apuntando a la URL de la futura aplicación).

**Video de navegación del Landing Page (Sprint 1):**  
URL: *https://upcedupe-my.sharepoint.com/:v:/g/personal/u202410421_upc_edu_pe/IQC42lSycdIVS4-Oi0OhpG9EATYxm0X6Y7foFXAAdKn9XwU?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=RUyDKY*  

---

#### 5.2.1.6. Services Documentation Evidence for Sprint Review
<a id="5-2-1-6-services-documentation-evidence-for-sprint-review"></a>

Durante el Sprint 1, el alcance de implementación se centró exclusivamente en el Landing Page estático. No se implementaron endpoints de Web Services en este Sprint, por lo que no aplica documentación de API para esta entrega.

Como preparación para los Sprints siguientes, el equipo definió la estructura base de los endpoints que serán documentados con OpenAPI/Swagger a partir del Sprint 3, en concordancia con los Technical Stories del Product Backlog (US24 al US39).

| Endpoint | Acción | Estado |
|:---|:---|:---|
| `POST /api/v1/auth/login` | Autenticación JWT | Pendiente (Sprint 3) |
| `GET /api/v1/projects` | Listado de proyectos viales | Pendiente (Sprint 3) |
| `POST /api/v1/indicators` | Registro de indicador ambiental | Pendiente (Sprint 3) |
| `GET /api/v1/reports/{projectId}` | Generación de reporte de auditoría | Pendiente (Sprint 3) |

---

#### 5.2.1.7. Software Deployment Evidence for Sprint Review
<a id="5-2-1-7-software-deployment-evidence-for-sprint-review"></a>

Durante el Sprint 1 se realizó el despliegue del Landing Page de RoadWatch OS en **GitHub Pages**. A continuación, se describen los pasos realizados:

1. **Creación del repositorio:** Se creó el repositorio público `RoadWatch-OS-LandingPage` bajo la organización `DA-Open-Source-1ASI0729-2620-7729` en GitHub.

2. **Inicialización del proyecto:** Se inicializó el repositorio con la estructura de carpetas base (`index.html`, `css/`, `js/`, `assets/`) y se realizó el primer commit desde la rama `main`.

3. **Configuración de GitHub Pages:** Desde la pestaña **Settings > Pages** del repositorio, se seleccionó la rama `main` como fuente de despliegue con la carpeta raíz `/`.

4. **Verificación del despliegue:** GitHub Pages generó automáticamente la URL de producción del sitio. Se verificó el correcto renderizado de todas las secciones y la responsividad en dispositivos móviles.

5. **Automatización de actualizaciones:** Cada push a la rama `main` actualiza automáticamente el sitio sin configuración adicional.

![Configuración y despliegue en GitHub Pages](assets/images/chapter5/Step1.png)
![Configuración y despliegue en GitHub Pages 2](assets/images/chapter5/Step2.png)

URL del Landing Page desplegado:  
https://da-open-source-1asi0729-2620-7729.github.io/RoadWatch-OS-LandingPage/

---

#### 5.2.1.8. Team Collaboration Insights during Sprint
<a id="5-2-1-8-team-collaboration-insights-during-sprint"></a>

Durante el Sprint 1, todos los miembros del equipo participaron activamente en la implementación del Landing Page, asumiendo responsabilidades sobre secciones específicas según la matriz de líderes y colaboradores definida en la sección 5.2.1.2.

La estrategia de colaboración adoptada fue la siguiente: cada miembro trabajó sobre su rama `feature/<sección>` correspondiente, realizando commits frecuentes con mensajes bajo la convención de Conventional Commits. Una vez completada cada sección, se realizó un Pull Request hacia la rama `develop` para revisión del líder del aspecto correspondiente. Tras la revisión, se realizó el merge y, al concluir el Sprint, se integró `develop` en `main` para el despliegue final.

A continuación, se presentan los analíticos de colaboración del repositorio del Landing Page:

![Landing Insights](assets/images/chapter5/landingInsights.jpg)

**Resultados e insights de la Landing Page.**

![Report Insights](assets/images/chapter5/reportInsights.jpg)

**Resultados e insights del reporte.**

| Miembro del equipo | Contribuciones principales en el Sprint |
|:---|:---|
| Cabrera Sotelo, Camila Celeste | Implementación de Navbar y Hero Section; revisión general de responsividad. |
| Conde Huashuayo, Sebasthian Alex | Sección de Funcionalidades con demo visual del tablero de monitoreo; sección de testimonios y métricas de impacto. |
| Diaz De La Cruz, Sebastian Gabriel | CTAs diferenciados para segmentos constructora y supervisora; formulario de contacto con validación. |
| Montes Chang, Piero Francisco | Sección de Planes con tabla comparativa de suscripciones. |
| Pancorbo Amorós, Italo Raul | Configuración del entorno de despliegue en GitHub Pages; gestión de ramas y merge final a `main`. |

---

### 5.2.2. Sprint 2
<a id="5-2-2-sprint-2"></a>

#### 5.2.2.1. Sprint Planning 2
<a id="5-2-2-1-sprint-planning-2"></a>

El Sprint 2 tiene como objetivo principal la implementación y despliegue de la primera versión funcional de la **Frontend Web Application** de RoadWatch OS, abarcando las vistas e interacciones principales de los **7 Bounded Contexts** definidos en la arquitectura (*Identity & Access Management*, *Subscription Management*, *Project Management*, *Environmental Monitoring*, *Incident & Mitigation Management*, *Document & Evidence Management* y *Reports & Compliance Management*), utilizando adaptadores de datos simulados (*Mock Adapters*) para validar los flujos de los segmentos de empresas constructoras viales y empresas supervisoras ambientales.

| Sprint # | Sprint 2 |
|:---|:---|
| **Sprint Planning Background** | |
| Date | 2026-09-22 |
| Time | 08:00 PM |
| Location | Reunión virtual vía Discord |
| Prepared By | Pancorbo Amorós, Italo Raul |
| Attendees | Cabrera Sotelo, Camila Celeste / Conde Huashuayo, Sebasthian Alex / Diaz De La Cruz, Sebastian Gabriel / Montes Chang, Piero Francisco / Pancorbo Amorós, Italo Raul |
| Sprint 1 Review Summary | Se completó y desplegó satisfactoriamente la primera versión del Landing Page en GitHub Pages cumpliendo los 19 Story Points comprometidos. Durante la revisión de la entrega AV1 se identificó la necesidad de refinar el alcance del MVP (descartando integraciones directas con sensores físicos IoT e IA) y consolidar el diseño arquitectónico en 7 Bounded Contexts claramente delimitados. |
| Sprint 1 Retrospective Summary | El equipo acordó mantener la estrategia de ramificación *GitFlow* con *Conventional Commits*, dividir el desarrollo de la Web Application en módulos independientes por *Bounded Context* para evitar conflictos de integración, y emplear un *App Shell* compartido junto con *Mock Adapters* mientras se prepara la implementación del Backend para el siguiente Sprint. |
| **Sprint Goal & User Stories** | |
| Sprint 2 Goal | Our focus is on delivering the first functional version of the RoadWatch OS Frontend Web Application deployed in a QA environment. We believe it enables both target segments (road construction companies and environmental supervision consultants) to navigate their tailored workspaces and execute core environmental tracking flows across all 7 Bounded Contexts. This will be confirmed when users can authenticate by profile, manage projects and monitoring points, record and filter environmental measurements, manage alerts and incidents on the Kanban board, attach regulatory documents/evidence, and generate compliance reports. |
| Sprint 2 Velocity | 32 Story Points |
| Sum of Story Points | 32 Story Points |

---

#### 5.2.2.2. Aspect Leaders and Collaborators
<a id="5-2-2-2-aspect-leaders-and-collaborators"></a>

Para el Sprint 2, el trabajo se ha paralelizado enfocándose en los **7 Bounded Contexts** de la plataforma. Cada miembro del equipo asume el rol de líder (`L`) en los dominios que le fueron asignados y colabora (`C`) en las integraciones transversales y el *App Shell* compartido.

| Team Member | GitHub Username | Identity & Access | Subscription Mgmt | Project Mgmt | Env. Monitoring | Incident & Mitigation | Document & Evidence | Reports & Compliance |
|:---|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Cabrera Sotelo, Camila Celeste | *whcamm* | L | L | | | | | |
| Conde Huashuayo, Sebasthian Alex | *SebasthianCH* | | C | L | C | | | |
| Diaz De La Cruz, Sebastian Gabriel | *tipaso07* | | | | C | C | L | L |
| Montes Chang, Piero Francisco | *PieroMchang* | | | C | L | | | |
| Pancorbo Amorós, Italo Raul | *pancorboitalo-design* | C | | | C | L | C | |

*L = Líder | C = Colaborador*

Los colaboradores se asignan según las relaciones entre Bounded Contexts definidas en el Design-Level EventStorming (4.6.1) y en el Component Diagram (4.6.4). En cada punto de integración, el líder del contexto que consume la relación colabora en el contexto que la expone:

| Punto de integración | Mecanismo | Líder del contexto que expone | Colaborador |
|:---|:---|:---|:---|
| Cuota de proyectos (*Project Quota Policy*) | Subscription → Project Management | Cabrera Sotelo, Camila | Conde Huashuayo, Sebasthian |
| Validación del `monitoringPointId` | Project Management → Environmental Monitoring | Conde Huashuayo, Sebasthian | Montes Chang, Piero |
| *Environmental Alert Generated* (*Auto-Incident Generation Policy*) | Environmental Monitoring → Incident & Mitigation | Montes Chang, Piero | Pancorbo Amorós, Italo |
| Evidencia antes del cierre (*Evidence Required Policy*) | Document & Evidence → Incident & Mitigation | Diaz De La Cruz, Sebastian | Pancorbo Amorós, Italo |
| *Measurement Classified*, *Incident Status Changed*, *Document Version Uploaded* | Monitoring / Incident / Document → Reports & Compliance | Montes Chang, Piero / Pancorbo Amorós, Italo / Diaz De La Cruz, Sebastian | Diaz De La Cruz, Sebastian |
| Navegación por rol en el App Shell (*Access Control Policy*) | Identity & Access → todos los contextos | Cabrera Sotelo, Camila | Pancorbo Amorós, Italo |

---

#### 5.2.2.3. Sprint Backlog 2
<a id="5-2-2-3-sprint-backlog-2"></a>

![Configuración y despliegue en GitHub Pages 2](assets/images/chapter5/EvidenciaTrello.jpeg)

> **URL del Board en Trello:** https://trello.com/invite/b/6ac45a47333a77ed1bb96de5/ATTId01870fd734279c8b64b2e32744d1f60715FC467/sprin2-roadwatch

El objetivo de este Sprint es establecer la primera versión funcional de la Web Application cubriendo los **7 Bounded Contexts** del sistema, asegurando que tanto las empresas constructoras viales como las supervisoras y consultoras ambientales puedan interactuar con sus respectivos módulos y flujos de trabajo.

| **Story Id** | **Story Title** | **Task Id** | **Task Title** | **Task Description** | **Estimation (Hours)** | **Assigned To** | **Status** |
|:---|:---|:---|:---|:---|:---|:---|:---|
| US01 / US21 | Autenticación y Login Minimalista | T01 | Login y gestión de sesiones por segmento | Implementar la vista de autenticación minimalista con selector de perfiles demostrativos por segmento (*Identity & Access Management*). | 4 | Cabrera Sotelo, Camila | Done |
| US23 | Selector de Color de Marca y Suscripción | T02 | Configuración de planes y cuenta | Implementar el módulo visual de planes de suscripción, cuotas operativas y preferencias de cuenta (*Subscription Management*). | 3 | Cabrera Sotelo, Camila | Done |
| US10 / US22 | Tarjetas y Lista de Proyectos | T03 | Gestión de portafolio y puntos de monitoreo | Desarrollar las vistas en tarjetas y tabla de proyectos viales, detalle de obra y visualización de puntos de monitoreo (*Project Management*). | 5 | Conde Huashuayo, Sebasthian | Done |
| US09 / US13 | Registro y Filtro de Indicadores | T04 | Dashboard ambiental, mediciones y alertas | Construir el formulario validado de registro de mediciones, filtros por tipo de indicador (aire, ruido, agua), historial y centro de alertas (*Environmental Monitoring*). | 5 | Montes Chang, Piero | Done |
| US11 / US18 | Tablero Kanban e Incidencias Críticas | T05 | Kanban de incidencias y seguimiento de mitigación | Implementar el tablero Kanban interactivo, listado de incidencias críticas, detalle de acciones de mitigación e historial de comentarios (*Incident & Mitigation Management*). | 5 | Pancorbo Amorós, Italo | Done |
| US14 | Adjuntar Evidencia Fotográfica y Documentos | T06 | Repositorio de evidencias y documentos normativos | Desarrollar las vistas de carga y consulta de evidencias fotográficas y control de documentos obligatorios por hito (*Document & Evidence Management*). | 4 | Diaz De La Cruz, Sebastian | Done |
| US15 / US19 | Progreso de Cumplimiento y Reportes | T07 | Generación y exportación visual de reportes | Implementar el flujo de generación de reportes de auditoría, filtros por rango de fechas e indicadores de cumplimiento (*Reports & Compliance Management*). | 4 | Diaz De La Cruz, Sebastian | Done |
| — | Integración Global (App Shell) | T08 | Enrutamiento e interfaz base compartida | Configurar el *layout* principal responsivo y la navegación diferenciada por rol conectando los 7 Bounded Contexts desarrollados por el equipo. | 4 | Pancorbo Amorós, Italo | Done |

---

#### 5.2.2.4. Development Evidence for Sprint Review
<a id="5-2-2-4-development-evidence-for-sprint-review"></a>

Durante el Sprint 2, el equipo trabajó sobre el repositorio de la Frontend Web Application, organizando la implementación por Bounded Contexts. Los commits evidencian el desarrollo modular de las principales funcionalidades de la aplicación y su integración progresiva.

| Repository | Branch | Commit Id | Commit Message | Commit Message Body | Commited on (Date) |
|:---|:---|:---|:---|:---|:---|
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Frontend | ft-identity-access-management | `0841063c9a2cc3e8287a8f6d738ed89db03ca648` | `feat(identity-access): add mock authentication module` | Se implementó el módulo de autenticación mock para la interfaz de acceso y gestión básica de sesión. | 2026-10-05 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Frontend | ft-subscription-management | `a180fc98dba70012f29bd1e649ecbabcb7b59b36` | `feat(subscription): add plans and subscription management module` | Se implementó el módulo de planes y gestión visual de suscripciones. | 2026-10-05 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Frontend | ft-project-management | `26d2ed911713894be678ff7bc7fc4bbe75ab3e1e` | `feat(projects): add project detail view` | Se agregó la vista de detalle de proyectos y la estructura de navegación asociada. | 2026-10-06 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Frontend | ft-project-management | `81e0ef31eac900337b3d6e8f7875161d122f374a` | `refactor(projects): adopt shared shell for portfolio views` | Se integraron las vistas de Project Management con el App Shell compartido. | 2026-10-06 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Frontend | ft-environmental-monitoring | `548943a` | `feat(monitoring): add mock domain and data layer` | Se implementó la capa de dominio y adaptadores de datos simulados para mediciones y alertas ambientales. | 2026-10-05 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Frontend | ft-environmental-monitoring | `2f6c921` | `feat(monitoring): add operational monitoring views` | Se agregaron las vistas operativas de monitoreo ambiental, registro de mediciones y centro de alertas. | 2026-10-05 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Frontend | ft-incident-mitigation-management | `a9b90f966998e676ae4bdede115e1cb403cce1f1` | `feat(incidents): complete critical list and detail views` | Se completaron las vistas de incidencias críticas y detalle de incidencias. | 2026-10-06 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Frontend | ft-incident-mitigation-management | `7ab180dcca4e4bcd2db12083e88345446bb6ac5d` | `refactor(incidents): adopt shared navigation and shell` | Se integró Incident & Mitigation Management con la navegación y estructura compartidas. | 2026-10-06 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Frontend | ft-document-evidence-management | `556220c2f16fe88252cae0a9d3497d76ad4edcdc` | `feat(document-evidence): add evidence and required document views` | Se agregaron las vistas de evidencias y documentos requeridos. | 2026-10-05 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Frontend | ft-document-evidence-management | `6f4dffe53a56a5dff85044a55ab95cb556387265` | `feat(document-evidence): complete document registration flow` | Se completó el flujo visual de registro y gestión de documentos. | 2026-10-05 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Frontend | ft-reports-compliance-management | `f287c233ce1716c0d802142ff41285a6d2e39cff` | `feat(reports-compliance): connect audit generation flow` | Se conectó el flujo de generación visual de reportes de auditoría. | 2026-10-05 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Frontend | ft-reports-compliance-management | `09d3800555ff208cc10139cafc348ea667b7383b` | `feat(reports-compliance): complete report export workflow` | Se completó el flujo visual de exportación de reportes. | 2026-10-05 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Frontend | ft-reports-compliance-management | `e7aa7a1bc9934ffa8020c21cb01b6d02f43cb786` | `feat(reports-compliance): add report and compliance filters` | Se agregaron filtros para reportes y vistas de cumplimiento. | 2026-10-05 |

---

#### 5.2.2.5. Execution Evidence for Sprint Review
<a id="5-2-2-5-execution-evidence-for-sprint-review"></a>

Al finalizar el Sprint 2, la Web Application cuenta con la estructura funcional de los **7 Bounded Contexts** definidos en la arquitectura. Los usuarios pueden iniciar sesión según su segmento (Empresa Constructora Vial o Empresa Supervisora / Consultora Ambiental), gestionar sus planes de suscripción, visualizar su portafolio de proyectos y puntos de monitoreo, registrar y consultar mediciones y alertas ambientales, gestionar incidencias y acciones de mitigación mediante un tablero Kanban interactivo, adjuntar evidencias y documentos normativos, y generar reportes consolidados de cumplimiento.

![Evidencia del Front](/assets/images/chapter5/FrontEvidence.jpeg)
**Video de navegación de la Web Application (Sprint 2):**  

[Ver video de demostración del Sprint 2](https://upcedupe-my.sharepoint.com/:v:/g/personal/u202418029_upc_edu_pe/IQCFRFdP6q8ZRJBC7Daji-IfAVr9wVVrikD0aTOqE_KlONk?e=uweOJY)

---

#### 5.2.2.6. Services Documentation Evidence for Sprint Review
<a id="5-2-2-6-services-documentation-evidence-for-sprint-review"></a>

Durante el Sprint 2, el alcance de implementación correspondió a la primera versión funcional de la **Frontend Web Application**, la cual opera mediante capas de dominio y adaptadores de datos simulados (*Mock Adapters*). En paralelo, se definieron las rutas y contratos esperados de la API RESTful (OpenAPI / Swagger) para los **7 Bounded Contexts**, cuya implementación en el Backend se realizará a partir del Sprint 3:

| Bounded Context | Endpoint Principal Proyectado | Acción | Estado en Sprint 2 |
|:---|:---|:---|:---|
| Identity & Access Management | `POST /api/v1/auth/login` | Autenticación de usuarios y emisión de sesión | Definido (Mock en Frontend / Pendiente Backend en Sprint 3) |
| Subscription Management | `GET /api/v1/subscriptions/current` | Consulta y actualización de plan de suscripción | Definido (Mock en Frontend / Pendiente Backend en Sprint 3) |
| Project Management | `GET /api/v1/projects` | Gestión de proyectos viales y puntos de monitoreo | Definido (Mock en Frontend / Pendiente Backend en Sprint 3) |
| Environmental Monitoring | `POST /api/v1/measurements` | Registro de mediciones ambientales y evaluación de alertas | Definido (Mock en Frontend / Pendiente Backend en Sprint 3) |
| Incident & Mitigation Management | `PATCH /api/v1/incidents/{id}/status` | Gestión de estados de incidencias y acciones de mitigación | Definido (Mock en Frontend / Pendiente Backend en Sprint 3) |
| Document & Evidence Management | `POST /api/v1/documents` | Registro de evidencias fotográficas y documentos normativos | Definido (Mock en Frontend / Pendiente Backend en Sprint 3) |
| Reports & Compliance Management | `GET /api/v1/reports/compliance` | Consolidación de indicadores y generación de reportes de auditoría | Definido (Mock en Frontend / Pendiente Backend en Sprint 3) |

---

#### 5.2.2.7. Software Deployment Evidence for Sprint Review
<a id="5-2-2-7-software-deployment-evidence-for-sprint-review"></a>

La primera versión funcional de la Frontend Web Application fue integrada y desplegada en **Vercel** como entorno de validación y pruebas (QA):

1. **Integración de ramas en GitHub:** Cada módulo desarrollado en su respectiva rama `ft-<bounded-context>` fue revisado e integrado en la rama `develop` y posteriormente consolidado en `main`.
2. **Configuración de despliegue continuo en Vercel:** Se vinculó el repositorio `RoadWatch-OS-Frontend` con Vercel, configurando el comando de compilación de Angular (`npm run build`) y las reglas de reescritura (`vercel.json`) para soportar el enrutamiento SPA (*Single-Page Application*).
3. **Verificación del entorno desplegado:** Se validó el acceso público a través de la URL generada por Vercel, comprobando el funcionamiento de los perfiles demostrativos de ambos segmentos y la navegación entre los 7 Bounded Contexts con datos simulados.

![Configuración y despliegue en GitHub Pages 2](assets/images/chapter5/CambiarRama.jpeg)

![Configuración y despliegue en GitHub Pages 2](assets/images/chapter5/RamaDevelop.jpeg)

![Configuración y despliegue en GitHub Pages 2](assets/images/chapter5/Vercel1.jpeg)

![Configuración y despliegue en GitHub Pages 2](assets/images/chapter5/Vercel2.jpeg)

![Configuración y despliegue en GitHub Pages 2](assets/images/chapter5/Vercel3.jpeg)

![Configuración y despliegue en GitHub Pages 2](assets/images/chapter5/Deploy1.jpeg)

![Configuración y despliegue en GitHub Pages 2](assets/images/chapter5/Deploy2.jpeg)


URL de la Web Application desplegada (QA):  

[*(Enlace al entorno de QA de VíaNexo / RoadWatch OS)*](https://road-watch-os-frontend.vercel.app/auth/login)

---

#### 5.2.2.8. Team Collaboration Insights during Sprint
<a id="5-2-2-8-team-collaboration-insights-during-sprint"></a>

La estrategia colaborativa de este Sprint consistió en la separación modular de responsabilidades por *Bounded Context* ("Divide y Vencerás"). Cada integrante trabajó dentro del directorio de su contexto asignado en el repositorio `RoadWatch-OS-Frontend` sobre ramas `ft-<bounded-context>`, reduciendo los conflictos de fusión (*Merge Conflicts*) al momento de integrar las vistas en el *App Shell* principal.

| Miembro del equipo | Contribuciones principales en el Sprint 2 |
|:---|:---|
| Cabrera Sotelo, Camila Celeste | Implementó los módulos frontend de *Identity & Access Management* (login segmentado) y *Subscription Management* (planes y configuración de suscripción), además de elaborar los prototipos y flujos UX/UI. |
| Conde Huashuayo, Sebasthian Alex | Desarrolló el módulo de *Project Management*, incluyendo las vistas de portafolio de proyectos, detalle de proyecto y visualización de puntos de monitoreo viales. |
| Diaz De La Cruz, Sebastian Gabriel | Desarrolló los módulos de *Document & Evidence Management* y *Reports & Compliance Management*, integró el *App Shell* compartido entre contextos y configuró el despliegue continuo en Vercel. |
| Montes Chang, Piero Francisco | Construyó el módulo de *Environmental Monitoring*, abarcando el panel de indicadores, el formulario validado de registro de mediciones, el historial y el centro de alertas ambientales. |
| Pancorbo Amorós, Italo Raul | Desarrolló el módulo de *Incident & Mitigation Management* (tablero Kanban interactivo, listado de incidencias críticas y detalle de acciones de mitigación) y apoyó en la integración general del Sprint 2. |


Evidencia de insights del reporte:

![Insight del reporte](assets/images/chapter5/InsightReport.jpeg)


Evidencia insights de la landing page:

![Insight de la landing page](assets/images/chapter5/InsightLanding.jpeg)


Evidencia insights del front:


![Insight del frontend](assets/images/chapter5/InsightFront.jpeg)

---

### 5.2.3. Sprint 3
<a id="5-2-3-sprint-3"></a>

#### 5.2.3.1. Sprint Planning 3
<a id="5-2-3-1-sprint-planning-3"></a>

El Sprint 3 se orienta a implementar la **RESTful API** de RoadWatch OS en el repositorio `RoadWatch-OS-Backend`, organizada en los siete *Bounded Contexts* definidos en la arquitectura. La primera versión funcional del frontend del Sprint 2 utiliza adaptadores de datos simulados; este Sprint prepara los servicios de backend que permitirán sustituirlos de manera gradual. Las implementaciones de las ramas feature ya se integraron en `develop`. Las capturas de Railway documentan el despliegue del backend y MySQL; la validación de los flujos REST y de la persistencia desde la API sigue pendiente de evidencia.

| Sprint # | Sprint 3 |
|:---|:---|
| **Sprint Planning Background** | |
| Date, Time and Location | Pendientes de registro por el equipo. |
| Sprint 2 Review Summary | El Sprint 2 entregó la primera versión funcional de la Web Application para los siete Bounded Contexts, desplegada en un entorno de QA con *Mock Adapters*. |
| Sprint 2 Retrospective Summary | Se mantiene el trabajo por Bounded Context y rama feature, con contratos REST y referencias por ID para reducir el acoplamiento entre módulos. |
| **Sprint Goal & User Stories** | |
| Sprint 3 Goal | Implementar y documentar los servicios REST principales de los siete Bounded Contexts, con persistencia relacional, reglas de dominio y servicios de aplicación separados para comandos y consultas. La meta se confirmará cuando los endpoints estén integrados, sean visibles en Swagger UI y puedan ejecutarse contra la base de datos del equipo. |
| Velocity Reference | 32 Story Points del Sprint 2; la capacidad y el compromiso de Sprint 3 requieren estimación del equipo. |
| Sum of Story Points | Pendiente de confirmación en Sprint Planning 3. |

---

#### 5.2.3.2. Aspect Leaders and Collaborators
<a id="5-2-3-2-aspect-leaders-and-collaborators"></a>

La asignación siguiente refleja **autoría observada en los commits de las ramas remotas del backend al 2026-11-10**. Identifica responsables de trabajo visible para organizar el backlog; no sustituye la confirmación de roles y carga de trabajo por el equipo. Los commits iniciales de preparación de los BCs fueron realizados por Sebastián Díaz.

| Bounded Context | Rama de backend | Contribuidores observados | Evidencia representativa |
|:---|:---|:---|:---|
| Identity & Access / Subscription Management | `ft-identity-subscription` | Diaz De La Cruz, Sebastian Gabriel (`Sebastián Díaz`) | `118446f` autenticación; `2b2fe9d` planes y suscripciones; `8b40d9b` cuotas. |
| Project Management | `ft-project-management` | Pancorbo Amorós, Italo Raul (`pancorboitalo-design`); Diaz De La Cruz, Sebastian Gabriel (`Sebastián Díaz`) | `c8db7b8` modelo de proyecto; `b4fc0f0` API REST; `1bccba4` ajuste de persistencia. |
| Environmental Monitoring | `ft-environmental-monitoring` | Montes Chang, Piero Francisco (`PieroMchang`); Diaz De La Cruz, Sebastian Gabriel (`Sebastián Díaz`) | `4bf3bef` modelo de dominio; `a0f0fa5` endpoints; `f34282c` validación de umbrales. |
| Incident & Mitigation Management | `ft-incident-mitigation` | Cabrera Sotelo, Camila Celeste (`whcamm`); Diaz De La Cruz, Sebastian Gabriel (`Sebastián Díaz`) | `b6dc904` modelo de incidencias; `4c7d0dc` API REST; `9760432` revisión de vencimientos. |
| Document & Evidence / Reports & Compliance Management | `ft-document-reports` | Conde Huashuayo, Sebasthian Alex (`SebasthianCH`); Diaz De La Cruz, Sebastian Gabriel (`Sebastián Díaz`) | `d9c4912` documentos; `8d4d122` reportes; `968fda9` exportación PDF. |

Para mantener el formato de los Sprints anteriores, la matriz siguiente resume las responsabilidades **inferidas de la autoría de commits**: `L` indica quien realizó la implementación principal del aspecto y `C` una contribución registrada. La autoría de los merges atribuye la coordinación técnica de la integración a Sebastián Díaz. El equipo debe confirmar si estos roles coinciden con los acordados en el Sprint Planning.

| Team Member | GitHub Username | Identity & Access | Subscription Mgmt | Project Mgmt | Env. Monitoring | Incident & Mitigation | Document & Evidence | Reports & Compliance | Integración backend |
|:---|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Diaz De La Cruz, Sebastian Gabriel | *tipaso07* | L | L | C | C | C | C | C | L |
| Pancorbo Amorós, Italo Raul | *pancorboitalo-design* | | | L | | | | | |
| Montes Chang, Piero Francisco | *PieroMchang* | | | | L | | | | |
| Cabrera Sotelo, Camila Celeste | *whcamm* | | | | | L | | | |
| Conde Huashuayo, Sebasthian Alex | *SebasthianCH* | | | | | | L | L | |

*L = implementación principal observada | C = contribución observada. Las celdas vacías no implican ausencia de colaboración fuera de los commits examinados.*

---

#### 5.2.3.3. Sprint Backlog 3
<a id="5-2-3-3-sprint-backlog-3"></a>

Las tareas se trazan a las User Stories del Product Backlog y al trabajo integrado en `develop` al 2026-11-11. El estado distingue la integración del código de la validación funcional con MySQL y la aceptación de las historias. Las horas y el compromiso final deben acordarse en Sprint Planning.

| **Story Id** | **Story Title** | **Task Id** | **Task Title** | **Task Description** | **Estimation (Hours)** | **Assigned To** | **Status** |
|:---|:---|:---|:---|:---|:---|:---|:---|
| US24 / US32 / US53 | Autenticación, contraseñas y roles | T01 | API de Identity & Access | Implementar usuarios, autenticación JWT, roles, permisos y operaciones de cuenta mediante controladores, servicios de aplicación y persistencia propios del BC. | Por estimar | Diaz De La Cruz, Sebastian | Integrado en `develop`; validación funcional pendiente |
| US39 / US57 | Planes y cuotas de suscripción | T02 | API de Subscription Management | Exponer planes, suscripciones y consulta de cuotas; acordar el contrato que Project Management utilizará antes de crear proyectos. | Por estimar | Diaz De La Cruz, Sebastian | Integrado en `develop`; contrato de cuotas por validar |
| US26 / US20 / US48 | Proyectos y puntos de monitoreo | T03 | API de Project Management | Implementar proyectos, puntos de monitoreo, archivo y consulta paginada; verificar referencias externas por ID y persistencia en MySQL. | Por estimar | Pancorbo Amorós, Italo; Diaz De La Cruz, Sebastian | Integrado en `develop`; validación con MySQL pendiente |
| US27 / US28 | Mediciones y comparación normativa | T04 | API de Environmental Monitoring | Registrar y consultar mediciones, configurar umbrales y evaluar alertas ambientales, conservando `monitoringPointId` como referencia al BC de proyectos. | Por estimar | Montes Chang, Piero; Diaz De La Cruz, Sebastian | Integrado en `develop`; validación funcional pendiente |
| US29 / US34 / US43 | Incidencias y mitigación | T05 | API de Incident & Mitigation | Gestionar incidencias, acciones, comentarios, transiciones de estado y revisión de vencimientos; acordar el contrato de alertas con Environmental Monitoring. | Por estimar | Cabrera Sotelo, Camila; Diaz De La Cruz, Sebastian | Integrado en `develop`; validación funcional pendiente |
| US30 / US54 / US56 | Evidencias y documentos normativos | T06 | API de Document & Evidence | Gestionar evidencias, documentos obligatorios y versiones con consultas por IDs de los contextos relacionados. | Por estimar | Conde Huashuayo, Sebasthian; Diaz De La Cruz, Sebastian | Integrado en `develop`; validación funcional pendiente |
| US33 / US35 / US36 | Cumplimiento y reportes | T07 | API de Reports & Compliance | Consolidar indicadores y datos históricos por proyecto, generar reportes y exponer la exportación a PDF mediante contratos con los BCs fuente. | Por estimar | Conde Huashuayo, Sebasthian; Diaz De La Cruz, Sebastian | Integrado en `develop`; validación funcional pendiente |
| US25 / US31 | Swagger y paginación | T08 | Documentación y consultas REST | Publicar los endpoints en `/swagger-ui/index.html`, documentar solicitudes y respuestas, y verificar paginación en los listados aplicables. | Por estimar | Equipo de backend, por BC | Código integrado; revisión de Swagger UI en ejecución pendiente |
| US26 / US27 / US29 / US30 / US35 | Integración de servicios | T09 | Validación integrada del backend | Integrar las ramas revisadas, resolver contratos entre contextos y comprobar los flujos REST y la persistencia contra la base MySQL del equipo antes del Sprint Review. | Por estimar | Equipo de backend | Ramas integradas; flujo REST y MySQL pendientes de validación |

> **URL del Board en Trello (Sprint 3):** https://trello.com/invite/b/6af79e14bc4744f18eca99eb/ATTI2a6f590a79b636427ecbf0a061cf468bBE7268C9/sprin-backlog-roadwatch

La captura del tablero **Sprint Backlog - RoadWatch** muestra cuatro listas: `To do`, `In process`, `To review` y `Done`. En el momento de la captura, las tres primeras tienen 0 tarjetas y `Done` tiene 10. Se observan las historias US24, US32, US53, US26, US20, US48, US27, US28, US29 y US34. Algunas corresponden a historias agrupadas por tarea técnica en la tabla anterior; la imagen no cubre todas las tareas T01–T09.

![Tablero Trello del Sprint Backlog 3](assets/images/chapter5/sprint3-trello-backlog.png)

*Figura: diez historias visibles en Done y ninguna tarjeta en las otras listas del tablero.*

La organización por estados y sus contadores permite reconocer el avance del tablero; los identificadores US facilitan relacionar las tarjetas con el Product Backlog. La captura no muestra responsables, estimaciones, fechas de movimiento, criterios de aceptación ni resultados de pruebas. Por ello, `Done` se interpreta como el estado asignado en Trello y no como confirmación de aceptación funcional.

---

#### 5.2.3.4. Development Evidence for Sprint Review
<a id="5-2-3-4-development-evidence-for-sprint-review"></a>

El historial del repositorio `RoadWatch-OS-Backend` muestra avances en las ramas feature de los siete *Bounded Contexts*. La tabla reúne **commits representativos**, no el historial completo. Se registran el hash, autor, rama, mensaje y fecha observados en Git; los commits seleccionados no incluyen cuerpo de mensaje. Esta evidencia demuestra trabajo registrado en cada rama, pero no acredita por sí sola la integración en `develop`, la ejecución con MySQL ni la aceptación de las User Stories.

| Repository | Branch | Commit Id | Author | Commit Message | Commited on (Date) |
|:---|:---|:---|:---|:---|:---|
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Backend | `develop` (base de las ramas feature) | `ba3b8d73daf19f58fa922ef6a8a417f0b8cfb10e` | Sebastián Díaz | `chore(backend): initialize spring boot foundation` | 2026-11-08 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Backend | `ft-identity-subscription` | `118446f0670f9a5bf02a326d442b531602b22689` | Sebastián Díaz | `feat(iam): implement authentication and token handling` | 2026-11-10 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Backend | `ft-identity-subscription` | `2b2fe9d7df362d4dbf20b2eec738b2129d7f3434` | Sebastián Díaz | `feat(subscription): implement plans and subscriptions` | 2026-11-10 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Backend | `ft-identity-subscription` | `8b40d9b481a244ae09d72618f6b4b2f9d4eff7a6` | Sebastián Díaz | `feat(subscription): expose plans and quota facade` | 2026-11-10 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Backend | `ft-project-management` | `c8db7b8cbc2fb70c48c1b41a5e311a7e994afc62` | pancorboitalo-design | `feat(projects): add project domain model` | 2026-11-08 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Backend | `ft-project-management` | `b4fc0f09ea1e3b87f2848a67dc34f8ec5f843461` | pancorboitalo-design | `feat(projects): expose project REST API` | 2026-11-09 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Backend | `ft-project-management` | `a7e59f44628427a5674e321a8af6579177507062` | pancorboitalo-design | `feat(projects): add monitoring point services and REST API` | 2026-11-09 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Backend | `ft-project-management` | `1bccba43e47ed69b82e399503092ce0b74177dfd` | Sebastián Díaz | `fix(projects): align persistence table names` | 2026-11-10 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Backend | `ft-environmental-monitoring` | `4bf3bef785492a778f213c4035593bdf6babe80b` | PieroMchang | `feat(monitoring): add environmental monitoring domain model and services` | 2026-11-09 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Backend | `ft-environmental-monitoring` | `a0f0fa56487701065fc74e42579e2fe592242fd6` | PieroMchang | `feat(monitoring): expose environmental monitoring rest endpoints and assemblers` | 2026-11-09 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Backend | `ft-environmental-monitoring` | `f34282c007dc196ff7a606f993d045da6a023706` | Sebastián Díaz | `feat(monitoring): add threshold checks` | 2026-11-10 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Backend | `ft-incident-mitigation` | `b6dc9043f677ce76274594975c96c52f076577bc` | whcamm | `feat(incidents): add environmental incident domain model` | 2026-11-09 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Backend | `ft-incident-mitigation` | `4c7d0dc9ba3fa73ff46e00b9c920e9ac914d97b3` | whcamm | `feat(incidents): expose environmental incident REST API` | 2026-11-09 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Backend | `ft-incident-mitigation` | `9760432d14a30ebaa1423b416a5a5082d75d4c8a` | Sebastián Díaz | `feat(incidents): schedule overdue incident checks` | 2026-11-10 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Backend | `ft-document-reports` | `d9c4912f050e438605aa15bef506eea52b946a29` | SebasthianCH | `feat(documentevidence): add NormativeDocument aggregate` | 2026-11-09 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Backend | `ft-document-reports` | `1b32b54440c2f4092a4c0205f282cee10735acdc` | SebasthianCH | `feat(documentevidence): add REST controllers` | 2026-11-09 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Backend | `ft-document-reports` | `8d4d122a0868a2a3864a61aadb112f2b8132a375` | SebasthianCH | `feat(reportscompliance): add AuditReport aggregate` | 2026-11-09 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Backend | `ft-document-reports` | `08a9965949f2491b7a8588ae1e5824f8a92d8bf7` | SebasthianCH | `feat(reportscompliance): add REST resources, assembler and controller` | 2026-11-10 |
| DA-Open-Source-1ASI0729-2620-7729/RoadWatch-OS-Backend | `ft-document-reports` | `968fda94578710e6f368834b69565d5a449c4f6c` | Sebastián Díaz | `feat(reportscompliance): expose report pdf endpoint` | 2026-11-10 |

La evidencia corresponde a las ramas remotas consultadas el 2026-11-11. La integración en `develop` y las pruebas automatizadas se detallan a continuación. Las capturas de Railway documentan el despliegue y la presencia de tablas en MySQL, pero no una operación de la API contra esa base.


---

#### 5.2.3.5. Execution Evidence for Sprint Review
<a id="5-2-3-5-execution-evidence-for-sprint-review"></a>

Al 2026-11-11, la rama remota `origin/develop` del backend apunta a `c4b27dca9b4e0b859431a5a75a1e88ef15d53a91`. Los commits de integración `514f57d` (Identity & Access y Subscription), `b9dd05b` (Project Management), `01d28b0` (Environmental Monitoring), `f15e92d` (Incident & Mitigation) y `90504a0` (Document & Evidence y Reports & Compliance) figuran en su historial. Los extremos de las cinco ramas feature son ancestros de `origin/develop`. También figuran los cambios de integración entre alertas e incidencias (`63c20f4`) y de validación de evidencias de incidencias (`c4b27dc`).

Para comprobar el estado integrado sin alterar las ramas de trabajo, se extrajo una copia temporal del contenido de `origin/develop` y se ejecutaron los comandos siguientes con el JDK disponible en el entorno de revisión:

| Verificación | Comando | Resultado observado |
|:---|:---|:---|
| Compilación del backend integrado | `mvnw.cmd -q -DskipTests compile` | Finalizó correctamente. |
| Pruebas automatizadas sin la prueba que inicia el contexto con MySQL | `mvnw.cmd -q '-Dtest=*,!RoadwatchOsBackendApplicationTests' test` | 21 suites; 56 pruebas; 0 fallos, 0 errores y 0 omitidas, según los informes Surefire. |

La prueba `RoadwatchOsBackendApplicationTests` se excluyó porque requiere iniciar la aplicación con una base MySQL local. Este resultado verifica la compilación y las pruebas seleccionadas del código integrado; no acredita conexión real a MySQL, migración de datos, funcionamiento de todos los flujos HTTP ni aceptación de las User Stories. Los informes revisados incluyen pruebas de Project Management, Incident & Mitigation, Document & Evidence, Reports & Compliance y la integración entre mediciones ambientales e incidencias. No se identificaron suites dedicadas a Identity & Access o Subscription Management en esta ejecución.

---

#### 5.2.3.6. Services Documentation Evidence for Sprint Review
<a id="5-2-3-6-services-documentation-evidence-for-sprint-review"></a>

La siguiente relación se obtuvo de las rutas declaradas por los controladores REST en `origin/develop` al 2026-11-11. Registra la superficie disponible en el código integrado. Las capturas posteriores muestran Swagger UI publicado en Railway, con endpoints y esquemas visibles; no verifican la ejecución exitosa de cada operación.

| Bounded Context | Rutas representativas implementadas | Alcance verificable en código |
|:---|:---|:---|
| Identity & Access Management | `POST /api/v1/auth/login`; `POST /api/v1/users`; `GET /api/v1/users/{userId}`; `POST /api/v1/roles` | Autenticación, usuarios y roles. |
| Subscription Management | `GET /api/v1/plans`; `GET /api/v1/plans/{planId}` | Consulta de planes y fachada interna de cuotas; no se identificó `GET /api/v1/subscriptions/current`. |
| Project Management | `GET /api/v1/projects`; `POST /api/v1/projects`; `GET /api/v1/projects/{projectId}`; `PUT /api/v1/projects/{projectId}`; `GET /api/v1/projects/{projectId}/monitoring-points` | Proyectos y puntos de monitoreo. |
| Environmental Monitoring | `GET /api/v1/environmental-measurements`; `POST /api/v1/environmental-measurements`; `GET /api/v1/normative-thresholds`; `GET /api/v1/environmental-alerts` | Mediciones, umbrales y alertas. |
| Incident & Mitigation Management | `GET /api/v1/incidents`; `POST /api/v1/incidents`; `PATCH /api/v1/incidents/{incidentId}/status` | Incidencias, estado y recursos relacionados de comentarios y mitigación. |
| Document & Evidence Management | `/api/v1/evidences`; `/api/v1/normative-documents`; `/api/v1/required-documents` | Recursos de evidencias y documentos. |
| Reports & Compliance Management | `GET /api/v1/reports`; `POST /api/v1/reports`; `GET /api/v1/reports/{reportId}/pdf`; `GET /api/v1/compliance/summary`; `GET /api/v1/compliance/kpis` | Reportes, exportación PDF e indicadores de cumplimiento. |

Las rutas previstas en Sprint 2 eran contratos preliminares. En la implementación integrada, el registro de mediciones usa `/api/v1/environmental-measurements` y el resumen de cumplimiento usa `/api/v1/compliance/summary`; difieren de las rutas proyectadas `/api/v1/measurements` y `/api/v1/reports/compliance`. La documentación de consumo del frontend debe alinearse con las rutas efectivas. La comprobación automatizada de Project Management incluye una prueba de la ruta de Swagger UI en un contexto aislado. La revisión visual de la instancia desplegada se documenta a continuación.

Las siguientes capturas muestran Swagger UI abierto desde la URL pública `https://roadwatch-os-backend-production.up.railway.app/swagger-ui/swagger-ui/index.html`. En la primera se observan el título RoadWatch OS API, el enlace a `/v3/api-docs` y operaciones de Environmental Measurements y Environmental Alerts, con sus métodos y rutas. La segunda muestra esquemas de recursos, incluidos ProjectResource y MonitoringPointResource. Estas imágenes acreditan la publicación de la documentación interactiva en la instancia desplegada; no muestran respuestas reales de los endpoints ni prueban persistencia.

![Endpoints de RoadWatch OS visibles en Swagger UI desplegado](assets/images/chapter5/sprint3-swagger-endpoints.png)

*Figura: documentación OpenAPI publicada en Railway con rutas de mediciones y alertas ambientales.*

![Esquemas de recursos visibles en Swagger UI desplegado](assets/images/chapter5/sprint3-swagger-schemas.png)

*Figura: esquemas de recursos de Project Management y otros contextos en Swagger UI.*

---

#### 5.2.3.7. Software Deployment Evidence for Sprint Review
<a id="5-2-3-7-software-deployment-evidence-for-sprint-review"></a>

Las capturas del 2026-11-11 documentan la preparación y el despliegue del backend en el proyecto `bubbly-kindness` de Railway, entorno `production`. La primera muestra la pantalla de selección de un repositorio de GitHub; en ese momento la búsqueda aún no devolvía repositorios. Las siguientes muestran el servicio `RoadWatch-OS-Backend` en construcción, la incorporación del servicio MySQL con el volumen `mysql-volume` y su inicialización.

![Selección inicial de repositorio en Railway](assets/images/chapter5/sprint3-railway-github-selection.png)

*Figura: pantalla inicial para seleccionar un repositorio de GitHub en Railway.*

![Backend en proceso de construcción en Railway](assets/images/chapter5/sprint3-railway-backend-building.png)

*Figura: servicio RoadWatch-OS-Backend en estado Online mientras Railway muestra Building.*

![Servicio MySQL inicializándose en Railway](assets/images/chapter5/sprint3-railway-mysql-initializing.png)

*Figura: incorporación de MySQL y del volumen mysql-volume durante la inicialización.*

En la captura final, **RoadWatch-OS-Backend y MySQL aparecen `Online`** y Railway muestra el aviso `Restart successful`. La imagen respalda que los dos servicios estaban activos en el panel en ese momento. El aviso confirma que se reinició el despliegue; por sí solo no demuestra que los endpoints respondan ni que el backend haya completado una operación de lectura o escritura en MySQL.

![Backend y MySQL en línea tras reinicio en Railway](assets/images/chapter5/sprint3-railway-services-online.png)

*Figura: ambos servicios en línea en Railway después de un reinicio exitoso.*

La evidencia visual del despliegue queda incorporada al Sprint Review. Las nuevas capturas muestran la instancia MySQL activa, tablas creadas y actividad de recursos; su alcance se explica a continuación. La apertura de Swagger UI en la URL pública de Railway se documenta en la sección anterior. Para acreditar el funcionamiento de la API y su persistencia aún se requiere identificar el commit desplegado y registrar una prueba REST exitosa que lea o escriba datos en MySQL.

Las capturas posteriores de Railway muestran el despliegue `mysql:8` con estado `ACTIVE` y el mensaje `Deployment successful`. En la vista de datos se observan tablas de varios Bounded Contexts, entre ellas `users`, `roles`, `plans`, `subscriptions`, `projects`, `monitoring_points`, `evidences` y `audit_reports`. Esto acredita que la instancia MySQL está disponible y que existen estructuras de persistencia; la imagen no permite verificar el contenido de las filas ni identificar qué versión del backend creó cada tabla.

![Despliegue activo de MySQL en Railway](assets/images/chapter5/sprint3-railway-mysql-deployment.png)

*Figura: servicio MySQL activo y despliegue exitoso en Railway.*

![Tablas de RoadWatch OS visibles en MySQL](assets/images/chapter5/sprint3-railway-mysql-tables.png)

*Figura: tablas de varios Bounded Contexts visibles en la vista de datos de MySQL.*

El panel de métricas registra consumo de memoria y actividad de red de MySQL en el intervalo mostrado. No permite atribuir esa actividad a una petición concreta del backend ni demostrar una operación REST exitosa. La captura de variables de Railway proporcionada por el equipo presenta valores ocultos; no se incorpora al repositorio para evitar publicar información de configuración.

![Métricas de MySQL en Railway](assets/images/chapter5/sprint3-railway-mysql-metrics.png)

*Figura: métricas de recursos y tráfico del servicio MySQL durante el intervalo observado.*

---

#### 5.2.3.8. Team Collaboration Insights during Sprint
<a id="5-2-3-8-team-collaboration-insights-during-sprint"></a>

El backend se desarrolló en ramas por Bounded Context y se integró en `develop` mediante cinco merges registrados entre el 10 y el 11 de noviembre de 2026. La distribución siguiente se basa en la autoría de los commits representativos de la sección 5.2.3.4 y en el historial de integración de la sección 5.2.3.5. Describe contribuciones verificables en Git; no atribuye reuniones, revisiones o acuerdos que no estén documentados.

| Miembro del equipo | Contribuciones observadas en el Sprint 3 |
|:---|:---|
| Diaz De La Cruz, Sebastian Gabriel | Implementó Identity & Access y Subscription Management; aportó ajustes a otros contextos y registró los merges de las cinco ramas feature en `develop`, además de los cambios de integración entre alertas, incidencias y evidencias. |
| Pancorbo Amorós, Italo Raul | Desarrolló el modelo, los servicios y los endpoints REST de Project Management y puntos de monitoreo en `ft-project-management`. |
| Montes Chang, Piero Francisco | Desarrolló el modelo, los servicios y los endpoints REST de Environmental Monitoring en `ft-environmental-monitoring`. |
| Cabrera Sotelo, Camila Celeste | Desarrolló el modelo y los endpoints REST de Incident & Mitigation Management en `ft-incident-mitigation`. |
| Conde Huashuayo, Sebasthian Alex | Desarrolló los recursos de Document & Evidence y Reports & Compliance, incluidas las APIs de documentos y reportes en `ft-document-reports`. |

El trabajo por contexto permitió integrar módulos con responsabilidades separadas. Los commits de `develop` muestran dos conexiones entre contextos: la creación de incidencias a partir de alertas ambientales y la validación de evidencias de incidencias. Estas son observaciones del historial de código; los acuerdos de retrospectiva requieren evidencia propia si el equipo decide incluirlos.

Las capturas de **GitHub Insights → Contributors** complementan la autoría de commits con una vista de actividad en cuatro repositorios. En el backend, la gráfica corresponde a `develop` y muestra cinco contribuidores visibles: `tipaso07` (64 commits), `SebasthianCH` (23), `pancorboitalo-design` (15), `whcamm` (11) y `PieroMchang` (4). En el frontend, también sobre `develop`, se observan `tipaso07` (79), `whcamm` (7), `pancorboitalo-design` (3) y `SebasthianCH` (1). La captura del Landing Page presenta cuatro contribuidores visibles: `tipaso07` (43), `SebasthianCH` (7), `whcamm` (4) y `pancorboitalo-design` (4). La del reporte corresponde a `main` y muestra `tipaso07` (87), `pancorboitalo-design` (63), `PieroMchang` (21), `whcamm` (13) y `SebasthianCH` (10).

![GitHub Insights de contribuidores del backend](assets/images/chapter5/sprint3-insights-backend.png)

*Figura: contribuciones al backend mostradas por GitHub Insights para la rama develop.*

![GitHub Insights de contribuidores del frontend](assets/images/chapter5/sprint3-insights-frontend.png)

*Figura: contribuciones al frontend mostradas por GitHub Insights para la rama develop.*

![GitHub Insights de contribuidores del Landing Page](assets/images/chapter5/sprint3-insights-landingpage.png)

*Figura: contribuciones al repositorio del Landing Page mostradas por GitHub Insights.*

![GitHub Insights de contribuidores del reporte](assets/images/chapter5/sprint3-insights-report.png)

*Figura: contribuciones al reporte mostradas por GitHub Insights para la rama main.*

Las cuatro vistas utilizan el filtro `Last 3 months`, la métrica `Commits` y excluyen los merge commits. Por tanto, sus cifras son acumuladas del periodo visible y de las ramas indicadas, no conteos exclusivos del Sprint 3 ni medidas de calidad o carga de trabajo individual. Las barras semanales muestran actividad en distintos momentos de septiembre, octubre y noviembre; la captura del backend concentra la actividad visible en noviembre. Las diferencias entre repositorios son coherentes con el trabajo distribuido entre producto, documentación y backend, pero la atribución de tareas concretas del sprint se sostiene en el historial de commits y merges citado arriba.

---

## 5.3. Validation Interviews
<a id="5-3-validation-interviews"></a>

En esta sección se documenta el diseño de las entrevistas de validación de RoadWatch OS y se preparan los registros para los dos segmentos objetivo. Las respuestas, observaciones y evidencias se completarán a partir de las entrevistas realizadas; las tablas siguientes no representan resultados todavía.

### 5.3.1. Diseño de Entrevistas
<a id="5-3-1-diseno-de-entrevistas"></a>

Las entrevistas de validación tienen como objetivo evaluar la experiencia de uso de RoadWatch OS mediante la interacción de representantes de los dos segmentos objetivo con el Landing Page y la aplicación web.

Los participantes realizarán tareas específicas utilizando cuentas de prueba con roles diferenciados, de acuerdo con las responsabilidades y funcionalidades correspondientes a cada segmento.

La evaluación permitirá identificar dificultades de navegación, claridad de la información, facilidad de interacción y oportunidades de mejora de la experiencia de usuario.

Las sesiones incluirán tareas de validación, preguntas principales y preguntas complementarias. Se solicitará a los participantes que expresen libremente sus observaciones durante la navegación.

#### Preguntas comunes para ambos segmentos

**Punto a evaluar: Landing Page y acceso a la aplicación.**

**Tarea:** Explorar el Landing Page e identificar la opción de acceso a RoadWatch OS.

1. Al observar la página principal, ¿qué entiendes que ofrece RoadWatch OS?
2. ¿Los beneficios de la plataforma se presentan de manera clara?
3. ¿Puedes identificar las principales funcionalidades del producto?
4. ¿Te resultó sencillo encontrar la opción para ingresar a la plataforma?
5. ¿Qué información adicional considerarías útil incluir en el Landing Page?

---

#### Segmento 1: Empresas Constructoras Viales

**Rol de validación:** MANAGER.

**Cuenta de prueba:** `camila.cabrera@roadwatch.demo`

##### Preguntas principales

###### Punto 1. Portafolio de proyectos

**Objetivo:** Evaluar la facilidad para localizar proyectos y consultar su información.

**Tarea:** Ingresar a la sección Proyectos, buscar un proyecto, utilizar los filtros disponibles y consultar su detalle.

1. ¿Te resultó sencillo encontrar el proyecto que necesitabas?
2. ¿La información presentada en el portafolio permite reconocer el estado de los proyectos?
3. ¿Consideras más clara la visualización en lista o en tarjetas? ¿Por qué?

###### Punto 2. Dashboard de monitoreo ambiental

**Objetivo:** Evaluar la comprensión de los indicadores ambientales y del estado de las mediciones.

**Tarea:** Ingresar a Monitoreo, revisar el dashboard operativo e identificar mediciones que requieran atención.

4. ¿Los indicadores del dashboard permiten comprender el estado ambiental de las mediciones?
5. ¿Puedes identificar fácilmente cuáles se encuentran en rango, en advertencia o en estado crítico?
6. ¿La distribución de la información te permite reconocer rápidamente las situaciones prioritarias?

###### Punto 3. Centro de alertas

**Objetivo:** Evaluar la identificación y consulta de alertas ambientales.

**Tarea:** Desde Monitoreo, ingresar al centro de alertas y utilizar los filtros Todas, Advertencias y Críticas.

7. ¿Te resultó sencillo encontrar el centro de alertas?
8. ¿Los filtros permiten identificar claramente las alertas según su nivel de importancia?
9. ¿La información presentada en la tabla es suficiente para comprender la situación detectada?

###### Punto 4. Gestión de incidencias

**Objetivo:** Evaluar la consulta y el seguimiento visual de incidencias ambientales.

**Tarea:** Ingresar a Incidencias, revisar el tablero Kanban y seleccionar una incidencia para consultar su detalle.

10. ¿La organización de las incidencias en el tablero resulta clara?
11. ¿Puedes identificar fácilmente cuáles incidencias están abiertas, en revisión o resueltas?
12. ¿La pantalla de detalle proporciona información suficiente para comprender el estado de una incidencia?

###### Punto 5. Evidencias y documentos

**Objetivo:** Evaluar la facilidad para consultar evidencias asociadas con la gestión ambiental.

**Tarea:** Ingresar a Evidencias y documentos, revisar los archivos registrados e identificar las opciones disponibles.

13. ¿Te resultó sencillo encontrar las evidencias registradas?
14. ¿La información presentada permite identificar los archivos y sus estados?
15. ¿Consideras clara la organización de esta sección?

##### Preguntas complementarias

16. ¿Qué funcionalidad consideras más útil para el seguimiento ambiental de una empresa constructora?
17. ¿Encontraste dificultades al navegar entre las diferentes pantallas?
18. ¿Qué información adicional necesitarías para realizar tus actividades?
19. ¿Qué mejorarías de la organización visual de la plataforma?
20. ¿Consideras que RoadWatch OS podría facilitar el seguimiento ambiental de proyectos viales? ¿Por qué?

---

#### Segmento 2: Empresas Supervisoras y Consultoras Ambientales

**Rol de validación:** AUDITOR.

**Cuenta de prueba:** `pancho.diaz@roadwatch.demo`

##### Preguntas principales

###### Punto 1. Portafolio de proyectos

**Objetivo:** Evaluar la facilidad para consultar y localizar proyectos sujetos a supervisión.

**Tarea:** Ingresar al Portafolio, localizar un proyecto mediante la búsqueda o los filtros y consultar su información.

1. ¿Puedes identificar fácilmente los proyectos disponibles?
2. ¿Los filtros facilitan la búsqueda de proyectos específicos?
3. ¿La información presentada permite comprender el estado de cada proyecto?

###### Punto 2. Historial de mediciones ambientales

**Objetivo:** Evaluar la claridad de los registros históricos y los filtros por indicador ambiental.

**Tarea:** Ingresar a Historial de mediciones y utilizar los filtros Aire, Ruido y Agua para revisar la información registrada.

4. ¿Te resultó sencillo encontrar el historial de mediciones?
5. ¿Los filtros permiten consultar fácilmente los diferentes indicadores ambientales?
6. ¿La representación de las mediciones y su evolución temporal resulta clara?

###### Punto 3. Incidencias críticas

**Objetivo:** Evaluar la facilidad para localizar incidencias que requieren revisión prioritaria.

**Tarea:** Ingresar a Incidencias críticas, localizar el listado correspondiente y consultar el detalle de una incidencia.

7. ¿Te resultó sencillo encontrar las incidencias críticas?
8. ¿La información presentada permite identificar su gravedad y estado?
9. ¿El detalle de la incidencia contiene información suficiente para realizar el seguimiento ambiental?

###### Punto 4. Documentos normativos

**Objetivo:** Evaluar la consulta de documentos normativos y el estado de los hitos de auditoría.

**Tarea:** Ingresar a Documentos normativos, seleccionar un hito de auditoría y consultar el detalle de uno de los documentos.

10. ¿Puedes identificar fácilmente los documentos disponibles?
11. ¿La organización por hitos de auditoría resulta comprensible?
12. ¿La información sobre documentos requeridos y pendientes es clara?

###### Punto 5. Reportes de auditoría

**Objetivo:** Evaluar la facilidad para configurar un expediente de auditoría ambiental.

**Tarea:** Ingresar a Reportes de auditoría, identificar los campos necesarios para seleccionar un proyecto, establecer el periodo y elegir las secciones del expediente.

13. ¿Te resulta claro cómo configurar un nuevo expediente de auditoría?
14. ¿Las opciones disponibles permiten comprender qué información incluirá el reporte?
15. ¿El procedimiento de configuración te parece sencillo o modificarías algún paso?

###### Punto 6. Resumen de cumplimiento

**Objetivo:** Evaluar la consulta de indicadores de cumplimiento y la identificación de proyectos que requieren atención.

**Tarea:** Ingresar a Cumplimiento, revisar los indicadores y utilizar los filtros Todos, Con pendientes y Críticos.

16. ¿Los indicadores presentados permiten comprender el estado de cumplimiento ambiental?
17. ¿Los filtros facilitan la identificación de proyectos que requieren mayor atención?
18. ¿Qué información adicional considerarías importante para realizar una supervisión?

##### Preguntas complementarias

19. ¿Qué funcionalidad consideras más útil para las actividades de supervisión o auditoría ambiental?
20. ¿Encontraste dificultades para localizar alguna sección de la plataforma?
21. ¿Consideras clara la organización de la información entre proyectos, mediciones, incidencias y reportes?
22. ¿Qué funcionalidad o información adicional incorporarías?
23. ¿Qué aspectos de la experiencia de navegación mejorarías?
24. ¿Consideras que RoadWatch OS podría facilitar las actividades de supervisión ambiental? ¿Por qué?

### 5.3.2. Registro de Entrevistas
<a id="5-3-2-registro-de-entrevistas"></a>

La primera ficha del Segmento 1 se completó con la grabación de validación del 13 de noviembre de 2026 y con los datos del mismo participante consignados en la entrevista #1 del Segmento 1 del capítulo 2. La navegación de la aplicación fue guiada por el entrevistador; las valoraciones y sugerencias que se atribuyen al participante provienen de sus respuestas. La segunda ficha se completó con el video de validación del Segmento 2; los datos personales que no aparecen en la grabación se dejan expresamente sin confirmar.

**Segmento 1 — Empresas Constructoras Viales**

**Rol previsto en el diseño:** MANAGER. **Cuenta utilizada en la demostración grabada:** administrador.

<table>
<tr><th colspan="2">Entrevista #1 — Segmento 1 — Empresas Constructoras Viales</th></tr>
<tr><td><b>Nombre</b></td><td>Luis Alfonso</td></tr>
<tr><td><b>Apellidos</b></td><td>Chávez Madueño</td></tr>
<tr><td><b>Edad</b></td><td>52 años (dato registrado en el capítulo 2).</td></tr>
<tr><td><b>Distrito</b></td><td>Magdalena (dato registrado en el capítulo 2).</td></tr>
<tr><td><b>Ocupación o cargo</b></td><td>Líder de gestión de proyectos viales, con 10 años de experiencia en el cargo (capítulo 2).</td></tr>
<tr><td><b>Aplicaciones o herramientas usadas</b></td><td>MS Project y Primavera para planificar y organizar proyectos; correo electrónico para gestiones formales y WhatsApp para consultas rápidas, según la entrevista del capítulo 2.</td></tr>
<tr><td><b>Motivación</b></td><td>Valora acceder rápidamente al estado de los proyectos, mediciones, alertas e incidencias. Durante la validación destacó la claridad del portafolio, la posibilidad de comparar proyectos en vista de lista o revisar uno en tarjetas, la lectura por colores de los estados ambientales y el acceso a evidencias e historial.</td></tr>
<tr><td><b>Frustración</b></td><td>Pidió que cada incidencia muestre una causa u origen y una reseña breve antes de abrir todo el detalle o la evidencia. Señaló que los tipos de medición podrían ampliarse según las características de cada proyecto. Durante la demostración, la vista previa del reporte no se cargó; esto fue observado en la sesión y no se atribuye como una evaluación general del participante.</td></tr>
<tr><td><b>Evidencia de la entrevista</b></td><td>Grabación de pantalla y audio <code>Grabación 2026-11-13 105754.mp4</code>. Se revisaron la Landing Page y las pantallas de proyectos, monitoreo, alertas, incidencias, evidencias, historial, documentos normativos, reportes y cumplimiento. Captura de la sesión durante la revisión del dashboard de monitoreo ambiental:<br><img src="assets/images/chapter5/validation-interview-construction-01.png" alt="Entrevista de validación del Segmento 1 durante la revisión del monitoreo ambiental" width="700"></td></tr>
<tr><td><b>Enlace al video</b></td><td><a href="https://1drv.ms/v/c/113B281D1AF386CE/IQCB0f8yxgWfQL5eUdYlqZ4UAQ2dNnxRUecP-YCOKLZu3Yk?e=eRa2tx">Ver grabación en OneDrive</a>.</td></tr>
<tr><td><b>Duración</b></td><td>23 min 48 s (duración del archivo).</td></tr>
<tr><td><b>Resumen</b></td><td>El participante consideró clara la propuesta de la Landing Page y localizó el acceso a la aplicación. Priorizó las mediciones ambientales y las incidencias como funciones relevantes para su trabajo. En el portafolio valoró la información de estado, alertas e incidentes, así como las dos vistas para comparar o profundizar en proyectos. Encontró comprensibles los indicadores y filtros del monitoreo y las alertas, y útiles las evidencias descargables y el historial de mediciones. Como mejora concreta, recomendó mostrar el origen y una descripción breve de cada incidencia y permitir mediciones adicionales cuando el proyecto lo requiera. Al cierre describió la interfaz como clara y fácil de usar, y manifestó disposición a utilizarla.</td></tr>
</table>

<table>
<tr><th colspan="2">Entrevista #2 — Segmento 1 — Empresas Constructoras Viales</th></tr>
<tr><td><b>Nombre</b></td><td>Alexandra</td></tr>
<tr><td><b>Apellidos</b></td><td>Ojeda</td></tr>
<tr><td><b>Edad</b></td><td>Dato no especificado en la transcripción.</td></tr>
<tr><td><b>Distrito</b></td><td>Dato no especificado en la transcripción.</td></tr>
<tr><td><b>Ocupación o cargo</b></td><td>Representante de empresa constructora vial (sesión realizada bajo el rol de MANAGER).</td></tr>
<tr><td><b>Aplicaciones o herramientas usadas</b></td><td>Dato no especificado en la transcripción; validó directamente la plataforma RoadWatch OS.</td></tr>
<tr><td><b>Motivación</b></td><td>Valora tener la información ambiental centralizada en un solo lugar. Destacó la utilidad de la vista de lista para comparar proyectos rápidamente, el uso de filtros en el Centro de alertas para priorizar situaciones críticas y la vista de tablero (Kanban) para entender de un vistazo la etapa y estado de cada incidencia.</td></tr>
<tr><td><b>Frustración / Oportunidad de mejora</b></td><td>Señaló que, además de mostrar el estado general o crítico, la plataforma debería indicar de forma más visible qué acción o siguientes pasos debe realizar el responsable tras detectar una alerta o una incidencia crítica.</td></tr>
<tr><td><b>Evidencia de la entrevista</b></td><td>Grabación de pantalla y audio de la evaluación. Se revisaron la Landing Page, portafolio de proyectos, monitoreo ambiental, centro de alertas, incidencias, y evidencias y documentos.<br><br><img src="assets/images/chapter5/alexandraojeda.PNG" alt="Entrevista de validación con Alexandra Ojeda" width="700"></td></tr>
<tr><td><b>Enlace al video</b></td><td><a href="https://upcedupe-my.sharepoint.com/:v:/g/personal/u20241g031_upc_edu_pe/IQBwKceYtUksQYnne1fwPT9AAdl9I2SEgCI_u-6XKf7DCCg?e=HSHvhS">Ver grabación en SharePoint</a>.</td></tr>
<tr><td><b>Duración</b></td><td>Aprox. 3 a 5 minutos (tiempo objetivo establecido en la sesión).</td></tr>
<tr><td><b>Resumen</b></td><td>La participante comprendió rápidamente el propósito de la Landing Page y el público objetivo. Durante la navegación, interactuó fluidamente con el portafolio, indicando su preferencia por la vista de lista para comparar datos. Identificó con éxito los estados de las mediciones y utilizó los filtros del Centro de alertas para aislar los casos críticos. Encontró muy clara la organización por columnas de las incidencias. Como mejora principal, propuso incluir recomendaciones de acción concretas frente a alertas de prioridad alta. Concluyó que RoadWatch OS es muy útil porque centraliza información que típicamente se encuentra dispersa entre reportes y encargados, facilitando enormemente el seguimiento y la toma de decisiones.</td></tr>
</table>
**Segmento 2 — Empresas Supervisoras y Consultoras Ambientales**

**Rol utilizado en la prueba:** AUDITOR. El entrevistador llama “Fabio” al participante en la grabación. No corresponde a Angiela Fuentes Alvarez, registrada como entrevista #1 de este segmento en el capítulo 2; por ello, no se trasladan sus datos personales a esta ficha.

<table>
<tr><th colspan="2">Entrevista #1 — Segmento 2 — Empresas Supervisoras y Consultoras Ambientales</th></tr>
<tr><td><b>Nombre</b></td><td>Fabio (nombre usado por el entrevistador en el video).</td></tr>
<tr><td><b>Apellidos</b></td><td>No informados en la grabación.</td></tr>
<tr><td><b>Edad</b></td><td>No informada en la grabación.</td></tr>
<tr><td><b>Distrito</b></td><td>No informado en la grabación.</td></tr>
<tr><td><b>Ocupación o cargo</b></td><td>Participó desde la perspectiva de una empresa supervisora o consultora ambiental; no se indicó su cargo real.</td></tr>
<tr><td><b>Aplicaciones o herramientas usadas</b></td><td>No mencionó nombres de herramientas que utilice personalmente. Señaló la utilidad de consultar registros y documentos de respaldo sin depender de archivos enviados por separado.</td></tr>
<tr><td><b>Motivación</b></td><td>Consideró útil centralizar información ambiental para revisar varios proyectos y preparar auditorías. Valoró la búsqueda del portafolio, la separación del historial por componente ambiental, la organización de documentos por hito de auditoría y el resumen de cumplimiento para decidir dónde concentrar la revisión.</td></tr>
<tr><td><b>Frustración</b></td><td>Pidió mostrar unidades y límites de referencia junto a las mediciones; un historial de acciones de incidencias con fechas, responsables y distinción entre medidas propuestas y ejecutadas; la versión vigente y las observaciones de cada documento; un resumen previo al generar el expediente; y accesos desde los indicadores de cumplimiento hasta los pendientes y documentos que explican cada resultado.</td></tr>
<tr><td><b>Evidencia de la entrevista</b></td><td>Video <code>Video Project 1.mp4</code> y captura proporcionada de la sesión durante la revisión del portafolio de proyectos. Captura de la revisión del portafolio:<br><img src="assets/images/chapter5/validation-interview-segment2-01.png" alt="Entrevista de validación del Segmento 2 durante la revisión del portafolio de proyectos" width="700"></td></tr>
<tr><td><b>Enlace al video</b></td><td><a href="https://1drv.ms/v/c/113B281D1AF386CE/IQBDCHbWA_ctTLGyzkoQZ6cQAQfKLGio0Fs2fa5OnTfZ1lA?e=ZDMWNZ">Ver grabación en OneDrive</a>.</td></tr>
<tr><td><b>Duración</b></td><td>4 min 49 s (duración del archivo).</td></tr>
<tr><td><b>Resumen</b></td><td>El participante identificó el acceso desde la Landing Page y distinguió las áreas dirigidas a constructoras y a supervisión. En el portafolio usaría la búsqueda, el estado y las alertas antes de abrir un proyecto. En el historial de mediciones revisaría agua, fechas y puntos para identificar variaciones; pidió contexto de unidades y límites. Para incidencias críticas priorizó gravedad, estado, fecha, acciones, responsables y evidencias. Encontró comprensible organizar documentos por hitos y configurar el reporte por proyecto, periodo y secciones, aunque recomendó destacar versiones vigentes y verificar la selección antes de generar el expediente. Valoró el resumen de cumplimiento, pero pidió navegación directa hacia las observaciones y sus respaldos. Consideró que RoadWatch OS podría reducir el tiempo de reunir información y facilitar el seguimiento, siempre que los registros estén actualizados y sea posible rastrear el origen de cada dato.</td></tr>
</table>

<table>
<tr><th colspan="2">Entrevista #2 — Segmento 2 — Empresas Supervisoras y Consultoras Ambientales</th></tr>
<tr><td><b>Nombre</b></td><td>Angie</td></tr>
<tr><td><b>Apellidos</b></td><td>Cuya</td></tr>
<tr><td><b>Edad</b></td><td>Dato no especificado en la transcripción.</td></tr>
<tr><td><b>Distrito</b></td><td>Dato no especificado en la transcripción.</td></tr>
<tr><td><b>Ocupación o cargo</b></td><td>Representante de empresa supervisora y consultora ambiental (sesión realizada bajo el rol de AUDITOR).</td></tr>
<tr><td><b>Aplicaciones o herramientas usadas</b></td><td>Dato no especificado en la transcripción; validó directamente la plataforma RoadWatch OS.</td></tr>
<tr><td><b>Motivación</b></td><td>Valora que la plataforma reúna información operativa y de fiscalización en un solo lugar. Destacó la utilidad de ver la evolución temporal mediante filtros (aire, ruido, agua) en el historial de mediciones, la organización clara de los documentos normativos y el proceso guiado paso a paso para generar reportes de auditoría.</td></tr>
<tr><td><b>Frustración / Oportunidad de mejora</b></td><td>Sugirió mejorar la conexión visual entre las incidencias críticas y sus evidencias o documentos vinculados para un acceso más rápido. En el módulo de reportes, recomendó agregar un buscador o ayuda visual para seleccionar el proyecto, evitando tener que recordar o ingresar manualmente su identificador.</td></tr>
<tr><td><b>Evidencia de la entrevista</b></td><td>Grabación de pantalla y audio de la evaluación. Se revisaron la Landing Page, portafolio de proyectos, historial de mediciones, incidencias críticas, documentos normativos y reportes de auditoría.<br><br>
<img src="assets/images/chapter5/angiecuya.PNG" alt="Entrevista de validación con Angie Cuya" width="700"></td></tr>
<tr><td><b>Enlace al video</b></td><td><a href="https://upcedupe-my.sharepoint.com/:v:/g/personal/u20241g031_upc_edu_pe/IQCNFffK_lqoTZJj9FQ2qr8gATUKWnJMGmx5yxSGesEvLCU?e=ZQPETb">Ver grabación en SharePoint</a>.</td></tr>
<tr><td><b>Duración</b></td><td>Aprox. 3 a 5 minutos (tiempo objetivo establecido en la sesión).</td></tr>
<tr><td><b>Resumen</b></td><td>La participante comprendió la propuesta de valor para el perfil de auditoría y fiscalización. Navegó fluidamente por el portafolio y el historial de mediciones, resaltando la practicidad de los filtros y las gráficas de evolución temporal. Localizó rápidamente las incidencias críticas, aunque sugirió que el acceso a sus respectivas evidencias sea más directo. Valoró la separación entre documentos normativos y evidencias operativas. En la generación de reportes, encontró muy lógico el flujo de pasos, pero propuso incluir un buscador de proyectos por nombre. Finalizó destacando que la herramienta facilita enormemente la labor de supervisión al centralizar alertas, mediciones y documentos de soporte en un solo entorno organizado.</td></tr>
</table>


### 5.3.3. Evaluaciones según heurísticas
<a id="5-3-3-evaluaciones-segun-heuristicas"></a>

A partir de las entrevistas de validación realizadas con representantes de los dos segmentos objetivo, se identificaron oportunidades de mejora en la experiencia de usuario de RoadWatch OS. Los hallazgos se organizaron tomando como referencia las heurísticas de usabilidad de Jakob Nielsen, con el propósito de vincular las observaciones de los participantes con acciones concretas de mejora.

| Heurística de Nielsen | Hallazgo en las entrevistas | Mejora propuesta |
|:---|:---|:---|
| Visibilidad del estado del sistema | Los participantes comprendieron los estados, colores y alertas, pero pidieron saber qué acción realizar ante una alerta o incidencia crítica. | Mostrar la prioridad, el responsable y el siguiente paso junto al estado. |
| Correspondencia con el mundo real | Se solicitaron unidades y límites de referencia para las mediciones, así como la causa y una descripción breve de cada incidencia. | Presentar cada medición con su unidad y umbral; resumir el origen de la incidencia. |
| Reconocimiento antes que recuerdo | Se sugirió buscar proyectos por nombre al generar reportes, en lugar de recordar o ingresar su ID. | Incorporar un selector de proyectos con búsqueda por nombre. |
| Consistencia y claridad | Se comprendió la organización general, pero se pidió distinguir los documentos vigentes y las acciones propuestas de las ejecutadas. | Identificar claramente la versión vigente de cada documento y el estado de cada acción. |
| Prevención de errores | Se recomendó revisar el proyecto, periodo y secciones seleccionadas antes de generar un expediente. Durante una sesión, la vista previa del reporte no cargó. | Mostrar un resumen de confirmación y revisar el funcionamiento de la vista previa. |
| Ayuda para investigar problemas | Se pidió acceder directamente desde las incidencias y los indicadores de cumplimiento a las evidencias, observaciones y documentos relacionados. | Vincular cada resultado con sus registros de respaldo. |

Los hallazgos constituyen oportunidades de mejora derivadas de las entrevistas de validación y se consideran para futuras iteraciones del producto. Las propuestas no se presentan como funcionalidades implementadas durante AV2.

---

### 5.4. Video About-the-Product
<a id="5-4-video-about-the-product"></a>

Como parte de la entrega AV2, el equipo de **VíaNexo** elaboró el video *About-the-Product* de **RoadWatch OS**, cuyo propósito es presentar la propuesta de valor de la plataforma y comunicar sus principales funcionalidades a los segmentos objetivo: empresas constructoras viales y empresas supervisoras y consultoras ambientales.

RoadWatch OS propone una solución digital para centralizar la gestión de proyectos viales, el monitoreo ambiental, el seguimiento de alertas e incidencias, la administración de evidencias y documentos normativos, y la generación de reportes de cumplimiento.

El video está dirigido a potenciales usuarios y clientes, utilizando un lenguaje claro y accesible para comunicar los beneficios de la solución y su aporte a la eficiencia operativa, trazabilidad de la información y toma de decisiones.

#### Evidencia del video

![Video About-the-Product de RoadWatch OS](assets/images/chapter5/aboutTheProduct.png)

*Figura: Captura representativa del video About-the-Product de RoadWatch OS.*

| Elemento | Descripción |
|:---|:---|
| **Título** | RoadWatch OS – About-the-Product |
| **Startup** | VíaNexo |
| **Duración** | 05:00 minutos |
| **Entrega** | AV2 |
| **Microsoft Stream** | [Ver video en Microsoft Stream](https://upcedupe-my.sharepoint.com/:v:/g/personal/u202410421_upc_edu_pe/IQDrL1dLRqU-SKn2kd0TEq0JAYzZsyz2tN2wUUkIwW8EH7k?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJycmFsTW9kZSI6IldlYiIsInJlZmVycmFsQXBwUGxhdGZvcm0iOiJXZWIiLCJyZWZlcnJhbE1vZGUiOiJ2aWV3In19&e=AB0p8t) |
| **YouTube** | [Ver video en YouTube](https://youtu.be/-9enNXuyJ3s) |

El material audiovisual constituye una evidencia de la comunicación de la propuesta de solución de RoadWatch OS y complementa la documentación técnica y funcional desarrollada durante el proyecto.

---
