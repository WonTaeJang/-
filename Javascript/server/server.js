var express = require('express');
var app = express();
const path = require('path');
const router = express.Router();

router.get('/', function(req,res){
  //console.log(__dirname);
  res.sendFile(path.join(__dirname+'/day12.html'));
})

router.get('/store', function(req, res){
  res.sendFile(path.join(__dirname + '/resources/store.json'));
})

app.use('/', router);
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/resources',express.static(path.join(__dirname, 'resources')));
//add the router


app.listen(process.env.port || 3000);

console.log('Running at Port 3000');