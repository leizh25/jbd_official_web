<template>
  <div id="about_page">
    <div class="banner_container">
      <div class="title">致力于电池BMS的科技型公司</div>
    </div>
    <BreadCrumbs></BreadCrumbs>
    <div class="intro_container w100" v-slide-in>
      <div class="content_container w">
        <ContentTitle title="公司简介"></ContentTitle>
        <div class="content_box">
          <div class="left">
            <div class="t1">研发中心</div>
            <div class="t2">深圳市嘉佰达电子科技有限公司</div>
            <div class="ps">
              <p>深圳市嘉佰达电子科技有限公司 (深圳嘉佰达) 是一家成立于2020年2月份的科技型公司，我们秉持“正直、务实、精进”的价值观，信奉做事先做人，产品就是人品，立志打造BMS知名企业。</p>
              <p>嘉佰达立足高起点和高要求，成立之初就组建了一支40余人的高素质研发团队，坚持以研发为导向，贴合市场需求，精益求精不断为客户提供高可靠性产品。</p>
              <p>
                我们聚集行业精英，潜心研发，只专注BMS；我们精于制造，只产精品；我们特别重视研发平台和服务平台的建设，只为了向客户提供增值服务；我们持续创新、不断实践，只为了用科技创造更美好的明天。
              </p>
              <p>我们持续创新产品制造和商业运营模式，已初步形成“2+2+2+2”的布局，为嘉佰达的持续发展奠定了坚实的基础，同时也指明了嘉佰达前进的方向。</p>
            </div>
            <div class="data_box">
              <div class="data data1">
                <div class="t">
                  <div class="n">2000</div>
                  <div class="u">万元</div>
                </div>
                <div class="b">注册资本</div>
              </div>
              <div class="data data2">
                <div class="t">
                  <div class="n">2</div>
                  <div class="u">亿元</div>
                </div>
                <div class="b">项目投资</div>
              </div>
              <div class="data data3">
                <div class="t">
                  <div class="n">30</div>
                  <div class="u"></div>
                </div>
                <div class="b">市倍增企业</div>
              </div>
            </div>
          </div>
          <div class="rgt">
            <div class="bg_wrapper">
              <div class="bg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="intro2_container w100" v-slide-in>
      <div class="intro2_content w">
        <div class="t">
          <div class="l"></div>
          <div class="r">
            <div class="title">全资子公司 — 工厂基地</div>
            <div class="d">东莞市嘉佰达电子科技有限公司</div>
            <p class="p">
              东莞市嘉佰达电子科技有限公司（东莞嘉佰达）是深圳嘉佰达的全资子公司，东莞嘉佰达成立于2015年，是一家集锂电池保护板研发、销售、制造和服务于一体的高新技术企业。公司产品主要应用于锂电池租赁、换电、共享，储能、电动车、汽车启动等领域，服务国内外知名企业。
            </p>
          </div>
        </div>
        <div class="b">
          <swiper :slides-per-view="4" :modules="modules" :space-between="17" class="swiper" :pagination="pagination">
            <swiper-slide class="swiper-slide">
              <div class="img_box">
                <img src="@/assets/img/about_smtqm.png" alt="" />
                <div class="desc_box"><span>SMT全貌</span></div>
              </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <div class="img_box">
                <img src="@/assets/img/about_smtcj.png" alt="" />
                <div class="desc_box"><span>SMT车间</span></div>
              </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <div class="img_box">
                <img src="@/assets/img/about_zz.png" alt="" />
                <div class="desc_box"><span>组装</span></div>
              </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide" v-for="i in 5" :key="i">
              <div class="img_box">
                <img src="@/assets/img/about_ck.png" alt="" />
                <div class="desc_box"><span>仓库</span></div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="history_container w100" v-slide-in>
      <div class="content_container w">
        <ContentTitle title="发展历程"></ContentTitle>
        <div class="content_box">
          <div class="histories_box">
            <div class="line line1">
              <HistoryDot :data="{ year: '2023', desc: '省专精特新企业、市工程中心瞪羚企业' }"></HistoryDot>
              <HistoryDot :data="{ year: '2022', desc: '市专精特新企业导入数字化工厂建设' }"></HistoryDot>
              <HistoryDot :data="{ year: '2021', desc: '企业第二个5年规划开局，市倍增企业试点' }"></HistoryDot>
              <HistoryDot :data="{ year: '2020', desc: '成立深圳研发中心和苏州办事处' }"></HistoryDot>
            </div>
            <div class="line line2">
              <HistoryDot :data="{ year: '2019', desc: '开发GPS保护板，远程平台增加两条全自动SMT生产线' }"></HistoryDot>
              <HistoryDot :data="{ year: '2018', desc: '被评选为国家高新企业' }"></HistoryDot>
              <HistoryDot :data="{ year: '2017', desc: '被评选为国家高新企业' }"></HistoryDot>
              <HistoryDot :data="{ year: '2016', desc: '开发智能版，成立扬州办事处' }"></HistoryDot>
              <HistoryDot :data="{ year: '2015', desc: '建立SMT车间' }"></HistoryDot>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="culture_container w100" v-slide-in>
      <div class="culture_content w">
        <ContentTitle title="企业文化"></ContentTitle>
        <div class="btm">
          <div class="c_boxes">
            <div class="c_box">
              <div class="t">使命</div>
              <div class="d">提供安全可靠的锂电池管理系统</div>
            </div>
            <div class="c_box">
              <div class="t">理念</div>
              <div class="d">正直、务实、精进</div>
            </div>
            <div class="c_box">
              <div class="t">愿景</div>
              <div class="d">成为锂电池行业领导者</div>
            </div>
            <div class="c_box">
              <div class="t">目标</div>
              <div class="d">致力于成为锂电池保护解决方案的持续领跑者</div>
            </div>
          </div>
          <div class="img_box">
            <img src="@/assets/img/about_c1.png" alt="" />
            <img src="@/assets/img/about_c2.png" alt="" />
            <img src="@/assets/img/about_c3.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="honors_container w100" v-slide-in>
      <div class="honors_content w">
        <ContentTitle title="资质荣誉"></ContentTitle>
        <swiper :slides-per-view="5" :modules="modules" :space-between="14.75" class="swiper" :pagination="pagination">
          <swiper-slide class="swiper-slide">
            <div class="img_box">
              <img src="@/assets/img/about_h1.png" alt="" />
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div class="img_box">
              <img src="@/assets/img/about_h2.png" alt="" />
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div class="img_box">
              <img src="@/assets/img/about_h3.png" alt="" />
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div class="img_box">
              <img src="@/assets/img/about_h4.png" alt="" />
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide" v-for="i in 5" :key="i">
            <div class="img_box">
              <img src="@/assets/img/about_h5.png" alt="" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="cooperator_container w100" v-slide-in>
      <div class="w">
        <ContentTitle title="合作伙伴"></ContentTitle>
        <div class="img_box">
          <img src="@/assets/img/about_co1.png" alt="" />
          <img src="@/assets/img/about_co2.png" alt="" />
          <img src="@/assets/img/about_co3.png" alt="" />
          <img src="@/assets/img/about_co4.png" alt="" />
          <img src="@/assets/img/about_co5.png" alt="" />
          <img src="@/assets/img/about_co6.png" alt="" />
          <img src="@/assets/img/about_co7.png" alt="" />
          <img src="@/assets/img/about_co8.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const modules = [Pagination];
