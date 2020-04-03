<template>
    <div class="footer-box" ref="foo">
        <div class="playbtngrop">
            <button class="playbtn-pre" @click="prevsong"></button>
            <button class="playbtn-start" :class="{'playbtn-stop':playing}" @click="startsong"></button>
            <button class="playbtn-next" @click="nextsong"></button>
        </div>

        <div class="play-progress" ref="ppro">
            <span>{{ currenttime }}</span>
            <div class="progress-box" ref="timeproBox" @click="changeSongTime" >
                <div class="progress-main" :style="{ width: songTimeProStyle + 'px' }"></div>
            </div>
            <span>{{ totaltime }}</span>
        </div>

        <div class="volume-box">
            <i class="volume-ico"></i>
            <div class="volumepro" @click="clickChangeVol" ref="volproM">
                <div class="volprogress-main" ref="volpro"></div>
            </div>
        </div>
        <div class="play-control">
            <i class="ico-refresh"></i>
            <i class="ico-biaozhun">标准</i>
            <i class="ico-ci">词</i>
            <i class="el-icon-tickets"></i>
        </div>
        <audio :src="nowplaySong.songUrl"
         @timeupdate="timeUpdate"
         @playing="playingFn"
         @pause="pauseFn"
         @canplay="canplayFn"
         @volumechange="volChange"
         autoplay="autoplay" ref="aud" style="display:none" id="audioDOM"></audio>
    </div>
</template>

<script>
import Util from '../player/utill'
import getOffset from '../player/getOffset'
import { mapState } from 'vuex'
    export default {
        name:'Footer',
        data (){
            return {
                passTime:0,
                totalTime:0,
                timeproWidth:0,
                timeproBoxLeft:0,
                volproBoxLeft:0
            }
        },
        computed:{
            ...mapState([
                'playing',
                'nowplaySong',
                'nowplayList'
            ]),
            currenttime (){
                return Util.formatTime(this.passTime)
            },
            totaltime (){
                return Util.formatTime(this.totalTime)
            },
            songTimeProStyle (){
                return this.timeproWidth * (this.passTime / this.totalTime);       
            }
        },
        mounted (){
            this.stopPlay()
            this.$refs.aud.volume = 0.4;
            this.timeproWidth = this.$refs.timeproBox.offsetWidth;
            this.volproBoxLeft = getOffset(this.$refs.volproM,'left');
            this.timeproBoxLeft = getOffset(this.$refs.timeproBox,'left');
        },
        methods:{
            volChange (){
                let value = this.$refs.aud.volume * 100;
                this.$refs.volpro.style.width = value + 'px';
            },
            clickChangeVol (e){
                let value = (e.clientX-this.volproBoxLeft) / 100;
                this.$refs.aud.volume = value;
            },
            pauseFn (){
                this.$store.commit('changePlaying',false)
            },
            playingFn (){
                this.$store.commit('changePlaying',true)
            },
            timeUpdate (){
                //this.renderTimeProStyle(this.$refs.aud.currentTime,this.$refs.aud.duration);
                //调整当前时长
                this.passTime = this.$refs.aud.currentTime;
            },
            renderTimeProStyle (){

            },
            stopPlay (){
                this.$refs.aud.pause()
            },
            canplayFn (){
               this.totalTime = this.$refs.aud.duration;
            },
            prevsong (){

            },
            startsong (){              
                if(this.$refs.aud.paused){
                    this.$refs.aud.play()
                }else{
                   this.$refs.aud.pause() 
                }
                
            },
            nextsong (){
                let index = this.nowplaySong.id;
                index+=1;
                if(index>this.nowplayList.length){
                    index=1
                }
                this.$store.commit('changeNowpSong',this.nowplayList[index-1])
            },
            changeSongTime (e){
                window.console.log(e.clientX+"--"+this.timeproBoxLeft);
                let l = this.totalTime * ((e.clientX - this.timeproBoxLeft) / this.timeproWidth);
                this.$refs.aud.currentTime =  l.toFixed(6);
            }
        }
    }
</script>

<style scoped>
    .footer-box{
        text-align: left;
         padding: 0 8px;
    }
    .playbtngrop {
        position: relative;
        top:5px;
    }
    .playbtngrop button{
        width:30px;
        height: 30px;
        margin-right: 20px;
        outline: none;
        cursor: pointer;
        border: 0;
        background: url('../images/icon/ico-preplay.png') no-repeat #333;
        background-position: 10px 10px;
        border-radius: 40px;
    }
    .playbtngrop button:hover{
        opacity: 0.8;
    }
    .playbtngrop button.playbtn-start{
        width: 35px;
        position: relative;
        top:3px;
        height: 35px;
        background-position: 13px 8px;
        background-image: url('../images/icon/ico-startplay.png');
    }
     .playbtngrop button.playbtn-stop{
         background-image: url('../images/icon/ico-stopplay.png');
         background-position: 9px;
     }
    .playbtngrop button.playbtn-next{
         background-image: url('../images/icon/ico-nextplay.png');
    }
    .footer-box div{
        display: inline-block;
        vertical-align: middle;
    }
    .play-progress{
        margin-left: 28px;
        top:5px;
        position: relative;
    }
    .progress-box{
        width: 400px;
        height: 5px;
        border-radius: 15px;
        background: rgb(206, 206, 206);
        margin: 0 17px;
        overflow: hidden;
        position: relative;
    }
    .progress-main{
        height: 5px;
        width: 0;
        background: #333;
        position: absolute;
        top:0;
        left: 0;
        border-radius: 5px;
    }
    .volume-box{
        margin: 0 20px;
        top:5px;
        position: relative;
    }
    .volume-box i{
        padding: 10px;
        background: url('../images/icon/ico-volume.png') no-repeat;
        position: relative;
        top:10px;
        margin-right: 10px;
    }
    .volumepro{
        height: 5px;
        width: 100px;
        border-radius: 15px;
        background: rgb(206, 206, 206);
        position: relative;
        overflow: hidden;
    }
    .volumepro div{
        height: 5px;
        width: 0;
        position: absolute;
        top:0;
        left: 0;
        background: #333;
        border-radius: 5px;
    }
    .play-control{
        float: right;
        top:13px;
        position: relative;
    }
    .play-control i{
        display: inline-block;
        margin-right: 10px;
        font-style: normal;
        vertical-align: middle;
    }
    .play-control i.ico-refresh{
        padding: 12px;
        background: url('../images/icon/refresh.png') no-repeat;
        background-size: 22px;
    }
    .play-control i.ico-biaozhun,.play-control i.ico-ci{
        border: 1px solid #868686;
        height: 18px;
        line-height: 18px;
        padding: 0 2px;
        color: #666;
    }
    .play-control i.el-icon-tickets{
        font-size:21px;
        color: #666; 
    }
</style>