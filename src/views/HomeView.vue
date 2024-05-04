<script setup lang="ts">
const newsList = reactive([
  {
    img: 'news_board1.png',
    title: '中元股份易主 借力驶入锂电池“赛道”',
    content: '8月25日，亿纬锂能公司发布了2022年半年报。报告期内，公司实现营业收入149.26亿元，同比增长归属于上市公司股东的净利润13.59......',
    time: '2024-04-02'
  },
  {
    img: 'news_board2.png',
    title: '股价大涨超 31%！天力锂能登陆创业板，......',
    content: '8 月 29 日，新乡天力锂能股份有限公司（以下简称 " 天力锂能 "）在创业板上市，保荐人为民生证券，本次发行价格为 57.00 元 / 股，发行市盈率 81.94 倍......',
    time: '2024-04-02'
  },
  {
    img: 'news_board3.png',
    title: '成本高企不愿给“宁王”打工 广汽斥资百......',
    content: '先是董事长公开表态拒绝为电池厂打工，自己的电池要自己造；后是旗下新能源品牌广汽埃安融资金额创行业新高。作为一家市值1500亿元的头部车企，......',
    time: '2024-04-02'
  }
]);
</script>

<template>
  <main>
    <!-- #region 大视频 -->
    <div class="banner" v-slide-in>
      <span>专注于锂电池保护解决方案</span>
      <video src=""></video>
    </div>
    <!-- #endregion -->
    <!-- #region 产品应用广泛 -->
    <div class="product_cate_container" v-slide-in>
      <div class="w">
        <div class="title_box">
          <div class="t1">产品应用广泛</div>
          <div class="t2">智能&nbsp;&nbsp;·&nbsp;&nbsp;只为锂电安全</div>
        </div>
        <div class="imgs_box">
          <div class="row1">
            <div class="img_box"></div>
            <div class="img_box"></div>
          </div>
          <div class="row2">
            <div class="img_box"></div>
            <div class="img_box"></div>
            <div class="img_box"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- #endregion -->
    <!-- #region 关于我们 -->
    <div class="about_container" v-slide-in>
      <div class="w">
        <div class="top">
          <div class="left">
            <div class="title">关于我们</div>
            <div class="para_box">
              <p>深圳市嘉佰达电子科技有限公司 (深圳嘉佰达) 是一家成立于2020年2月份的科技型公司，我们秉持“正直、务实、精进”的价值观，信奉做事先做人，产品就是人品，立志打造BMS知名企业。</p>
              <p>
                东莞市嘉佰达电子科技有限公司（东莞嘉佰达）是深圳嘉佰达的全资子公司，东莞嘉佰达成立于2015年，是一家集锂电池保护板研发、销售、制造和服务于一体的高新技术企业。公司产品主要应用于锂电池租赁、换电、共享，储能、电动车、汽车启动等领域，服务国内外知名企业。公司自2015年，一路走来，已经扩充到5家子公司，旨在为客户提供更好的服务和产品体验。
              </p>
              <p>我们持续创新产品制造和商业运营模式，已初步形成“2+2+2+2”的布局，为嘉佰达的持续发展奠定了坚实的基础，同时也指明了嘉佰达前进的方向。</p>
            </div>
            <ul>
              <li>打造技术开发、产品制造两个基地；</li>
              <li>运营小象APP、智能锂电平台两个服务平台；</li>
              <li>建设传统电商、生态商城两个创新渠道；</li>
              <li>创新产品销售、软件服务两个赢利增长点</li>
            </ul>
          </div>
          <div class="rgt">
            <div class="bg"></div>
          </div>
        </div>
        <div class="btm">
          <div class="desc_box">
            <div class="top">
              <div class="num">4</div>
              <div class="text"><span>亿</span></div>
            </div>
            <div class="btm_text">年产值</div>
          </div>
          <div class="desc_box">
            <div class="top">
              <div class="num">500</div>
              <div class="text"><span>万</span></div>
            </div>
            <div class="btm_text">年出货量</div>
          </div>
          <div class="desc_box">
            <div class="top">
              <div class="num">50</div>
              <div class="text"><span>万</span></div>
            </div>
            <div class="btm_text">月产能</div>
          </div>
          <div class="desc_box">
            <div class="top">
              <div class="num">10</div>
              <div class="text"><span>万</span></div>
            </div>
            <div class="btm_text">IOT终端数</div>
          </div>
          <div class="desc_box">
            <div class="top">
              <div class="num">40</div>
              <div class="text"><span>件</span></div>
            </div>
            <div class="btm_text">专利发明</div>
          </div>
        </div>
      </div>
    </div>
    <!-- #endregion 关于我们 -->
    <!-- #region 新闻资讯 -->
    <div class="news_container" v-slide-in>
      <div class="w">
        <div class="title_box2">
          <span class="title">新闻资讯</span>
        </div>
        <div class="news_wrapper">
          <news-board v-for="(news, index) in newsList" :key="index" :data="news"></news-board>
        </div>
      </div>
    </div>
    <!-- #endregion -->
  </main>
