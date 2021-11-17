<template>
  <el-row id="header">
    <el-col :span="24"><Header></Header></el-col>
  </el-row>
  <el-row id="app-conatiner">
    <el-col id="sidebar" :span="3"><Sidebar /></el-col>
    <el-col :span="21">
      <main style="padding: 24px 0 0 24px">
        <router-view :key="key" />
      </main>
    </el-col>
  </el-row>
</template>

<script>
import Header from "./common/Header.vue";
import Sidebar from "./common/Sidebar.vue";

export default {
  name: "Layout",
  components: {
    Header,
    Sidebar,
  },
  computed: {
    key() {
      console.log(this.$route);
      return this.$route.path;
    },
  },
};
</script>
<style>
body{
  background: #f5f6f7 !important;
}
#app {
  padding-top: 48px;
}
#header {
  height: 48px;
  background: black;
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
