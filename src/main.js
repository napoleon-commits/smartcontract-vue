import Vue from 'vue'
import SmartContract from './components/SmartContract.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(SmartContract),
}).$mount('#app')
