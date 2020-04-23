<template>
  <div class="p-index">
    <el-row>
      <el-col :span="5">
        <emenu></emenu>
      </el-col>
      <el-col :span="14">
        <img-nav></img-nav>
      </el-col>
      <el-col :span="5">
        <right-aside></right-aside>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Emenu from "../components/index/menu";
import ImgNav from "../components/index/imgNav";
import RightAside from "../components/index/rightAside";
export default {
  components: {
    Emenu,
    ImgNav,
    RightAside
  }
};
</script>

<style>
.p-index {
  margin-top: 50px;
  margin-left: 200px;
}
</style>
