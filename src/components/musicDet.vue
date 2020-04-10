<template>
    <div class="musicdetBox">
          <div class="top-box">
              <div class="l-recordbox">
                  <div class="record-bg" ref="cdbg">
                      <img :src="nowplaySong.picUrl" alt="" srcset="">
                  </div>
                  <div class="record-poi" ref="poi"></div>
                  <div class="btn-group">
                      <el-row>
                        <el-button size="small" plain icon="el-icon-circle-check">喜欢</el-button>
                        <el-button size="small" plain icon="el-icon-folder-add">收藏</el-button>
                        <el-button size="small" plain icon="el-icon-download">VIP下载</el-button>
                        <el-button size="small" plain icon="el-icon-share">分享</el-button>
                      </el-row>
                  </div>
              </div>
              <div class="r-musicsmg">
                  <h1>{{ nowplaySong.name }}</h1>
                  <h5>
                      <span>专辑：</span>
                      <router-link to="">{{ nowplaySong.song.album.name }}</router-link>
                      <span>歌手：</span>
                      <router-link to="">{{ nowplaySong.song.artists[0].name }}</router-link>
                      <span>来源：</span>
                      <router-link to=""></router-link>
                  </h5>
                  <div class="lyric-box">
                      暂无歌词
                  </div>
              </div>
          </div>

          <div class="det-comment-box">
              <div class="l-comment">
                  <h3>听友评论<span>（已有0条评论）</span></h3>
                  <div class="comment-text">
                      <button>
                          <i class="el-icon-edit"></i>发表评论
                           <i class="el-icon-attract"></i>
                          <i class="netcall">@</i>
                      </button>
                  </div>
                  <div class="comment-main">
                      <h4>精彩评论</h4>
                      <ul>
                          <li>
                              <img src="" alt="" srcset="">
                              <div class="commemnt-single-div">
                                  <p>阿道夫方式方法水电费水，电费是的阿道夫方式方法水电费水，电费是的发顺丰水电费水电费水电费水电费水电费。阿道夫方式方法水电费水，电费是的发顺丰水电费水电费水电费水电费水电费。发顺丰水电费水电费水电费水电费水电费。</p>
                                  <div>
                                      <span>2015年08月12日12:15</span>
                                      <span class="user-interaction">
                                          <a href=""><i class="el-icon-medal"></i>(12)</a>
                                          <a href="">分享</a>
                                          <a href="">回复</a>
                                      </span>
                                  </div>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
              <div class="r-comment">
                  <ul>
                      <h3>包含这首歌的歌单</h3>
                      <li>
                          <img src="" alt="" srcset="">
                          <span>网络热歌分享</span>
                          <font>播放：545万</font>
                      </li>
                  </ul>
                  <ul>
                      <h3>相似歌曲</h3>
                      <li>
                          <img src="" alt="" srcset="">
                          <span>下山</span>
                          <font>要不要买菠菜</font>
                      </li>
                  </ul>
                  <ul class="alikeuser">
                      <h3>喜欢这首歌的人</h3>
                      <li>
                          <img src="" alt="" srcset="">
                          <span>瑶瑶</span>
                          <font>12分钟听过</font>
                      </li>
                  </ul>
              </div>
          </div>
          <button @click="changeDetShow" class="hideMusicDet"><i class="el-icon-bottom-left"></i></button>
          <div class="musicimgbg">
              <img :src="nowplaySong.picUrl" alt="" srcset="">
          </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
    export default {
        name:"musicdet",
        data (){
            return {
                timer:null,
                cdtimer:null,
                cdTimeNum:0
            }
        },
        watch:{
            playing: function (){
                this.setPoiAnimation(this.playing);
            }
        },
        mounted (){
            if(this.playing){
                this.setPoiAnimation(this.playing);
            }
        },
        methods:{
            setCdAnimation (){            
                this.cdtimer = setInterval(() => { 
                    if(this.cdTimeNum>360){
                        this.cdTimeNum=0
                    }
                    this.cdTimeNum++;
                    this.$refs.cdbg.style.transform = `rotate(${this.cdTimeNum}deg)`;
                },40)
            },
            changeDetShow (){
                this.$router.go(-1)
            },
            setItv ({start,end,speed,callback}){
                this.timer = setInterval(() => {
                        start = start + speed;
                        if(end==30?start>end:start<end){
                            callback?callback.call(this):null;
                            clearInterval(this.timer);
                            
                        }else{
                            this.$refs.poi.style.transform = `rotate(${start}deg)`;
                        }
                },6)
            },
            setPoiAnimation(flag){
                if(flag){
                    this.setItv({
                        start:0,
                        end:30,
                        speed:1,
                        callback:function (){
                            this.setCdAnimation()
                        }
                    })
                }else{
                    clearInterval(this.cdtimer)
                    this.setItv({
                        start:30,
                        end:0, 
                        speed:-1
                    })
                }
            }
        },
        computed:{
            ...mapState([
                'playing',
                'nowplaySong',
                'nowplayList'
            ])
        }
    }
