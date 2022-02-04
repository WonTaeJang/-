const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.urlencoded({extended: true})) 
app.use(bodyParser.urlencoded({extended: true})) 

var db;
const MongoClient = require('mongodb').MongoClient;

app.set('view engine','ejs');

MongoClient.connect('mongodb+srv://mongoTest:!Q2w3e4r@cluster0.31lzr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',function(err, client){
    if(err){
        return console.log(err);
    }    

    // todoapp이라는 database 폴더
    db = client.db('todoapp');

    // db.collection('post').insertOne({이름 : 'John', 나이 : 20, id:100}, function(_err, result){
    //     console.log('저장완료');
    // });

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
    console.log(req.body.data);
    console.log(req.body.title);

    db.collection('post').insertOne({제목: req.body.title, 날짜 : req.body.date} , function(_err, result){
        console.log('저장완료');
    });
});

// ejs는 views 폴더안에서 작성해야한다.
app.get('/list', function(req, res){
    db.collection('post').find().toArray(function(err, result){
        console.log(result)
        res.render('list.ejs', {posts : result});
    })
});


app.get('/beauty', function(req,res){
    res.send('뷰티용품 쇼핑 페이지임.')
});

