const express = require('express');
const cors = require('cors');

const bookRoutes = require('./routes/bookRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/livros', bookRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ 
    message: "API da Biblioteca está no ar! 📚 Acesse /livros para ver o CRUD." 
  });
});

app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(` 📚 Servidor rodando na porta ${PORT}`);
  console.log(` 🚀 Acesse: http://localhost:${PORT}/livros`);
  console.log(`=========================================`);
});
