import express from "express";
import mongoose from "mongoose";
import Book from "./models/Books.js";
import dotenv from "dotenv";
dotenv.config();

const mongoserver = process.env.MONGO_SERVER;

mongoose
  .connect(mongoserver, {})
  .then(() => {
    console.log("MongoDB-Verbindung hergestellt");
  })
  .catch((error) => {
    console.error("Fehler beim Herstellen der MongoDB-Verbindung:", error);
  });

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/books", (req, res) => {
  res.send("Liste der Bücher");
});

app.post("/books", (req, res) => {
  res.send("Buch hinzugefügt");
});

// Book.create({
//   title: "Der Hobbit",
//   author: "J.R.R. Tolkien",
//   isbn: "9783608938153",
//   year: 1997,
// })
//   .then((book) => {
//     console.log("Buch erstellt:", book);
//   })
//   .catch((error) => {
//     console.error("Fehler beim Erstellen des Buchs:", error);
//   });

app.get("/", (req, res) => {
  Book.find()
    .then((books) => {
      res.json(books);
    })
    .catch((error) => {
      console.error("Fehler beim Abrufen der Bücher:", error);
      res.status(500).send("Fehler beim Abrufen der Bücher");
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
