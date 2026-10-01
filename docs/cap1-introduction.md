# Capítulo 1

## Introducción

El presente proyecto tiene como finalidad el diseño, desarrollo e implementación de una solución tecnológica distribuida bajo un esquema **HaaS/SaaS** (Hardware as a Service + Software as a Service). Esta propuesta está conformada por una API REST de arquitectura propia y una aplicación web integrada, orientadas a resolver las deficiencias críticas en la supervisión, control y auditoría del cumplimiento ambiental en proyectos de infraestructura vial. La construcción del sistema adopta estándares de ingeniería de software moderna, integrando prácticas de diseño centrado en el usuario (Lean UX), metodologías de desarrollo ágil y una arquitectura orientada a servicios.

En la actualidad, las firmas contratistas encargadas de la ejecución de obras viales y las consultoras/supervisoras ambientales enfrentan importantes cuellos de botella en la captura, procesamiento y seguimiento continuo de parámetros ambientales (calidad del aire, emisión de ruido y estado de suelos/agua). La persistencia de metodologías tradicionales, basadas en mediciones puntuales, registros en papel o formatos digitales aislados, genera vulnerabilidades operativas: los datos quedan expuestos a modificaciones extemporáneas, el tiempo de respuesta ante sobrepasos normativos es elevado y la verificación de cumplimiento exige desplazamientos constantes a campo, derivando en disputas de credibilidad entre ejecutores y auditores.

Para superar esta problemática, el presente proyecto plantea el desarrollo de **RoadWatch OS**, una plataforma digital que centraliza el flujo de datos proveniente de nodos IoT de medición propios, procesa indicadores mediante un motor de evaluación de riesgos en tiempo real e independiza las operaciones de control preventivo de las de fiscalización remota. De este modo, se dota a las constructoras de mecanismos de mitigación inmediata y a las supervisoras de un registro inalterable para la auditoría digital de obras.

---

## 1.1 Startup Profile

En esta sección se expone la estructura institucional de la entidad desarrolladora, detallando su enfoque de negocio, la propuesta de valor integrada y la conformación de su equipo de trabajo.

### 1.1.1 Descripción de la Startup

**VíaNexo** es una startup tecnológica dedicada al diseño de soluciones digitales integradas bajo el modelo **HaaS/SaaS**, concebidas para optimizar el cumplimiento normativo e hídrico-ambiental en el sector de la construcción de carreteras e infraestructura de transporte. Su propuesta central consiste en sustituir los procesos discontinuos y manuales de monitoreo por un ecosistema de captura continua en tiempo real, soportado por hardware IoT propietario, con alta escalabilidad y capacidad de adaptación a proyectos de diversa envergadura.

El nombre **VíaNexo** representa el vínculo técnico y transparente que la plataforma establece entre la infraestructura física (*vía*) y la articulación digital (*nexo*) de los actores responsables de su ejecución y fiscalización. La organización opera como una entidad neutral, garantizando la fidelidad de los datos capturados y eliminando la asimetría informativa entre las partes contratantes y los órganos reguladores.

La estrategia de comercialización se fundamenta en un esquema de **doble monetización independiente (dual revenue)**: VíaNexo comercializa licencias de uso diferenciadas para los dos principales actores que intervienen en una misma concesión o tramo vial —la empresa ejecutora/constructora y la empresa supervisora/auditora ambiental—. Ambas partes acceden a entornos de software independientes, sustentados por niveles de suscripción escalables (Base, Profesional y Enterprise), lo que asegura la sostenibilidad económica del modelo sin incrementar exponencialmente los costos fijos de operación.

En el marco de esta iniciativa, la empresa impulsa **RoadWatch OS**, una plataforma que combina el suministro del equipamiento de sensores ambientales en campo con la suite de software de gestión, orientada a evitar penalizaciones por infracciones ambientales en la etapa de construcción y a digitalizar el proceso de auditoría oficial.

#### Misión

Proveer soluciones de ingeniería de software e Internet de las Cosas (IoT) que permitan a las empresas constructoras y supervisoras de obras viales automatizar el seguimiento de parámetros ambientales, prevenir contingencias sancionatorias y validar el cumplimiento regulatorio mediante datos verificables y neutrales recopilados en tiempo real.

#### Visión

Consolidarse como la plataforma tecnológica de referencia en América Latina para el control y fiscalización ambiental remota en obras de infraestructura vial, reconocida por su rigor técnico, la integridad de su arquitectura de datos y su aporte a la sostenibilidad en la construcción pública y privada.

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

