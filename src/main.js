import { createApp } from 'vue'
import App from './App.vue'
import AppButton from './components/AppButton'
import '@/assets/styles/main.scss'

const app = createApp(App)
app.component('AppButton', AppButton)

app.mount('#app')
