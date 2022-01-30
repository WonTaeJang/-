const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.urlencoded({extended: true})) 
app.use(bodyParser.urlencoded({extended: true})) 

const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb+srv://mongoTest:!Q2w3e4r@cluster0.31lzr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',function(err, client){
    if(err){
        return console.log(err);
    }    

    app.listen(8080, function(){
        console.log('listening on 8080');
    });
})

app.get('/', function(req,res){
    res.sendFile(__dirname + '/html/index.html');
});

app.get('/write', function(req,res){
    res.sendFile(__dirname + '/html/write.html');
});

app.post('/add', function(req, res){
    res.send('전송완료')
    console.log(req.body);
});

app.get('/beauty', function(req,res){
    res.send('뷰티용품 쇼핑 페이지임.')
});

