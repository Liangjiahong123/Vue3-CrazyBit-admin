<script lang="ts" setup>
import LoginFormTitle from "./LoginFormTitle.vue";
import { useLoginState, LoginStateEnum, useFormRules } from "../useLogin";

const { getLoginState, setLoginState } = useLoginState();
const showMobileLogin = computed(() => unref(getLoginState) === LoginStateEnum.MOBILE);

const formData = reactive({
  mobile: "",
  code: ""
});

const { getFormRules } = useFormRules();
</script>

<template>
  <main class="mobile-form" v-if="showMobileLogin">
    <LoginFormTitle class="enter-x" />
    <el-form :model="formData" :rules="getFormRules" class="enter-x p-4">
      <el-form-item prop="mobile" class="enter-x">
        <el-input v-model="formData.mobile" maxlength="11" size="large" placeholder="手机号码" />
      </el-form-item>
      <el-form-item prop="code" class="enter-x">
        <el-input v-model="formData.code" size="large" placeholder="短信验证码" />
        <el-button size="large" class="ml-4" plain>短信验证码</el-button>
      </el-form-item>

      <el-button type="primary" size="large" class="enter-x w-full !rounded-lg mt-6">
        <span class="!text-16px !tracking-4px">登录</span>
      </el-button>
      <el-button
        size="large"
        class="enter-x w-full !rounded-lg mt-6"
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
