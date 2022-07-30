import axios from 'axios';
import {createStore} from 'vuex'

const store = createStore({
    state () {
        return {
            name : 'kim',
            age : 20,
            likes : 30,
            좋아요눌렀니 : false,
            more : {},  // 더보기 게시물 기능 
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
        },       
        setMore(state, data){
            state.more = data;
        },
    },
    actions:{   // ajax하는 곳
        getData(context){   // action에 추가한 파라미터는 $store를 뜻함
            axios.get(`https://codingapple1.github.io/vue/more0.json`).then((result)=>{
                context.commit('setMore', result.data);
            })
        }
    },

})

export default store;