// typeof로 narrowing 할 수 없는게 있다. 
// null & undefined 타입체크하는 경우 매우 잦음
// 1. &&연산자

// function 함수(a :string | undefined){
//     if (a && typeof a=== 'string'){

//     }else{

//     }
// }

{
    // 2. in 키워드로 object narrowing
    // 속성명 in 오브젝트자료
    // in 키워드는 베타적인 속성을 찾을 때

    type Fish = { swim: string }
    type Bird = { fly: string }

    function 함수_05(animal: Fish | Bird) {
        if ('swim' in animal) {
            animal.swim;
        }
    }

    // 3. instanceof 연산자로 object narrowing 가능
    let 날짜 = new Date();
    if (날짜 instanceof Date) {

    }

    // 비슷한 type일 경우 구분하는법
    // 비슷한 object일 경우 literal type 강제로 만들어두면 나중에 도움이 됨
    // 유니크한 구분이 되어야함
    type Car = {
        wheel: '4개',
        color: string
    }

    type Bike = {
        wheel: '2개',
        color: string
    }

    function 함수_06(x: Car | Bike) {
        // x가 Car 타입인지 구분
        if(x.wheel === '4개'){
            console.log('x 는 Car타입이에요')
        }
    }
}