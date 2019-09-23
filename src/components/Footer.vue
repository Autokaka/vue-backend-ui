<template>
  <el-row class="footer" :style="footer">
    <el-col :style="license" :span="12">MIT Licensed | Copyright © 2002 - 2019 Njtech Green Studio.</el-col>
    <el-col :style="struct" :span="12">Powered by Vue.js + ElementUI</el-col>
  </el-row>
</template>

<script>
export default {
  name: "Footer",
  props: {
    theme: {
      type: String,
      default: "#2196F3"
    },
    text_color: {
      type: String,
      default: "white"
    }
  },
  computed: {
    footer() {
      return {
        background: this.theme
      };
    },
    license() {
      return {
        "text-align": "center",
        color: this.text_color
      };
    },
    struct() {
      return {
        "text-align": "center",
        color: this.text_color
      };
    }
  }
};
</script>

<style scoped>
.footer {
  height: 2rem;
  line-height: 2rem;
}
</style>
