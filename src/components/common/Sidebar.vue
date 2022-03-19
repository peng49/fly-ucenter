<template>
  <div>
    <div style="text-align: center">
      <router-link :to="{path:'/post/edit'}">
        <el-button type="danger" round>写文章</el-button>
      </router-link>      
    </div>
    <el-menu
      text-color="#black"
      active-text-color="black"
      background-color="#f5f6f7"
      class="sidebar-menu"
      default-active="2"
      @open="handleOpen"
      @close="handleClose"
      router
      style="height: 100%"
    >
      <el-menu-item index="/">
        <el-icon :style="{ color: iconColor }"><home-filled /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-sub-menu index="/">
        <template #title>
          <el-icon :style="{ color: iconColor }"><trend-charts /></el-icon>
          <span>管理</span>
        </template>
        <el-menu-item index="/user/posts">内容管理</el-menu-item>
        <el-menu-item index="/">评论管理</el-menu-item>
        <el-menu-item index="/">消息管理</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>


<style scoped>
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { TrendCharts, HomeFilled } from "@element-plus/icons";

export default defineComponent({
  components: {
    TrendCharts,
    HomeFilled,
  },
  data() {
    return {
      iconColor: "#909399",
    };
  },
  setup() {
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return {
      handleOpen,
      handleClose,
    };
  },
  methods: {
    open(url) {
      window.open(url);
    },
  },
});
</script>