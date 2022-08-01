<template>
  <div class="login-container">
    <div class="login-form">
      <el-form :model="loginFrom" :rules="loginFormRules" ref="from">
        <!-- 图片 -->
        <img src="../../assets/imgs/logo.595745bd.png" alt="" />

        <!-- 账号 -->
        <el-form-item prop="name">
          <el-input
            v-model.trim="loginFrom.loginName"
            type="text"
            placeholder="请输入账号"
          >
            <template #prefix>
              <svg-icon icon-class="user" />
            </template>
          </el-input>
        </el-form-item>

        <!-- 密码 -->
        <el-form-item class="pass_icon" prop="password">
          <el-input
            ref="inp"
            v-model.trim="loginFrom.password"
            :type="isShow ? 'text' : 'password'"
            placeholder="请输入密码"
          >
            <template #prefix>
              <svg-icon icon-class="password" />
            </template>
            <!-- 右边icon -->
            <!-- <template #suffix>
              <svg-icon icon-class="eye-open" />
            </template> -->
            <template #suffix>
              <i @click="isShow = !isShow" v-if="!isShow">
                <svg-icon icon-class="eye" />
              </i>
              <i @click="isShow = !isShow" v-else>
                <svg-icon icon-class="eye-open" />
              </i>
            </template>
          </el-input>
        </el-form-item>

        <!-- 验证码 -->
        <el-form-item prop="code">
          <el-input v-model.trim="loginFrom.code" placeholder="请输入验证码">
            <template #prefix>
              <i class="el-icon-message" />
            </template>
            <template #suffix>
              <img
                @click="getImgCode"
                class="code-image"
                :src="`http://likede2-admin.itheima.net/likede${img}`"
                alt=""
              />
            </template>
          </el-input>
        </el-form-item>

        <!-- 提交按钮 -->
        <el-button class="login-btn" type="primary" @click="getToken(loginFrom)"
          >登录</el-button
        >
      </el-form>
    </div>
  </div>
</template>

<script>
import { imageCode } from '@/api/user'
import { createNamespacedHelpers } from 'vuex'
const { mapActions: mapUserActions } = createNamespacedHelpers('user')
export default {
  name: 'Login',
  data() {
    return {
      isShow: false,
      loginFrom: {
        loginName: 'admin',
        password: 'admin',
        code: '',
        loginType: 0,
        clientToken: 123
      },
      loginFormRules: {
        name: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      },
      img: ''
    }
  },

  created() {
    this.imageCode()
  },

  methods: {
    async imageCode() {
      try {
        // 传入随机数
        this.loginFrom.clientToken = Math.floor(Math.random() * 100)
        const res = await imageCode(this.loginFrom.clientToken)
        // console.log(res)
        // 把获取的验证码图片赋值给变量
        this.img = res.config.url
      } catch (error) {}
    },
    getImgCode() {
      this.imageCode()
    },
    ...mapUserActions(['getToken'])
  }
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
    .el-form-item {
      width: 450px;
      height: 60px;
      .el-input,
      .el-input--prefix,
      ::v-deep .el-input__inner {
        height: 50px;
        right: 0;
      }
      ::v-deep .el-input__suffix {
        cursor: pointer;
        right: 0;
      }
      ::v-deep .el-input__prefix {
        margin-top: 5px;
        margin-left: 5px;
      }
    }
    ::v-deep .pass_icon {
      cursor: pointer;
      .el-input__suffix {
        margin-top: 8px;
        margin-right: 10px;
      }
    }
  }
}
</style>
