import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// './' 가 없다면 라이브러리 이름
import {BrowserRouter} from 'react-router-dom';

// BrowserRouter: 라우팅을 리액트가 아니라 서버에게 요청할 수 있어서 위험
// HashRouter: 사이트 주소 뒤에 #이 붙는데 #뒤에 적는것은 서버로 전달X, 
// 라우팅을 안전하게 할 수 있게 도와줌


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
