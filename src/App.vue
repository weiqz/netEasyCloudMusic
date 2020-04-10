<template>
  <!-- <div id="app" ref="appbox">
    <el-container>
      <el-header height="50px" ref="headbox">
        <Header></Header>
      </el-header>
      <el-container style="height:550px;">
        <keep-alive include="musicdet">
          <router-view></router-view>
        </keep-alive>
      </el-container>
      <el-footer height="50px" ref="footbox">
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div> -->
    <div id="app" ref="appbox">

      <div id="headDiv" ref="headbox">
        <Header></Header>
      </div>
      <div id="appMain">
        <keep-alive include="musicdet">
          <router-view></router-view>
        </keep-alive>
      </div>
      <div id="footDiv" ref="footbox">
        <Footer></Footer>
      </div>

  </div>
</template>

<script>
import Header from './components/head.vue'
import Footer from './components/footer.vue'
import {newsong} from './getData/request.js'

export default {
  name: 'app',
  data (){
    return {
    }
  },
  created (){
    newsong().then(function (response){
      var datas = response.data.result;
      this.$store.commit('changeNowpSong',datas[0]);
      this.$store.commit('replaceSongList',datas);
    }.bind(this)).catch(function (){

    });

    var d = JSON.parse(localStorage.userPro);
    this.$store.commit('updateUserPro',d);
    console.log(d)
  },
  components: {
    Header,
    Footer
  },
  computed:{
  }
}
</script>

<style>
body,div,h1,h2,h3,h4,h5,h6,a,img,li,ul,form{
  margin: 0;
  padding: 0;
  font-size: 12px;
  color: #333;
  font-family: '微软雅黑';
}
body,html{
  height: 100%;
  background: rgb(255, 255, 255);
}
ul{
  list-style: none;
}
#app {
  width: 1055px;
  margin: 0 auto;
  height: 640px;
  position: relative;

}
#headDiv, #footDiv {
  background-color: #333;
  color: #333;
  text-align: center;
  height: 50px;
  position: absolute;
  left: 0;
  z-index: 95;
  width: 100%;
}
#headDiv{
  top:0;
  -webkit-app-region: drag;
}
#footDiv{
  background-color: #f6f6f8;
  border-top: 1px solid #e1e1e2;
  bottom: 0;
}
#appMain{
  width: 100%;
  background-color: rgb(248, 248, 248);
  color: #333;
  position: absolute;
  top:50px;
  bottom: 50px;

}

.div-icon-love-f,.div-icon-love-t{
  background: url('../src/images/icon/ico-love-f.png') no-repeat;
  width:16px;
  height: 16px;
  display: inline-block;
  background-size: 17px;
  background-position: 0 1px;
}
.div-icon-love-t{
  background-image: url('../src/images/icon/ico-love-t.png');
}
/*滚动条的宽度*/

::-webkit-scrollbar {
    width:5px;
    height:9px;
}

/*外层轨道。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果*/

::-webkit-scrollbar-track {
    display: none;
}

/*滚动条的设置*/

::-webkit-scrollbar-thumb {
    background-color:#dfdfdf;
    background-clip:padding-box;
    min-height:28px;
    -webkit-border-radius: 2em;
    -moz-border-radius: 2em;
    border-radius:2em;
}
/*滚动条移上去的背景*/

::-webkit-scrollbar-thumb:hover {
    background-color:#d4d4d4;
}
</style>
