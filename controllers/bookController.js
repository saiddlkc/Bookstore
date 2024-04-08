import Books from "../models/booksSchema.js";

// Create a new book
const createBook = async (req, res) => {
  try {
    const book = new Books(req.body);
    await book.save();
    res.status(201).send(book);
  } catch (error) {
    res.status(400).json(error);
  }
};

// Get all books
const getBooks = async (req, res) => {
  try {
    const books = await Books.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(400).json(error);
  }
};

// Get a single book
const getBook = async (req, res) => {
  try {
    const book = await Books.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a book
const updateBook = async (req, res) => {
  try {
    const book = await Books.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a book
const deleteBook = async (req, res) => {
  try {
    const book = await Books.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { createBook, getBooks, getBook, updateBook, deleteBook };
