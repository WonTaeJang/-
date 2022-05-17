import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [user, setUser] = useState(['kim']);

  return (
    <div className="App">
      <div>안녕하십니까</div>
      <Profile name='철수' age='20'></Profile>
    </div>
  );
}

function Profile(props:{name:string, age:String}) :JSX.Element {
  return (
    <div>{props.name}프로필입니다.</div>
  )
}

export default App;
