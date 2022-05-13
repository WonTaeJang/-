export var name5 = 'kim';
var age5 = 20;

export type Name = string | number;

namespace 네임스페이스 {
    export type Name2 = string | number;

}

{
    let 변수 :네임스페이스.Name2 = 'kim'
}

export type Car2 = {
    wheel: number,
    model: string
}

export interface Bike {
    wheel: 2,
    model: string
}

export type ObjFunction = (a? :object) => void