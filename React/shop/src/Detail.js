import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss'

//  styled-components
// CSS를 미리 입혀놓은 컴포넌트
let 박스 = styled.div`
  padding : 20px;
`;

let 제목 = styled.h4`
  font-size : 25px;
  color : ${ props => props.색상 }
`

// Hook: Component Lifecycle 중간중간에 뭔가 명령을 줄 수 있음
class Detail2 extends React.Component {
  // Detail2 컴포넌트가 Mount 되었을 때 실행할 코드
  componentDidMount(){

  }

  // Detail2 컴포넌트가 해제(Unmount)될때 실행할 코드
  componentWillUnmount(){

  }
}

function Detail(props) {

  let [visible, setVisible] = useState({visibility:'none'});
  let [alert, alert변경] = useState(true);
  let [inputData, inputData변경] = useState('');

  // 컴포넌트가 mount 되었을 때, 컴포넌트가 update 되었을 때 
  // useEffect는 여러개 작성해도 되고 적은 순서대로 실행된다.
  useEffect(()=>{
    // 2초후에 alert창을 사라지게 하기
    //console.log(visible);
    let 타이머 = setTimeout(()=>{
      setVisible({visibility:'hidden'});
      alert변경(false);
    },2000);

    //console.log('sdf');

    // Detail function이 사라질때 실행되는 코드
    return ()=>{clearTimeout(타이머)} // setTimeout이 동작하고 2초가 되기전에 뒤로가기 버튼같은걸 눌렀을때 버그가 발생하는걸 방지할 수 있다.
  },[alert, inputData]); // [alert]라고 넣으면 alert 값이 변경될때만 실행되게 된다.


  let history = useHistory();
  let { id } = useParams();

  let 찾은상품 = props.shoes.find(function(상품){
    return 상품.id == id
  });

  return (
    <div className="container">

      <박스>
        <제목 className='red'>상세 페이지</제목>
      </박스>

      <input onChange={(e)=>{inputData변경(e.target.value)}}></input>

      {
        alert === true ? 
        <div className='my-alert2' style={props.vb}>
          <p>재고가 얼마 남지 않았습니다.</p>
        </div> 
        : null
      }

      {/* <Alert vb={visible}></Alert> */}

      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${(찾은상품.id + 1)}.jpg`} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <button className="btn btn-danger">주문하기</button>
          <button className="btn btn-danger" onClick={() => { 
            history.goBack(); 
          }}>뒤로가기</button>
        </div>
      </div>
    </div>
  )

  function Alert(props) {
    return (
      <div className='my-alert2' style={props.vb}>
        <p>재고가 얼마 남지 않았습니다.</p>
      </div>
    )
  }
}

export default Detail;