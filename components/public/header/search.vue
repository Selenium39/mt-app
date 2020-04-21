<template>
  <div>
    <el-row>
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" />
      </el-col>
      <el-col :span="8" class="center">
        <el-input
          v-model="search"
          @focus="focus"
          @blur="blur"
          @keyup.enter.native="searchHandler"
          placeholder="搜索商家或地点"
        >
          <el-button slot="append" icon="el-icon-search" id="search" @click="searchHandler"></el-button>
        </el-input>
        <el-card v-if="isSearch" class="box-card" id="search-box">
          <dl v-if="isHistorySearch">
            <dt class="search-title" v-show="history">历史搜索</dt>
            <el-tag
              v-for="search in historySearchList"
              :key="search.name"
              closable
              :type="search.type"
              style="margin-right:5px; margin-bottom:5px;"
            >{{search.name}}</el-tag>
            <dt class="search-title">热门搜索</dt>
            <dd v-for="search in hotSearchList" :key="search.id">{{search}}</dd>
          </dl>
          <dl v-if="isSearchList">
            <dd v-for="search in searchList" :key="search.id">{{search}}</dd>
          </dl>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import RandomUtil from "../../../utils/randomUtil";
import Store from "../../../utils/store";
export default {
  data() {
    return {
      search: "", //当前输入框的值
      isFocus: false, //是否聚焦
      hotSearchList: ["暂无热门搜索"], //热门搜索数据
      historySearchList: [], //历史搜索数据
      searchList: ["暂无数据"], //搜索返回数据,
      history: false,
      types: ["", "success", "info", "warning", "danger"] //搜索历史tag式样
    };
  },
  methods: {
    focus() {
      this.isFocus = true;
      this.historySearchList =
        Store.loadHistory() == null ? [] : Store.loadHistory();
      this.history = this.historySearchList.length == 0 ? false : true;
    },
    blur() {
      this.isFocus = false;
    },
    searchHandler() {
      //随机生成搜索历史tag式样
      let n = RandomUtil.getRandomNumber(0, 5);

      let exist =
        this.historySearchList.filter(value => {
          return value.name == this.search;
        }).length == 0
          ? false
          : true;
      if (!exist) {
        this.historySearchList.push({ name: this.search, type: this.types[n] });
        Store.saveHistory(this.historySearchList);
      }
      this.history = this.historySearchList.length == 0 ? false : true;
    }
  },
  computed: {
    isHistorySearch() {
      return this.isFocus && !this.search;
    },
    isSearchList() {
      return this.isFocus && this.search;
    },
    isSearch() {
      return this.isFocus;
    }
  }
};
</script>

<style>
.left {
  margin-left: 200px;
}
.center {
  margin-top: 15px;
  margin-left: 200px;
}
#search {
  background-color: #ffc300;
  border-radius: 0%;
}
.search-title {
  color: #bdbaba;
  font-size: 15px;
  margin-bottom: 5px;
}
#search-box {
  width: 555px;
  margin-top: -20px;
  padding-bottom: 20px;
}
</style>