import {Name, name5} from './a'

console.log(name5);

let temp :Name = 'park'


// 옛날 import 방식
///<reference path='.a.ts'/>

// 숙제1
import {Car2} from './a'
let car1 :Car2 = {wheel:4, model:'Sonata'}

// 숙제2
import {ObjFunction} from './a'
{
    let 함수:ObjFunction = function(a){
        console.log(a);
    }

    함수({abc: 'hi'});
}

// 숙제3
namespace GoodDog {
    export type Dog = string;
  }
  namespace BadDog {
    export interface Dog { name : string };
  }
  
  let dog1 :GoodDog.Dog = 'bark';
  let dog2 :BadDog.Dog = { name : 'paw' }