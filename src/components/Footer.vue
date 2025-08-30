<template lang="pug">
footer.footer.bg-dark.text-center.py-3.text-light
  .row.justify-content-center.align-items-center
    p.mb-0.fit
      | &copy; 2025 Wehu Portfolio. All rights reserved.
    .social-icons.fit.row.justify-content-center.align-items-center
      .col-auto
        a.text-light.mx-2(href="https://github.com/Mramba-wehu" target="_blank" rel="noopener")
          i.fab.fa-github.me-2
          span.ml-2 GitHub
      .col-auto
        a.text-light.mx-2(href="https://www.linkedin.com/in/mramba-edison-b8b97a185?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener")
          i.fab.fa-linkedin.me-2
          span.ml-2 LinkedIn
      .col-auto
        a.text-light.mx-2(href="https://www.instagram.com/Mramba_wehu/" target="_blank" rel="noopener")
          i.fab.fa-instagram.me-2
          span.ml-2 Instagram
</template>

<style scoped>
.fit {
  width: fit-content;
  height: fit-content;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 999;.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 999;
}
}
a {
  text-decoration: none;
}
</style>