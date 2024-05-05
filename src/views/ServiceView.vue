<template>
  <div class="service-view">
    <div class="header">
      <div class="title">
        <p>下载中心</p>
        <span>我们特别重视研发平台和服务平台的建设 只为了向客户提供增值服务</span>
      </div>
    </div>
    <BreadCrumbs></BreadCrumbs>

    <section class="wrapper">
      <div class="features">
        <ul>
          <li>
            <img src="../assets/img/features1.png" alt="" />
            <p>面向价值、市场驱动</p>
            <i>紧贴市场，以客户为中心，成就客户，做可靠稳定且高性价比的产品。</i>
          </li>
          <li>
            <img src="../assets/img/features2.png" alt="" />
            <p>鼓励创新、勇于创新</p>
            <i>用户需求驱动，积极发掘市场前沿信息，开拓新产品，不断丰富产品生态圈。</i>
          </li>
          <li>
            <img src="../assets/img/features3.png" alt="" />
            <p>结构化的产品开发</p>
            <i>流程规范化、设计模块化、测试标准化，形成一套高效且稳定的产品开发体系。</i>
          </li>
        </ul>
      </div>

      <!-- 问答区 -->
      <div class="question-answer">
        <p>常见问题</p>
        <ul>
          <div class="qa1">
            <li class="question">
              <i class="icon-question"><img src="../assets/img/question.png" alt="" /></i>
              <span>为什么保护板只均衡一边的电池？</span>
            </li>
            <li class="answer">
              <i class="icon-answer"><img src="../assets/img/answer.png" alt="" /></i>
              <span>保护板是开启奇偶电池均衡的，奇数和偶数电池不会同时开启均衡，这是为了减少发热量</span>
            </li>
          </div>

          <div class="qa2">
            <li class="question">
              <i class="icon-question"><img src="../assets/img/question.png" alt="" /></i>
              <span>小象APP显示的每串电池电压后面显示一个字母B是什么意思？</span>
            </li>
            <li class="answer">
              <i class="icon-answer"><img src="../assets/img/answer.png" alt="" /></i>
              <span>为什么保护板只均衡一边的电池？</span>
            </li>
          </div>

          <div class="qa3">
            <li class="question">
              <i class="icon-question"><img src="../assets/img/question.png" alt="" /></i>
              <span>为什么一串电池没有电压，相邻几串电池偏高？而量电池电压是正常的。</span>
            </li>
            <li class="answer">
              <i class="icon-answer"><img src="../assets/img/answer.png" alt="" /></i>
              <span>为什么保护板只均衡一边的电池？</span>
            </li>
          </div>

          <div class="qa4">
            <li class="question">
              <i class="icon-question"><img src="../assets/img/question.png" alt="" /></i>
              <span>为什么第一串和第二串0.几V，量电池是有电压的？</span>
            </li>
            <li class="answer">
              <i class="icon-answer"><img src="../assets/img/answer.png" alt="" /></i>
              <span>为什么保护板只均衡一边的电池？</span>
            </li>
          </div>

          <div class="qa5">
            <li class="question">
              <i class="icon-question"><img src="../assets/img/question.png" alt="" /></i>
              <span>蓝牙连接不上，蓝牙拒绝配对是为什么？</span>
            </li>
            <li class="answer">
              <i class="icon-answer"><img src="../assets/img/answer.png" alt="" /></i>
              <span>为什么保护板只均衡一边的电池？</span>
            </li>
          </div>
        </ul>
      </div>
      <div class="more">
        <router-link to="/service/more">更多 ></router-link>
      </div>
    </section>

    <div class="download">
      <div class="down-bg">
        <div class="part1">
          <p class="download-title">下载中心</p>
          <div class="show"><img src="../assets/img/download-pic.png" alt="" /></div>
          <div class="describe">
            <p>新装的智能锂电池保护板</p>
            <p>1、安卓APP或者上位机软件连接 BMS</p>
            <p>2、修改标称容量为电池实际容量，循环容量为标称容量的80%</p>
            <p>3、设置电池电压容量曲线</p>
          </div>
        </div>
      </div>

      <div class="down-bg">
        <div class="part2">
          <div class="wx-pic">
            <div class="des">
              <p>1、根据手机版本下载软件</p>
              <p>2、软件板使用资料及上位机应用程序下载链接： http://www.jiabaida.com/uploads/soft/xiaoxiangBMS.zip（此链接要用电脑打开）</p>
              <p>3、蓝牙批量量产教程 https://jingyan.baidu.com/article/29697b91e3b9fdeb21de3c6d.html</p>
            </div>
            <div class="pic">
              <div class="android wx">
                <img src="../assets/img/download-android.png" alt="" />
                <span>Android设置版下载</span>
              </div>
              <div class="ios wx">
                <img src="../assets/img/download-ios.png" alt="" />
                <span>苹果APP客户版下载</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
a {
  text-decoration: none;
  color: #555555;
}

.header {
  display: flex;
  height: 370px;
  background: url('../assets/img/service.png');
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 56px;
  font-weight: bold;
  color: #fff;
  line-height: 66px;
}

.title {
  align-self: center;
  margin: 0 auto;
}
.title p {
  text-align: center;
}

