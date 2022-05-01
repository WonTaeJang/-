// 타입을 변수에 담아 쓰기
// type alias (타입 변수)
type Animal = string | number | undefined;

let 동물 : Animal = 123;


// type 변수 작명 관습
// 대문자로 시작
type Animal2 = {name:string, age:number}
let 동물2 : Animal2 = {name : 'kim', age : 20}

// const 변수는 등호로 재할당만 막는 역할
// typescript 쓰면 object 자료 수정도 막을 수 있음
type Girlfriend = {
    readonly name: string
    age? : number // age : number | undefined
}

const 여친 :Girlfriend = {
    name : '엠버'
};

// readonly는 읽기만 가능함
// 실제 js에서는 동작가능하지만 에러경고창만 뜸
//여친.name = '유라';

// union type으로 합치기 가능
type Name = string;
type Age = number;
type Person = Name | Age;

// object 합치기
// object extend
type PositionX = {x : number}
type PositionY = {y : number}
type Position = PositionX & PositionY

let position : Position = {x:10,y:5}

// (참고) type 변수는 재정의가 불가능

// homework
// (숙제1) object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
type A = {x : number, y: number}
type B = {x: number, y: string, z:string}
type AB = A & B
// type never 발생 : 절대 발생할 수 없는 type
//let ab :AB = {x:4, y: 4, z:'dd'}

/*
(숙제2) 다음 조건을 만족하는 타입을 만들어봅시다. 

1. 이 타입은 object 자료형이어야합니다.
2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  

type alias로 만들어보셈 */

type obj = {
    color?: string, 
    size: number,
    readonly position: number[]
}

let 테스트용변수 :obj = {
    size : 123,
    position : [1,2,3]
}

/*
(숙제3) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 

1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오.
*/

type Admin = {name: string, phone: number, email? : string}
let sample :Admin = { name : 'kim', phone : 123, email : 'abc@naver.com' }

/*
(숙제4). 다음을 만족하는 type alias를 만들어보십시오.

1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 
3. 멋있게 숙제2에서 만들어둔  type alias를 재활용해봅시다.
*/

type Adult = {adult: boolean}

type NewUser = Admin & Adult

let 회원가입정보 :NewUser = {
    name : 'kim',
    adult : false,
    phone : 1234
  }