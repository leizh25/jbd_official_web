<template>
  <div id="footer">
    <div class="footer-inner">
      <div class="footer-list">
        <div class="footer_main--column">
          <strong class="footer_main--column_title">关于我们</strong>
          <ul>
            <li><a href="#">公司简历</a></li>
            <li><a href="#">发展历程</a></li>
            <li><a href="#">企业文化</a></li>
            <li><a href="#">资质荣誉</a></li>
            <li><a href="#">合作伙伴</a></li>
          </ul>
        </div>

        <div class="footer_main--column">
          <strong class="footer_main--column_title">技术创新</strong>
          <ul>
            <li><a href="#">研发实力</a></li>
            <li><a href="#">制造体系</a></li>
            <li><a href="#">品质理念</a></li>
            <li><a href="#">BMS云平台</a></li>
          </ul>
        </div>

        <div class="footer_main--column">
          <strong class="footer_main--column_title">产品中心</strong>
          <ul>
            <li><a href="#">租换电</a></li>
            <li><a href="#">大功率</a></li>
            <li><a href="#">汽车启动</a></li>
            <li><a href="#">储能</a></li>
            <li><a href="#">管理APP</a></li>
          </ul>
        </div>

        <div class="footer_main--column">
          <strong class="footer_main--column_title">服务支持</strong>
          <ul>
            <li><a href="#">常见问题</a></li>
            <li><a href="#">软件下载</a></li>
            <li><a href="#">文档下载</a></li>
          </ul>
        </div>

        <div class="footer_main--column">
          <strong class="footer_main--column_title">新闻中心</strong>
          <ul>
            <li><a href="../views/NewsView.vue">企业新闻</a></li>
            <li><a href="#">行业动态</a></li>
          </ul>
        </div>

        <div class="footer_main--column">
          <strong class="footer_main--column_title">联系我们</strong>
          <ul>
            <li><a href="#">联系我们</a></li>
            <li><a href="#">在线留言</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-contact">
        <div class="telephone">
          <strong>电话</strong>
          <span class="tel">0769-82960405</span>
        </div>
        <div class="address">
          <strong>地址</strong>
          <span>中国·东莞市塘厦镇莲湖村宝源二路40号</span>
        </div>
        <ul class="img-wx">
          <li class="img_1">
            <img src="../assets/img/wx.jpg" alt="" />
            <span>微信公众号</span>
          </li>
          <li class="img_2">
            <img src="../assets/img/xxdd_APP.png" alt="" />
            <span>小象电动</span>
          </li>
          <li class="img_3">
            <img src="../assets/img/ldy_APP.png" alt="" />
            <span>锂电云</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <span>COPYRIGHT © 2024 东莞市嘉佰达电子科技有限公司. ALL RIGHTS RESERVED 粤ICP备18161347号</span>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
#footer {
  position: relative;
  width: 100%;
  height: 430px;
  color: #fff;
  line-height: 24px;
  background-color: #050f19;
}

.footer-inner {
  position: absolute;
  top: 78px;
  left: 50%;
  translate: -50%;
}

a {
  text-decoration: none;
  outline: none;
  font-size: 14px;
  font-weight: 350;
  line-height: 16px;
  color: #748ea6;
}

.footer-list {
  // position: relative;
  width: 1340px;
}

.footer_main--column {
  float: left;

  margin-right: 68px;
  text-align: center;
}

.footer_main--column:last-child {
  margin-right: 0;
}

.footer_main--column_title {
  font-size: 18px;
  font-weight: 500;
}

.footer_main--column li {
  margin: 10px 0;
}

.footer-contact {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 14px;
  font-weight: 350;
  line-height: 16px;
}

.footer-contact strong {
  margin-right: 15px;
  font-size: 14px;
  font-weight: 350;
  line-height: 16px;
}

.telephone {
  margin-bottom: 24px;
  height: 30px;
}

.tel {
  font-size: 46px;
  font-weight: bold;
  line-height: 30px;
}

.img-wx {
  margin-top: 49px;
}
.img-wx li {
  float: left;
}

.img-wx li:nth-child(1) {
  margin-right: 36px;
}

.img-wx li:nth-child(2) {
  margin-right: 26px;
}

.img-wx img {
  width: 120px;
}

.img-wx span {
  text-align: center;
  margin-top: 6px;
  display: block;
}

.footer-bottom {
  position: absolute;
  right: 50%;
  translate: 50%;
  bottom: 17px;
  font-size: 14px;
  font-weight: 350;
  line-height: 16px;
  color: #748ea6;
}
</style>