.title span {
  display: inline-block;
  width: 468px;
  height: 100px;
  margin-top: 24px;
  font-family: Source Han Sans;
  font-size: 26px;
  font-weight: normal;
  line-height: 50px;
  text-align: center;
  letter-spacing: 0px;
  font-variation-settings: 'opsz' auto;
  font-feature-settings: 'kern' on;
  color: #ffffff;
}

.wrapper {
  width: 1330px;
  margin: 0 auto;
  margin-top: 40.33px;
}

.features {
}

.features li {
  display: inline-block;
  width: 430px;
  height: 400px;
  margin-right: 20px;
  box-sizing: border-box;
  border: 1px solid #cccccc;
  border-radius: 10px 10px 80px 0px;
}

.features li:last-child {
  margin-right: 0;
}

.features li img {
  height: 217.23px;
  border-radius: 10px 10px 0px 0px;
  background: #64e1db;
}

.features li p {
  text-align: center;
  margin-top: 39.77px;
  margin-bottom: 19px;
  font-size: 24px;
  font-weight: bold;
  line-height: 20px;
  letter-spacing: 0px;
  color: #333333;
}

.features li i {
  display: block;
  width: 330px;
  height: 60px;
  margin: 0 auto;
  font-size: 16px;
  font-weight: normal;
  line-height: 30px;
}

.question-answer p {
  position: relative;
  margin: 46px 0;
  font-family: Source Han Sans;
  font-size: 30px;
  font-weight: bold;
  line-height: 34px;
}

.question-answer p::after {
  position: absolute;
  bottom: -9px;
  content: '';
  display: block;
  width: 42px;
  height: 4px;
  background: #000;
}

.question-answer div {
  margin-bottom: 20px;
}

.question-answer div:last-child {
  margin-bottom: 0;
}

.question-answer li {
  position: relative;
  display: flex;
  opacity: 1;
  font-family: Source Han Sans;
  font-size: 16px;
  font-weight: 350;
  line-height: 20px;
  color: #333333;
  padding-left: 54px;
}

.question-answer .question {
  height: 50px;
  background: #f5f8fa;
  border-radius: 4px 4px 0px 0px;
}

.question-answer .answer {
  height: 60px;
  background: #ffffff;
  box-sizing: border-box;
  border-width: 0px 1px 1px 1px;
  border-radius: 0px 0px 4px 4px;
  border-style: solid;
  border-color: #d8d8d8;
}

.question-answer li span {
  display: inline-block;
  align-self: center;
}

.question-answer li i {
  position: absolute;
  left: 15px;
  top: 13px;
  width: 24px;
  height: 24px;
  border-radius: 2px;
  opacity: 1;
  text-align: center;
}

.question-answer li img {
  position: absolute;
  left: 4px;
  top: 4px;
  width: 16px;
  height: 16px;
}

.question-answer .icon-question {
  background: #f33b3b;
}

.question-answer .icon-answer {
  top: 18px;
  background: #99cc00;
}

.more {
  width: 160px;
  height: 46px;
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 46px;
  opacity: 1;
  box-sizing: border-box;
  border: 1.33px solid #ebebeb;
  text-align: center;
}

.more a {
  font-family: 思源黑体;
  font-size: 16px;
  font-weight: normal;
  line-height: 46px;
  letter-spacing: 0px;
  color: #666666;
}

.download {
  width: 100%;
  height: 1000px;
  margin: 45px 0 6px 0;
  opacity: 1;
  font-family: 思源黑体;
  font-size: 16px;
  font-weight: normal;
  line-height: 36px;
  letter-spacing: 0px;
  font-variation-settings: 'opsz' auto;
  color: #555555;
}

.down-bg {
  background: #f5f8fa;
}
.part1 {
  width: 1330px;
  height: 580px;
  margin: 0 auto;
  margin-bottom: 20px;
}

.download-title {
  font-family: Source Han Sans;
  font-size: 30px;
  font-weight: bold;
  line-height: 34px;
  font-feature-settings: 'kern' on;
  color: #333333;
  margin-bottom: 55px;
  padding-top: 58px;
}

.download-title::after {
  margin-top: 9px;
  content: '';
  display: block;
  width: 42px;
  height: 4px;
  background: #333;
}

.part2 {
  width: 1330px;
  height: 400px;
  margin: 0 auto;
  margin-bottom: 6px;
}

.part1 .show {
  display: inline-block;
  width: 608px;
  height: 376px;
  border-radius: 14.4px;
  opacity: 1;
  background: #000000;
  box-shadow: 0px 2.4px 6px 0px rgba(0, 0, 0, 0.302);
  margin-left: 40px;
}

.part1 .describe {
  float: right;
  margin-top: 91px;
  width: 450px;
  height: 144px;
}

.part2 .des {
  display: inline-block;
  width: 573px;
  height: 216px;
  margin-left: 40px;
  margin-top: 84px;
}

.wx {
  width: 200px;
  display: inline-block;
  text-align: center;
}

.pic {
  float: right;
  margin-top: 92px;
  margin-right: 40px;
}
.pic img {
  width: 200px;
  height: 200px;
}
.pic .android {
  margin-right: 111px;
}
</style>
