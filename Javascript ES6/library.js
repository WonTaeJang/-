var a = 10; 
var b = 20;
// export default는 딱 한번만 사용가능
//export default a; 

// 여러개 export
export {a, b};

// export default와 export 동시에 사용 가능
var c = 30;
export default c;