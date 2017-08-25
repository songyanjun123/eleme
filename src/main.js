// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from './components/goods/goods.vue';
import seller from './components/seller/seller.vue';
import ratings from './components/ratings/ratings.vue';
import './common/stylus/index.styl';
import './common/icon.styl';
Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  {path: '/goods', component: goods},
  {path: '/seller', component: seller},
  {path: '/ratings', component: ratings}
];
let router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});
/* eslint-disable no-new */
let vue = new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: {App}
});
vue.$mount('#app');
router.push('/goods');
