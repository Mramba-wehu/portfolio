<template lang="pug">
section#portfolio-article.container.py-5
  .row
    .col-md-12.text-center
      h2.display-5(data-aos="fade-down") My Portfolio: Engineering with Purpose
      p.lead.text-muted(data-aos="fade-up" data-aos-delay="100") A fusion of software engineering, cybersecurity, and creative web development.

  .row.mt-4
    .col-md-10.offset-md-1
      p(data-aos="fade-up" data-aos-delay="200")
        | I’m a software engineer by profession, with a passion for building intuitive web experiences and exploring the ethical dimensions of cybersecurity. 
        | My portfolio reflects a balance of technical depth, creative design, and a commitment to impact.

  .row.mt-5
    .col-md-12
      h3.text-center(data-aos="fade-down") Core Skills
      ul.list-unstyled(data-aos="fade-up" data-aos-delay="100")
        li.mb-2
          i.bi.bi-code-slash.text-primary.me-2
          | Frontend Development – Vue, Pug, TypeScript, SCSS, Bootstrap.
        li.mb-2
          i.bi.bi-bug.text-danger.me-2
          | Troubleshooting & Debugging – Syntax, semantic, and layout fixes.
        li.mb-2
          i.bi.bi-shield-lock.text-success.me-2
          | Cybersecurity Awareness – Ethical hacking, secure coding practices.
        li.mb-2
          i.bi.bi-tools.text-warning.me-2
          | Hardware Maintenance – Printers, computers, phones, and TVs.
        li.mb-2
          i.bi.bi-person-bounding-box.text-info.me-2
          | Modeling – Youth empowerment, cultural representation, and storytelling through visual identity.

  .row.mt-5
    .col-md-12
      h3.text-center(data-aos="fade-down") Featured Projects
      ul.list-unstyled(data-aos="fade-up" data-aos-delay="100")
        li.mb-2
          i.bi.bi-window.text-info.me-2
          | Animated Portfolio – Built with Vue, Bootstrap Icons, and AOS for storytelling
</template>

<style scoped>
#portfolio-article {
  overflow-x: hidden;
}
</style>
