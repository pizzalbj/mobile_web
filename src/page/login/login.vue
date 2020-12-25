<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="state.username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="state.password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import store from "../../data/store/store";
export default {
  name: "login",
  data: function () {
    return {
      // userIsAuthorized: store.userIsAuthorized,
      state: {
        username: "",
        password: "",
      },
    };
  },
  created: function () {},
  methods: {
    onSubmit: function (e) {
      if (e.username && e.password) {
        store.userLoginIn();
        this.$router.replace("/index");
      }
    },
  },
};
</script>