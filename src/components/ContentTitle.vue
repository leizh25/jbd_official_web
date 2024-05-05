<template>
  <div class="title_box">
    <div class="title">{{ title }}</div>
  </div>
</template>
<script lang="ts" setup>
withDefaults(
  defineProps<{
    title: string;
  }>(),
  {
    title: '我是标题'
  }
);
</script>
<style lang="scss" scoped>
.title_box {
  height: 105px;
  padding-top: 60px;
  box-sizing: border-box;
  // background-color: aqua;
  .title {
    font-family: 'Source Han Sans';
    font-size: 30px;
    font-weight: bold;
    color: #333;
    position: relative;
    &::before {
      content: '';
      display: block;
      width: 42px;
      height: 4px;
      background-color: #333;
      position: absolute;
      bottom: -15px;
    }
  }
}
</style>