**RoadWatch OS** es una solución informática integral distribuida como un servicio híbrido (**HaaS/SaaS**), diseñada para articular el monitoreo, la gestión de alertas preventivas, la mitigación operativa y la auditoría formal en proyectos de construcción vial. Mediante el despliegue de nodos sensores (calidad del aire, partículas en suspensión, sonometría y parámetros fisicoquímicos en agua/suelo), el sistema habilita dos módulos de trabajo aislados: un tablero operativo para la constructora destinado a la resolución de incidencias en campo, y un tablero de fiscalización para la supervisora respaldado por registros inalterables y generación automatizada de informes normativos.

---

### 1.2.1 Antecedentes y Problemática

El desarrollo de infraestructura vial constituye un eje prioritario en el crecimiento económico a nivel nacional, representando una porción sustancial de la inversión pública y privada en construcción (CAPECO, 2025). La ejecución de este tipo de obras se encuentra condicionada al cumplimiento de estrictos Instrumentos de Gestión Ambiental (IGA), cuya fiscalización sectorial es conducida por la Dirección de Gestión Ambiental del Ministerio de Transportes y Comunicaciones (MTC) y por organismos de evaluación ambiental (OEFA, 2025). Paralelamente, la elaboración y seguimiento de los planes ambientales requiere la participación de consultoras debidamente acreditadas en el Registro Nacional de Consultoras Ambientales (RNCA), el cual abarca a más de 1,200 entidades autorizadas (SENACE, 2024).

A pesar del marco regulatorio vigente, los procedimientos de monitoreo ambiental en obra continúan sufriendo de un bajo nivel de adopción tecnológica. En la mayoría de frentes de trabajo, la toma de datos depende de muestreos periódicos cuyos resultados se compilan manualmente en hojas de cálculo o reportes extemporáneos. Esta desconexión operativa dificulta la adopción de medidas correctivas inmediatas, eleva el riesgo de multas para el contratista y exige que las entidades supervisoras destinen recursos significativos a la verificación presencial de los registros presentados.

#### What / ¿QUÉ?

RoadWatch OS resuelve la falta de continuidad, la fragilidad operativa y los problemas de trazabilidad en los datos ambientales de proyectos viales, integrando nodos sensores IoT neutrales, dashboards geolocalizados, un motor de evaluación de riesgos con despacho automático de tickets de mitigación y un entorno de auditoría inalterable.

#### When / ¿CUÁNDO?

La atención de este problema resulta urgente en el escenario actual, caracterizado por la masificación de exigencias tecnológicas en la fiscalización pública, la reactivación de proyectos viales multipunto y la necesidad de contar con evidencias objetivas frente a posibles contingencias socioambientales u observaciones normativas.

#### Where / ¿DÓNDE?

La solución opera en los corredores viales, carreteras y obras de infraestructura de transporte —donde se despliegan los nodos de medición física—, así como en las centrales de control y oficinas técnicas de las empresas ejecutoras y supervisoras.

#### Who / ¿QUIÉN?

Los involucrados directos son las **empresas constructoras/contratistas** encargadas de la ejecución de la vía que deben demostrar el cumplimiento de los IGA, y las **empresas supervisoras / consultoras ambientales** encargadas de auditar la obra en representación del Estado o del concesionario.

#### Why / ¿POR QUÉ?

Porque la detección tardía de un sobrepaso en los límites máximos permisibles (LMP) desencadena sanciones administrativas, paralizaciones de frentes de trabajo y daños reputacionales para la constructora; mientras que para la supervisora, la ausencia de un canal de datos continuo e inalterable incrementa los costos logísticos de fiscalización y retrasa la emisión de dictámenes de cumplimiento.

#### How / ¿CÓMO?

A través de un modelo HaaS/SaaS centralizado en la nube. VíaNexo despliega y mantiene la red de nodos IoT en el trazado de la obra; estos transmiten parámetros en tiempo real hacia la API REST. El backend evalúa la tendencia del dato y, si se identifican umbrales de riesgo, genera una alerta y habilita un flujo de mitigación en el módulo de la constructora. Simultáneamente, el módulo de la supervisora recibe las lecturas sin posibilidad de alteración para su validación e integración en reportes oficiales.

#### How Much / ¿CUÁNTO?

El modelo de ingresos opera mediante **suscripciones independientes (dual revenue)**. VíaNexo cobra tarifas periódicas a la constructora y a la supervisora del mismo proyecto vial según el nivel contratado (Base, Profesional o Enterprise). El costo del hardware IoT está absorbido dentro de la suscripción HaaS (los equipos son devueltos al concluir la obra), ajustando los planes en función al número de frentes de monitoreo, volumen de usuarios y capacidades de exportación de reportes.

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

