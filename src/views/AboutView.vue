<template>
  <div id="about_page">
    <div class="banner_container">
      <div class="title">致力于电池BMS的科技型公司</div>
    </div>
    <BreadCrumbs></BreadCrumbs>
    <div class="intro_container w100">
      <div class="content_container w">
        <div class="title_box">
          <div class="title">公司简介</div>
        </div>
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
    <div class="intro2_container w100">
      <div class="intro2_content">
        <div class="t">
          <div class="l"></div>
          <div class="r"></div>
        </div>
        <div class="b"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>

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
      outline: 1px solid #f00;
      display: flex;
      flex-direction: column;
      .title_box {
        height: 105px;
        padding-top: 60px;
        box-sizing: border-box;
        background-color: aqua;
        .title {
          font-family: 'Source Han Sans';
          font-size: 30px;
          font-weight: bold;
          color: #333;
          position: relative;
          &::before {
            content: '';
            display: block;
            width: 42px;
            height: 4px;
            background-color: #333;
            position: absolute;
            bottom: -15px;
          }
        }
      }
      .content_box {
        flex: 1;
        background-color: rgba(226, 177, 177, 0.205);
        display: flex;
        gap: 92px;
        .left {
          width: 710px;
          outline: 1px solid #0f0;
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
          background-color: azure;
          .bg_wrapper {
            width: 528px;
            height: 525px;
            padding-top: 30px;
            box-sizing: border-box;
            .bg {
              height: 100%;
              outline: 1px solid #f00;
              background-image: url(../assets/img/about_bg1.png);
              background-repeat: no-repeat;
              background-size: 100%;
              border-radius: 160px 0px 160px 0px;
              position: relative;
              z-index: 100;
              @mixin radiusBox($bottom, $right, $color: $primaryColor) {
                content: '';
                display: block;
                width: 414px;
                height: 468px;
                border-radius: 167.2px 0px 150px 0px;
                border: 1px solid $color;
                position: absolute;
                bottom: $bottom + px;
                right: $right + px;
                z-index: -1;
              }
              &::before {
                @include radiusBox(-15, -15);
              }
              &::after {
                @include radiusBox(-30, -30, #ededed);
              }
            }
          }
        }
      }
    }
  }
  .intro2_container {
    background: $bgColor;
    height: 1280px;
    padding-top: 60px;
    box-sizing: border-box;
    .intro2_content {
      .t {
        .l {
          width: 525px;
          height: 502px;
        }
      }
    }
  }
}
</style>
