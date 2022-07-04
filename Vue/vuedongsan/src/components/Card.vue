<template>
    <img :src="원룸.image" class="room-img">
    <h4 >{{ 원룸.title }}</h4>
    <p>{{원룸.price}}</p>
</template>

<script>
export default {
    //eslint-disable-next-line
    name : 'CardInfo',    
    props : {
        원룸 : Object,
    }
}
</script>

<style>

</style>