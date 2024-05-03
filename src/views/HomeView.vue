<script setup lang="ts"></script>

<template>
  <main>
    <div style="height: 500px; background-color: aqua; margin-bottom: 20px" v-for="i in 10" :key="i" v-slide-in></div>
  </main>
</template>
