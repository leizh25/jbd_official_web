<template>
  <div class="h" data-desc="省专精特新企业、市工程中心瞪羚企业">
    <div class="year">{{ data.year }}<span class="y">年</span></div>
    <div class="desc">{{ data.desc }}</div>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  data: {
    year: string;
    desc: string;
  };
}>();
</script>
<style scoped lang="scss">
.h {
  width: 28px;
  height: 28px;
  background-image: url('/src/assets/img/about_hit_dot.png');
  background-size: cover;
  margin-right: 285px;
  position: relative;
  .year {
    display: block;
    width: 180px;
    position: absolute;
    top: -50px;
    font-family: D-DIN;
    font-size: 30px;
    font-weight: bold;
    color: #3d3d3d;
    .y {
      font-family: 'Source Han Sans';
      font-size: 16px;
      font-weight: normal;
      line-height: normal;
    }
  }
  .desc {
    width: 180px;
    line-height: 25px;
    position: absolute;
    bottom: -80px;
    font-family: Source Han Sans;
    font-size: 16px;
    color: #3d3d3d;
  }
}
</style>
