<template>
  <el-card class="card" shadow="hover">
    <el-row class="title">系统登录</el-row>
    <!-- 输入框 -->
    <el-input class="input" v-model="input.id" placeholder="账号" clearable>
      <i slot="prefix" class="el-input__icon el-icon-user"></i>
    </el-input>
    <el-input class="input" v-model="input.password" placeholder="密码" clearable show-password>
      <i slot="prefix" class="el-input__icon el-icon-lock"></i>
    </el-input>
    <!-- 按钮组 -->
    <el-row class="btn_confirm">
      <el-button @click="onLoginClick" type="primary" size="medium">登录</el-button>
    </el-row>
  </el-card>
</template>

<script>
export default {
  props: {
    clientHeight: 0
  },
  data() {
    return {
      input: {
        id: "",
        password: "",
        confirm: ""
      }
    };
  },
  mounted() {
    this.setBody();
  },
  beforeDestroy() {
    document.querySelector("body").removeAttribute("style");
  },
  watch: {
    clientHeight: function() {
      this.setBody();
    }
  },
  methods: {
    setBody() {
      document.querySelector("body").setAttribute(
        "style",
        ` background-color: #0f9d58;
          display: flex;
          justify-content: center;
          align-items: center;
          height: ${this.clientHeight}px`
      );
    },
    onLoginClick() {
      this.$router.push({ path: "/admin" });
    }
  }
};
</script>

<style scoped>
.card {
  padding: 0.5rem;
  width: 25rem;
  background: hsla(0, 100%, 100%, 0.9);
  border: 0;
}
.title {
  font-weight: bolder;
  text-align: center;
  margin-bottom: 0.5rem;
}
.input {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.btn_confirm {
  text-align: right;
  margin-top: 0.5rem;
}
</style>
