// 객체지향 언어같은 문법도 제공함
// public, private, protected static
// public 키워드는 생략되어있음


class User {
    public name :string;
    private age;
    private familyName :string= 'kim';

    constructor(a){
        this.name = this.familyName + a;

    }

    public 이름변경함수(name){
        this.familyName = name;
    }
}

let 유저1 = new User('민수');
유저1.name = 'hi';
//유저1.age   // private 

유저1.이름변경함수('park');

class Person3{
    constructor(public name){

    }
}

let 자식 = new Person3('kim');
console.log(자식);