<template lang="pug">
section.about.row.py-5.justify-content-center.align-items-center
  .container
    .card.shadow-lg.border-0.bg-transparent
      .card-body.p-4
        h2.card-title.text-center.mb-4.text-secondary.fw-bold
          i.fas.fa-user-circle.me-2
          | About Me
        p.text-secondary.text-center.mb-4
          | I am a multidisciplinary creative who bridges the worlds of technology, art, and personal growth. 
          | With a strong foundation in programming languages, I craft digital experiences that are as functional as they are visually compelling. 
          | My expertise in graphic design fuels my ability to communicate ideas with precision and style, while my work in modelling and poetry brings a human, emotive dimension to every project. 
          | Guided by the principles of stoicism and a passion for fitness, I approach challenges with discipline, resilience, and clarity. 
          | Above all, I am committed to youth empowerment through tech using my skills to inspire, educate, and open doors for the next generation of innovators.

        h3.text-secondary.text-center.mb-3.fw-bold Skills & Focus
        ul.list-group.list-group-flush
          li.list-group-item.bg-transparent.border-0.d-flex.align-items-center
            i.fas.fa-code.text-success.me-3
            span.text-secondary Programming Languages
          li.list-group-item.bg-transparent.border-0.d-flex.align-items-center
            i.fas.fa-paint-brush.text-danger.me-3
            span.text-secondary Graphic Design
          li.list-group-item.bg-transparent.border-0.d-flex.align-items-center
            i.fas.fa-theater-masks.text-warning.me-3
            span.text-secondary Modelling & Poetry
          li.list-group-item.bg-transparent.border-0.d-flex.align-items-center
            i.fas.fa-dumbbell.text-primary.me-3
            span.text-secondary Stoicism & Fitness Enthusiasm
          li.list-group-item.bg-transparent.border-0.d-flex.align-items-center
            i.fas.fa-users.text-info.me-3
            span.text-secondary Youth Empowerment Through Tech
</template>

<script setup lang="ts">
// No script logic needed right now
</script>

<style scoped lang="scss">
.about {
  height: 80vh;
}

.card {
  max-width: 700px;
  margin: 0 auto;
  border-radius: 1rem;
}
</style>
