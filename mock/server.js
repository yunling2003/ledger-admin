var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var router = express.Router();

app.get('/', function(req, res) {
  res.send('hello world');
});

router.use('/test', require('./test'));

app.use('/api', router);

app.listen(3001);