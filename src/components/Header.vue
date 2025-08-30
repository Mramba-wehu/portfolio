<template lang="pug">
nav.navbar.navbar-expand-lg.navbar-dark.bg-dark.fixed-top
  .container-fluid
    router-link.navbar-brand(to="/") Edison Mramba

    button.navbar-toggler(type="button",
      data-bs-toggle="collapse",
      data-bs-target="#navbarNav",
      aria-controls="navbarNav",
      aria-expanded="false",
      aria-label="Toggle navigation"
    )
      span.navbar-toggler-icon

    .collapse.navbar-collapse#navbarNav
      ul.navbar-nav.ms-auto
        li.nav-item
          router-link.nav-link(to="/" active-class="active") Home
        li.nav-item
          router-link.nav-link(to="/about" active-class="active") About
        li.nav-item
          router-link.nav-link(to="/projects" active-class="active") Projects
        li.nav-item
          router-link.nav-link(to="/skills" active-class="active") Skills
        li.nav-item
          router-link.nav-link(to="/contact" active-class="active") Contact
</template>

<style scoped>
.navbar {
  margin-bottom: 20px;
}
</style>