<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const showMain = computed(() => route.path === '/skills')

defineExpose(showMain)
</script>

<template lang="pug">
.container.mt-5
  .skills-main(v-if="showMain")
    h2.mb-4 My Skills

    .skills-block
      router-link.skill-card(to="/skills/modelling")
        i.fas.fa-user.me-2
        | Modelling
      router-link.skill-card(to="/skills/graphic-design")
        i.fas.fa-paint-brush.me-2
        | Graphic Design
      router-link.skill-card(to="/skills/hardware-maintenance")
        i.fas.fa-tools.me-2
        | Hardware Maintenance

  .skills-children
    router-view
</template>

<style scoped>
.skills-block {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
}
.skill-card {
  background: #21232a;
  color: #fff;
  padding: 2rem 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  min-width: 200px;
  justify-content: center;
  text-decoration: none;
  transition: box-shadow 0.2s, background 0.2s;
}
.skill-card:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.18);
  background: #198754;
  color: #fff;
}
</style>