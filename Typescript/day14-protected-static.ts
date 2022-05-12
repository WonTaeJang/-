// private붙이면 class{} 안에서만 사용가능, 상속해도 사용할 수 없음
// protected 분이면 class{}안에서만 사용가능, 상속해도 사용할 수 있다.
// static 키워드 붙이면 부모 Class에 직접부여됨, 상속 안됨
class User2 {
    protected x: number = 10;
    static y = 20;
    private static z = 30;

    static skill = 'js';
    intro = User2.skill + '전문가입니다.'
}

class NewUser2 extends User2 {
    doThis() {
        this.x = 20;
    }

    getX() { return this.x }
}

{
    let 사람 = new NewUser2();
    console.log(사람.getX());
    console.log(User2.y); // static 사용방법
}

// 숙제 1
class User3 {
    private static x = 10;
    public static y = 20;

    static addOne(num){
        User3.x += num;
    }

    static printX(){
        console.log(User3.x)
    }
}
User3.addOne(3) //이렇게 하면 x가 3 더해져야함
User3.addOne(4) //이렇게 하면 x가 4 더해져야함
User3.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함

// 숙제 2
class Square2 {
    private width:number;
    private height:number;
    private col:string;

    constructor(a,b,c){
        this.width = a;
        this.height = b;
        this.col = c;
    }

    draw(){
        let min = 0;
        let max = 400;
        let x,y;
        x = this.getRandomInt(min,max);
        y = this.getRandomInt(min,max);
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
      }
}