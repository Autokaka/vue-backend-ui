<template>
  <div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="onOpen"
      @close="onClose"
      :collapse="isCollapse"
    >
      <el-menu-item class="ham" @click="isCollapse = !isCollapse" v-model="isCollapse">
        <i class="el-icon-menu"></i>
      </el-menu-item>
      <el-menu-item index="0">
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
export default {
  data() {
    return {
      isCollapse: true
    };
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
.ham {
  text-align: center;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
