// cmd에 tsc -w 를 입력해두면 ts -> js로 자동 변환 시켜준다.
var 이름 = ['kim', 'park'];
var obj = { name: 'park' };
var str = 123;
// return값 number
function 함수(x) {
    return x * 2;
}
함수(123);
var john = [123, true];
var john_obj = { name: 'kim' };
// 타입스크립트 기본 타입 정리 (primitive types)
// 변수명: 타입명 string, number, boolean...
var 성 = 'kim';
var 나이 = 50;
var 결혼했니 = undefined;
// array object
var 회원들 = ['kim', 'park'];
var 회원들2 = { member1: 'kim', member2: 'park' };
// homework
var song = {
    title: '거짓말',
    singer: '버즈'
};
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
// Union type, any, unknown
// union type: 타입 2개 이상 합핀 새로운 타입
var 회원 = 'kim';
회원; // 할당하면 타입이 지정된다.
var 회원2 = [1, '2', 3];
var 오브젝트2 = { a: '123' };
// 모든 자료형 허용해줌
// any 를 사용하면 typescript 쓰는 이유가 없음
var 회원3;
// any와 비슷한 unknown 타입: 모든 자료형 허용해줌
// any 보다 안전한 이유: 
var 회원4;
// 회원4는 unknown 타입이라 빼기가 안됨
// 회원4 = 1
// 회원4 -1
var temp;
// homework2
{
    var user = 'kim';
    var age = undefined;
    var married = false;
    var 철수 = [user, age, married];
}
{
    var 학교 = {
        score: [100, 97, 84],
        teacher: 'Phil',
        friend: 'John'
    };
    학교.score[4] = false;
    학교.friend = ['Lee', 학교.teacher];
}
