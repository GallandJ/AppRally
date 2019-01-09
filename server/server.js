const express = require('express');

const bodyParser = require('body-parser');

const config = require('./config');
const db = require('./db.json');

const app = express();
const apiRouter = express.Router();

app.use('/api', apiRouter);
app.listen(config.port);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

apiRouter.use((req, res, next) => {
  //do loggin
  console.log('Something is happening during the middleware');
  next();
});


apiRouter.get('/temps', (req, res) => {
  res.json(db);
});
