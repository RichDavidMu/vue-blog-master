<template>

      <el-container style="height: 100%; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>管理菜单</template>
              <el-menu-item-group>
                <el-menu-item index="1-1" @click="$router.push('/admin/new')">新建文章</el-menu-item>
                <el-menu-item index="1-2" @click="$router.push('/admin/list')">文章列表</el-menu-item>
                <el-menu-item index="1-3" @click="$router.push('/')">主站</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-container>

          <el-header style="text-align: center; font-size: 12px">
            <span class="admin_title">管理界面</span>
            <span style="float: right">欢迎 {{ username }}</span>
          </el-header>
          <el-main>
            <router-view :key="this.$router.name !== undefined? this.$router.name + +new Date(): this.$router + +new Date()"></router-view>
          </el-main>
        </el-container>
      </el-container>

</template>

<script>
    export default {
      name: "admin",
      computed:{
          username(){
          return localStorage.getItem('username')
          }
      }
    }
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
  .admin_title{
    font-size: 20px;
    font-weight: bolder;
  }
</style>
