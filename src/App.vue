<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

defineExpose({RouterView, Header, Footer});
</script>

<template lang="pug">
Header
main.container.mt-5.py-2.text-light.portfolio
  RouterView
Footer
</template>
<style scope>
  main.portfolio {
    height: 85vh;
    overflow-x: hidden;
    overflow-y: scroll;
  }
</style>
