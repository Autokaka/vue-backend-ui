<template>
  <router-view v-if="layoutNull" />
  <el-container v-else>
    <!-- 管理界面基础布局(admin) -->
    <el-container v-if="layout.admin">
      <el-aside>
        <Aside></Aside>
      </el-aside>
      <el-container>
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
      <router-view />
    </el-container>
  </el-container>
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
      layout: {
        admin: false,
        standard: false,
        empty: false
      }
    };
  },
  beforeUpdate() {
    this.switchLayout(this.$route.meta.layout);
    this.layoutNull = false;
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
    }
  }
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
