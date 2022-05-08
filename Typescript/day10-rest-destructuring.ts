// rest parameter
{
    function 함수_01(...params :(number|string)[]){
        console.log(params);
    }

    함수_01(1,2,3,4,5,6, 'str');

    // spread operater
    let arr = [1,2,3];
    let arr2 = [4,5];
    let arr3 = [...arr, ...arr2];
    console.log(arr3)

    // destructuring 
    let [변수1, 변수2] = ['안녕', 100];

    let {student:student, age:age} = {student: true, age:20};
    
    type obj = {student:boolean, age: number}
    let 오브젝트:obj = {student: true, age:20};

    function 함수_02({student, age}:obj){
        console.log(student, age);
    }

    //함수_02(오브젝트.student, 오브젝트.age);
    함수_02(오브젝트);

    // 숙제1
    function MaxNumber(...arr:number[]):number{
        let max=0;
        arr.forEach(i=>{
            if(i > max)
                max = i;
        })

        return max;
    }

    MaxNumber(6,3,7,2);

    // 숙제2
    type UserType = {
        user:string, 
        comment:number[], 
        admin:boolean
    }
    function 함수_03({user, comment, admin}: UserType):void{
        console.log(user, comment, admin);
    }

    함수_03( { user : 'kim', comment : [3,5,4], admin : false } )

    // 숙제3
    function 함수_04(arr:(number|string|boolean)[]):void{
        console.log(...arr);
    }

    함수_04( [40, 'wine', false] )
}