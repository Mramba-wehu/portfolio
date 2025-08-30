<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showMain = computed(() => route.path === '/projects')

// must be wrapped in an object
defineExpose({ showMain })
</script>

<template lang="pug">
.container.mt-5
  .projects-main(v-if="showMain")
    h1.mb-4.text-center.fw-bold.text-secondary My Projects

    ul.list-group
      li.list-group-item.d-flex.align-items-center
        i.fas.fa-calendar-check.me-3.text-success
        router-link.text-decoration-none.fw-semibold.text-secondary(to="/projects/attendance") Attendance Management System
      li.list-group-item.d-flex.align-items-center
        i.fas.fa-user.me-3.text-info
        router-link.text-decoration-none.fw-semibold.text-secondary(to="/projects/portfolio") Portfolio Website
      li.list-group-item.d-flex.align-items-center
        i.fas.fa-dumbbell.me-3.text-danger
        router-link.text-decoration-none.fw-semibold.text-secondary(to="/projects/fitness") Fitness Management System
      li.list-group-item.d-flex.align-items-center
        i.fas.fa-coins.me-3.text-warning
        router-link.text-decoration-none.fw-semibold.text-secondary(to="/projects/financial-literacy") Financial Literacy System

  .projects-children.mt-4
    router-view
</template>

<style scoped>
.list-group-item {
  transition: background-color 0.2s, transform 0.2s;
  cursor: pointer;
}

.list-group-item:hover {
  background-color: #f8f9fa;
  transform: translateX(5px);
}
</style>
