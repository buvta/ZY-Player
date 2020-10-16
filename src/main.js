import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'modern-normalize'
import Register from './components/register'
import './lib/element/index'
// import { Table, TableColumn, Button, Select, Autocomplete, Option } from 'element-ui' 太麻烦了
import ElementUI from 'element-ui'
import Plugin from 'v-fit-columns'

Vue.use(ElementUI)
Vue.use(Plugin)
Register.registerComponents()
Vue.config.productionTip = false
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
