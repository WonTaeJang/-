var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// rest parameter
{
    function 함수_01() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        console.log(params);
    }
    함수_01(1, 2, 3, 4, 5, 6, 'str');
    // spread operater
    var arr = [1, 2, 3];
    var arr2 = [4, 5];
    var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
    console.log(arr3);
    // destructuring 
    var _a = ['안녕', 100], 변수1 = _a[0], 변수2 = _a[1];
    var _b = { student: true, age: 20 }, student = _b.student, age = _b.age;
    var 오브젝트 = { student: true, age: 20 };
    function 함수_02(_a) {
        var student = _a.student, age = _a.age;
        console.log(student, age);
    }
    //함수_02(오브젝트.student, 오브젝트.age);
    함수_02(오브젝트);
    // 숙제1
    function MaxNumber() {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        var max = 0;
        arr.forEach(function (i) {
            if (i > max)
                max = i;
        });
        return max;
    }
    MaxNumber(6, 3, 7, 2);
    function 함수_03(_a) {
        var user = _a.user, comment = _a.comment, admin = _a.admin;
        console.log(user, comment, admin);
    }
    함수_03({ user: 'kim', comment: [3, 5, 4], admin: false });
    // 숙제3
    function 함수_04(arr) {
        console.log.apply(console, arr);
    }
    함수_04([40, 'wine', false]);
}
