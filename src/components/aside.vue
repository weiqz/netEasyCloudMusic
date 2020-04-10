<template>
    <div class="aside-box">
        <div class="aside-scroll">
            <ul>
                <h3>推荐</h3>
                <li><router-link to="/findmusic"><i class="el-icon-headset"></i>发现音乐</router-link></li>
                <li><router-link to="/"><i class="el-icon-c-scale-to-original"></i>私人FM</router-link></li>
                <li><router-link to="/"><i class="el-icon-video-camera"></i>视频</router-link></li>
                <li><router-link to="/"><i class="el-icon-user"></i>朋友</router-link></li>
            </ul>
            <ul>
                <h3>我的音乐</h3>
                <li><router-link to="/"><i class="el-icon-mobile"></i>本地音乐</router-link></li>
                <li><router-link to="/"><i class="el-icon-download"></i>下载管理</router-link></li>
                <li><router-link to="/"><i class="el-icon-upload"></i>我的音乐云盘</router-link></li>
                <li><router-link to="/"><i class="el-icon-star-off"></i>我的收藏</router-link></li>
            </ul>
            <ul>
                <h3>创建的歌单</h3>
                <li><router-link to="/"><i class="div-icon-love-f"></i>我喜欢的音乐</router-link></li>
                <li><router-link to="/"><i class="el-icon-finished"></i>yanni</router-link></li>
            </ul>
            <ul>
                <h3>收藏的歌单</h3>
                <li><router-link to="/"><i class="el-icon-finished"></i>纯音乐的殿堂</router-link></li>
                <li><router-link to="/"><i class="el-icon-finished"></i>怀旧粤语合集</router-link></li>
            </ul>
        </div>
        
        <!--  -->
        <div class="nowplay-box" @mouseover="changeNowPlayHover" @mouseout="changeNowPlayHover">
            <img :src="nowplaySong.picUrl?nowplaySong.picUrl:null" alt="" srcset="">
            <div v-if="nowplaySong.name">
                <span><a :title="nowplaySong.name">{{ nowplaySong.name }}</a><i class="div-icon-love-f nowloveico"></i></span>
                <router-link to="" style="color:#777">{{nowplaySong.song.artists[0].name}}</router-link>
            </div>
            <div class="nowplay-hover" v-show="nowplayh">
                <router-link to="/musicdet"> 
                    <i class="el-icon-top-right"></i>
                </router-link>  
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
    export default {
        data (){
            return {
                nowplayh:false
            }
        },
        computed:{
            ...mapState([
                'nowplaySong'
            ])
        },
        methods:{
            changeNowPlayHover (){
                var f = this.nowplayh;
                if(f){
                    this.nowplayh = false
                }else{
                     this.nowplayh = true
                }
            }    
        }
    }
</script>

<style scoped>

.aside-box{
    height: 100%;
    font-size: 13px;
    color:#666;  
    position: relative;
}
.aside-scroll{
    position: absolute;
    top:0;
    bottom: 55px;
    width: 100%;
    overflow: hidden;
    overflow-y: auto;
}
.aside-box ul{
    overflow: hidden;
    margin-bottom: 10px;
}
.nowplay-box{
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 5px;
    height: 45px;
    line-height: 19px;
    background: #f5f5f7;
    right:0;
    border-top:1px solid rgb(223, 223, 223);
}
.nowplay-box img{
    width: 45px;
    height: 45px;
    float:left;
    margin-right: 10px;
    cursor: pointer;
}
.nowplay-box div{
    float:left;
    padding: 3px 0 0 0;
}
.nowplay-box div span a{
    display: inline-block;
    width: 118px;
    overflow: hidden;
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.nowplay-box div span,.nowplay-box div>a{
    display: block;
    text-align: left;
    font-size: 14px;
    cursor: pointer;
    overflow: hidden;
    text-decoration: none;
}
.aside-box ul h3{
    line-height: 20px;
    text-align: left;
    padding: 3px 0 3px 10px;
    font-size: 13px;
    color:#888;
    font-weight: 400;
}
.aside-box ul li{
    line-height: 20px;
}
.aside-box ul li a{
    display: block;
    padding: 7px 0 7px 20px;
    text-align: left;
    text-decoration: none;
    font-size: 13px;
    color:#555;  
}
.aside-box ul li a:hover{
    color:#222;
}
.aside-box ul li i{
    font-size: 16px;
    color:#666;  
    margin-right: 10px;
}
.nowplay-hover{
    position: absolute;
    top:5px;
    left: 5px;
    width:45px;
    height:45px;
    background:rgba(0, 0, 0, 0.712);
}
.nowplay-hover i{
    font-size: 45px;
    color:rgb(187, 187, 187);
}
.nowplay-hover a{
    display: block;
}
.nowloveico{
    position: relative;
    top: -2px;
    left: 0px;
}
</style>