<template>
  <el-row>
    <el-col :span="2">
      <a href="">文章管理</a>
    </el-col>
    <el-col :span="20">
      <el-input v-model="post.title" placeholder="请输入文章标题" />
    </el-col>
  </el-row>
  <el-row style="height: 85vh">
    <el-col :span="24">
        <div id="editor"><textarea>内容</textarea></div>
    </el-col>
  </el-row>  
</template>

<style>
.editormd-menu li a::after{
  content: attr(title);
  font-size: 12px;
  display: block;
}
</style>

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
        placeholder:'请输入内容',
        onload:function(){
          //重写样式
          let styleCode = '';

          `{
              content: '内容';
              display: block;
              font-size: 12px;
              font-weight: 100;
              margin-top: 14px;
          }`
          console.log($('.editormd-menu li a'))
          let icons = $('.editormd-menu li a')
          icons.each(i => {
            let cls = icons.eq(i).find('i').attr('class')
            let title = icons.eq(i).attr('title')
            let name = icons.eq(i).find('i').attr('name')
            console.log('.editormd-menu li a i.'+cls.replace(' ','.')+'[name='+name+']::after',title,styleCode)
          })

        }
      });
    });
    //加载css
    $("head").append('<link rel="stylesheet" type="text/css" href="/static/editor.md/css/editormd.min.css" />');
  },
};
</script>



<style scoped>
.el-row {
  margin-bottom: 20px;
}
</style>