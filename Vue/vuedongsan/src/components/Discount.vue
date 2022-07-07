<template>
    <div class='discount'>
        <h4>지금 결제하면 {{rate}}% 할인</h4>
    </div>
</template>

<script>
export default {
    //eslint-disable-next-line
    name: 'Discount',
    data(){
        return {
            rate : 30
        }
    },
    mounted(){
        setInterval(()=>{
            if(this.rate > 0){
                this.rate--;
            }
        },1000)
    }
}
</script>

<style>
.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>