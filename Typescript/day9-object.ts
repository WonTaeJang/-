//type Square = {color:string, width:number};
interface Square {
    color:string, 
    width:number
};

let 네모:Square = {color : 'red', width : 100}

// Q1
{
    // interface 장점: extends로 복사가능

    interface Student {
        name :string
    }

    interface Teacher extends Student{
        age :number
    }

    let 학생:Student = {name : 'kim'}
    let 선생:Teacher = {name : 'kim', age : 20}

    type Animal = {name:string}
    type Cat = {age:number} & Animal

    // interface vs type
    // interface는 중복선언 가능 - 두개가 합쳐진다.
    // type은 중복선언 불가능
}

// 숙제 1
{
    interface Product {
        brand :string, 
        serialNumber :number,
        model :string[]
    }

    let 상품 :Product = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }
}

// 숙제2
{
    interface Cart {
        product :string,
        price :number
    }

    let 장바구니 :Cart[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ]

// 숙제3
    interface Card extends Cart{
        card :boolean
    }

    let 장바구니2 :Card = { product : '청소기', price : 7000, card : false }

}

// 숙제4
{
    interface MathObj {
        plus : (a:number, b:number) => number,
        minus : (a:number, b:number) => number,
    }

    let Math :MathObj = {
        plus : (a, b)=>{
            return a+b;
        },
        minus : (a,b)=>{
            return a-b;
        }
    }
}