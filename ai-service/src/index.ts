import express from 'express';

const app = express();
const port = process.env.PORT || 4000;

app.get('/', (_req, res) => {
  res.send('MemoirBox AI Service');
});

app.listen(port, () => {
  console.log(`AI service listening on port ${port}`);
});
