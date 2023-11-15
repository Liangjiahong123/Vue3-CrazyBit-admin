<script setup lang="ts">
import { useLoginState, LoginStateEnum } from "../useLogin";
import { useI18n } from "@/hooks/web/useI18n";

const { getLoginState } = useLoginState();
const { t } = useI18n();

const loginTitle = computed(() => {
  const titleMap = {
    [LoginStateEnum.LOGIN]: t("sys.login.passwordFormTitle"),
    [LoginStateEnum.REGISTER]: t("sys.login.registerFormTitle"),
    [LoginStateEnum.RESET_PASSWORD]: t("sys.login.resetFormTitle"),
    [LoginStateEnum.MOBILE]: t("sys.login.mobileFormTitle"),
    [LoginStateEnum.QR_CODE]: t("sys.login.qrCodeFormTitle")
  };

  return titleMap[unref(getLoginState)];
});
</script>

<template>
  <h2 class="mb-3 text-2xl font-bold text-center xl:(text-3xl enter-x text-left)">
    {{ loginTitle }}
  </h2>
</template>
