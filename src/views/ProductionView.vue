<template>
  <link href="https://unpkg.com/vue-ionicons@4.4.0/dist/ionicons.min.css" rel="stylesheet" />

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
      <BreadCrumbs></BreadCrumbs>
    </section>

    <section class="content">
      <div class="top">
        <div class="top1">
          <span>产品中心</span>
          <div></div>
        </div>
        <div class="top2">
          <span>智能·只为锂电安全</span>
        </div>
      </div>

      <div class="main">
        <nav class="sidebar">
          <ul>
            <span tabindex="1">
              智能锂电池保护板
              <i> <img src="/src/assets/img/up.png" alt="" /> </i>
            </span>
            <li tabindex="1"><a href="#">带通讯5串以下保护板</a></li>
            <li tabindex="1"><a href="#">带通讯5串以下保护板</a></li>
            <li tabindex="1"><a href="#">带通讯5串以下保护板</a></li>
            <li tabindex="1"><a href="#">带通讯5串以下保护板</a></li>
          </ul>
          <ul>
            <span>
              智能锂电池保护板
              <i><img src="/src/assets/img/up.png" alt="" /></i>
            </span>
            <li><a href="#">带通讯5串以下保护板</a></li>
            <li><a href="#">带通讯5串以下保护板</a></li>
            <li><a href="#">带通讯5串以下保护板</a></li>
          </ul>
          <ul>
            <span>
              智能锂电池保护板
              <i><img src="/src/assets/img/up.png" alt="" /></i>
            </span>
            <li><a href="#">带通讯5串以下保护板</a></li>
            <li><a href="#">带通讯5串以下保护板</a></li>
          </ul>
          <ul>
            <span>
              智能锂电池保护板
              <i><img src="/src/assets/img/up.png" alt="" /></i>
            </span>
            <li><a href="#">带通讯5串以下保护板</a></li>
          </ul>
          <ul>
            <span>
              智能锂电池保护板
              <i><img src="/src/assets/img/up.png" alt="" /></i>
            </span>
          </ul>
        </nav>
        <section class="right">
          <ul>
            <li>
              <div><img src="/src/assets/img/test.jpg" alt="这是一张图片" width="232px" height="232px" /></div>
              <span>12V锂电池保护板3/4串三元铁锂户外电源大电流250A300A蓝牙</span>
            </li>
            <li>
              <div><img src="/src/assets/img/test.jpg" alt="这是一张图片" width="232px" height="232px" /></div>
              <span>12V锂电池保护板3/4串三元铁锂户外电源大电流250A300A蓝牙</span>
            </li>
            <li>
              <div><img src="/src/assets/img/test.jpg" alt="这是一张图片" width="232px" height="232px" /></div>
              <span>12V锂电池保护板3/4串三元铁锂户外电源大电流250A300A蓝牙</span>
            </li>
            <li>
              <div><img src="/src/assets/img/test.jpg" alt="这是一张图片" width="232px" height="232px" /></div>
              <span>12V锂电池保护板3/4串三元铁锂户外电源大电流250A300A蓝牙</span>
            </li>
            <li>
              <div><img src="/src/assets/img/test.jpg" alt="这是一张图片" width="232px" height="232px" /></div>
              <span>12V锂电池保护板3/4串三元铁锂户外电源大电流250A300A蓝牙</span>
            </li>
            <li>
              <div><img src="/src/assets/img/test.jpg" alt="这是一张图片" width="232px" height="232px" /></div>
              <span>12V锂电池保护板3/4串三元铁锂户外电源大电流250A300A蓝牙</span>
            </li>
            <li>
              <div><img src="/src/assets/img/test.jpg" alt="这是一张图片" width="232px" height="232px" /></div>
              <span>12V锂电池保护板3/4串三元铁锂户外电源大电流250A300A蓝牙</span>
            </li>
            <li>
              <div><img src="/src/assets/img/test.jpg" alt="这是一张图片" width="232px" height="232px" /></div>
              <span>12V锂电池保护板3/4串三元铁锂户外电源大电流250A300A蓝牙</span>
            </li>
            <li>
              <div><img src="/src/assets/img/test.jpg" alt="这是一张图片" width="232px" height="232px" /></div>
              <span>12V锂电池保护板3/4串三元铁锂户外电源大电流250A300A蓝牙</span>
            </li>
          </ul>
        </section>
      </div>
      <div class="loading-page">
        <span>
          <a href="#">加载更多 <i>></i></a></span
        >
      </div>
    </section>
    <router-link to="/production/detail">产品详情</router-link>
  </main>
</template>
<script setup lang="ts">
import axios from 'axios';

const menus = ref([]);

onMounted(() => {
  // 初始化一个默认下拉菜单
  getMenus();
});

const lang = 0;
async function getMenus() {
  console.log('加载菜单');
  axios
    .post('/product/center/type/1')
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>
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
  display: flex;
  height: 370px;
  width: 100%;
  background: url(/src/assets/img/product-center.png);
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  margin: 0 auto;
}

