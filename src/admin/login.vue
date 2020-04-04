<template>
  <div class="box">
  <el-input v-model="name" placeholder="请输入用户名"></el-input>
  <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
  <el-button type="primary" @click="login">登录</el-button>
  </div>
</template>

<script>
    export default {
        name: "login",
        data(){
          return{
            name:'',
            password:''
          }
        },
      methods:{
            login:function () {
                this.$axios.post('/login',{
                  name:this.name,
                  password:this.password
                }).then((res)=>{
                  console.log(res)
                  localStorage.setItem('token',res.data.token)
                  localStorage.setItem('username',res.data.name)
                  this.$router.push('/admin')
                })
            }
      }
    }
</script>

<style scoped>
.box{
  width: 30%;
  top:40px;
  margin: 40px auto;
  text-align: center;
}
  .el-input{
    margin: 20px;
  }

</style>
