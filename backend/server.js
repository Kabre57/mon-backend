const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5000;
  
// connexion à la DB
connectDB();

const app = express();

// Middleware pour analyser le corps des requêtes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));



// lancer le serveur
app.listen(port, () => console.log("Le serveur a démarré au port " + port));

