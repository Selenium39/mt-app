<template>
  <div class="c-topbar">
    <el-row :gutter="0">
      <el-col :span="6">
        <city />
      </el-col>
      <el-col :span="6">
        <user />
      </el-col>
      <el-col :span="10">
        <navbar />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import City from "./city";
import User from "./user";
import Navbar from "./nav";
export default {
  components: {
    City,
    User,
    Navbar
  }
};
</script>
<style scoped>
.c-topbar{
    height: 60px;
    width: 100%;
    background-color:#F8F8F8;
    color: #909399;
}

</style>