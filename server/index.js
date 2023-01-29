const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', async (req, res) => {
  res.send('Hello from DALL-E');
});

const startServer = async () => {
  app.listen(8080, () =>
    console.log('Server has started on port http://localhost:8080')
  );
};

startServer();
