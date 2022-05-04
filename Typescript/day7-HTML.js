// html element or null이 들어갈수 있어서 타입이 애매하다.
var 제목 = document.getElementById('title');
if (제목 != null) {
    제목.innerHTML = '반가워요';
}
if (제목 instanceof Element) {
    제목.innerHTML = '반가워요';
}
// optional chaning
if (제목 === null || 제목 === void 0 ? void 0 : 제목.innerHTML) {
    제목.innerHTML = '반가워요';
}
// if문으로 네로잉이 할때
// typescript에서 지정한 엘리먼트타입을 찾아서 입력해주면 된다.
var 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https:kakao.com';
}
// ? 도 네로잉으로 인식
var 버튼 = document.querySelector('#btn');
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () {
});
// homework 1
var img = document.getElementById('image');
if (img instanceof HTMLImageElement) {
    img.src = 'new.jpg';
}
// homework2 
var link2 = document.querySelectorAll('.naver');
link2.forEach(function (element) {
    if (element instanceof HTMLAnchorElement) {
        element.href = 'https:kakao.com';
    }
});
