import fastify from "fastify";

// Todo lo relacionado con la base de datos lo mantenemos en otro(s) fichero(s)
// Y lo mismo para nuestras rutas
// así tenemos el código más ordenado y más fácil de mantener/actualizar
import connectDB from "./database/connection.js";
import taskRoutes from "./routes/tasks.js";

// Metemos la secuencia de arranque de nuestra app en un bloque try/catch y así,
// en caso de fallo en algún punto, terminamos el proceso de forma controlada
try {
    // Primero intentamos conectar a la mongo con la función de database.js
    await connectDB();

    // Se crea el servidor donde haremos las rutas públicas (al cliente)
    const server = fastify({ logger: true });

    // Y aquí cargamos las rutas que hemos creado en routes para las tareas
    server.register(taskRoutes, { prefix: "/api/tasks" });

    // Si todo ha ido bien arrancamos nuestro servidor
    await server.listen({ port: 3000, host: "0.0.0.0" });
    server.log.info(`Servidor escuchando en ${server.server.address().port}`);
} catch (err) {
    console.error("Error, no se ha podido iniciar la applicación", err);
    process.exit(1);
}
