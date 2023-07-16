const express = require('express');
const multer = require('multer');
const { compressImage } = require('./compress');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.post('/compress', upload.single('photo'), async (req, res) => {
  try {
    const compressedImageBuffer = await compressImage(req.file.path, 300);
    res.set('Content-Type', 'image/jpeg');
    res.send(compressedImageBuffer);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
