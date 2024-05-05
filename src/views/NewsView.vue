<template>
  <div class="news-view">
    <div class="header">
      <div class="title">
        <strong>新闻中心</strong>
      </div>
    </div>
    <BreadCrumbs></BreadCrumbs>
    <section class="news-content">
      <ul class="news-list">
        <li v-for="item in news" :key="item.id">
          <img :src="item.img" alt="" />
          <router-link to="/news/detail">
            <i class="news-title">{{ item.title }}</i>
            <span>{{ item.summary }}</span>
          </router-link>

          <i class="date">{{ item.lastUpdateTime.split(' ')[0] }}</i>
        </li>
      </ul>
      <div class="return">
        <router-link to="/"
          >返回列表
          <img src="../assets/img/arrow-right.png" alt="" />
        </router-link>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
let news = ref<any>([]);

onMounted(() => {
  console.log('mounted');
  getData();
});
const getData = () => {
  request.get('/news/center/0').then((res) => {
    news.value = res.data;
    console.log(news);
  });
};
</script>
<style scoped>
.header {
  display: flex;
  height: 370px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../assets/img/news-center.png');
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center center;
  font-size: 56px;
  font-weight: bold;
  color: #fff;
  line-height: 66px;
}

.title {
  align-self: center;
  margin: 0 auto;
}

.news-content {
  width: 1330px;
  margin: 0 auto;
  margin-top: 40.33px;
}

.news-list li {
  display: inline-block;
  margin-right: 20px;
}

.news-list li:nth-child(3n + 3) {
  margin-right: 0;
}

.news-list li a {
  display: block;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  /* text-align: center; */
  color: #333333;
}

.news-list li img {
  width: 430px;
  height: 260px;
  margin-bottom: 24px;
  background: #bef;
  border-radius: 6px;
}

.news-list li span {
  display: block;
  width: 410px;
  height: 84px;
  margin-top: 5px;
  font-size: 16px;
  font-weight: normal;
  line-height: 28px;
  color: #666;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.date {
  display: inline-block;
  font-size: 16px;
  font-weight: 350;
  line-height: 18px;
  margin-top: 8.7px;
  margin-bottom: 46px;
  color: #888888;
}

.return {
  width: 160px;
  height: 46px;
  border: 1.33px solid #ebebeb;
  text-align: center;
  border-radius: 4px;
  margin: 0 auto;
  margin-bottom: 46px;
}

.return a {
  text-decoration: none;
  font-size: 16px;
  font-weight: normal;
  line-height: 46px;
  margin-top: 52px;
  color: #888;
}

.return a img {
  width: 6.86px;
  height: 12px;
  margin-left: 5px;
}
</style>
