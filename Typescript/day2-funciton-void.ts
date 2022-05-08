// ? 값을 넣으면 x: number | undefined 와 같음
function 함수2(x :number) :number{
    return x*2
}

// void는 return이 없음
function 함수3(x :number) :void{
    x*2
}

//console.log(함수2(30));

// 문제 
function 함수4(x :number | string) :void{
    // 에러가 발생하는 이유는? 
    // typescript는 type이 확실해야하는데 지금 x 값은 유니온 타입으로 불확실하다.
    //console.log(x + 3);
}


// homework
function 함수5(name :string | undefined): void{
    if(name == undefined)
        console.log('이름이 없습니다.')
    else
        console.log(`안녕하세요 ` + name);
}

function 함수6(num : string | number): number{
    let str = num.toString();
    return str.length;
}

function 결혼가능하냐(money:number, house: boolean, charm : string): string|void{
    let score :number = 0;

    // money score
    score += money;

    // house score
    if(house)
        score += 500;
    
    // feel score
    if(charm === '상')
        score += 100;
    
    if(score >= 600)
        return '결혼가능';
}