// name_1 은 123이라는 숫자만 들어갈수 있음
let name_1 :123;

// 변수에 뭐가 들어올지 더 엄격하게 관리가능
let 접니다 :'대머리' | '솔로';
접니다 = '대머리'
접니다 = '솔로'

// function
function 함수_1(a :'hello') : (1 | 0){
    return 1;
}

// Q. 가위 바위 보 중 1개 입력
// 가위 바위 보 만 들어올 수 있는 array를 return 해야함
function 함수_2(str :'가위' | '바위' | '보'): ('가위' | '바위' | '보')[]{
    return ['가위','바위','보'];
}

함수_2('가위');

// Literal type의 문제점
// as const 를 사용하면 name에 'kim'을 type으로 변경해줌, readonly로 변한다.
var 자료 = {
    name : 'kim'
} as const

function 내함수2(a: 'kim'){

}

내함수2("kim");
// 자료.name은 'kim'이라는 type이 아니기 때문에 에러가 발생
// as const 사용하면 해결
내함수2(자료.name)