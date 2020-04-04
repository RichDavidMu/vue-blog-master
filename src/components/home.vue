<template>
  <div id="front">
    <vue-header></vue-header>
    <router-view></router-view>
    <vue-footer></vue-footer>
    </div>
</template>

<script>
  import vueHeader from "./vueHeader";
  import vueFooter from "./vueFooter";
    export default {
        name: "home",
      components:{vueHeader,vueFooter}
    }
</script>

<style scoped>

</style>
