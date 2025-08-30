<template lang="pug">
section.about.row.py-5.justify-content-center.align-items-center
  .container
    .card.shadow-lg.border-0.bg-transparent
      .card-body.p-4
        h2.card-title.text-center.mb-4.text-secondary.fw-bold
          i.fas.fa-user-circle.me-2
          | About Me
        p.text-secondary.text-center.mb-4
          | I'm a creative developer blending code, design, and personal branding.

        ul.list-group.list-group-flush
          li.list-group-item.bg-transparent.border-0.d-flex.align-items-center
            i.fas.fa-code.text-success.me-3
            span.text-secondary React, TypeScript, SCSS, Framer Motion
          li.list-group-item.bg-transparent.border-0.d-flex.align-items-center
            i.fas.fa-paint-brush.text-danger.me-3
            span.text-secondary Graphic Design & Modeling
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
