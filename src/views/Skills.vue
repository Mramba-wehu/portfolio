<template lang="pug">
.container.mt-5
  template(v-if="isRoot")
    h2.mb-4.text-center(data-aos="fade-down") My Skills

    .skills-block(data-aos="fade-up" data-aos-delay="100")
      router-link.skill-card(
        v-for="(skill, index) in skills"
        :key="skill.to"
        :to="skill.to"
        :data-aos="skill.animation"
        :data-aos-delay="index * 100"
      )
        i(:class="skill.icon + ' me-2'")
        | {{ skill.label }}

  .skills-children.mt-4
    router-view
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'

const skills = [
  {
    to: '/skills/modelling',
    label: 'Modelling',
    icon: 'fas fa-user',
    animation: 'fade-up'
  },
  {
    to: '/skills/graphic-design',
    label: 'Graphic Design',
    icon: 'fas fa-paint-brush',
    animation: 'zoom-in'
  },
  {
    to: '/skills/hardware-maintenance',
    label: 'Hardware Maintenance',
    icon: 'fas fa-tools',
    animation: 'fade-right'
  }
]

const route = useRoute()
const isRoot = computed(() => route.path === '/skills')

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-out-cubic'
  })
})

defineExpose({ skills, isRoot })
</script>

<style scoped>
.skills-block {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
  flex-wrap: wrap;
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
  transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
}

.skill-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.18);
  background: #198754;
  color: #fff;
}
</style>
