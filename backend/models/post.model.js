const mongoose = require("mongoose");


// Définir le schéma pour le modèle Post
const postSchema = mongoose.Schema(
  {
    message: {
      type: String,
      required: true, // Le titre est requis
    },
    author: {
      type: String,
      required: true, // Le contenu est requis
    },
    likers: {
      type: [String], // L'auteur est requis
      required: true,
    },
  },
  {
    timestamps: true, // Date de création par défaut
  }
);

module.exports = mongoose.model("post", postSchema);
