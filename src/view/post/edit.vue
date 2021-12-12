<template>
  <el-row>
    <el-col :span="2">
        <a href="">文章管理</a>
    </el-col>
    <el-col :span="20">
      <el-input v-model="post.title" placeholder="请输入文章标题" />
    </el-col>
  </el-row>
  <div id="editor" style="min-height:700px"><textarea></textarea></div>
</template>

<script>
import jQuery from "jquery";
const $ = window.$ = window.jQuery = jQuery

export default {
  data() {
    return {
      post: { title: "" },
    };
  },
  mounted() {
    // https://blog.csdn.net/jdbdh/article/details/90314447
    $.getScript("/static/editor.md/editormd.min.js",function(s){
                console.log(s)
                // eslint-disable-next-line no-undef
                editormd('editor',{
                  path:'/static/editor.md/lib/',
                   saveHTMLToTextarea: true,
                height: "100%",
                watch: true,
                })
    })
    //加载css
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/static/editor.md/css/editormd.min.css') );

  },
};
</script>



<style scoped>
.el-row {
  margin-bottom: 20px;
}
</style>