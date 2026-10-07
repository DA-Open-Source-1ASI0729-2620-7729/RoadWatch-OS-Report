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

Actualmente, la gestión y supervisión ambiental en proyectos de infraestructura vial puede involucrar el uso de hojas de cálculo, documentos, fotografías, correos y otros medios separados para registrar y consultar información. Esta forma de trabajo dificulta mantener una visión consolidada de las mediciones, incidencias, evidencias y acciones realizadas durante el desarrollo de un proyecto.

RoadWatch OS busca atender esta problemática mediante una plataforma web que centralice la información ambiental y facilite su seguimiento. La solución permitirá registrar mediciones, identificar valores cercanos o superiores a los umbrales establecidos, gestionar incidencias, asociar evidencias, realizar seguimiento a acciones de mitigación y consultar reportes relacionados con el estado ambiental de los proyectos.

El producto está orientado principalmente a dos segmentos: las empresas constructoras viales, responsables de gestionar y atender las situaciones ambientales que se presentan durante la ejecución de las obras, y las empresas supervisoras o consultoras ambientales, encargadas de revisar la información, realizar seguimiento y elaborar reportes sobre los proyectos bajo su supervisión.

Se considerará que la propuesta genera valor cuando los usuarios puedan encontrar y revisar la información ambiental con mayor facilidad, identificar situaciones que requieran atención, mantener un historial organizado de las acciones realizadas y reducir el tiempo necesario para consolidar información para la supervisión y elaboración de reportes.

---

#### 1.2.2.1 Lean UX Problem Statements

Actualmente, la gestión y supervisión ambiental en proyectos de infraestructura vial presenta dificultades relacionadas con la dispersión de información entre distintos medios, como hojas de cálculo, documentos, fotografías, correos y reportes independientes. Esta situación dificulta mantener una visión actualizada y organizada de las mediciones ambientales, incidencias, evidencias y acciones realizadas durante la ejecución de un proyecto.

Este problema afecta principalmente a las empresas constructoras viales y a las empresas supervisoras o consultoras ambientales. En el caso de las constructoras, los responsables de gestión ambiental necesitan registrar y revisar información de manera oportuna para identificar situaciones que requieran atención y realizar seguimiento a las acciones de mitigación. Por otro lado, las empresas supervisoras o consultoras requieren acceder a información consolidada de uno o varios proyectos para revisar antecedentes, verificar el seguimiento realizado y preparar reportes.

La falta de centralización de la información puede generar demoras en la consulta de registros, dificultades para relacionar mediciones con incidencias y evidencias, pérdida de tiempo durante la consolidación de información y menor trazabilidad de las acciones realizadas.

RoadWatch OS busca abordar esta problemática mediante una plataforma web que centraliza la información ambiental de los proyectos viales. La solución permite registrar proyectos, puntos de monitoreo y mediciones ambientales, comparar los valores con los umbrales establecidos, gestionar alertas e incidencias, asociar evidencias y acciones de mitigación, y consultar información histórica y reportes.

El objetivo es facilitar el seguimiento ambiental de los proyectos y permitir que los usuarios encuentren, relacionen y consulten la información necesaria de manera más ordenada, reduciendo la dependencia de múltiples fuentes y herramientas separadas.

---

#### 1.2.2.2 Lean UX Assumptions

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

#### 1.2.2.3 Lean UX Hypothesis Statements

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

#### 1.2.2.4 Lean UX Canvas

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

## 1.3 Segmentos Objetivos

### Segmento 1: Empresas Constructoras Viales

Este segmento está conformado por empresas encargadas de la ejecución de proyectos de infraestructura vial, representadas principalmente por responsables de gestión ambiental, jefes de proyecto, ingenieros residentes y otros profesionales relacionados con el seguimiento ambiental de la obra.

Estos usuarios utilizarán **RoadWatch OS** para registrar y consultar proyectos, puntos de monitoreo y mediciones ambientales, revisar alertas, gestionar incidencias, registrar evidencias y dar seguimiento a acciones de mitigación. La plataforma busca facilitar la organización de la información ambiental y permitir que los responsables identifiquen con mayor rapidez las situaciones que requieren atención.

El principal beneficio para este segmento es contar con un entorno centralizado que permita mantener relacionadas las mediciones, incidencias, evidencias y acciones realizadas durante la ejecución del proyecto, reduciendo la dispersión de información entre diferentes documentos y herramientas.

### Segmento 2: Empresas Supervisoras y Consultoras Ambientales

Este segmento está conformado por empresas y profesionales responsables de supervisar, revisar y analizar la información ambiental generada durante el desarrollo de proyectos viales.

Los usuarios de este segmento utilizarán **RoadWatch OS** para consultar el estado de los proyectos bajo su supervisión, revisar mediciones ambientales, incidencias, evidencias e historiales, así como acceder a información consolidada y reportes que faciliten sus actividades de seguimiento.

El principal beneficio para este segmento es disponer de una visión organizada de uno o varios proyectos, facilitando la revisión de antecedentes, la identificación de situaciones relevantes y la consolidación de información necesaria para los procesos de supervisión y elaboración de reportes.
