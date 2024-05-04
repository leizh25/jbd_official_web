<template>
  <div class="news-view">
    <div class="header">
      <div class="title">
        <strong>新闻中心</strong>
      </div>
    </div>
    <div class="nav">
      <div class="nav-location">
        <i class="icon-location"><img src="../assets/img/icon-location.png" alt="" /></i>
        <span>首页 - 新闻中心 - 行业动态</span>
      </div>
    </div>

    <section class="news-content">
      <ul class="news-list">
        <li>
          <img src="" alt="" />
          <router-link to="/news/detail">中元股份易主 借力驶入锂电池“赛道”</router-link>
          <span>8 月 29 日，新乡天力锂能股份有限公司（以下简称 " 天力锂能 "）在创业板上市，保荐人为民生证券，本次发行价格为 57.00 元 / 股，发行市盈率 81.94 倍，截止发稿......</span>
          <i class="date">2018-08-29</i>
        </li>
        <li>
          <img src="" alt="" />
          <router-link to="/news/detail">中元股份易主 借力驶入锂电池“赛道”</router-link>
          <span></span>
          <i class="date">2018-08-29</i>
        </li>
        <li>
          <img src="" alt="" />
          <router-link to="/news/detail">中元股份易主 借力驶入锂电池“赛道”</router-link>
          <span></span>
          <i class="date">2018-08-29</i>
        </li>
        <li>
          <img src="" alt="" />
          <router-link to="/news/detail">中元股份易主 借力驶入锂电池“赛道”</router-link>
          <span></span>
          <i class="date">2018-08-29</i>
        </li>
        <li>
          <img src="" alt="" />
          <router-link to="/news/detail">中元股份易主 借力驶入锂电池“赛道”</router-link>
          <span></span>
          <i class="date">2018-08-29</i>
        </li>
        <li>
          <img src="" alt="" />
          <router-link to="/news/detail">中元股份易主 借力驶入锂电池“赛道”</router-link>
          <span></span>
          <i class="date">2018-08-29</i>
        </li>
        <li>
          <img src="" alt="" />
          <router-link to="/news/detail">中元股份易主 借力驶入锂电池“赛道”</router-link>
          <span></span>
          <i class="date">2018-08-29</i>
        </li>
        <li>
          <img src="" alt="" />
          <router-link to="/news/detail">中元股份易主 借力驶入锂电池“赛道”</router-link>
          <span></span>
          <i class="date">2018-08-29</i>
        </li>
        <li>
          <img src="" alt="" />
          <router-link to="/news/detail">中元股份易主 借力驶入锂电池“赛道”</router-link>
          <span></span>
          <i class="date">2018-08-29</i>
        </li>
      </ul>
      <div class="return">
        <router-link to="/">返回列表</router-link>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.news-view {
  position: relative;
}

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

.nav {
  display: flex;
  height: 68px;
  background: #f5f8fa;
  margin-bottom: 40.33px;
}

.nav-location {
  width: 1330px;
  margin: 0 auto;
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  align-self: center;
  color: #555555;
}

.icon-location {
  display: inline-block;
  width: 22px;
  height: 22px;
  margin-right: 10.83px;
}

.news-content {
  width: 1330px;
  margin: 0 auto;
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
</style>
