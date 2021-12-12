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
    <el-col :span="24" style="min-height: 700px">
        <div id="editor"><textarea></textarea></div>
    </el-col>
  </el-row>  
</template>

<script>
import jQuery from "jquery";
const $ = (window.$ = window.jQuery = jQuery);

export default {
  data() {
    return {
      editor: null,
      post: { title: "" },
    };
  },
  mounted() {
    let _this = this;
    // https://blog.csdn.net/jdbdh/article/details/90314447
    $.getScript("/static/editor.md/editormd.min.js", function () {
      _this.editor = window.editormd("editor", {
        path: "/static/editor.md/lib/",
        saveHTMLToTextarea: true,
        height: "100%",
        watch: true,
        placeholder:'请输入内容'
      });
    });
    //加载css
    $("head").append(
      $('<link rel="stylesheet" type="text/css" />').attr(
        "href",
        "/static/editor.md/css/editormd.min.css"
      )
    );
  },
};
</script>



<style scoped>
.el-row {
  margin-bottom: 20px;
}
</style>