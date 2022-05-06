// typescript에서는 class에서 필드에 변수값이 있어야 생성자에서 사용가능
class Person2 {
    name :string;

    constructor(a:string){
        this.name = a;
    }

    함수(a :string){
        console.log('hi' + a)
    }
}

let 사람1 = new Person2('kim');
let 사람2 = new Person2('park');

// 숙제 1
class Car{
    model :string;
    price :number;

    constructor(a:string, b:number){
        this.model = a;
        this.price = b
    }

    tax() :number{
        return this.price/10;
    }
}

let car1 = new Car('소나타', 3000);

// 숙제 2
class Word{
    num :number[] = [];
    str :string[] = [];

    constructor(...param){
        param.forEach(e=>{
            if(typeof e === 'string')
                this.str.push(e);
            
            if(typeof e === 'number')
                this.num.push(e);
        })
    }
}

let objj = new Word('kim', 3, 5, 'park');
console.log(objj.num) //[3,5]
console.log(objj.str) //['kim', 'park']