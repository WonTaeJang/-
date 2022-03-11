import React ,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

// react는 html 대신 jsx라는 문법을 사용
// 리액트에서 데이터 바인딩을 쉽게 할 수 있다.
function App() {
  let posts = '강남 고기 맛집';
  let [따봉, 따봉변경] = useState(0);

  // state: 
  // 1. 변수 대신 쓰는 데이터 저장공간
  // 2. useState()를 이용해 만들어야함
  // 3. 문자, 숫자, array object 다 저장가능
  // state에 데이터 저장해놓은 이유 : state는 변경되면 HTML이 자동으로 재렌더링이 됩니다.
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '여자 코트 추천','공용 코트 추천']);

  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray)
  }

  return (
    <div className="App">
      <div className="black-nav">
        {/* style은 object 방식으로 넣어야한다. */}
        {/* camelCase로 '-'는 뺄셈으로 인식하기 때문에 뒤단어를 대문자로 써야한다. */}
        <div>개발 Blog</div>
      </div>
      <button onClick={제목바꾸기}>버튼</button>
      <div className="list">
        <h3>{글제목[0]} <span onClick={()=>{따봉변경(따봉 + 1)}}>❤</span> {따봉} </h3>
        <p>2월 17일 발행</p>
        <hr></hr>
      </div>

      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 17일 발행</p>
        <hr></hr>
      </div>

      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>2월 17일 발행</p>
        <hr></hr>
      </div>


    </div>
  ); 
}

export default App;
