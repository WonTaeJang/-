<template>
    <img :src="원룸.image" class="room-img">
    <!-- 부모에게 메세지 보낼땐 -->
    <!-- $emit('작명', 데이터) -->
    <h4 @click="send">{{ 원룸.title }}</h4>
    <p>{{원룸.price}}</p>
</template>

<script>
export default {
    //eslint-disable-next-line
    name : 'CardInfo',    
    props : {
        원룸 : Object,
    },
    methods : {
        send(){
            this.$emit('openModal', this.원룸.id)
        }
    }
}
</script>

<style>

</style>