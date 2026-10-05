# Capítulo 1

## Introducción

El presente proyecto tiene como finalidad el diseño, desarrollo e implementación de una solución tecnológica distribuida conformada por una API REST y una aplicación web responsiva. La propuesta está orientada a mejorar la gestión y supervisión ambiental en proyectos de infraestructura vial, centralizando información relacionada con proyectos, puntos de monitoreo, mediciones ambientales, incidencias, evidencias, acciones de mitigación y reportes. Para su desarrollo se aplican prácticas de diseño centrado en el usuario mediante Lean UX, metodologías ágiles y una arquitectura orientada a servicios.

En la actualidad, las empresas constructoras viales y las empresas supervisoras o consultoras ambientales enfrentan dificultades para registrar, organizar y dar seguimiento a la información ambiental generada durante la ejecución de los proyectos. El uso de hojas de cálculo, documentos, fotografías y distintos canales de comunicación puede ocasionar información dispersa, dificultades para consultar antecedentes y demoras en la identificación y atención de posibles desviaciones ambientales.

Para atender esta problemática, se plantea el desarrollo de **RoadWatch OS**, una plataforma web que permite centralizar y consultar la información ambiental de los proyectos viales. La solución facilita el registro de mediciones, la comparación de valores con los umbrales establecidos, el seguimiento de alertas e incidencias, la asociación de evidencias y acciones de mitigación, y la generación de información consolidada para apoyar los procesos de supervisión y elaboración de reportes.

Dentro del alcance del MVP, las mediciones ambientales pueden ser registradas mediante los servicios desarrollados por la plataforma, sin depender de una integración directa con dispositivos físicos. Como evolución futura del producto, RoadWatch OS podrá incorporar integraciones con dispositivos de monitoreo ambiental para automatizar la recepción de mediciones provenientes de campo.

---

## 1.1 Startup Profile

En esta sección se expone la estructura institucional de la entidad desarrolladora, detallando su enfoque de negocio, la propuesta de valor integrada y la conformación de su equipo de trabajo.

### 1.1.1 Descripción de la Startup

**VíaNexo** es una startup tecnológica orientada al desarrollo de soluciones digitales para apoyar la gestión y supervisión ambiental en proyectos de infraestructura vial. Su propuesta busca facilitar el registro, organización y seguimiento de información relacionada con mediciones ambientales, incidencias, evidencias, acciones de mitigación y reportes, permitiendo que los distintos actores involucrados puedan trabajar con información centralizada y organizada.

El nombre **VíaNexo** representa la conexión entre la infraestructura vial y los procesos digitales que permiten gestionar y supervisar la información ambiental asociada a los proyectos. La startup busca reducir la dispersión de información y facilitar la coordinación entre empresas constructoras viales y empresas supervisoras o consultoras ambientales.

La estrategia de comercialización considera un modelo de suscripción orientado a los dos principales segmentos del producto: las empresas constructoras viales y las empresas supervisoras o consultoras ambientales. RoadWatch OS podrá ofrecer diferentes niveles de servicio de acuerdo con las funcionalidades y capacidades disponibles para cada organización, permitiendo adaptar el uso de la plataforma a las necesidades de cada empresa.

En el marco de esta propuesta, VíaNexo desarrolla **RoadWatch OS**, una plataforma web orientada a centralizar la gestión ambiental de proyectos viales. La solución permite registrar proyectos y puntos de monitoreo, gestionar mediciones ambientales, identificar posibles desviaciones respecto de los umbrales establecidos, dar seguimiento a incidencias y acciones de mitigación, asociar evidencias y generar información consolidada para la supervisión y elaboración de reportes.

#### Misión

Desarrollar soluciones digitales que faciliten a las empresas constructoras viales y a las empresas supervisoras o consultoras ambientales la gestión, seguimiento y supervisión de la información ambiental de sus proyectos, promoviendo una mejor organización de los datos y una atención más oportuna de las incidencias.

