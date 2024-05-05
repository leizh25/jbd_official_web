<template>
  <div id="about_page">
    <div class="banner_container">
      <div class="title">致力于电池BMS的科技型公司</div>
    </div>
    <BreadCrumbs></BreadCrumbs>
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
      font-family: Source Han Sans;
      font-size: 56px;
      font-weight: bold;
      color: #fff;
    }
  }
}
</style>
