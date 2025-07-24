require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/kontrol', (req, res) => {
  const { sifre } = req.body;
  if (sifre === process.env.PASSWORD) {
    res.json({ dogru: true });
  } else {
    res.json({ dogru: false });
  }
});

app.listen(3000, () => console.log("Sunucu çalışıyor..."));
