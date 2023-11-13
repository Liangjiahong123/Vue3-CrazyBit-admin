<script setup lang="ts">
import { useLoginState, LoginStateEnum } from "../useLogin";
import { useI18n } from "@/hooks/web/useI18n";

const { getLoginState } = useLoginState();
const { t } = useI18n("sys.login");

const loginTitle = computed(() => {
  const titleMap = {
    [LoginStateEnum.LOGIN]: t("passwordFormTitle"),
    [LoginStateEnum.REGISTER]: t("registerFormTitle"),
    [LoginStateEnum.RESET_PASSWORD]: t("resetFormTitle"),
    [LoginStateEnum.MOBILE]: t("mobileFormTitle"),
    [LoginStateEnum.QR_CODE]: t("qrCodeFormTitle")
  };

  return titleMap[unref(getLoginState)];
});
</script>

<template>
  <h2 class="mb-3 text-2xl font-bold text-center xl:(text-3xl enter-x text-left)">
    {{ loginTitle }}
  </h2>
</template>
