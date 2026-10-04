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
| U20241E356  |Conde Huashuayo, Sebasthian Alex |
| U20241G032 |Montes Chang, Piero Francisco |
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
| **TB1** | | | |
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
 

---

## [Conclusiones](#conclusiones)

- [Conclusiones y recomendaciones](#conclusiones)

---

## [Bibliografía](#bibliografia)

---

## [Anexos](#anexos)

# ABET – EAC - Student Outcome 5

**Criterio:** *La capacidad de funcionar efectivamente en un equipo cuyos miembros juntos proporcionan liderazgo, crean un entorno de colaboración e inclusivo, establecen objetivos, planifican tareas y cumplen objetivos.*


| Criterio específico | Acciones realizadas | Conclusiones |
| :--- | :--- | :--- |
| **Trabaja en equipo para proporcionar liderazgo en forma conjunta.** | **AV1**<br><br>**Pancorbo Amorós, Italo Raul:** Participó activamente en la organización y desarrollo de las actividades correspondientes al AV1, coordinando con los integrantes del equipo y aportando en la toma de decisiones para el cumplimiento de los objetivos del Sprint.<br><br>**Cabrera Sotelo, Camila Celeste:** Contribuyó en la coordinación de las actividades del equipo, brindando apoyo a los integrantes y participando en la toma de decisiones relacionadas con el desarrollo de los entregables del AV1.<br><br>**Conde Huashuayo, Sebasthian Alex:** Colaboró en la planificación y ejecución de las tareas asignadas, aportando propuestas y apoyando al equipo en el desarrollo de los componentes correspondientes al AV1.<br><br>**Montes Chang, Piero Francisco:** Participó en el desarrollo de las actividades del Sprint, coordinando sus tareas con los demás integrantes y contribuyendo al cumplimiento de los objetivos establecidos por el equipo.<br><br>**Diaz De La Cruz, Sebastian Gabriel:** Participó en la organización, desarrollo y seguimiento de las tareas del AV1, colaborando con los integrantes del equipo y aportando en la resolución de decisiones necesarias para avanzar con el proyecto. | Durante el desarrollo del **AV1**, los integrantes del equipo trabajaron de manera coordinada y asumieron responsabilidades compartidas, permitiendo ejercer un liderazgo conjunto. La comunicación y participación de los miembros facilitó la toma de decisiones y el cumplimiento de las actividades planificadas para el Sprint. |
| **Crea un entorno colaborativo e inclusivo, establece metas, planifica tareas y cumple objetivos.** | **AV1**<br><br>**Pancorbo Amorós, Italo Raul:** Colaboró en la definición de las tareas y objetivos del Sprint, manteniendo una comunicación constante con el equipo y cumpliendo con las actividades asignadas dentro de los plazos establecidos.<br><br>**Cabrera Sotelo, Camila Celeste:** Participó en la planificación de las actividades, compartiendo ideas y manteniendo una comunicación colaborativa con los demás integrantes para alcanzar los objetivos establecidos.<br><br>**Conde Huashuayo, Sebasthian Alex:** Contribuyó al desarrollo de un ambiente de trabajo colaborativo mediante la participación activa, coordinación de tareas y cumplimiento de las responsabilidades asignadas durante el Sprint.<br><br>**Montes Chang, Piero Francisco:** Participó en la organización y planificación de las tareas del equipo, coordinando sus avances con los demás integrantes y cumpliendo con las actividades correspondientes al AV1.<br><br>**Diaz De La Cruz, Sebastian Gabriel:** Colaboró en la definición y seguimiento de las tareas del Sprint, participando en la comunicación del equipo y cumpliendo con los objetivos y entregables establecidos para el AV1. | Durante el desarrollo del **AV1**, el equipo mantuvo un entorno colaborativo e inclusivo, participando activamente en la planificación, distribución y seguimiento de las tareas. Esto permitió cumplir con las responsabilidades asignadas y alcanzar los objetivos establecidos para el Sprint. |
