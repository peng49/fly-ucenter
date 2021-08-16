<template>
  <div class="container-full">
    <div class="row">
      <div class="col-1">
        <a href="">文章管理</a>
      </div>
      <div class="col-9">
        <input
          type="text"
          class="form-control"
          placeholder="请输入标题"
          value=""
          required="true"
        />
      </div>
      <div class="coo-2"></div>
    </div>
    <div class="row">
      <div id="editor">1</div>
    </div>
  </div>
</template>

<script>
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/editor";

import helper from "prettify"

function CodeMirrorPlugin() {
  return {
    toHTMLRenderers: {
      codeBlock: function (node) {
        // helper.
        return [
          { type: "openTag", tagName: "pre", classNames: ["preClasses"] },
          { type: "openTag", tagName: "code", attributes: ["codeAttrs"] },
          { type: "html", content: node.literal },
          { type: "closeTag", tagName: "code" },
          { type: "closeTag", tagName: "pre" },
        ];
      },
    },
  };
}

export default {
  mounted() {
    new Editor({
      el: document.querySelector("#editor"),
      previewStyle: "vertical",
      height: "700px",
      initialValue: "content",
      plugins: [CodeMirrorPlugin],
    });
  },
};
</script>



<style>
</style>