// Este es el modelo que hemos creado antes
import Task from "../database/task.model.js";

// Aquí generaremos todas las subrutas de nuestro CRUD
// Todas las subrutas son las que se añaden en el fichero server.js en la línea 29:
// es decir, viendo esa linea vemos que las rutas de aquí iran siempre precedidas
// de "/api/tasks" que es el prefijo con el que se registra en el server
const taskRoutes = async (server, options) => {
    // El método por defecto si no especificamos nada es GET
    server.get("/", async (request, reply) => {
        // El método find lo crea automáticamente mongoose y nos devolverá
        // todas las tareas de la colección
        const tasks = await Task.find({});
        return reply.send(tasks);
    });

    // Esta ruta con "":" indíca que lo que viene después de "/" puede ser
    // cualquier cosa, y que lo meteremos en la variable id, por ejemplo
    // si alguien nos llama a (/api/tasks)/tarea1 entonces tarea1 es el id
    server.get("/:id", async (request, reply) => {
        const { id } = request.params;

        try {
            // en este método se busca exactamente la tarea cuyo id coincida con el de la ruta
            const task = await Task.findById(id);
            if (!task) {
                return reply.status(404).send({ message: "Task not found" });
            }
            return reply.send(task);
        } catch (err) {
            return reply.status(500).send({ message: "Error finding task" });
        }
    });

    // TODO: COMENTAR!!! (0,5 puntos) qué hace el post?
    server.post("/", async (request, reply) => {
        // TODO: COMENTAR!!! (0,5 puntos) qué valdría newTask si fuera const newTask = new Task()
        // en (request.body) vendrán los campos que nos enviarán al llamarnos desde el cliente
        const newTask = new Task(request.body);
        try {
            // este método es de mongoose para guardar el item en la colección
            await newTask.save();
            return reply.status(201).send(newTask);
        } catch (err) {
            return reply.status(400).send({ message: "Error creating task" });
        }
    });

    // TODO: CÓDIGO!!! (3 puntos)
    // escribe aquí el código para el update de una tarea con id

    // TODO: CÓDIGO!!! (2 puntos)
    // escribe aquí el código para el delete de una tarea con id
};

export default taskRoutes;
