<template>
  <div class="c-nav">
    <el-menu class="el-menu-demo" mode="horizontal" background-color="#F8F8F8">
      <el-submenu index="1">
        <template slot="title">我的美团</template>
        <el-menu-item index="1-1">我的订单</el-menu-item>
        <el-menu-item index="1-2">我的收藏</el-menu-item>
        <el-menu-item index="1-3">抵用券</el-menu-item>
        <el-menu-item index="1-4">账号设置</el-menu-item>
      </el-submenu>
      <el-menu-item>手机APP</el-menu-item>
      <el-submenu index="3">
        <template slot="title">商家中心</template>
        <el-menu-item index="3-1">美团餐饮商户中心</el-menu-item>
        <el-menu-item index="3-2">登录商家中心</el-menu-item>
        <el-menu-item index="3-3">美团智能收银</el-menu-item>
        <el-menu-item index="3-4">我想合作</el-menu-item>
        <el-menu-item index="3-5">手机免费开店</el-menu-item>
        <el-menu-item index="3-6">餐饮代理商招聘</el-menu-item>
        <el-menu-item index="3-7">商家申请开票</el-menu-item>
        <el-menu-item index="3-8">免费合作美团排队</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">美团规则</template>
        <el-menu-item index="4-1">规则中心</el-menu-item>
        <el-menu-item index="4-2">规则目录</el-menu-item>
        <el-menu-item index="4-3">规则评议院</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">网站导航</template>
        <el-menu-item index="5-1">
          <el-collapse>
            <div></div>
          </el-collapse>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {};
</script>

<style>
.el-submenu__title > i {
  visibility: hidden;
}

.el-menu.el-menu--horizontal{
    border-bottom: none;
}
.c-nav{
    height:40px;
    margin-right: 200px;
}
</style>