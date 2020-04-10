<template>
    <div class="findmBox">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="个性推荐" name="first">
                <recommend></recommend>
            </el-tab-pane>
            <el-tab-pane label="歌单" name="second">
                 <song-list></song-list>
            </el-tab-pane>
            <el-tab-pane label="主播电台" name="third">
                 <sinstation></sinstation>
            </el-tab-pane>
            <el-tab-pane label="排行榜" name="fourth">
                <ranklist></ranklist>
            </el-tab-pane>
            <el-tab-pane label="歌手" name="five">
                <songerlist></songerlist>
            </el-tab-pane>
            <el-tab-pane label="最新音乐" name="six">
               未开发
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import recommend from './recommend.vue'
import songList from './songList.vue'
import sinstation from './sinStation.vue'
import ranklist from './rankList.vue'
import songerlist from './songerList.vue'
export default {
        name:"findmusic",
        data (){
            return {
                 activeName: 'first'
            }
        },
        methods: {
            handleClick(tab, event) {
                
            }
        },
        created(){

        },
        components:{
            recommend,
            songList,
            sinstation,
            ranklist,
            songerlist
        }
    }
</script>

<style lang="less" scoped>
.findmBox{

}
</style>