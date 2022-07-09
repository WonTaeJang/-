<template>
    <div v-for="(글,i) in 블로그글" :key="i">
        <h5>{{글.title}}</h5>
        <p>{{글.content}}</p>
        <p>{{글.date}}</p>
    </div>

</template>

<script>
export default {
    //eslint-disable-next-line
    name : 'List',
    props : {
        블로그글 : Object
    }
}
</script>

<style>

</style>