import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import router from "./router/index.js";
import audio from 'vue-mobile-audio'


const app=createApp(App)
app.use(ElementPlus)
app.use(audio)
app.use(router)
app.mount('#app')
