<template>
  <div>
    <div style="font-size: 1rem">1rem</div>
    <div style="font-size: 16px">16px</div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="state.username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: false, message: '请填写用户名' }]"
      />
      <van-field
        v-model="state.password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: false, message: '请填写密码' }]"
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
import { Toast } from "vant";
import { encrypt } from "../../common/cipher";
export default {
  name: "login",
  data: function () {
    return {
      state: {
        username: "",
        password: "",
      },
    };
  },
  created: function () {
    sessionStorage.clear();
  },
  methods: {
    onSubmit: function (e) {
      console.log(e)
      // if (e.username && e.password) {
        Toast.loading("正在登录");
        // TODO: use http
        setTimeout(() => {
          let username = encrypt("laolin"),
            password = encrypt("9527");
          this.$store.dispatch("userLoginIn", {
            username: username,
            token: password,
          });
          this.$router.replace("/index");
        }, 2000);
      // }
    },
  },
};
</script>