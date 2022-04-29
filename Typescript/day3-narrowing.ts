function 내함수(x :number|string) {
    if(typeof x === 'string')
        return x + '1';
    
    let array :number[] = [];
    if(typeof x === 'number')
        array[0] = x;
    
    // assertion 문법 (타입 덮어쓰기)
    // assertion은 narrowing에 사용
    // assertion은 유니온 타입을 하나로 확정할때 사용
    // old assertion: <number> 변수
    array[0] = x as number;
}

내함수(123);