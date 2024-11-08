const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.set('strictQuery', false); // Option pour les requêtes strictes

    try {
        // Connexion sans options obsolètes
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connecté");
    } catch (err) {
        console.error("Erreur de connexion à MongoDB:", err);
        process.exit(1); // Arrête le processus en cas d'erreur
    }
};

module.exports = connectDB;