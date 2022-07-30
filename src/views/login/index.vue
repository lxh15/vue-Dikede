<template>
  <div class="login-container">
    <div class="login-form">
      <el-form>
        <!-- 图片 -->
        <img src="../../assets/imgs/logo.595745bd.png" alt="">

        <!-- 账号 -->
        <el-form-item>
          <el-input v-model="code" type="text" placeholder="请输入账号">
            <template #prefix>
              <svg-icon icon-class="user" />
            </template>
          </el-input>
        </el-form-item>

        <!-- 密码 -->
        <el-form-item>
          <el-input v-model="password" type="password" placeholder="请输入密码">
            <template #prefix>
              <svg-icon icon-class="password" />
            </template>
            <template #suffix>
              <svg-icon icon-class="eye" />
            </template>
            <!-- <template #suffix>
              <svg-icon icon-class="eye-open" />
            </template> -->
          </el-input>
        </el-form-item>

        <!-- 验证码 -->
        <el-form-item>
          <el-input v-model="verification" placeholder="请输入验证码">
            <template #prefix>
              <i class="el-icon-message" />
            </template>
            <template #suffix>
              <img
                class="code-image"
                src="https://likede2-java.itheima.net/api/user-service/user/imageCode/Bfzxjx4OUMjfN0Gy4LvYGlWdJfIK5jbM"
                alt=""
              >
            </template>
          </el-input>
        </el-form-item>

        <!-- 提交按钮 -->
        <el-button class="login-btn" type="primary">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      code: '',
      password: '',
      verification: ''
    }
  },

  created() {},

  methods: {}
}
</script>

<style scoped lang="scss">
.login-container {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-image: url(../../assets/imgs/background.be4fae7d.png);
  background-repeat: no-repeat;
  background-size: cover;
  .el-form > img {
    position: absolute;
    width: 96px;
    height: 96px;
    top: -46px;
    left: 50%;
    margin-left: -48px;
  }
  .login-form {
    position: absolute;
    width: 518px;
    height: 388px;
    top: 50%;
    left: 50%;
    margin-top: -194px;
    margin-left: -259px;
    padding: 76px 35px 0;
    background: #fff;
    -webkit-box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    border-radius: 10px;
    .login-btn {
      width: 100%;
      height: 52px;
      background: linear-gradient(262deg, #2e50e1, #6878f0);
      opacity: 0.91;
      border-radius: 8px;
      color: #fff;
      text-shadow: 0 7px 22px #cfcfcf;
    }
  }
}
</style>
