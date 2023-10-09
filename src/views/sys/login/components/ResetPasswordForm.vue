<script lang="ts" setup>
import LoginFormTitle from "./LoginFormTitle.vue";
import { useLoginState, LoginStateEnum } from "../useLogin";

const { loginState, setLoginState } = useLoginState();
const showResetPwd = computed(() => unref(loginState) === LoginStateEnum.RESET_PASSWORD);
</script>

<template>
  <main class="reset-pwd-form" v-show="showResetPwd"><LoginFormTitle /></main>
</template>

<style lang="scss" scoped></style>
../hooks/useLogin
