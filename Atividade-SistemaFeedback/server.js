const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public')); 

// Banco de dados em memória
let feedbacks = [];

// --- ROTAS DE API (DADOS) ---

// Listar feedbacks
app.get('/api/feedbacks', (req, res) => {
    res.json(feedbacks);
});

// Cadastrar feedback
app.post('/feedbacks/enviar', (req, res) => {
    const { nome, comentario } = req.body;
    
    if (!nome || !comentario) {
        return res.status(400).send('Nome e comentário são obrigatórios.');
    }

    feedbacks.push({ 
        id: Date.now().toString(), 
        nome, 
        comentario 
    });
    
    res.redirect('/feedbacks/lista');
});

// Remover feedback
app.post('/feedbacks/remover', (req, res) => {
    const { id } = req.body;
    // Garante que o ID seja comparado corretamente (string com string)
    feedbacks = feedbacks.filter(f => f.id !== String(id));
    res.redirect('/feedbacks/lista');
});

// --- ROTAS DE PÁGINAS (HTML) ---

// Página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Página de lista (apenas uma definição necessária)
app.get('/feedbacks/lista', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});