#### Visión

Consolidarse como una startup tecnológica reconocida por ofrecer soluciones digitales que contribuyan a mejorar la gestión y supervisión ambiental en proyectos de infraestructura vial, mediante herramientas accesibles, organizadas y adaptables a las necesidades de las empresas del sector.

### 1.1.2. Perfiles de los Miembros del Equipo

| Foto | Apellido y Nombre | Rol / Perfil |
|:---|:---|:---|
| <img src="../assets/images/chapter1/Italo.jpeg" alt="Italo" width="120" height="120" style="object-fit: cover;"> | Italo Raul Pancorbo Amorós | Me considero una persona responsable, aplicada y me gusta aprender cosas nuevas. |
| <img src="../assets/images/chapter1/Sebasthian.png" alt="Sebasthian" width="120" height="120" style="object-fit: cover;"> | Sebasthian Alex Conde Huashuayo | Me gusta la programación y el desarrollo de software, buscando soluciones innovadoras mediante buenas prácticas. |
| <img src="../assets/images/chapter1/Diaz.jpg" alt="Sebastian Diaz" width="120" height="120" style="object-fit: cover;"> | Sebastian Gabriel Díaz De la Cruz | Estudiante de Ingeniería de Software, interesado en el desarrollo de soluciones digitales y el trabajo colaborativo. |
| <img src="../assets/images/chapter1/perfilpiero.jpg" alt="Piero" width="120" height="120" style="object-fit: cover;"> | Piero Francisco Montes Chang | Desarrollo software para proyectos personales y tengo interés en lógica y machine learning. |
| <img src="../assets/images/chapter1/cabrera-camila.png" alt="Camila Cabrera" width="120" height="120" style="object-fit: cover;"> | Camila Celeste Cabrera Sotelo | Estudiante de Ingeniería de Software, interesada en aplicaciones, usabilidad y nuevas tecnologías. |

---

## 1.2 Solution Profile

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

### 1.2.1 Antecedentes y Problemática

El desarrollo de infraestructura vial constituye un eje prioritario en el crecimiento económico a nivel nacional, representando una porción sustancial de la inversión pública y privada en construcción (CAPECO, 2025). La ejecución de este tipo de obras se encuentra condicionada al cumplimiento de estrictos Instrumentos de Gestión Ambiental (IGA), cuya fiscalización sectorial es conducida por la Dirección de Gestión Ambiental del Ministerio de Transportes y Comunicaciones (MTC) y por organismos de evaluación ambiental (OEFA, 2025). Paralelamente, la elaboración y seguimiento de los planes ambientales requiere la participación de consultoras debidamente acreditadas en el Registro Nacional de Consultoras Ambientales (RNCA), el cual abarca a más de 1,200 entidades autorizadas (SENACE, 2024).

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

### 1.2.2 Lean UX Process

El estado actual de la gestión y supervisión ambiental en proyectos de infraestructura vial se ha enfocado principalmente en empresas constructoras y firmas consultoras que dependen de flujos de trabajo manuales, visitas presenciales esporádicas y registros documentales discontinuos. Estos métodos tradicionales generan puntos de dolor críticos: reacciones tardías ante sobrepasos en los límites máximos permisibles (LMP), exposición a paralizaciones y multas regulatorias, y altos costos logísticos derivados de la fiscalización física en campo.

Lo que los productos y servicios existentes en el mercado no logran resolver es la integración de una captura automatizada sin exigir costosas inversiones de capital (CapEx) en hardware, fallando al actuar solo como visores pasivos de telemetría. Las soluciones actuales no ofrecen un flujo de trabajo colaborativo y neutral que separe la gestión operativa inmediata de los riesgos, de la fiscalización formal inalterable.

Nuestro producto, RoadWatch OS, abordará esta brecha mediante una estrategia de modelo HaaS/SaaS (Dual Revenue) que provee hardware IoT en comodato y un software centralizado. Este enfoque permitirá detectar riesgos ambientales en tiempo real, generar tickets de mitigación automáticos para los contratistas, y proporcionar un entorno con datos inalterables para las auditorías de los supervisores.

