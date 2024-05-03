<template>
  <div id="header">
    <ul>
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/about">关于我们</router-link>
      </li>
      <li>
        <router-link to="/innovation">技术创新</router-link>
      </li>
      <li>
        <router-link to="/production">产品中心</router-link>
      </li>
      <li>
        <router-link to="/service">服务支持</router-link>
      </li>
      <li>
        <router-link to="/news">新闻中心</router-link>
      </li>
      <li>
        <router-link to="/contact">联系我们</router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss">
#header {
  height: 100px;
  background-color: pink;
}
ul {
  display: flex;
  gap: 50px;
}
</style>
