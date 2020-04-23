<template>
  <div style="position:relative;z-index:0">
    <el-row>
      <el-col :span="20">
        <el-carousel>
          <el-carousel-item v-for="(img,idx) in imgs" :key="idx">
            <el-image style="width: 796px; height: 300px;" :src="img.src" fit="fill"></el-image>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
    <el-row></el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        {
          url: "#abc",
          src:
            "http://p0.meituan.net/codeman/00c8bc1c25fbcc6d0651b29a2057a8c1560658.png"
        },
        {
          url: "#bsbsb",
          src:
            "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg"
        },
        {
          url: "#sjfkajfj",
          src:
            "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg"
        },
        {
          url: "#sjfkajfja",
          src:
            "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg"
        },
        {
          url: "#kjljj",
          src:
            "http://p1.meituan.net/codeman/bb0abb3435a60c44d87e90ed4237b61039329.jpg"
        }
      ]
    };
  }
};
</script>

<style>
</style>