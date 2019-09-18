<template>
  <router-view v-if="layoutNull" />
  <el-row v-else>
    <!-- 管理界面基础布局(admin) -->
    <el-container v-if="layout.admin">
      <el-aside :style="aside">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header :style="header">
          <Header></Header>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>
          <Footer></Footer>
        </el-footer>
      </el-container>
    </el-container>
    <!-- 标准界面基础布局(standard) -->
    <el-container v-if="layout.standard">
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
    <!-- 空布局(empty) -->
    <el-container v-if="layout.empty">
      <router-view :clientHeight="clientHeight" />
    </el-container>
  </el-row>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Aside from "./components/Aside";
export default {
  components: {
    Header,
    Footer,
    Aside
  },
  data() {
    return {
      layoutNull: true,
      clientHeight: 0,
      layout: {
        admin: false,
        standard: false,
        empty: false
      }
    };
  },
  mounted() {
    if (this.clientHeight == 0) this.mountHeight();
    this.setBodyHeight(this.clientHeight);
  },
  beforeDestroy() {
    document.querySelector("body").removeAttribute("style");
  },
  beforeUpdate() {
    this.switchLayout(this.$route.meta.layout);
    this.layoutNull = false;
  },
  computed: {
    aside() {
      return {
        width: `auto`,
        height: `${this.clientHeight}px`
      };
    },
    header() {
      return {
        height: `auto`,
        padding: 0
      };
    }
  },
  watch: {
    clientHeight: function() {
      this.setBodyHeight(this.clientHeight);
    }
  },
  methods: {
    resetLayout() {
      for (let key of Object.keys(this.layout)) {
        this.layout[key] = false;
      }
    },
    switchLayout(layoutName) {
      this.resetLayout();
      for (let key of Object.keys(this.layout)) {
        if (layoutName === key) {
          this.layout[key] = true;
          return;
        }
      }
      this.layout.empty = true;
    },
    mountHeight() {
      this.clientHeight = `${document.documentElement.clientHeight}`;
      window.onresize = () => {
        this.clientHeight = `${document.documentElement.clientHeight}`;
      };
    },
    setBodyHeight(height) {
      document
        .querySelector("body")
        .setAttribute("style", `height: ${height}px`);
    }
  }
};
</script>

<style scoped>
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>
