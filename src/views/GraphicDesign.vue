<template lang="pug">
section#graphic-design-section.container.py-5
    .row
      .col-md-12.text-center
        h2.display-5(data-aos="fade-down") THE ART OF VISUAL STORYTELLING
        p.lead.text-muted(data-aos="fade-up" data-aos-delay="100") "Design is the silent ambassador of your brand." – Paul Rand

    .row.mt-4
      .col-md-10.offset-md-1
        p(data-aos="fade-up" data-aos-delay="200")
          | Graphic design is more than arranging shapes and colours—it’s the craft of translating ideas into visuals that speak without words. 
          | For me, it’s where creativity meets strategy, and where every pixel has a purpose. 
          | My work is rooted in the belief that design should not only look beautiful but also communicate meaning, evoke emotion, and inspire action.

    .row.mt-5
      .col-md-12
        h3.text-center(data-aos="fade-down") DESIGN PHILOSOPHY
        ul.list-unstyled(data-aos="fade-up" data-aos-delay="100")
          li.mb-2
            i.bi.bi-lightbulb-fill.text-primary.me-2
            | Clarity over clutter—stripping away the unnecessary to let the message shine.
          li.mb-2
            i.bi.bi-grid-1x2-fill.text-success.me-2
            | Consistency in branding—ensuring every element aligns with the brand’s voice.
          li.mb-2
            i.bi.bi-heart-fill.text-danger.me-2
            | Emotion-driven design—creating work that people feel, not just see.

    .row.mt-5
      .col-md-12
        h3.text-center(data-aos="fade-down") CORE SKILLS
        .row.text-center(data-aos="fade-up" data-aos-delay="100")
          .col-md-4.mb-4
            i.bi.bi-palette-fill.display-6.text-info
            h5.mt-2 Brand Identity Design
            p.text-muted logos, colour palettes, typography systems.
          .col-md-4.mb-4
            i.bi.bi-layout-text-window.display-6.text-warning
            h5.mt-2 Layout & Composition
            p.text-muted print and digital materials with balance and flow.
          .col-md-4.mb-4
            i.bi.bi-brush.display-6.text-primary
            h5.mt-2 Illustration & Iconography
            p.text-muted custom visuals that enhance storytelling.
          .col-md-4.mb-4
            i.bi.bi-instagram.display-6.text-danger
            h5.mt-2 Digital & Social Media Graphics
            p.text-muted optimized for engagement.
          .col-md-4.mb-4
            i.bi.bi-ui-checks.display-6.text-success
            h5.mt-2 UI/UX Principles
            p.text-muted visuals that are intuitive and user-friendly.

    .row.mt-5
      .col-md-12
        h3.text-center(data-aos="fade-down") CREATIVE PROCESS
        .timeline.d-flex.justify-content-between.flex-wrap.mt-4(data-aos="fade-up" data-aos-delay="100")
          .step.text-center
            i.bi.bi-search.display-6.text-secondary
            h6.mt-2 Research & Discovery
            p.text-muted brand, audience, objectives.
          .step.text-center
            i.bi.bi-lightning.display-6.text-warning
            h6.mt-2 Concept Development
            p.text-muted sketches, mood boards, brainstorming.
          .step.text-center
            i.bi.bi-pencil-square.display-6.text-info
            h6.mt-2 Design Execution
            p.text-muted Illustrator, Photoshop, Canvas.
          .step.text-center
            i.bi.bi-repeat.display-6.text-primary
            h6.mt-2 Refinement & Feedback
            p.text-muted iterate for balance of form & function.
          .step.text-center
            i.bi.bi-box-arrow-in-down.display-6.text-success
            h6.mt-2 Delivery & Integration
            p.text-muted assets ready for print, web, or social.

    .row.mt-5
      .col-md-10.offset-md-1
        h3.text-center(data-aos="fade-down") IMPACT & VISION
        p.text-muted.text-center(data-aos="fade-up" data-aos-delay="100")
          | My mission is to create visuals that empower brands and inspire communities. 
          | Whether it’s a youth empowerment campaign, a personal portfolio, or a corporate rebrand, 
          | I approach each project with the same dedication: to make design a bridge between ideas and impact.

    .row.mt-4
      .col-md-10.offset-md-1
        p.text-center.fw-bold(data-aos="fade-up" data-aos-delay="200")
          | Graphic design is my language, and every project is a conversation. 
          | Through thoughtful design, I aim to tell stories that matter—stories that connect, inspire, and leave a lasting impression.
          //- TESTIMONIAL CAROUSEL