const pagination = {
  clickable: true,
  renderBullet: function (index: number, className: string) {
    return '<span class="' + className + ' pagenation_dot' + '">' + '</span>';
  }
};
</script>

<style lang="scss" scoped>
#about_page {
  width: 100%;
  .banner_container {
    height: 370px;
    background-image: url(../assets/img/about_bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 55%;
    display: flex;
    justify-content: center;
    align-items: center;
    .title {
      font-family: 'Source Han Sans';
      font-size: 56px;
      font-weight: bold;
      color: #fff;
    }
  }
  .intro_container {
    height: 757px;
    .content_container {
      // outline: 1px solid #f00;
      display: flex;
      flex-direction: column;

      .content_box {
        flex: 1;
        // background-color: rgba(226, 177, 177, 0.205);
        display: flex;
        gap: 92px;
        .left {
          width: 710px;
          // outline: 1px solid #0f0;
          padding-top: 30px;
          .t1 {
            font-family: Source Han Sans;
            font-size: 20px;
            font-weight: bold;
            color: #3d3d3d;
            line-height: 34px;
          }
          .t2 {
            font-family: Source Han Sans;
            font-size: 20px;
            font-weight: 500;
            color: #9c0;
            line-height: 34px;
          }
          .ps {
            font-family: 思源黑体;
            font-size: 16px;
            font-weight: normal;
            line-height: 34px;
            color: #555;
            p {
              text-indent: 2em;
            }
          }
          .data_box {
            margin-top: 26px;
            width: 685px;
            height: 156px;
            border-radius: 10px 10px 60px 10px;
            background: #f5f8fa;
            display: flex;
            align-items: center;
            .data {
              height: 60px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              &.data1 {
                flex: 1.5;
              }
              &.data2 {
                flex: 1;
                border-left: 1px solid #ddd;
                border-right: 1px solid #ddd;
                .t .u {
                  position: relative;
                  &::after {
                    content: '+';
                    color: #555;
                    position: absolute;
                    top: 0px;
                    right: -10px;
                    font-family: 'Source Han Sans';
                    font-size: 20px;
                    font-weight: bold;
                  }
                }
              }
              &.data3 {
                flex: 1;
              }
              .t {
                display: flex;
                .n {
                  font-family: D-DIN;
                  font-size: 66px;
                  font-weight: bold;
                  font-variation-settings: 'opsz' auto;
                  color: #99cc00;
                }
                .u {
                  font-family: 'Source Han Sans';
                  font-size: 20px;
                  font-weight: bold;
                  font-variation-settings: 'opsz' auto;
                  color: #555555;
                  padding-top: 40px;
                  box-sizing: border-box;
                  margin-left: 5px;
                }
              }
              .b {
                margin-top: 5px;
                font-family: 'Source Han Sans';
                font-size: 16px;
                font-weight: 350;
                color: #555;
                text-align: center;
              }
            }
          }
        }
        .rgt {
          flex: 1;
          // background-color: azure;
          .bg_wrapper {
            width: 528px;
            height: 525px;
            padding-top: 30px;
            box-sizing: border-box;
            .bg {
              height: 100%;
              // outline: 1px solid #f00;
              background-image: url(../assets/img/about_bg1.png);
              background-repeat: no-repeat;
              background-size: 100%;
              border-radius: 160px 0px 160px 0px;
              position: relative;
              z-index: 100;
              &::before {
                @include radiusBox(auto, -15, -15);
              }
              &::after {
                @include radiusBox(auto, -30, -30, auto, #ededed);
              }
            }
          }
        }
      }
    }
  }
  .intro2_container {
    background: $bgColor;
    height: 1015px;
    padding-top: 60px;
    box-sizing: border-box;
    .intro2_content {
      display: flex;
      flex-direction: column;
      .t {
        width: 100%;
        height: 502px;
        display: flex;
        gap: 120px;
        // outline: 1px solid #f00;
        margin-bottom: 60px;
        .l {
          width: 525px;
          height: 502px;
          background-image: url(../assets/img/about_com.png);
          background-repeat: no-repeat;
          background-size: auto 100%;
          background-position-x: -120px;
          border-radius: 0px 167.2px 0px 150px;
          position: relative;
          z-index: 100;
          &::before {
            @include radiusBox(auto, auto, -15, -15, $primaryColor, right);
          }
          &::after {
            @include radiusBox(auto, auto, -30, -30, #ededed, right);
          }
        }
        .r {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .title {
            font-family: Source Han Sans;
            font-size: 20px;
            font-weight: bold;
            line-height: 34px;
            color: #3d3d3d;
            margin-bottom: 14px;
          }
          .d {
            font-family: Source Han Sans;
            font-size: 20px;
            font-weight: 500;
            line-height: 34px;
            color: $primaryColor;
          }
          .p {
            font-family: 思源黑体;
            font-size: 16px;
            font-weight: normal;
            line-height: 34px;
            color: #555;
            text-indent: 2em;
          }
        }
      }
      .b {
        flex: 1;
        // outline: 1px solid #0f0;
        .swiper {
          height: 100%;
          .swiper-slide {
            width: 320px;
            height: 320px;
            margin-right: 0;
            // outline: 1px solid #f00;
            // background-color: bisque;
            .img_box {
              position: relative;
              img {
                width: 100%;
                height: 100%;
              }
              .desc_box {
                width: 100%;
                height: 50px;
                position: absolute;
                bottom: 0;
                background-color: rgba($color: #000000, $alpha: 0.3);
                font-family: 'Source Han San' s;
                font-size: 18px;
                font-weight: 500;
                color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }
          }
          :deep(.swiper-pagination) {
            --swiper-pagination-bottom: 25px;
            span.pagenation_dot {
              display: inline-block;
              width: 48px;
              height: 3px;
              margin-right: 5px;
              // background-color: lighten($color: #9c0, $amount: 1%);
              // background-color: #b4e04e;
              border-radius: 0;
              &.swiper-pagination-bullet-active {
                background-color: #9c0;
              }
            }
          }
        }
      }
    }
  }
  .history_container {
    .content_box {
      height: 570px;
      // outline: 1px solid #f00;
      // background-color: #bfa;
      box-sizing: border-box;
      padding-left: 60px;
      background-image: url('@/assets/img/about_his_line.png');
      background-repeat: no-repeat;
      background-size: 1330px 288px;
      background-position: center center;
      display: flex;
      align-items: center;
      .histories_box {
        width: 100%;
        height: 288px;
        // background-color: #ffffff70;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .line {
          display: flex;
          flex-wrap: wrap;
        }
        .line1 {
          .h {
            transform: translateY(-50%);
          }
        }
        .line2 {
          width: 150%;
          .h {
            transform: translateY(50%);
          }
        }
      }
    }
  }
  .culture_container {
    height: 800px;
    background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(../assets/img/about_com_culture.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;

    .culture_content {
      height: 100%;
      // outline: 1px solid #f00;
      display: flex;
      flex-direction: column;

      .btm {
        flex: 1;
        // outline: 1px solid #0f0;
        // background-color: #9c0;
        padding-top: 60px;
        box-sizing: border-box;
        .c_boxes {
          height: 240px;
          display: flex;
          justify-content: space-between;
          .c_box {
            width: 320px;
            height: 240px;
            background-color: #fff;
            border-radius: 6px;
            padding: 0 48px;
            padding-top: 60px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 40px;
            .t {
              font-family: Source Han Sans;
              font-size: 30px;
              font-weight: bold;
              line-height: 30px;
              color: #333;
            }
          }
          .d {
            font-family: Source Han Sans;
            font-size: 16px;
            font-weight: normal;
            line-height: 34px;
            color: #555;
            text-align: center;
          }
        }
        .img_box {
          margin-top: 50px;
          display: flex;
          justify-content: space-between;
          img {
            width: 430px;
            height: 283px;
            border-radius: 6px;
          }
        }
      }
    }
  }
  .honors_container {
    height: 520px;
    background: #f5f8fa;
    .honors_content {
      .swiper {
        height: calc(520px - 110px);
        margin-top: 33px;
        .swiper-slide {
          img {
            width: 254px;
            height: 320px;
          }
        }
        :deep(.swiper-pagination) {
          --swiper-pagination-bottom: 55px;
          span.pagenation_dot {
            display: inline-block;
            width: 48px;
            height: 3px;
            margin-right: 5px;
            // background-color: lighten($color: #9c0, $amount: 1%);
            // background-color: #b4e04e;
            border-radius: 0;
            &.swiper-pagination-bullet-active {
              background-color: #9c0;
            }
          }
        }
      }
    }
  }
  .cooperator_container {
    height: 520px;
    .w {
      height: 100%;
      .img_box {
        margin-top: 76px;
        display: flex;
        gap: 43px;
        flex-wrap: wrap;
        justify-content: space-between;
        img {
          width: 300px;
          height: 114px;
        }
      }
    }
  }
}
</style>