Nuestro enfoque inicial serán las empresas constructoras de carreteras de mediana a gran escala, y las empresas supervisoras y consultoras ambientales (registradas en el RNCA) que operan en el mercado peruano.

Sabremos que tenemos éxito cuando veamos los siguientes comportamientos medibles en nuestra audiencia objetivo: los ingenieros residentes resolviendo los tickets de mitigación en la plataforma antes de que deriven en infracciones oficiales, los auditores descargando directamente los reportes normativos del sistema en lugar de desplazarse a la obra, y ambas partes renovando sus suscripciones (retención) debido a la confiabilidad y neutralidad de los datos compartidos.

---

#### 1.2.2.2. Lean UX Assumptions

##### A. Business Assumptions

Creemos que la industria de construcción vial necesita un entorno de seguimiento ambiental automatizado y neutral que elimine la compra costosa de hardware  y asegure la inalterabilidad de los datos.

Creemos que podemos monetizar esta necesidad eficientemente mediante una plataforma HaaS/SaaS de doble monetización , cobrando suscripciones independientes y escalables (Base, Profesional, Enterprise) tanto a la constructora como a la supervisora del mismo proyecto.

Creemos que nuestra ventaja competitiva frente a los visores pasivos tradicionales radica en actuar como un tercero neutral, integrando la entrega de hardware en comodato con un motor de gestión preventiva (tickets de mitigación).

Creemos que los canales de captación más efectivos serán los acuerdos estratégicos con gremios (ej. CAPECO), la prospección directa del padrón del RNCA y las referencias cruzadas entre contratistas y auditores de una misma concesión.

##### B. User Assumptions

* Creemos que alcanzaremos el éxito comercial cuando veamos un crecimiento sostenido en la adopción del modelo de doble suscripción (constructora + supervisora) operando activamente sobre un mismo proyecto vial.

* Creemos que aumentaremos el Ingreso Mensual Recurrente (MRR) al lograr una alta tasa de renovación de licencias cuando las constructoras trasladen nuestra plataforma a nuevos frentes de obra.

* Creemos que nuestra Definition of Done (DoD) a nivel de negocio se cumplirá cuando un cliente logre operar el ecosistema completo (nodos IoT en campo + plataforma) evidenciando una reducción medible (ej. 50%) en su tiempo medio de cierre de incidencias ambientales.

* Creemos que reduciremos nuestro Costo de Adquisición de Clientes (CAC) al aprovechar la obligatoriedad normativa, logrando que las empresas supervisoras recomienden el uso de nuestro estándar a otras constructoras.

##### C. User Outcome & Benefit Assumptions

* Creemos que nuestro usuario principal del "Segmento 1" está compuesto por ingenieros residentes de obra y responsables de mitigación en constructoras, quienes sufren por el desfase temporal en la detección de incidentes y necesitan reaccionar rápidamente en campo.

* Creemos que nuestro usuario del "Segmento 2" está compuesto por auditores y consultores ambientales de firmas supervisoras, cuyo problema principal es la incertidumbre sobre la validez de los datos de campo y el alto costo de viajar físicamente a la obra.

* Creemos que ambos perfiles operan en contextos de alta presión normativa y utilizarán la plataforma de maneras distintas: la constructora mediante alertas y tickets diarios (móvil/web), y la supervisora mediante auditorías y extracción de expedientes (gabinete).

##### D. Business Outcome Assumptions

* Creemos que los ingenieros de la constructora lograrán su principal objetivo (evitar multas y paralizaciones) al recibir alertas tempranas que les permitan mitigar desviaciones antes de que se conviertan en infracciones formales.

* Creemos que las empresas contratistas obtendrán el beneficio de optimizar su presupuesto operativo al no tener que invertir en la compra y mantenimiento complejo de instrumental de medición (modelo HaaS).

