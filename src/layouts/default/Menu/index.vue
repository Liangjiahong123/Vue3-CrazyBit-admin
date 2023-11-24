<script lang="ts" setup>
import { Location } from "@element-plus/icons-vue";
import { useClassName } from "@/hooks/web/useClassName";
import "@/router/menu";

defineOptions({ name: "LayoutMenu" });

const { prefixCls } = useClassName("layout-menu");
const { getRoutes } = useRouter();
const menuList = [getRoutes()[2]];
</script>

<template>
  <el-menu default-active="2" :class="prefixCls">
    <el-sub-menu index="1" v-for="item in menuList" :key="item.path">
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ item.name }}</span>
      </template>
      <el-menu-item v-for="subItem in item.children" :key="subItem.path" index="1-1">
        {{ subItem.name }}
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style lang="scss">
$prefix-cls: "#{$namespace}-layout-menu";
.#{$prefix-cls} {
  border-right: none;
}
</style>
