import { createApp } from 'vue'
import App from './App.vue'

// tailwind
import './assets/css/index.css'
// fullpage
import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

createApp(App).use(VueFullPage).mount('#app')