* Creemos que los auditores ambientales lograrán su objetivo de emitir dictámenes más rápidos y seguros al reducir drásticamente las visitas presenciales a campo, basándose en telemetría continua y remota.

* Creemos que las firmas supervisoras obtendrán el beneficio de la tranquilidad profesional al compilar expedientes normativos respaldados por datos técnicamente inalterables y neutrales.

##### E. Feature Assumptions

* Creemos que una Red de Nodos IoT bajo modelo HaaS resolverá el problema de la captura manual, proveyendo parámetros en tiempo real sin requerir que el usuario adquiera o mantenga el hardware.

* Creemos que un Motor de Clasificación de Riesgo Automatizado permitirá comparar las lecturas ambientales contra la normativa vigente (LMP) y detonar alertas preventivas inmediatas.

* Creemos que un Módulo Operativo de Mitigación (Dashboard para Constructora) facilitará la resolución de incidentes mediante la generación de tickets y el registro de evidencias fotográficas y georreferenciadas.

* Creemos que un Módulo de Fiscalización Digital (Panel para Supervisora) permitirá automatizar el trabajo de gabinete mediante reportes normativos exportables y un registro histórico protegido contra ediciones.

* Creemos que un sistema de Control de Accesos por Bounded Contexts (RBAC) garantizará la transparencia del sistema, separando lógicamente la gestión interna de la constructora de la visualización auditable de la supervisora.
---

#### 1.2.2.2. Lean UX Assumptions

##### A. Business Assumptions
1. **Creemos que** la industria de construcción vial necesita un entorno de seguimiento ambiental automatizado y neutral que elimine la compra costosa de hardware (CapEx) y asegure la inalterabilidad de los datos.
2. **Creemos que** podemos monetizar esta necesidad eficientemente mediante una plataforma HaaS/SaaS de doble monetización (Dual Revenue), cobrando suscripciones independientes y escalables (Base, Profesional, Enterprise) tanto a la constructora como a la supervisora del mismo proyecto.
3. **Creemos que** nuestra ventaja competitiva frente a los visores pasivos tradicionales radica en actuar como un tercero neutral, integrando la entrega de hardware en comodato con un motor de gestión preventiva (tickets de mitigación).
4. **Creemos que** los canales de captación más efectivos serán los acuerdos estratégicos con gremios (ej. CAPECO), la prospección directa del padrón del RNCA y las referencias cruzadas entre contratistas y auditores de una misma concesión.

##### B. Business Outcome Assumptions
1. **Creemos que** alcanzaremos el éxito comercial cuando veamos un crecimiento sostenido en la adopción del modelo de doble suscripción (constructora + supervisora) operando activamente sobre un mismo proyecto vial.
2. **Creemos que** aumentaremos el Ingreso Mensual Recurrente (MRR) al lograr una alta tasa de renovación de licencias cuando las constructoras trasladen nuestra plataforma a nuevos frentes de obra.
3. **Creemos que** nuestra Definition of Done (DoD) a nivel de negocio se cumplirá cuando un cliente logre operar el ecosistema completo (nodos IoT en campo + plataforma) evidenciando una reducción medible del 50% en su tiempo medio de cierre de incidencias ambientales.
4. **Creemos que** reduciremos nuestro Costo de Adquisición de Clientes (CAC) al aprovechar la obligatoriedad normativa, logrando que las empresas supervisoras recomienden el uso de nuestro estándar a otras constructoras.

##### C. User Assumptions
1. **Creemos que** nuestro usuario principal del Segmento 1 está compuesto por ingenieros residentes de obra y responsables de mitigación en constructoras, quienes sufren por el desfase temporal en la detección de incidentes y necesitan reaccionar rápidamente en campo.
2. **Creemos que** nuestro usuario del Segmento 2 está compuesto por auditores y consultores ambientales de firmas supervisoras, cuyo problema principal es la incertidumbre sobre la validez de los datos de campo y el alto costo de viajar físicamente a la obra.
3. **Creemos que** ambos perfiles operan en contextos de alta presión normativa y utilizarán la plataforma de maneras distintas: la constructora mediante alertas y tickets diarios (móvil/web), y la supervisora mediante auditorías y extracción de expedientes (gabinete).