#### 1.2.2.3. Lean UX Hypothesis Statements

##### Transparencia mediante Datos Inalterables

Creemos que incrementaremos la tasa de adopción por parte de las empresas supervisoras si la plataforma les provee acceso a un registro continuo capturado por nodos IoT neutrales e imposibles de alterar por la empresa constructora, integrando un módulo de fiscalización remota de datos inalterables.

##### Mitigación Preventiva vs. Monitoreo Pasivo

Creemos que reduciremos el riesgo de multas y paralizaciones de obra para las constructoras si el sistema las notifica ante tendencias atípicas (Nivel de Advertencia) en lugar de advertir únicamente el sobrepaso consumado, mediante un motor de gestión preventiva que despacha tickets de atención inmediata.

##### Automatización de Expedientes de Auditoría

Creemos que disminuiremos el tiempo de preparación de auditorías ambientales si la supervisora dispone de un módulo que compile automáticamente el historial de parámetros e incidencias en formatos oficiales exportables, mediante un generador automatizado de reportes normativos.

##### Gestión Consolidada Multi-Proyecto

Creemos que facilitaremos la supervisión a nivel corporativo si los gerentes de operaciones y jefes de fiscalización pueden monitorear múltiples frentes viales en una sola interfaz cartográfica, mediante un dashboard de control geolocalizado multi-tramo.

---

#### 1.2.2.4. Lean UX Canvas

| **Business Problem** | **Solutions** | **Business Outcomes** |
| :--- | :--- | :--- |
| Las empresas ejecutoras y supervisoras de infraestructura vial en el país deben verificar el cumplimiento de estándares ambientales (aire, ruido, agua) en múltiples frentes de trabajo. Actualmente, este proceso se realiza mediante toma de datos manual en planillas o informes aislados, sin visualización en tiempo real, sin alertas automatizadas y con limitada trazabilidad para auditorías. Esto genera respuestas tardías ante incidentes, demoras de varios días en la elaboración de informes y falta de visibilidad para la alta dirección. **RoadWatch OS** aborda esta brecha con un ecosistema web centralizado que geolocaliza los puntos de monitoreo, clasifica el riesgo normativo, gestiona tickets de mitigación y genera expedientes de auditoría automáticos. Sabremos que el producto es exitoso al verificar la reducción en los tiempos de respuesta, la disminución de horas dedicadas a informes y la incorporación progresiva de frentes de obra a la plataforma. | **- Tablero cartográfico interactivo:** Representación geolocalizada de nodos de medición con estados según nivel de riesgo normativo.<br>**- Engine de evaluación de parámetros y tickets:** Comparación automatizada de mediciones contra límites normativos y apertura de incidentes de mitigación.<br>**- Sistema de alertas tempranas:** Notificaciones preventivas ante tendencias al alza o tareas de mitigación pendientes de atención.<br>**- Generador de expedientes de auditoría:** Consolidación de lecturas e incidentes en archivos descargables estructurados para entes reguladores.<br>**- Gestión documental y evidencias:** Almacenamiento de fotografías e IGA asociados con control de versiones y trazabilidad.<br>**- Control de acceso por roles (RBAC):** Administración estricta de permisos diferenciando ejecutores, auditores y administradores de plataforma. | - Reducción del 30% en el tiempo promedio de respuesta ante sobrepasos de parámetros normativos.<br>- Disminución del 40% en el tiempo requerido para estructurar y validar un expediente de auditoría ambiental.<br>- Reducción del 20% en incidentes de mitigación que superan las 72 horas sin atención en campo.<br>- Integración de 40 tramos o proyectos viales en la plataforma durante el primer año de operaciones.<br>- Retención superior al 90% en la renovación de licencias al término del ciclo inicial de contrato. |

| **Users** | **User Outcomes & Benefits** |
| :--- | :--- |
| **- Ingeniero Residente / Responsable Ambiental (Constructora):** "Necesito conocer al instante si algún frente de trabajo está cerca de superar los límites permitidos para corregirlo antes de una inspección."<br>**- Auditor / Especialista Ambiental (Supervisora):** "Necesito verificar la evolución real de los parámetros en la obra con datos confiables sin depender del envío manual de reportes por parte del contratista."<br>**- Director de Operaciones / Administrador Enterprise:** "Requiero supervisar la salud ambiental de toda mi cartera de proyectos y gestionar permisos de acceso para mis equipos." | **- Responsable Ambiental (Constructora):** Elimina el registro manual disperso, sube evidencias foto-georeferenciadas desde dispositivos móviles y recibe notificaciones antes de incurrir en infracciones. Beneficios: menor carga administrativa en gabinete y reducción de riesgo de sanciones. Indicadores: tiempo de atención por alerta, % de incidentes cerrados a tiempo.<br>**- Auditor Ambiental (Supervisora):** Accede a un historial de mediciones inalterable capturado por hardware neutral y compila expedientes normativos en minutos. Beneficios: reducción de viajes no programados a campo y mayor respaldo técnico. Indicadores: horas dedicadas a reportes, precisión en auditorías.<br>**- Director de Operaciones:** Evalúa la condición global de sus proyectos en una sola vista cartográfica y administra licencias corporativas. Beneficios: toma de decisiones informada y control centralizado. Indicadores: número de proyectos en estado óptimo, tiempo de asignación de usuarios. |

