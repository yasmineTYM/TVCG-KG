import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import VueVega from 'vue-vega'

/* these are necessary styles for vue flow */
// import 'vue-flow/core/dist/style.css';

/* this contains the default theme, these are optional styles */
// import 'vue-flow/core/dist/theme-default.css';
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
// app.use(VueVega)
app.use(vuetify).mount('#app')
// app.mount('#app')

