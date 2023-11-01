<script lang="ts" setup>
import { Sunny, Moon } from "@element-plus/icons-vue";
import { useDark } from "@vueuse/core";
import { useAppStore } from "@/stores/modules/app";
import { ThemeEnum } from "@/enums/appEnum";

const isDark = useDark({ disableTransition: false });
const { setDarkMode } = useAppStore();

const handleToggleMode = () => {
  const darkMode = unref(isDark) ? ThemeEnum.DARK : ThemeEnum.LIGHT;
  setDarkMode(darkMode);
};
</script>

<template>
  <div>
    <el-switch
      v-model="isDark"
      size="large"
      inline-prompt
      :active-icon="Moon"
      :inactive-icon="Sunny"
      @change="handleToggleMode"
    />
  </div>
</template>

<style lang="scss" scoped>
$dark-color: #151515;

.el-switch {
  &:deep(.el-switch__core) {
    background-color: $dark-color;
    border-color: #4c4d4f;

    .el-icon {
      color: yellow;
    }
  }

  /* &:deep(.is-checked .el-switch__core) {
    background-color: $dark-color;
    border-color: #fff !important;
  } */
}
</style>
