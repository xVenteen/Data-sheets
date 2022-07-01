import { createApp } from 'vue'
import App from './App.vue'
// import 'amfe-flexible/index.js'
import './utils/rem'
import animate from 'animate.css';

createApp(App)
    .use(animate)
    .mount('#app')
