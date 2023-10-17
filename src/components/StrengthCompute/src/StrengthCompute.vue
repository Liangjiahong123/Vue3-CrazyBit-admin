<script lang="ts" setup>
import { zxcvbn } from "@zxcvbn-ts/core";
import { useClassName } from "@/hooks/web/useClassName";

defineProps({
  value: { type: String, default: "" }
});
const emits = defineEmits(["update:value"]);

const { prefixCls } = useClassName("strength-compute");

const innerValue = ref("");
watch(innerValue, (val) => emits("update:value", unref(val)));
const getStrengthScore = computed(() => {
  const score = unref(innerValue) ? zxcvbn(unref(innerValue)).score : -1;
  return score;
});
</script>

<template>
  <div :class="prefixCls">
    <el-input v-model="innerValue" v-bind="$attrs" type="password" show-password />

    <div :class="`${prefixCls}-bar`">
      <div :class="`${prefixCls}-bar-fill`" :data-score="getStrengthScore"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$prefix-cls: "#{$namespace}-strength-compute";
.#{$prefix-cls} {
  position: relative;
  width: 100%;

  &-bar {
    margin: 10px auto 0;
    @apply relative h-6px rounded-6px bg-[#e6e8eb];

    &::before,
    &::after {
      border-style: solid;
      border-width: 0 5px;
      border-color: #fff;
      content: "";
      @apply absolute top-0 w-1/5 h-full z-10 bg-transparent;
    }

    &::before {
      left: 20%;
    }

    &::after {
      right: 20%;
    }

    &-fill {
      border-radius: inherit;
      transition:
        width 0.5s ease-in-out,
        background-color 0.25s;
      @apply absolute w-0 h-full bg-transparent;

      @for $i from 0 through 4 {
        &[data-score="#{$i}"] {
          width: 20% * ($i + 1);

          @if ($i <= 1) {
            background-color: $error-color;
          } @else if ($i >= 3) {
            background-color: $success-color;
          } @else {
            background-color: $warning-color;
          }
        }
      }
    }
  }
}
</style>
