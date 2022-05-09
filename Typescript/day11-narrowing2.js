// typeof로 narrowing 할 수 없는게 있다. 
// null & undefined 타입체크하는 경우 매우 잦음
// 1. &&연산자
// function 함수(a :string | undefined){
//     if (a && typeof a=== 'string'){
//     }else{
//     }
// }
{
    function 함수_05(animal) {
        if ('swim' in animal) {
            animal.swim;
        }
    }
    // 3. instanceof 연산자로 object narrowing 가능
    var 날짜 = new Date();
    if (날짜 instanceof Date) {
    }
    function 함수_06(x) {
        // x가 Car 타입인지 구분
        if (x.wheel === '4개') {
            console.log('x 는 Car타입이에요');
        }
    }
}
