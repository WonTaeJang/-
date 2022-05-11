// 객체지향 언어같은 문법도 제공함
// public, private, protected static
// public 키워드는 생략되어있음
var User = /** @class */ (function () {
    function User(a) {
        this.familyName = 'kim';
        this.name = this.familyName + a;
    }
    User.prototype.이름변경함수 = function (name) {
        this.familyName = name;
    };
    return User;
}());
var 유저1 = new User('민수');
유저1.name = 'hi';
//유저1.age   // private 
유저1.이름변경함수('park');
var Person3 = /** @class */ (function () {
    function Person3(name) {
        this.name = name;
    }
    return Person3;
}());
var 자식 = new Person3('kim');
console.log(자식);
