<template>
  <el-row>
    <el-col :span="24"><Header></Header></el-col>
  </el-row>
  <el-row>
    <el-col :span="3"><Sidebar /></el-col>
    <el-col :span="21">
      <router-view :key="key" />
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




