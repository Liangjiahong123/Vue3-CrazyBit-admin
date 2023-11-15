<script lang="ts" setup>
import LoginFormTitle from "./LoginFormTitle.vue";
import { useLoginState, LoginStateEnum } from "../useLogin";
import { useI18n } from "@/hooks/web/useI18n";

const { getLoginState, setLoginState } = useLoginState();
const { t } = useI18n();
const showQrCodeLogin = computed(() => unref(getLoginState) === LoginStateEnum.QR_CODE);
const qrCodeUrl = "https://vben.vvbin.cn/login";
</script>

<template>
  <main class="qrcode-form" v-show="showQrCodeLogin">
    <LoginFormTitle class="enter-x" />
    <QrCode :value="qrCodeUrl" :width="280" class="enter-x" />
    <el-divider class="enter-x">{{ t("sys.login.scanTip") }}</el-divider>
    <el-button
      plain
      size="large"
      class="enter-x w-full !rounded-lg mt-6"
      @click="setLoginState(LoginStateEnum.LOGIN)"
    >
      {{ t("sys.login.backButton") }}
    </el-button>
  </main>
</template>

<style lang="scss" scoped>
:deep(.el-divider__text) {
  padding: 0 10px;
  font-size: 12px;
  color: #999;
}
</style>
