<template>
  <div class="login-container">
    <div class="logo" />
    <div class="login-form">
      <div class="box">
        <h1>手机号登陆</h1>
        <el-form ref="form" :rules="rules" :model="form">
          <el-form-item prop="phone">
            <el-input
              v-model="form.phone"
              placeholder="请输入手机号"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="form.password"
              show-password
              placeholder="请输入密码"
            />
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="form.isAgree">用户平台使用协议</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        phone: '',
        password: '',
        isAgree: false
      },
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1[3-9]\d{9}$/, trigger: 'blur', message: '手机号格式不正确' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style lang="scss">
.login-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  // background-color: aquamarine;

  .logo {
    flex: 3;
    background: url(../../assets/common/login_back.png) no-repeat center/cover;
    border-radius: 0 60px 0 0;
  }

  .login-form {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;

    .box {
      width: 400px;
      height: 300px;
      // background-color: #fff;
      .el-button{
        width: 100%;
      }
    }
  }
}
</style>