section#testimonials-section.container.mt-5
  h3.text-center(data-aos="fade-down") What Clients Say
  .carousel.slide(data-bs-ride="carousel" id="testimonialCarousel" data-aos="fade-up" data-aos-delay="100")
    .carousel-inner
      .carousel-item.active
        .card.border-0.shadow-sm.p-4.text-center
          i.bi.bi-chat-quote-fill.display-6.text-primary.mb-3
          p.text-muted "Mramba’s designs transformed our brand presence. His work is intuitive, elegant, and deeply strategic."
          h6.mt-3.mb-0.text-dark Sarah N., NGO Director
          small.text-muted Youth Empowerment Campaign
      .carousel-item
        .card.border-0.shadow-sm.p-4.text-center
          i.bi.bi-chat-quote-fill.display-6.text-success.mb-3
          p.text-muted "Every visual told a story. His creative process is collaborative and deeply thoughtful."
          h6.mt-3.mb-0.text-dark David M., Startup Founder
          small.text-muted Tech for Good Initiative
      .carousel-item
        .card.border-0.shadow-sm.p-4.text-center
          i.bi.bi-chat-quote-fill.display-6.text-danger.mb-3
          p.text-muted "From concept to delivery, Mramba’s designs elevated our message and connected with our audience."
          h6.mt-3.mb-0.text-dark Amina K., Creative Director
          small.text-muted Cultural Arts Collective
    button.carousel-control-prev(type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev")
      span.carousel-control-prev-icon
    button.carousel-control-next(type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next")
      span.carousel-control-next-icon

//- ANIMATED SVG SECTION (HEADER DECORATION)
section#svg-header.container.text-center.mt-5
  svg(width="100" height="100" viewBox="0 0 100 100" data-aos="zoom-in")
    circle(cx="50" cy="50" r="40" stroke="blue" stroke-width="4" fill="none")
      animateTransform(attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="5s" repeatCount="indefinite")
    text(x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="12" fill="blue") Design

//- ANIMATED SVG (PROCESS SECTION DECOR)
section#svg-process.container.text-center.mt-5
  svg(width="120" height="60" viewBox="0 0 120 60" data-aos="fade-up")
    path(d="M10 30 Q60 5 110 30 Q60 55 10 30 Z" stroke="green" stroke-width="2" fill="none")
      animate(attributeName="stroke-dashoffset" from="1000" to="0" dur="4s" repeatCount="indefinite")
      //- DOWNLOADABLE PORTFOLIO BUTTON
section#download-portfolio.container.text-center.mt-5
  h3(data-aos="fade-down") Explore My Work
  p.text-muted(data-aos="fade-up" data-aos-delay="100") Download a curated selection of my graphic design projects.
  a.btn.btn-outline-primary.btn-lg.mt-3(href="#", download data-aos="zoom-in" data-aos-delay="200")
    i.bi.bi-download.me-2
    | Download Portfolio

//- CALL TO ACTION SECTION
section#cta-section.container-fluid.bg-light.py-5.mt-5
  .row.justify-content-center
    .col-md-8.text-center
      h2(data-aos="fade-down") Let’s Create Something Impactful
      p.lead.text-muted(data-aos="fade-up" data-aos-delay="100")
        | Whether you're launching a brand, telling a story, or empowering a community—I'm here to help you design with purpose.
      a.btn.btn-primary.btn-lg.mt-3(href="#contact" data-aos="zoom-in" data-aos-delay="200")
        i.bi.bi-envelope-fill.me-2
        | Get in Touch

//- OPTIONAL SVG ACCENT
section#cta-svg.container.text-center.mt-4
  svg(width="80" height="80" viewBox="0 0 80 80" data-aos="fade-up")
    path(d="M10 40 Q40 10 70 40 Q40 70 10 40 Z" stroke="purple" stroke-width="2" fill="none")
      animate(attributeName="stroke-dashoffset" from="500" to="0" dur="3s" repeatCount="indefinite")
</template>

