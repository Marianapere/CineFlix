require("dotenv").config();

const mongoose = require("mongoose");

// -----------------------------------------------------------------------------------------------------------------------
//      const dbCon = async () => {
//                                  await mongoose.connect("mongodb+srv://mariana:3qheaRcJZEGonLdv@prueba.o2vshx3.mongodb.net/movies?retryWrites=true&w=majority&appName=prueba"

//                               );};
// --------------------------------------------------------------------------------------------------------------------------

const dbCon = async () => {
    try {
        // Obtener la URI de conexión desde la variable de entorno
        const mongoURI = process.env.MONGO_URI;

        // Conectar a la base de datos MongoDB
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Conexión a la base de datos exitosa');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
};


module.exports = dbCon;