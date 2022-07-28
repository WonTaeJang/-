import {createStore} from 'vuex'

const store = createStore({
    state () {
        return {
            name : 'kim',
            age : 20,
            likes : 30,
            좋아요눌렀니 : false,
        }
    }, 
    mutations : {   // state 수정방법 정의하는곳
        이름변경(state){    // state 는 this라고 보면 됨
            state.name = '박';
        },
        나이증가(state, payload){
            state.age += payload;
        },
        좋아요(state){
            if(state.좋아요눌렀니){
                state.likes--;
                state.좋아요눌렀니 = false
            }
            else{
                state.likes++;
                state.좋아요눌렀니 = true
            }
        }
        
    }
})

export default store;