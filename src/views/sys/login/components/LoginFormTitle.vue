<script setup lang="ts">
import { useLoginState, LoginStateEnum } from "../useLogin";

const { getLoginState } = useLoginState();

const titleMap = {
  [LoginStateEnum.LOGIN]: "登录",
  [LoginStateEnum.REGISTER]: "注册",
  [LoginStateEnum.RESET_PASSWORD]: "重置密码",
  [LoginStateEnum.MOBILE]: "手机登录",
  [LoginStateEnum.QR_CODE]: "二维码登录"
};
const loginTitle = computed(() => titleMap[unref(getLoginState)]);
</script>

<template>
  <h2 class="mb-3 text-3xl font-bold">{{ loginTitle }}</h2>
</template>
