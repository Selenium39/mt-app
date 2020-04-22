<template>
  <el-container>
    <el-header>
      <my-header />
    </el-header>
    <el-main class="layout-main">
      <nuxt />
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script>
import MyHeader from "../components/public/header/index";
export default {
  components: {
    MyHeader
  }
};
</script>

<style>
.layout-main {
  margin-top: 100px;
  background-color: #F8F8F8;
}
</style>
