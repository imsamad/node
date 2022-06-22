const app = require('express')();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send('ok');
});
app.get('/one', (req, res) => {
  res.send('one');
});
app.get('/two', (req, res) => {
  res.send('two');
});
app.get('/three', (req, res) => {
  res.send('three');
});

app.listen(4000, () => {
  console.log('ok');
});
