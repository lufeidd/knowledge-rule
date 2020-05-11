import Vue from 'vue'
import App from './App.vue'
import 'vant/lib/index.css';
import router from './router'
// import Vant from 'vant';

Vue.config.productionTip = false

import { Button,Cell,CellGroup,RadioGroup,Radio,Popup,Step,Steps,Tab,Tabs,Search,Tag,Picker  } from 'vant';

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)


// 字体图标
import './style/iconfont/iconfont'

// 按钮
// import 'vant/lib/button/style';
Vue.use(Button);
Vue.use(Cell).use(CellGroup);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Popup);
Vue.use(Step).use(Steps);
Vue.use(Tab).use(Tabs);
Vue.use(Search);
Vue.use(Tag);
Vue.use(Picker);

import 'vant/lib/index.css';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
