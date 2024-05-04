<template>
  <main class="container">
    <section class="nav">
      <div class="desc">
        <div>
          <div class="desc1">
            <span>产品中心</span>
          </div>
          <div class="desc2">
            <span>专注于锂电池保护解决方案</span>
          </div>
        </div>
      </div>
      <div class="localtion">
        <div>
          <i>标</i>
          <span>首页 - 产品中心 -详情</span>
        </div>
      </div>
    </section>

    <section class="content">
      <div class="product-box">
        <div class="product-img">
          <img src="./images/test.jpg" alt="产品图片" />
        </div>
        <div class="product-detail">
          <span class="product-name">JBD-AP20S003</span>
          <div class="product-parameters">
            <ul>
              <li>
                <span>产品描述：</span>
                <span
                  >寿命长:与铅酸电池相比，其便用寿命最家可延长20倍，浮动/日历寿命可延长5倍，从而有助于最大程度地减少更换成本井降低总拥有成本；重量轻:约为铝酸蓄电池重量的40%6；安全性:磷酸铁锂化学物质消除了由于高冲击，过度充电或短路情况而引起海炸或燃烧的风脸。</span
                >
              </li>
              <li>
                <span>支持串数：</span>
                <span>3～5串</span>
              </li>
              <li>
                <span>电池类型：</span>
                <span>锰酸锂、三元锂、钴酸锂、铁锂</span>
              </li>
              <li>
                <span>支持电流：</span>
                <span>10～30A</span>
              </li>
              <li>
                <span>是否均衡：</span>
                <span>是</span>
              </li>
              <li>
                <span>产品尺寸：</span>
                <span>116*48*20mm</span>
              </li>
              <li>
                <span>功&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;能：</span>
                <span>蓝牙APP、一键自动均衡</span>
              </li>
              <li>
                <span>产品分类：</span>
                <span>智能锂电池保护板 - 带通讯5串以下保护板 </span>
              </li>
              <li>
                <span>关键词：</span>
                <span>锂电池</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="product-bottom">
          <div class="product-small-img">
            <ul>
              <li><img src="./images/test.jpg" alt="一张图片" /></li>
              <li>
                <img src="./images/test.jpg" alt="一张图片" />
              </li>
              <li><img src="./images/test.jpg" alt="一张图片" /></li>
            </ul>
          </div>
          <div class="product-consult">
            <span>我要咨询</span>
          </div>
        </div>
      </div>

      <nav class="product-nav">
        <div>
          <span tabindex="1">产品介绍</span>
        </div>
        <div>
          <span tabindex="1">产品参数</span>
        </div>
      </nav>
      <div class="product-value">
        <div class="value"></div>
      </div>
      <hr />
      <div class="my-want-consult">
        <div class="title">
          <span>我要咨询</span>
        </div>
      </div>
      <hr style="margin-top: 60px" />

      <div class="product-relation">
        <div class="title">
          <span>相关产品</span>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
