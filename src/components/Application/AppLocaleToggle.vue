<script lang="ts" setup>
import { localeList } from "@/settings/localeSettings";
import { ArrowDown } from "@element-plus/icons-vue";
import { useLocale } from "@/locales/useLocale";
import type { LocaleType } from "#/config";
const { getLocale, setLocale } = useLocale();

const getLocaleText = computed(() => {
  const pickerText = localeList.find((item) => item.command === unref(getLocale))?.text;
  return pickerText;
});

const handleMenuClick = async (locale: LocaleType) => {
  await setLocale(locale);
};
</script>

<template>
  <Dropdown :hide-on-click="false" :dropMenuList="localeList" @menuClick="handleMenuClick">
    <el-button link class="!text-16px">
      <span>{{ getLocaleText }}</span>
      <ArrowDown class="w-16px h-16px ml-5px" />
    </el-button>
  </Dropdown>
</template>