| **Hypotheses** | **What's the most important thing we need to learn first?** | **What's the least amount of work we need to do to learn the next most important thing?** |
| :--- | :--- | :--- |
| **- Creemos que** reduciremos el tiempo de atención de incidentes si el equipo de obra recibe alertas preventivas directamente en la aplicación web en lugar de revisar planillas periódicas.<br>**- Creemos que** incrementaremos la adopción por parte de las supervisoras si el expediente de auditoría se genera con estructura conforme a los requerimientos normativos vigentes.<br>**- Creemos que** los ejecutores de obra valorarán la plataforma si el motor de gestión les permite adjuntar evidencias fotográficas geolocalizadas para justificar sus acciones de mitigación.<br>**- Creemos que** los directores de proyectos adoptarán la vista multi-tramo si la codificación por colores refleja fielmente el nivel de riesgo global de cada concesión. | - ¿El principal obstáculo de los responsables de obra es la falta de alertas en tiempo real o la carga administrativa de elaborar reportes finales?<br>- ¿Las firmas supervisoras aceptan auditorías basadas en datos recopilados por nodos IoT neutrales sin exigir validaciones presenciales continuas?<br>- ¿Qué nivel de detalle en el registro de evidencias fotográficas exige la supervisora para dar por cerrada una incidencia en campo?<br>- ¿El mapa cartográfico con semáforos de riesgo es la herramienta preferida por la alta dirección para tomar decisiones preventivas? | - Realizar entrevistas estructuradas con 5 especialistas ambientales de obra y auditores para validar sus flujos de trabajo actuales.<br>- Diseñar un prototipo interactivo de la interfaz de alertas e incidentes para validar la usabilidad con usuarios de campo.<br>- Ejecutar una prueba piloto controlada simulando la transmisión de datos IoT sobre un tramo vial de prueba.<br>- Validar la estructura del reporte exportable en PDF con un auditor acreditado antes del desarrollo del motor de reporteo final.<br>- Presentar maquetas del dashboard multi-tramo a gerentes de operaciones para priorizar los indicadores mostrados en pantalla. |

---

## 1.3 Segmentos Objetivos

### Segmento 1: Empresas Constructoras Viales (Módulo Operativo)

Compañías contratistas dedicadas a la ejecución física de obras de infraestructura vial, representadas por sus ingenieros residentes, jefes de producción y responsables de mitigación ambiental. Utilizan **RoadWatch OS** como una herramienta de control interno: reciben notificaciones preventivas ante incrementos atípicos en los niveles de emisión o contaminación (aire, ruido, agua) y gestionan la mitigación en tiempo real. La plataforma les permite documentar acciones correctivas con imágenes y coordenadas geográficas para prevenir la imposición de multas o la paralización de frentes de trabajo. La recuperación de la inversión en obra pública y concesiones viales en el país (CAPECO, 2025) sostiene una demanda continua de soluciones tecnológicas de control operativo para este segmento.

### Segmento 2: Empresas Supervisoras Ambientales / Consultoras (Módulo de Fiscalización)

Firmas independientes de ingeniería y consultoría ambiental —contratadas por entidades del Estado o concesionarias— encargadas de auditar la ejecución de los planes de manejo ambiental en proyectos viales. Utilizan **RoadWatch OS** para digitalizar la fiscalización, acceder a lecturas continuas e inalterables generadas por la red de nodos IoT de VíaNexo y estructurar informes normativos sin requerir desplazamientos diarios a campo. Considerando la fiscalización ejercida por la Dirección de Gestión Ambiental del MTC (SPDA, 2024) y la presencia de más de 1,200 consultoras inscritas en el Registro Nacional de Consultoras Ambientales (SENACE, 2024), este segmento representa un mercado clave para la adopción de herramientas de auditoría remota multi-proyecto.
