<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item prop="phone">
            <el-input 
                    placeholder="请输入手机号" 
                    v-model="ruleForm.phone" 
                    show-password
                    prefix-icon="el-icon-mobile">
                </el-input>
        </el-form-item>
        <el-form-item prop="pass">
           <el-input 
                    placeholder="请输入密码" 
                    v-model="ruleForm.pass" 
                    show-password
                    prefix-icon="el-icon-lock">
                </el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="danger" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name:"login",
        data (){
            return {
                ruleForm:{
                    phone:'',
                    pass:''
                },
                rules:{
                    phone: [
                            { required: true, message: '请输入手机号', trigger: 'blur' },
                            { min: 11,max:11,message: '长度在 3 到 5 个字符', trigger: 'blur' }
                        ],
                    pass:[{ required: true, message: '请输入密码', trigger: 'blur' }] 
                }
            }
        },
        watch:{
           
        },
        mounted(){

        },
        methods:{
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }    
        },
        computed:{

        }
    }
</script>

<style lang="less" scoped>

.el-button{
    width: 100%;
}

</style>