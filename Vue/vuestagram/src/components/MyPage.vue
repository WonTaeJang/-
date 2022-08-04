<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="?" @input="search($event.target.value)"/>
    <div class="post-header" v-for="(e, i) in follower" :key="i">
      <div
        class="profile"
        :style="{ backgroundImage: `url(${e.image})` }"
      ></div>
      <span class="profile-name">{{ e.name }}</span>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref, } from "vue";
import axios from "axios";
import {useStore} from 'vuex';

export default {
  props:{
    one : Number,
  },
  setup() {
    // 컴포넌트를 시작하기 전에 실행해주는 곳

    // setup 안에서 변수를 만들려면 ref 안에 만들어야함
    // vue에서 실시간 렌더링이 가능한것은 reference data type 덕분임
    let follower = ref([]);
    let followerOriginal = ref([]);

    function search(검색어){
      let newFollower = followerOriginal.value.filter((a)=>{
        return a.name.indexOf(검색어) != -1
      });
      follower.value = [...newFollower]
    }


    // reactice: ref와 유사함 object array 를 쓸때 사용 
    // ref는 그외에 자료형을 사용
    // let test = reactive({name:'kim'})

    // test;

    // composition api 에서 props 사용하는 방법
    // let 프롭스 = ref(props); 한개만 사용할때
    // let { one } = toRefs(props);  // 복수개 사용할때
    // console.log(one.value);

  // 변경이 될때 마다 실행하고 싶은 코드를 안에 쓰면 된다.
    // watch(one, ()=>{
    //   console.log(one);
    // });

// computed
    let re = computed(()=>{
      return follower.value.length
    })
    console.log(re.value);

    let store = useStore();
    console.log(store.state.name);

    onMounted(() => {
      axios.get("/follower.json").then((a) => {
        follower.value = a.data;
        followerOriginal.value = [...a.data];
      });
    });

    return { follower, search };
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>