<template>
  <div
    :class="`${cssName} filter-item`"
    :style="{ backgroundImage: `url(${imgURL})` }"
  >
    <slot name="a">
        <!-- slot으로 부모 -> 자식 데이터 전송법 -->
        <!-- 1. 자식은 구멍 뚫기 -->
        <!-- 2. <컴포넌트> 태그사이에 데이터 넣기 -->
    </slot>
    <button @click="filterSelect" >버튼</button>
  </div>
</template>

<script>
export default {
  //eslint-disable-next-line
  name: "filterbox",
  methods: {
    filterSelect(){
      this.emitter.emit('filter', this.cssName);
    }
  },
  props: {
    imgURL: String,
    cssName: String,
  },
  data() {
    return {
      classObj: {
        "filter-item": true,
      },
    };
  }
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>