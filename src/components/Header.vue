<template>
  <el-row class="page" :style="headerStyle"></el-row>
</template>

<script>
export default {
  name: "Header",
  props: {
    icon: String,
    title: String,
    is_online: Boolean,
    theme: {
      type: String,
      default: "#2196F3"
    }
  },
  computed: {
    headerStyle() {
      return {
        background: this.theme
      };
    }
  },
  methods: {
    onLogout() {
      // 重定向到登录页面
      this.$router.push({ path: "/login" });
    }
  }
};
</script>

<style scoped>
/* 整体页面样式 */
.page {
  height: 4rem;
}
/* 标题样式 */
.title {
  color: white !important;
  font-size: 1.3rem;
  height: 4rem;
  line-height: 4rem;
  margin-left: 1rem;
}
/* 退出登录按钮样式 */
.logout {
  float: right;
  margin: 0.7rem;
}
</style>
