<script lang="ts" setup>
import type { DropDownTrigger, DropDownMenu } from "./type";

defineProps({
  trigger: { type: String as PropType<DropDownTrigger>, default: "click" },
  dropMenuList: { type: Array as PropType<(DropDownMenu & Recordable)[]>, default: () => [] }
});

const emits = defineEmits(["menuClick", "buttonClick", "visibleChange"]);

const handleMenuClick = (command: DropDownMenu["command"]) => emits("menuClick", command);
const onVisibleChange = (visible: boolean) => emits("visibleChange", visible);
</script>

<template>
  <el-dropdown
    :trigger="trigger"
    v-bind="$attrs"
    @command="handleMenuClick"
    @visibleChange="onVisibleChange"
  >
    <slot></slot>

    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="(item, i) in dropMenuList"
          :key="i"
          :command="item.command"
          :disabled="item.disabled"
          :divided="item.divided"
          :icon="item.icon"
        >
          {{ item.text }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
