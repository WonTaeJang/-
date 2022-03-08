import logo from './logo.svg';
import './App.css';

// react는 html 대신 jsx라는 문법을 사용
// 리액트에서 데이터 바인딩을 쉽게 할 수 있다.
function App() {
  let posts = '강남 고기 맛집';

  function 함수(){
    return 100;
  }

  let style2 = {color:'blue', fontSize:'30px'}

  return (
    <div className="App">
      <div className="black-nav">
        {/* style은 object 방식으로 넣어야한다. */}
        {/* camelCase로 '-'는 뺄셈으로 인식하기 때문에 뒤단어를 대문자로 써야한다. */}
        <div style={style2}>개발 Blog</div>
      </div>

      {/* 이미지 넣는법 */}
      <img src={logo} />
      {/* 변수 넣는법 */}
      <h4>{posts}</h4>
      {/* 함수 넣는법 */}
      <h4>{함수()}</h4>
    </div>
  );
}

export default App;
