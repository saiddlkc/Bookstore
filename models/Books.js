import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, required: true },
  year: { type: Number, required: true },
  createdOn: { type: Date, default: Date.now },
});

export default mongoose.model("Book", bookSchema);