.desc > div:nth-child(1) {
  width: 1330px;
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

.content {
  width: 1330px;
  margin: 0 auto;
}

.content > .top {
  height: 105px;
  margin: 0 auto;
}

.content > .top > .top1 {
  /* 产品中心 */
  /* 组 133 */
  float: left;
  margin-top: 50px;
  width: 120px;
  height: 47px;
  opacity: 1;
  line-height: 47px;
}

.content > .top > .top1 > span {
  width: 120px;
  height: 34px;
  opacity: 1;
  font-family: Source Han Sans;
  font-size: 30px;
  font-weight: bold;
  line-height: 34px;
  letter-spacing: 0px;
  font-variation-settings: 'opsz' auto;
  font-feature-settings: 'kern' on;
  color: #333333;
}

.content > .top > .top1 > div {
  left: 0px;
  top: 43px;
  width: 42px;
  height: 4px;
  opacity: 1;
  background: #333333;
  margin-top: 1.5px;
}

.content > .top > .top2 {
  float: right;
  width: 180px;
  height: 29px;
  margin-top: 59px;
  opacity: 1;
  font-family: 思源黑体;
  font-size: 20px;
  font-weight: normal;
  line-height: 28.08px;
  letter-spacing: 0px;
  color: #555555;
  text-align: center;

  margin-top: 4%;
}

.content > .main {
  display: flex;
  text-align: center;

  margin: 0 auto;
}

.content > .main > .sidebar {
  margin-top: 50px;
  width: 300px;
}

.content > .main > .sidebar > ul {
  display: block;
  line-height: 50px;
  border-radius: 6px;
  opacity: 1;
  text-align: center;
}

.content > .main > .sidebar > ul > span {
  display: block;
  width: 300px;
  height: 50px;
  font-family: Source Han Sans;
  font-size: 16px;
  font-weight: bold;
  line-height: 50px;
  letter-spacing: 0px;
  font-variation-settings: 'opsz' auto;
  color: #333333;
  background: #eeeeee;
  border-radius: 6px;
  cursor: pointer;
}

.content > .main > .sidebar > ul > span:focus {
  background: #99cc00;
  color: #ffffff;
}

.content > .main > .sidebar > ul > span > i {
  float: right;
  left: 7.55px;
  top: 1px;
  margin-right: 43px;
  opacity: 1;
}

.content > .main > .sidebar > ul > li {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 300px;
  opacity: 1;
  font-family: Source Han Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 44px;
  letter-spacing: 0px;
  font-variation-settings: 'opsz' auto;
  color: #333333;
  text-align: center;
  cursor: pointer;
  border-radius: 6px;
}

.content > .main > .sidebar > ul > li:nth-child(2) {
  margin-top: 9px;
}

.content > .main > .sidebar > ul > li:last-child {
  margin-bottom: 9px;
}

.content > .main > .sidebar > ul > li:focus {
  background: #99cc00;
  color: #ffffff;
}

.content > .main > .sidebar > ul > li:focus a {
  color: #ffffff;
}
.content > .main > .sidebar > ul > li:focus i {
  background: url(/src/assets/img/drop.png);
}

.content > .main > .right {
  display: flex;
  width: 1000px;
  margin-left: 32px;
  margin-top: 50px;
}

.content > .main > .right > ul {
  display: flex;
  flex-wrap: wrap;
}

.content > .main > .right > ul > li {
  display: block;
  width: 319px;
  height: 320px;
  text-align: center;
  border-radius: 6px;
  opacity: 1;
  box-sizing: border-box;
  border: 1px solid #d6d6d6;
  background-color: #ffffff;

  margin-bottom: 20px;
}

.content > .main > .right > ul > li:hover {
  border: 4px solid #99cc00;
}

.content > .main > .right > ul > li:not(:nth-child(3n + 1)) {
  margin-left: 20px;
}

.content > .main > .right > ul > li > div > img {
  background-color: aquamarine;
}

.content > .main > .right > ul > li > span {
  display: block;
  width: 190px;
  height: 36px;
  opacity: 1;
  margin-left: 65px;
  margin-top: 19.94px;
  font-family: Source Han Sans;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0px;

  font-variation-settings: 'opsz' auto;
  font-feature-settings: 'kern' on;
  color: #3d3d3d;
}

.loading-page {
  width: 1330px;
  text-align: center;
  margin-bottom: 46px;
  margin-top: 41px;
  padding-left: 176px;
}

.loading-page > span {
  display: block;
  width: 160px;
  height: 46px;
  line-height: 46px;
  border: 1.33px solid #ebebeb;
  text-align: center;
  border-radius: 4px;
  margin: 0 auto;
}

.loading-page a {
  text-decoration: none;
  font-size: 16px;
  font-weight: normal;
  margin-top: 52px;
  color: #888;
}

.loading-page > a > i {
  margin-left: 4px;
  width: 6.86px;
  height: 12px;
  opacity: 1;
}
</style>
