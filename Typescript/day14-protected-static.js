var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// private붙이면 class{} 안에서만 사용가능, 상속해도 사용할 수 없음
// protected 분이면 class{}안에서만 사용가능, 상속해도 사용할 수 있다.
// static 키워드 붙이면 부모 Class에 직접부여됨, 상속 안됨
var User2 = /** @class */ (function () {
    function User2() {
        this.x = 10;
        this.intro = User2.skill + '전문가입니다.';
    }
    User2.y = 20;
    User2.z = 30;
    User2.skill = 'js';
    return User2;
}());
var NewUser2 = /** @class */ (function (_super) {
    __extends(NewUser2, _super);
    function NewUser2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewUser2.prototype.doThis = function () {
        this.x = 20;
    };
    NewUser2.prototype.getX = function () { return this.x; };
    return NewUser2;
}(User2));
{
    var 사람 = new NewUser2();
    console.log(사람.getX());
    console.log(User2.y); // static 사용방법
}
// 숙제 1
var User3 = /** @class */ (function () {
    function User3() {
    }
    User3.addOne = function (num) {
        User3.x += num;
    };
    User3.printX = function () {
        console.log(User3.x);
    };
    User3.x = 10;
    User3.y = 20;
    return User3;
}());
User3.addOne(3); //이렇게 하면 x가 3 더해져야함
User3.addOne(4); //이렇게 하면 x가 4 더해져야함
User3.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함
// 숙제 2
var Square2 = /** @class */ (function () {
    function Square2(a, b, c) {
        this.width = a;
        this.height = b;
        this.col = c;
    }
    Square2.prototype.draw = function () {
        var min = 0;
        var max = 400;
        var x, y;
        x = this.getRandomInt(min, max);
        y = this.getRandomInt(min, max);
    };
    Square2.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
    };
    return Square2;
}());
