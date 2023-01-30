const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { connectDB } = require('./mongodb/connect');
const { postRouter } = require('./routes/postRoutes');
const { dalleRouter } = require('./routes/dalleRoutes');

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRouter);
app.use('/api/v1/dalle', dalleRouter);

app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hello from DALL.E!',
  });
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => console.log('Server started on port 8080'));
  } catch (error) {
    console.log(error);
  }
};

startServer();
