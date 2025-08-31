<template lang="pug">
    .row.justify-content-center.align-items-center.py-5
        .col-md-8
            h1 Greetings
            p I am Mramba Edison.
            p I'm a software developer, graphic designer and a model.
            p 
                button.btn.btn-outline-primary(
                    @click="$router.push('/projects')"
                ) View My Work  
        .col-md-4
            img(src="/profile.png" alt="Profile Image" class="img-fluid")
</template>

<style>
.img-fluid {
  background-color: #21232a; /* match your body background */
  border-radius: 12px;
  padding: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

</style>
