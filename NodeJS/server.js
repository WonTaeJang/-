const express = require('express');
const app = express();

// socket.io setting
const http = require('http').createServer(app);
const {Server} = require('socket.io');
const io = new Server(http);

const bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))

var db;
const MongoClient = require('mongodb').MongoClient;

const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

// static 폴더
app.use('/public', express.static('public'));

// env test
require('dotenv').config(); 

MongoClient.connect(process.env.DB_URL, function (err, client) {
    if (err) {
        return console.log(err);
    }

    // todoapp이라는 database 폴더
    db = client.db('todoapp');

    // db.collection('post').insertOne({이름 : 'John', 나이 : 20, id:100}, function(_err, result){
    //     console.log('저장완료');
    // });

    http.listen(process.env.PORT, function () {
        console.log('listening on 8080');
    });
})

app.get('/', function (req, res) {
    //res.sendFile(__dirname + '/html/index.html');

    db.collection('post').find().toArray(function (err, result) {
        //console.log(result)
        res.render('list.ejs', { posts: result });
    })
});

app.get('/index', function (req, res) {
    res.render('index.ejs');
});

// create
app.get('/write', function (req, res) {
    //res.sendFile(__dirname + '/html/write.html');
    res.render('write.ejs');
});

// update
app.get('/edit/:id', function (req, res) {
    db.collection('post').findOne({ _id: parseInt(req.params.id) }, function (err, result) {
        //console.log(result);

        if (err) {
            res.status(400);
            return;
        }

        res.render('edit.ejs', { data: result })
    })
});

app.put('/edit', function (req, res) {
    db.collection('post').updateOne(
        {
            _id: parseInt(req.body.id)
        },
        {
            $set:
            {
                제목: req.body.title,
                날짜: req.body.date
            }
        },
        function (err, result) {
            if (err) { return console.log(err) }
            console.log('수정 완료')

            res.redirect('/list');
        });
});

// ejs는 views 폴더안에서 작성해야한다.
app.get('/list', function (req, res) {
    db.collection('post').find().toArray(function (err, result) {
        //console.log(result)
        res.render('list.ejs', { posts: result });
    })
});

app.get('/search', (req, res) => {
    console.log(req.query.value);

    // 정확히 일치하는것만 찾아줌  
    // 해결방법: 정규식 - /req.query.value/ // 게시물이 많으면 문제가 될 수 있음
    //          mongodb indexing 사용 - Binary Search 
    // 인사하기 운동하기 이런식으로 검색하면 or 검색
    // - 는 검색에 포함 안되게 
    // 한글 글자단어 일부만 서칭할경우 검색이 안됨
    // 해결책 - 검색할 문서의 양을 제한두기
    // 글자 단어 띄어쓰기기준을 두글자 단어 기준으로 바꾸면 됨 (mongodb 설치필요)
    // db.collection('post').find({$text: {$search: req.query.value}}).toArray(function (err, result) {
    //     //console.log(result)
    //     res.render('search.ejs', { posts: result });
    // })


    // search indexes를 사용할려면 aggregate를 사용해야함
    // 단어로 검색 가능
    var 검색조건 = [
        {
          $search: {
            index: 'titleSearch',
            text: {
              query: req.query.value,
              path: '제목'  // 제목날짜 둘다 찾고 싶으면 ['제목', '날짜']
            }
          }
        }, 
        { $sort : {_id : 1}}, // 결과 정렬하기
        { $limit : 10}  // 검색 개수 제한
        //{ $project : {제목 1, _id: 0, score: {$meta: "searchScore"}}} 검색결과에서 필터주기
      ] 
    
    db.collection('post').aggregate(검색조건).toArray(function (err, result) {
       
        //console.log(result)
        res.render('search.ejs', { posts: result });
    })
})

app.get('/beauty', function (req, res) {
    res.send('뷰티용품 쇼핑 페이지임.')
});

// default/?? parameter로 요청가능한 URL 만들기
app.get('/detail/:id', function (req, res) {
    db.collection('post').findOne({ _id: parseInt(req.params.id) }, function (err, result) {
        console.log(result);

        if (err) {
            res.status(400);
            return;
        }

        res.render('detail.ejs', { data: result })
    })


});


const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

