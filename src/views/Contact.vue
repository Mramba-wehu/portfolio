<template lang="pug">
.container.mt-5
  h2.mb-4.text-center Contact Me

  .row.justify-content-center
    .col-md-6
      ul.contact-list.mb-4
        li.contact-item
          i.fas.fa-envelope.me-2
          | Email:
          a.ms-2(
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mrambaedison1@gmail.com"
            target="_blank"
            rel="noopener"
          ) mrambaedison1@gmail.com
        li.contact-item
          i.fab.fa-linkedin.me-2
          | LinkedIn:
          a.ms-2(
            href="https://www.linkedin.com/in/Mramba Edison"
            target="_blank"
            rel="noopener"
          ) Mramba Edison
        li.contact-item
          i.fab.fa-instagram.me-2
          | Instagram:
          a.ms-2(
            href="https://instagram.com/Mramba_wehu"
            target="_blank"
            rel="noopener"
          ) @Mramba_wehu
        li.contact-item
          i.fab.fa-whatsapp.me-2
          | WhatsApp:
          a.ms-2(
            href="https://wa.me/+254740108879"
            target="_blank"
            rel="noopener"
          ) +254 740 108 879
        li.contact-item
          i.fas.fa-phone.me-2
          | Phone:
          a.ms-2(
            href="tel:+254740108879"
          ) +254 740 108 879
        li.contact-item
          i.fas.fa-map-marker-alt.me-2
          | Address:
          a.ms-2(
            href="https://www.google.com/maps/search/?api=1&query=1273+Kilifi,+Kenya"
            target="_blank"
            rel="noopener"
          ) 1273 Kilfi, Kenya

    .col-md-6
      .card.shadow-sm.p-4
        h4.mb-3.text-center Send a Message
        form(@submit.prevent="submitForm")
          .mb-3
            label.form-label(for="name") Name
            input.form-control(type="text" id="name" v-model="form.name" required)
          .mb-3
            label.form-label(for="email") Email
            input.form-control(type="email" id="email" v-model="form.email" required)
          .mb-3
            label.form-label(for="message") Message
            textarea.form-control(id="message" rows="4" v-model="form.message" required)
          button.btn.btn-primary(type="submit") Send

        div.mt-3(v-if="submitted")
          .alert.alert-success Your message has been sent! Thank you for reaching out.

</template>

<script lang="ts">
import { ref } from 'vue';
import emailjs from 'emailjs-com';

export default {
  name: 'Contact',
  setup() {
    const form = ref({
      name: '',
      email: '',
      message: '',
    });
    const submitted = ref(false);

    function submitForm() {
      emailjs.send(
        'service_b2jzgbj', // Replace with your actual service ID
        'template_njuuiyo', // Replace with your actual template ID
        {
          from_name: form.value.name,
          from_email: form.value.email,
          message: form.value.message,
        },
        'eJbH7q0M9EibuCGxK' // Replace with your actual public key
      ).then(() => {
        submitted.value = true;
        setTimeout(() => {
          submitted.value = false;
          form.value = { name: '', email: '', message: '' };
        }, 3000);
      }).catch((error) => {
        alert('Failed to send message: ' + error.text);
        console.error(error);
      });
    }

    return { form, submitted, submitForm };
  },
};
</script>

<style scoped>
.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
}
.contact-item:last-child {
  margin-bottom: 0;
}
.card {
  background: #21232a;
  color: #fff;
  border: none;
}
.form-label {
  color: #fff;
}
.form-control {
  background: #2c2f3a;
  color: #fff;
  border: 1px solid #444;
}
.form-control:focus {
  background: #23252e;
  color: #fff;
  border-color: #198754;
  box-shadow: none;
}
.btn-primary {
  background-color: #198754;
  border: none;
}
.alert-success {
  background-color: #198754;
  color: #fff;
  border: none;
}
</style>