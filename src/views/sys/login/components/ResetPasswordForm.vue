<script lang="ts" setup>
import LoginFormTitle from "./LoginFormTitle.vue";
import { useLoginState, LoginStateEnum } from "../useLogin";

const { loginState, setLoginState } = useLoginState();
const showResetPwd = computed(() => unref(loginState) === LoginStateEnum.RESET_PASSWORD);

const formData = reactive({
  account: "",
  mobile: "",
  code: ""
});
</script>

<template>
  <main class="reset-pwd-form" v-show="showResetPwd">
    <LoginFormTitle />
    <el-form class="p-4">
      <el-form-item name="account">
        <el-input size="large" placeholder="账号" v-model="formData.account" />
      </el-form-item>
      <el-form-item name="mobile">
        <el-input size="large" placeholder="手机号码" v-model="formData.mobile" />
      </el-form-item>
      <el-form-item name="code">
        <el-input size="large" placeholder="短信验证码" v-model="formData.code" />
        <el-button size="large" class="ml-4" plain>短信验证码</el-button>
      </el-form-item>

      <el-button type="primary" size="large" class="w-full !rounded-lg mt-6">
        <span class="!text-16px !tracking-4px">重置</span>
      </el-button>
      <el-button
        size="large"
        class="w-full !rounded-lg mt-6"
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
