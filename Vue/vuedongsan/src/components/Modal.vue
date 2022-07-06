<template>
  <!-- 모달창 UI -->
    <div class="black-bg" v-if="모달창열렸니 == true"> 
        <div class="white-bg">
            <h4>{{ 원룸들[누른거].title}}</h4>
            <img :src='원룸들[누른거].image' class='room-img'>
            <p>{{원룸들[누른거].content}}</p>

            <!-- <input type="text" @input="month = $event.target.value"> -->
            <!-- v-model은 사용자가 입력한 값을 데이터에 대입 -->
            <input v-model.number="month">
            <p> {{ month }}개월 선택함 {{원룸들[누른거].price * month}} 원</p>
            <!-- <button @click="모달창열렸니 = false">닫기</button> -->
            <button @click="close">닫기</button>
        </div>
    </div>
</template>

<script>
export default {
    //eslint-disable-next-line
    name : 'Modal',
    data(){
        return {
            month : 1,
        }
    },
    watch : {
        // 데이터 감시하려면 감시할데이터(){}
        // month라는 데이터가 변할때마다 watcher도 실행됨
        month(a){
            // 사용자가 month를 글자로 입력하면 경고문 띄워주기
            if(isNaN(a)){
                alert('문자를 입력하면 안됩니다.');
                this.month = 1;
            }
        }
    },
    props : {
        원룸들 : Object,
        누른거 : Number,
        모달창열렸니 : Boolean
    },
    methods : {
        close(){
            this.$emit('modalClose')
        },

    }
}
</script>

<style>

</style>