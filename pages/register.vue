<template>
  <div>
    <el-container>
      <el-header>
        <div style="height:60px;width:100%;background-color:#f8f8f8">
          <el-row>
            <el-col :span="2" :offset="5">
              <el-image src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"></el-image>
            </el-col>
            <el-col :span="5" :offset="7">
              <p style="margin-top:10px;">
                已有美团账号?
                <el-button type="warning" size="small">登录</el-button>
              </p>
            </el-col>
          </el-row>
        </div>
      </el-header>
      <el-main>
        <div style="width:500px;margin:0 auto;">
          <el-form :model="registerForm" :rules="rules" label-width="90px">
            <el-form-item label="昵称" prop="nickname">
              <el-input v-model="registerForm.nickname"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="registerForm.email"></el-input>
              <el-button type="info" style="margin-top:10px;">获取邮箱验证码</el-button>
              <span>{{statusMsg}}</span>
            </el-form-item>
            <el-form-item label="邮箱验证码" prop="emailCode">
              <el-input v-model="registerForm.emailCode"></el-input>
            </el-form-item>
            <el-form-item label="创建密码" prop="password">
              <el-input v-model="registerForm.password"></el-input>
            </el-form-item>
            <el-form-item>
              <password-stronger v-model="registerForm.password" style="padding-top: 10px;"></password-stronger>
            </el-form-item>
            <el-form-item label="确认密码" prop="password1">
              <el-input v-model="registerForm.password1"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="warning">注册</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-main>
      <el-footer>
        <hr />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Blank from "../layouts/blank";
import PasswordStronger from "../components/register/passwordStronger";
export default {
  components: {
    PasswordStronger
  },
  //在page中通过layout指定布局,如果不指定布局，则使用default.vue
  layout: "blank",
  data() {
    return {
      statusMsg: "",
      registerForm: {
        nickname: "",
        email: "",
        emailCode: "",
        password: "",
        password1: ""
      },
      rules: {
        nickname: [
          {
            required: true,
            type: "string",
            message: "请输入昵称",
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            type: "email",
            message: "请输入邮箱",
            trigger: "blur"
          }
        ],
        emailCode: [
          {
            required: true,
            type: "string",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "创建密码",
            trigger: "blur"
          }
        ],
        passowrd1: [
          { required: true, message: "确认密码", trigger: "blur" },
          {
            validator: (rule, value, cb) => {
              if (value === "") {
                cb(new Error("密码不能为空"));
              } else if (value !== this.registerForm.password) {
                cb(new Error("两次密码输入不一致"));
              } else {
                cb();
              }
            },
            trigger: "blur"
          }
        ]
      }
    };
  }
};
</script>

<style>
</style>