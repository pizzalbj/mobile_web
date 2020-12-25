<template>
  <div>
    <router-view class="view"></router-view>
    <div class="bottom-tabbar">
      <router-link to="/pageone">one</router-link>
      <router-link to="/pagetwo">two</router-link>
      <router-link to="/pagethree">three</router-link>
    </div>
  </div>
</template>
<script>
import store from "../../data/store/store";
export default {
  name: "index",
  created: function () {
    console.log("index");
    console.log(store.userIsAuthorized)
    // if(!store.userIsAuthorized) this.$router.push("/login")
  },
};
</script>
<style>
.bottom-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 44px;
  background-color: #ffffff;
  border-top: 1px solid #dcdcdc;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>