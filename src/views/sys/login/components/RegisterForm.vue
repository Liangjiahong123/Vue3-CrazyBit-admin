<script lang="ts" setup>
import { useLoginState, LoginStateEnum } from "../hooks/useState";

const { loginState, setLoginState } = useLoginState();
const showRegsiter = computed(() => unref(loginState) === LoginStateEnum.REGISTER);
</script>

<template>
  <main class="register-form" v-show="showRegsiter">RegisterForm</main>
</template>

<style lang="scss" scoped></style>
