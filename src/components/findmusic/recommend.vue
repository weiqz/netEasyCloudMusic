<template>
    <div class="recommend">
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="(item,index) in bannerLists" :key="'bnn'+index">
                <div class="medium">
                    <img :src="item.imageUrl" alt="">
                    <span :style="{ background:item.titleColor }">{{ item.typeTitle }}</span>
                </div>
            </el-carousel-item>
        </el-carousel>
        <div class="boxlists">
            <h3>推荐歌单<a href="javascript:void(0)">更多></a></h3>
            <ul class="nonewm">
                <li v-for="(item1,index) in personalized" :key="'gd'+index">
                    <div>
                        <router-link :to="{name:'songlistDet', params:{id:item1.id}}"><img :src="item1.picUrl" alt="" srcset=""></router-link>
                        <i class="el-icon-video-play" ></i>
                        <span class="top-message">{{ item1.copywriter }}</span>
                        <span class="playcount"><i class="el-icon-headset"></i>{{ Math.ceil(item1.playCount/10000) }}万</span>
                    </div>
                    <p>{{ item1.name }}</p>
                </li>
            </ul>
        </div>
        <div class="boxlists">
            <h3>独家放送<a href="javascript:void(0)">更多></a></h3>
            <ul class="nonewm dujia">
                <li v-for="(item2,index) in privatecontent" :key="'dj'+index">
                    <div class="dujia">
                        <router-link to=""><img :src="item2.picUrl" alt="" srcset=""></router-link>
                    </div>
                    <p>{{ item2.name }}</p>
                </li>
            </ul>
        </div>
        <div class="boxlists">
            <h3>主播电台<a href="javascript:void(0)">更多></a></h3>
            <ul class="nonewm">
                <li v-for="(item3,index) in djprogram" :key="'dt'+index">
                    <div>
                        <router-link to=""><img :src="item3.picUrl" alt="" srcset=""></router-link>
                         <span class="bottom-msg">{{ item3.copywriter }}</span>
                    </div>
                    <p>{{ item3.name }}</p>   
                </li>
            </ul>
        </div>
        <div class="boxlists">
            <h3>最新音乐<a href="javascript:void(0)">更多></a></h3>
            <ul class="isnewm">
                <li v-for="(item4,index) in newsong" :key="'nm'+index">
                    <span class="list-id">{{ index>8?index+1:'0'+(index+1) }}</span>
                    <div class="song-img"><img :src="item4.picUrl" alt="" srcset=""><i @click="playNewMusic(item4)" class="el-icon-video-play newMPlayBtn"></i></div>
                    <h5><span class="songname">{{ item4.name }}<i>{{ item4.song.alias[0] }}</i></span><router-link to="">{{ item4.song.artists[0].name }}</router-link></h5>
                </li>
            </ul>  
        </div>
    </div>
</template>

<script>
    import { 
            getIndexBanner,
            getpersonalized,
            privatecontent,
            djprogram,
            newsong
    } from '../../getData/request.js'
    export default {
        name:'recommend',
        data (){
            return {
               bannerLists:[],
               personalized:[],
               privatecontent:[],
               djprogram:[],
               newsong:[]
            }
        },
        methods:{
            playNewMusic:function (songObj){
                this.$store.commit('changeNowpSong',songObj);
                this.$store.commit('changeNowpList',songObj);
            }
        },
        created (){
            var that = this;
            getIndexBanner(0).then(function (response){
                that.bannerLists = response.data.banners
            }).catch(function (error){
                console.log(error)
            })

            getpersonalized(10).then(function (response){
              
                that.personalized = response.data.result;
            }).catch(function (){
                console.log(error)
            })

            privatecontent().then(function (response){
                that.privatecontent = response.data.result;
            }).catch(function (){
                console.log(error)
            })

            djprogram().then(function (response){
                var data = response.data.result;
                data.pop();
                that.djprogram = data;
            }).catch(function (){
                console.log(error)
            })

            newsong().then(function (response){
                var data = response.data.result;
                that.newsong = data;
            }).catch(function (){
                console.log(error)
            })
        }
    }