##### D. User Outcome & Benefit Assumptions
1. **Creemos que** los ingenieros de la constructora lograrán su principal objetivo (evitar multas y paralizaciones) al recibir alertas tempranas que les permitan mitigar desviaciones antes de que se conviertan en infracciones formales.
2. **Creemos que** las empresas contratistas obtendrán el beneficio de optimizar su presupuesto operativo al no tener que invertir en la compra y mantenimiento complejo de instrumental de medición (modelo HaaS).
3. **Creemos que** los auditores ambientales lograrán su objetivo de emitir dictámenes más rápidos y seguros al reducir drásticamente las visitas presenciales a campo, basándose en telemetría continua y remota.
4. **Creemos que** las firmas supervisoras obtendrán el beneficio de la tranquilidad profesional al compilar expedientes normativos respaldados por datos técnicamente inalterables y neutrales.

##### E. Feature Assumptions
1. **Creemos que** una **Red de Nodos IoT bajo modelo HaaS** resolverá el problema de la captura manual, proveyendo parámetros en tiempo real sin requerir que el usuario adquiera o mantenga el hardware.
2. **Creemos que** un **Motor de Clasificación de Riesgo Automatizado** permitirá comparar las lecturas ambientales contra la normativa vigente (LMP) y detonar alertas preventivas inmediatas.
3. **Creemos que** un **Módulo Operativo de Mitigación (Dashboard para Constructora)** facilitará la resolución de incidentes mediante la generación de tickets y el registro de evidencias fotográficas y georreferenciadas.
4. **Creemos que** un **Módulo de Fiscalización Digital (Panel para Supervisora)** permitirá automatizar el trabajo de gabinete mediante reportes normativos exportables y un registro histórico protegido contra ediciones.
5. **Creemos que** un sistema de **Control de Accesos por Bounded Contexts (RBAC)** garantizará la transparencia del sistema, separando lógicamente la gestión interna de la constructora de la visualización auditable de la supervisora.

---

#### 1.2.2.3. Lean UX Hypothesis Statements

* **Hipótesis 1 (Red de Nodos IoT):**
  * **We believe we will achieve:** Un crecimiento sostenido en la adopción del modelo de suscripción y recurrencia de clientes (Business Outcome).
  * **If:** Las empresas constructoras y supervisoras (Users).
  * **Attain:** El beneficio de optimizar su presupuesto operativo al evitar la compra y mantenimiento complejo de instrumental de medición (User Outcome).
  * **With:** Una Red de Nodos IoT suministrada bajo el modelo HaaS (Hardware as a Service) (Feature).

* **Hipótesis 2 (Motor de Clasificación de Riesgo):**
  * **We believe we will achieve:** Una reducción del 50% en el tiempo medio de atención y cierre de incidencias ambientales cumpliendo nuestra Definition of Done (Business Outcome).
  * **If:** Los ingenieros residentes de obra y responsables de mitigación (Users).
  * **Attain:** El objetivo de reaccionar rápidamente y mitigar desviaciones antes de que se conviertan en multas o paralizaciones (User Outcome).
  * **With:** Un Motor de Clasificación de Riesgo Automatizado que compara lecturas con los LMP y detona alertas preventivas (Feature).

* **Hipótesis 3 (Módulo Operativo de Mitigación):**
  * **We believe we will achieve:** Un aumento en el Ingreso Mensual Recurrente (MRR) por altas tasas de renovación de licencias al trasladarse a nuevos frentes de obra (Business Outcome).
  * **If:** El equipo operativo de mitigación ambiental de la empresa constructora (Users).
  * **Attain:** El beneficio de resolver incidentes de forma ordenada en campo, dejando constancia para evitar sanciones (User Outcome).
  * **With:** Un Módulo Operativo de Mitigación que centraliza alertas, abre tickets automáticos y permite el registro de evidencias fotográficas georreferenciadas (Feature).

