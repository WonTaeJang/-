<template>
    <div>
        <Post v-for="(e,i) in story" :key="i" v-bind:story='e'/>
    </div>
</template>

<script>
import Post from './Post.vue'

export default {
    //eslint-disable-next-line
    name : 'container',
    components : {
        Post : Post,
    },
    props : {
        story : Object,
    }
}
</script>

<style>

</style>