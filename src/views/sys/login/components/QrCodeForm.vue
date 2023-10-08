<script lang="ts" setup>
import { useLoginState, LoginStateEnum } from "../hooks/useState";

const { loginState, setLoginState } = useLoginState();
const showQrCodeLogin = computed(() => unref(loginState) === LoginStateEnum.QR_CODE);
</script>

<template>
  <main class="qrcode-form" v-show="showQrCodeLogin">QrCodeForm</main>
</template>

<style lang="scss" scoped></style>
