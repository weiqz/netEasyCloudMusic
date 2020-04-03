<template>
    <div class="main-con">
        <div id="asideDiv">
            <Aside></Aside>
        </div>
        <div id="rightMain">
                 <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Aside from './aside.vue'
    export default {
        name:'index',
        components:{
            Aside
        }
    }
</script>

<style scoped>
.main-con{
    width: 100%;
    height: 100%;
    position: relative;
}
#asideDiv{
    background-color: #f5f5f7;
    color: #333;
    border-right: 1px solid #e1e1e2;
    text-align: center;
    position: absolute;
    width: 200px;
    height: 100%;
    left: 0;
    top:0;
}
#rightMain{
    position: absolute;
    right: 0;
    top: 0;
    padding: 8px 30px;
    left: 200px;
    bottom: 0;
    overflow: hidden;
    overflow-y: auto;
}
</style>