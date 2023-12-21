<script lang="ts" setup>
import { useClassName } from "@/hooks/web/useClassName";

const { prefixCls } = useClassName("layout-menu");
</script>

<template>
  <el-menu :class="prefixCls"></el-menu>
</template>

<style lang="scss" scoped></style>
