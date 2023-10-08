<script lang="ts" setup>
import { useLoginState, LoginStateEnum } from "../hooks/useState";

const { loginState, setLoginState } = useLoginState();
const showMobileLogin = computed(() => unref(loginState) === LoginStateEnum.MOBILE);

const formData = reactive({
  mobile: "",
  code: ""
});
</script>

<template>
  <main class="mobile-form" v-show="showMobileLogin">
    <h2 class="mb-3 text-3xl font-bold">手机登录</h2>
    <el-form class="p-4">
      <el-form-item name="mobile">
        <el-input size="large" placeholder="手机号码" v-model="formData.mobile" />
      </el-form-item>
      <el-form-item name="code">
        <el-input size="large" placeholder="短信验证码" v-model="formData.code" />
        <el-button size="large" class="ml-4" plain>短信验证码</el-button>
      </el-form-item>

      <el-button type="primary" size="large" class="w-full !rounded-lg mt-6">
        <span class="!text-16px !tracking-4px">登录</span>
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
