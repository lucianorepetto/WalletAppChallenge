# CHALLENGE FULL STACK - JavaScript 🚀

Este proyecto fue desarrollado como reto para conocer y demostrar las habilidades del programador en el lenguaje de programación React, Node.js Express y creacion de Base de Datos relacional.

## Descripción

Este proyecto consiste en realizar una aplicación web para administración de presupuesto personal, donde podemos ver todos nuestros ingresos y egresos totales registrados, así como también realizar operaciones de creación, edición y eliminación de los mismos.

## Funcionalidad 📋
 - Visualización del total de ingresos y egresos.
 - Lista para agregar, editar y borrar los ingresos y egresos totales registrados. 
 - Lista para agregar, editar y borrar los conceptos. 
 - Formulario para registrar los ingresos y egresos con su respectiva información (fecha inicio, descripción, monto, concepto, tipo). 
 - Formulario para registrar los conceptos.

## Mejoras a implementar 💡

 - Agregar un formulario de registro y login para permitir identificar al usuario.
 - Agregar funcionalidad de reportes y estadísticas.

## Desarrollos futuros 📌

 - Mejorar la interfaz de usuario. 
 - Agregar funcionalidad de cambio de moneda. 
 - Agregar funcionalidad para registrar usuarios en la base de datos.

## Herramientas utilizadas 🛠️ 

- [Visual Studio Code](https://code.visualstudio.com/) - IDE utilizado para desarrollo del proyecto
- [Postman](https://www.getpostman.com) - Para hacer pruebas a las APIs
- [Git](https://git-scm.com/) - Control de versiones
- [Github](https://github.com/ElverGonzalez) - Repositorio remoto

### Front-end

- [React](https://reactjs.org/) - Framework JavaScript de código abierto para construir interfaces de usuario en la web moderna. 

### Back-end

- [NodeJS](http://nodejs.org/) - Entorno de ejecución JavaScript que permite la creación de aplicaciones web escalables.
- [ExpressJS](https://expressjs.com/es/) - Framework web de código abierto para Node.js, diseñado para simplificar la creación de aplicaciones y apis Web rápidas y flexibles.

### Base de Datos

- [MySQL](https://www.mysql.com/) - Sistema de gestión de bases de datos relacionales open source.
- [MySQL Workbench](https://www.mysql.com/products/workbench/) - Administrador de bases de datos
    
## Cómo instalarlo 📦
 
Para poder correr este proyecto debemos seguir los siguientes pasos:
* Clonar el repositorio en nuestro equipo. 
```
git clone https://github.com/lucianorepetto/WalletAppChallenge.git
```
* Instalar las dependencias necesarias del proyecto (tanto para la carpeta server como client). Para ello, debemos ingresar a cada una de las carpetas y ejecutar el siguiente comando en nuestra terminal: 
``` 
npm install 
```
## Crear tablas 🛠

Para poder utilizar la aplicación debemos crear los siguientes objetos en nuestra base de datos: 

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

## Cómo correrlo ⚡️

IMPORTANTE! Para correr el proyecto correctamente debemos modificar los datos en la caperta node > server.js > dbOptions

 * Abrimos nuestra terminal en la carpeta "node" y ejecutamos el siguiente comando:
``` 
npm start
```

 * Abrimos otra pestaña de nuestra terminal en la carpeta "wallet-app" y ejecutamos el siguiente comando: 
``` 
npm start
```

* Ingresamos a nuestro navegador en la dirección http://localhost:3000/ para ver las interacciones con la aplicación. 
 
### Puedes ver una demo funcional aquí [Enlace]()

## Pruebas realizadas 📋
La aplicación fue probada en diferentes navegadores y dispositivos: 
- Google Chrome (PC)
- Mozilla Firefox (PC)
- Microsoft Edge (PC)
- Google Chrome (Android)

## Autor ✒

 * **Luciano Repetto** - [GitHub](https://github.com/lucianorepetto) - [LinkedIn](www.linkedin.com/in/lucianorepetto)

