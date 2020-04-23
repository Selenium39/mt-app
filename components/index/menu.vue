<template>
  <div class="c-menu">
    <div class="m-header">
      <span class="c-title">全部分类</span>
    </div>
    <div class="m-body">
      <!--在组件上监听事件需要使用native关键字-->
      <el-row
        @mouseenter.native="enter"
        @mouseleave.native="leave"
        class="c-row"
        v-for="category in categorys"
        :key="category.type"
      >
        <el-col :offset="2" :span="18">
          <i :class="category.icon">{{category.name}}</i>
        </el-col>
        <el-col :span="2">
          <i class="el-icon-arrow-right"></i>
        </el-col>
      </el-row>
    </div>
    <el-card v-if="flag" class="card" @mouseenter.native="enterCard" @mouseleave.native="leaveCard">
      <div slot="header" class="clearfix">
        <span style="font-size:15px">{{currentCategoryName}}</span>
        <el-button style="float: right; padding: 3px 0" type="text">
          更多
          <i class="el-icon-arrow-right"></i>
        </el-button>
      </div>
      <div style="color:#999" v-for="item in currentCategory.detail" :key="item.id">
        <span style="float:left;margin-left:3px;margin-right:3px;">{{item}}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  methods: {
    enter(e) {
      clearTimeout(this.timer);
      e.target.style.backgroundColor = "#fff7de";
      this.currentCategoryName = e.target.innerText;
      this.flag = true;
    },
    leave(e) {
      var self = this;
      this.timer = setTimeout(function() {
        self.flag = false;
        self.currentCategoryName = "";
      }, 300);
      e.target.style.backgroundColor = "";
    },
    enterCard(e) {
      clearTimeout(this.timer);
    },
    leaveCard(e) {
      this.flag = false;
      this.currentCategoryName = "";
    }
  },
  computed: {
    currentCategory() {
      return this.categorys.filter(item => {
        return item.name == this.currentCategoryName;
      })[0];
    }
  },
  data() {
    return {
      currentCategoryName: "",
      flag: false,
      categorys: [
        {
          icon: "el-icon-food",
          name: "美食",
          type: "food",
          detail: ["food1", "food2", "food3", "food4"]
        },
        {
          icon: "el-icon-coffee",
          name: "咖啡",
          type: "coffee",
          detail: ["coffee1", "coffee2", "coffee3", "coffee4"]
        },
        {
          icon: "el-icon-apple",
          name: "苹果",
          type: "apple",
          detail: ["apple1", "apple2", "apple3", "apple4"]
        },
        {
          icon: "el-icon-pear",
          name: "梨子",
          type: "pear",
          detail: ["pear1", "pear2", "pear3", "pear4"]
        },
        {
          icon: "el-icon-cherry",
          name: "樱桃",
          type: "cherry",
          detail: ["cherry1", "cherry2", "cherry3", "cherry4"]
        },
        {
          icon: "el-icon-orange",
          name: "橘子",
          type: "orange",
          detail: ["orange1", "orange2", "orange3", "orange4"]
        },
        {
          icon: "el-icon-grape",
          name: "葡萄",
          type: "grape",
          detail: ["grape1", "grape2", "grape3", "grape4"]
        },
        {
          icon: "el-icon-lollipop",
          name: "棒棒糖",
          type: "lollipop",
          detail: ["lollipop1", "lollipop2", "lollipop3", "lollipop4"]
        }
      ]
    };
  }
};
</script>

<style>
.c-menu {
  width: 230px;
  height: 425px;
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
  padding: 5px;
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
.card {
  display: inline-block;
  width: 400px;
  height: 375px;
  margin-top: -360px;
  margin-left: 228px;
}
</style>