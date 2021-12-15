<template>
  <el-row>
    <el-col :span="2">
      <a href="">文章管理</a>
    </el-col>
    <el-col :span="20">
      <el-input v-model="post.title" placeholder="请输入文章标题" />
    </el-col>
  </el-row>
  <el-row style="height: 80vh">
    <el-col :span="24">
      <div id="editor"><textarea>内容</textarea></div>
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
        placeholder: "请输入内容",
        onload: function () {
          //重写样式
          let styleCode = `.editormd-menu li a i::after {
            display: block;
            font-size: 12px;
            font-weight: 100;
            margin-top: 14px;
          }
          .editormd-menu li a i.fa.fa-eye[name=watch]::after {
            content: '关闭预览';
          }`;

          let style = document.createElement("style");

          let icons = $(".editormd-menu li a");
          icons.each((i) => {
            let cls = icons.eq(i).find("i").attr("class").replace(" ", ".");
            let title = icons.eq(i).attr("title");
            let name = icons.eq(i).find("i").attr("name");

            let map = {
              'undo': "撤销",
              'redo': "重做",
              'list-ul': "无序",
              'list-ol': "有序",
              'preformatted-text': "代码块",
              'code-block': "代码块",          
              'image': "图片",
              'ucwords': "大写",
              'uppercase': "大写",
              'lowercase': "小写",
              'emoji': "表情",
              'html-entities': "实体",
              'watch': "关闭",
              'preview': "预览",
              'fullscreen': "全屏",
              'info': "关于",
            };
            title = map[name] ? map[name] : title;

            styleCode += `.editormd-menu li a i.${cls}[name=${name}]::after{content:'${title}'}`;
          });

          style.innerHTML = styleCode;
          $("head").append(style);
          $(window).resize()
        },
      });
    });
    //加载css
    $("head").append(
      '<link rel="stylesheet" type="text/css" href="/static/editor.md/css/editormd.min.css" />'
    );
  },
};
</script>



<style scoped>
.el-row {
  margin-bottom: 20px;
}
</style>