</script>

<style lang="less" scoped>
.fontOmit{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
}
a{
    text-decoration: none;
}
    .el-carousel__item div.medium {
        color: #475669;
        font-size: 12px;
        opacity: 0.75;
        width: 100%;
        height: 100%;
        overflow: hidden;
        margin: 0;
        position: relative;
        img{
            width: 100%;
            height: 100%;
        }
        span{
            display: block;
            position: absolute;
            bottom: 15px;
            right:-3px;
            padding: 3px 10px;
            color:#fff;
            border-bottom-left-radius: 10px;
            border-top-left-radius: 10px;
        }
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .boxlists{
        width: 100%;
        margin-bottom: 30px;
        overflow: hidden;
        h3{
            font-size: 18px;
            padding: 8px 0;
            margin-bottom: 15px;
            border-bottom: 1px solid #eee;
            font-weight: 400;

            a{
                display: block;
                float:right;
                font-size: 12px;
                color:#888;
                position: relative;
                top:10px;
            }
        }
        ul{
            li{
                img{
                    width: 100%;
                    height: 100%;
                    background: #f3f3f3;
                }
            }
        }
        ul.nonewm{
            li{
                padding: 0 17px 15px 0;
                float: left;
                height: 186px;
                div{
                    width:142px;
                    height: 142px;
                    overflow: hidden;
                    border:1px solid #dedede;
                    position: relative;
                    &:hover{
                        i.el-icon-video-play{
                            display: block;
                        }
                        span.top-message{
                            left:0;
                        }
                        span.playcount{
                            display: none;
                        }
                    }
                    i.el-icon-video-play{
                        position: absolute;
                        right:5px;
                        bottom: 5px;
                        font-size: 23px;
                        color: #fff;
                        display: none;
                    }
                    span.top-message{
                        position: absolute;
                        top:0;
                        left:-160px;
                        transition: all 0.4s;
                        color:#fff;
                        padding: 10px 5px;
                        width: 142px;
                        display: block;
                        background: #00000054;
                    }
                    span.bottom-msg{
                        position: absolute;
                        bottom: 0;
                        display: block;
                        padding: 5px;
                        color: #fff;
                        background: #0000004d;
                        left: 0;
                        right: 0;
                    }
                    span.playcount{
                        position: absolute;
                        top:0;
                        right:0;
                        padding:3px 5px;
                        background-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.7));
                        color:#fff;
                    }
                }
                p{
                    width: 135px;
                }
                
            }
            li:nth-child(5){
                padding-right: 0;
            }
            li:nth-child(10){
                padding-right: 0;
            }
        }
        ul.dujia{
            li{
                div{
                    width: 250px;
                }
                p{
                    width: 250px;
                }
            }
            li:last-child{
                padding-right: 0;
            }
        }
        ul.isnewm{
            overflow: hidden;
            border-top: 1px solid #eee;
            border-left: 1px solid #eee;
            li{
                width: 49.8%;
                float: left;
                border-right: 1px solid #eee;
                height: 41px;
                padding: 8px 0;
                &:hover{
                    background: #f2f2f2;
                }
                span.list-id{
                    display: inline-block;
                    padding: 0 15px;
                    position: relative;
                    top: -11px;
                    color: #9a9a9a;
                }
                div{
                    width: 40px;
                    height: 40px;
                    display: inline-block;  
                    background: #eee;
                    position: relative;
                    vertical-align: top;
                    i.newMPlayBtn{
                        position: absolute;
                        color: #ffffff96;
                        font-size: 23px;
                        left: 8px;
                        top: 8px;
                        z-index: 5;
                        cursor: pointer;
                        &:hover{
                            color:#fff;
                        }
                    }
                }
                h5{
                    display: inline-block;
                    font-weight: 400;
                    font-size: 14px;
                    margin-left: 7px;
                    a{
                        display: block;
                        color:#888;
                        font-size: 14px;
                    }
                    span.songname{
                        display: block;
                        width:292px;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        word-break: break-all;
                        i{
                            color:#999;
                        }
                    }
                }
            }
           
        }
    }
</style>