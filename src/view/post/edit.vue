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
import "codemirror/lib/codemirror.css"
import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";

import { Editor } from "@toast-ui/editor";

const CodeMirror = require("codemirror/lib/codemirror");
import "codemirror/mode/javascript/javascript.js";

let globalContainer = document.createElement("textarea");
globalContainer.setAttribute("id", "code-mirror-container");
globalContainer.innerHTML = "console.log('123')\nalert(666)"
document.body.appendChild(globalContainer);
window.codeEditor = CodeMirror.fromTextArea(globalContainer);
window.codeEditor.on('change',function(cm,obj){
    console.log(cm,obj)
})

console.log(CodeMirror(document.body, {
  value: "function myScript(){return 100;}\n",
  mode:  "javascript"
}));

function CodeMirrorPlugin() {
  return {
    toHTMLRenderers: {
      codeBlock: function (node) {
        globalContainer.value = node.literal;      
        console.log(window.codeEditor)
        console.log(globalContainer.value);

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