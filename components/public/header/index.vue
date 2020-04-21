<template>
  <div>
    <el-row>
      <el-col>
        <topbar />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <search />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Topbar from "./topbar";
import Search from "./search";
export default {
  components: {
    Topbar,
    Search
  }
};
</script>