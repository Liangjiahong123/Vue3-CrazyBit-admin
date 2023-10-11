<script lang="ts" setup>
import { QrCode } from "@/components/QrCode";
import LoginFormTitle from "./LoginFormTitle.vue";
import { useLoginState, LoginStateEnum } from "../useLogin";

const { loginState, setLoginState } = useLoginState();
const showQrCodeLogin = computed(() => unref(loginState) === LoginStateEnum.QR_CODE);

const qrCodeUrl = "https://vben.vvbin.cn/login";
</script>

<template>
  <main class="qrcode-form" v-show="showQrCodeLogin">
    <LoginFormTitle />
    <QrCode :value="qrCodeUrl" :width="280" />
    <el-divider>扫码后点击"确认"即可登录</el-divider>
    <el-button
      plain
      size="large"
      class="w-full !rounded-lg mt-6"
      @click="setLoginState(LoginStateEnum.LOGIN)"
    >
      返回
    </el-button>
  </main>
</template>

<style lang="scss" scoped>
:deep(.el-divider__text) {
  font-size: 12px;
  color: #999;
  padding: 0 10px;
}
</style>
