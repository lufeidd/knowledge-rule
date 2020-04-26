// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
// vant
import 'vant/lib/index.css'
// 字体图标
import './style/iconfont/iconfont'

Vue.config.productionTip = false

import { Button, Cell, CellGroup, RadioGroup, Radio, Popup, Step, Steps, Tab, Tabs, Search, Tag } from 'vant'

Vue.use(Button)
Vue.use(Cell).use(CellGroup)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Popup)
Vue.use(Step).use(Steps)
Vue.use(Tab).use(Tabs)
Vue.use(Search)
Vue.use(Tag)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
