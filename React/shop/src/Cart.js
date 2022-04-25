import React, { useEffect, memo } from "react";
import { Table } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";

function Cart(props) {
    let state = useSelector((state)=>state.reducer);
    console.log(state.reducer);
    let dispatch = useDispatch();

    return (
        <div>
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.map((a, i) => {
                            return (
                                <tr key={i}>
                                    <td>{a.id}</td>
                                    <td>{a.name}</td>
                                    <td>{a.quan}</td>
                                    <td>
                                        <button onClick={()=>{dispatch({type:'수량증가', payload:a.id})}}>+</button>
                                        <button onClick={()=>{dispatch({type:'수량감소', payload:a.id})}}>-</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>

            {
                props.alert열렸니 === true
                    ?
                    <div className="my-alert2">
                        <p>지금 구매하시면 신규할인 20%</p>
                        <button onClick={()=>{props.dispatch({type:'close'})}}>닫기</button>
                    </div>
                    : null

            }

           <Parent 이름="존박" 나이="20"></Parent>
        </div>

    )

}

// parent 에서 child1에 props 를 변경할 경우 child1, child2 모두 렌더링 되는것을 확인할 수 있다. 
// memo를 사용할 경우 props를 저장하여 렌더링 될때 값이 변경됬는지 확인하여 값이 변경되지 않았다면 렌더링되지 않는다.
function Parent(props) {
    return (
        <div>
            <Child1 이름={props.이름}/>
            <Child2 나이={props.나이}/>
        </div>
    )
}
function Child1(props) {
    useEffect(() => { console.log('렌더링됨1') });
    return <div>1111</div>
}
let Child2 = memo(function(){
    useEffect(() => { console.log('렌더링됨2') });
    return <div>2222</div>
});

// state를 props화 하는 함수
// function 함수명(state){
//     console.log(state);
//     return {
//         state : state.reducer,
//         alert열렸니 : state.reducer2
//     }
// }

// export default connect(함수명)(Cart)
export default Cart;