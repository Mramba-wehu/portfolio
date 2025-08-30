<template lang="pug">
.container.mt-5
  h2.mb-4.text-center(data-aos="fade-down") My Skills

  .skills-block(data-aos="fade-up" data-aos-delay="100")
    router-link.skill-card(to="/skills/modelling")
      i.fas.fa-user.me-2
      | Modelling
    router-link.skill-card(to="/skills/graphic-design")
      i.fas.fa-paint-brush.me-2
      | Graphic Design
    router-link.skill-card(to="/skills/hardware-maintenance")
      i.fas.fa-tools.me-2
      | Hardware Maintenance

  //- Uncomment below if you want to render child routes
  // .skills-children.mt-4
  //   router-view
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-out-cubic'
  })
})
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
