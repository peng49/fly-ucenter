<template>
  <el-row class="sidebar" style="width:240px">
    <el-col>
      <el-menu
        text-color="#black"
        active-text-color="black"
        background-color="white"
        class="sidebar-menu"
        default-active="1"
        @open="handleOpen"
        @close="handleClose"
        route="true"
      >
        <el-menu-item index="1">
          <el-icon><icon-menu /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><location /></el-icon>
            <span>管理</span>
          </template>
          <el-menu-item index="/user/posts">内容管理</el-menu-item>
          <el-menu-item index="2-2">评论管理</el-menu-item>
          <el-menu-item index="2-3">消息管理</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>


<style scoped>
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { Location, Menu as IconMenu } from "@element-plus/icons";

export default defineComponent({
  components: {
    Location,
    IconMenu,
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
});
</script>