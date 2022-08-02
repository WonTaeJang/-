<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="?" />
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
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  setup() {
    // 컴포넌트를 시작하기 전에 실행해주는 곳

    // setup 안에서 변수를 만들려면 ref 안에 만들어야함
    // vue에서 실시간 렌더링이 가능한것은 reference data type 덕분임
    let follower = ref([]);

    onMounted(() => {
      axios.get("/follower.json").then((a) => {
        follower.value = a.data;
      });
    });

    return { follower };
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>