<script lang="ts" setup>
import { useLoginState, LoginStateEnum } from "../hooks/useState";

const { loginState, setLoginState } = useLoginState();
const showResetPwd = computed(() => unref(loginState) === LoginStateEnum.RESET_PASSWORD);
</script>

<template>
  <main class="reset-pwd-form" v-show="showResetPwd">ForgetPwdForm</main>
</template>

<style lang="scss" scoped></style>
