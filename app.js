const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Interpreta requisições em JSON e vindas de formulários
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota para abrir o formulário
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota POST solicitada na atividade
app.post('/api/post-example', (req, res) => {
    const data = req.body;
    console.log('Dados recebidos no terminal:', data);
    res.send(`Requisição POST bem-sucedida! Dados recebidos: ${JSON.stringify(data)}`);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});