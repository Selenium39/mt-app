<template>
  <div class="p-index">
    <el-row>
      <el-col :span="5">
          <emenu></emenu>
      </el-col>
      <el-col :span="5">222</el-col>
      <el-col :span="5">333</el-col>
    </el-row>
  </div>
</template>

<script>
import Emenu from "../components/index/menu";
export default {
  components: {
    Emenu
  }
};
</script>

<style>
.p-index {
  margin-top:50px;
  margin-left: 200px;
}
</style>
