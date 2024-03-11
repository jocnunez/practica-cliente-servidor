import mongoose from "mongoose";

// TODO: COMENTAR!!! (0,5 puntos) por qué formamos esta ruta así??
const DB_URI = `mongodb://database:27017/${process.env.MONGO_DB_NAME}`;

//Conexión con la base de datos
const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI, {
            user: process.env.MONGO_API_USER,
            pass: process.env.MONGO_API_PWD,
        });
        console.log("MongoDB Connected");
    } catch (err) {
        console.error("Error connecting to MongoDB", err);
        process.exit(1);
    }
};

export default connectDB;
