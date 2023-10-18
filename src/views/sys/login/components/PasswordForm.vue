<script lang="ts" setup>
import LoginFormTitle from "./LoginFormTitle.vue";
import { useLoginState, LoginStateEnum, useFormVaild, useFormRules } from "../useLogin";

const { getLoginState, setLoginState } = useLoginState();
const showPwdLogin = computed(() => unref(getLoginState) === LoginStateEnum.LOGIN);

const formRef = ref();
const { validForm } = useFormVaild(formRef);

const formData = reactive({
  account: "crazybit",
  password: "123456",
  rememberMe: false
});

const { getFormRules } = useFormRules();

const handleLogin = async () => {
  const valid = await validForm();
  if (!valid) return;

  try {
    console.log("登录成功");
  } catch (error) {
    console.log("登录失败");
  }
};
</script>

<template>
  <main v-show="showPwdLogin" class="password-form">
    <LoginFormTitle class="enter-x" />
    <el-form
      :model="formData"
      :rules="getFormRules"
      class="enter-x p-4"
      ref="formRef"
      @keypress.enter="handleLogin"
    >
      <el-form-item prop="account" class="enter-x">
        <el-input size="large" placeholder="账号" v-model="formData.account" />
      </el-form-item>
      <el-form-item prop="password" class="enter-x">
        <el-input
          size="large"
          type="password"
          placeholder="密码"
          show-password
          v-model="formData.password"
        />
      </el-form-item>

      <el-row class="enter-x">
        <el-col :span="12" class="flex items-center">
          <el-checkbox v-model="formData.rememberMe" label="记住我" />
        </el-col>
        <el-col :span="12" class="text-right">
          <el-button
            class="text-sm"
            type="primary"
            link
            @click="setLoginState(LoginStateEnum.RESET_PASSWORD)"
          >
            忘记密码?
          </el-button>
        </el-col>
      </el-row>

      <el-button
        type="primary"
        size="large"
        class="w-full !rounded-lg mt-6 enter-x"
        @click="handleLogin"
      >
        <span class="!text-16px !tracking-4px">登录</span>
      </el-button>

      <el-row :gutter="20" class="mt-6 enter-x">
        <el-col :span="8">
          <el-button plain class="w-full" @click="setLoginState(LoginStateEnum.MOBILE)">
            手机登录
          </el-button>
        </el-col>
        <el-col :span="8">
          <el-button plain class="w-full" @click="setLoginState(LoginStateEnum.QR_CODE)">
            二维码登录
          </el-button>
        </el-col>
        <el-col :span="8">
          <el-button plain class="w-full" @click="setLoginState(LoginStateEnum.REGISTER)">
            注册
          </el-button>
        </el-col>
      </el-row>
    </el-form>
  </main>
</template>
