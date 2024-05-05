<template>
  <div class="bread_container w100">
    <div class="bread w">
      <div class="icon_box">
        <img src="/src/assets/img/bread_locate.svg" alt="" class="img" />
      </div>
      <span class="bread_text">{{ bread_text }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
const bread_text = ref<string>('');
onMounted(() => {
  bread_text.value = ('首页 - ' + route.meta.title) as string;
});
</script>
<style lang="scss" scoped>
.bread_container {
  height: 68px;
  background: #f5f8fa;
  .bread {
    display: flex;
    align-items: center;
    .icon_box {
      width: 18px;
      height: 22px;
      margin-right: 10px;
    }
    .bread_text {
      font-family: 思源黑体;
      font-size: 16px;
      font-weight: normal;
      color: #555;
    }
  }
}
</style>
