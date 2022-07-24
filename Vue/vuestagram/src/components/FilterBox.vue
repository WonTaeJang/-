<template>
  <div :class="`${cssName} filter-item` " :style="{ backgroundImage: `url(${imgURL})` }"></div>
</template>

<script>
export default {
  //eslint-disable-next-line
  name: "filterbox",
  props: {
    imgURL: String,
    cssName: String,
  },
  data() {
    return {
      classObj: {
        "filter-item": true
      },
    };
  },
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