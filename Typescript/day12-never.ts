// never type은 return이 발생하면 안됨
// endpoint가 없어야함

function 함수_07() :never{
    // 함수 실행이 끝나는게 아니라 도중에 중단되는거
    throw new Error(); 

    // while(true)도 가능
    while(true){

    }

    
}

// never 타입을 알아야하는 이유 
    // 어떨때 등장하는지 알아야함
function 함수_08(paramter :string){
    if(typeof paramter == 'string'){
        console.log(paramter);
    }else {
        console.log(paramter); // parameter :never
    }
}

let 함수_09 = function(){   // :never 타입이 발생
    throw new Error();
}