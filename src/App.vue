<script setup lang="ts">
import AppProvider from "@cpns/Application/AppProvider.vue";
import "dayjs/locale/zh-cn";
</script>

<template>
  <AppProvider>
    <router-view />
  </AppProvider>
</template>
