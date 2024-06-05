import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import '@/assets/css/main.css';


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from "@/utilities/i18n/i18n.js";
import App from './App.vue'
import router from './router/index.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
