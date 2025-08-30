import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // Import the router

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

const app = createApp(App)
app.use(router) // Use the router
app.mount('#app')
