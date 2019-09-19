<template>
  <el-row class="header" :style="headerStyle">
    <el-row class="ham">
      <el-button @click="reverseCollapse" :icon="hamIcon" circle></el-button>
    </el-row>
  </el-row>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Header",
  props: {
    theme: {
      type: String,
      default: "#2196F3"
    }
  },
  computed: {
    ...mapState(["aside"]),
    hamIcon() {
      if (this.aside.isCollapse) return "el-icon-s-unfold";
      else return "el-icon-s-fold";
    },
    headerStyle() {
      return {
        background: this.theme
      };
    }
  },
  methods: {
    ...mapActions(["reverseCollapse"])
  }
};
</script>

<style scoped>
/* 整体页面样式 */
.header {
  height: 4rem;
}
.ham {
  margin-left: 1rem;
  vertical-align: middle;
  line-height: 4rem;
}
</style>
