# Práctica de Implantación de Aplicaciones Web

## 📚 Proyecto base con Docker Compose

El proyecto base es una aplicación típica de lista de tareas divida en tres partes:

- una base de datos MongoDB
- una API REST hecha en Node con la librería Fastify (basada en Express)
- un front hecho con Solid.js (versión simplificada de React (sin VirtualDOM))

Puedes encontrar información sobre Docker Compose en la web oficial <https://docs.docker.com/compose/gettingstarted/>

---

### :green_book: Base de Datos MongoDB

Características de la MongoDB:

- Incluye las variables de entorno **MONGO_INITDB_ROOT_USERNAME** y **MONGO_INITDB_ROOT_PASSWORD** por lo que estará securizada de inicio
- También se incluye la VE **MONGO_INITDB_DATABASE** así que esa DB estará creada de inicio y será la que usemos para nuestra app
- Por último para nuestro caso de uso se creará un usuario con permisos para escribir en esa DB, pasando sus datos también por VEs
- Para crear el usuario usaremos un script **./db/init-mongo.sh** que pasaremos por el Docker Entrypoint del contenedor de la DB

[:pencil:] En este servicio no hay que hacer ningún cambio. Lo único que necesitaremos saber será la ruta donde está desplegada y el usuario y pwd para nuestra API.

---

### :orange_book:   Aplicación server en Node usando Fastify

- Usaremos Fastify para crear una API RESTful que de servicio al cliente.
- Conectaremos con la DB para persistir los datos

---

### :blue_book: Aplicación client hecha en Solid.js

- Proyecto generado con Vite
- Usa Solid.js

---

### :pencil: Ejercicios

- :pencil: Completa los comentarios en los que pone **[TODO: comentario]** (<span style="color:yellow;">4 puntos</span>)
- :pencil: Modifica la aplicación en el lado del servidor para completar la funcionalidad de update. Tanto hacia el cliente como hacia la db (<span style="color:yellow;">3 puntos</span>)
- :pencil: Modifica la aplicación en el lado del servidor para completar la funcionalidad de delete. Tanto hacia el cliente como hacia la db (<span style="color:yellow;">2 puntos</span>)
- :pencil: Modifica la web para que haga uso de la API (<span style="color:yellow;">1 punto</span>)

Además de los ejercicios se tendrá en cuenta otros factores, como la limpieza de código, la calidad de la presentación (en cuanto a fluidez, concreción y coherencia con el código) o cualquier extra que se quiera añadir a la práctica  (<span style="color:yellow;">2 puntos</span>)
