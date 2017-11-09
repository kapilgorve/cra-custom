const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.set('port', process.env.PORT || 5000);
app.use(express.static(`${__dirname}/../build`));
app.use('/static', express.static(`${__dirname}/../build/static`));
app.set('views', `${__dirname}/../build`);
app.set('view engine', 'html');

app.get('/*', (req, res) => {
  // eslint-disable-next-line no-console
  console.log('route /');
  res.sendFile(path.join(`${__dirname}./../build/index.html`));
});
app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log('app is listening on ', app.get('port'));
});
