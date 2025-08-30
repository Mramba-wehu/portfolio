<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

defineExpose({RouterView, Header, Footer});
</script>

<template lang="pug">
Header
main.container.mt-2.text-light
  RouterView
Footer
</template>