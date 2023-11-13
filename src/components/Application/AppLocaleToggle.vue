<script lang="ts" setup>
import type { LocaleType } from "#/config";
import { localeList } from "@/settings/localeSettings";
import { ArrowDown } from "@element-plus/icons-vue";
import { useLocale } from "@/locales/useLocale";

const { getLocale, setLocale } = useLocale();

const getLocaleText = computed(() => {
  const pickerText = localeList.find((item) => item.command === unref(getLocale))?.lang;
  return pickerText;
});

const handleMenuClick = async (locale: LocaleType) => {
  await setLocale(locale);
};
</script>

<template>
  <el-dropdown trigger="click" @command="handleMenuClick">
    <el-button link class="!text-16px">
      <span>{{ getLocaleText }}</span>
      <ArrowDown class="w-16px h-16px ml-5px" />
    </el-button>

    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="(item, i) in localeList" :key="i" :command="item.command">
          {{ item.lang }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped></style>
