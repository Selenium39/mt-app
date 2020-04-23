<template>
  <el-container>
    <el-header>
      <my-header />
    </el-header>
    <el-main class="layout-main">
      <nuxt />
    </el-main>
    <el-footer class="layout-footer">
      <my-footer></my-footer>
    </el-footer>
  </el-container>
</template>
<script>
import MyHeader from "../components/public/header/index";
import MyFooter from "../components/public/footer/myFooter";
export default {
  components: {
    MyHeader,
    MyFooter
  }
};
</script>

<style>
.layout-main {
  margin-top: 100px;
  background-color: #f8f8f8;
}
.layout-footer {
  margin-bottom: 0px;
  background-color: #f8f8f8;
}
</style>
