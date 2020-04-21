<template>
  <div class="c-user">
    <template v-if="user">
      欢迎您,{{user}}
      <nuxt-link to="/exit">退出</nuxt-link>
    </template>
    <template v-else>
      <nuxt-link style="color:#FE8C00;margin-right:10px" to="/login">立即登录</nuxt-link>
      <nuxt-link to="/register">注册</nuxt-link>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: ""
    };
  }
};
</script>
<style>
.c-user{
  margin-top: 20px;
  margin-left: 150px;
  height:60px;
}
.c-user a{
  color: #909399;
}
</style>