<template>
  <div v-if="step == 0">
    <Post v-for="(e, i) in story" :key="i" v-bind:story="e" />
  </div>

  <!-- 필터선택페이지 -->
  <div v-if="step == 1">
    <div
      :class="`${story.filter}`"
      class="upload-image"
      :style="{ backgroundImage: `url(${imgURL})` }"
    ></div>
    <div class="filters">
      <FilterBox
        :imgURL="imgURL"
        v-for="filter in filters"
        :key="filter"
        :cssName="filter"
      >
        <template v-slot:a>{{filter}}</template>
        <template v-slot:b></template>
      </FilterBox>
    </div>
  </div>

  <!-- 글작성페이지 -->
  <div v-if="step == 2">
    <div
      :class="`${story.filter}`"
      class="upload-image"
      :style="{ backgroundImage: `url(${imgURL})` }"
    ></div>
    <div class="write">
      <textarea @input="$emit('write', $event.target.value)" class="write-box">
write!</textarea
      >
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "@/components/FilterBox.vue";
import Filters from "@/data/filter.js";

export default {
  //eslint-disable-next-line
  name: "container",
  components: {
    Post: Post,
    FilterBox,
  },
  data() {
    return {
      filters: Filters,
    };
  },
  props: {
    story: Object,
    step: Number,
    imgURL: String,
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>