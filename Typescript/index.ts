// cmd에 tsc -w 를 입력해두면 ts -> js로 자동 변환 시켜준다.
let 이름 :string[] = ['kim', 'park'];

let obj :{name? : string} = {name: 'park'};

// type은 대문자로 명명
type Mytype = string | number;

let str : Mytype = 123;

// return값 number
function 함수(x : number) :number{
    return x * 2
}

함수(123);

type Member = [number, boolean];
let john: Member = [123,true];

// [key: ''] 모든 object 속성
type Member_obj = {[key: string]: string};
let john_obj : Member_obj = {name : 'kim'}

// 타입스크립트 기본 타입 정리 (primitive types)
// 변수명: 타입명 string, number, boolean...
let 성 :string = 'kim';
let 나이 :number = 50;
let 결혼했니 :undefined = undefined;

// array object
let 회원들 :string[] = ['kim', 'park'];
let 회원들2 :{member1 : string, member2 :string} = {member1 : 'kim', member2 :'park'};

// homework
let song :{[key: string]: string} = {
    title: '거짓말',
    singer: '버즈'
}

let project: { 
    member: string[], 
    days: number, 
    started: boolean 
} = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
}

// Union type, any, unknown
// union type: 타입 2개 이상 합핀 새로운 타입
let 회원 : (number | string) = 'kim';
회원 // 할당하면 타입이 지정된다.

let 회원2 : (number | string)[] = [1, '2', 3];
let 오브젝트2 : {a : (string | number)} = {a : '123'}

// 모든 자료형 허용해줌
// any 를 사용하면 typescript 쓰는 이유가 없음
let 회원3 : any;

// any와 비슷한 unknown 타입: 모든 자료형 허용해줌
// any 보다 안전한 이유: 
let 회원4 :unknown; 

// 회원4는 unknown 타입이라 빼기가 안됨
// 회원4 = 1
// 회원4 -1

let temp :string|number;


// homework2
{
    let user :string = 'kim';
    let age :number|undefined = undefined;
    let married :boolean = false; 
    let 철수 :(string|undefined|number|boolean)[] = [user, age, married];
}

{
    let 학교 :{
        score :(number|boolean)[],
        teacher : string,
        friend : string | string[]
    } = {
        score : [100, 97, 84],
        teacher : 'Phil',
        friend : 'John'
    }
    학교.score[4] = false;
    학교.friend = ['Lee' , 학교.teacher]
}