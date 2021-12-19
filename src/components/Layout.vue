<template>
  <el-row id="header">
    <el-col :span="24"><Header></Header></el-col>
  </el-row>
  <el-row id="app-conatiner">
    <el-col id="sidebar" :span="3"><Sidebar /></el-col>
    <el-col id="content" :span="21">
      <main style="padding: 0 0 0 10px">
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
body {
  font-family: PingFang SC, Hiragino Sans GB, Arial, Microsoft YaHei, Verdana,
    Roboto, Noto, Helvetica Neue, sans-serif !important;
  background: #f5f6f7 !important;
}
a {
  color: #349edf;
  text-decoration: none;
  cursor: pointer;
}
div#app-conatiner {
  margin-top: 48px;
}
#header {
  height: 48px;
  line-height: 48px;
  background: black;
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99999;
}
#header header {
  height: 100%;
  padding-left: 15px;
}
#sidebar ul.sidebar-menu {
  border: none !important;
  margin: 24px;
}
#content {
  margin-top: 24px;
  padding: 15px 0 0 15px;
  background: white;
}
</style>