</template>
<style lang="scss" scoped>
// #region 大视频
.banner {
  width: 100%;
  height: 800px;
  background-color: antiquewhite;
  text-align: center;
  line-height: 800px;
  span {
    color: $primaryColor;
    font-size: 70px;
    font-weight: bold;
  }
  video {
    width: 100%;
    height: 100%;
  }
}
// #endregion
// #region 产品应用广泛
.product_cate_container {
  width: 100%;
  padding-bottom: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title_box {
    height: 100px;
    color: #555;
    display: flex;
    align-items: center;
    gap: 37px;
    .t1 {
      font-family: 'Source Han Sans';
      font-size: 30px;
      font-weight: 500;
    }
    .t2 {
      font-family: 思源黑体;
      font-size: 20px;
      font-weight: normal;
      padding-top: 10px;
      box-sizing: border-box;
    }
  }
  .imgs_box {
    width: 100%;
    background-color: beige;
    display: flex;
    flex-direction: column;
    gap: 14px;
    @mixin imgDesc {
      &::before {
        display: block;
        position: absolute;
        left: 50px;
        top: 40px;
        color: #fff;
        font-family: 'Source Han Sans';
        font-size: 30px;
        font-weight: bold;
      }
    }
    @mixin imgText($text) {
      &::before {
        content: $text;
      }
    }
    .row1 {
      height: 360px;
      display: flex;
      justify-content: space-between;
      gap: 14px;
      .img_box {
        flex: 1;
        background-size: auto 100%;
        background-repeat: no-repeat;
        position: relative;
        @include imgDesc();
        &:nth-child(1) {
          @include imgText('电动车类');
          background-image: url(../assets/img/ddc.png);
          background-position: -290px 0;
        }
        &:nth-child(2) {
          @include imgText('大功率类');
          background-image: url(../assets/img/dgl.png);
          background-size: 150% 150%;
          background-position: 0 -150px;
        }
      }
    }
    .row2 {
      $height: 360px;
      height: $height;
      display: flex;
      justify-content: space-between;
      gap: 14px;
      .img_box {
        flex: 1;
        background-color: #555;
        position: relative;
        background-repeat: no-repeat;
        @include imgDesc();
        &:nth-child(1) {
          @include imgText('汽车启动');
          background-image: url(../assets/img/qcqd.png);
          background-size: auto 100%;
          background-position: -140px;
        }
        &:nth-child(2) {
          background-image: url(../assets/img/gdycn.png);
          background-size: auto $height;
          background-position-x: 60%;
          @include imgText('高低压储能');
        }
        &:nth-child(3) {
          background-image: url(../assets/img/xtgl.png);
          @include imgText('系统管理');
          background-size: auto $height;
          background-position-x: 60%;
        }
      }
    }
  }
}
// #endregion
// #region 关于我们
.about_container {
  width: 100%;
  height: 796px;
  background-color: #f5f8fa;
  display: flex;
  justify-content: center;
  .w {
    display: flex;
    flex-direction: column;
    padding-bottom: 60px;
  }
  .top {
    flex: 1;
    display: flex;

    .left {
      width: 800px;
      padding-right: 60px;
      padding-top: 34px;
      box-sizing: border-box;

      .title {
        height: 60px;
        line-height: 60px;
        font-family: 'Source Han Sans';
        font-size: 30px;
        font-weight: bold;
        position: relative;
        &::after {
          content: '';
          display: block;
          width: 42px;
          height: 4px;
          background-color: #333;
          position: absolute;
          left: 0;
          bottom: 0;
        }
      }
      .para_box {
        margin-top: 30px;
        p {
          text-indent: 2em;
          font-family: '思源黑体';
          font-size: 16px;
          font-weight: normal;
          line-height: 36px;
          color: #555;
        }
      }
      ul {
        margin-top: 14px;
        font-family: 'Source Han Sans';
        font-size: 18px;
        font-weight: 500;
        line-height: 40px;
        letter-spacing: 0px;
        color: #333;
        li {
          &::before {
            content: '*';
            display: inline-block;
            margin-right: 10px;
          }
        }
      }
    }
    .rgt {
      flex: 1;
      height: 100%;
      padding-top: 70px;
      box-sizing: border-box;
      position: relative;
      @mixin radiusBorder($color, $offset) {
        width: 414px;
        height: 468px;
        border: 1px solid $color;
        border-radius: 150px 0 150px 0;
        position: absolute;
        bottom: $offset;
        right: $offset;
      }
      .bg {
        float: right;
        width: 528px;
        height: 495px;
        background: url(../assets/img/about-card.png);
        background-size: 100%;
        background-repeat: no-repeat;
        border-radius: 150px 0 150px 0;
        position: absolute;
        // position: relative;
        z-index: 999;
        // background-color: #bfa;
        &::before {
          content: '';
          @include radiusBorder(#9c0, -14px);
          z-index: 1;
        }
        &::after {
          content: '';
          @include radiusBorder(#ddd, -31px);
          z-index: 1;
        }
      }
    }
  }
  .btm {
    margin-top: 20px;
    height: 180px;
    display: flex;

    .desc_box {
      flex: 1;
      height: 120px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      .top {
        display: flex;
        align-items: end;
        .num {
          font-family: 'D-DIN';
          font-size: 66px;
          font-weight: bold;
          color: $primaryColor;
          vertical-align: bottom;
        }
        .text {
          height: 66px;
          font-family: 'Source Han Sans';
          font-size: 20px;
          font-weight: 500;
          color: #555;
          padding-bottom: 5px;
          box-sizing: border-box;
          display: flex;
          align-items: end;
          margin-left: 7px;
          position: relative;
          &::after {
            content: '+';
            font-family: 'Source Han Sans';
            font-size: 20px;
            font-weight: bold;
            line-height: 20px;
            position: absolute;
            top: 9px;
            left: 22px;
          }
        }
      }
      .btm_text {
        margin-top: 5px;
        display: inline;
        font-family: 'Source Han Sans';
        font-size: 16px;
        font-weight: 350;
        line-height: normal;
        color: #555;
      }
      &:last-child .text::after {
        content: '';
      }
      &::after {
        content: '';
        width: 1px;
        height: 52px;
        background-color: #d9d7d7;
        position: absolute;
        right: 0;
        bottom: 0;
      }
      &:last-child::after {
        width: 0;
      }
    }
  }
}
// #region 新闻资讯
.news_container {
  height: 635px;
  display: flex;
  justify-content: center;
  .w {
    .title_box2 {
      height: 127px;
      line-height: 127px;
      .title {
        font-family: 'Source Han Sans';
        font-size: 30px;
        font-weight: bold;
        color: #333;
        position: relative;
        &::after {
          content: '';
          width: 42px;
          height: 4px;
          background: #333;
          position: absolute;
          bottom: -10px;
          left: 0;
        }
      }
    }
    .news_wrapper {
      display: flex;
      justify-content: space-between;
    }
  }
}
// #endregion
</style>
