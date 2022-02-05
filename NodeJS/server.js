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
    res.send('requset success')
    // console.log(req.body.data);
    // console.log(req.body.title);

    // 글 번호 달기
    // 유니크한 글번호를 달기 
    db.collection('counter').findOne({name : '게시물갯수'}, function(err, result){
        if(err){return console.log(err)}

        //console.log(result.totalPost);
        var 총게시물갯수 = result.totalPost;

        db.collection('post').insertOne({_id : 총게시물갯수 + 1 , 제목: req.body.title, 날짜 : req.body.date} , function(_err, result){
            console.log('record success');

            // 총게시물갯수 증감 
            // 콜백함수로 만들어야 순차적으로 진행이 확실함
            //db.collection('counter').updateOne({어떤데이터를 수정할지},{수정 값}, function(){})
            // operator set: {$set : {key: 바꿀 값}}
            // operator set: {$inc : {key: 기존값에 더해줄 값}}
            db.collection('counter').updateOne({name: '게시물갯수'},{$inc : {totalPost : 1} }, function(err, result){
                if(err){return console.log(err)}
                console.log('db counter update success')
            });

        });
    });
});

// ejs는 views 폴더안에서 작성해야한다.
app.get('/list', function(req, res){
    db.collection('post').find().toArray(function(err, result){
        //console.log(result)
        res.render('list.ejs', {posts : result});
    })
});

app.get('/beauty', function(req,res){
    res.send('뷰티용품 쇼핑 페이지임.')
});

app.delete('/delete', function(req, res){
    console.log(req.body);

    // string to int
    req.body._id = parseInt(req.body._id); 


    //db.collection('post').deleteOne({}, function(){})
    db.collection('post').deleteOne(req.body, function(err, result){
        if(err){return console.log(err)}
        console.log('db counter delete success')
    });
});