* **Hipótesis 4 (Módulo de Fiscalización Digital):**
  * **We believe we will achieve:** Una reducción en nuestro Costo de Adquisición de Clientes (CAC) al lograr que las entidades de auditoría recomienden el software como estándar (Business Outcome).
  * **If:** Los auditores y consultores ambientales de las firmas supervisoras (Users).
  * **Attain:** El objetivo de emitir dictámenes más rápidos reduciendo drásticamente las costosas visitas presenciales a campo (User Outcome).
  * **With:** Un Módulo de Fiscalización Digital que provee historiales inalterables y un generador automatizado de reportes normativos (Feature).

* **Hipótesis 5 (Control de Accesos por Bounded Contexts):**
  * **We believe we will achieve:** El éxito comercial derivado de la doble monetización activa (Dual Revenue) sobre un mismo proyecto vial (Business Outcome).
  * **If:** Las firmas supervisoras y las empresas ejecutoras que intervienen en la misma obra (Users).
  * **Attain:** La tranquilidad profesional de interactuar en un entorno de datos neutral, transparente y protegido contra manipulaciones (User Outcome).
---

#### 1.2.2.4. Lean UX Canvas

| **Business Problem** | **Solutions (Features)** | **Business Outcomes** |
| :--- | :--- | :--- |
| El mercado de gestión ambiental en obras viales depende de flujos manuales y visores pasivos que exigen costosas inversiones en hardware (CapEx). Las soluciones actuales no ofrecen un flujo colaborativo que separe la mitigación operativa de la fiscalización formal. **RoadWatch OS** aborda esta brecha mediante un modelo HaaS/SaaS (Dual Revenue) que provee hardware IoT en comodato y software centralizado. Sabremos que es exitoso cuando los ingenieros resuelvan tickets antes de las multas, los auditores descarguen reportes remotamente, y ambas partes renueven sus suscripciones debido a la neutralidad de los datos. | **1. Red de Nodos IoT (HaaS):** Suministro de sensores sin exigir compra o mantenimiento al cliente.<br>**2. Motor de Clasificación de Riesgo:** Evaluación automática contra los LMP para detonar alertas preventivas.<br>**3. Módulo Operativo de Mitigación:** Dashboard para la constructora que genera tickets y registra evidencias foto/georeferenciadas.<br>**4. Módulo de Fiscalización Digital:** Panel para la supervisora con historiales inalterables y generación de expedientes normativos.<br>**5. Control de Accesos (Bounded Contexts - RBAC):** Separación lógica que protege la neutralidad de los datos entre ambos actores. | - **DoD (Definition of Done):** Reducción del 50% en el tiempo medio de atención y cierre de incidencias ambientales.<br>- Crecimiento sostenido en la adopción del modelo de doble suscripción (Dual Revenue) en un mismo proyecto vial.<br>- Aumento del Ingreso Mensual Recurrente (MRR) mediante altas tasas de renovación a nuevos frentes de obra.<br>- Reducción del Costo de Adquisición de Clientes (CAC) logrando que los auditores recomienden la plataforma como estándar. |

| **Users** | **User Outcomes & Benefits** |
| :--- | :--- |
| **- Segmento 1 (Constructora):** Ingenieros residentes de obra y responsables de mitigación ambiental.<br>**- Segmento 2 (Supervisora):** Auditores y consultores ambientales de firmas registradas en el RNCA. | **- Constructora:** Logran evitar multas y paralizaciones al recibir alertas tempranas para mitigar desviaciones. Obtienen el beneficio de optimizar su presupuesto operativo (Cero CapEx en sensores).<br>**- Supervisora:** Logran emitir dictámenes más rápidos reduciendo drásticamente las visitas presenciales a campo. Obtienen la tranquilidad profesional de compilar expedientes con datos técnicamente inalterables. |

