<script lang="ts" setup>
import { ArrowDown } from "@element-plus/icons-vue";
const localeText = ref("简体中文");

const handleMenuClick = (lang: string) => {
  localeText.value = lang;
};
</script>

<template>
  <el-dropdown trigger="click" @command="handleMenuClick">
    <el-button link class="!text-16px">
      <span>{{ localeText }}</span>
      <ArrowDown class="w-16px h-16px ml-5px" />
    </el-button>

    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="简体中文">简体中文</el-dropdown-item>
        <el-dropdown-item command="English">English</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped></style>
