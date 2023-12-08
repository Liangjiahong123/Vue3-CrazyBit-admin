<script lang="ts" setup>
import { Location } from "@element-plus/icons-vue";
import { useClassName } from "@/hooks/web/useClassName";
// import "@/router/menu";
import { createMenus } from "@/router/menu";

defineOptions({ name: "LayoutMenu" });

watchEffect(async () => {
  const menus = await createMenus();
  console.log("menus-->", menus);
});

const { prefixCls } = useClassName("layout-menu");
</script>

<template>
  <el-menu default-active="2" :class="prefixCls">
    <el-sub-menu index="1" v-for="item in menus" :key="item.path">
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
