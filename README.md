HOME

![favicon](uploads/fe672338f7e8b8b9cb3e764cbe142e8b/favicon.ico) **CarRide** _Alcanza tus metas_
![a34db94b-efa3-4a00-b6c1-7ec7f5ca34fe](uploads/b4eb52a3f4f646370760d42d5d83fdf8/a34db94b-efa3-4a00-b6c1-7ec7f5ca34fe.jpg)

_**Deploy:**_  http://carridedigital.s3-website.us-east-2.amazonaws.com/

_**Info general del proyecto:**_

El proyecto consistió en el desarrollo de una aplicación para brindar los servicios de reservas de vehículos, aplicando cada uno de los conocimientos adquiridos durante el primer track de la carrera Certified Tech Developer. En este, podemos consultar y reservar diferentes y categorías de vehículos, y a través del panel del Admin podemos gestionar la creación de nuevas categorías, vehículos, manipular esta información e incluso eliminar alguna de ellas.
La pagina nos permite tres flujos diferentes de navegación, un visitante común que solo puede visualizar de manera sencilla con la aplicación, ya sea viendo las categorías de vehículos y estos mismos. Un segundo usuario común que ya después de haber hecho su respectivo registro, puede ingresar e interactuar con más detalle e incluso realizar alguna reserva mediante diferentes rangos de fechas deseados. Y por último el usuario administrador quien tiene el poder sobre la página, puede crear nuevo contenido en general y también eliminar diferentes productos.
Durante el desarrollo del proyecto creamos un entorno laboral muy real, donde aplicamos las metodologías de trabajo ágiles y donde se espera cumplir con los entregables durante sprint en tiempo muy cortos.


Documentación Proyecto Integrador
Documentación del proyecto

Enlace al Trello: https://trello.com/b/l897mTLs/proyectointegradorequipo7

Enlace al Drive: https://drive.google.com/drive/folders/1Iu9sBjLtah9G6xJC3kGOr-MAzvIcE6Dr

Documentación Sprint Nº1

Link: https://docs.google.com/presentation/d/1oRU3UWi7ZbmCsaj5To5ZW5C75Puar3NJzcprnbAKdaY/edit#slide=id.g1e17a42531e_0_84

Archivo PDF: SPRINT_1_Bitacora_Proyecto_-_Integrador_Grupo7.pdf

Documentación Sprint Nº2

Link: https://docs.google.com/presentation/d/15715ns5L6o9PATa7h7ZAqjjGrRYskipDP2tSzturh04/edit#slide=id.g11097768223_4_0

Archivo PDF: SPRINT_2_Bitacora_Proyecto_-_Integrador_Grupo7.pdf

Documentación Sprint Nº3

Link: https://docs.google.com/presentation/d/1LO2auXKKtTPk9YQPliQim4B3S8_EKKAR-eSmZ9fT72s/edit#slide=id.gd1c9ff308e_0_21

Archivo PDF: SPRINT_3_Bitacora_Proyecto_-_Integrador_Grupo7.pdf

Documentación Sprint Nº4

Link: https://docs.google.com/presentation/d/1-7iQS_e5SEYR-x5eKxbipi-I_EYaDzDwI1YTdaevLL0/edit#slide=id.g1e17a42531e_0_84

Archivo PDF: SPRINT_4_Bitacora_Proyecto_-_Integrador_Grupo7.pdf


Información técnica del proyecto
Instrucciones básicas para integrar los ambientes de desarrollo

Instalación de los IDEs IntelliJ IDEA y Visual Studio Code.

Instalación de la DB MySQL Workbench

Instalación de la plataforma API Postman

Construcción de manual de integración y edición de variables de entorno del sistema MANUAL_DE_INTEGRACION_BACKEND_Y_FRONTEND.pdf

Seguir pasos de la estrategia de branching y clonar el repositorio Estrategia_de_branching.docx

Abrir carpetas del proyecto backend en IntelliJ y el frontend en Visual Studio Code respectivamente.

Una vez abierto MySQL Workbench crear conexión a la Base de Datos asignada al equipo. Conexion_local_a_base_de_datos.docx

Desde Visual Studio Code, abriremos la terminal dentro de la carpeta de ront-End.

Posicionado dentro la carpeta correspondiente al Front-End, usar npm i para instalar las dependencias necesarias.

$ npm install
Una vez completo el paso anterior, ejecutar el siguiente codigo en la consola:

$ npm start
Esto nos iniciará el proyecto por default en localhost en un puerto

En el archivo de application.properties del Back-End, debemos colocar los datos de nuestra base de datos (MySQL Workbrench) local. Es decir, el username y password. Conexion_local_a_base_de_datos.docx

Posteriormente ejecutar con el botón de RUN el proyecto backend desde el IntelliJ.

Para probar los distintos Endpoints podemos utilizar Postman importando la siguiente colección: Escenarios_CarRide.postman_collection.json que también podemos encontrar dentro del apartado de Testing.


Tecnologías y herramientas empleadas
Herramientas de tecnología:

IDEs: IntelliJ IDEA Community, Visual Studio Code.
Sistemas de control de versiones: Git (GitLab)
Simulación / Virtualización: Cuenta en Amazon Web Service (AWS).
Tecnologías empleadas:

Front-End

React
react-router-dom (manejo de rutas)
CSS
Back end

Java
Spring
Spring Boot
Spring Security
API Rest
JWT
Maven
Swagger (documentación)
Base de datos

MySQL
Infraestructura

AWS
Buckets S3 (Amazon Simple Storage Service). Para almacenar el Front-End.
Amazon Elastic Compute Cloud (EC2) para alojar el Back-End (API)
Deploy en AWS utilizando pipelines desde GitLab CI/CD
Testing

Pruebas de caja negra y caja blanca, test unitarios.
Postman
Comunicación e interacción:

Medios

Discord
WhatsApp
Email
Zoom
Meet
Herramientas

Trello
Miro
Figma
Google Docs
