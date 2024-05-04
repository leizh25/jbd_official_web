<template>
  <div id="contactView">
    <div class="banner"></div>
    <div class="contact_container">
      <div class="num_box w">
        <div class="num_desc" v-for="(item, index) in info" :key="index">
          <div class="icon_box" :style="{ backgroundImage: `url(${item.icon})` }"></div>
          <div class="desc_box">
            <div class="desc">{{ item.title }}</div>
            <div class="num">{{ item.content }}</div>
          </div>
        </div>
      </div>
      <div class="address_box w">
        <div class="map_contaienr"></div>
        <div class="addr_list_wrapper">
          <div class="addr_list">
            <div class="addr_box" v-for="(item, idnex) in addrList" :key="idnex">
              <div class="left">
                <div class="icon_box"></div>
              </div>
              <div class="rgt">
                <div class="title">{{ item.title }}</div>
                <div class="content">{{ item.content }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="message_container">
      <div class="w">
        <div class="title">在线留言</div>
        <div class="form_wrapper">
          <form @submit.prevent="submitForm">
            <div class="text_form_item">
              <div class="tip">
                <label>需求</label>
              </div>
              <textarea type="textarea" required placeholder="请输入留言内容" v-model="form.content" rows="7" autocomplete="false"></textarea>
            </div>
            <div class="form_grid">
              <div class="form_item">
                <div class="tip">
                  <label>联系人</label>
                </div>
                <input type="text" placeholder="姓名" autocomplete="false" v-model="form.contact" />
              </div>
              <div class="form_item">
                <div class="tip">
                  <label>手机号</label>
                </div>
                <input type="text" placeholder="请输入手机号" required autocomplete="false" v-model="form.phone" />
              </div>
              <div class="form_item">
                <div class="tip">
                  <label>Email</label>
                </div>
                <input type="text" placeholder="请输入Email地址" autocomplete="false" v-model="form.email" />
              </div>
              <div class="form_item captcha">
                <div class="tip">
                  <label>验证码</label>
                </div>
                <div class="input_wrapper">
                  <input type="text" placeholder="请输入验证码" required autocomplete="false" v-model="form.captcha" />
                  <div class="captcha_box">
                    <img :src="getCaptcha" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="btn_wrapper">
              <button type="submit" @click="submitForm">提交</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// #region 配置
const info = [
  {
    icon: '/src/assets/img/contact_phone.svg',
    title: '全国服务热线:',
    content: '0769-82960405'
  },
  {
    icon: '',
    title: '总机:',
    content: '0769-82960405-601'
  },
  {
    icon: '',
    title: '传真:',
    content: '82960405'
  },
  {
    icon: '',
    title: '销售:',
    content: '0769-82960405-602'
  },
  {
    icon: '',
    title: '售后:',
    content: '0769-82960405-605'
  }
];
const addrList = [
  {
    title: '深圳总部：',
    content: '广东省深圳市龙华区大浪街道福龙路与华兴路交汇处恒大时尚谷6栋B区806-807室'
  },
  {
    title: '东莞工厂：',
    content: '广东省东莞市塘厦镇莲湖宝源路49号'
  },
  {
    title: '江西工厂：',
    content: '江西省吉安市吉水县金滩工业园区军工大道19号'
  }
];
const getCaptcha = import.meta.env.VITE_APP_BASE_API + '/comments/info/captcha';
const form = reactive({
  content: '',
  contact: '',
  phone: '',
  email: '',
  captcha: ''
});
const rules = {
  content: {},
  contact: {},
  phone: {}
};
const submitForm = () => {};
// #endregion 配置
</script>
<style lang="scss" scoped>
@import '../style/mixin.scss';
#contactView {
  @include w(100%);
  // #region
  .banner {
    width: 100%;
    height: 370px;
    background: url(../assets/img/contact_banner.png) no-repeat;
    background-size: 100% 200%;
    background-position: left bottom;
  }
  .contact_container {
    width: 100%;
    height: 833px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f7f7f7;
    .num_box {
      width: 1330px;
      height: 307px;
      border-radius: 8px;
      opacity: 1;
      background: #fff;
      transform: translateY(-50%);
      padding: 0 115px;
      padding-top: 70px;
      padding-bottom: 40px;
      box-sizing: border-box;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr 1fr;
      .num_desc {
        height: 95px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        // outline: 1px solid rgba(0, 0, 0, 0.2);

        .icon_box {
          width: 54px;
          height: 54px;
          background-repeat: no-repeat;
        }
        .desc_box {
          // outline: 1px solid rgba(0, 0, 0, 0.1);
          width: 250px;
          height: 60px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .desc {
            font-family: 思源黑体;
            font-size: 26px;
            font-weight: normal;
            color: #555;
          }
          .num {
            font-family: 'D-DIN';
            font-size: 24px;
            font-weight: bold;
            color: #333;
          }
        }
      }
    }
    .address_box {
      height: 578px;
      background: #fff;
      border-radius: 8px;
      transform: translateY(calc(-52px - 25px));
      padding: 39px 172px 39px 115px;
      box-sizing: border-box;
      display: flex;
      gap: 110px;
      .map_contaienr {
        width: 400px;
        height: 100%;
        outline: 1px solid #f00;
      }
      .addr_list_wrapper {
        flex: 1;
        display: flex;
        align-items: center;
        .addr_list {
          display: flex;
          flex-direction: column;
          // display: grid;
          // grid-template-rows: repeat(3, 1fr);
          .addr_box {
            flex: 1;
            flex-grow: 1;
            width: 100%;
            max-height: 150px;
            display: flex;
            gap: 6px;
            .left {
              .icon_box {
                // width: 30px;
                // height: 30px;
                // background-image: url(../assets/img/locate.svg);
                // background-repeat: no-repeat;
                // background-size: 100%;
              }
            }
            &:last-child .rgt {
              border-bottom: none;
            }
            .rgt {
              width: 100%;
              height: 146px;
              border-bottom: 1px solid #d8d8d8;
              box-sizing: border-box;
              display: flex;
              flex-direction: column;
              justify-content: center;
              .title {
                font-family: 'Source Han Sans';
                font-size: 26px;
                font-weight: bold;
                line-height: 34px;
                color: #333;
                position: relative;
                &::before {
                  content: '';
                  display: block;
                  width: 30px;
                  height: 30px;
                  background-image: url(../assets/img/locate.svg);
                  background-repeat: no-repeat;
                  background-size: 100%;
                  position: absolute;
                  left: -35px;
                }
              }
              .content {
                font-family: 思源黑体;
                font-size: 18px;
                font-weight: normal;
                line-height: 28px;
                color: #555;
              }
            }
          }
        }
      }
    }
  }
  // #endregion
  .message_container {
    // height: 750px;
    @include h(750px);
    display: flex;
    justify-content: center;
    .w {
      width: 820px;
      .title {
        height: 113px;
        line-height: 113px;
        font-family: 'Source Han Sans';
        font-size: 28px;
        font-weight: 500;
        text-align: center;
      }
      .form_wrapper {
        width: 100%;
        input,
        textarea,
        button {
          border: none;
          outline: none;
          background-color: #f1f1f1;
        }
        @mixin required {
          position: relative;
          &::before {
            content: ' *';
            color: #f00;
            position: absolute;
            right: -10px;
          }
        }
        .text_form_item {
          display: flex;
          flex-direction: column;
          .tip {
            height: 28px;
            line-height: 28px;
            font-family: 'Source Han Sans';
            font-size: 14px;
            font-weight: 350;
            color: #333;
            label {
              @include required();
            }
          }
          textarea {
            border-radius: 4px;
            font-family: 'Source Han Sans';
            font-size: 14px;
            font-weight: 350;
            line-height: 28px;
            padding: 10px;
            box-sizing: border-box;
            resize: none;
            &::placeholder {
              color: #aaa;
            }
          }
        }
        .form_grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;

          .form_item {
            width: 366px;
            height: 100px;
            display: flex;
            flex-direction: column;
            justify-content: end;
            &:nth-child(2),
            &:nth-child(4) {
              .tip label {
                @include required();
              }
            }
            &.captcha {
              .input_wrapper {
                display: flex;
                gap: 8px;
                input {
                  width: 246px;
                  border-radius: 4px;
                }
                .captcha_box {
                  width: 112px;
                  img {
                    width: 100%;
                    height: 46px;
                  }
                }
              }
            }
            .tip {
              font-family: 'Source Han Sans';
              font-size: 14px;
              font-weight: 350;
              color: #333;
              line-height: 28px;
            }
            input {
              height: 46px;
              border-radius: 4px;
              background: #f1f1f1;
              padding-left: 11px;
              font-family: 'Source Han Sans';
              font-size: 14px;
              font-weight: 350;
              line-height: 28px;
            }
          }
        }
        .btn_wrapper {
          margin-top: 40px;
          text-align: center;
          button {
            width: 260px;
            height: 50px;
            line-height: 50px;
            background-color: #9c0;
            border-radius: 6px;
            font-family: Source Han Sans;
            font-size: 20px;
            font-weight: normal;
            color: #fff;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
