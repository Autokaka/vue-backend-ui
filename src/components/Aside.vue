<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical"
      @open="onOpen"
      @close="onClose"
      :collapse="aside.isCollapse"
    >
      <el-menu-item style="margin-top:0.3rem;" index="0">
        <i class="el-icon-document"></i>
        <span slot="title">导航一</span>
      </el-menu-item>
      <el-menu-item index="1">
        <i class="el-icon-setting"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-document"></i>
        <span slot="title">导航五</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <span slot="title">导航六</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      activeIndex: undefined
    };
  },
  computed: {
    ...mapState(["aside"])
  },
  methods: {
    onOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    onClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
}
</style>
