import Task from "../database/task.model.js";

const taskRoutes = async (server, options) => {
    server.get("/", async (request, reply) => {
        const tasks = await Task.find({});
        return reply.send(tasks);
    });

    // Get a single task by ID
    server.get("/:id", async (request, reply) => {
        const { id } = request.params;

        try {
            const task = await Task.findById(id);
            if (!task) {
                return reply.status(404).send({ message: "Task not found" });
            }
            return reply.send(task);
        } catch (err) {
            return reply.status(500).send({ message: "Error finding task" });
        }
    });

    // Create a new task
    server.post("/", async (request, reply) => {
        const newTask = new Task(request.body);
        try {
            await newTask.save();
            return reply.status(201).send(newTask);
        } catch (err) {
            return reply.status(400).send({ message: "Error creating task" });
        }
    });
};

export default taskRoutes;
