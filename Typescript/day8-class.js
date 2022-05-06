// typescript에서는 class에서 필드에 변수값이 있어야 생성자에서 사용가능
var Person2 = /** @class */ (function () {
    function Person2(a) {
        this.name = a;
    }
    Person2.prototype.함수 = function (a) {
        console.log('hi' + a);
    };
    return Person2;
}());
var 사람1 = new Person2('kim');
var 사람2 = new Person2('park');
// 숙제 1
var Car = /** @class */ (function () {
    function Car(a, b) {
        this.model = a;
        this.price = b;
    }
    Car.prototype.tax = function () {
        return this.price / 10;
    };
    return Car;
}());
var car1 = new Car('소나타', 3000);
// 숙제 2
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var _this = this;
        this.num = [];
        this.str = [];
        param.forEach(function (e) {
            if (typeof e === 'string')
                _this.str.push(e);
            if (typeof e === 'number')
                _this.num.push(e);
        });
    }
    return Word;
}());
var objj = new Word('kim', 3, 5, 'park');
console.log(objj.num); //[3,5]
console.log(objj.str); //['kim', 'park']