body,
ol,
ul,
h1,
h2,
h3,
h4,
h5,
h6,
p,
th,
td,
dl,
dd,
form,
fieldset,
legend,
input,
textarea,
select,
figure,
figcaption {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6,
b,
strong {
  font-size: 100%;
  font-weight: normal;
}

i,
em {
  font-style: normal;
}

li {
  list-style: none;
}

a {
  color: #333;
  text-decoration: none;
}

body,
html {
  font:
    14px '微软雅黑',
    Arial;
  color: #333;
}

input {
  outline: none;
}

.clearfix {
  zoom: 1;
}

.clearfix:after {
  content: '';
  display: block;
  height: 0;
  overflow: hidden;
  clear: both;
}

.container {
  width: 100%;
  overflow: hidden;
}

.nav {
  height: 438px;
}

.desc {
  left: 0px;
  top: 0px;
  width: 100%;
  height: 370px;
  opacity: 0.2;
  background-color: aqua;

  text-align: center;
}

.desc > div:nth-child(1) {
  width: 1340px;
  height: 100%;
  line-height: 100%;
  margin: 0 auto;
  text-align: center;
}

.desc .desc1 {
  float: left;
  /* 产品中心 */
  width: 100%;
  height: 66px;
  opacity: 1;
  font-family: Source Han Sans;
  font-size: 60px;
  font-weight: bold;
  line-height: 66px;
  letter-spacing: 0px;
  font-variation-settings: 'opsz' auto;
  font-feature-settings: 'kern' on;
  color: #ffffff;

  margin-top: 80px;
}

.desc .desc2 {
  float: left;
  /* 专注于锂电池保护解决方案 */
  width: 100%;
  height: 66px;
  opacity: 1;
  font-family: Source Han Sans;
  font-size: 32px;
  font-weight: 500;
  line-height: 66px;
  letter-spacing: 0px;
  font-variation-settings: 'opsz' auto;
  font-feature-settings: 'kern' on;
  color: #ffffff;
  margin-top: 27px;
}

.localtion {
  left: 0px;
  width: 100%;
  height: 68px;
  opacity: 1;
  background: #f5f8fa;
  line-height: 68px;
}

.localtion > div {
  width: 1340px;
  margin: 0 auto;
}

.localtion > div > i {
  width: 22px;
  height: 22px;
  opacity: 1;
}

.localtion > div > span {
  margin-left: 10.83px;
  width: 150px;
  height: 22px;
  width: 150px;
  height: 22px;
  opacity: 1;
  font-family: 思源黑体;
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  letter-spacing: 0px;
  font-variation-settings: 'opsz' auto;
  color: #555555;
}

.content {
  width: 1340px;
  margin: 0 auto;
}

.content > .product-box {
  height: 529px;
  width: 1327px;
  margin-top: 40px;
}

.content > .product-box > .product-img {
  display: inline-block;
  width: 522px;
  height: 440px;
  border-radius: 10px;
  opacity: 1;

  background: #fafafa;
  box-sizing: border-box;
  border: 1.4px solid #f1eded;
}

.content > .product-box > .product-img > img {
  width: 365px;
  height: 389px;
  padding: 23px 86px 28px 71px;
}

.content > .product-box > .product-detail {
  float: right;
  width: 739px;
  height: 409px;
}

.content > .product-box > .product-detail > .product-name {
  display: block;
  width: 246px;
  height: 34px;
  opacity: 1;

  font-family: Source Han Sans;
  font-size: 32px;
  font-weight: bold;
  line-height: 34px;
  letter-spacing: 0px;
  font-variation-settings: 'opsz' auto;
  color: #333333;

  margin-left: 3px;
}

.content > .product-box > .product-detail > .product-parameters {
  margin-top: 15px;
}

.content > .product-box > .product-detail > .product-parameters > ul > li > span:not(:nth-child(1)) {
  /* 产品分类： */
  width: 70px;
  height: 32px;
  opacity: 1;

  font-family: Source Han Sans;
  font-size: 14px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0px;

  font-variation-settings: 'opsz' auto;
  color: #333333;
}

.content > .product-box > .product-detail > .product-parameters > ul > li > span:nth-child(2) {
  width: 196px;
  height: 192px;
  opacity: 1;

  font-family: 思源黑体;
  font-size: 14px;
  font-weight: normal;
  line-height: 32px;
  letter-spacing: 0px;

  font-variation-settings: 'opsz' auto;
  color: #555555;
}

.content > .product-box > .product-detail > .product-parameters > ul > li:not(:nth-child(1)) > span:nth-child(2) {
  margin-left: 13px;
}

.content > .product-box > .product-detail > .product-parameters > ul > li:nth-last-child(2) {
  padding-top: 6px;
  padding-bottom: 6px;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
}

.content > .product-box > .product-detail > .product-parameters > ul > li:nth-last-child(1) > span:nth-child(2) {
  margin-left: 29px;
}

.content > .product-box > .product-bottom {
  height: 66px;
  width: 100%;
  line-height: 66px;
  margin-top: 20px;
}

.content > .product-box > .product-bottom > .product-small-img {
  float: left;
  height: 66px;
  width: 222px;
}

.content > .product-box > .product-bottom > .product-small-img > ul {
  display: flex;
  flex-wrap: wrap;
}

.content > .product-box > .product-bottom > .product-small-img > ul > li {
  width: 66px;
  height: 66px;
  border-radius: 6px;
  opacity: 1;
  box-sizing: border-box;
  border: 1px solid #d6d6d6;
  text-align: center;
  line-height: 66px;
}

.content > .product-box > .product-bottom > .product-small-img > ul > li > img {
  width: 56.57px;
  height: 61.29px;
  opacity: 1;
  margin: 2.36px 5.89px 2.36px 3.54px;
}

.content > .product-box > .product-bottom > .product-small-img > ul > li:not(:nth-child(1)) {
  margin-left: 11.79px;
}

.content > .product-box > .product-bottom > .product-consult {
  display: inline-block;
  width: 260px;
  height: 56px;
  line-height: 56px;
  border-radius: 6px;
  text-align: center;
  opacity: 1;
  background: #99cc00;

  margin-left: 613.32px;
  cursor: pointer;
}

.content > .product-box > .product-bottom > .product-consult > span {
  width: 80px;
  height: 32.48px;
  opacity: 1;

  font-family: Source Han Sans;
  font-size: 20px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: 0px;

  font-variation-settings: 'opsz' auto;
  color: #ffffff;

  margin: 12px 90px 11.52px 90px;
}

.content > .product-nav {
  width: 1330px;
  height: 54px;
  opacity: 1;
  background: #f5f8fa;
  margin-top: 52.36px;
  line-height: 54px;
}

.content > .product-nav > div {
  display: inline-block;
  width: 160px;
  height: 54px;
  opacity: 1;
  cursor: pointer;
}

.content > .product-nav > div > span:focus {
  color: #ffffff;
  background: #99cc00;
}

.content > .product-nav > div > span {
  width: 64px;
  height: 20px;
  opacity: 1;
  font-family: 思源黑体;
  font-size: 16px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: 0px;

  font-variation-settings: 'opsz' auto;
  font-feature-settings: 'kern' on;
  color: #3d3d3d;
  padding: 17px 48px 17px 48px;
}

.content > .product-value {
  width: 1330px;
  margin-top: 31px;
}

.content > .product-value > .value {
  width: 1200px;
  height: 1858.06px;
  opacity: 1;
  opacity: 1;
  background-color: #99cc00;
  margin-left: 65px;
}

.content > hr {
  width: 1328px;
  border: 1px solid #e9e9e9;
}

.content > .my-want-consult {
  width: 822px;
  height: 490px;
  margin: 0 auto;
  background-color: #f1eded;
  margin-top: 59px;
}

.content > .my-want-consult > .title {
  width: 100%;
  text-align: center;
}

.content > .my-want-consult > .title > span {
  width: 112px;
  height: 28px;
  opacity: 1;

  font-family: Source Han Sans;
  font-size: 28px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0px;

  font-variation-settings: 'opsz' auto;
  font-feature-settings: 'kern' on;
  color: #3d3d3d;
  margin: 0 auto;
}

.content > .product-relation {
  width: 1330px;
  height: 392px;
  background-color: #99cc00;
  margin-top: 63px;
}
</style>
