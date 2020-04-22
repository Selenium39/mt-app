<template>
  <div class="c-menu">
    <div class="m-header">
      <span class="c-title">全部分类</span>
    </div>
    <div class="m-body">
      <el-row class="c-row" v-for="category in categorys" :key="category.type">
        <el-col offset="2" :span="18">
          <i :class="category.icon">{{category.name}}</i>
        </el-col>
        <el-col :span="2">
          <i class="el-icon-arrow-right"></i>
        </el-col>
      </el-row>
    </div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
      </el-card>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      categorys: [
        {
          icon: "el-icon-food",
          name: "美食",
          type: "food"
        },
        {
          icon: "el-icon-coffee",
          name: "咖啡",
          type: "coffee"
        }
      ]
    };
  }
};
</script>

<style>
.c-menu {
  width: 230px;
  height: 475px;
  text-align: left;
  box-sizing: border-box;
  float: left;
  margin-top: -50px;
  color: #646464;
  background: #fff;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
}
#arrow {
  float: right;
  margin-right: 20px;
}
.c-title {
  color: #222222;
  font-size: 16px;
  font-weight: 700;
  margin-left: 30px;
}
.c-row {
  margin-top: 20px;
}
.m-header {
  margin-top: 20px;
  margin-bottom: 20px;
}
.m-category {
  color: #222222;
  font-size: 16px;
  font-weight: 700;
  margin-left: 15px;
}
li {
  list-style-type: none;
}
.box-card {
  width: 400px;
  height: 540px;
  margin-top: -50px;
}
</style>