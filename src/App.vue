<template>
  <div id="app">
    <!-- 命名视图可以试试？ -->
    <router-view></router-view>
  </div>
</template>
<script>
import "./assets/css/app.scss";
export default {
  name: "App",
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
