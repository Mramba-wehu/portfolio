<template lang="pug">
section.financial-literacy-section
  .container
    h2.section-title(data-aos="fade-up") Financial Literacy System
    h2.section-title(data-aos="fade-up") Empowering Financial Literacy Through Technology
    h3.section-subtitle(data-aos="fade-up" data-aos-delay="100") Introducing My Financial Management System

    p.section-intro(data-aos="fade-up" data-aos-delay="200")
      | In today’s fast-paced world, financial literacy is no longer a luxury—it’s a necessity. This inspired me to build a 
      strong Financial Management System 
      | that tracks income, expenses, and educates users on budgeting, saving, and long-term planning.

    .content-block(data-aos="fade-up" data-aos-delay="300")
      h4 Why Financial Literacy Matters
      ul
        li Make informed decisions about spending and saving
        li Avoid debt traps and financial stress
        li Plan for future goals like education, business, or retirement
        li Build generational wealth and resilience

    .content-block(data-aos="fade-up" data-aos-delay="400")
      h4 About the System
      ul
        li Dashboard Overview: Visual summaries of income, expenses, and savings goals
        li Budget Planner: Set monthly limits and track spending categories
        li Savings Tracker: Monitor progress toward short- and long-term goals
        li Financial Tips: Bite-sized advice on budgeting, investing, and debt management
        li User-Centric Design: Responsive, intuitive, and accessible across devices

    .content-block(data-aos="fade-up" data-aos-delay="500")
      h4 Technical Highlights
      ul
        li Vue + Pug for dynamic, component-based architecture
        li SCSS + Bootstrap Icons for polished UI and visual clarity
        li AOS (Animate on Scroll) for engaging transitions
        li Modular Codebase for scalability and future feature integration

    .content-block(data-aos="fade-up" data-aos-delay="600")
      h4 Purpose & Impact
      p
        | This project reflects my belief that financial literacy is a form of empowerment. By combining technical precision with educational value, I aim to inspire users to take control of their financial journey.

    .content-block(data-aos="fade-up" data-aos-delay="700")
      h4 What’s Next
      ul
        li Multi-user support for families and small groups
        li Integration with mobile payment platforms
        li Gamified learning modules for youth engagement
        li Offline access for low-connectivity regions

    .content-block.development-note(data-aos="fade-up" data-aos-delay="800")
      p
        | 🚧 This financial management system is currently under active development. New features, refinements, and user feedback integrations are on the way to ensure it delivers maximum impact and usability.
</template>

<script lang="ts" setup>
// Static content for now; interactivity can be added later
</script>

<style lang="scss" scoped>
.financial-literacy-section {
  padding: 4rem 1rem;
  background: #f9f9f9;

  .container {
    max-width: 960px;
    margin: 0 auto;
  }

  .section-title {
    font-size: 2.2rem;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }

  .section-subtitle {
    font-size: 1.4rem;
    color: #34495e;
    margin-bottom: 2rem;
  }

  .section-intro {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 2rem;
  }

  .content-block {
    margin-bottom: 2rem;

    h4 {
      font-size: 1.2rem;
      color: #2c3e50;
      margin-bottom: 0.5rem;
    }

    ul {
      padding-left: 1.2rem;

      li {
        margin-bottom: 0.5rem;
        color: #333;
      }
    }

    p {
      font-size: 1rem;
      color: #444;
    }
  }

  .development-note {
    background: #fff3cd;
    border-left: 4px solid #ffc107;
    padding: 1rem;
    border-radius: 6px;

    p {
      font-weight: 500;
      color: #856404;
    }
  }
}
</style>
