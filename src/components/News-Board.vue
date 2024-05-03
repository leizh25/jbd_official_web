<template>
  <div class="news_board">
    <div class="img_box">
      <img :src="`/src/assets/img/${data.img}`" alt="" />
    </div>
    <div class="desc">
      <div class="title">{{ data.title }}</div>
      <div class="content">{{ data.content }}</div>
      <div class="time">{{ data.time }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
withDefaults(
  defineProps<{
    data: {
      img: string;
      title: string;
      content: string;
      time: string;
    };
  }>(),
  {
    data: () => {
      return {
        img: 'news_board1.png',
        title: '中元股份易主 借力驶入锂电池“赛道”',
        content: '8月25日，亿纬锂能公司发布了2022年半年报。报告期内，公司实现营业收入149.26亿元，同比增长归属于上市公司股东的净利润13.59......',
        time: '2024-04-02'
      };
    }
  }
);
</script>
<style lang="scss">
.news_board {
  width: 430px;
  height: 450px;
  border-radius: 6px;
  border: 1px solid #e9e9e9;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .img_box {
    width: 100%;
    height: 260px;
  }
  .desc {
    flex: 1;
    padding: 27px;
    padding-right: 33px;
    box-sizing: border-box;
    .title {
      font-family: 思源黑体;
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }
    .content {
      margin-top: 10px;
      font-family: 思源黑体;
      font-size: 16px;
      font-weight: normal;
      line-height: 28px;
      color: #666;

      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .time {
      margin-top: 12px;
      font-family: Source Han Sans;
      font-size: 16px;
      font-weight: normal;
      line-height: 18px;
      color: #666;
    }
  }
}
</style>
