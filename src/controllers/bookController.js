let books = require('../models/bookModel');

const getBooks = (req, res) => {
  res.status(200).json(books);
};

const createBook = (req, res) => {
  const { titulo, autor, status } = req.body;
  if (!titulo || !autor) return res.status(400).json({ error: "Título e autor são obrigatórios!" });

  const newBook = {
    id: books.length > 0 ? books[books.length - 1].id + 1 : 1,
    titulo,
    autor,
    status: status || "Quero Ler"
  };

  books.push(newBook);
  res.status(201).json(newBook);
};

const updateBook = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const bookIndex = books.findIndex(b => b.id === parseInt(id));

  if (bookIndex === -1) return res.status(404).json({ error: "Livro não encontrado!" });

  books[bookIndex].status = status || books[bookIndex].status;
  res.status(200).json(books[bookIndex]);
};

const deleteBook = (req, res) => {
  const { id } = req.params;
  const bookIndex = books.findIndex(b => b.id === parseInt(id));

  if (bookIndex === -1) return res.status(404).json({ error: "Livro não encontrado!" });

  books.splice(bookIndex, 1);
  res.status(200).json({ message: "Livro deletado!" });
};

module.exports = { getBooks, createBook, updateBook, deleteBook };