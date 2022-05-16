// generic
// 1. 함수에 타입파라미터 넣을 수 있음
// 2. extends 키워드로 넣을 수 있는 타입 제한 가능
// 3. class에도 타입파라미터 넣을 수 있음
function 함수7(x) {
    // 해결책 1. narroing
    // 해결책 2. generic 함수 만들기 
    return x[0];
}
{
    var a = 함수7([4, 2]); // MyType이 모두 number로 변경됨
    var b = 함수7(['4', '2']); // <> 생략 가능 
    console.log(a + 1);
}
// extends : 타입 파라미터에 제한을 둘수 있다. 
function 함수8(x) {
    return x.length;
}
{
    var a = 함수8('100');
}
// 숙제 1
function 함수10(x) {
    console.log(x.length);
}
함수10('hello');
함수10(['kim', 'park']);
