// generic
// 1. 함수에 타입파라미터 넣을 수 있음
// 2. extends 키워드로 넣을 수 있는 타입 제한 가능
// 3. class에도 타입파라미터 넣을 수 있음

function 함수7<MyType>(x:MyType[]) :MyType{
    // 해결책 1. narroing
    // 해결책 2. generic 함수 만들기 

    return x[0];
}
{
    let a = 함수7<number>([4,2]);   // MyType이 모두 number로 변경됨
    let b = 함수7<string>(['4','2']);   // <> 생략 가능 
    console.log(a + 1);
}

interface LengthCheck{
    length : number
}
// extends : 타입 파라미터에 제한을 둘수 있다. 
function 함수8<MyType extends LengthCheck>(x:MyType){
    return x.length;
}

{
    let a = 함수8<string>('100');
}

// 숙제 1
function 함수10<MyType extends (string | string[])>(x:MyType):void{
    console.log(x.length);
}

함수10<string>('hello')
함수10<string[]>(['kim', 'park']) 