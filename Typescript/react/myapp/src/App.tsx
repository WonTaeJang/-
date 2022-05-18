import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {RootState, 증가} from './index';
import {Dispatch} from 'redux';


function App() {
  const 꺼내온거 = useSelector( (state :RootState) => state );
  const dispatch :Dispatch = useDispatch();

  return (
    <div className="App">
      { 꺼내온거.counter1.count }
      <button onClick={()=>{dispatch(증가())}}>버튼</button>
    </div>
  );
}

export default App;
