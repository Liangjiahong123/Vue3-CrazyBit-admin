<script lang="ts" setup>
import LoginFormTitle from "./LoginFormTitle.vue";
import { useLoginState, LoginStateEnum, useFormRules } from "../useLogin";

const { getLoginState, setLoginState } = useLoginState();
const showRegsiter = computed(() => unref(getLoginState) === LoginStateEnum.REGISTER);

const formData = reactive({
  account: "",
  mobile: "",
  code: "",
  password: "",
  confirmPassword: "",
  policy: false
});

const { getFormRules } = useFormRules(formData);
</script>

<template>
  <main class="register-form" v-if="showRegsiter">
    <LoginFormTitle class="enter-x" />

    <el-form :model="formData" :rules="getFormRules" class="p-4 enter-x">
      <el-form-item prop="account" class="enter-x">
        <el-input size="large" placeholder="账号" v-model="formData.account" />
      </el-form-item>

      <el-form-item prop="mobile" class="enter-x">
        <el-input size="large" placeholder="手机号码" v-model="formData.mobile" />
      </el-form-item>

      <el-form-item prop="code" class="enter-x">
        <el-input size="large" placeholder="短信验证码" v-model="formData.code" />
        <el-button size="large" class="ml-4" plain>短信验证码</el-button>
      </el-form-item>

      <el-form-item prop="password" class="enter-x">
        <StrengthCompute size="large" v-model:value="formData.password" placeholder="密码" />
      </el-form-item>

      <el-form-item prop="confirmPassword" class="enter-x">
        <el-input
          size="large"
          type="password"
          placeholder="确认密码"
          show-password
          v-model="formData.confirmPassword"
        />
      </el-form-item>

      <el-form-item prop="policy" class="enter-x">
        <el-checkbox v-model="formData.policy" label="我同意xxx隐私政策" />
      </el-form-item>

      <el-button type="primary" size="large" class="w-full !rounded-lg mt-4 enter-x">
        <span class="!text-16px !tracking-4px">注册</span>
      </el-button>
      <el-button
        size="large"
        class="w-full !rounded-lg mt-6 enter-x"
        plain
        @click="setLoginState(LoginStateEnum.LOGIN)"
      >
        <span class="!text-16px !tracking-4px">返回</span>
      </el-button>
    </el-form>
  </main>
</template>

<style lang="scss" scoped>
:deep(.el-form-item__content) {
  flex-wrap: nowrap;
}
</style>
