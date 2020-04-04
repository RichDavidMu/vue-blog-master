<template>
    <footer class="footer">
      <div id="bottom-inner">
        <router-link to="/" class="bottom-item">首页</router-link>
        |<router-link to="https://github.com/JohnnyMu" class="bottom-item">GitHub</router-link>
        |<router-link to="https://johnnymu.github.io/" class="bottom-item">Johnny向你问好</router-link>
      </div>
    </footer>
</template>

<script>
    export default {
        name: "vueFooter"
    }
</script>

<style scoped>
.footer{
  text-align: center;
}
  footer{
    width: 60%;
    max-width: 840px;
    margin-left: auto;
    margin-right: auto;
    border-top: 0.5px solid #eee;
    padding-bottom: 1rem;
    padding-top: 1rem;
    margin-top: 2rem;
    color:#999;
    font-size: 12px;
    position: relative;
    z-index: 1024;

  }
  .bottom-item{
    margin-left: 5px;
    margin-right: 5px;
    text-decoration: none;
    color:inherit;
  }
  .bottom-item:hover{
    color:#64b5f6;
  }

</style>
