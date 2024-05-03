<template>
  <div id="header" :class="{ float: $route.path === '/' }">
    <ul class="w" :class="{ colorf: colorFArr.includes($route.path) }">
      <div class="logo"></div>
      <li :class="{ active: $route.path === '/' }">
        <router-link to="/">首页</router-link>
      </li>
      <li :class="{ active: $route.path === '/about' }">
        <router-link to="/about">关于我们</router-link>
      </li>
      <li :class="{ active: $route.path === '/innovation' }">
        <router-link to="/innovation">技术创新</router-link>
      </li>
      <li :class="{ active: $route.path === '/production' }">
        <router-link to="/production">产品中心</router-link>
      </li>
      <li :class="{ active: $route.path === '/service' }">
        <router-link to="/service">服务支持</router-link>
      </li>
      <li :class="{ active: $route.path === '/news' }">
        <router-link to="/news">新闻中心</router-link>
      </li>
      <li :class="{ active: $route.path === '/contact' }">
        <router-link to="/contact">联系我们</router-link>
      </li>
      <li>
        <div class="earth">
          <img src="../assets/img/earth.svg" alt="" />
        </div>
        <!-- <div class="earth_icon">
        </div> -->
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup></script>
<script lang="ts" setup>
const colorFArr = ['/', '/production/detail', '/news/detail'];
</script>
<style lang="scss" scoped>
#header {
  width: 100%;
  height: 80px;
  line-height: 80px;
  display: flex;
  justify-content: center;
  &.float {
    position: fixed;
  }
  ul {
    display: flex;
    justify-content: center;
    gap: 48px;
    position: relative;
    color: #333;
    box-sizing: border-box;
    &.colorf {
      color: #fff;
    }
    .logo {
      width: 190px;
      height: 42px;
      background-image: url(../assets/img/logo.svg);
      background-repeat: no-repeat;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    li {
      &.active {
        color: $primaryColor;
        border-bottom: 3px solid $primaryColor;
      }
      a {
        color: inherit;
        text-decoration: none;
        font-family: 'Source Han Sans';
        font-size: 15px;
        font-weight: bold;
      }
      &:last-child {
        display: flex;
        align-items: center;
        .earth {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 22px;
          height: 22px;
          transform: translateX(-8px);
          cursor: pointer;
        }
      }
    }
  }
}
</style>
