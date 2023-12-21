<script lang="ts" setup>
import { Location } from "@element-plus/icons-vue";
import { useLayoutMenu } from "./useLayoutMenu";
import { useClassName } from "@/hooks/web/useClassName";
import { useI18n } from "@/hooks/web/useI18n";

defineOptions({ name: "LayoutMenu" });

const { t } = useI18n();
const { menusLayout } = useLayoutMenu();

const { prefixCls } = useClassName("layout-menu");

const getAppLogoClass = computed(() => [`${prefixCls}-logo`]);
</script>

<template>
  <AppLogo :class="getAppLogoClass" />

  <el-menu :class="prefixCls">
    <el-sub-menu v-for="item in menusLayout" :key="item.path" index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ t(item.name) }}</span>
      </template>
      <el-menu-item v-for="subItem in item.children" :key="subItem.path" index="1-1">
        {{ t(subItem.name) }}
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style lang="scss">
$prefix-cls: "#{$namespace}-layout-menu";

.#{$prefix-cls} {
  border-right: none;

  &-logo {
    @apply py-10px pl-10px h-80px;
  }
}
</style>