| **Hypotheses** | **What's the most important thing we need to learn first?** | **What's the least amount of work we need to do to learn the next most important thing?** |
| :--- | :--- | :--- |
| **H1:** *Creemos que* lograremos recurrencia *si* constructora/supervisora *alcanzan* a optimizar su presupuesto *mediante* la Red IoT HaaS.<br>**H2:** *Creemos que* cumpliremos el DoD (50% menos tiempo) *si* los residentes *alcanzan* a reaccionar rápido *mediante* el Motor de Riesgo Automatizado.<br>**H3:** *Creemos que* aumentaremos el MRR *si* la constructora *alcanza* a resolver incidentes ordenadamente *mediante* el Módulo de Mitigación.<br>**H4:** *Creemos que* reduciremos el CAC *si* los auditores *alcanzan* a dictaminar rápido y remoto *mediante* el Módulo de Fiscalización Digital.<br>**H5:** *Creemos que* el modelo Dual Revenue triunfará *si* ambos actores *alcanzan* la tranquilidad de datos neutrales *mediante* Bounded Contexts. | - ¿Las constructoras estarán dispuestas a confiar su mitigación a hardware de un tercero (comodato) en lugar de comprar el propio?<br>- ¿Las supervisoras aceptarán legalmente reportes de RoadWatch sin exigir la validación física presencial tradicional?<br>- ¿Ambas partes aceptarán pagar suscripciones independientes (Dual Revenue) por los datos de un mismo proyecto vial? | - **Entrevistas (Customer Discovery):** Con 5 consultoras del RNCA para validar si aceptarían datos de telemetría inalterables (Blockchain/Logs) para sus informes oficiales.<br>- **Landing Page (Smoke Test):** Dirigida a constructoras ofreciendo "Monitoreo Cero CapEx y prevención de multas" para medir la tasa de conversión y el interés comercial.<br>- **Prototipo Interactivo (Figma):** Validar con ingenieros residentes la usabilidad del flujo de "recepción de alerta y cierre de ticket con evidencia fotográfica". |

---

## 1.3 Segmentos Objetivos

### Segmento 1: Empresas Constructoras Viales (Módulo Operativo)

Compañías contratistas dedicadas a la ejecución física de obras de infraestructura vial, representadas por sus ingenieros residentes, jefes de producción y responsables de mitigación ambiental. Utilizan **RoadWatch OS** como una herramienta de control interno: reciben notificaciones preventivas ante incrementos atípicos en los niveles de emisión o contaminación (aire, ruido, agua) y gestionan la mitigación en tiempo real. La plataforma les permite documentar acciones correctivas con imágenes y coordenadas geográficas para prevenir la imposición de multas o la paralización de frentes de trabajo. La recuperación de la inversión en obra pública y concesiones viales en el país (CAPECO, 2025) sostiene una demanda continua de soluciones tecnológicas de control operativo para este segmento.

### Segmento 2: Empresas Supervisoras Ambientales / Consultoras (Módulo de Fiscalización)

Firmas independientes de ingeniería y consultoría ambiental —contratadas por entidades del Estado o concesionarias— encargadas de auditar la ejecución de los planes de manejo ambiental en proyectos viales. Utilizan **RoadWatch OS** para digitalizar la fiscalización, acceder a lecturas continuas e inalterables generadas por la red de nodos IoT de VíaNexo y estructurar informes normativos sin requerir desplazamientos diarios a campo. Considerando la fiscalización ejercida por la Dirección de Gestión Ambiental del MTC (SPDA, 2024) y la presencia de más de 1,200 consultoras inscritas en el Registro Nacional de Consultoras Ambientales (SENACE, 2024), este segmento representa un mercado clave para la adopción de herramientas de auditoría remota multi-proyecto.
