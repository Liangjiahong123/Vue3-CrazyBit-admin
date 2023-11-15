<script setup lang="ts">
import { useI18n } from "@/hooks/web/useI18n";
const { t } = useI18n();
</script>

<template>
  <div class="my-auto -enter-x">
    <img class="w-1/2 -enter-x" src="@svg/login-box-bg.svg" />
    <div class="-enter-x mt-14 text-white font-medium text-3xl">
      {{ t("sys.login.logoTitle") }}
    </div>
    <div class="-enter-x mt-5 text-white">{{ t("sys.login.logoDesc") }}</div>
  </div>
</template>
