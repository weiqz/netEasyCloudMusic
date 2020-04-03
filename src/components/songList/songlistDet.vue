<template>
    <div>
        {{ detID }}
    </div>
</template>

<script>
    export default {
        data (){
            return{

            }
        },
        computed:{
            detID (){
                return this.$route.params.id
            }
        }
    } 
</script>

<style lang="less" scoped>

</style>