const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080');
});

app.get('/', function(req,res){
    res.send('반갑습니다.')
});

app.get('/beauty', function(req,res){
    res.send('뷰티용품 쇼핑 페이지임.')
});