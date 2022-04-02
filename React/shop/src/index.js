import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// './' 가 없다면 라이브러리 이름
import {BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux';
import { combineReducers, createStore } from 'redux';

let 초기값 = [
  { id: 0, name: '멋진신발', quan: 2 },
  { id: 1, name: '멋진신발2', quan: 1 }
]

let alert초기값 = true;

// redux store에 저장할 필요가 없음 
// useState()를 사용하는게 너 나음
function reducer2(state=alert초기값, 액션){
  if(액션.type === 'close'){
    state=false;
  }

  return state;
}

// redux에선 state 데이터의 수정방법을 미리 정의합니다. 
function reducer(state = 초기값, 액션){
  if (액션.type === '수량증가'){
    let copy = [...state];
    copy[0].quan++;

    return copy
  } 
  else if(액션.type === '수량감소'){
    let copy = [...state];

    if(copy[0].quan > 0)
      copy[0].quan--;

    return copy
  }
  else {
    return state
  }
  
  return state;
}

// reducer가 여러개일때는 combineReducers 를 사용
let store = createStore(combineReducers({reducer, reducer2}));

// BrowserRouter: 라우팅을 리액트가 아니라 서버에게 요청할 수 있어서 위험
// HashRouter: 사이트 주소 뒤에 #이 붙는데 #뒤에 적는것은 서버로 전달X, 
// 라우팅을 안전하게 할 수 있게 도와줌


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
