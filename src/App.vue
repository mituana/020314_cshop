<template>
  <div id="app">
    <router-view></router-view>
    <footerguide v-show="$route.meta.showFooter"></footerguide>
  </div>
</template>

<script>
  import FooterGuide from "./components/FooterGuide/FooterGuide";
export default {
  name: 'App',
  components:{
    footerguide: FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
