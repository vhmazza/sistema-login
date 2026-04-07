const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = [
  { id: 1, username: 'admin', password: '123' },
  { id: 2, username: 'vitor',  password: '123' },
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;

 
  if (!username || !password || username.includes(';') || password.includes(';')) {
    return res.status(400).json({ message: 'Entrada inválida.' });
  }


  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Usuário ou senha incorretos.' });
  }

  return res.status(200).json({ message: `Bem-vindo, ${user.username}!` });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});