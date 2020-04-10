<template>
  <div class="head-main">
    <h1 class="logobox"><img src="../images/logo.png" alt="logo" /></h1>
    <el-button-group>
      <el-button :disabled=leftbtn @click="back" icon="el-icon-arrow-left" size="mini"></el-button>
      <el-button :disabled=rightbtn @click="forward" size="mini"><i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>
    <div class="searchbox"> 
      <input type="text" name="searchinput" placeholder="搜索音乐、视频、歌词、电台" v-model="input4">
      <i class="el-icon-search"></i>
    </div>
    <div class="head-user">
      <div class="user-name_headbox" @click="showLoginBox">
          <img :src="user_pro.avatarUrl?user_pro.avatarUrl:'../images/user.png'" alt="userpic" srcset="">
          <span>{{ user_pro.nickname?user_pro.nickname:未登录 }}</span>
          <i class="el-icon-caret-bottom"></i>
      </div>
      <span class="open-vip">开通VIP</span>
      <el-badge class="item">
        <i class="el-icon-message"></i>
      </el-badge>
      <i class="el-icon-setting"></i>

      <div class="window-operate">
        <i class="el-icon-minus" @click="changeWin('minus')"></i>
         <i class="el-icon-close" @click="changeWin('close')"></i>
      </div>
    </div>
    <el-dialog
            title="请登录"
            :append-to-body=true
            :modal=false
            :visible.sync="dialogVisible"
            width="340px"
            v-if="!user_pro"
            >
            <login :visible.sync="dialogVisible"/>
    </el-dialog>
    <div class="userInfo_box" v-if="user_pro" v-show="dialogVisible">
      <el-button type="warning" @click="logoutFn">退出</el-button>
    </div>
  </div>
</template>

<script>
 const  { ipcRenderer }  = require('electron')
 import Login from './login.vue'
 import { mapState } from 'vuex'
 import { Logout } from '../getData/request.js'
export default {
  name: 'Header',
  data (){
    return {
      input4:'',
      leftbtn:false,
      rightbtn:false,
      dialogVisible:false
    }
  },
  created(){
    
  },
  watch:{
    //'$route':'disRouteBtn'
  },
  computed:{
    ...mapState([
      'user_pro'
    ])
  },
  components:{
    Login
  },
  methods:{
      showLoginBox(){
        this.dialogVisible = true
      },
      forward(){
        this.$router.forward()
      },
      back(){
        this.$router.back()
      },
      changeWin(z){      
        ipcRenderer.send('changeWindow',z)
      },
      logoutFn(){
        Logout().then(function (){

        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head-user{
    float: right;
    vertical-align: top;
    color: rgb(199, 199, 199);
    position: relative;
    top:13px;
    -webkit-app-region: no-drag;
}
.userInfo_box{
  position: fixed;
  top:70px;
  left: 50%;
  z-index: 99;
  background: #fff;
  width: 260px;
  height: auto;
}
.user-name_headbox{
    display: inline-block;
    color: #c7c7c7;
    cursor: pointer;
}
.head-user img{
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    position: relative;
    top:-2px;
}
.head-user i,.head-user span{
    cursor: pointer;
}
.head-user i:hover,.head-user span:hover{
    color: rgb(241, 241, 241);
}
.head-user .el-icon-setting{
    margin: 0 20px;
    font-size: 18px;
    position: relative;
    top: 3px;
}
.window-operate{
    display: inline-block;
    color:rgb(199, 199, 199);
    border-left: 1px solid rgb(26, 26, 26);
    margin-left: 15px;
    height: 20px;
    position: relative;
    top:0;
}
.window-operate i{
    font-size: 18px;
    margin-left: 15px;
    vertical-align: top;
}
.el-badge i{
    font-size: 18px;
    color: rgb(197, 197, 197);
}
.open-vip{
    margin: 0 20px;
}
.searchbox{
    display: inline-block;
    vertical-align: top;
    margin-left: 20px;
    position: relative;
    top: 12px;
    -webkit-app-region: no-drag;
}
.searchbox input{
    width:240px;
    height:25px;
    background:#252525;
    border:none;
    border-radius: 15px;
    color:#eee;
    padding: 0 15px;
    outline: none;
}
.searchbox i{
    color: #adadad;
    position: relative;
    right: 20px;
    cursor: pointer;
}
.searchbox i:hover{
    color:#f1f1f1;
}
div.el-input--mini{
    display: inline-block;
    width: 240px;
    vertical-align: top;
    margin-left: 20px;
}
.head-main{
    text-align: left;
    padding: 0 8px;
}
.logobox{
    display: inline-block;
    position: relative;
    top:2px;
}
.el-button-group {
    vertical-align: super;
    margin-left: 50px;
    position: relative;
    top:-3px;
    -webkit-app-region: no-drag;
}
.el-button--mini, .el-button--mini.is-round {
    padding: 4px 4px;
    background: none;
    border-color: #252525;
    color:#fff;
    font-weight: 700;  
}
.el-button:hover{
    background: none;
    border-color: #252525;
    color:rgba(255, 255, 255, 0.849);
}
.el-button.is-disabled, .el-button:focus, .el-button:hover {
    color: #fff;
    background: none;
    border-color: #252525;
}
</style>
