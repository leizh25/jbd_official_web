<template>
  <div class="news_detail">
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

    <section class="news_detail-content">
      <div class="news-title"></div>
      <div class="news-info">
        <div class="news-date">
          <span>日期: </span>
          <i class="date">2024-03-01</i>
        </div>
        <div class="news-author">
          <span>作者: </span>
          <i class="author">*****</i>
        </div>
        <div class="news-source">
          <span>来源: </span>
          <i class="source">*****</i>
        </div>
      </div>
      <hr />
      <div class="content">
        <p>
          8月25日，亿纬锂能公司发布了2022年半年报。报告期内，公司实现营业收入149.26亿元，同比增长127.54%；归属于上市公司股东的净利润13.59亿元，同比减少9.08%；归属于上市公司股东的扣除非经常性损益的净利润11.94亿元，同比减少16.22%；经营活动产生的现金流量净额18.10亿元，同比增长441.07%。
          近两年，亿纬锂能营收保持增长。2021年，公司实现营业收入约169亿元，同比增长107.06%；净利润约29亿元，同比增长75.89%。2020年，公司实现营业收入81.62亿元，同比增长27.3%；净利润16.52亿元，同比增长8.54%。
        </p>
        <img src="../assets/img/news-detail.png" alt="" />
        <p>
          8月25日，亿纬锂能公司发布了2022年半年报。报告期内，公司实现营业收入149.26亿元，同比增长127.54%；归属于上市公司股东的净利润13.59亿元，同比减少9.08%；归属于上市公司股东的扣除非经常性损益的净利润11.94亿元，同比减少16.22%；经营活动产生的现金流量净额18.10亿元，同比增长441.07%。
          近两年，亿纬锂能营收保持增长。2021年，公司实现营业收入约169亿元，同比增长107.06%；净利润约29亿元，同比增长75.89%。2020年，公司实现营业收入81.62亿元，同比增长27.3%；净利润16.52亿元，同比增长8.54%。
        </p>
        <p>
          2022年上半年，亿纬锂能受上游材料成本上升的影响，净利润也出现下降，而这也反映在了股价上。8月26日，亿纬锂能报收101.30元/股，跌3.39%。在今年第一、二季度，亿纬锂能的净利润分别为5.2亿元和8.4亿元。
          对此，亿纬锂能表示，在金属锂价格上涨的同时，由于自身是行业标杆企业，所以在经济不景气的情况下，和下游伙伴沟通后没有做涨价安排。如果下半年碳酸锂产能释放后，也会减轻锂源的压力。
        </p>
        <p>
          关于营收增长，亿纬锂能表示，营收同比增长的主要原因是，报告期内，公司的方形磷酸铁锂电池和软包三元电池出货规模增长较大；尤其在储能市场，公司战略性地率先布局储能市场，已经与国内主要的电信运营商、通讯设施龙头企业、多地电网公司在通信储能或电网侧配套等领域开展业务合作，并在家庭储能、工商业储能细分领域积累了一批国内外知名品牌客户。
        </p>
        <p>
          与此同时，亿纬锂能业务量的大幅增长也离不开上下游的协同，其供应链管理优势凸显。据不完全统计，通过与德方纳米、贝特瑞、华友钴业、恩捷股份、中科电气、新宙邦、金昆仑、川能动力及蜂巢能源等企业设立合资公司，亿纬锂能布局正极材料、负极材料、隔膜、电解液以及镍、钴、锂等上游资源。这不仅有利于保障其供应链稳定性，而且能够降低原材料价格波动对自身产品成本的影响，从而提升公司的综合竞争力水平。
        </p>
      </div>

      <div class="return">
        <router-link to="/news">返回列表</router-link>
      </div>

      <div class="page-location">
        <div class="last">
          <span>上一篇: </span>
          <router-link to="/news">亿纬锂能业务量的大幅增长</router-link>
        </div>
        <div class="next">
          <span>下一篇: </span>
          <router-link to="/news">亿纬锂能受上游材料成本上升的影响</router-link>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
console.log('route: ', route);
</script>
<style scoped>
a {
  text-decoration: none;
  color: #333333;
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

.news_detail-content,
.nav-location {
  width: 1330px;
  margin: 0 auto;
}

.nav-location {
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

.news-info {
  font-size: 16px;
  font-weight: normal;
  line-height: 28px;
  color: #666666;
}

.news-info div {
  display: inline-block;
  margin-right: 20px;
}

.content {
  text-align: center;
}

.content p {
  font-size: 16px;
  font-weight: 400;
  line-height: 36px;
  text-align: left;
  text-indent: 2em;
  color: #555555;
}

.content img {
  width: 1200px;
  /* height: 460px; */
  margin: 28px auto;
}

.return {
  width: 160px;
  height: 46px;
  border: 1.33px solid #ebebeb;
  text-align: center;
  border-radius: 4px;
  margin: 0 auto;
  margin-bottom: 60px;
}

.return a {
  text-decoration: none;
  font-size: 16px;
  font-weight: normal;
  line-height: 46px;
  margin-top: 52px;
  color: #888;
}

.page-location {
  height: 32px;
  margin-bottom: 49px;
  color: #333333;
}

.last {
  float: left;
  margin-left: 15px;
  font-size: 18px;
  font-weight: normal;
  line-height: 32px;
}

.next {
  float: right;
  margin-right: 15px;
  font-size: 18px;
  font-weight: normal;
  line-height: 32px;
}
</style>
