<template>
    <img :src="원룸들.image" class="room-img">
    <h4 >{{ 원룸들.title }}</h4>
    <p>{{원룸들.price}}</p>
</template>

<script>
export default {
    //eslint-disable-next-line
    name : 'CardInfo',    
    props : {
        원룸들 : Object,
    }
}
</script>

<style>

</style>