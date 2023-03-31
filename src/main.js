import { createApp } from 'vue'
import { createPinia } from 'pinia'
import BaseBadge from './components/UI/BaseBadge.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('base-badge', BaseBadge)

app.mount('#app')
