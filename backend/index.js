const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const prisma = new PrismaClient();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.get('/api/image', async (req, res) => {
  try {
    const image = await prisma.image.findFirst();
    if (!image) {
      return res.status(404).send('Image not found');
    }
    res.json(image);
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.put('/api/image', async (req, res) => {
  const { url, texth2, textParagraph } = req.body;
  try {
    const updatedImage = await prisma.image.updateMany({
      where: {}, // Adicione uma condição de onde para identificar a imagem a ser atualizada
      data: { url, texth2, textParagraph },
    });
    res.json(updatedImage);
  } catch (error) {
    console.error('Error updating image:', error);
    res.status(500).send('Internal Server Error');
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



/*
////////////////////////where com condição para especificar img ou text///////////////////////////
app.put('/api/image/:id', async (req, res) => {
  const { id } = req.params;
  const { url, texth2 } = req.body;
  try {
    const updatedImage = await prisma.image.update({
      where: { id: Number(id) }, // Certifique-se de que `id` é o campo correto
      data: { url, texth2 },
    });
    res.json(updatedImage);
  } catch (error) {
    console.error('Error updating image:', error);
    res.status(500).send('Internal Server Error');
  }
});
*/