</script>

<style scoped lang="less">
.title{
    font-size: 18px;
    font-weight: 400;
    border-bottom: 1px solid rgb(233, 233, 233);
    padding-bottom: 10px;
}
.det-comment-box{
    width: 85%;
    margin: 50px auto;
    color: #555;
    overflow: hidden;
 
}
.l-comment{
    float: left;
    width: 60%;
    h3 {
        .title;
        span{
            font-size: 12px;
            color: #999;
            margin-left: 10px;
        }
    }
    .comment-text{
        border:10px solid rgb(243, 243, 243);
        margin: 20px 0;
        button {
            width: 100%;
            padding: 5px 2px;
            border:1px solid rgb(228, 228, 228);
            background: #fff;
            text-align: left;
            color: #999;
        }

    }
}
.comment-main{
    h4{
        color: #555;
        font-weight: 400;
        margin: 0 0 5px 0;
        padding-bottom: 5px;
    }
    ul{
        li{
            border-top: 1px solid #eee;
            padding: 10px 0 10px 50px;
            position: relative;
            img{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: #eee;
                position: absolute;
                left: 0;
                top:10px;
            }
            .commemnt-single-div{
                p{
                    margin: 0;
                }
                div{
                    overflow: hidden;
                    margin-top: 5px;
                    span{
                        display: block;
                        float: left;
                        color: #999;
                    }
                    span.user-interaction{
                        float: right;
                        a{
                            color: #999;
                            margin-left: 10px;
                            text-decoration: none;
                        }
                    }
                }
            }
        }
    }
}
.r-comment{
    float: right;
    width: 30%;
    ul{
        margin-bottom: 40px;
        h3{
            .title;

        }
        li{
            position: relative;
            padding: 15px 0 15px 50px;
            height: 40px;
            img{
                position: absolute;
                top:10px;
                left:0;
                width:40px;
                height: 40px;
                background: #eee;
            }
            font{
                display: block;
                color: #999;
                margin-top: 7px;
            }
        }
    }
    ul.alikeuser{
        li{
            img{
                width: 35px;
                height: 35px;
                border-radius: 50%;
            }
            span{
                display: block;
                float: left; 
                margin-top: 10px;
            }
            font{
                display: block;
                float: right;
                margin-top: 10px;
            }
        }
    }
}
.musicdetBox{
    padding: 0;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background: #fff;
    overflow-y: auto;
}
.top-box{
    width: 85%;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    z-index: 2;
}
.l-recordbox{
    float: left;
    position: relative;
}
.btn-group{
    margin: 35px 0 0 3px;
}
.btn-group .el-button{
    border: 1px solid rgb(180, 180, 180);
    padding: 7px 12px;
    font-size: 13px;
    border-radius: 6px;
}
.l-recordbox .el-button.is-active, .el-button.is-plain:hover{
    color: #555;
    border-color: #aaa;
}
.r-musicsmg{
    float:right;
    width: 50%;
    margin-top: 20px;
}
.r-musicsmg h1{
    font-size: 25px;
    font-weight: 400;
    margin-bottom: 10px;
}
.r-musicsmg h5{
    font-size: 14px;
    font-weight: 400;
}
.r-musicsmg h5 span{
    color: #666;
}
.r-musicsmg h5 a{
    margin-right: 15px;
}
.lyric-box{
    margin-top: 20px;
    padding: 30px 5px;
    border-right: 1px solid #9f9f9f;
    height: 283px;
}
.record-bg{
    width: 313px;
    height: 316px;
    background: url('../images/record_bg.png') no-repeat;
    margin-top: 50px;
    border-radius: 50%;
    border: 8px solid #ffffff78;
}
.record-bg img{
    width: 200px;
    border-radius: 50%;
    margin: 50px 0 0 47px;
    border: 10px solid #1f1f1f;
}
.record-poi{
    width: 180px;
    height: 90px;
    background: url('../images/record_poi.png') no-repeat;
    position: absolute;
    top: -20px;
    left: 138px;
    transform-origin:17px 21px;
}
.musicimgbg{
    width: 93%;
    height: 400px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    -webkit-filter: blur(50px);
    filter: blur(50px);
    opacity: 0.4;
}
.musicimgbg img{
    width: 100%;
    height: 100%;
}
.isrotate{
    transform: rotate(30deg);
    -ms-transform: rotate(30deg); /* IE 9 */
    -webkit-transform: rotate(30deg); /* Safari and Chrome */
    
}
.hideMusicDet{
    position: absolute;
    right: 35px;
    top: 35px;
    z-index: 9;
    border-radius:6px;
    border: 1px solid rgb(190, 190, 190);
    padding: 5px 7px; 
    font-size: 16px;
    color: rgb(124, 124, 124);
    cursor: pointer;
    outline: none;
}
</style>