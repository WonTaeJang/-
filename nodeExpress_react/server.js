const express = require('express');
const path = require('path');
const app = express();

const http = require('http').createServer(app);
http.listen(8080, function () {
  console.log('listening on 8080')
});

// react
// react-project 폴더를 만든 후 
// npx create-react-app 프로젝트명
// react-project 폴더로 가서 npm run build를 한다.

// react 장점
// 리액트 프로젝트 내에서 라우팅도 가능 
// 새로고침 없이 동작
// 서버는 DB 입출력만 하면 된다. 서버의 기능이 축소 

// 미들웨어 사용
// 미들웨어: 요청과 응답사이에 실행
//app.use(express.static(path.join(__dirname, 'public')))
app.use('/', express.static(path.join(__dirname, 'public')));

// react를 디렉터리 경로로 설정하기 위해서는 react-project package.json에 homepage를 추가해줘야한다.
app.use('/react', express.static(path.join(__dirname, 'react-project/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/main.html'));
})

// /react로 들어갔을 때 리액트 페이지 보여주는법
app.get('/react', function (req, res) {
  res.sendFile(path.join(__dirname, 'react-project/build/index.html'));
})

// 어떤값이 들어와도 react 페이지로 이동한다.
// app.get('*', function(req, res){
//   res.sendFile(path.join(__dirname, 'react-project/build/index.html'));
// })