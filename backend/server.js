const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
require('dotenv').config();

const prisma = new PrismaClient();
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());

// Rota para obter a imagem, título e parágrafo
app.get('/api/image', async (req, res) => {
  try {
    const imageData = await prisma.imageData.findFirst();
    if (!imageData) {
      return res.status(404).json({ message: 'Nenhum dado encontrado' });
    }
    res.json(imageData);
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
    res.status(500).json({ error: 'Erro ao buscar os dados' });
  }
});

// Rota para atualizar a URL da imagem, título e parágrafo
app.put('/api/image', async (req, res) => {
  const { url, texth2, textParagraph } = req.body;
  try {
    let imageData = await prisma.imageData.findFirst();
    if (!imageData) {
      imageData = await prisma.imageData.create({
        data: {
          url: url || '',
          texth2: texth2 || '',
          textParagraph: textParagraph || '',
        },
      });
    } else {
      imageData = await prisma.imageData.update({
        where: { id: imageData.id },
        data: {
          url: url || imageData.url,
          texth2: texth2 || imageData.texth2,
          textParagraph: textParagraph || imageData.textParagraph,
        },
      });
    }
    res.json(imageData);
  } catch (error) {
    console.error('Erro ao atualizar os dados:', error);
    res.status(500).json({ error: 'Erro ao atualizar os dados' });
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