app.use(session({ secret: '비밀코드', resave: true, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/login', function (req, res) {
    res.render('login.ejs');
})

app.post('/login', passport.authenticate('local', {
    failureRedirect: '/fail'
}), function (req, res) {
    res.redirect('/');
});

app.get('/mypage', login_check, function(req, res){
    // 요청.user는 deserializeUser()를 통해 얻은 값
    console.log(req.user);
    console.log(req.user._id);
    res.render('mypage.ejs', { ur : req.user });
});

// 마이페이지 접속 전 실행할 미들웨어
function login_check(req ,res, next){
    if(req.user){
        next();
    } else {
        res.status(400);
        res.send('login fail');
    }
}

passport.use(new LocalStrategy({
    usernameField: 'id',
    passwordField: 'pw',
    session: true,
    passReqToCallback: false,
}, function (입력한아이디, 입력한비번, done) {
    //console.log(입력한아이디, 입력한비번);
    db.collection('login').findOne({ id: 입력한아이디 }, function (에러, 결과) {
        if (에러) return done(에러)

        if (!결과) return done(null, false, { message: '존재하지않는 아이디요' })
        if (입력한비번 == 결과.pw) {
            return done(null, 결과)
        } else {
            return done(null, false, { message: '비번틀렸어요' })
        }
    })
}));

passport.serializeUser(function(user,done){
    done(null, user.id);
});

// 세션이 있는지 없는지 찾을때 
// 로그인한 유저의 개인정보를 DB에서 찾는 역할
passport.deserializeUser(function(아이디, done){ 
    db.collection('login').findOne({id : 아이디}, function(에러, 결과){
        done(null, 결과);
    })
    
});

app.post('/register', function(req, res){
    // 아이디 중복검사하고 저장하기 
    db.collection('login').insertOne({id : req.body.id, pw : req.body.pw}, function(err, result){
        res.redirect('/');
    })
})

app.post('/add', function (req, res) {
    res.send('requset success')
    // console.log(req.body.data);
    // console.log(req.body.title);

    // 글 번호 달기
    // 유니크한 글번호를 달기 
    db.collection('counter').findOne({ name: '게시물갯수' }, function (err, result) {
        if (err) { return console.log(err) }

        //console.log(result.totalPost);
        var 총게시물갯수 = result.totalPost;
        var 저장할거 = { _id: 총게시물갯수 + 1, 제목: req.body.title, 날짜: req.body.date, 작성자 : req.user._id };

        db.collection('post').insertOne(저장할거, function (_err, result) {
            console.log('record success');

            // 총게시물갯수 증감 
            // 콜백함수로 만들어야 순차적으로 진행이 확실함
            //db.collection('counter').updateOne({어떤데이터를 수정할지},{수정 값}, function(){})
            // operator set: {$set : {key: 바꿀 값}}
            // operator set: {$inc : {key: 기존값에 더해줄 값}}
            db.collection('counter').updateOne({ name: '게시물갯수' }, { $inc: { totalPost: 1 } }, function (err, result) {
                if (err) { return console.log(err) }
                console.log('db counter update success')
            });

        });
    });
});

app.delete('/delete', function (req, res) {
    console.log(req.body);

    // string to int
    req.body._id = parseInt(req.body._id);

    var 삭제할데이터 = {_id : req.body._id, 작성자 : req.user._id};

    //db.collection('post').deleteOne({}, function(){})
    db.collection('post').deleteOne(req.body, function (err, result) {
        if (err) {
            res.status(400);
            return console.log(err)
        }

        console.log('db counter delete success')
        res.status(200).send({ message: '성공했습니다.' });
    });
});



// app.use: 미들웨어를 쓰고 싶을때 ,해당 경로에 요청과 응답 사이에 실행
app.use('/shop', login_check, require('./routes/shop.js'));
app.use('/board/sub', require('./routes/board.js'));

// image upload
let multer = require('multer');
var storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, './public/image')
    }, 
    filename : function(req, file, cb){
        cb(null, file.originalname)
    },
    filefilter : function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
            return callback(new Error('PNG, JPG만 업로드하세요'))
        }
        callback(null, true)
    }, 
    limits: {
        fileSize: 1024 * 1024
    }
});

var upload = multer({storage : storage})

app.get('/upload', function(req, res){
    res.render('upload.ejs');
})

app.post('/upload',upload.single('프로필') , function(req, res){
    res.send('업로드 완료');
})

/*
// 복수개 저장
app.post('/upload',upload.array('프로필', 10) , function(req, res){
    res.send('업로드 완료');
})
*/

app.get('/image/:imageName', function(req, res){
    res.sendFile( __dirname + '/public/image/' + req.params.imageName)
})

// chat
app.post('/chat', login_check, function(req,res){
    var postNum = parseInt(req.body._id);   // 게시물 번호
    var reqUser = req.user._id;

    // 게시물 정보
    db.collection('post').findOne({_id : postNum}, function (err, post){
        console.log(post);

        var chatR = {member : [post.작성자, reqUser], data : new Date(), title : '채팅방' + postNum};
        db.collection('chatroom').insertOne(chatR, function(err, result){
            console.log('chat room create');
        });
    });
});

app.get('/chat', login_check, function(req, res){
    db.collection('chatroom').find({member : req.user._id}).toArray(function(err, result){
        res.render('chat.ejs', { data: result });
    })
})

app.post('/message', login_check, function(req, res){
    var 저장할거 = {
        parent : req.body.parent,
        content : req.body.content,
        userid : req.user._id,
        date : new Date(),
    }
    
    db.collection('message').insertOne(저장할거).then(()=>{
        console.log('DB저장 성공');
        res.send('DB 저장 성공');
    })
})

// Server Sent Event(SSE)
// 서버가 유저에게 일방적 통신 가능
// Web Socket - socket.io
// 양방향 통신가능

app.get('/message/:id', login_check, function(req, res){
    // head를 수정하면 응답을 여러번 보낼수 있게 된다.
    res.writeHead(200, {
        "Connection" : "keep-alive",
        "Content-Type" : "text/event-stream",
        "Cache-Control": "no-cache",
    });

    db.collection('message').find({parent : req.params.id}).toArray()
    .then((result)=>{
        // event: 보낼데이터 이름
        // data: 보낼데이터, 데이터는 문자만 취급
        // json 는 문자취급
        res.write('event: test\n');
        res.write(`data: ${JSON.stringify(result)}\n\n`);
    })

    // mongodb change stream : DB 변동시 서버에 알려줌 -> 유저에게 보낼수 있음
    const pipeline = [
        { $match: {'fullDocument.parent' : req.params.id} }    // 감시 대상
    ];
    const collection = db.collection('message');
    const changeStream = collection.watch(pipeline);    // .watch()붙이면 실시간 감시를 함
    changeStream.on('change', (result)=>{
        //console.log(result.fullDocument);
        res.write('event: test\n');
        res.write(`data: ${JSON.stringify([result.fullDocument])}\n\n`);
    });
})

app.get('/socket', function(req, res){
    res.render('socket.ejs');

    // event lisener
    io.on('connection', function(socket){
        console.log('유저 접속됨');

        // data 수신
        socket.on('user-send', function(data){
            console.log(data);
        })
    })
})