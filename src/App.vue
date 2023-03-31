<script setup>
import TheHeader from './components/nav/TheHeader.vue'
</script>

<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
