<script lang="ts" setup>
import Aside from "./Aside/index.vue";
</script>

<template>
  <el-container>
    <Aside />

    <el-container class="ml-210px">
      <el-header>Header</el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped></style>
