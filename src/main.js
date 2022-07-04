import { createApp } from 'vue'
import App from './App.vue'
// import 'amfe-flexible/index.js'
import './utils/rem'
import Particles from "particles.vue3";

createApp(App)
    .use(Particles)
    .mount('#app')
