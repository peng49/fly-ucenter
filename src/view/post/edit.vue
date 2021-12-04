<template>
  <el-row>
    <el-col :span="2">
        <a href="">文章管理</a>
    </el-col>
    <el-col :span="20">
      <el-input v-model="post.title" placeholder="请输入文章标题" />
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24"><div id="editor"></div></el-col>
  </el-row>
</template>

<script>
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/editor";    


export default {
  data(){
    return {
      post:{title:""}
    }
  },
  mounted() {
    new Editor({
      el: document.querySelector("#editor"),
      previewStyle: "vertical",
      height: "800px",
      initialValue: "content"
    });
  },
};
</script>



<style scoped>
.el-row {
  margin-bottom: 20px;
}
</style>