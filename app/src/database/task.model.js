import mongoose from "mongoose";

// En Mongo un schema nos sirve para difinir la forma de los modelos de objetos (model)
// que queramos guardar en nuestras colecciones. Lo hacemos creando los campos que
// necesitemos y eligiendo el comportamiento de dicho campo ... si es obligatorio o no,
// el valor por defecto y muchas otras propiedades

// Documentación oficial (solo inglés)
// https://mongoosejs.com/docs/guide.html

// Muy buena explicación completa en español!!!
// https://imaginaformacion.com/tutoriales/guia-completa-de-mongoose-libreria-para-nodejs

const taskSchema = new mongoose.Schema({
    // TODO: COMENTAR (0,5 puntos)
    description: {
        type: String,
        required: true,
        trim: true,
    },
    // guardamos si está completa o no con un booleano
    // si no se define al crearse la tarea valdrá falso por defecto
    completed: {
        type: Boolean,
        default: false,
    },
    created_at: {
        type: Date,
        default: Date.now(),
    },
});

// Con el schema generamos ahora nuestro modelo de tarea
const Task = mongoose.model("Task", taskSchema);

export default Task;
