<template lang="pug">
.container.mt-5
  h1.mb-4.text-center(data-aos="fade-down") My Projects

  ul.projects-list
    li.project-item(
      v-for="(project, index) in projects"
      :key="project.to"
      :data-aos="project.animation"
      :data-aos-delay="index * 100"
      :style="{ borderTop: `4px solid ${project.color}` }"
    )
      router-link(:to="project.to")
        .icon-wrapper(:style="{ backgroundColor: project.color }")
          i(:class="project.icon")
        h2.project-title {{ project.label }}
        p.project-desc {{ project.description }}

  //- Router view for child routes
  .projects-children.mt-4
    router-view
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const projects = [
  {
    to: '/projects/attendance',
    label: 'Attendance Management System',
    description: 'A streamlined tool for tracking and managing attendance records.',
    animation: 'fade-up',
    icon: 'fas fa-calendar-check',
    color: '#0d6efd'
  },
  {
    to: '/projects/portfolio',
    label: 'Portfolio Website',
    description: 'A personal showcase blending design, storytelling, and tech skills.',
    animation: 'zoom-in',
    icon: 'fas fa-user-circle',
    color: '#6610f2'
  },
  {
    to: '/projects/fitness',
    label: 'Fitness Management System',
    description: 'Helping users track workouts, nutrition, and progress with ease.',
    animation: 'flip-left',
    icon: 'fas fa-dumbbell',
    color: '#198754'
  },
  {
    to: '/projects/financial-literacy',
    label: 'Financial Literacy System',
    description: 'An educational platform for building money management skills.',
    animation: 'fade-right',
    icon: 'fas fa-coins',
    color: '#fd7e14'
  }
]

onMounted(() => {
  AOS.init({
    duration: 900,
    once: true,
    easing: 'ease-out-cubic'
  })
})
</script>

<style scoped lang="scss">
.projects-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1.5rem;
}

.project-item {
  background: #fff;
  border-radius: 8px;
  padding: 1.2rem 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    .icon-wrapper {
      animation: pulse-glow 1.2s infinite;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    display: block;
  }
}

.icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  transition: box-shadow 0.3s ease;
}

@keyframes pulse-glow {
  0% { box-shadow: 0 0 0px rgba(0, 0, 0, 0); }
  50% { box-shadow: 0 0 12px currentColor; }
  100% { box-shadow: 0 0 0px rgba(0, 0, 0, 0); }
}

.project-title {
  font-size: 1.2rem;
  margin: 0 0 0.4rem;
  font-weight: 600;
}

.project-desc {
  font-size: 0.95rem;
  color: #6c757d;
  margin: 0;
}
</style>
