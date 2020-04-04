<template>
  <div class="nav-container">
    <nav class="nav">
      <router-link class="a-link" to="/">
        <img class="icon" src="../assets/1_johnny_mu_1554864285.jpg">
        <span class="blog-title">Johnny's blog</span>
      </router-link>
      <ul class="menu-list">
          <li><a @click="$router.push('/')">博客</a></li>
          <li><a>关于</a></li>
          <li><a @click="$router.push('/admin')">管理</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
    export default {
        name: "myHeader"
    }
</script>

<style scoped>
.nav-container{
  top:0;
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  z-index: 100;
}
  .nav{
    border-bottom-style: solid;
    border-bottom-color: #f6f6f6;
    border-bottom-width: 0.5px;
    height: 50px;
    width: 100%;
    padding: 5px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    background: #f5f7f9;
  }
  .a-link{
    text-decoration: none;
    background: transparent;
    cursor: pointer;
  }
  .icon{
    width: 40px;
    height: 40px;
    background: #efefef;
    border-radius: 20px;
    display: inline-block;
    vertical-align: middle;
  }
  .blog-title{
    color: #202020;
    margin-left: 10px;
    display: inline-block;
    vertical-align: middle;
    font-weight: 700;
    font-size: 24px;
    line-height: 40px;
  }
  .menu-list{
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    vertical-align: middle;
  }
  .menu-list li{
    zoom: 1;
    vertical-align: middle;
    padding: 0;
    margin: 0;
    height: 100%;
    position: relative;
  }
  .menu-list a{
    padding: 4px 15px;
    color: inherit;
    cursor: pointer;
    white-space: nowrap;
  }
  .menu-list a:hover{
      background: #a0a1a7;
  }
  .menu-list a:active{
    color: #4078f2;
  }
</style>
