<template>
  <div>
    <router-view class="view"></router-view>
    <div class="app-tabbar">
      <router-link to="/pageone">one</router-link>
      <router-link to="/pagetwo">two</router-link>
      <router-link to="/pagethree">three</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  created: function () {
    // if(!store.userIsAuthorized) this.$router.push("/login")
  },
};
</script>
<style>
@import "../../assets/css/app.scss";
</style>