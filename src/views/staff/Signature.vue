<template>
    <div>
       <vue-esign ref="esign" :width="800" :height="300" :isCrop="isCrop" :lineWidth="lineWidth" :lineColor="lineColor" :bgColor.sync="bgColor" />
        <button @click="handleReset">清空畫板</button> 
        <button @click="handleGenerate">變成圖片</button>
    </div>
</template>
<script>
export default {
    name:'signature',
    data(){
        return{
         lineWidth: 6,
         lineColor: '#000000',
         bgColor: '',
         resultImg: '',
         isCrop: false
        }
    },
    methods: {
        handleReset () {
            this.$refs.esign.reset()
            },
             handleGenerate () {
                this.$refs.esign.generate().then(res => {
                this.resultImg = res
                console.log(this.resultImg)
                }).catch(err => {
                alert(err) // 画布没有签字时会执行这里 'Not Signned'
                })
            }
           
         }
         }

        //  https://juejin.cn/post/6844903940039901191
</script>