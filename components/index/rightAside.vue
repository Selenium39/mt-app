<template>
  <div>
    <div class="loginPanel">
      <el-row>
        <el-col :span="5" :offset="8">
          <el-avatar :size="70" src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg"></el-avatar>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6" :offset="8">
          <h3>Hi！你好</h3>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="5" :offset="7">
          <el-button round type>立即注册</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="5" :offset="8">
          <el-button round type>登录</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.loginPanel {
  width: 300px;
  height: 350px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.loginPanel > .el-row > .el-col {
  margin-top: 30px;
}
</style>