// 함수 type은 arrow func 으로
type 함수타입 = (a :string) => number;

let 함수_3: 함수타입 = function(a){
    return 10
}

// object 안에 함수 만들기
type Member2 = {
    name: string,
    plusOne : (x:number) => number,
    changeName : () => void
}

let 회원정보: Member2 = {
    name: 'kim',
    plusOne(a){
        return a+1;
    },
    changeName : ()=>{}
}

회원정보.plusOne(1);
회원정보.changeName();