<template>
    <div class="songlistbox">
         <div style="margin-top: 20px">
             <span>热门标签：</span>
            <el-radio-group v-model="radio4" disabled size="mini">
                <el-radio-button label="华语"></el-radio-button>
                <el-radio-button label="流行"></el-radio-button>
                <el-radio-button label="摇滚"></el-radio-button>
                <el-radio-button label="民谣"></el-radio-button>
                <el-radio-button label="电子"></el-radio-button>
                <el-radio-button label="轻音乐"></el-radio-button>
                <el-radio-button label="怀旧"></el-radio-button>
            </el-radio-group>
        </div>
        <ul class="slist-ul">
            <li>
                
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data (){
            return {
                radio4:'华语'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>