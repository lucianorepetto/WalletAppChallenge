# CHALLENGE FULL STACK - JavaScript 馃殌

Este proyecto fue desarrollado como reto para conocer y demostrar las habilidades del programador en el lenguaje de programaci贸n React, Node.js Express y creacion de Base de Datos relacional.

## Descripci贸n

Este proyecto consiste en realizar una aplicaci贸n web para administraci贸n de presupuesto personal, donde podemos ver todos nuestros ingresos y egresos totales registrados, as铆 como tambi茅n realizar operaciones de creaci贸n, edici贸n y eliminaci贸n de los mismos.

## Funcionalidad 馃搵
 - Visualizaci贸n del total de ingresos y egresos.
 - Lista para agregar, editar y borrar los ingresos y egresos totales registrados. 
 - Lista para agregar, editar y borrar los conceptos. 
 - Formulario para registrar los ingresos y egresos con su respectiva informaci贸n (fecha inicio, descripci贸n, monto, concepto, tipo). 
 - Formulario para registrar los conceptos.

## Mejoras a implementar 馃挕

 - Agregar un formulario de registro y login para permitir identificar al usuario.
 - Agregar funcionalidad de reportes y estad铆sticas.

## Desarrollos futuros 馃搶

 - Mejorar la interfaz de usuario. 
 - Agregar funcionalidad de cambio de moneda. 
 - Agregar funcionalidad para registrar usuarios en la base de datos.

## Herramientas utilizadas 馃洜锔? 

- [Visual Studio Code](https://code.visualstudio.com/) - IDE utilizado para desarrollo del proyecto
- [Postman](https://www.getpostman.com) - Para hacer pruebas a las APIs
- [Git](https://git-scm.com/) - Control de versiones
- [Github](https://github.com/ElverGonzalez) - Repositorio remoto

### Front-end

- [React](https://reactjs.org/) - Framework JavaScript de c贸digo abierto para construir interfaces de usuario en la web moderna. 

### Back-end

- [NodeJS](http://nodejs.org/) - Entorno de ejecuci贸n JavaScript que permite la creaci贸n de aplicaciones web escalables.
- [ExpressJS](https://expressjs.com/es/) - Framework web de c贸digo abierto para Node.js, dise帽ado para simplificar la creaci贸n de aplicaciones y apis Web r谩pidas y flexibles.

### Base de Datos

- [MySQL](https://www.mysql.com/) - Sistema de gesti贸n de bases de datos relacionales open source.
- [MySQL Workbench](https://www.mysql.com/products/workbench/) - Administrador de bases de datos
    
## C贸mo instalarlo 馃摝
 
Para poder correr este proyecto debemos seguir los siguientes pasos:
* Clonar el repositorio en nuestro equipo. 
```
git clone https://github.com/lucianorepetto/WalletAppChallenge.git
```
* Instalar las dependencias necesarias del proyecto (tanto para la carpeta server como client). Para ello, debemos ingresar a cada una de las carpetas y ejecutar el siguiente comando en nuestra terminal: 
``` 
npm install 
```
## Crear tablas 馃洜

Para poder utilizar la aplicaci贸n debemos crear los siguientes objetos en nuestra base de datos: 

* Tabla activity:
```
CREATE TABLE IF NOT EXISTS activity (
    id INT NOT NULL AUTO_INCREMENT,
    date_start date NOT NULL,
    description varchar(255) NOT NULL,
    amount INT NOT NULL,
    concept INT NOT NULL,
    type varchar(255) NOT NULL,
    PRIMARY KEY (id)
);
```

* Tabla concepts:
```
CREATE TABLE IF NOT EXISTS concepts (
    id INT NOT NULL AUTO_INCREMENT,
    description varchar(255) NOT NULL,
    PRIMARY KEY (id)
);
```

## C贸mo correrlo 鈿★笍

IMPORTANTE! Para correr el proyecto correctamente debemos modificar los datos en la caperta node > server.js > dbOptions

 * Abrimos nuestra terminal en la carpeta "node" y ejecutamos el siguiente comando:
``` 
npm start
```

 * Abrimos otra pesta帽a de nuestra terminal en la carpeta "wallet-app" y ejecutamos el siguiente comando: 
``` 
npm start
```

* Ingresamos a nuestro navegador en la direcci贸n http://localhost:3000/ para ver las interacciones con la aplicaci贸n. 
 
### Puedes ver una demo funcional aqu铆 [Enlace]()

## Pruebas realizadas 馃搵
La aplicaci贸n fue probada en diferentes navegadores y dispositivos: 
- Google Chrome (PC)
- Mozilla Firefox (PC)
- Microsoft Edge (PC)
- Google Chrome (Android)

## Autor 鉁?

 * **Luciano Repetto** - [GitHub](https://github.com/lucianorepetto) - [LinkedIn](www.linkedin.com/in/lucianorepetto)

