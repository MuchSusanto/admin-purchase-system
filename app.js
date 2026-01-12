const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Admin Purchase System OK');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
