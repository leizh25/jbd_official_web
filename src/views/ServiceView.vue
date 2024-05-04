<template>
  <div class="service-view">
    <div class="header">
      <div class="title">
        <strong>下载中心</strong>
      </div>
    </div>
    <div class="nav">
      <div class="nav-location">
        <i class="icon-location"><img src="../assets/img/icon-location.png" alt="" /></i>
        <span>首页 - 服务支持</span>
      </div>
    </div>

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
              <i class="icon-question"></i>
              <span>为什么保护板只均衡一边的电池？</span>
            </li>
            <li class="answer">
              <i class="icon-answer"></i>
              <span>保护板是开启奇偶电池均衡的，奇数和偶数电池不会同时开启均衡，这是为了减少发热量</span>
            </li>
          </div>

          <div class="qa2">
            <li class="question">
              <i class="icon-question"></i>
              <span>小象APP显示的每串电池电压后面显示一个字母B是什么意思？</span>
            </li>
            <li class="answer">
              <i class="icon-answer"></i>
              <span>为什么保护板只均衡一边的电池？</span>
            </li>
          </div>

          <div class="qa3">
            <li class="question">
              <i class="icon-question"></i>
              <span>为什么一串电池没有电压，相邻几串电池偏高？而量电池电压是正常的。</span>
            </li>
            <li class="answer">
              <i class="icon-answer"></i>
              <span>为什么保护板只均衡一边的电池？</span>
            </li>
          </div>

          <div class="qa4">
            <li class="question">
              <i class="icon-question"></i>
              <span>为什么第一串和第二串0.几V，量电池是有电压的？</span>
            </li>
            <li class="answer">
              <i class="icon-answer"></i>
              <span>为什么保护板只均衡一边的电池？</span>
            </li>
          </div>

          <div class="qa5">
            <li class="question">
              <i class="icon-question"></i>
              <span>蓝牙连接不上，蓝牙拒绝配对是为什么？</span>
            </li>
            <li class="answer">
              <i class="icon-answer"></i>
              <span>为什么保护板只均衡一边的电池？</span>
            </li>
          </div>
        </ul>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
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

.wrapper {
  width: 1330px;
  margin: 0 auto;
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
  margin: 46px 0;
  font-family: Source Han Sans;
  font-size: 30px;
  font-weight: bold;
  line-height: 34px;
}

.question-answer li {
  display: flex;
  height: 50px;
  border-radius: 4px 4px 0px 0px;
  opacity: 1;
  background: #f5f8fa;
  font-family: Source Han Sans;
  font-size: 16px;
  font-weight: 350;
  line-height: 20px;
  color: #333333;
}

.question-answer li span {
  display: inline-block;
  align-self: center;
}

.question-answer div {
  margin-bottom: 20px;
}

.icon-question {
}
</style>
