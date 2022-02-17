var router = require('express').Router();

// 라우터파일에 미들웨어 적용하고 싶으면 
//router.use(login_check);  // global
router.use('/shirts',login_check);

// 마이페이지 접속 전 실행할 미들웨어
function login_check(req ,res, next){
    if(req.user){
        next();
    } else {
        res.send('login fail');
    }
}

// router 관리
router.get('/shirts', function(요청, 응답){
    응답.send('셔츠 파는 페이지입니다.');
});
 
router.get('/pants', function(요청, 응답){
    응답.send('바지 파는 페이지입니다.');
}); 

module.exports = router;