<template>

<!-- <div class='start' :class='{end : 모달창열렸니}'>
  <Modal v-bind:원룸들='원룸들' :누른거='누른거' :모달창열렸니="모달창열렸니"
    @modalClose='모달창열렸니 = false'/>
</div> -->

<transition name='fade'>
  <Modal v-bind:원룸들='원룸들' :누른거='누른거' :모달창열렸니="모달창열렸니"
    @modalClose='모달창열렸니 = false'/>
</transition>

<div class="menu">
  <a v-for="(a,i) in 메뉴들" :key="i">{{ a }}</a>
</div>

<Discount />

<button @click="priceSort">가격순정렬</button>
<button @click="priceSortR">가격역순정렬</button>
<button @click="titleSort">가다나순정렬</button>
<button @click="sortBack">되돌리기</button>

<Card @openModal='모달창열렸니 = true; 누른거 = $event' v-for="(a,i) in 원룸들" :key='i' :원룸=a />

<!-- v-for 반복문 -->
  <!-- <div v-for="(a,i) in 원룸들" :key='i'>   
    <img :src="a.image" class="room-img">
    <h4 v-on:click="모달창열렸니 = true; 누른거 = i">{{ a.title }}</h4>
    <p>{{a.price}}</p>
  </div> -->
</template>

<script>

import data from './data/post.js';
import Discount from './components/Discount.vue'
import Modal from './components/Modal.vue'
import Card from './components/Card.vue'

export default {
  name: 'App',
  data(){
    return {
      원룸들오리지널 : [...data],
      오브젝트 : {name : 'kim', age : 20},
      누른거 : 0,
      원룸들 : data,
      모달창열렸니 : false,
      신고수 : [0,0,0],
      메뉴들 : ['Home', 'Shop', 'About'],
      스타일 : 'color : blue'
    }
  },
  methods : {
    increase(i){
      this.신고수[i]++;
    },
    priceSort(){
      this.원룸들.sort((a,b) => a.price - b.price);
    },
    priceSortR(){
      this.원룸들.sort((a,b) => b.price - a.price);
    },
    titleSort(){
      this.원룸들.sort((a,b) => {
        if(a.title > b.title) return 1;
        if(a.title < b.title) return -1;
        if(a.title === b.title) return 0;
      });
    },
    sortBack(){
      this.원룸들 = [...this.원룸들오리지널]
    }
  },
  components: {
    Discount : Discount,
    Modal : Modal,
    Card : Card
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin : 0
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background:  rgba(0,0,0,0.5);
  position: fixed; 
  padding:20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}


.menu {
  background:  darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}

.start {
  opacity: 0;
  transition: all 1s;
}

.end {
  opacity: 1;
}

/* 시작 */
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s;
}

/* 끝 */
.fade-enter-to {
  opacity: 1;
}

/* 시작 */
.fade-leave-from {
  transform: translateY(0px);
}

.fade-leave-active {
  transition: all 2s;
}

/* 끝 */
.fade-leave-to {
  transform: translateY(-1000px);
}

</style>
