// ? 값을 넣으면 x: number | undefined 와 같음
function 함수2(x) {
    return x * 2;
}
// void는 return이 없음
function 함수3(x) {
    x * 2;
}
//console.log(함수2(30));
// 문제 
function 함수4(x) {
    // 에러가 발생하는 이유는? 
    // typescript는 type이 확실해야하는데 지금 x 값은 유니온 타입으로 불확실하다.
    //console.log(x + 3);
}
// homework
function 함수5(name) {
    if (name == undefined)
        console.log('이름이 없습니다.');
    else
        console.log("\uC548\uB155\uD558\uC138\uC694 " + name);
}
function 함수6(num) {
    var str = num.toString();
    return str.length;
}
function 결혼가능하냐(money, house, charm) {
    var score = 0;
    // money score
    score += money;
    // house score
    if (house)
        score += 500;
    // feel score
    if (charm === '상')
        score += 100;
    if (score >= 600)
        return '결혼가능';
}
