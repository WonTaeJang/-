;
var 네모 = { color: 'red', width: 100 };
// Q1
{
    var 학생 = { name: 'kim' };
    var 선생 = { name: 'kim', age: 20 };
    // interface vs type
    // interface는 중복선언 가능 - 두개가 합쳐진다.
    // type은 중복선언 불가능
}
// 숙제 1
{
    var 상품 = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };
}
// 숙제2
{
    var 장바구니 = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }];
    var 장바구니2 = { product: '청소기', price: 7000, card: false };
}
// 숙제4
{
    var Math_1 = {
        plus: function (a, b) {
            return a + b;
        },
        minus: function (a, b) {
            return a - b;
        }
    };
}
