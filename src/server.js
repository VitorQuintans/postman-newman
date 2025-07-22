
const express = require('express');
const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'teste@qa.io' && password === '123456') {
    return res.status(200).json({ token: 'abc123' });
  }
  res.status(401).json({ error: 'Unauthorized' });
});

const PORT = 3333;
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
