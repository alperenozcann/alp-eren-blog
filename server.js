const express = require('express');
const app = express();
const PORT = 3000;
const { kitaplar, sambo, seyahat } = require('./data.js');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', { kitaplar: kitaplar, sambo: sambo, seyahat: seyahat });
});

app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});