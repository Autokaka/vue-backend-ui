<template>
  <viewer :value="viewerText" />
</template>

<script>
import "tui-editor/dist/tui-editor-contents.css";
import "highlight.js/styles/github.css";
import { Viewer } from "@toast-ui/vue-editor";

export default {
  components: {
    viewer: Viewer
  },
  data() {
    return {
      viewerText: `# 关于\n 本项目是基于vue.js + ElementUI制作的通用型后台管理系统.`
    };
  }
};
</script>

<style scoped>
</style>
